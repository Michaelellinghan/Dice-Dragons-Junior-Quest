// Curated, rich fantasy storybook assets for Dice & Dragons: Junior Quest
// All images are curated high-resolution fantasy & tabletop artwork with fallbacks.

export interface RegionArt {
  id: string;
  name: string;
  bannerUrl: string;
  thumbnailUrl: string;
  atmosphere: string;
  colorScheme: string;
}

export interface StorySceneArt {
  nodeId: string;
  title: string;
  imageUrl: string;
  caption: string;
}

export interface DragonArt {
  id: string;
  name: string;
  title: string;
  portraitUrl: string;
  arenaImageUrl: string;
  elementColor: string;
}

export const ADVENTURE_ASSETS = {
  // =========================================================================
  // MAPS & GEOGRAPHY
  // =========================================================================
  maps: {
    centralKingdomParchment:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
    centralKingdomWatercolor:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    skyIslesParchment:
      'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1600&q=80',
    skyIslesWatercolor:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    worldAtlasCover:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80',
    compassRose:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
  },

  // =========================================================================
  // REGION BANNERS (ALL 10 TERRITORIES)
  // =========================================================================
  regions: {
    whispering_woods: {
      id: 'whispering_woods',
      name: 'The Whispering Woods',
      bannerUrl:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Sun-dappled ancient oak canopies with glowing moss',
      colorScheme: 'from-emerald-800 to-teal-950',
    },
    four_winds_river: {
      id: 'four_winds_river',
      name: 'The Four Winds River & Valley',
      bannerUrl:
        'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Crystal rushing river rapids, willow weirs & wooden watermills',
      colorScheme: 'from-sky-800 to-blue-950',
    },
    castle_citadel: {
      id: 'castle_citadel',
      name: 'The Citadel of High Astraea',
      bannerUrl:
        'https://images.unsplash.com/photo-1533158307587-828f0a76ef96?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Majestic golden limestone fortress towers with heraldic banners',
      colorScheme: 'from-amber-800 to-stone-900',
    },
    crystal_caverns: {
      id: 'crystal_caverns',
      name: 'The Crystal Caverns & Fossil Quarry',
      bannerUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Subterranean violet amethyst geodes, glow-worms & subterranean echo lake',
      colorScheme: 'from-purple-900 to-indigo-950',
    },
    mount_pyra: {
      id: 'mount_pyra',
      name: 'Mount Pyra & Starlight Pinnacle',
      bannerUrl:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Golden volcanic peaks, thermal hot springs & dragon flight perches',
      colorScheme: 'from-rose-900 to-amber-950',
    },
    floating_docks: {
      id: 'floating_docks',
      name: 'The Floating Docks of Zephyria',
      bannerUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Wooden airship anchorages suspended above rolling sea clouds',
      colorScheme: 'from-cyan-800 to-sky-950',
    },
    cumulus_nursery: {
      id: 'cumulus_nursery',
      name: 'The Fluffy Cumulus Nursery',
      bannerUrl:
        'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Soft cotton cloud beds, singing lilies & sleeping baby drakes',
      colorScheme: 'from-emerald-800 to-green-950',
    },
    chime_belfry: {
      id: 'chime_belfry',
      name: 'The Starlight Chime Spire',
      bannerUrl:
        'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Soaring white marble belfry towers ringing melodic brass chimes',
      colorScheme: 'from-amber-800 to-yellow-950',
    },
    kite_meadows: {
      id: 'kite_meadows',
      name: 'The Windy Meadows & Cumulus Maze',
      bannerUrl:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'High clover meadows with dragon kites and bouncy cloud walls',
      colorScheme: 'from-purple-800 to-pink-950',
    },
    aurora_summit: {
      id: 'aurora_summit',
      name: 'The Grand Aurora Spire',
      bannerUrl:
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80',
      atmosphere: 'Cosmic celestial summit bathed in dancing emerald aurora borealis',
      colorScheme: 'from-indigo-900 to-violet-950',
    },
  },

  // =========================================================================
  // PAGE HEADER BANNERS
  // =========================================================================
  pages: {
    storyQuest: {
      bannerUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
      title: 'The Royal Story Quest',
      subtitle: 'An interactive fantasy campaign with choices, phonics spells & dragon friendships',
    },
    dailyCampaigns: {
      bannerUrl:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
      title: 'The Daily Campaign Chronicle',
      subtitle: '40 structured multi-scene curriculum adventures across the 20 Sagas',
    },
    kingdomMap: {
      bannerUrl:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
      title: 'The Grand Cartography of Astraea',
      subtitle: 'Explore the living map of the Kingdom, Sky Isles, and World Atlas',
    },
    dragonArena: {
      bannerUrl:
        'https://images.unsplash.com/photo-1533158307587-828f0a76ef96?auto=format&fit=crop&w=1600&q=80',
      title: 'The Dragon Friendly Duel Arena',
      subtitle: 'Cast mental maths spells and roll safe D6 dice with majestic dragon companions',
    },
    characterSheet: {
      bannerUrl:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80',
      title: 'The Hero Guildhall & Character Studio',
      subtitle: 'Customize your young hero, view leveled stats, inventory, and badges',
    },
    screenFreeKit: {
      bannerUrl:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80',
      title: 'The Screen-Free Tabletop Kit',
      subtitle: 'Printable reading cards, quest handouts, character sheets, and paper dice',
    },
    dmKit: {
      bannerUrl:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
      title: 'The Parent & Teacher Dungeon Master Kit',
      subtitle: 'Story scripts, curriculum guides, printable tokens, and encounter advice',
    },
    worldAtlas: {
      bannerUrl:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80',
      title: 'The Grand Atlas of the 20 Sagas',
      subtitle: 'A sweeping universe of 400 days covering every corner of Astraea',
    },
    artStudio: {
      bannerUrl:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80',
      title: 'The Royal Dragon Art Studio',
      subtitle: 'Create & edit custom quest illustrations, hero portraits, and map landmarks with AI',
    },
  },

  // =========================================================================
  // STORY QUEST NODE ARTWORK (SCENE-SPECIFIC IMAGES)
  // =========================================================================
  storyScenes: {
    act1_intro: {
      nodeId: 'act1_intro',
      title: 'The Whispering Glade & Sleeping Kitten Gargoyle',
      imageUrl:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Sunbeams filter through ancient branches onto the mossy stone kitten.',
    },
    act2_forest: {
      nodeId: 'act2_forest',
      title: 'The Ancient Singing Elder Oak',
      imageUrl:
        'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
      caption: 'Elora the forest dryad teaches phonics runes inscribed in ancient bark.',
    },
    act3_river: {
      nodeId: 'act3_river',
      title: 'The Four Winds Watermill & Bridge',
      imageUrl:
        'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Master Dylan’s giant wooden waterwheel turns in the sparkling mountain river.',
    },
    act4_caves: {
      nodeId: 'act4_caves',
      title: 'The Glowing Amethyst Caverns',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      caption: 'Giant purple geodes and prehistoric ammonite fossils line the subterranean walls.',
    },
    act5_citadel: {
      nodeId: 'act5_citadel',
      title: 'The Sunlit Great Throne of High Astraea',
      imageUrl:
        'https://images.unsplash.com/photo-1533158307587-828f0a76ef96?auto=format&fit=crop&w=1200&q=80',
      caption: 'King Alden awards heraldic ribbons beneath golden medieval tapestries.',
    },
    act6_arena: {
      nodeId: 'act6_arena',
      title: 'Mount Pyra Caldera & Solara’s Nest',
      imageUrl:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Warm geothermal thermals rise around Queen Solara’s golden starlight nest.',
    },
    act6_victory: {
      nodeId: 'act6_victory',
      title: 'The Grand Coronation of the Junior Dragon Knight',
      imageUrl:
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dragons and knights unite as fireworks and starlight illuminate the realm!',
    },
  },

  // =========================================================================
  // DRAGON PORTRAITS & ARENA ARTWORK
  // =========================================================================
  dragons: {
    sparky: {
      id: 'sparky',
      name: 'Sparky the Ember Whelp',
      title: 'Playful Campfire Drake',
      portraitUrl:
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-amber-500',
    },
    bramble: {
      id: 'bramble',
      name: 'Bramble the Moss Wyrm',
      title: 'Guardian of Whispering Glade',
      portraitUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-emerald-500',
    },
    glacia: {
      id: 'glacia',
      name: 'Glacia the Frost Drake',
      title: 'Mistress of Shimmering Geodes',
      portraitUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-sky-400',
    },
    aquilon: {
      id: 'aquilon',
      name: 'Aquilon the River Wyrm',
      title: 'Master of the Four Winds Rapids',
      portraitUrl:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-blue-500',
    },
    zephyr: {
      id: 'zephyr',
      name: 'Zephyr the Cloud Drake',
      title: 'Aeronaut of the Floating Isles',
      portraitUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-indigo-400',
    },
    solara: {
      id: 'solara',
      name: 'Queen Solara the Sun Sovereign',
      title: 'High Protector of the Starlight Compass',
      portraitUrl:
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=80',
      arenaImageUrl:
        'https://images.unsplash.com/photo-1533158307587-828f0a76ef96?auto=format&fit=crop&w=1200&q=80',
      elementColor: 'text-yellow-400',
    },
  },

  // =========================================================================
  // HERO PORTRAITS
  // =========================================================================
  heroes: {
    aria: {
      portraitUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      classIcon: '✨',
    },
    bran: {
      portraitUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      classIcon: '🛡️',
    },
    zephyr: {
      portraitUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      classIcon: '🏹',
    },
    luna: {
      portraitUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      classIcon: '🌙',
    },
  },
};
