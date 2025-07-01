import ReactDOM from "react-dom";
import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:5000/search?q=${encodeURIComponent(query)}`
      );
      console.log("Backend response:", response.data);
      setResults(response.data.data || []);
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

export default Search;
