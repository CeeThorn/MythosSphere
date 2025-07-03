import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;

export const fetchResults = async (searchQuery, searchCat = "") => {
  // Remove trailing slashes from query and category
  const cleanQuery = searchQuery.replace(/\/+$/, "");
  const cleanCat = searchCat.replace(/\/+$/, "");

  try {
    const response = await axios.get(
      `${host}search/${cleanQuery}/${cleanCat}`
    );
    const data = response.data;

    if (data.source === "jikan") {
      return data.jikan?.data || [];
    } else if (data.source === "comicvine") {
      return data.comicvine?.results || [];
    } else if (data.source === "TMDB") {
      return data.tmdb || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};

export const getDetails = async (itemSource, itemId, itemCat) => {
  // You can implement this later
};

