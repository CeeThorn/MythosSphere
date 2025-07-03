import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;

export const fetchResults = async (searchQuery, searchCat = "") => {
  try {
    const url = `${host}/search/${encodeURIComponent(searchQuery)}/${encodeURIComponent(searchCat)}`;
    console.log("Fetching results from:", url);
    const response = await axios.get(url);
    console.log("Backend response:", response.data);
    const data = response.data;

    if (data.source === "jikan") {
      return data.jikan?.data || [];
    } else if (data.source === "comicvine") {
      return data.comicvine?.results || [];
    } else if (data.source === "TMDB" || data.source === "tmdb") {
      return data.tmdb || [];
    }
    return [];
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};




export const getDetails = async (itemSource, itemId, itemCat) => {
 
};

