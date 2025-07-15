// Defines the connections between media items for the timeline
export interface Connection {
  // The 'id' of the Media object this item connects to
  toId: string;
  // A brief explanation of how they are connected
  reason: string;
}

// Defines a movie or a TV show for the timeline
export interface Media {
  // Your own unique ID (e.g., "batman-the-animated-series")
  id: string;
  // The ID from the TMDB API to fetch details
  tmdb_id: number;
  // The media type for the API call ('tv' or 'movie')
  media_type: 'tv' | 'movie';
  // Display name of the show/movie
  name: string;
  // The release date for chronological sorting on the timeline
  releaseDate: string;
  // The URL for the movie/show poster image
  posterUrl: string;
  // An array defining connections to other media in the timeline
  connections: Connection[];
}

// Defines a specific continuity (e.g., DCAU, DCEU)
export interface Galaxy {
  // A unique ID (e.g., "dc-animated-universe")
  id: string;
  // Display name (e.g., "DCAU")
  name: string;
  description: string;

  iconicCharacters: string[];
  // An array of shows and/or movies in this galaxy
  media: Media[];
}

// Defines a Universe (e.g., DC, Marvel)
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
  // An array of all the galaxies that exist within this universe
  galaxies: Galaxy[];
}


export const dcUniverse: Universe = {
  id: 'dc',
  name: 'DC',
  description: "Home to the world's greatest superheroes, from Batman and Superman to Wonder Woman and The Flash.",
  logoUrl: '/Universe Logos/dc-logo.png',
  // Add paths to character images for the slideshow card
  iconicCharacters: [
      '/characters/dc/superman.png',
      '/characters/dc/batman.png',
      '/characters/dc/wonder-woman.png',
      '/characters/dc/flash.png',
      '/characters/dc/green-lantern.png',

  ],
  galaxies: [
    {
      id: 'dcau',
      name: 'DCAU',
      description: 'The classic animated continuity started by Batman: The Animated Series.',
      // Add a path to the galaxy's logo
      iconicCharacters: [
      '/characters/dc/superman-dcau.png',
      '/characters/dc/batman-dcau.png',
      '/characters/dc/wonder-woman-dcau.png',
      '/characters/dc/batman-beyond-dcau.png',
      '/characters/dc/green-lantern-dcau.png',

  ],
      media: [], // This will be populated with movies/shows later
    },
    {
      id: 'dceu',
      name: 'DCEU',
      description: 'The cinematic universe that began with Man of Steel (2013).',
      media: [],
      iconicCharacters: [
      '/characters/dc/superman-dceu.png',
      '/characters/dc/batman-dceu.png',
      '/characters/dc/wonder-woman-dceu.png',
      '/characters/dc/shazam-dceu.png',

  ],
    },
    {
      id: 'dcamu',
      name: 'DCAMU',
      description: 'Interconnected animated films based on The New 52, starting with Flashpoint Paradox.',
      media: [],
      iconicCharacters: [
      '/characters/dc/superman-dceu.png',
      '/characters/dc/batman-dceu.png',
      '/characters/dc/wonder-woman-dceu.png',

  ],
    },
    {
      id: 'dcu',
      name: 'DCU',
      description: "The upcoming rebooted universe by James Gunn, starting with 'Gods and Monsters'.",
      iconicCharacters: [
      '/characters/dc/superman-dcu.png',
      '/characters/dc/hawkgirl-dcu.png',
      '/characters/dc/bride-dcu.png',
      

  ],
      media: [],
    },
  ],
};
{/*Smallville, CWVerse, Superman and Lois, Young Justice, Teen Titans, Green Lantern AS, The Batman 2003, The Batman Movie, The Bale Batmanverse */}

export const marvelUniverse: Universe = {
  id: 'marvel',
  name: 'Marvel',
  description: 'Explore a cosmos of heroes, villains, and epic stories, from Earth\'s Mightiest Heroes to the Children of the Atom.',
  logoUrl: '/Universe Logos/marvel-logo.png',
  // Add paths to character images for the slideshow card
  iconicCharacters: [
      '/characters/marvel/spider-man.png',
      '/characters/marvel/hulk.png',
      '/characters/marvel/wolverine.png',
      '/characters/marvel/thor.png',
  ],
  galaxies: [
    {
      id: 'mcu',
      name: 'MCU',
      description: 'The interconnected cinematic saga of films and series produced by Marvel Studios, starting with Iron Man (2008).',
      // Add a path to the galaxy's logo
      iconicCharacters: [],
      media: [], // This will be populated with movies/shows later
    },
    {
      id: 'x-men-universe',
      name: 'X-Men Film Universe',
      description: 'The series of films centered on mutants, beginning with X-Men (2000) by 20th Century Fox.',
      iconicCharacters: [],
      media: [],
    },
    {
      id: 'ssu',
      name: "Sony's Spider-Man Universe",
      description: "Sony's cinematic universe of films based on characters from the Spider-Man comics.",
      iconicCharacters: [],
      media: [],
    },
    {
      id: 'spider-verse',
      name: 'Spider-Verse',
      description: 'The animated multiverse saga following different Spider-People, beginning with Into the Spider-Verse.',
      iconicCharacters: [],
      media: [],
    },
  ],
};

