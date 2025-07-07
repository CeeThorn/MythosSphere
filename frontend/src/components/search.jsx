import React, { useState, useEffect, useRef } from "react";
import { fetchResults } from "../API/Flask_API";
import { ChakraProvider, Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

 const CardHorizontal = () => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
      />
       <Box>
      <Card.Body>
        <Card.Title mb="2">The perfect latte</Card.Title>
        <Card.Description>
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)

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
  const [category, setCategory] = useState("");
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
              <option value="Movies & TV">Movies & TV </option>
              <option value="Comics">Comics </option>
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
              <option value="characters">Characters</option>
              <option value="people">People</option>
              <option value="top">Top</option>
             
            </select>
          </>
        )}
      </div>
        <CardHorizontal />

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
