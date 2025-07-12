import { useState, useEffect, useRef } from "react";
import { fetchResults,fetchDetails } from "../API/Flask_API";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


/* The `SearchIcon` constant in the provided code snippet is a functional component in React that
returns an SVG element representing a search icon. This icon is defined using SVG (Scalable Vector
Graphics) markup within the component. The SVG element has attributes such as width, height, stroke
color, and a path defining the shape of the icon. */
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
  const searchRef = useRef<HTMLDivElement>(null);
  const tmdb_image_url = "https://image.tmdb.org/t/p/w500";

  /**
   * The `handleCollapse` function sets the `showDropdown` state to false and clears the `query` state.
   */
  const handleCollapse = () =>{
      setIsExpanded(false);
      setQuery("");
      setResults([])
  }
  /* The `useEffect` hook in the provided code snippet is setting up an event listener to handle clicks
  outside of the search bar component. */
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target as Node)
        ) {
          handleCollapse();
          
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleCollapse]);

    /**
     * The function `handleEnterPress` triggers a search for results when the Enter key is pressed in
     * an input field.
     * @param e - The parameter `e` is a React KeyboardEvent object, specifically for an
     * HTMLInputElement. This object contains information about the keyboard event that occurred, such
     * as the key that was pressed.
     */
    const handleEnterPress = async (e:React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
      if (e.key === "Enter"){
        setLoading(true)
        console.log(query,category)
        try{
          setResults(await fetchResults(query,category))
        }catch(err){
          console.log(err)
        }finally{
          setLoading(false)
        }
        
        
      }
    }
  

  return (
    <div ref={searchRef}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={()=>setIsExpanded(!isExpanded)}>
          <SearchIcon />
        </button>
        
        {isExpanded &&(
          <>
          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search MythoSphere..." onKeyDown={(e)=>handleEnterPress(e)}/>
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value ="">Movies and TV</option>
            <option value="comics">Comics</option>
            <option value="anime">Anime</option>
            <option value="manga">Manga</option>
            <option value="people">People</option>
            <option value="top">Top</option>
            <option value="characters">Characters</option>
          </select>
          </>
        )}
        
      </div>
      {results.length > 0 && isExpanded &&(
        <div className="grid grid-cols-4 gap-5">
        {results.map((item:any,index:number)=>(
          <Card key ={`${item}${index}`} className="w-full max-w-sm max-h-fit">
            <CardHeader>
              <CardTitle>{item?.name ?? item?.title}</CardTitle>
            </CardHeader>
            <CardContent onClick={()=>fetchDetails(item.source,item.id, item.media_type)} style={{cursor:"pointer"}}>
              <div className="flex flex-col gap-4">
              {item.poster_path &&(
                <img src={`${tmdb_image_url}${item?.poster_path}`} alt="" className="rounded-md shadow-xl"></img>
              )}
              {item.images &&(
                <img src={item.images.jpg.image_url} alt=""></img>
              )}
              <p>{item?.release_date ?? item?.first_air_date ?? item.aired?.from.slice(0,10) ?? item.published?.from.slice(0,10)}</p>

              
              </div>
            </CardContent>
          
          </Card>
        ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
