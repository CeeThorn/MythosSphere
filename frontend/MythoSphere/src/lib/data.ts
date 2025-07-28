export type GalaxyMediaType = 'tv' | 'movies' | 'games' | 'manga' | 'anime';

// Defines the connections between media items for the timeline
export interface Connection {
  toId: string;
  reason: string;
}

// Defines a movie or a TV show for the timeline
export interface Media {
  
  tmdb_id?: number;
  media_type?: 'tv' | 'movie' | 'manga';
  name?: string;
  releaseDate?: string;
  posterUrl?: string;
  connections?: Connection[];

  id?: string;
  source_id?: number | null;
}

// Defines a specific continuity (e.g., DCAU, DCEU)
export interface Galaxy {
  id: string;
  name: string;
  description: string;
  iconicCharacters: string[];
  media: Media[];
  start_year?: string; // 
  watch_type?: GalaxyMediaType[]; // 
  end_year?: string; // 
  overview: string; //
}

// Defines a Universe (e.g., DC, Marvel)
export interface Universe {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  iconicCharacters: string[];
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
      iconicCharacters: [
        '/characters/dc/superman-dcau.png',
        '/characters/dc/batman-dcau.png',
        '/characters/dc/wonder-woman-dcau.png',
        '/characters/dc/batman-beyond-dcau.png',
        '/characters/dc/green-lantern-dcau.png',
      ],
      media: [{
        tmdb_id: 2098,
        media_type: "tv" ,
        name: "Batman: The Animated Series" ,
        releaseDate: "(1992)"
      },
    {

        tmdb_id: 14919,//cahnger to nect one
        media_type: "movie" ,
        name: "Batman: Mask of the Phantasm " ,
        releaseDate: "(1993)"

    },
    {

        tmdb_id: 4303,//cahnger to nect one
        media_type: "tv" ,
        name: "Superman: The Animated Series " ,
        releaseDate: "(1996)"

    },
    {

        tmdb_id: 513,
        media_type: "tv" ,
        name: "Batman Beyond " ,
        releaseDate: "(1999)"

        
    },
    {

        tmdb_id: 4625,
        media_type: "tv" ,
        name: "The New Batman Adventures " ,
        releaseDate: "(1997)"

        
    },
    {

        tmdb_id: 1487,
        media_type: "tv" ,
        name: "Static Shock" ,
        releaseDate: "(2000)"

        
    },
    {

        tmdb_id: 15185,
        media_type: "tv" ,
        name: "Gotham Girls" ,
        releaseDate: "(2000)"

        
    },
    {

        tmdb_id: 2098,
        media_type: "tv" ,
        name: "Superman: The Animated Series " ,
        releaseDate: "(1996)"

        },
        {

        tmdb_id: 15805,
        media_type: "movie" ,
        name: "Batman & Mr. Freeze: SubZero " ,
        releaseDate: "(1998)"


            
    },
    {

        tmdb_id: 16234,
        media_type: "movie" ,
        name: "Batman Beyond: Return of the Joker " ,
        releaseDate: "(2000)"

                

        
    },
    {

       tmdb_id: 1358105,
        media_type: "movie" ,
        name: "Justice League: The First Mission" ,
        releaseDate: "(2000)"

                

        
    },
    {


        tmdb_id: 4508,
        media_type: "tv" ,
        name: "The Zeta Project " ,
        releaseDate: "(2001)"

           },
           {

        tmdb_id: 300386,
        media_type: "movie" ,
        name: "Justice League: Secret Origins " ,
        releaseDate: "(2001)"


                
    },
    {

        tmdb_id: 1476778,
        media_type: "movie" ,
        name: "Justice League: The Savage Time " ,
        releaseDate: "(2002)"


                
    },
    {



        tmdb_id: 21683,
        media_type: "movie" ,
        name: "Batman: Mystery of the Batwoman " ,
        releaseDate: "(2003)"

    },
    {

        tmdb_id: 268899,
        media_type: "movie" ,
        name: "Justice League: Starcrossed - The Movie " ,
        releaseDate: "(2004)"
                
    },
    {

             tmdb_id: 269246,
        media_type: "movie" ,
        name: "Batman Beyond " ,
        releaseDate: "(2014)"
                
    },
    {

        tmdb_id: 537059,
        media_type: "movie" ,
        name: "Justice League vs. the Fatal Five " ,
        releaseDate: "(2019)"



 


    
    }], 
      watch_type: ['tv'],
      start_year: '1992',
      end_year: '2006',
       overview: 'The DC Animated Universe (DCAU) brought together beloved shows like Batman: The Animated Series, Justice League, and Batman Beyond in a shared continuity that redefined superhero storytelling in animation.',
    
 
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
  watch_type: ['movies'],
  start_year: '2013',
  end_year: '',
  overview: 'The DC Extended Universe (DCEU) is a live-action cinematic universe that kicked off with Man of Steel, featuring interconnected stories of iconic heroes like Superman, Batman, and Wonder Woman across a darker, more grounded landscape.',
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
  watch_type: ['movies'],
  start_year: '2013',
  end_year: '2020', // Added plausible end year
  overview: 'The DC Animated Movie Universe (DCAMU) adapted The New 52 comic era into a series of gritty, action-packed animated films beginning with Justice League: The Flashpoint Paradox and culminating in Justice League Dark: Apokolips War.',
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
  watch_type: ['movies'],
  start_year: '2025',
  end_year: '', // Future, no end year yet
  overview: 'The DC Universe (DCU) is a fresh reboot helmed by James Gunn, aiming to unify DC’s film and TV projects under a singular, creative vision beginning with "Chapter One: Gods and Monsters."',
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
  iconicCharacters: [],
  media: [
    {id: 'inhumans', source_id: 71728, name: 'Marvel’s Inhumans (2017)'},
    {  id: 'agent-carter', source_id: 61550, name: 'Agent Carter (2015)'},
    {id: 'agents-of-shield', source_id: 1403, name: 'Agents of S.H.I.E.L.D. (2013)'},//1-3 cannon 4-7 drift off
    { id: 'iron-man', source_id: 1726, name: 'Iron Man', },
    { id: 'incredible-hulk', source_id: 1724, name: 'The Incredible Hulk', },
    { id: 'iron-man-2', source_id: 10138, name: 'Iron Man 2',  },
    { id: 'thor', source_id: 10195, name: 'Thor',  },
    { id: 'captain-america-first-avenger', source_id: 1771, name: 'Captain America: The First Avenger',  },
    { id: 'avengers', source_id: 24428, name: 'The Avengers',  },
    
    { id: 'iron-man-3', source_id: 68721, name: 'Iron Man 3', },
    { id: 'thor-dark-world', source_id: 76338, name: 'Thor: The Dark World',  },
    { id: 'captain-america-winter-soldier', source_id: 100402, name: 'Captain America: The Winter Soldier', },
    { id: 'guardians-of-the-galaxy', source_id: 118340, name: 'Guardians of the Galaxy',  },
    { id: 'age-of-ultron', source_id: 99861, name: 'Avengers: Age of Ultron',  },
    { id: 'ant-man', source_id: 102899, name: 'Ant‑Man',  },
    
    { id: 'captain-america-civil-war', source_id: 271110, name: 'Captain America: Civil War',  },
    { id: 'doctor-strange', source_id: 284052, name: 'Doctor Strange',  },
    { id: 'guardians-of-the-galaxy-vol-2', source_id: 283995, name: 'Guardians of the Galaxy Vol. 2',  },
    { id: 'spider-man-homecoming', source_id: 315635, name: 'Spider‑Man: Homecoming',  },
    { id: 'thor-ragnarok', source_id: 284053, name: 'Thor: Ragnarok',  },
    { id: 'black-panther', source_id: 284054, name: 'Black Panther',  },
    { id: 'avengers-infinity-war', source_id: 299536, name: 'Avengers: Infinity War',  },
    { id: 'ant-man-and-the-wasp', source_id: 363088, name: 'Ant‑Man and the Wasp',  },
    { id: 'captain-marvel', source_id: 299537, name: 'Captain Marvel',  },
    { id: 'avengers-endgame', source_id: 299534, name: 'Avengers: Endgame',  },
    { id: 'spider-man-far-from-home', source_id: 429617, name: 'Spider‑Man: Far From Home', },
    { id: 'black-widow', source_id: 497698, name: 'Black Widow', },
    { id: 'shang-chi', source_id: 566525, name: 'Shang‑Chi and the Legend of the Ten Rings',  },
    { id: 'eternals', source_id: 524434, name: 'Eternals', },
    { id: 'spider-man-no-way-home', source_id: 634649, name: 'Spider‑Man: No Way Home',  },
    { id: 'doctor-strange-multiverse', source_id: 453395, name: 'Doctor Strange in the Multiverse of Madness',  },
    { id: 'thor-love-and-thunder', source_id: 616037, name: 'Thor: Love and Thunder',  },
    { id: 'black-panther-wakanda-forever', source_id: 505642, name: 'Black Panther: Wakanda Forever',  },
    { id: 'ant-man-quantumania', source_id: 640146, name: 'Ant‑Man and the Wasp: Quantumania',  },
    { id: 'guardians-of-the-galaxy-vol-3', source_id: 447365, name: 'Guardians of the Galaxy Vol. 3',  },
    { id: 'the-marvels', source_id: 609681, name: 'The Marvels',  },
    { id: 'captain-america-brave-new-world', source_id: 822119, name: 'Captain America: Brave New World', },
    { id: 'thunderbolts', source_id: 986056, name: 'Thunderbolts*',  },
 

    
    { id: 'runaways', source_id: null, name: 'Runaways (2017–2019)' },
    { id: 'wandavision', source_id: 2021, name: 'WandaVision' }, 
    { id: 'falcon-and-the-winter-soldier', source_id: 2021, name: 'The Falcon and the Winter Soldier' },
    { id: 'loki', source_id: 84958, name: 'Loki' } ,
    { id: 'what-if', source_id: 91363, name: 'What If…?' } ,
    { id: 'hawkeye', source_id: 88329, name: 'Hawkeye' },
    { id: 'moon-knight', source_id: 92749, name: 'Moon Knight' },
    { id: 'ms-marvel', source_id: 92782, name: 'Ms. Marvel' },
    { id: 'she-hulk', source_id: 2022, name: 'She-Hulk: Attorney at Law' },
    { id: 'secret-invasion', source_id: 2023, name: 'Secret Invasion' },
    { id: 'i-am-groot', source_id: 2022, name: 'I Am Groot' },
    { id: 'guardians-of-the-galaxy-holiday-special', source_id: 2022, name: 'The Guardians of the Galaxy Holiday Special' },
    { id: 'werewolf-by-night', source_id: 2022, name: 'Werewolf by Night' },
    { id: 'agatha-all-along', source_id: 2023, name: 'Agatha: Coven of Chaos (formerly Agatha All Along)' },
    { id: 'your-friendly-neighborhood-spider-man', source_id: 2025, name: 'Your Friendly Neighborhood Spider-Man' },
    { id: 'daredevil-born-again', source_id: 2025, name: 'Daredevil: Born Again' }, //chsange the source_id- check whole section
    { id: 'ironheart', source_id: 2025, name: 'Ironheart' },
     {"id": "deadpool-3", "source_id": 533535, "name": "Deadpool & Wolverine"},
  ],
  watch_type: ['movies', 'tv'],
  start_year: '2008',
  end_year: '',
  overview: 'The Marvel Cinematic Universe (MCU) is a groundbreaking franchise...'
},
{
  id: 'x-men-universe',
  name: 'X-Men Film Universe',
  description: 'The series of films centered on mutants, beginning with X-Men (2000) by 20th Century Fox.',
  iconicCharacters: [],
  media: [
    
    { id: 'x-men', source_id: 36657, name: 'X‑Men (2000)' },
    { id: 'x2', source_id:  36658, name: 'X2: X‑Men United (2003)' },
    { id: 'x-men-the-last-stand', source_id:  36668, name: 'X‑Men: The Last Stand (2006)' },
    { id: 'x-men-origins-wolverine', source_id:  2080, name: 'X‑Men Origins: Wolverine (2009)' },
    { id: 'x-men-first-class', source_id:  49538, name: 'X‑Men: First Class (2011)' },
    { id: 'x-men-days-of-future-past', source_id:  127585, name: 'X‑Men: Days of Future Past (2014)' },
    { id: 'x-men-apocalypse', source_id:  246655, name: 'X‑Men: Apocalypse (2016)' },
    { id: 'dark-phoenix', source_id:  320288, name: 'Dark Phoenix (2019)' },
    { id: 'legion', source_id: null, name: 'Legion (2017–2019)' },
    { id: 'the-wolverine', source_id:  76170, name: 'The Wolverine (2013)' },
    { id: 'logan', source_id:  263115, name: 'Logan (2017)' },
    { id: 'deadpool', source_id:  29366, name: 'Deadpool (2016)' },
    { id: 'deadpool-2', source_id:  383498, name: 'Deadpool 2 (2018)' },
    { id: 'the-new-mutants', source_id:  340102, name: 'The New Mutants (2020)' },
    { id: 'x-men-evolution', source_id: 668, name: 'X‑Men: Evolution (TV, 2000‑2003)' },
    { id: 'x-men-97', source_id:  138502, name: "X‑Men ’97 (2024– )" }
  ],
  start_year: '2000',
  end_year: '2019',
  overview: 'The X‑Men Film Universe, developed by 20th Century Fox, introduced audiences to a team of powerful mutants and tackled complex themes of identity, prejudice, and heroism over nearly two decades.',
},
{
  id: 'ssu',
  name: "Sony's Spider‑Man Universe",
  description: "Sony's cinematic universe of films based on characters from the Spider‑Man comics.",
  iconicCharacters: [],
  media: [
    { id: 'venom', source_id: 335983, name: 'Venom',  },
    { id: 'venom-let-there-be-carnage', source_id: 580489, name: 'Venom: Let There Be Carnage',  },
    { id: 'morbius', source_id: 526896, name: 'Morbius', },
    { id: 'madame-web', source_id: 634492, name: 'Madame Web',  },
    { id: 'venom-the-last-dance', source_id: 912649, name: 'Venm: The Last Dance', },
    { id: 'kraven-the-hunter', source_id: 539972, name: 'Kraven the Hunter', },
    { id: 'spider-noir', source_id: 220102, name: 'Spider‑Noir (live‑action series)',  },
  ],
  start_year: '2018',
  end_year: '',
  overview: "Sony’s Spider‑Man Universe (SSU) is a loose connected franchise built around Spider‑Man characters, launched with Venom in 2018 and including Venom films, Morbius, Madame Web, and Kraven the Hunter, plus the upcoming live‑action Spider‑Noir series."
},
{
  id: 'spider-verse',
  name: 'Spider-Verse',
  description: 'The animated multiverse saga following different Spider-People, beginning with Into the Spider-Verse.',
  iconicCharacters: [],
  media: [
    { id: 'into-the-spider-verse', source_id: 324857, name: 'Spider-Man: Into the Spider‑Verse' },
    { id: 'across-the-spider-verse', source_id: 610253, name: 'Spider-Man: Across the Spider‑Verse' },
   
  ],
  start_year: '2018',
  end_year: '',
  overview: 'The Spider‑Verse is an animated multiverse of Spider‑People that began with the critically acclaimed Into the Spider‑Verse.'
},




