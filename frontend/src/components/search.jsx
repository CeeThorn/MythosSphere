import React, { useState, useEffect, useRef } from "react";
import { fetchResults } from "../API/Flask_API";

const SearchIcon = () => (
  <svg
    style={{ width: "24px", height: "24px", stroke: "currentColor" }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("anime"); // default category
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const searchRef = useRef(null);

  // Collapse input if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
        setResults([]);
        setHasSearched(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClick = async () => {
    if (!isExpanded) {
      setIsExpanded(true);
      return;
    }

    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);

    try {
      const fetchedResults = await fetchResults(query, category);
      setResults(fetchedResults || []);
    } catch (err) {
      console.error("Search failed:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={searchRef}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={handleSearchClick} aria-label="Search">
          <SearchIcon />
        </button>
        {isExpanded && (
          <>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search MythosSphere..."
              autoFocus
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
              <option value="characters">Characters</option>
              <option value="people">People</option>
              <option value="top">Top</option>
              <option value="">Movies & TV (TMDB)</option>
              <option value="comic">Comics (ComicVine)</option>
            </select>
          </>
        )}
      </div>

      {loading && <p>Loading...</p>}

      {isExpanded && results.length > 0 && (
        <ul style={{ textAlign: "left", marginTop: "1rem" }}>
          {results.map((result, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <strong>{result.title || result.name || "No Title"}</strong>
              <p>
                {result.synopsis ||
                  result.overview ||
                  result.deck ||
                  "No description available."}
              </p>
            </li>
          ))}
        </ul>
      )}

      {isExpanded && hasSearched && !loading && results.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchBar;
