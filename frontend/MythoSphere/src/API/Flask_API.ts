import axios from "axios";
const host = import.meta.env.VITE_NETWORK_HOST;


/**
 * Fetches the list of all available universes.
 * @returns An array of Universe objects or null.
 */
export const fetchUniverses = async (): Promise<Universe[] | null> => {
  try {
    const response = await axios.get<UniversesResponse>(`${host}universes/`);
    if (response.data && response.data.Status === "Success") {
      return response.data.Payload;
    }
    return null;
  } catch (error) {
    console.error("Error fetching universes:", error);
    return null;
  }
};


/**
 * Fetches the list of all galaxy summaries for a specific universe.
 * @param universeId The ID of the universe (e.g., 'dc').
 * @returns An array of GalaxySummary objects or null.
 */
export const fetchGalaxiesForUniverse = async (universeId: string): Promise<GalaxySummary[] | null> => {
    try {
        const response = await axios.get<GalaxiesResponse>(`${host}universes/${universeId}/galaxies`);
        if (response.data && response.data.Status === "Success") {
            return response.data.Payload;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching galaxies for ${universeId}:`, error);
        return null;
    }
};

/**
 * Fetches the full, detailed data for a single galaxy.
 * @param universeId The ID of the parent universe (e.g., 'dc').
 * @param galaxyId The ID of the galaxy to fetch (e.g., 'dcau').
 * @returns The full Galaxy object, including its media array, or null if not found.
 */
export const fetchGalaxy = async (universeId: string, galaxyId: string): Promise<Galaxy | null> => {
  try {
    // 1. Call the specific backend endpoint with the universe and galaxy IDs.
    const response = await axios.get<GalaxyResponse>(`${host}universes/${universeId}/galaxy/${galaxyId}`);

    // 2. Check for a successful response from the backend.
    if (response.data && response.data.Status === "Success") {
      // 3. Return the 'Payload', which contains the full galaxy object.
      return response.data.Payload;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching details for galaxy ${galaxyId}:`, error);
    return null;
  }
};

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
  try{
    
  }catch{

  }finally{
    
  }
  
};

export interface Universe {
  // A unique ID you define (e.g., "dc-comics")
  id: string;
  // The display name (e.g., "DC Comics")
  name: string;
  // A brief, engaging tagline for the universe selection screen
  description: string;
  // The URL for the univeres's logo
  logoUrl: string;
  // An array of image URLs for iconic characters to display on the slideshow card
  iconicCharacters: string[];

}

export interface GalaxySummary {
    id: string;
    name: string;
    description: string;
    start_year?: string;
    end_year?: string;
    iconicCharacters: string[];
}

export interface Galaxy {
  id: string;

  name: string;

  start_year?: string;

  end_year?: string;

  description: string;

  watch_type?: GalaxyMediaType[];

  iconicCharacters: string[];

  media: Media[];

  relationships?: Connection[]

}

export type GalaxyMediaType = 'tv' | 'movies' | 'games' | 'manga';

export interface Media {
  // Your own unique ID (e.g., "batman-the-animated-series")
  id: string;
  // Display name of the show/movie
  name: string;
  // The ID from the TMDB API to fetch details
  source_id: number;

  timeline_note?: string;
  // An array defining connections to other media in the timeline
  connections?: Connection[];
}


export interface Connection {
  // The 'id' of the Media object this item connects to
  toId: string;
  // A brief explanation of how they are connected
  reason: string;
}

interface UniversesResponse {
  Status: string;
  Payload: Universe[];
}

interface GalaxiesResponse {
    Status: string;
    Payload: GalaxySummary[];
}

interface GalaxyResponse {
  Status: string;
  Payload: Galaxy;
}

type FlaskApiSearch = TmdbResponse | ComicvineResponse | JikanResponse;

/* These interfaces in TypeScript are defining the structure of the response data expected from
different APIs. */
interface TmdbResponse{
  tmdb:{
    page:number,
        type:string,
    results: [{
      adult:boolean,
      backdrop_path:string,
      id:number,
      title:string,
      original_language:string,
      original_title:string,
      overview:string,
      poster_path: string,
      media_type: string,
      genre_ids: number[],
      popularity: number,
      release_date:string,
      video:boolean,
      vote_average:number,
      vote_count:number
    }],
    total_pages:number,
    total_results:number,
  }
}
interface ComicvineResponse{
  Status:string,
  comicvine:{
    error:string,
    limit:number,
    number_of_pages_results:number,
    number_of_total_result:number,
    offset:number,
    results: [{
      alias:string,
      api_detail_url:string,
      birth:string,
      count_of_issue_appearances:number,
      date_added:string,
      date_last_updated:string,
      deck:string,
      description:string,
      first_appeared_in_issues:{
        api_detail_url:string,
        id:number,
        issue_number:string,
        name?:string
      },
      gender:number,
      id:number,
      image:{
        icon_url:string,
        image_tags:string,
        medium_url:string,
        original_url:string,
        screen_large_url:string,
        screen_url:string,
        small_url:string,
        super_url:string,
        thumb_url:string,
        tiny_url:string
      },
      name:string,
      orgin:{
        api_detail_url:string,
        id:number,
        name:string
      },
      publisher:{
        api_detail_url:string,
        id:number,
        name:string
      },
      real_name:string,
      resource_type:string,
      site_detail_url:string
    }],
    status_code:number,
    version:string,
  },
  source:string
}
interface JikanResponse{
  Status:string,
  jikan:{
    data: [{
      airing:boolean,
      approved:boolean,
      background:string,
      broadcast:{
        day:string,
        string:string,
        time:string,
        timezone:string
      },
      demographics:[{
        mal_id:number,
        name:string,
        type:string,
        url:string
      }],
      duration:string,
      episodes:number,
      explicit_genres?:string[]
      favorites:number,
      genres:[{
        mal_id:number,
        name:string,
        type:string,
        url:string
      }],
      images:{
        jpg:{
          image_url:string,
          large_image_url:string,
          small_image_url:string,
        },
        webp:{
          image_url:string,
          large_image_url:string,
          small_image_url:string,
        }
      },
      licensors:[{
        mal_id:number,
        name:string,
        type:string,
        url:string
      }],
      mal_id:number,
      members:number,
      popularity:number,
      producers:[{
        mal_id:number,
        name:string,
        type:string,
        url:string
      }],
      rank:number,
      rating:string,
      score:number,
      scored_by:string,
      season:string,
      source:string,
      status:string,
      studios:[
        mal_id:number,
        name:string,
        type:string,
        url:string
      ],
      synopsis:string,
      themes:[{
        mal_id:17,
        name:string,
        type:string,
        url:string
      }],
      title:string,
      title_english:string,
      title_japanese:string,
      title_synonyms: string[],
      titles:[{
        title:string,
        type:string
      }],
      trailer:{
        embed_url?:string,
        images:{
          image_url?:string,
          large_image_url?:string,
          maximum_image_url?:string,
          medium_image_url?:string,
          small_image_url?:string
        },
        url?:string,
        youtube_id?:string
      },
      type:string,
      url:string,
      year:number
    }]
  },
  source:string
}