{
  id: 'marvel-animated-90s',
  name: 'Marvel Animated Universe (1990s)',
  description: 'A shared animated universe that aired throughout the 1990s, featuring crossover events, team-ups, and serialized storytelling among Marvel’s most iconic characters.',
  start_year: '1992',
  end_year: '1998',
  iconicCharacters: [
    'Spider-Man', 'Wolverine', 'Cyclops', 'Storm', 'Iron Man', 'War Machine', 'Hulk', 'Ghost Rider', 'The Fantastic Four'
  ],
  media: [
    { id: 'xmen-tas-1992', source_id: 11109, name: 'X-Men: The Animated Series (1992)' },
    { id: 'spiderman-tas-1994', source_id: 11488, name: 'Spider-Man: The Animated Series (1994)' },
    { id: 'iron-man-1994', source_id: 3039, name: 'Iron Man (1994)' },
    { id: 'fantastic-four-1994', source_id: 3035, name: 'Fantastic Four (1994)' },
    { id: 'hulk-1996', source_id: 3612, name: 'The Incredible Hulk (1996)' },
    { id: 'silver-surfer-1998', source_id: 9785, name: 'Silver Surfer (1998)' },
    { id: 'avengers-united-1999', source_id: 15758, name: 'The Avengers: United They Stand (1999)' }
  ],
  overview: 'This galaxy includes the cornerstone shows of the Marvel Animated Universe (MAU), which introduced millions of viewers to serialized superhero stories with interconnected plots and cameos.'
},
{
  id: 'marvel-animated-2010s',
  name: 'Marvel Animated Universe (2010s)',
  description: 'A shared animated universe developed by Marvel Television for Disney XD. These shows share continuity, crossovers, and feature core Marvel heroes in updated modern arcs.',
  start_year: '2012',
  end_year: '2019',
  iconicCharacters: [
    'Spider-Man', 'Iron Man', 'Hulk', 'Captain America', 'Thor', 'Nova', 'White Tiger', 'Rocket Raccoon', 'Gamora'
  ],
  media: [
    { id: 'ultimate-spiderman-2012', source_id: 44006, name: 'Ultimate Spider-Man (2012)' },
    { id: 'avengers-assemble-2013', source_id: 62852, name: 'Avengers Assemble (2013)' },
    { id: 'agents-of-smash-2013', source_id: 46817, name: 'Hulk and the Agents of S.M.A.S.H. (2013)' },
    { id: 'guardians-galaxy-2015', source_id: 65334, name: 'Guardians of the Galaxy (2015)' }
  ],
  overview: 'Ultimate Spider-Man kicked off this universe, which continued through Avengers Assemble, Hulk and the Agents of S.M.A.S.H., and Guardians of the Galaxy, all featuring interconnected plots and recurring characters.'
},
{
  id: 'elseworlds-marvel',
  name: 'Elseworlds: Marvel',
  description: 'A collection of Marvel shows across time that exist in standalone timelines — unique interpretations, alternate continuities, or isolated adaptations of Marvel characters.',
  start_year: '1966',
  end_year: '',
  iconicCharacters: [
    'Silver Surfer', 'Wolverine', 'X-Men', 'Blade', 'The Punisher', 'Spider-Man', 'Iron Fist', 'Luke Cage', 'Cloak and Dagger', 'Legion'
  ],
  media: [{ id: 'marvel-super-heroes-1966', source_id: 2164, name: 'The Marvel Super Heroes (1966)' },
    { id: 'spider-man-1967', source_id: 1482, name: 'Spider-Man (1967–1970)' },
    { id: 'fantastic-four-1967', source_id: null, name: 'Fantastic Four (1967)' },
    { id: 'new-fantastic-four-1978', source_id: null, name: 'The New Fantastic Four (1978)' },
    { id: 'spider-woman-1979', source_id: null, name: 'Spider-Woman (1979)' },
    { id: 'spider-man-1981', source_id: null, name: 'Spider-Man (1981)' },
    { id: 'amazing-friends-1981', source_id: null, name: 'Spider-Man and His Amazing Friends (1981)' },
    { id: 'hulk-1982', source_id: null, name: 'The Incredible Hulk (1982)' },
    { id: 'silver-surfer-1998', source_id: 9785, name: 'Silver Surfer (1998)' },
    { id: 'x-men-evolution-2000', source_id: 1436, name: 'X-Men: Evolution (2000)' },
    { id: 'daredevil-2003', source_id: null, name: 'Daredevil (2003 film)' },
     { id: 'hulk-2003', source_id: null, name: 'Hulk (2003 film)' },
    { id: 'wolverine-and-the-xmen-2008', source_id: 13469, name: 'Wolverine and the X-Men (2008)' },
    { id: 'spectacular-spiderman', source_id: 3854, name: 'The Spectacular Spider‑Man (2008–2009)' },
    { id: 'super-hero-squad', source_id: 38532, name: 'The Super Hero Squad Show (2009–2011)' },
    { id: 'blade-the-series-2006', source_id: 1596, name: 'Blade: The Series (2006)' },
    { id: 'helicarrier-files-1998', source_id: null, name: 'Nick Fury: Agent of S.H.I.E.L.D. (1998)' },
    { id: 'modok-2021', source_id: 115554, name: 'MODOK (2021)' },
    { id: 'ghost-rider-2007', source_id: null, name: 'Ghost Rider (2007)' },
    { id: 'wolverine-and-the-xmen-2009', source_id: null, name: 'Wolverine and the X‑Men (TV, 2009–2010)' },
    { id: 'ghost-rider-spirit-of-vengeance-2011', source_id: null, name: 'Ghost Rider: Spirit of Vengeance (2011)' },
    { id: 'fantastic-four-1994', source_id: null, name: 'The Fantastic Four (1994, unreleased)' },
    { id: 'fantastic-four-2015', source_id: 166424, name: 'Fantastic Four (2015)' },
    { id: 'cloak-and-dagger', source_id: null, name: 'Cloak & Dagger (2018–2019)' },
    { id: 'helstrom', source_id: null, name: 'Helstrom (2020)' },
    { id: "x-men-evolution", "source_id": 668, "name": "X‑Men: Evolution (TV, 2000‑2003)" },
    { id: 'hit-monkey', source_id: null, name: 'Hit‑Monkey (2021)' },
    {id: 'ironman-armored-adventures', source_id: null, name: 'Iron Man:Armored Adventures (2008-2012)'}

    
    
    
  ],
  overview: 'This galaxy features Marvel series that do not belong to a shared cinematic or animated universe. Each tells its own version of Marvel lore, often with unique style, continuity, or tone.'
},