export const starWarsUniverse: Universe = {
  id: 'star-wars',
  name: 'Star Wars',
  description: 'Journey to a galaxy far, far away, filled with Jedi, Sith, and the timeless battle between light and darkness.',
  logoUrl: '/Universe Logos/star-wars-logo.png',
  iconicCharacters: [
      '/characters/star-wars/darth-vader.png',
      '/characters/star-wars/yoda.png',
  ],
  galaxies: [
    {
      id: 'sw-canon',
      name: 'Canon',
      description: 'The official continuity including the Skywalker Saga, The Mandalorian, and all media released after April 2014.',
      iconicCharacters: [],
      media: [],
    },
    {
      id: 'sw-legends',
      name: 'Legends',
      description: 'The original expanded universe, containing all comics, novels, and games released before the 2014 continuity reboot.',
      iconicCharacters: [],
      media: [],
    },
  ],
};

export const OPUniverse: Universe = {
  id: 'one-piece',
  name: 'One Piece',
  description: 'Embark on an epic adventure across the Grand Line with Luffy and his crew in search of the legendary One Piece treasure.',
  logoUrl: '/Universe Logos/one-piece-logo.png',
  // Add paths to character images for the slideshow card
  iconicCharacters: [
      '/characters/one-piece/luffy-duece.png',
      '/characters/one-piecce/one-piece-manga.png',
     

  ],
  galaxies: [
    {
      id: 'east-blue',
      name: 'East Blue Saga',
      description: "The beginning of Luffy's journey, where he gathers his first crewmates." ,
      // Add a path to the galaxy's logo
      iconicCharacters: [
      '/characters/one-piece/nami-east-blue.png',
      '/characters/one-piece/zoro-east-blue.png',
      '/characters/one-piece/arlong.png',
     

  ],
      media: [], // Populate using Jikan later
    },
    {
      id: 'alabasta',
      name: 'Alabasta Saga',
      description: 'The Straw Hat Pirates . ..',
      media: [],
      iconicCharacters: [
      '/characters/one-piece/vivi.png',
      '/characters/one-piece/croc.png',
      '/characters/one-piece/ace-alabasta.png',
      

  ],
    },
    {
      id: 'skypiea',
      name: 'Skypiea Saga',
      description: '',
      media: [],
      iconicCharacters: [
      '/characters/one-piece/enel.png',
      '/characters/one-piece/asure-skypiea.png',
      

  ],
    },
    {

      id: 'water-seven',
      name: 'Water Seven Saga',
      description: ' The Straw Hat Pirates face new challenges in the Water Seven and Enies Lobby arcs.',
      media: [],
      iconicCharacters: [
      '/characters/one-piece/franky-water-seven.png',
      '/characters/one-piece/boxer-luffy.png',
      
      
      ],
    },
    {
      id: 'new-world',
      name: 'New World Saga',
      description: "The upcoming rebooted universe by James Gunn, starting with 'Gods and Monsters'.",
      iconicCharacters: [
      '/characters/one-piece/gecko-moria.png',
      '/characters/one-piece/ryuma.png',
      

      ],
  
  
      media: [],
    },
  ],
};

export const JJKUniverse: Universe = {
  id: 'jujutsu-kaisen',
  name: 'Jujutsu Kaisen',
  description: 'Enter a world of curses and sorcerers, where the battle against malevolent spirits shapes the fate of humanity.',
  logoUrl: '/Universe Logos/jujutsu-kaisen-logo.png',
  // Add paths to character images for the slideshow card
  iconicCharacters: [
      '/characters/jjk/itadori.png',
      '/characters/jjk/jjk-dope/.png',
      '/characters/jjk/gojo.png',
      '/characters/jjk/megumi-ss1.png',
      '/characters/jjk/nobara-goat.png',
      '/characters/jjk/sukuna.png',
      '/characters/jjk/gojo-last-fight.png',

  ],
  galaxies: [
    {
      id: 'jjk-0',
      name: 'Jujutsu Kaisen 0',
      description: 'The prequel story that introduces the world of Jujutsu Sorcerers and the events leading up to the main series.',
      // Add a path to the galaxy's logo
      iconicCharacters: [
      '/characters/jjk/yuta-jjk0.png',
      '/characters/jjk/suguru-getp.png',
     

  ],
      media: [], // This will be populated with movies/shows later
    },
    {
      id: 'Season-1',
      name: 'Season 1', //update the name of Season 1 and 2 i dont like the names
      description: 'The first season of the anime series, following Yuji Itadori as he joins Jujutsu High and battles curses.',
      media: [],
      iconicCharacters: [
      '/characters/jjk/itadori.png',
      '/characters/jjk/nobaru-goat.png',
      '/characters/jjk/todo-s1.png',
      '/characters/jjk/sukuna.png',
      '/characters/jjk/gojo.png',
      '/characters/jjk/megumi-ss1.png',

  ],
    },
    {
      id: 'seasom-2',
      name: 'Season 2',
      description: 'The second season of the anime series, continuing the story of Yuji and his friends as they face new challenges and powerful curses.',
      iconicCharacters: [
      '/characters/jjk/kenny-s2.png',
      '/characters/jjk/gojo-awakening.png',
      '/characters/jjk/mahito-s2.png',
      '/characters/jjk/mahito-new-form.png',
      '/characters/jjk/toji.png',
      '/characters/jjk/uruame.png',


  ],
      media: [],
    },
  ],
};
export const universes:Universe[] = [dcUniverse,marvelUniverse,starWarsUniverse, OPUniverse, JJKUniverse];