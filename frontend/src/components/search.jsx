import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios"

const Search = () => {
    const [query, setQuery] = useState(""); //handles the search bar input
    const[results, setResults] = useState([]);  // handles the search results
    const[error, setError] = useState(null); //handles any ApI errpors
    const [category, setCategory] = useState("anime");
    const [validCategories, setValidCategories] = useState([]);
    const [loading, setLoading] = useState(false);

  // Load valid Jikan categories from Flask on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/search/valid-categories")
      .then((res) => setValidCategories(res.data.valid_categories || []))
      .catch((err) => {
        console.error("Failed to fetch categories", err);
        setError("Could not load category options");
      });
  }, []);

    const handleSearch = async (e) => { // handles the form of submmissopn when the user clicks the search button
        e.preventDeafault(); // prevents the default form submission behavior

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
        const tmdbApiKey = "YOUR_TMDB_API_KEY"; // Replace with secure key
        const tmdbUrl = `https://api.themoviedb.org/3/search/${category}`;
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
    <div className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {/* Default categories — can be expanded */}
          <option value="anime">Anime</option>
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
          <option value="manga">Manga</option>
          <option value="characters">Characters</option>
          <option value="people">People</option>
        </select>

        <input
          type="text"
          value={query}
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {results.map((item) => (
          <div
            key={item.mal_id || item.id}
            className="border rounded p-4 shadow-sm"
          >
            <h2 className="text-lg font-bold">
              {item.title || item.name || "No title"}
            </h2>
            <p className="text-sm text-gray-600">
              {item.synopsis || item.overview || "No description available."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;