{
  id: 'big-hero-6',
  name: 'Big Hero 6 Universe',
  description: 'A futuristic blend of superhero action and robotics, following Hiro Hamada and Baymax as they protect San Fransokyo.',
  iconicCharacters: [
    '/characters/marvel/big-hero-6/hiro.png',
    '/characters/marvel/big-hero-6/baymax.png',
    '/characters/marvel/big-hero-6/go-go.png',
    '/characters/marvel/big-hero-6/honey-lemon.png',
    '/characters/marvel/big-hero-6/wasabi.png',
    '/characters/marvel/big-hero-6/fred.png'
  ],
  media: [
    { id: 'big-hero-6', source_id: 177572, name: 'Big Hero 6 (2014)' },
    { id: 'big-hero-6-the-series', source_id: 73055, name: 'Big Hero 6: The Series (2017–2021)' },
    { id: 'baymax', source_id: 113988, name: 'Baymax! (2022)' },
    { id: 'feast', source_id: 24450, name: 'Feast (2014 short)' }
  ],
  start_year: '2014',
  end_year: '2022',
  overview: 'The Big Hero 6 universe mixes Marvel’s team-based heroism with a Disney twist, centering on Hiro and Baymax as they face off against tech-powered threats.',
},
  {
  id: 'netflix-marvel',
  name: 'Netflix Marvel',
  description: 'The collection of Marvel TV shows and movies originally produced for or primarily associated with Netflix, featuring darker, street-level heroes and interconnected storylines.',
  start_year: '2015',
  end_year: '2019',
  
  iconicCharacters: [
    'Daredevil',
    'Jessica Jones',
    'Luke Cage',
    'Iron Fist',
    'Punisher',
    'Colleen Wing',
    'Claire Temple'
  ],
  media: [
    { id: 'daredevil', source_id: 45639, name: 'Daredevil (2015–2018)' },
    { id: 'jessica-jones', source_id: 63174, name: 'Jessica Jones (2015–2019)' },
    { id: 'luke-cage', source_id: 63175, name: 'Luke Cage (2016–2018)' },
    { id: 'iron-fist', source_id: 67915, name: 'Iron Fist (2017–2018)' },
    { id: 'the-punisher', source_id: 45824, name: 'The Punisher (2017–2019)' },
    { id: 'the-defenders', source_id: 67466, name: 'The Defenders (2017)' }
  ],
  overview: 'This galaxy features the Marvel shows produced exclusively for Netflix, focusing on gritty, street-level superheroes with interconnected storylines culminating in the crossover event, The Defenders.'


},

