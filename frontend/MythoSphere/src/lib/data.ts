// Defines the connections between media items for the timeline
export interface Connection {
  // The 'id' of the Media object this item connects to
  toId: string;
  // A brief explanation of how they are connected
  reason: string;
}

export type MediaType = 'tv' | 'movies' | 'games' | 'manga';

// Defines a movie or a TV show for the timeline
export interface Media {
  // Your own unique ID (e.g., "batman-the-animated-series")
  id: string;
  // The ID from the TMDB API to fetch details
  tmdb_id: number;
  // The media type for the API call ('tv' or 'movie')
  media_type: MediaType[];
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

  start_year?: string;

  end_year?: string;

  description: string;

  watch_type?: MediaType[];

  iconicCharacters: string[];
  // An array of shows and/or movies in this galaxy
  media: Media[];

  relationships?: Connection[]

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
      start_year: '1992',
      end_year: '2006',
      description: 'The classic animated continuity started by Batman: The Animated Series.',
      iconicCharacters: [
          '/characters/dc/superman-dcau.png',
          '/characters/dc/batman-dcau.png',
          '/characters/dc/joker-dcau.png',
          '/characters/dc/wonder-woman-dcau.png',
          '/characters/dc/static-shock-dcau.png',
          '/characters/dc/batman-beyond-dcau.png',
          '/characters/dc/green-lantern-dcau.png',
          '/characters/dc/hawkgirl-dcau.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'caped-crusader',
        reason: 'Batman: Caped Crusader is a spiritual successor from original creator Bruce Timm.'
      }],

    },
    {
      id: 'dceu',
      name: 'DCEU',
      start_year: '2013',
      end_year:'2023',
      description: 'The cinematic universe that began with Man of Steel (2013).',
      iconicCharacters: [
          '/characters/dc/superman-dceu.png',
          '/characters/dc/batman-dceu.png',
          '/characters/dc/wonder-woman-dceu.png',
          '/characters/dc/shazam-dceu.png',
          '/characters/dc/flash-dceu.png',
          '/characters/dc/blue-beetle-dceu.png',
          '/characters/dc/harley-quinn-dceu.png',
      ],
      watch_type: ['movies'],
      media: [],
      relationships: [{
        toId: 'dcu',
        reason: 'This universe was officially rebooted into the new DCU.'
      }],
    },
    {
      id: 'dcamu',
      name: 'DCAMU',
      start_year: '2013',
      description: 'A consolidated timeline of DC\'s modern animated movies, covering the interconnected "DCAMU" saga (2013-2020) and its subsequent reboot into the "Tomorrowverse" era (2020-Present).',
       iconicCharacters: [
          '/characters/dc/superman-dcamu.png',
          '/characters/dc/batman-dcamu.png',
          '/characters/dc/wonder-woman-dcamu.png',
          '/characters/dc/flash-dcamu.png',
          '/characters/dc/zatanna-dcamu.png',
          '/characters/dc/constantine-dcamu.png',
          '/characters/dc/constantine-tomorrowverse.png',
          '/characters/dc/flash-tomorrowverse.png',
          '/characters/dc/wonder-woman-tomorrowverse.png',
          '/characters/dc/batman-tomorrowverse.png',
          '/characters/dc/superman-tomorrowverse.png',
          '/characters/dc/supergirl-tomorrowverse.png',
          
      ],
      watch_type: ['movies'],
      media: [],
    },
    {
      id: 'dcu',
      name: 'DCU',
      start_year: '2024',
      description: "The upcoming rebooted universe by James Gunn, starting with 'Gods and Monsters'.",
      iconicCharacters: [
          '/characters/dc/superman-dcu.png',
          '/characters/dc/lois-lane-dcu.png',
          '/characters/dc/guy-gardner-dcu.png',
          '/characters/dc/the-bride-dcu.png',
          '/characters/dc/mister-terrific-dcu.png',
          '/characters/dc/hawkgirl-dcu.png',
          '/characters/dc/metamorpho-dcu.png',
      ],
      watch_type: ['tv','movies','games'],
      media: [],
      relationships: [{
        toId: 'dceu',
        reason: 'Serves as a wide-scale reboot of the previous cinematic universe.'
      }],
      
    },
    {
      id: 'smallville',
      name: 'Smallville',
      start_year: '2001',
      end_year:'2011',
      description: "The story of a young Clark Kent's journey to becoming Superman, exploring his relationships and the emergence of other heroes and villains.",
      iconicCharacters: [
        '/characters/dc/clark-kent-smallville.png',
        '/characters/dc/jonathon-kent-smallville.png',
        '/characters/dc/martha-kent-smallville.png',
        '/characters/dc/lois-lane-smallville.png',
        '/characters/dc/lex-luthor-smallville.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'arrowverse',
        reason: 'Its characters officially returned and were designated Earth-167 during the "Crisis on Infinite Earths" crossover event.'
      }]
    },
    {
      id: 'arrowverse',
      name: 'Arrowverse',
      start_year: '2012',
      end_year:'2023',
      description: 'The shared live-action universe that began with Arrow, encompassing numerous series on The CW.',
      iconicCharacters: [
        '/characters/dc/green-arrow-arrowverse.png',
        '/characters/dc/flash-arrowverse.png',
        '/characters/dc/white-canary-arrowverse.png',
        '/characters/dc/supergirl-arrowverse.png',
        '/characters/dc/superman-arrowverse.png',
        '/characters/dc/batwoman-arrowverse.png',
        
      ],
      watch_type: ['tv'],
      media: [],
       relationships: [
        { toId: 'smallville', reason: 'Brought back the characters from Smallville for the "Crisis on Infinite Earths" crossover.' },
        { toId: 'titans-live-action', reason: 'Acknowledged as Earth-9 during the "Crisis on Infinite Earths" crossover.' },
        { toId: 'doom-patrol-live-action', reason: 'Acknowledged as Earth-21 during the "Crisis on Infinite Earths" crossover.' },
        { toId: 'stargirl-live-action', reason: 'Established on the new Earth-2 following the "Crisis on Infinite Earths" crossover.' },
        { toId: 'superman-and-lois', reason: 'Originally a direct spin-off, but later retconned into a separate universe.' }
      ]
    },
    {
      id: 'superman-and-lois',
      name: 'Superman & Lois',
      start_year: '2021',
      end_year:'2024',
      description: "Set in its own continuity, this series follows Clark Kent and Lois Lane as they face the challenges of being working parents in Smallville.",
      iconicCharacters: [
        '/characters/dc/clark-and-lois-superman-and-lois.png',
        '/characters/dc/jon-kent-superman-and-lois.png',
        '/characters/dc/jordan-kent-superman-and-lois.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'arrowverse',
        reason: 'Spun-off from Arrowverse characters but was later confirmed to be a separate continuity.'
      }]
    },
    {
      id: 'young-justice',
      name: 'Young Justice',
      start_year: '2010',
      description: 'An animated series about a team of young superheroes operating as a covert unit for the Justice League.',
      iconicCharacters: [
        '/characters/dc/nightwing-yj.png',
        '/characters/dc/aqualad-yj.png',
        '/characters/dc/superboy-yj.png',
        '/characters/dc/miss-martian-yj.png',
        '/characters/dc/kid-flash-yj.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'green-lantern-as',
        reason: 'Shared a "DC Nation" programming block and a tie-in comic book crossover.'
      }]
    },
    {
      id: 'teen-titans-2003',
      name: 'Teen Titans (2003)',
      start_year: '2003',
      end_year:'2006',
      description: 'The iconic animated series following five teenage heroes—Robin, Starfire, Cyborg, Raven, and Beast Boy—as they defend their city.',
      iconicCharacters: [
        '/characters/dc/robin-teen-titans.png',
        '/characters/dc/starfire-teen-titans.png',
        '/characters/dc/cyborg-teen-titans.png',
        '/characters/dc/raven-teen-titans.png',
        '/characters/dc/beast-boy-teen-titans.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'teen-titans-go', // Note: This ID is not in the list but represents the relationship
        reason: 'Had a crossover movie, "Teen Titans Go! vs. Teen Titans", with its comedic successor.'
      }]
    },
     {
      id: 'harley-quinn-series',
      name: 'Harley Quinn Series',
      start_year: '2019',
      description: "An adult animated series following Harley Quinn's misadventures after her explosive breakup with the Joker.",
      iconicCharacters: [
        '/characters/dc/harley-quinn-hq-series.png',
        '/characters/dc/poison-ivy-hq-series.png',
        '/characters/dc/king-shark-hq-series.png',
        '/characters/dc/clayface-hq-series.png',
      ],
      watch_type: ['tv'],
      media: [],
    },
    {
      id: 'green-lantern-as',
      name: 'Green Lantern: The Animated Series',
      start_year: '2011',
      end_year:'2013',
      description: 'A CG-animated series following Hal Jordan and Kilowog as they patrol the far reaches of space.',
      iconicCharacters: [
        '/characters/dc/hal-jordan-gl-as.png',
        '/characters/dc/kilowog-gl-as.png',
        '/characters/dc/aya-gl-as.png',
        '/characters/dc/razor-gl-as.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'young-justice',
        reason: 'Shared a "DC Nation" programming block and a tie-in comic book crossover.'
      }]
    },
    {
      id: 'the-batman-2004',
      name: 'The Batman (2004)',
      start_year: '2004',
      end_year:'2008',
      description: 'An animated series that presents a young, athletic Batman in his early years of crime-fighting with a unique, angular art style.',
      iconicCharacters: [
        '/characters/dc/batman-the-batman-2004.png',
        '/characters/dc/robin-the-batman-2004.png',
        '/characters/dc/batgirl-the-batman-2004.png',
        '/characters/dc/joker-the-batman-2004.png',
      ],
      watch_type: ['tv'],
      media: [],
    },
    {
      id: 'dark-knight-trilogy',
      name: 'The Dark Knight Trilogy',
      start_year: '2005',
      end_year:'2012',
      description: "Christopher Nolan's grounded and realistic cinematic take on the Batman mythos.",
      iconicCharacters: [
        '/characters/dc/batman-dark-knight.png',
        '/characters/dc/joker-dark-knight.png',
        '/characters/dc/bane-dark-knight.png',
        '/characters/dc/two-face-dark-knight.png',
      ],
      watch_type: ['movies'],
      media: [],
    },
    {
      id: 'the-batman-reevesverse',
      name: "The Batman's Universe",
      start_year: '2022',
      description: "Matt Reeves' noir-inspired, detective-focused universe centered on a younger, more brutal Batman.",
      iconicCharacters: [
        '/characters/dc/batman-the-batman-reeves.png',
        '/characters/dc/catwoman-the-batman-reeves.png',
        '/characters/dc/penguin-the-batman-reeves.png',
        '/characters/dc/riddler-the-batman-reeves.png',
      ],
      watch_type: ['tv', 'movies'],
      media: [],
    },
    {
      id: 'caped-crusader',
      name: 'Batman: Caped Crusader',
      start_year: '2025',
      description: 'A forthcoming animated series from Bruce Timm, J.J. Abrams, and Matt Reeves, reimagining the Batman mythology with a noir sensibility.',
      iconicCharacters: [
        '/characters/dc/batman-caped-crusader.png',
        '/characters/dc/bruce-wayne-caped-crusader.png',
        '/characters/dc/catwoman-caped-crusader.png',
        '/characters/dc/selena-kyle-caped-crusader.png',
        '/characters/dc/jim-gordon-caped-crusader.png',
        '/characters/dc/barbra-gordon-caped-crusader.png',
        '/characters/dc/harley-quinn-caped-crusader.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'dcau',
        reason: 'A spiritual successor to the DCAU from original creator Bruce Timm.'
      }]
    },
    {
      id: 'arkhamverse',
      name: 'Arkhamverse',
      start_year: '2009',
      end_year:'2024',
      description: 'The dark, gritty universe established in the "Batman: Arkham" video game series and its associated animated film, "Assault on Arkham".',
      iconicCharacters: [
        '/characters/dc/batman-arkham.png',
        '/characters/dc/joker-arkham.png',
        '/characters/dc/harley-quinn-arkham.png',
        '/characters/dc/scarecrow-arkham.png',
        '/characters/dc/superman-arkham.png',
        '/characters/dc/wonder-woman-arkham.png',
      ],
      watch_type: ['movies', 'games'],
      media: [],
    },
    {
      id: 'beware-the-batman',
      name: 'Beware the Batman',
      start_year: '2013',
      end_year:'2014',
      description: 'A CG-animated series featuring a more detective-focused Batman who teams up with the sword-wielding Katana and his butler, Alfred Pennyworth.',
      iconicCharacters: [
        '/characters/dc/batman-beware.png',
        '/characters/dc/katana-beware.png',
        '/characters/dc/alfred-beware.png',
        '/characters/dc/anarky-beware.png',
      ],
      watch_type: ['tv'],
      media: [],
    },
    {
      id: 'titans-live-action',
      name: 'Titans (Live-Action)',
      start_year: '2018',
      end_year:'2023',
      description: 'A mature, live-action take on the Teen Titans, following Dick Grayson as he forms a new team of young heroes.',
      iconicCharacters: [
        '/characters/dc/robin-titans.png',
        '/characters/dc/nightwing-titans.png',
        '/characters/dc/starfire-titans.png',
        '/characters/dc/raven-titans.png',
        '/characters/dc/beast-boy-titans.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [
        { toId: 'doom-patrol-live-action', reason: 'Introduced the Doom Patrol in a backdoor pilot before the latter became its own separate continuity.' },
        { toId: 'arrowverse', reason: 'Designated as Earth-9 during the "Crisis on Infinite Earths" crossover.' }
      ]
    },
    {
      id: 'doom-patrol-live-action',
      name: 'Doom Patrol (Live-Action)',
      start_year: '2019',
      end_year:'2023',
      description: 'The surreal adventures of a team of traumatized and outcast superheroes brought together by a mysterious benefactor.',
      iconicCharacters: [
        '/characters/dc/robotman-doom-patrol.png',
        '/characters/dc/negative-man-doom-patrol.png',
        '/characters/dc/crazy-jane-doom-patrol.png',
        '/characters/dc/elastigirl-doom-patrol.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [
        { toId: 'titans-live-action', reason: 'Spun-off into its own continuity after an appearance in Titans.' },
        { toId: 'arrowverse', reason: 'Designated as Earth-21 during the "Crisis on Infinite Earths" crossover.' }
      ]
    },
    {
      id: 'stargirl-live-action',
      name: 'Stargirl',
      start_year: '2020',
      end_year:'2022',
      description: "High schooler Courtney Whitmore inspires a new generation of superheroes to form the Justice Society of America in this live-action series.",
      iconicCharacters: [
        '/characters/dc/stargirl-stargirl.png',
        '/characters/dc/pat-dugan-stargirl.png',
        '/characters/dc/wildcat-stargirl.png',
        '/characters/dc/hourman-stargirl.png',
        '/characters/dc/shade-stargirl.png',
      ],
      watch_type: ['tv'],
      media: [],
      relationships: [{
        toId: 'arrowverse',
        reason: 'Established as the post-Crisis Earth-2 during the "Crisis on Infinite Earths" crossover.'
      }]
    },
    {
      id: 'justice-league-action',
      name: 'Justice League Action',
      start_year: '2016',
      end_year:'2018',
      description: 'A fast-paced animated series featuring a wide array of DC heroes in short, 11-minute, action-packed adventures.',
      iconicCharacters: [
        '/characters/dc/batman-jla.png',
        '/characters/dc/superman-jla.png',
        '/characters/dc/wonder-woman-jla.png',
        '/characters/dc/firestorm-jla.png',
      ],
      watch_type: ['tv'],
      media: [],
    }
  ],
};

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