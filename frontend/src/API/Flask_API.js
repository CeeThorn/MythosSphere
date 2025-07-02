import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;

export const fetchResults = async (searchQuery, searchCat = "") => {
  try {
    const response = await axios.get(
      `${host}search/${searchQuery}/${searchCat}`
    );
    let data = response.data;
    if (data.tag === "jikan") {
      return [data.jikan, data.source];
    } else if (data.tag === "comicvine") {
      return [data.comicvine, data.source];
    } else {
      return [data.tmdb, data.source];
    }
  } catch (error) {
    console.error("Error fetching ratings:", error);
  }
};

export const getDetails = async (itemSource, itemId, itemCat) => {};