{
  id: 'daredevil-galaxy',
  name: 'Daredevil & Elektra Universe',
  description: 'Marvel street‑level films focusing on Daredevil and Elektra, released outside MCU.',
  start_year: '2003',
  end_year: '2005',
  iconicCharacters: ['Daredevil', 'Elektra'],
  media: [
    { id: 'daredevil-2003', source_id: null, name: 'Daredevil (2003)' },
    { id: 'elektra-2005', source_id: 142297, name: 'Elektra (2005)' }
  ],
  overview: 'Darker superhero films centered on Matt Murdock and Elektra Natchios, produced by Fox/Marvel Enterprises.'
},

{
  id: 'blade-galaxy',
  name: 'Blade Universe',
  description: 'Marvel live-action films centered on the vampire hunter Blade, released pre‑MCU.',
  start_year: '1998',
  end_year: '2004',
  iconicCharacters: ['Blade'],
  media: [
    { id: 'blade-1998', source_id: 36647, name: 'Blade (1998)' },
    { id: 'blade-ii', source_id: 36586, name: 'Blade II (2002)' },
    { id: 'blade-trinity', source_id: 36648, name: 'Blade: Trinity (2004)' }
  ],
  overview: 'The Blade film trilogy starring Wesley Snipes, produced by New Line Cinema, forming a standalone Marvel franchise separate from the MCU.'
},

