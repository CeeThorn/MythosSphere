import ReactDOM from "react-dom";
import React, { useState } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState(""); //handles the search bar input
    const[results, setResults] = useState([]);  // handles the search results
    const[error, setError] = useState(null); //handles any ApI errpors
    const [category, setCategory] = useState("");//creates a state variable and the default variable
    const [loading, setLoading] = useState(false); //handles the loading state when the user clicks the search button
    //understand the () with const and differnt ways to use useState

  const handleSearch = async (e) => {
    e.preventDefault();

    const handleSearch = async (searchQuery, searchComics="", searchCategory="") => { // handles the form of submmissopn when the user clicks the search button
      const currentQuery = searchQuery || query; //if the user has not entered a search query, it will use the current query
      const currentCategory = searchCategory || category; //if the user has not selected a category, it will use the current category
      console.log("Search query:", query, "category:", category);

      if(!query.trim()) return;
      setLoading(true);
      setError(null);

      try{
        const response = await axios.get(
          `http://localhost:5000/search/${searchComics}/${currentQuery}/${currentCategory}/`
        );
        
        return (response.data.payload)
          
        
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
}
export default Search;
