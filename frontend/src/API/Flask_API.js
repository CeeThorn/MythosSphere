import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST || "http://localhost:5000/";

export const fetchResults = async (searchQuery, searchCat = "") => {
  try {
    const url = searchCat
      ? `${host}search/${searchQuery}/${searchCat}`
      : `${host}search/${searchQuery}`;
    
    const response = await axios.get(url);

    const data = response.data;

    if (data.jikan) return data.jikan.data || [];       
    if (data.tmdb) return data.tmdb.results || [];              
    if (data.comicvine) return data.comicvine.results || [];  

    return []; 
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};




export const getDetails = async (itemSource, itemId, itemCat) => {
 
};