{
  id: 'fantastic-four-2000s',
  name: 'Fantastic Four Universe',
  description: '2000s live‑action Fantastic Four films released by Fox, pre‑Marvel Studios ownership.',
  start_year: '2005',
  end_year: '2007',
  iconicCharacters: ['Mr. Fantastic', 'Invisible Woman', 'Human Torch', 'Thing', 'Silver Surfer'],
  media: [
    { id: 'fantastic-four-2005', source_id: null, name: 'Fantastic Four (2005)' },
    { id: 'fantastic-four-2', source_id: null, name: 'Fantastic Four: Rise of the Silver Surfer (2007)' }
  ],
  overview: 'Two early-2000s Fantastic Four films based on Marvel’s first family, produced by 20th Century Fox.'
}


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
  watch_type: ['tv'],
  start_year: '2014',
  end_year: '', // Ongoing
  overview: 'Star Wars Canon encompasses all films, shows, books, and comics officially recognized by Lucasfilm after the 2014 reboot. This includes the Skywalker Saga, The Mandalorian, and new content that expands the galaxy with cohesive storytelling.',
},
{
  id: 'sw-legends',
  name: 'Legends',
  description: 'The original expanded universe, containing all comics, novels, and games released before the 2014 continuity reboot.',
  iconicCharacters: [],
  media: [],
  watch_type: ['tv'],
  start_year: '1977',
  end_year: '2014', // Ended at the reboot
  overview: 'Star Wars Legends refers to the expansive alternate timeline of Star Wars media released before the 2014 reboot. It introduced iconic characters and events outside of the film canon, forming a beloved yet unofficial continuity.',
},

  ],
};

