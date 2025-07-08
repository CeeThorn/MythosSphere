import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;

interface TmdbResponse{
  tmdb:{
    results: any[]
  }
}
interface ComicvineResponse{
  comicvine:{
    results: any[]
  }
}
interface JikanResponse{
  jikan:{
    data: any[]
  }
}
type FlaskApiSearch = TmdbResponse | ComicvineResponse | JikanResponse;

export const fetchResults = async (searchQuery: string, searchCat = ""): Promise<FlaskApiSearch> => {
  try {
    const response = await axios.get(`${host}search/${searchQuery}/${searchCat}`);

    const data = response.data;

    if ((data as JikanResponse).jikan) return data.jikan.data ?? [];       
    if ((data as TmdbResponse).tmdb) return data.tmdb.results ?? [];              
    if ((data as ComicvineResponse).comicvine) return data.comicvine.results ?? [];  

  } catch (error) {
    console.error("Error fetching results:", error);
  }
};




export const getDetails = async (itemSource: string, itemId: number, itemCat: string ) => {
  
};

