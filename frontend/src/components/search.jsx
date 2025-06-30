import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios"

const Search = () => {
    const [query, setQuery] = useState(""); //handles the search bar input
    const[results, setResults] = useState([]);  // handles the search results
    const[error, setError] = useState(null); //handles any ApI errpors
    const [category, setCategory] = useState("");//creates a state variable and the default variable
    const [validCategories, setValidCategories] = useState([]);//vaild search categories fetched from my routes
    const [loading, setLoading] = useState(false); //handles the loading state when the user clicks the search button
    //understand the () with const and differnt ways to use useState

  // Load valid Jikan categories from Flask on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/search/valid-categories")
      .then((res) => setValidCategories(res.data.valid_categories || []))
      .catch((err) => { //
        console.error("Failed to fetch categories", err);
        setError("Could not load category options");
      });
  }, []);

    const handleSearch = async (e) => { // handles the form of submmissopn when the user clicks the search button
        e.preventDefault(); // prevents the default form submission behavior

        if(!query.trim()) return;
        setLoading(true);
        setError(null);

        try{
            let response;

            
      if (validCategories.includes(category)) {
        // Use Flask backend for Jikan
        response = await axios.get(
          `http://localhost:5000/search/${category}/${encodeURIComponent(query)}`
        );
        setResults(response.data.data || []);
      } else {
        // Use TMDB directly
        const tmdbApiKey = "TMDB_API_KEY"; // Replace with secure key please
        const tmdbUrl = ``; // same as above :)
        response = await axios.get(tmdbUrl, {
          params: {
            query,
            api_key: tmdbApiKey,
          },
        });
        setResults(response.data.results || []);
      }
    } catch (err) {
      console.error("Search failed", err);
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };

   return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {validCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <h3>{result.title || result.name}</h3>
            <p>{result.synopsis || result.overview || "No description available."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;