export const OPUniverse: Universe = {
  id: 'one-piece',
  name: 'One Piece',
  description: 'Embark on an epic adventure across the Grand Line with Luffy and his crew in search of the legendary One Piece treasure.',
  logoUrl: '/Universe Logos/one-piece-logo.png',
 
  iconicCharacters: [
    '/characters/one-piece/U-Pics/luffy-duece.png',
    '/characters/one-piece/U-Pics/one-piece-manga.png',
  ],

 galaxies: [
  
  {
    id: "east-blue",
    name: "East Blue Saga",
    description: "The beginning of Luffy's journey, where he gathers his first crewmates.",
    iconicCharacters: [
      "/characters/one-piece/East-Blue/nami-east-blue.png",
      "/characters/one-piece/East-Blue/zoro-east-blue.png",
      "/characters/one-piece/East-Blue/arlong.png"
    ],
    media: [
     { id: "romance-dawn", source_id: 21, name: "Romance Dawn Arc" },
  { id: "orange-town", source_id: 21, name: "Orange Town Arc" },
  { id: "syrup-village", source_id: 21, name: "Syrup Village Arc" },
  { id: "baratie", source_id: 21, name: "Baratie Arc" },
  { id: "arlong-park", source_id: 21, name: "Arlong Park Arc" },
  { id: "loguetown", source_id: 21, name: "Loguetown Arc" }
],
watch_type: ["anime"],
start_year: "1999",
end_year: "2001",
overview:
  "The East Blue Saga marks the origin of Luffy’s adventure as he forms the core of the Straw Hat crew. It introduces key characters and lays the foundation of the pirate world."
},
{
  id: "alabasta",
  name: "Alabasta Saga",
  description:
    "The Straw Hat Pirates journey to stop a rebellion and face the warlord Crocodile.",
  iconicCharacters: [
    "/characters/one-piece/Alabasta/vivi.png",
    "/characters/one-piece/Alabasta/croc.png",
    "/characters/one-piece/Alabasta/ace-alabasta.png"
  ],
  media: [
    { id: "reverse-mountain", source_id: 21, name: "Reverse Mountain Arc" },
    { id: "whisky-peak", source_id: 21, name: "Whisky Peak Arc" },
    { id: "little-garden", source_id: 21, name: "Little Garden Arc" },
    { id: "drum-island", source_id: 21, name: "Drum Island Arc" },
    { id: "arabasta", source_id: 21, name: "Arabasta Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2001",
  end_year: "2003",
  overview:
    "The Arabasta Saga sees the crew travel through dangerous territories to help Princess Vivi stop a rebellion. It climaxes in an epic confrontation with the warlord Crocodile."
},
{
  id: "sky-island",
  name: "Sky Island Saga",
  description:
    "The Straw Hats reach the sky island of Skypiea and uncover ancient mysteries.",
  iconicCharacters: [
    "/characters/one-piece/Skypiea/enel.png",
    "/characters/one-piece/Skypiea/asure-skypiea.png"
  ],
  media: [
    { id: "jaya", source_id: 21, name: "Jaya Arc" },
    { id: "skypiea", source_id: 21, name: "Skypiea Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2003",
  end_year: "2004",
  overview:
    "In the Sky Island Saga, the Straw Hats confront the god-like Enel and explore ancient civilizations and poneglyphs."
},
{
  id: "water-seven",
  name: "Water 7 Saga",
  description:
    "The Straw Hat Pirates face new challenges in Water Seven and Enies Lobby.",
  iconicCharacters: [
    "/characters/one-piece/Water-Seven/franky-water-seven.png",
    "/characters/one-piece/Water-Seven/boxer-luffy.png"
  ],
  media: [
    { id: "long-ring-long-land", source_id: 21, name: "Long Ring Long Land Arc" },
    { id: "water-seven", source_id: 21, name: "Water Seven Arc" },
    { id: "enies-lobby", source_id: 21, name: "Enies Lobby Arc" },
    { id: "post-enies-lobby", source_id: 21, name: "Post-Enies Lobby Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2005",
  end_year: "2009",
  overview:
    "Water 7 Saga features internal strife and confrontations with government forces, including the recruitment of Franky."
},
{
  id: "thriller-bark",
  name: "Thriller Bark Saga",
  description:
    "The Straw Hats battle Gecko Moria and his zombie army aboard a haunted ship.",
  iconicCharacters: [
      "/characters/one-piece/Thriller Bark/1a7689ce0f00daddc02c96c59a510f83.png",
      "/characters/one-piece/Thriller Bark/G4Lr3U.png",
      "/characters/one-piece/Thriller Bark/449efcf40187fe072e24bb57a55ea690.png",
      "/characters/one-piece/Thriller Bark/e2fbd49dc7bef481f13fe12a767177ca.png",
      "/characters/one-piece/my-top-20-moments-panels-from-thriller-bark-v0-uv2yv9xfcpqe1.png",
      "/characters/one-piece/Thriller Bark/ryuma.png",
      "/characters/one-piece/Thriller Bark/gecko-moria.png"
  ],
  media: [{ id: "thriller-bark", source_id: 21, name: "Thriller Bark Arc" }],
  watch_type: ["anime"],
  start_year: "2008",
  end_year: "2009",
  overview:
    "Thriller Bark Saga introduces Brook and features the fight against the zombie crew of Gecko Moria."
},
{
  id: "summit-war",
  name: "Summit War Saga",
  description:
    "A massive conflict involving the Marines, pirates, and the war to save Ace.",
  iconicCharacters: [
    "/characters/one-piece/Sabaody-Rayleigh/rayleigh.png",
    "/characters/one-piece/Marineford/whitebeard.png",
    "/characters/one-piece/Marineford/ace.png"
  ],
  media: [
    { id: "sabaody-archipelago", source_id: 21, name: "Sabaody Archipelago Arc" },
    { id: "amazon-lily", source_id: 21, name: "Amazon Lily Arc" },
    { id: "impel-down", source_id: 21, name: "Impel Down Arc" },
    { id: "marineford", source_id: 21, name: "Marineford Arc" },
    { id: "post-war", source_id: 21, name: "Post-War Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2009",
  end_year: "2012",
  overview:
    "The Summit War Saga covers the events from the Sabaody Archipelago through the Marineford War and its aftermath."
},
{
  id: "fishman-island",
  name: "Fishman Island Saga",
  description:
    "The crew explores the underwater Fishman Island and confronts new threats.",
  iconicCharacters: [
      "/characters/one-pieceFishman Island/fishman-island-is-an-underappreciated-gem-filled-with-odas-v0-d5d731qxxswa1.png"

  
  ],
  media: [
    { id: "return-to-sabaody", source_id: 21, name: "Return to Sabaody Arc" },
    { id: "fishman-island", source_id: 21, name: "Fishman Island Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2012",
  end_year: "2013",
  overview:
    "Fishman Island Saga deals with racial tensions and a battle against the New Fishman Pirates."
},
{
  id: "dressrosa",
  name: "Dressrosa Saga",
  description:
    "The crew fights to liberate Dressrosa from the tyrant Doflamingo.",
  iconicCharacters: [
    "/characters/one-piece/Dressrosa/one-piece-doflamingo-laughing.png",
    "/characters/one-piece/Dressrosa/robin.png",
     "/characters/one-piece/Dressrosa/2f68b643b03293aa6233dce093ce2061.png",
    "/characters/one-piece/Dressrosa/7f5462710b5f5d16b9b1138edc9f380f.png",
     "/characters/one-piece/Dressrosa/78dacb8f12fe179ca6296ad17810d9fb.png",
    "/characters/one-piece/Dressrosa/a660cecc717b1314eaba53e62ef88d84.png",
    "/characters/one-piece/Dressrosa/desktop-wallpaper-luffy-amzn-to-qmij-wp4407086-one-piece-luffy-dressrosa-epic-luffy.png"
  ],
  media: [
    { id: "punk-hazard", source_id: 21, name: "Punk Hazard Arc" },
    { id: "dressrosa", source_id: 21, name: "Dressrosa Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2013",
  end_year: "2016",
  overview:
    "Dressrosa Saga is marked by political intrigue, battles, and new alliances."
},
{
  id: "whole-cake-island",
  name: "Whole Cake Island Saga",
  description: "Luffy attempts to rescue Sanji from Big Mom’s territory.",
  iconicCharacters: [
    "/characters/one-piece/Whole Cake Island/tumblr_938ed565a735a51981c62ea894da91dd_10ac5d46_1280.png"
  ],
  media: [
    { id: "zou", source_id: 21, name: "Zou Arc" },
    { id: "whole-cake-island", source_id: 21, name: "Whole Cake Island Arc" },
    { id: "levely", source_id: 21, name: "Levely Arc" }
  ],
  watch_type: ["anime"],
  start_year: "2016",
  end_year: "2019",
  overview: "Whole Cake Island Saga features infiltration and confrontation with Big Mom."
},
{
  id: "wano-country",
  name: "Wano Country Saga",
  description: "The crew allies with samurai to overthrow the tyrant Kaido.",
  iconicCharacters: [
    "/characters/one-piece/Wano/14a5fe4852ec9a95e492654ae230c466.png",
    "/characters/one-piece/buy0srooere71.png",
    "/characters/one-piece/Wano/download.png",
    "/characters/one-piece/Wano/no6mc8tc58l71.png",
    "/characters/one-piece/Wano/one-piece-manga-hd-wallpaper-preview.png",
    "/characters/one-piece/Wano/FsMoHzBX0AMoJOz.png"
  ],
  media: [{ id: "wano-country", source_id: 21, name: "Wano Country Arc" }],
  watch_type: ["anime"],
  start_year: "2019",
  end_year: "2023",
  overview: "Wano Country Saga features samurai, dragons, and the fight against Kaido."
},
{
  id: "final",
  name: "Final Saga",
  description: "The concluding saga featuring the Egghead and Elbaph arcs.",
  iconicCharacters: [
    "/characters/one-piece/Final Saga/0620166da5c6a7ce092c512a8fecc9fe.png",
    "/characters/one-piece/Final Saga/filters_quality(95)format(webp).png",
     "/characters/one-piece/Final Saga/wp13339924.png",
    "/characters/one-piece/Final Saga/Elbaph_Infobox.png",
     "/characters/one-piece/Final Saga/One-Piece-Elbalf-1.png",
    "/characters/one-piece/Elbaph/one-piece-prince-loki.png"
    
    
  ],
  media: [
    { id: "egghead", source_id: 21, name: "Egghead Arc" },
    { id: "elbaph", source_id: 21, name: "Elbaph Arc" }
  ],
  watch_type: ["tv"],
  start_year: "2024",
  overview: "The Final Saga covers the ongoing adventures in Egghead and Elbaph."
}
]
};



export const JJKUniverse: Universe = {
  id: 'jujutsu-kaisen',
  name: 'Jujutsu Kaisen',
  description: 'Enter a world of curses and sorcerers, where the battle against malevolent spirits shapes the fate of humanity.',
  logoUrl: '/Universe Logos/jujutsu-kaisen-logo.png',

  iconicCharacters: [
    '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
  ],
  galaxies: [
      {
      id: 'jjk-0',
      name: 'Jujutsu Kaisen 0',
      description: 'The prequel story that introduces the world of Jujutsu Sorcerers and the events leading up to the main series.',
      overview: 'A movie prequel focusing on Yuta Okkotsu and the origins of cursed energy in the Jujutsu Kaisen world.',
      iconicCharacters: [
        '/characters/jjk/JJK-0/yuta-jjk0.png',
        '/characters/jjk/JJK-0/suguru-geto.png'
      ],
      media: [
        {
          id: 'introduction',
          source_id: 40866,
          name: 'Introduction Arc',
         
        },
        {
          id: 'vs-noritoshi-kamo',
          source_id: 40866,
          name: 'Vs. Noritoshi Kamo Arc',
          
        },
        {
          id: 'vs-sukuna',
          source_id: 40866,
          name: 'Vs. Sukuna Arc',
          
        },
        {
          id: 'vs-fushiguro',
          source_id: 40866,
          name: 'Vs. Fushiguro Arc',
          
        }
      ],
      watch_type: ['anime'],
      start_year: '2021',
      end_year: '2021'
    },
    {
      id: 'part-1',
      name: 'Part 1 (Season 1)',
      description: 'Covers Yuji Itadori’s journey into the world of Jujutsu and the early battles with curses.',
      overview: 'From his first contact with curses to the Kyoto Goodwill Event and Death Painting Arc.',
      iconicCharacters: [
        '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
      ],
      media: [
        {
          id: 'death-painting-wombs',
          source_id: 40866,
          name: 'Death Painting Arc',
          
        },
        {
          id: 'vs-mahito',
          source_id: 40866,
          name: 'Vs. Mahito Arc',
         
        }
      ],
      watch_type: ['anime'],
      start_year: '2020',
      end_year: '2021'
    },
    {
      id: 'hidden-inventory',
      name: 'Hidden Inventory',
      description: 'Gojo and Geto’s past arc exploring their missions and philosophies.',
      overview: 'Deep dive into Gojo’s youth and the origin of Suguru Geto’s ideology.',
      iconicCharacters: [
        '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
      ],
      media: [
        {
          id: 'hidden-inventory',
          source_id: 113138,
          name: 'Hidden Inventory Arc',
         
        }
      ],
      watch_type: ['anime'],
      start_year: '2023',
      end_year: '2023'
    },
    {
      id: 'part-2',
      name: 'Part 2 (Shibuya Incident)',
      description: 'Curses attack Shibuya on Halloween; a major turning point in the story.',
      overview: 'The battle-heavy arc showcasing the biggest shift in the power dynamics of the JJK world.',
      iconicCharacters: [
        '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
      ],
      media: [
        {
          id: 'shibuya-incident',
          source_id: 40866,
          name: 'Shibuya Incident Arc',
          
        }
      ],
      watch_type: ['anime'],
      start_year: '2023',
      end_year: '2023'
    },
    {
      id: 'part-3',
      name: 'Part 3 (Culling Game Prologue)',
      description: 'Transition period leading into the Culling Game, focused on chaos and shifting alliances.',
      overview: 'Itadori Extermination and early Culling Game developments.',
      iconicCharacters: [
        '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
      ],
      media: [
        {
          id: 'itadori-extermination',
          source_id: 113138,
          name: 'Itadori Extermination Arc',
          
        },
        {
          id: 'culling-games',
          source_id: 113138,
          name: 'Culling Games Arc',
          
        }
      ],
      watch_type: ['manga'],
      start_year: '2023',
      end_year: '2024'
    },
    {
      id: 'finale',
      name: 'Finale',
      description: 'Final acts of the Jujutsu Kaisen manga.',
      overview: 'Shinjuku Showdown and beyond as the story races to its conclusion.',
      iconicCharacters: [
        '/characters/jjk/U-Pics/U-Pics-itadori.png',
    '/characters/jjk/U-Pics/jjk-dope.png',
    '/characters/jjk/U-Pics/gojo.png',
    '/characters/jjk/megumi-ss1.png',
    '/characters/jjk/Death-Painting-Arc/nobara-goat.png',
    '/characters/jjk/Fearsome Womb Arc/sukuna.png',
    '/characters/jjk/gojo-last-fight.png',
      ],
      media: [
        {
          id: 'shinjuku-showdown',
          source_id: 113138,
          name: 'Shinjuku Showdown Arc',
          
        },
        {
          id: 'post-culling-games',
          source_id: 113138,
          name: 'Post-Culling Games Arc',
          
        },
        {
          id: 'shibuya-aftermath',
          source_id: 113138,
          name: 'Shibuya Aftermath Arc',
          
        },
        {
          id: 'kenjaku-invasion',
          source_id: 113138,
          name: 'Kenjaku Invasion Arc',
          
        },
        {
          id: 'endgame',
          source_id: 113138,
          name: 'Endgame Arc',
          
        }
      ],
      watch_type: ['manga'],
      start_year: '2024',
      end_year: ''
    }
  ]
};

export const universes:Universe[] = [dcUniverse,marvelUniverse,starWarsUniverse, OPUniverse, JJKUniverse];