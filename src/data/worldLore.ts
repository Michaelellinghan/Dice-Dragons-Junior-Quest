export interface FantasyRace {
  id: string;
  name: string;
  avatar: string;
  culture: string;
  uniqueTraits: string;
  inclusiveNote: string;
  homeland: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  icon: string;
  climate: string;
  landmark: string;
  geographyLore: string;
  historyNote: string;
  compassPosition: 'North' | 'South' | 'East' | 'West' | 'Center';
}

export interface DragonLore {
  id: string;
  name: string;
  title: string;
  element: string;
  avatar: string;
  personality: string;
  favoriteTreat: string;
  habitat: string;
  mathAffinity: string;
  calmingLullaby: string;
  loreDescription: string;
}

export interface HistoricalEra {
  id: string;
  eraName: string;
  timeframe: string;
  symbol: string;
  summary: string;
  keyDiscoveries: string[];
}

export interface MagicalCreature {
  id: string;
  name: string;
  icon: string;
  habitat: string;
  description: string;
  rangerTip: string;
}

export interface FantasyFaction {
  id: string;
  name: string;
  icon: string;
  motto: string;
  headquarters: string;
  leader: string;
  description: string;
  dndRole: string;
}

export interface LandmarkLore {
  id: string;
  name: string;
  icon: string;
  region: string;
  description: string;
  secretRumor: string;
  dndEncounterPrompt: string;
}

export interface WorldLore {
  worldName: string;
  eraName: string;
  historySummary: string;
  races: FantasyRace[];
  regions: RegionInfo[];
  dragons: DragonLore[];
  eras: HistoricalEra[];
  creatures: MagicalCreature[];
  factions: FantasyFaction[];
  landmarks: LandmarkLore[];
}

