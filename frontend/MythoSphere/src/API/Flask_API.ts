import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;

/* These interfaces in TypeScript are defining the structure of the response data expected from
different APIs. */
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

/**
 * The function fetches search results based on a query and category using different APIs and returns
 * the corresponding data.
 * @param {string} searchQuery - The `searchQuery` parameter is a string that represents the search
 * query term that the user wants to search for. It is used to specify the term to search for in the
 * API request.
 * @param [searchCat] - The `searchCat` parameter in the `fetchResults` function is a string parameter
 * that represents the category or type of search you want to perform. It is an optional parameter with
 * a default value of an empty string. This parameter is used to specify the category of the search
 * query, which can help
 * @returns The fetchResults function returns different types of results based on the response data
 * received from the API:
 */
export const fetchResults = async (searchQuery: string, searchCat = ""): Promise<any> => {
  try {
    const response = await axios.get<FlaskApiSearch>(`${host}search/${searchQuery}/${searchCat}`);

    const data = response.data;

    if ((data as JikanResponse).jikan) return (data as JikanResponse).jikan.data ?? [];       
    if ((data as TmdbResponse).tmdb) return (data as TmdbResponse).tmdb.results ?? [];              
    if ((data as ComicvineResponse).comicvine) return (data as ComicvineResponse).comicvine.results ?? []; 

    return [];
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};




export const fetchDetails = async (itemSource: string, itemId: number, itemCat: string ) => {
  
};

