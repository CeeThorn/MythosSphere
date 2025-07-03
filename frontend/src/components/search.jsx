import React, { useState,useEffect, useRef } from "react";
import axios from "axios";
import { fetchResults } from "../API/Flask_API";

// A simple, reusable SVG icon for the search button
const SearchIcon = () => (
  <svg style={{ width: '24px', height: '24px', stroke: 'currentColor' }} xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SearchBar = () => {
  const [query, setQuery] = useState(""); //handles the search bar input
  const[results, setResults] = useState([]);  // handles the search results
  const [category, setCategory] = useState("");//creates a state variable and the default variable
  const [isExpanded, setisExpanded] = useState(false);
  const [loading, setLoading] = useState(false); //handles the loading state when the user clicks the search button
  //understand the () with const and differnt ways to use useState
  const searchRef = useRef(null)

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if (searchRef.current && !search.ref.current.contains(event.target)){
        setResults([]);
        return;
      }
    }
  });

    // Debouncing effect for the search query
  useEffect(() => {
    // Don't search if the query is empty
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    const debounceTimer = setTimeout(async()=>{
      const fetchedResults = await fetchResults(query, category)
      setResults(fetchedResults);
    },300);
    return ()=> clearTimeout(debounceTimer)
  },[query]);

  return (
    <div ref={searchRef}>
      <div>
        <button id = "searchTrigger"onClick={()=>setisExpanded(!isExpanded)}>
          <SearchIcon/>
        </button>
        {isExpanded &&(
          <input 
            id="searchInputBox"
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder = "Search MythoSphere..."
            autoFocus
            />
        )}
      </div>
      {isExpanded && results.length > 0 &&(
        <ul>
          {results.map((result,index)=>(
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