export const REALM_LORE: WorldLore = {
  worldName: 'Astraea: The Realm of Spellbound',
  eraName: 'The Age of the Great Harmony',
  historySummary:
    'Thousands of cycles ago, Astraea was a wild land where magic was scattered like autumn leaves. Four wise elders of differing peoples gathered at the Summit of Mount Pyra to weave the Three Great Tapestries: the Tapestry of Words (phonics & storytelling), the Tapestry of Measure (counting & arithmetic), and the Tapestry of Memory (history & geography). Together, they built a realm without walls or barriers, where every creature—whether they fly, walk, glide with wheels, or swim—contributes their unique gifts. Recently, the celestial stars shifted, causing the gentle guardian dragons to sneeze hiccups of wild magic. Now, junior adventurers journey forth not to conquer, but to restore balance through friendship, letters, and numbers.',
  
  races: [
    {
      id: 'bloomfolk',
      name: 'The Bloomfolk (Flora-Kin)',
      avatar: '🌸🌱',
      culture: 'Gentle gardeners and botanists who cultivate singing flowers and glowing berries. They celebrate the changing of seasons with harvest dances.',
      uniqueTraits: 'Have leafy hair that changes color with the weather, photosynthesize sunlight, and can whisper directly to plants and trees.',
      inclusiveNote: 'All shapes and sizes, from tiny dandelion sprites to sturdy oak-folk, teaching mutual care for living ecosystems.',
      homeland: 'The Whispering Sun-Glade',
    },
    {
      id: 'stargazers',
      name: 'The Zephyr Star-Weavers',
      avatar: '✨🦼',
      culture: 'Curious sky-explorers and astronomers who map constellations and weave gentle breezes into wind-chimes.',
      uniqueTraits: 'Glide across cloud-bridges using enchanted floating chairs, gliders, and celestial wings. They communicate with star-signals and musical chime languages.',
      inclusiveNote: 'Proudly includes adventurers with diverse mobility and sensory styles, celebrating wheeled star-gliders and expressive chime-signing.',
      homeland: 'The Starlight Plateau of Aurora',
    },
    {
      id: 'riverkin',
      name: 'The River-Otter Artisans (Lutrans)',
      avatar: '🦦🌊',
      culture: 'Master carpenters, hydrologists, and bridge-builders who live in floating timber homes along the rivers.',
      uniqueTraits: 'Agile swimmers who build water-wheels, repair compasses, and turn river pebbles into colorful counting stones.',
      inclusiveNote: 'Emphasizes community teamwork, welcoming travelers of every origin to share stories over riverberry tea.',
      homeland: 'The Azure Estuary & Ripple-Bends',
    },
    {
      id: 'mossgolems',
      name: 'The Moss-Heart Golems',
      avatar: '🗿🌿',
      culture: 'Ancient, gentle stone guardians with hearts made of warm amber. They are the living memory of the mountains.',
      uniqueTraits: 'Patient and thoughtful; their deep rumbling voices sound like comforting distant thunder. Birds and butterflies nest peacefully in their mossy shoulders.',
      inclusiveNote: 'Subverts the trope of aggressive monsters—they are gentle protectors who value kindness, quiet reflection, and storytelling.',
      homeland: 'The Whispering Caverns of Mount Pyra',
    },
    {
      id: 'humanfolk',
      name: 'The Frontier Scholars & Scouts',
      avatar: '🧑🏽‍🦱🧭',
      culture: 'Diverse wandering cartographers, chroniclers, and knight-scouts from all walks of life who treasure books, compasses, and campfire songs.',
      uniqueTraits: 'Deeply curious and adaptive; skilled at reading maps, deciphering ancient scrolls, and befriending wild beasts.',
      inclusiveNote: 'Celebrates people of every skin tone, background, and perspective walking side by side as equals.',
      homeland: 'The Stepping-Stone Citadel & Crossroads',
    },
  ],

  regions: [
    {
      id: 'sun_glade',
      name: 'The Whispering Sun-Glade',
      icon: '🌲',
      climate: 'Warm, dappled sunlight with fragrant pine and glowing moss.',
      landmark: 'The Sound-Stone Guardian Gate & Ancient Singing Oak',
      geographyLore: 'A lush temperate forest in the West, where ancient trees hum phonetic sounds in the breeze.',
      historyNote: 'Where early settlers carved the first phonetic letter-runes into cedar bark to communicate across the woodlands.',
      compassPosition: 'West',
    },
    {
      id: 'azure_estuary',
      name: 'The Azure Estuary & Whispering River',
      icon: '🌊',
      climate: 'Cool, breezy waters with sparkling pebbled shoals and reed banks.',
      landmark: 'The Four Winds Compass Bridge & Kingfisher Falls',
      geographyLore: 'A wide meandering river in the South, feeding clean fresh water to all villages in the valley.',
      historyNote: 'The historic waterway used by prehistoric traders who used compass stars to navigate before maps existed.',
      compassPosition: 'South',
    },
    {
      id: 'citadel',
      name: 'The Stepping-Stone Citadel',
      icon: '🏰',
      climate: 'Mild, sunny courtyard breezes around grand limestone battlements.',
      landmark: 'The Great Moat, Iron Drawbridge, and Sovereign Keep',
      geographyLore: 'Located in the Center of the realm at the crossroads of all major roads.',
      historyNote: 'Constructed by medieval kings and stone-singers with wide welcoming ramps rather than steep stairs, open to all pilgrims.',
      compassPosition: 'Center',
    },
    {
      id: 'crystal_caverns',
      name: 'The Prismatic Caverns',
      icon: '💎',
      climate: 'Cool underground cavern glowing with subterranean luminescence.',
      landmark: 'The Ammonite Fossil Wall & The Ten-Socket Crystal Arch',
      geographyLore: 'Carved deep into the limestone base of the eastern mountain range.',
      historyNote: 'Preserves fossils from the prehistoric epoch millions of years ago, before castles and knights existed.',
      compassPosition: 'East',
    },
    {
      id: 'mount_pyra',
      name: 'The Summit of Mount Pyra',
      icon: '✨',
      climate: 'Crisp mountain air beneath glittering auroras and violet skies.',
      landmark: 'The Starlight Crater & Dragon Nesting Glade',
      geographyLore: 'The highest peak in the North, rising above the cloud line.',
      historyNote: 'The sanctuary where the Starlight Dragon Solara sleeps upon a bed of star-dust flowers, watching over the realm.',
      compassPosition: 'North',
    },
  ],

  dragons: [
    {
      id: 'sparky',
      name: 'Sparky the Baby Drake',
      title: 'The Inquisitive Firefly Sprite',
      element: 'Ember & Hearthfire',
      avatar: '🦎🔥',
      personality: 'Cheery, mischievous, and energetic. He sneezes showers of harmless golden sparks when excited.',
      favoriteTreat: 'Roasted sweet acorns and honeyed oat biscuits.',
      habitat: 'The Hearthside Campfire of King Alden\'s Courtyard',
      mathAffinity: 'Counting single sparks from 1 to 5.',
      calmingLullaby: 'The Hearth Song: "Sparks that gleam, sleep and dream, glowing like a gentle beam."',
      loreDescription: 'Sparky was hatched from a ruby geode near the hot springs. He loves sitting on explorers\' shoulders and serving as a living reading lantern!',
    },
    {
      id: 'bramble',
      name: 'Bramble the Earth Dragon',
      title: 'Guardian of the Whispering Roots',
      element: 'Flora, Peat & Forest Earth',
      avatar: '🐲🌿',
      personality: 'Gentle, slow-moving, and wise. When he yawns, wild strawberries and sweet alpine jasmine instantly bloom.',
      favoriteTreat: 'Fresh mint leaves and crisp river moss.',
      habitat: 'The Alpine Root Bowl beneath Mount Pyra',
      mathAffinity: 'Doubles and number bonds within 8.',
      calmingLullaby: 'The Forest Whisper: "Deep in the moss, soft and green, sweetest dreams that you have seen."',
      loreDescription: 'Bramble has lived for three centuries. Birds safely build nests between his back scales, and otters take naps on his warm mossy belly.',
    },
    {
      id: 'glacia',
      name: 'Glacia the Frost Wyrm',
      title: 'Keeper of the Perennial Ice Mirror',
      element: 'Frost, Snowpack & Aurora Mist',
      avatar: '🐉❄️',
      personality: 'Serene, elegant, and poetic. Her scales shimmer like faceted diamonds, reflecting pastel rainbows.',
      favoriteTreat: 'Crushed glacier ice topped with blueberry nectar.',
      habitat: 'The Crystal Chime Caverns of Mount Pyra',
      mathAffinity: 'Mental subtraction from 10 down to 0.',
      calmingLullaby: 'The Snowfall Waltz: "Drifting white, silent night, starlight shines with calming light."',
      loreDescription: 'Glacia uses her breath not to freeze, but to weave delicate ice chimes that sing when the mountain wind whispers through the peaks.',
    },
    {
      id: 'pyra',
      name: 'Pyra the Ember Wyrm',
      title: 'Protector of the Volcanic Springs',
      element: 'Thermal Warmth & Golden Magma',
      avatar: '🐲🌋',
      personality: 'Hearty, warm-hearted, and boisterous. Loves campfire riddles and friendly arm-wrestling with moss golems.',
      favoriteTreat: 'Toasted marshmallows and cinnamon bark tea.',
      habitat: 'The Geothermal Steam Grotto of Mount Pyra',
      mathAffinity: 'Rapid addition equations within 10.',
      calmingLullaby: 'The Ember Glow: "Fires rest, in the nest, warm and cozy in your chest."',
      loreDescription: 'Pyra heats the subterranean water system that supplies warm baths to all villages across Astraea, keeping homes cozy in winter.',
    },
    {
      id: 'solara',
      name: 'Solara the Starlight Dragon',
      title: 'Matriarch of the Celestial Heavens',
      element: 'Starlight, Auroras & Celestial Wisdom',
      avatar: '✨🐉🌌',
      personality: 'Regal, deeply kind, and patient. Her eyes hold the wisdom of every star in the Northern hemisphere.',
      favoriteTreat: 'Starlight dew drops gathered at dawn from lavender lilies.',
      habitat: 'The Summit Crater & Celestial Observatory',
      mathAffinity: 'Balance of addition, subtraction, and number harmony.',
      calmingLullaby: 'The Celestial Hymn: "Stars take flight, through the night, rest your wings in silver light."',
      loreDescription: 'The ancient guardian who helped the first explorers chart the four cardinal winds. Her starlight scales guide lost travellers home across the dark.',
    },
  ],

  eras: [
    {
      id: 'era_prehistoric',
      eraName: 'The Epoch of Ocean & Stone',
      timeframe: '10,000,000 to 10,000 Years Ago',
      symbol: '🐚🌊',
      summary: 'Before mountains and castles existed, Astraea was covered by a warm tropical ocean filled with spiral ammonites, marine reptiles, and coral reefs.',
      keyDiscoveries: [
        'Sedimentary limestone layers in Mount Pyra',
        'Spiral ammonite fossils discovered by Mary Anning of Astraea',
        'Underground geode crystals formed by prehistoric geothermal heat',
      ],
    },
    {
      id: 'era_three_tapestries',
      eraName: 'The Weaving of the Three Runes',
      timeframe: '1,000 to 500 Years Ago',
      symbol: '📜✨',
      summary: 'The five peoples of Astraea met atop the mountain to invent writing, mathematics, and geography so that every child could explore the world.',
      keyDiscoveries: [
        'The First Phonics Sound-Stones carved from cedar wood',
        'The Base-10 Arithmetic Wand and counting pebble scales',
        'The Four-Winds Compass Rose and cardinal directions (N, S, E, W)',
      ],
    },
    {
      id: 'era_castles_trade',
      eraName: 'The Age of Castle Citadels & Watermills',
      timeframe: '500 to 50 Years Ago',
      symbol: '🏰🛡️',
      summary: 'Architects and knights built sturdy limestone fortresses with defensive moats, timber drawbridges, and floating otter watermills.',
      keyDiscoveries: [
        'Transition from flammable wooden forts to stone keeps',
        'Defensive castle architecture (crenellations, arrow slits, moats)',
        'River barge navigation and courier owl post networks',
      ],
    },
    {
      id: 'era_present',
      eraName: 'The Age of the Junior Champions',
      timeframe: 'The Present Day',
      symbol: '⭐👑',
      summary: 'Young explorers from across the realm take up satchels, wooden wands, and reading cards to embark on the 20-Day Starlight Quest to Mount Pyra.',
      keyDiscoveries: [
        'Screen-free tabletop roleplaying handbooks for early learners',
        'Phonics blending sound buttons (/c/-/a/-/t/, /sh/, /ch/, /th/)',
        'The Adventurer\'s Daily Journal for creative writing and memory recall',
      ],
    },
  ],

  creatures: [
    {
      id: 'starlight_carp',
      name: 'The Starlight Carp',
      icon: '🐟✨',
      habitat: 'The Castle Citadel Moat & Whispering River',
      description: 'Luminescent golden carp that glow softly at dusk. When children feed them breadcrumbs, they jump and leave trails of sparkling water drops.',
      rangerTip: 'Count how many jump at once! (3 in the air + 2 diving = 5 fish!)',
    },
    {
      id: 'spore_pixie',
      name: 'The Phosphor Spore Pixies',
      icon: '🧚‍♂️🍄',
      habitat: 'The Glowing Mushroom Grotto of Mount Pyra',
      description: 'Tiny thumb-sized winged spirits that carry glowing blue mushroom lanterns to light caverns for subterranean travelers.',
      rangerTip: 'Whisper politely when entering their caves; loud noises cause them to hide inside mushroom caps.',
    },
    {
      id: 'river_otter',
      name: 'Lutran River Artisans',
      icon: '🦦🪵',
      habitat: 'The Ripple-Bends and Watermill Weirs',
      description: 'Clever, cheerful brown otters wearing toolbelts woven from river reeds. They love building wooden dams and playing pebble toss.',
      rangerTip: 'They communicate with joyful squeaks and love trading shiny river stones for travel biscuits.',
    },
    {
      id: 'gargoyle_kitten',
      name: 'Granite Gargoyle Kittens',
      icon: '🐱🪨',
      habitat: 'Ancient Stone Gateways and Castle Battlements',
      description: 'Little stone kitten statues carved on ancient arches. They awaken and purr whenever a child sounds out the phonics runes carved on their collars.',
      rangerTip: 'Stroke under their stone chins; you will see tiny puffs of purple starlight glitter!',
    },
    {
      id: 'courier_owl',
      name: 'The Royal Courier Owls',
      icon: '🦉📜',
      habitat: 'The High Hollow Redwoods & Castle Towers',
      description: 'Magnificent barn owls wearing round brass spectacles and leather mail satchels. They carry royal parchment decrees from King Alden.',
      rangerTip: 'Offer an owl feather or a sweet sunflower seed to receive a secret explorer clue.',
    },
    {
      id: 'puppy_squire_pip',
      name: 'Pip the Golden Puppy Squire',
      icon: '🐶⭐',
      habitat: 'Wild Blackberry Thickets & Hero Backpacks',
      description: 'A cheerful golden retriever puppy who wears a red starry hero bandana. He carries message scrolls in his mouth and does victory spins when math challenges are solved!',
      rangerTip: 'Scratches behind his floppy ears boost your hero\'s Bravery dice rolls by +1!',
    },
    {
      id: 'clockwork_goblin_sprocket',
      name: 'Sprocket the Clockwork Goblin',
      icon: '⚙️🔧',
      habitat: 'Steam-Wing Workshop & Riverside Thickets',
      description: 'A friendly green inventor in brass flight goggles and leather tool overalls. He invents mechanical dragon toys, water-pumps, and steam gliders.',
      rangerTip: 'Always carry spare copper cogs or shiny screws to trade with Sprocket for magical compasses!',
    },
    {
      id: 'pixie_queen_gossamer',
      name: 'Queen Gossamer of the Faerie Ring',
      icon: '👑🧚',
      habitat: 'The Moonlit Luminescent Mushroom Ring',
      description: 'The graceful sovereign of the forest pixies, crowned with night-blooming jasmine flowers. She loves phonics riddles and rhyming songs.',
      rangerTip: 'Never stomp on the spotted mushrooms; step lightly and bring a gift of honeysuckle nectar.',
    },
  ],

  factions: [
    {
      id: 'hearth_badgers',
      name: 'The Order of the Hearth-Badgers',
      icon: '🍺🦡',
      motto: '"Warmth for every wanderer, a seat at every fire."',
      headquarters: 'The Wayward Badger Tavern & Inn',
      leader: 'Old Barnaby Copperbeard',
      description: 'An ancient fellowship of tavern keepers, bards, and kindly rangers who ensure no child or wanderer ever travels cold or hungry in Astraea. They mediate arguments over warm cider and friendly D6 dice games.',
      dndRole: 'Provides safe resting havens, local rumors, quest bounties, and warm hearths where heroes heal hearts.',
    },
    {
      id: 'brass_cartographers',
      name: "The Cartographers' Guild of the Brass Compass",
      icon: '🧭📜',
      motto: '"Measure the stars, chart the waters, light the way."',
      headquarters: 'The Four Winds Watermill & Wind Tower',
      leader: 'Master Dylan of the River Estuary',
      description: 'Scholars, surveyors, and otter artisans who craft precision compasses, unroll parchment maps, and study meteorological weather flags across the kingdom.',
      dndRole: 'Offers navigational challenges, compass direction puzzles (N, S, E, W), and geographic map lore.',
    },
    {
      id: 'faerie_court',
      name: 'The Faerie Court of the Moonlit Ring',
      icon: '🍄✨',
      motto: '"Laughter in the starlight, magic in the dew."',
      headquarters: 'The Luminescent Mushroom Ring of Whispering Woods',
      leader: 'Queen Gossamer',
      description: 'Playful woodland spirits who safeguard the ancient bioluminescent flora. They teach early heroes the wonder of rhyme, rhythm, and gentle acrobatics.',
      dndRole: 'Presents rhyming phonics riddles, dexterity checks, and rewards players with glowing pixie dust and silver bells.',
    },
    {
      id: 'clockwork_tinkers',
      name: 'The Clockwork Guild of Steam & Cog',
      icon: '⚙️🛞',
      motto: '"Every gear has a place, every number has a rhythm."',
      headquarters: "Sprocket's Riverside Tinkering Camp",
      leader: 'Chief Engineer Sprocket',
      description: 'Inquisitive goblin and gnome craftspeople who combine nature and mechanics to create sustainable steam-wings, water filtration wheels, and counting toys.',
      dndRole: 'Provides practical mental math challenges (addition, subtraction, counting gear teeth) with rewarding mechanical gadgets.',
    },
    {
      id: 'dragon_covenant',
      name: 'The Knights of the Starlight Dragon Covenant',
      icon: '🛡️🐉',
      motto: '"Strength guided by kindness, wisdom guided by courage."',
      headquarters: 'The Sunken Crypt & Mount Pyra Sanctuary',
      leader: 'Sir Rowan the Kindhearted (First Paladin)',
      description: 'The historic alliance between mortal heroes and the great elemental dragons. They swore an oath that true power is found in protecting the vulnerable and speaking words of truth.',
      dndRole: 'Source of ancient relics, dragon shield treasures, and heroic historical lore.',
    },
  ],

  landmarks: [
    {
      id: 'wayward_badger',
      name: 'The Wayward Badger Tavern & Hearth',
      icon: '🍺',
      region: 'Whispering Woods / Crossroads',
      description: 'A cozy timber-and-stone inn with crackling birch hearth fires, foaming cinnamon cider, and tables for rolling dice with local folk.',
      secretRumor: 'Beneath the hearth lies a secret cellar where Old Barnaby keeps ancient recipe scrolls from the First Era!',
      dndEncounterPrompt: 'Roll a D6 High-Roller contest against Barnaby or help Nimble the Bard complete a rhyming ballad.',
    },
    {
      id: 'whispering_waterfall',
      name: 'The Whispering Waterfall & Rainbow Grotto',
      icon: '🌊',
      region: 'Azure Estuary / River Bends',
      description: 'A fifty-foot cascade of crystalline mountain water pouring into a turquoise lagoon with perpetual rainbow mists.',
      secretRumor: 'Swimmers brave enough to dive behind the roaring water veil will discover the dry torchlit cave of ancient river smugglers!',
      dndEncounterPrompt: 'Perform an Athletics swimming check or solve the animal riddle on the barnacle-crusted brass chest.',
    },
    {
      id: 'pixie_ring',
      name: 'The Moonlit Faerie Mushroom Ring',
      icon: '🍄',
      region: 'Whispering Woods Deep Glade',
      description: 'A circle of giant violet and crimson spotted toadstools that glow with soothing lavender bioluminescence after twilight.',
      secretRumor: 'Dancing in the ring on a full moon causes your footsteps to chime like silver bells for three whole days!',
      dndEncounterPrompt: 'Sparkle check to balance on the slippery toadstools and answer Queen Gossamer\'s /oo/ digraph riddle.',
    },
    {
      id: 'sunken_crypt',
      name: 'The Sunken Crypt of the Dragon Knights',
      icon: '🏰',
      region: 'Castle Citadel Foothills',
      description: 'An ancient arched subterranean hall guarded by dragon statues, illuminated by blue ever-burning torches.',
      secretRumor: 'The First Knight Sir Rowan was laid to rest with the Dragon Shield of Kindness, waiting for a worthy young scholar.',
      dndEncounterPrompt: 'Decipher the phonetic sound runes /s/-/t/-/ar/ on the sarcophagus without triggering the dusty stone traps.',
    },
    {
      id: 'sprocket_workshop',
      name: "Sprocket's Steam-Wing Tinkering Camp",
      icon: '⚙️',
      region: 'Northern Pine Ridge',
      description: 'An outdoor workshop humming with spinning copper gyroscopes, steam whistles, and miniature flying contraptions.',
      secretRumor: 'Sprocket is trying to build a steam glider big enough to fly all the way up to Queen Solara\'s starlight nest!',
      dndEncounterPrompt: 'Calculate gear teeth ratios with mental addition to help Sprocket test the propeller wings safely.',
    },
    {
      id: 'adventurer_campfire',
      name: "The Adventurer's Campfire Clearing",
      icon: '🏕️',
      region: 'Every Wilderness Crossroads',
      description: 'A safe ring of river stones with dry birch logs under the stars, welcoming heroes to roast marshmallows and heal.',
      secretRumor: 'Whenever you take a Short Rest here, friendly fireflies gather to illuminate your bedtime storybook.',
      dndEncounterPrompt: 'Roleplay a campfire discussion: what was your hero\'s bravest moment today? Fully restore all hearts.',
    },
  ],
};
