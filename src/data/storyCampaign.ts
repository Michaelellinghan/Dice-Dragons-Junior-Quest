import { StoryNode } from '../types';
import { PHONICS_QUESTS } from './curriculumPhonics';
import { GEO_HISTORY_QUESTS } from './geoHistory';
import { READING_CARDS } from './readingCards';
import {
  ART_PUPPY_SQUIRE,
  ART_TAVERN_HEARTH,
  ART_WATERFALL_GROTTO,
  ART_PIXIE_RING,
  ART_SUNKEN_CRYPT,
  ART_GOBLIN_WORKSHOP,
  ART_TREE_HOLLOW,
  ART_CAMPFIRE_REST,
} from './fantasyArtwork';
import { WANDER_NODES } from './storyWanderNodes';

const BASE_STORY_NODES: Record<string, StoryNode> = {
  // =========================================================================
  // ACT 1: THE WHISPERING WOODS (DEEP WOODLAND EXPEDITION)
  // =========================================================================
  'act1_intro': {
    id: 'act1_intro',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'Departure from the Sun-Glade',
    backgroundTheme: 'forest',
    subjectFocus: 'geography',
    imageUrl:
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌲 Sunlight filters through giant mossy oak trees as your adventure begins in the Whispering Sun-Glade.',
    cardPrompt: READING_CARDS[0], // cat
    narration:
      'Welcome, brave adventurer! The sun is warm above the Kingdom of Astraea. Birds sing sweet morning melodies in the high emerald branches. King Alden has dispatched an urgent parchment by royal courier owl: atop the distant peaks of Mount Pyra, the elemental dragons are restless, and only a hero with keen ears, phonics blending, and mental math can guide the realm to peace! You shoulder your leather satchel and check your supplies.',
    dmNotes:
      'Dungeon Master Prompt: Ask the child what three things they packed in their explorer backpack today (e.g. a wooden wand, an apple, a compass). Encourage them to roll their D6 for an adventure check!',
    challenge: {
      type: 'dice-check',
      dcTarget: 3,
      statUsed: 'speed',
    },
    choices: [
      {
        text: 'Follow the main oak-lined trail North towards the Vine Archway',
        targetNodeId: 'act1_gate',
        successText: 'You sprint swiftly through the glowing wildflowers! (Check passed!)',
        failText: 'You pause to admire a blue butterfly, then march ahead with a smile!',
      },
      {
        text: 'Explore the hollow redwood tree to see what is glowing inside',
        targetNodeId: 'act1_search',
        requiredStat: 'smarts',
        dc: 3,
        successText: 'You spot the warm golden light of Professor Hoot\'s cozy owl study!',
        failText: 'A friendly squirrel drops an acorn into your hood with a cheerful squeak!',
      },
      {
        text: 'Investigate the rustling blackberry thicket near the bubbling brook',
        targetNodeId: 'act1_puppy_rescue',
      },
      {
        text: 'Visit the Ancient Singing Elder Oak deep in the fragrant pine glade',
        targetNodeId: 'act1_elder_tree',
      },
      {
        text: '🍺 Wander off to the Wayward Badger Tavern for warm cider & local rumors',
        targetNodeId: 'wander_tavern_hearth',
        category: 'wander',
      },
      {
        text: '🌊 Wander off along the mossy path towards the Whispering Waterfall',
        targetNodeId: 'wander_waterfall_pool',
        category: 'wander',
      },
      {
        text: '🏕️ Take a Short Rest at the Adventurer Campfire to prepare spells',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
      },
    ],
  },

  'act1_search': {
    id: 'act1_search',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'The Secret of Professor Hoot',
    backgroundTheme: 'forest',
    subjectFocus: 'phonics',
    imageUrl:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🦉 An ancient hollow oak tree reveals glowing sound runes and a friendly barn owl.',
    cardPrompt: READING_CARDS[1], // sun
    narration:
      'Inside the hollow redwood trunk, tiny lanterns glow like fireflies. Shelves carved into the wood are filled with miniature pinecone books. Professor Hoot, a barn owl wearing round brass spectacles, looks up with a warm hoot: "Greetings, junior explorer! Before the sun sets, you must learn the light rune. The Dungeon Master sets Card #02 right on the table!"',
    dmNotes:
      'DM Tip: Place Card #02 (The Sun Torch) face up on the table! Have the child touch each sound button: /s/ /u/ /n/ and blend into "sun".',
    challenge: {
      type: 'phonics',
      phonicsData: PHONICS_QUESTS.torch_sun,
    },
    choices: [
      {
        text: 'Read the sun rune and take Professor Hoot\'s silver navigation feather',
        targetNodeId: 'act1_gate',
        successText: 'A warm golden beam of light bursts from your wand, banishing all shadows!',
        gainItem: {
          id: 'owl_feather',
          name: 'Silver Owl Feather',
          icon: '🪶',
          description: 'Glows with soft moonlight in dark caverns.',
          type: 'trinket',
        },
      },
      {
        text: 'Ask Professor Hoot about the puppy rustling in the bushes nearby',
        targetNodeId: 'act1_puppy_rescue',
      },
    ],
  },

  'act1_puppy_rescue': {
    id: 'act1_puppy_rescue',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'The Spotted Puppy in the Blackberry Thicket',
    backgroundTheme: 'forest',
    subjectFocus: 'phonics',
    imageUrl: ART_PUPPY_SQUIRE,
    imageCaption:
      '🐶 Pip the brave golden puppy squire peeking out from enchanted blackberry leaves with his hero bandana!',
    cardPrompt: READING_CARDS[2], // dog
    narration:
      'You gently part the wild blackberry leaves. A small golden puppy squire with floppy brown ears, big curious eyes, and a wagging tail whimpers softly! He wears a tiny red adventurer bandana, but dried mud covers his collar. The Dungeon Master places Card #03 right in front of you! Touch the sound buttons /d/ /o/ /g/ to read who this furry squire is!',
    dmNotes:
      'Curriculum Link: Blending CVC phonemes /d/ /o/ /g/. Place Card #03 on the table.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'puppy_dog_card',
        word: 'dog',
        phonemes: ['d', 'o', 'g'],
        correctAnswer: 'dog',
        options: ['dog', 'dig', 'dot'],
        type: 'cvc',
        instruction: 'Point to each sound button on Card #03: /d/ ... /o/ ... /g/!',
        hint: 'First sound /d/ like drum, middle /o/ like octopus, ending /g/ like grapes!',
      },
    },
    choices: [
      {
        text: 'Feed the puppy travel biscuits and welcome him as your squire!',
        targetNodeId: 'act1_gate',
        successText: 'The puppy does an excited spin, gives your hand a wet lick, and trots proudly beside you!',
        gainItem: {
          id: 'puppy_companion',
          name: 'Loyal Puppy Squire',
          icon: '🐕',
          description: 'Wags his tail to boost your bravery during spooky checks.',
          type: 'trinket',
        },
      },
      {
        text: 'Follow Pip the puppy to the Ancient Singing Elder Oak!',
        targetNodeId: 'act1_elder_tree',
      },
      {
        text: '🍺 Take Pip to the Wayward Badger Tavern to celebrate with a bowl of sweet cider',
        targetNodeId: 'wander_tavern_hearth',
        category: 'wander',
      },
    ],
  },

  'act1_elder_tree': {
    id: 'act1_elder_tree',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'The Ancient Singing Elder Oak & Forest Dryad',
    backgroundTheme: 'forest',
    subjectFocus: 'phonics',
    imageUrl: ART_TREE_HOLLOW,
    imageCaption:
      '🌳 The Ancient Singing Elder Oak hollow library with glowing spellbooks and Professor Hoot!',
    cardPrompt: READING_CARDS[3], // bed
    narration:
      'You follow a mossy path shaded by giant ferns until you stand before the Elder Oak. The tree is as wide as a castle cottage, and its leaves chime like crystal bells in the breeze! A gentle nature dryad named Elora steps from the boughs, crowned with wild jasmine: "Welcome, little wanderer! In the First Age of Astraea, our ancestors carved the first phonics sound-stones right into our bark. Before your long march North, you must prepare a soft moss bed to rest!" The Dungeon Master places Card #04 on the table: blend the sounds /b/ /e/ /d/ to create a comfortable rest spot!',
    dmNotes:
      'Curriculum Link: Letters and Sounds Phase 2 - Blending CVC phonemes /b/ /e/ /d/. Place Card #04 on the table.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'elder_oak_bed',
        word: 'bed',
        phonemes: ['b', 'e', 'd'],
        correctAnswer: 'bed',
        options: ['bed', 'bad', 'red'],
        type: 'cvc',
        instruction: 'Point to each sound button on Card #04: /b/ ... /e/ ... /d/!',
        hint: 'First sound /b/ like bounce, middle /e/ like egg, ending /d/ like drum!',
      },
    },
    choices: [
      {
        text: 'Receive the Singing Acorn Charm and proceed to the Guardian Gate',
        targetNodeId: 'act1_gate',
        successText: 'Elora smiles: "May the roots of the forest guide your footsteps safely!"',
        gainItem: {
          id: 'singing_acorn',
          name: 'Singing Acorn Charm',
          icon: '🌰',
          description: 'Hums a sweet woodland tune that calms nervous woodland creatures.',
          type: 'trinket',
        },
      },
    ],
  },

  'act1_gate': {
    id: 'act1_gate',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'The Sound-Stone Guardian Gate',
    backgroundTheme: 'forest',
    subjectFocus: 'phonics',
    imageUrl:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🐱 An enchanted stone archway with a sleeping kitten gargoyle that wakes when you read its card.',
    cardPrompt: READING_CARDS[0], // cat
    narration:
      'Before you looms a grand stone archway woven with twisting flowering honeysuckle. Perched upon the keystone is a sleeping granite kitten gargoyle. It snores with tiny puffs of purple glitter: "Zzz... to open the forest boundary, sound out the three letters carved into my collar!" The Dungeon Master places Card #01 right in front of you!',
    dmNotes:
      'Curriculum Link: Letters and Sounds Phase 2 - Blending CVC phonemes /c/ /a/ /t/. Place Card #01 on the table!',
    challenge: {
      type: 'phonics',
      phonicsData: PHONICS_QUESTS.gate_cat,
    },
    choices: [
      {
        text: 'Touch the sound buttons, read "cat" aloud, and unlock the gate!',
        targetNodeId: 'act1_otter_ford',
        successText: 'The stone kitten purrs loudly! The archway vines part with a shower of golden sparkles!',
      },
    ],
  },

  'act1_otter_ford': {
    id: 'act1_otter_ford',
    act: 1,
    actTitle: 'Act I: The Whispering Woods',
    title: 'The Muddy River Ford & The Playful Otters',
    backgroundTheme: 'forest',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🦦 Sleek river otters balancing smooth river stones and splashing in the clear river shallows.',
    cardPrompt: READING_CARDS[7], // mud
    narration:
      'Beyond the gate, the trail leads down to a wide, sparkling river ford. Three sleek brown otters slide down the muddy bank with a joyful "WHEEE!" Barnaby the otter squeaks: "Our dam has 7 heavy branches clogging the fish stream! If you can cast your arithmetic spell to take away 3 branches (7 - 3), the water will flow clear!" First, read the mud mortar rune on Card #08!',
    dmNotes:
      'Maths & Phonics: Place Card #08 (mud) on the table. Then solve subtraction: 7 - 3 = 4.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'otter_dam_math',
        type: 'subtraction',
        question: 'There are 7 branches. The otters take away 3 branches. How many branches are left? (7 - 3 = ?)',
        num1: 7,
        num2: 3,
        operator: '-',
        correctAnswer: 4,
        options: [3, 4, 5],
        maxCountVisual: 7,
        flavorSpell: 'Cast River Current Sweep to wash 3 branches aside!',
      },
    },
    choices: [
      {
        text: 'Cast your spell to clear the river branches and cross the shallows!',
        targetNodeId: 'act2_crossroads',
        successText: 'WHOOSH! The river gurgles peacefully! The otters do synchronized backflips in celebration!',
        gainItem: {
          id: 'river_pebble',
          name: 'Smooth Jasper River Pebble',
          icon: '🪨',
          description: 'A polished stone gifted by the river otters.',
          type: 'trinket',
        },
      },
    ],
  },

  // =========================================================================
  // ACT 2: THE FOUR WINDS RIVER & COMPASS GEOGRAPHY
  // =========================================================================
  'act2_crossroads': {
    id: 'act2_crossroads',
    act: 2,
    actTitle: 'Act II: The Whispering River',
    title: 'The Four Winds Crossroads & Compass Rose',
    backgroundTheme: 'forest',
    subjectFocus: 'geography',
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🧭 A four-winds compass crossroads where river shallows meet lush green meadows.',
    cardPrompt: READING_CARDS[6], // net
    narration:
      'You step onto the northern bank. A tall carved wooden post has four brass arrows pointing N, S, E, and W! A royal courier pigeon flutters down with a message from King Alden: "Remember the explorer rhyme: Never Eat Shredded Wheat! North is straight ahead towards my stone citadel!" But under the bridge, a brass key has fallen into the reeds. The DM places Card #07 on the table: decode the explorer net to scoop it up!',
    dmNotes:
      'Curriculum Link: KS1 Geography - Compass directions (North, South, East, West) & directional language.',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.compass_bridge,
    },
    choices: [
      {
        text: 'Use your brass compass to march straight North towards the Castle Citadel!',
        targetNodeId: 'act3_castle_approach',
        successText: 'North is straight ahead! You follow the riverbank in perfect direction!',
        failText: 'Remember the explorer compass rhyme: Never Eat Shredded Wheat!',
      },
      {
        text: 'Unroll your kingdom parchment map to study the river symbols first',
        targetNodeId: 'act2_map_check',
      },
      {
        text: 'Visit Master Dylan\'s Watermill and Wind Tower to study cloud signals and wind math',
        targetNodeId: 'act2_cartographer_tower',
      },
      {
        text: '🍺 Wander West down the cobbled lane to the Wayward Badger Tavern',
        targetNodeId: 'wander_tavern_hearth',
        category: 'wander',
      },
      {
        text: '🍄 Wander East into the mist to find the Moonlit Fairy Mushroom Ring',
        targetNodeId: 'wander_pixie_ring',
        category: 'wander',
      },
      {
        text: '⚙️ Wander toward the clanking gears in the brush to meet Sprocket the Goblin',
        targetNodeId: 'wander_goblin_camp',
        category: 'wander',
      },
    ],
  },

  'act2_cartographer_tower': {
    id: 'act2_cartographer_tower',
    act: 2,
    actTitle: 'Act II: The Whispering River',
    title: 'Master Dylan\'s Windmill & The Weather Signal',
    backgroundTheme: 'forest',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌾 A giant timber windmill turning peacefully by the riverbank, measuring weather and river currents.',
    cardPrompt: READING_CARDS[7], // run
    narration:
      'Beside the roaring river weir stands a magnificent timber windmill with spinning canvas sails. Master Dylan, a friendly beaver-kin cartographer wearing a leather apron and brass goggles, waves from the balcony: "Hullo there, junior ranger! The four winds are blowing strong today! We need to balance the grain sacks on the waterwheel hoist. 5 sacks on the left platform + 5 sacks on the right platform = ? How many sacks are turning the great millstone?" To sprint up the ladder swiftly, read Card #09: /r/ /u/ /n/!',
    dmNotes:
      'Maths & Phonics: Doubles addition 5 + 5 = 10. Place Card #09 on the table: /r/ /u/ /n/.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'windmill_math_balance',
        type: 'addition',
        question: '5 grain sacks + 5 grain sacks = ? How many sacks in total? (5 + 5 = ?)',
        num1: 5,
        num2: 5,
        operator: '+',
        correctAnswer: 10,
        options: [8, 9, 10],
        maxCountVisual: 10,
        flavorSpell: 'Balance the Great Waterwheel Hoist!',
      },
    },
    choices: [
      {
        text: 'Hoist the grain and take Master Dylan\'s Brass Weather Vane Token',
        targetNodeId: 'act3_castle_approach',
        successText: 'The windmill turns smoothly, singing a deep rhythmic hum: "Hooosh-whooosh!"',
        gainItem: {
          id: 'weather_vane_token',
          name: 'Brass Wind-Vane Token',
          icon: '🧭',
          description: 'A miniature brass rooster compass that always spins to true North.',
          type: 'trinket',
        },
      },
    ],
  },

  'act2_map_check': {
    id: 'act2_map_check',
    act: 2,
    actTitle: 'Act II: The Whispering River',
    title: 'Reading the Royal Kingdom Scroll',
    backgroundTheme: 'forest',
    subjectFocus: 'geography',
    imageUrl:
      'https://images.unsplash.com/photo-1524654458049-e36be0721fa2?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '📜 An ancient hand-drawn fantasy parchment map with compass rose and terrain markers.',
    cardPrompt: READING_CARDS[10], // ship
    narration:
      'You unroll your crinkly parchment map. It shows rolling green hills, jagged brown peaks, and a winding blue ribbon connecting the great sea to the mountain lake. The Dungeon Master places Card #11 on the table: read the ship card to understand river navigation and water symbols!',
    dmNotes:
      'Curriculum Link: Map symbols and keys for physical geography (rivers, mountains, coastlines).',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.river_geography,
    },
    choices: [
      {
        text: 'Cross the bridge and march onwards to King Alden\'s Castle',
        targetNodeId: 'act3_castle_approach',
        successText: 'Your map reading is flawless! You march with complete confidence.',
      },
    ],
  },

  // =========================================================================
  // ACT 3: THE CASTLE CITADEL OF KING ALDEN & MEDIEVAL HISTORY
  // =========================================================================
  'act3_castle_approach': {
    id: 'act3_castle_approach',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Fortress of King Alden & The Moat',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🏰 The magnificent limestone Citadel of King Alden surrounded by a sparkling defensive moat.',
    cardPrompt: READING_CARDS[12], // fish
    narration:
      'Rising majestically on the horizon stands the grand Citadel of King Alden! High stone battlements overlook a wide, sparkling ring of water where golden carp swim among lily pads. Royal trumpets sound from the gatehouse! Sir Barnaby the Lion Knight greets you in gleaming chainmail armor: "Greetings, junior hero! Before we lower the bridge, tell our sentries what this protective water ring is called!"',
    dmNotes:
      'Curriculum Link: KS1 History - Castles and fortresses, defensive design (moats).',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.castle_moat,
    },
    choices: [
      {
        text: 'Identify the defensive water ring as a Moat!',
        targetNodeId: 'act3_drawbridge',
        successText: 'Correct! The guards cheer: "A true scholar of castles has arrived!"',
      },
    ],
  },

  'act3_drawbridge': {
    id: 'act3_drawbridge',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'Lowering the Heavy Drawbridge',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌉 Massive oak drawbridge lowered by iron chains across the castle moat.',
    cardPrompt: READING_CARDS[15], // chip
    narration:
      'The moat is too deep to swim across in heavy travel boots. Two giant iron chains hum with tension in the gatehouse tower. Sir Barnaby smiles: "A drawbridge is the front door of our fortress! To lower it smoothly without snapping the wooden winch chock, read the /ch/ digraph on Card #16!"',
    dmNotes:
      'Curriculum Link: Castle architecture - Drawbridge mechanics & Phase 3 Digraph /ch/. Place Card #16 on the table.',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.castle_drawbridge,
    },
    choices: [
      {
        text: 'Lower the Drawbridge and march into the courtyard!',
        targetNodeId: 'act3_armory_chest',
        successText: 'CREAAK! The massive timber drawbridge lands safely with a mighty thud!',
      },
      {
        text: 'Visit the Royal Armory to help Sir Barnaby count practice shields',
        targetNodeId: 'act3_armory_shields',
      },
      {
        text: '🏰 Wander down the cliffside steps into the Sunken Crypt of the Dragon Knights',
        targetNodeId: 'wander_crypt_entry',
        category: 'wander',
      },
      {
        text: '🏕️ Make a rest camp by the moat willows to recover all hearts',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
      },
    ],
  },

  'act3_armory_shields': {
    id: 'act3_armory_shields',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Armory of the Shield-Bearers',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🛡️ Racks of polished heraldic shields and chainmail coats in the royal knight armory.',
    cardPrompt: READING_CARDS[13], // moth
    narration:
      'Inside the armory, rows of shiny shields painted with golden lions and soaring dragons line the walls. Sir Barnaby holds up a piece of real chainmail: "Knights wore thousands of interlocking iron rings to protect against arrows! We have 10 heraldic shields to polish. We have already cleaned 4 shields. 10 - 4 = ? How many shields are left to shine?" First, read the velvet cloak badge on Card #14 with the soft /th/ sound!',
    dmNotes:
      'Place Card #14 (moth) on the table. Solve arithmetic subtraction: 10 - 4 = 6.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'armory_shield_math',
        type: 'subtraction',
        question: 'There are 10 shields. 4 shields are already polished. How many are left? (10 - 4 = ?)',
        num1: 10,
        num2: 4,
        operator: '-',
        correctAnswer: 6,
        options: [5, 6, 7],
        maxCountVisual: 10,
        flavorSpell: 'Cast Armor Polish to shine all remaining shields!',
      },
    },
    choices: [
      {
        text: 'Shine the shields and receive King Alden\'s knighting blessing!',
        targetNodeId: 'act3_banquet_hall',
        successText: 'CLANG! The shields shine like mirrors in the morning sun!',
        gainItem: {
          id: 'knightly_shield',
          name: 'Polished Lion Shield Token',
          icon: '🛡️',
          description: 'A miniature heraldic shield representing castle bravery.',
          type: 'shield',
        },
      },
    ],
  },

  'act3_banquet_hall': {
    id: 'act3_banquet_hall',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Great Hall Banquet of King Alden',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '👑 A festive medieval feast in the Great Hall with warm apple cider and lute music.',
    cardPrompt: READING_CARDS[19], // was
    narration:
      'Lute players pluck merry tunes beside a crackling hearth in the Great Hall! King Alden smiles warmly from his throne: "Welcome to our table, little hero! In history, Great Halls were where entire villages celebrated together! The baker brings 6 berry muffins and 4 golden honey scones. 6 + 4 = 10 pastries!" The DM places Card #20 on the table to read the tricky sight word: was!',
    dmNotes:
      'History & Phonics: Place Card #20 (was) on the table. Practice reading by sight.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'tricky_word_was',
        word: 'was',
        phonemes: ['w', 'a', 's'],
        correctAnswer: 'was',
        options: ['was', 'saw', 'way'],
        type: 'sentence-reading',
        instruction: 'Read Card #20: w-a-s spells "was" by sight!',
        hint: 'It tells us what happened in the past: "The king was kind."',
      },
    },
    choices: [
      {
        text: 'Enjoy the feast and accept the King\'s Royal Mountain Permit!',
        targetNodeId: 'act3_armory_chest',
        successText: 'King Alden claps his hands: "A scholar of words and feasts!"',
      },
      {
        text: 'Visit the Royal Tapestry Gallery of Queens & Kings to uncover ancient history',
        targetNodeId: 'act3_tapestry_room',
      },
    ],
  },

  'act3_tapestry_room': {
    id: 'act3_tapestry_room',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Royal Tapestry Gallery of Queens & Kings',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🏰 Grand woven tapestries hanging along castle corridors depicting medieval knights, heraldic lions, and dragon flights.',
    cardPrompt: READING_CARDS[12], // ring
    narration:
      'High arched windows cast colored light across the castle gallery. Huge tapestries woven from gold and crimson wool line the stone corridor. Princess Willow points to a woven portrait: "Look! This shows Queen Eleanor of Astraea who ruled 400 years ago. She was known for her kindness and peace treaties with the river-kin!" To open the secret archive chamber behind the Queen\'s portrait, the DM places Card #13 on the table: read the consonant digraph /ng/ in \'ring\'!',
    dmNotes:
      'Curriculum Link: KS1 History - Monarchy, famous people of the past, and medieval heraldry. Place Card #13 on the table.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'tapestry_ring_rune',
        word: 'ring',
        phonemes: ['r', 'i', 'ng'],
        correctAnswer: 'ring',
        options: ['ring', 'sing', 'king'],
        type: 'digraph',
        instruction: 'Point to each sound button on Card #13: /r/ ... /i/ ... /ng/!',
        hint: 'Two letters "ng" make the singing sound /ng/ as in ring and wing!',
      },
    },
    choices: [
      {
        text: 'Examine Queen Eleanor\'s Golden Signet Ring and proceed to the Spell Chest',
        targetNodeId: 'act3_armory_chest',
        successText: 'The portrait swings open with a soft click, revealing the royal vault!',
        gainItem: {
          id: 'signet_ring',
          name: 'Queen Eleanor\'s Golden Ring',
          icon: '💍',
          description: 'A shining antique ring engraved with a soaring starlight dragon.',
          type: 'relic',
        },
      },
    ],
  },

  'act3_armory_chest': {
    id: 'act3_armory_chest',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Royal Spell Chest & The Digraph Lock',
    backgroundTheme: 'castle',
    subjectFocus: 'phonics',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🗝️ An ornate silver spell chest in the royal armory sealed by an ancient /ch/ rune.',
    cardPrompt: READING_CARDS[15], // chip
    narration:
      'In the private sanctuary of the keep, King Alden gestures toward an ancient carved chest bound in silver straps. "Atop Mount Pyra, dragons communicate through musical arithmetic and ancient rhymes! The Dungeon Master places Card #16 in front of you. Read the digraph card /ch/ /i/ /p/ to unlock your Wand of Sparks!"',
    dmNotes:
      'Curriculum Link: Letters and Sounds Phase 3 - Digraph /ch/ (as in chest, chop, chick).',
    challenge: {
      type: 'phonics',
      phonicsData: PHONICS_QUESTS.chest_lock,
    },
    choices: [
      {
        text: 'Speak the /ch/ sound to unlock the spell chest!',
        targetNodeId: 'act3_stone_barrier',
        successText: 'CLICK! The chest opens! Inside is the Star Spark Wand and 3 shimmering mana gems!',
        gainItem: {
          id: 'star_scroll',
          name: 'Crown of Arithmetic Spells',
          icon: '👑',
          description: 'Allows you to cast Sparkbolt and Frost Shield with mental math!',
          type: 'relic',
        },
      },
    ],
  },

  'act3_stone_barrier': {
    id: 'act3_stone_barrier',
    act: 3,
    actTitle: 'Act III: The Castle Citadel',
    title: 'The Historical Gate of Wisdom',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '✨ A mystical shimmering barrier of violet light blocking the mountain pass.',
    cardPrompt: READING_CARDS[21], // said
    narration:
      'As you exit the castle gates towards the highlands, a shimmering purple barrier of ancient magic blocks the pass! An engraving glows on the archway: "Only those who understand the wisdom of medieval history and why kings built in stone rather than wood may pass!" The Dungeon Master places Card #22 on the table: read the tricky word \'said\'!',
    dmNotes:
      'Curriculum Link: KS1 History - Transition from wooden motte-and-bailey to stone castles for defense against fire.',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.barrier_historical_event,
    },
    choices: [
      {
        text: 'Explain that stone castles do not catch fire and last for centuries!',
        targetNodeId: 'act4_mountain_cavern',
        successText: 'The barrier sparkles and dissolves into warm starlight! "Wise choice, young historian!"',
      },
    ],
  },

  // =========================================================================
  // ACT 4: THE PREHISTORIC CRYSTAL CAVERNS OF MOUNT PYRA
  // =========================================================================
  'act4_mountain_cavern': {
    id: 'act4_mountain_cavern',
    act: 4,
    actTitle: 'Act IV: The Cavern of Crystals',
    title: 'The Prehistoric Ammonite Fossil Quarry',
    backgroundTheme: 'cavern',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '💎 Shimmering violet crystals and ancient spiral ammonite fossils embedded in limestone.',
    cardPrompt: READING_CARDS[17], // rain
    narration:
      'You step inside the cool limestone caverns of Mount Pyra. Embedded in the rock wall is a perfect spiral shell millions of years old. Sir Barnaby marvels: "This mountain used to be beneath a warm ocean! A brave scientist named Mary Anning discovered fossils just like this on cliffs!" To understand how prehistoric rain and sediment formed rocks, the DM places Card #18 on the table: read the vowel digraph /ai/ in \'rain\'!',
    dmNotes:
      'Curriculum Link: Science & History - Fossils, prehistoric creatures (Mary Anning context). Place Card #18 on the table.',
    challenge: {
      type: 'geo-history',
      geoData: GEO_HISTORY_QUESTS.fossil_clue,
    },
    choices: [
      {
        text: 'Examine the Ammonite Fossil and explore the Glowing Mushroom Grotto',
        targetNodeId: 'act4_mushroom_grotto',
        successText: 'Spot on! You trace the fossil spiral with your finger.',
        gainItem: {
          id: 'ammonite_fossil',
          name: 'Spiral Ammonite Fossil',
          icon: '🐚',
          description: 'A genuine prehistoric fossil millions of years old.',
          type: 'relic',
        },
      },
      {
        text: 'Follow the sound of roaring wind towards the Underground Echo Abyss',
        targetNodeId: 'act4_echo_abyss',
      },
      {
        text: 'Climb the glittering quartz steps to the Prismatic Geode Sanctuary',
        targetNodeId: 'act4_geode_sanctuary',
      },
    ],
  },

  'act4_mushroom_grotto': {
    id: 'act4_mushroom_grotto',
    act: 4,
    actTitle: 'Act IV: The Cavern of Crystals',
    title: 'The Glowing Mushroom Grotto',
    backgroundTheme: 'cavern',
    subjectFocus: 'phonics',
    imageUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🍄 Giant bioluminescent mushrooms glowing in soothing shades of aqua, emerald, and lavender.',
    cardPrompt: READING_CARDS[16], // see
    narration:
      'A subterranean garden of giant bioluminescent mushrooms glows in shades of emerald and purple! Cave moths flutter peacefully between the glowing caps. To find the secret crystal staircase behind the giant mushroom, the DM places Card #17 on the table! Two \'e\'s hold hands to make the long /ee/ sound: /s/ /ee/ = see!',
    dmNotes:
      'Phase 3 Vowel Digraph /ee/. Place Card #17 on the table. Double addition: 5 purple spores + 5 aqua spores = 10!',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'grotto_see_rune',
        word: 'see',
        phonemes: ['s', 'ee'],
        correctAnswer: 'see',
        options: ['see', 'sea', 'set'],
        type: 'vowel-sound',
        instruction: 'Point to each sound button on Card #17: /s/ ... /ee/!',
        hint: 'Two letters "ee" make one long sound /ee/ as in tree and see!',
      },
    },
    choices: [
      {
        text: 'Harvest glowing spores and ascend the spiral stairs to the Gateway of Ten',
        targetNodeId: 'act4_number_door',
        successText: 'The grotto illuminates your path with warm emerald light!',
      },
    ],
  },

  'act4_echo_abyss': {
    id: 'act4_echo_abyss',
    act: 4,
    actTitle: 'Act IV: The Cavern of Crystals',
    title: 'The Underground Echo Canyon',
    backgroundTheme: 'cavern',
    subjectFocus: 'phonics',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌌 A vast underground chasm where crystal bridges echo like singing glass bells.',
    cardPrompt: READING_CARDS[23], // fast
    narration:
      'You stand before a breathtaking underground canyon. When you whisper, your voice bounces across the high limestone: "Hello... hello... hello!" That is an echo! To cross the slippery crystal gravel bridge quickly and lightly, the DM places Card #24 on the table: blend the /st/ sound in \'fast\'!',
    dmNotes:
      'Phase 4 Adjacent Consonants: /f/ /a/ /s/ /t/. Place Card #24 on the table. Subtraction: 9 - 4 = 5 pebbles.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'echo_fast_rune',
        word: 'fast',
        phonemes: ['f', 'a', 's', 't'],
        correctAnswer: 'fast',
        options: ['fast', 'fist', 'past'],
        type: 'cvc',
        instruction: 'Blend the adjacent consonants /s/ and /t/ on Card #24: /f/ /a/ /s/ /t/!',
        hint: 'Four sounds together: f-a-s-t spells fast!',
      },
    },
    choices: [
      {
        text: 'Sprint across the crystal bridge with nimble steps towards the Dragon Gate!',
        targetNodeId: 'act4_number_door',
        successText: 'You glide across silently without dislodging a single pebble!',
      },
    ],
  },

  'act4_geode_sanctuary': {
    id: 'act4_geode_sanctuary',
    act: 4,
    actTitle: 'Act IV: The Cavern of Crystals',
    title: 'The Prismatic Geode Observatory',
    backgroundTheme: 'cavern',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '💎 A colossal open amethyst geode as tall as a house, glowing with violet and rose quartz facets.',
    cardPrompt: READING_CARDS[18], // boat
    narration:
      'You climb a flight of smooth steps carved from white quartz and enter a cavern filled with giant purple amethyst geodes! Sir Barnaby gasps: "These crystals grew inside cooling volcanic bubbles millions of years ago, when the earth was very young!" On the cavern wall, ancient cave artists drew pictures of prehistoric boats crossing an inland sea. The DM places Card #19 on the table: read the vowel digraph /oa/ in \'boat\'!',
    dmNotes:
      'Curriculum Link: Science & History - Rocks, crystals, and prehistoric cave art. Place Card #19 on the table.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'geode_boat_rune',
        word: 'boat',
        phonemes: ['b', 'oa', 't'],
        correctAnswer: 'boat',
        options: ['boat', 'coat', 'boot'],
        type: 'vowel-sound',
        instruction: 'Point to each sound button on Card #19: /b/ ... /oa/ ... /t/!',
        hint: 'Two letters "oa" make the long vowel sound /oa/ as in boat and goat!',
      },
    },
    choices: [
      {
        text: 'Gather a glowing amethyst crystal shard and ascend to the Gateway of Ten',
        targetNodeId: 'act4_number_door',
        successText: 'The crystal shard hums with soft violet magic in your hand!',
        gainItem: {
          id: 'amethyst_shard',
          name: 'Prismatic Amethyst Shard',
          icon: '🔮',
          description: 'A sparkling violet crystal that illuminates dark caverns with gentle light.',
          type: 'relic',
        },
      },
    ],
  },

  'act4_number_door': {
    id: 'act4_number_door',
    act: 4,
    actTitle: 'Act IV: The Cavern of Crystals',
    title: 'The Gateway of Ten Sockets',
    backgroundTheme: 'cavern',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🔮 A magical gemstone archway requiring arithmetic number bonds to balance its power.',
    cardPrompt: READING_CARDS[20], // the
    narration:
      'At the highest point of the crystal tunnels stands the colossal Gateway of Solara. Ten round gemstone sockets circle the carved arch. Six sockets are filled with blazing ruby crystals, but four are dark and empty! A glowing inscription says: "Only when 10 gems glow together will the summit doors swing open! (6 + ? = 10)". First, read the golden key rune on Card #21!',
    dmNotes:
      'Curriculum Link: Year 1 Mathematics - Number bonds to 10. Place Card #21 on the table.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'door_bond_10',
        type: 'number-bond',
        question: 'We have 6 gems in the door. How many more gems are needed to make 10? (6 + ? = 10)',
        num1: 6,
        num2: 4,
        operator: '+',
        correctAnswer: 4,
        options: [3, 4, 5],
        maxCountVisual: 10,
        flavorSpell: 'Channel 4 glowing crystals into the arch!',
      },
    },
    choices: [
      {
        text: 'Place 4 glowing crystals into the sockets to complete the 10!',
        targetNodeId: 'act4_pixie_cloud',
        requiredStat: 'sparkle',
        dc: 3,
        successText: 'The ten crystals ignite in brilliant rainbow light! The summit doors swing open!',
      },
    ],
  },

  'act4_pixie_cloud': {
    id: 'act4_pixie_cloud',
    act: 4,
    actTitle: 'Act IV: The High Mountain Terrace',
    title: 'The Cloud-Perch of the Zephyr Pixies',
    backgroundTheme: 'starlight',
    subjectFocus: 'geography',
    imageUrl:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🧚 Winged zephyr pixies holding a starlight tea party above rolling white mountain clouds.',
    cardPrompt: READING_CARDS[24], // sentence: red fox
    narration:
      'Stepping out of the cavern, you stand on a high mountain terrace above the clouds! Swirling white mists billow below like a sea of whipped cream. Looking down at the kingdom, you see how rivers, forests, and castles look like a map! That is called a bird\'s-eye view! A pixie hands you a birch-bark scroll with a complete decodable sentence: place Card #25 on the table to read it!',
    dmNotes:
      'Decodable sentence: "A red fox sat on a big log." Place Card #25 on the table.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'pixie_fox_sentence',
        word: 'fox',
        phonemes: ['f', 'o', 'x'],
        correctAnswer: 'fox',
        options: ['fox', 'box', 'fix'],
        type: 'sentence-reading',
        instruction: 'Read Card #25: "A red fox sat on a big log."',
        hint: 'Point to each word in the sentence with your finger!',
      },
    },
    choices: [
      {
        text: 'Accept the pixies\' golden dust blessing and proceed to the Dragon Lairs!',
        targetNodeId: 'act5_baby_sparky',
        successText: 'The pixies sprinkle golden glitter on your cape! You feel completely energized!',
        gainItem: {
          id: 'pixie_dust',
          name: 'Golden Pixie Stardust',
          icon: '✨',
          description: 'A pouch of shimmering dust that tickles with joy.',
          type: 'potion',
        },
      },
    ],
  },

  // =========================================================================
  // ACT 5: THE ELEMENTAL DRAGONS & CELESTIAL SUMMIT DANCE
  // =========================================================================
  'act5_baby_sparky': {
    id: 'act5_baby_sparky',
    act: 5,
    actTitle: 'Act V: The Elemental Dragons',
    title: 'The Crater of Sparky the Baby Fire-Drake',
    backgroundTheme: 'starlight',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🔥 Baby Sparky the Fire-Drake sneezing cinnamon-scented spark bubbles near volcanic hot springs.',
    cardPrompt: READING_CARDS[26], // sentence: the sun is hot
    narration:
      'Near the volcanic hot springs at the summit ridge, baby Sparky the Fire-Drake is having fiery hiccups! Every time he hiccups—"HIC!"—a shower of harmless spark-bubbles pops into the air. "HIC!" To soothe his tummy, you mix 4 glacier ice drops with 4 mountain spring water drops. 4 + 4 = ? How many soothing drops do you feed baby Sparky? First, read Card #27 describing the sun!',
    dmNotes:
      'Maths & Phonics: Doubles addition: 4 + 4 = 8. Place Card #27 on the table.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'sparky_hiccup_math',
        type: 'addition',
        question: '4 cooling ice drops + 4 spring water drops. How many drops in total? (4 + 4 = ?)',
        num1: 4,
        num2: 4,
        operator: '+',
        correctAnswer: 8,
        options: [7, 8, 9],
        maxCountVisual: 8,
        flavorSpell: 'Mix the Soothing Glacial Elixir!',
      },
    },
    choices: [
      {
        text: 'Feed Sparky the soothing elixir and scratch him behind his ruby horns!',
        targetNodeId: 'act5_glacia_ridge',
        successText: 'Sparky purrs with warm contentment and curls into a peaceful dragon ball!',
        gainItem: {
          id: 'ruby_scale',
          name: 'Warm Ruby Dragon Scale',
          icon: '💎',
          description: 'A glowing scale given by baby Sparky in thanks.',
          type: 'relic',
        },
      },
      {
        text: 'Follow Sparky to Pyra the Ember Wyrm\'s Geothermal Bath & Marshmallow Forge!',
        targetNodeId: 'act5_pyra_forge',
      },
    ],
  },

  'act5_pyra_forge': {
    id: 'act5_pyra_forge',
    act: 5,
    actTitle: 'Act V: The Elemental Dragons',
    title: 'Pyra the Ember Wyrm\'s Thermal Bath & Marshmallow Forge',
    backgroundTheme: 'starlight',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌋 Pyra the Ember Wyrm soaking in a bubbling volcanic thermal spring, toasting sweet marshmallows.',
    cardPrompt: READING_CARDS[27], // bell ring sentence
    narration:
      'Sparky leads you through a warm misty archway into the Geothermal Grotto. There, soaking happily in a warm turquoise pool, is Pyra the Ember Wyrm! Her scales are radiant like polished copper. "Ah, little champions!" Pyra rumbles with a laugh. "I am toasting campfire treats! I have 6 toasted marshmallows on my wooden skewer, and Sparky brought 3 more. 6 + 3 = ? How many marshmallows do we have to share around the fire?" First, read Card #28!',
    dmNotes:
      'Maths & Phonics: Addition within 10 (6 + 3 = 9). Place Card #28 on the table: "A bell will ring in the tower."',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'pyra_marshmallow_math',
        type: 'addition',
        question: '6 toasted marshmallows + 3 marshmallows = ? How many treats in total? (6 + 3 = ?)',
        num1: 6,
        num2: 3,
        operator: '+',
        correctAnswer: 9,
        options: [8, 9, 10],
        maxCountVisual: 9,
        flavorSpell: 'Toast Marshmallows with Ember Spark Magic!',
      },
    },
    choices: [
      {
        text: 'Share the delicious treats and ascend to Glacia\'s Frost Wyrm Ridge',
        targetNodeId: 'act5_glacia_ridge',
        successText: 'Pyra beams with warmth: "You have a true dragon heart of kindness and number magic!"',
        gainItem: {
          id: 'pyra_ember_badge',
          name: 'Badge of the Ember Forge',
          icon: '🔥',
          description: 'Keeps your hands warm in chilly mountain gales.',
          type: 'trinket',
        },
      },
    ],
  },

  'act5_glacia_ridge': {
    id: 'act5_glacia_ridge',
    act: 5,
    actTitle: 'Act V: The Elemental Dragons',
    title: 'The Sapphire Ridge of Glacia the Ice-Drake',
    backgroundTheme: 'starlight',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '❄️ Glacia the Sapphire Ice-Drake spreading wings of translucent blue ice atop snowy crags.',
    cardPrompt: READING_CARDS[22], // they
    narration:
      'Icy winds swirl around frosted arches of sapphire crystal. Glacia, the magnificent Ice-Drake, spreads wings made of translucent blue frost! She tests your party\'s teamwork: "Eight overheated steam geysers are melting the glacier. Freeze 3 geysers with your Frost Shield spell (8 - 3 = ?). And read the scroll of unity on Card #23: \'they\'!"',
    dmNotes:
      'Subtraction & Tricky Words: 8 - 3 = 5. Place Card #23 ("they") on the table.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'glacia_geyser_math',
        type: 'subtraction',
        question: '8 steam geysers. Freeze 3 of them. How many remain? (8 - 3 = ?)',
        num1: 8,
        num2: 3,
        operator: '-',
        correctAnswer: 5,
        options: [4, 5, 6],
        maxCountVisual: 8,
        flavorSpell: 'Cast Glacial Chill Shield to freeze 3 geysers!',
      },
    },
    choices: [
      {
        text: 'Freeze the 3 geysers and read tricky word "they" to earn Glacia\'s trust!',
        targetNodeId: 'act5_bramble_lair',
        successText: 'Glacia touches your wand with her wing, crystallizing the tip into sapphire starlight!',
      },
    ],
  },

  'act5_bramble_lair': {
    id: 'act5_bramble_lair',
    act: 5,
    actTitle: 'Act V: The Elemental Dragons',
    title: 'The Alpine Greenhouse of Bramble the Earth Dragon',
    backgroundTheme: 'forest',
    subjectFocus: 'creativity',
    imageUrl:
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌿 Bramble the Earth Dragon resting peacefully among mossy roots, wild strawberries, and sweet jasmine.',
    cardPrompt: READING_CARDS[25], // sentence: can you see the cat
    narration:
      'In a sheltered alpine bowl near the summit, Bramble the Earth Dragon rests inside a cradle of mossy roots. Birds nest safely between his jade-colored back ridges! Bramble yawns, smelling of fresh mint: "Help me bloom flowers for the bumblebees! 5 pink strawberry blossoms + 3 golden dragon-fruit flowers = ? blooms! First, read the question scroll on Card #26!"',
    dmNotes:
      'Arithmetic addition: 5 + 3 = 8. Place Card #26 ("Can you see the cat?") on the table.',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'bramble_bloom_math',
        type: 'addition',
        question: '5 strawberry blossoms + 3 dragon-fruit flowers. How many flowers in total? (5 + 3 = ?)',
        num1: 5,
        num2: 3,
        operator: '+',
        correctAnswer: 8,
        options: [7, 8, 9],
        maxCountVisual: 8,
        flavorSpell: 'Cast Sprout Vine Bloom to awaken the alpine garden!',
      },
    },
    choices: [
      {
        text: 'Cast the bloom spell and wear Bramble\'s fragrant jasmine crown!',
        targetNodeId: 'act5_dragon_confrontation',
        successText: 'Fragrant blossoms burst across the meadow! The bees buzz in cheerful harmony!',
        gainItem: {
          id: 'jasmine_crown',
          name: 'Crown of Alpine Jasmine',
          icon: '🌸',
          description: 'A fragrant flower crown that fills your heart with joy.',
          type: 'trinket',
        },
      },
    ],
  },

  'act5_dragon_confrontation': {
    id: 'act5_dragon_confrontation',
    act: 5,
    actTitle: 'Act V: The Great Dragon Duel',
    title: 'The Starlight Crater of Solara',
    backgroundTheme: 'starlight',
    subjectFocus: 'maths',
    imageUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🌌 The celestial aurora summit of Mount Pyra where Solara the Starlight Dragon rests.',
    cardPrompt: READING_CARDS[29], // sentence: the star is in the night sky
    narration:
      'At last, you step out onto the glittering summit crater of Mount Pyra! An immense dragon with iridescent scales of gold, pearl, and violet curls atop a bed of starlight lilies. Solara opens her gentle violet eyes: "Greetings, junior hero! Your 20-day journey through phonics, numbers, history, and the four winds has brought you here! The Dungeon Master places Card #30 on the table! Read the realm\'s grandest scroll, then let us perform the Grand Dance of Arithmetic Balance!"',
    dmNotes:
      'Combat transition: Time for the epic Dragon Duel! Kids use addition, subtraction, and dice rolls to balance Solara\'s energy.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'solara_star_scroll',
        word: 'star',
        phonemes: ['s', 't', 'ar'],
        correctAnswer: 'star',
        options: ['star', 'stay', 'stir'],
        type: 'sentence-reading',
        instruction: 'Read Card #30: "The star is in the night sky."',
        hint: 'Point to each sound button and word with your finger!',
      },
    },
    choices: [
      {
        text: 'Enter the Dragon Duel Arena and cast your arithmetic spells!',
        targetNodeId: 'dragon_arena_trigger',
      },
    ],
    dragonBattleId: 'solara',
  },

  // =========================================================================
  // ACT 6: ROYAL CORONATION & CHAMPION OF ASTRAEA
  // =========================================================================
  'act6_victory': {
    id: 'act6_victory',
    act: 6,
    actTitle: 'Epilogue: Champion of Astraea',
    title: 'The Royal Coronation & Knighting Ceremony',
    backgroundTheme: 'castle',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '👑 Golden starlight fireworks and royal fanfare celebrating the young hero of Astraea!',
    cardPrompt: READING_CARDS[28], // king song
    narration:
      'HURRAH! Solara glides down from the clouds into the courtyard of King Alden\'s Castle! Trumpets blare, church bells ring, and the entire kingdom—knights, pixies, otters, and owls—cheers your name. King Alden places the Golden Crown of Wisdom upon your head! You have mastered reading cards, compass directions, medieval castles, prehistoric fossils, and arithmetic dragon spells. You are officially proclaimed "Master Protector of Astraea and Champion Rider of the Starlight Dragon"!',
    dmNotes:
      'Reward: Present the child with their printable Royal Certificate of Heroic Mastery and award celebration fanfare!',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'coronation_king_song',
        word: 'king',
        phonemes: ['k', 'i', 'ng'],
        correctAnswer: 'king',
        options: ['king', 'ring', 'sing'],
        type: 'sentence-reading',
        instruction: 'Read Card #29: "The king will sing a song for you!"',
        hint: 'Notice the digraph "ng" at the end of king, sing, and song!',
      },
    },
    choices: [
      {
        text: 'Join the Grand Evening Lantern Festival and release starlight wishing lanterns!',
        targetNodeId: 'act6_festival_lanterns',
      },
      {
        text: 'Play the Dragon Duel Arena again to practice more mental math',
        targetNodeId: 'act5_dragon_confrontation',
      },
      {
        text: 'Return to the beginning to start a brand new quest',
        targetNodeId: 'act1_intro',
      },
    ],
  },

  'act6_festival_lanterns': {
    id: 'act6_festival_lanterns',
    act: 6,
    actTitle: 'Epilogue: Champion of Astraea',
    title: 'The Grand Evening Lantern Festival & Royal Banquet',
    backgroundTheme: 'starlight',
    subjectFocus: 'history',
    imageUrl:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    imageCaption:
      '🏮 Thousands of golden paper lanterns floating into the dusk sky above the castle towers.',
    cardPrompt: READING_CARDS[29], // star bright sentence
    narration:
      'As twilight blankets Astraea in velvety indigo, the Grand Lantern Festival begins! Thousands of warm golden paper lanterns rise into the evening breeze above the castle towers. All five guardian dragons—Solara, Glacia, Pyra, Bramble, and baby Sparky—circle gracefully overhead, leaving gentle spark-trails that spell out: "WISDOM, FRIENDSHIP, KINDNESS". King Alden, Professor Hoot, Sir Barnaby, and your faithful puppy Pip raise their goblets of sweet apple cider: "To our bravest young champion, whose reading and arithmetic restored peace to all the realm!" Read Card #30: "A star is bright in the night sky!"',
    dmNotes:
      'Grand Finale Reading Celebration: Card #30. Encourage the child to make a special wish on the floating starlight lanterns!',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'festival_star_bright',
        word: 'star',
        phonemes: ['s', 't', 'ar'],
        correctAnswer: 'star',
        options: ['star', 'stay', 'stir'],
        type: 'sentence-reading',
        instruction: 'Read Card #30: "A star is bright in the night sky!"',
        hint: 'Blend the sounds /st/ and the "ar" digraph: /st/ /ar/ = star!',
      },
    },
    choices: [
      {
        text: 'Release your golden lantern into the starry sky and celebrate with the dragons',
        targetNodeId: 'act6_victory',
        successText: 'Your lantern drifts toward the constellations, carrying your wishes to the stars!',
      },
      {
        text: 'Play the Dragon Duel Arena again to challenge your dragon friends to friendly games',
        targetNodeId: 'act5_dragon_confrontation',
      },
      {
        text: 'Return to the start of the adventure to journey again',
        targetNodeId: 'act1_intro',
      },
    ],
  },
};

export const STORY_NODES: Record<string, StoryNode> = {
  ...BASE_STORY_NODES,
  ...WANDER_NODES,
};
