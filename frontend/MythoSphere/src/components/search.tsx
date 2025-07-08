import { useState, useEffect, useRef } from "react";
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
  const [category, setCategory] = useState(""); // default category
  const [results, setResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  const handleCollapse = () =>{
      setShowDropdown(false);
      setQuery("");
  }
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target)
        ) {
          handleCollapse();
          
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleCollapse]);

    const handleEnterPress = (e:React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter"){
        setResults(fetchResults(query,category))
      }
    }
  

  return (
    <div ref={searchRef}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={()=>setIsExpanded(!isExpanded)}>
          <SearchIcon />
        </button>
        {isExpanded &&(
          <input type="text" value={query} placeholder="Search MythoSphere..." onKeyDown={(e)=>handleEnterPress(e)}>
          
          </input>
        )}
        
      </div>

    </div>
  );
};

export default SearchBar;
