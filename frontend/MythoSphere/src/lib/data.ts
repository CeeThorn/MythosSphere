// Defines the connections between media items for the timeline
export interface Connection {
  // The 'id' of the Media object this item connects to
  toId: string;
  // A brief explanation of how they are connected
  reason: string;
}

export type GalaxyMediaType = 'tv' | 'movies' | 'games' | 'manga';
export type MediaType = 'tv' | 'movie' | 'game' | 'manga'

// Defines a movie or a TV show for the timeline
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

// Defines a specific continuity (e.g., DCAU, DCEU)
export interface Galaxy {
  // A unique ID (e.g., "dc-animated-universe")
  id: string;
  // Display name (e.g., "DCAU")
  name: string;

  start_year?: string;

  end_year?: string;

  description: string;

  watch_type?: GalaxyMediaType[];

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
  "id": 'dc',
  "name": 'DC',
  "description": "Home to the world's greatest superheroes, from Batman and Superman to Wonder Woman and The Flash.",
  "logoUrl": '/Universe Logos/dc-logo.png',
  // Add paths to character images for the slideshow card
  "iconicCharacters": [
      '/characters/dc/superman.png',
      '/characters/dc/batman.png',
      '/characters/dc/wonder-woman.png',
      '/characters/dc/flash.png',
      '/characters/dc/green-lantern.png',
      '/characters/dc/green-arrow.png',

  ],
  "galaxies": [
    {
  "id": "dcau",
  "name": "DCAU",
  "start_year": "1992",
  "end_year": "2006",
  "description": "The classic animated continuity started by Batman: The Animated Series.",
  "iconicCharacters": [
      "/characters/dc/superman-dcau.png",
      "/characters/dc/batman-dcau.png",
      "/characters/dc/joker-dcau.png",
      "/characters/dc/wonder-woman-dcau.png",
      "/characters/dc/static-shock-dcau.png",
      "/characters/dc/batman-beyond-dcau.png",
      "/characters/dc/green-lantern-dcau.png",
      "/characters/dc/hawkgirl-dcau.png"
  ],
  "watch_type": ["tv", "movies"],
  "media": [
    {
      "id": "batman-the-animated-series-dcau",
      "source_id": null,
      "name": "Batman: The Animated Series"
    },
    {
      "id": "batman-mask-of-the-phantasm-dcau",
      "source_id": null,
      "name": "Batman: Mask of the Phantasm"
    },
    {
      "id": "the-new-batman-adventures-dcau",
      "source_id": null,
      "name": "The New Batman Adventures"
    },
    {
      "id": "batman-and-mr-freeze-subzero-dcau",
      "source_id": null,
      "name": "Batman & Mr. Freeze: SubZero"
    },
    {
      "id": "superman-the-animated-series-dcau",
      "source_id": null,
      "name": "Superman: The Animated Series"
    },
    {
      "id": "superman-brainiac-attacks-dcau",
      "source_id": null,
      "name": "Superman: Brainiac Attacks",
      "timeline_note": "This movie is not considered canon to the DCAU by the creators, but is included as requested."
    },
    {
        "id": "gotham-girls-dcau",
        "source_id": null,
        "name": "Gotham Girls"
    },
    {
        "id": "lobo-webseries-dcau",
        "source_id": null,
        "name": "Lobo (Webseries)",
        "timeline_note": "This webseries is not officially considered part of the DCAU but was created by some of the same team and is often associated with it."
    },
    {
      "id": "static-shock-dcau",
      "source_id": null,
      "name": "Static Shock",
      "timeline_note": "The episodes 'The Big Leagues', 'Hard as Nails', and 'A League of Their Own' Parts 1 & 2 feature crossovers with the Justice League and occur during the 'Justice League' series timeline. 'Future Shock' is a crossover with 'Batman Beyond' and takes place during that show's timeline."
    },
    {
      "id": "justice-league-dcau",
      "source_id": null,
      "name": "Justice League"
    },
    {
      "id": "justice-league-unlimited-dcau",
      "source_id": null,
      "name": "Justice League Unlimited",
      "timeline_note": "The episode 'Epilogue' should be watched after 'Batman Beyond' and 'Batman Beyond: Return of the Joker'."
    },
    {
      "id": "batman-mystery-of-the-batwoman-dcau",
      "source_id": null,
      "name": "Batman: Mystery of the Batwoman"
    },
    {
        "id": "batman-and-harley-quinn-dcau",
        "source_id": null,
        "name": "Batman and Harley Quinn",
        "timeline_note": "The canonicity of this film is debatable. While executive producer Bruce Timm considers it canon, it is often seen as a standalone story."
    },
    {
        "id": "justice-league-vs-the-fatal-five-dcau",
        "source_id": null,
        "name": "Justice League vs. The Fatal Five",
        "timeline_note": "Similar to 'Batman and Harley Quinn', the canonicity of this film is open to interpretation. Executive producer Bruce Timm regards it as canon."
    },
    {
      "id": "batman-beyond-dcau",
      "source_id": null,
      "name": "Batman Beyond"
    },
    {
      "id": "the-zeta-project-dcau",
      "source_id": null,
      "name": "The Zeta Project",
      "timeline_note": "This series is a spin-off of 'Batman Beyond'."
    },
    {
      "id": "batman-beyond-return-of-the-joker-dcau",
      "source_id": null,
      "name": "Batman Beyond: Return of the Joker"
    }
  ],
  "relationships": [
    {
      "toId": "caped-crusader",
      "reason": "Batman: Caped Crusader is a spiritual successor from original creator Bruce Timm."
    }
  ]
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
  "id": "dcamu",
  "name": "DCAMU",
  "start_year": "2013",
  "end_year": "2020",
  "description": "A consolidated timeline of DC's modern animated movies, covering the interconnected \"DCAMU\" saga from 2013 to 2020.",
  "iconicCharacters": [
    "/characters/dc/superman-dcamu.png",
    "/characters/dc/batman-dcamu.png",
    "/characters/dc/wonder-woman-dcamu.png",
    "/characters/dc/flash-dcamu.png",
    "/characters/dc/zatanna-dcamu.png",
    "/characters/dc/constantine-dcamu.png",
  ],
  "watch_type": [
    "movies"
  ],
  "media": [
    {
      "id": "the-flashpoint-paradox-dcamu",
      "source_id": null,
      "name": "Justice League: The Flashpoint Paradox"
    },
    {
      "id": "justice-league-war-dcamu",
      "source_id": null,
      "name": "Justice League: War"
    },
    {
      "id": "son-of-batman-dcamu",
      "source_id": null,
      "name": "Son of Batman"
    },
    {
      "id": "justice-league-throne-of-atlantis-dcamu",
      "source_id": null,
      "name": "Justice League: Throne of Atlantis"
    },
    {
      "id": "batman-vs-robin-dcamu",
      "source_id": null,
      "name": "Batman vs. Robin"
    },
    {
      "id": "batman-bad-blood-dcamu",
      "source_id": null,
      "name": "Batman: Bad Blood"
    },
    {
      "id": "justice-league-vs-teen-titans-dcamu",
      "source_id": null,
      "name": "Justice League vs. Teen Titans"
    },
    {
      "id": "justice-league-dark-dcamu",
      "source_id": null,
      "name": "Justice League Dark"
    },
    {
      "id": "teen-titans-the-judas-contract-dcamu",
      "source_id": null,
      "name": "Teen Titans: The Judas Contract"
    },
    {
      "id": "suicide-squad-hell-to-pay-dcamu",
      "source_id": null,
      "name": "Suicide Squad: Hell to Pay"
    },
    {
      "id": "death-and-return-of-superman-dcamu",
      "source_id": null,
      "name": "The Death and Return of Superman",
      "timeline_note": "This represents the two-part story told in 'The Death of Superman' and 'Reign of the Supermen'."
    },
    {
      "id": "constantine-city-of-demons-dcamu",
      "source_id": null,
      "name": "Constantine: City of Demons",
      "timeline_note": "This movie's events occur concurrently with the 'Death of Superman' storyline."
    },
    {
      "id": "wonder-woman-bloodlines-dcamu",
      "source_id": null,
      "name": "Wonder Woman: Bloodlines",
      "timeline_note": "While released later, the majority of this film consists of flashbacks that take place before 'Justice League: War', with the present-day scenes happening after 'Reign of the Supermen'."
    },
    {
      "id": "batman-hush-dcamu",
      "source_id": null,
      "name": "Batman: Hush"
    },
    {
      "id": "justice-league-dark-apokolips-war-dcamu",
      "source_id": null,
      "name": "Justice League Dark: Apokolips War"
    },
    {
      "id": "constantine-the-house-of-mystery-dcamu",
      "source_id": null,
      "name": "Constantine: The House of Mystery",
      "timeline_note": "This film serves as an epilogue to the DCAMU, directly following the events of 'Apokolips War'."
    }
  ],
  "relationships": [
    {
      "toId": "tomorrowverse",
      "reason": "The Tomorrowverse is the rebooted animated universe that began after the events of 'Justice League Dark: Apokolips War'."
    }
  ]
},{
      "id": "tomorrowverse",
      "name": "Tomorrowverse",
      "start_year": "2020",
      "description": "The current animated universe that began with 'Superman: Man of Tomorrow', serving as a reboot after the events of the DCAMU.",
      "iconicCharacters": [
           "/characters/dc/constantine-tomorrowverse.png",
          "/characters/dc/flash-tomorrowverse.png",
          "/characters/dc/wonder-woman-tomorrowverse.png",
          "/characters/dc/batman-tomorrowverse.png",
          "/characters/dc/superman-tomorrowverse.png",
          "/characters/dc/supergirl-tomorrowverse.png"
      ],
      "watch_type": ["movies"],
      "media": [
        {
          "id": "superman-man-of-tomorrow-tomorrowverse",
          "source_id": null,
          "name": "Superman: Man of Tomorrow"
        },
        {
          "id": "justice-society-wwii-tomorrowverse",
          "source_id": null,
          "name": "Justice Society: World War II",
          "timeline_note": "The framing story with The Flash takes place in the present day, but the main plot is set in the past."
        },
        {
          "id": "batman-the-long-halloween-tomorrowverse",
          "source_id": null,
          "name": "Batman: The Long Halloween",
          "timeline_note": "This story is told across two parts."
        },
        {
          "id": "green-lantern-beware-my-power-tomorrowverse",
          "source_id": null,
          "name": "Green Lantern: Beware My Power"
        },
        {
          "id": "legion-of-super-heroes-tomorrowverse",
          "source_id": null,
          "name": "Legion of Super-Heroes"
        },
        {
          "id": "justice-league-warworld-tomorrowverse",
          "source_id": null,
          "name": "Justice League: Warworld"
        },
        {
          "id": "justice-league-crisis-on-infinite-earths-tomorrowverse",
          "source_id": null,
          "name": "Justice League: Crisis on Infinite Earths",
          "timeline_note": "This is a three-part finale to the Tomorrowverse."
        }
      ],
      "relationships": [{
        "toId": "dcamu",
        "reason": "This universe is a reboot that follows the conclusion of the DCAMU storyline."
      }]
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
      media: [{
        id:"creature-commandoes",
        source_id: 219543,
        name: "Creature Commandoes",
        
      },{
        id:"superman-dcu-2025",
        source_id: 1061474,
        name: "Superman",
        
      },{
        id:"supergirl-dcu-2026",
        source_id: 1081003,
        name: "Supergirl",
        
      },{
        id:"clayface-dcu-2026",
        source_id: 1400940,
        name: "Clayface",
        
      },{
        id:"lanterns-dcu-2026",
        source_id: 95350,
        name: "Lanterns",
        
      },{
        id:"waller-dcu",
        source_id: 201232,
        name: "Waller",
        
      },{
        id:"booster-gold-dcu",
        source_id: 219548,
        name: "Booster Gold",
        
      },{
        id:"paradise-lost-dcu",
        source_id: 219546,
        name: "Paradise Lost",
        
      },{
        id:"wonder-woman-dcu",
        source_id: 1495964,
        name: "Wonder Woman",
        
      },{
        id:"batman-dcu",
        source_id: 1081004,
        name: "Batman Brave And The Bold",
        
      },{
        id:"teen-titans-dcu",
        source_id: 1259816,
        name: "Teen Titans",
        
      },{
        id:"sgt-rock-dcu",
        source_id: 1504329,
        name: "Sgt. Rock",
        
      },{
        id:"swamp-thing-dcu",
        source_id: 1080998,
        name: "Swamp Thing",
        
      },{
        id:"the-authority-dcu",
        source_id: 1080999,
        name: "The Authority",
        
      },{
        id:"bane-deathstroke-film-dcu",
        source_id: 1362897,
        name: "Bane and Deathstroke Film",
        
      },],
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