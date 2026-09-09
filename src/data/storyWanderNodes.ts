import { StoryNode } from '../types';
import {
  ART_TAVERN_HEARTH,
  ART_WATERFALL_GROTTO,
  ART_PIXIE_RING,
  ART_SUNKEN_CRYPT,
  ART_GOBLIN_WORKSHOP,
  ART_CAMPFIRE_REST,
} from './fantasyArtwork';

export const WANDER_NODES: Record<string, StoryNode> = {
  // =========================================================================
  // 1. THE WAYWARD BADGER TAVERN & INN
  // =========================================================================
  'wander_tavern_hearth': {
    id: 'wander_tavern_hearth',
    act: 0,
    actTitle: 'Side Quest: Wayward Badger Tavern',
    title: 'The Hearth of the Wayward Badger',
    backgroundTheme: 'tavern',
    subjectFocus: 'creativity',
    isWanderLocation: true,
    locationName: 'Wayward Badger Inn',
    imageUrl: ART_TAVERN_HEARTH,
    imageCaption: '🍺 A cozy tavern with a roaring stone hearth, foaming cider, and cheerful adventurers.',
    narration:
      'Pushing open the heavy oak door, the rich scent of roasting sweet cinnamon apples and crackling birchwood rushes to greet you! The Wayward Badger Tavern is the warmest respite in Astraea. Old Barnaby, a merry dwarf with a braided copper beard, slides two foaming tankards of sweetberry cider across the polished counter: "Welcome, young traveler! Rest your boots by the hearth! What brings you off the beaten trail today?"',
    dmNotes:
      'D&D Roleplay Encounter: Ask the player how their hero acts in a tavern. Do they order a snack, listen to the bard, or challenge the dwarf to a friendly dice game? Give them +1 heart for visiting the cozy hearth!',
    choices: [
      {
        text: '🎲 Challenge Barnaby to a game of High-Roller D6 Tavern Dice!',
        targetNodeId: 'wander_tavern_dice',
        category: 'maths',
        icon: '🎲',
      },
      {
        text: '🎶 Listen to Nimble the Bard sing a rhyming riddle song by the fireside',
        targetNodeId: 'wander_tavern_bard',
        category: 'phonics',
        icon: '🎶',
      },
      {
        text: '🍎 Buy a mug of Hot Cinnamon Cider to heal your hearts and warm your paws',
        targetNodeId: 'wander_tavern_hearth',
        category: 'rest',
        gainItem: {
          id: 'sweet_cider',
          name: 'Hot Cinnamon Cider',
          icon: '🍺',
          description: 'A cozy warm drink that heals 2 hearts and banishes chills.',
          type: 'potion',
        },
        successText: 'You sip the delicious sweet cider. It warms your toes and fills you with joyful energy! (+2 Hearts recovered!)',
      },
      {
        text: '🗺️ Finish your rest and return to the Whispering Woods path',
        targetNodeId: 'act1_intro',
        category: 'quest',
        icon: '🌲',
      },
      {
        text: '🧭 Head North out of the tavern towards the Crossroads of Zephyria',
        targetNodeId: 'act2_crossroads',
        category: 'quest',
        icon: '🧭',
      },
    ],
  },

  // 1b. TAVERN DICE GAME
  'wander_tavern_dice': {
    id: 'wander_tavern_dice',
    act: 0,
    actTitle: 'Side Quest: Wayward Badger Tavern',
    title: 'High-Roller Tavern Dice with Old Barnaby',
    backgroundTheme: 'tavern',
    subjectFocus: 'maths',
    isWanderLocation: true,
    locationName: 'Tavern Gaming Table',
    imageUrl: ART_TAVERN_HEARTH,
    imageCaption: '🎲 Polished ivory dice rattling inside a leather cup across the wooden tavern table.',
    narration:
      'Barnaby chuckles heartily and shakes a worn leather dice cup with a loud clatter! "Here are the tavern rules, squire: I roll a 3! You must roll your adventurer D6 and beat my score. If you roll 4 or higher, the Badger\'s Lucky Clover is yours!" He slams the cup down on the oak table. It is your turn to roll!',
    dmNotes:
      'D&D Skill Check: Dice check DC 4 using Bravery or Sparkle. Let the child roll a real physical D6 or use the screen roller!',
    challenge: {
      type: 'dice-check',
      dcTarget: 4,
      statUsed: 'bravery',
    },
    choices: [
      {
        text: 'Roll with a lucky spin across the tavern table! (DC 4 Check)',
        targetNodeId: 'wander_tavern_hearth',
        category: 'quest',
        gainItem: {
          id: 'lucky_badger_clover',
          name: "Badger's Lucky Clover",
          icon: '🍀',
          description: 'A four-leaf clover pressed in wax. Adds +1 to your next dice check!',
          type: 'trinket',
        },
        successText: 'A high roll! Barnaby slaps the table with laughter: "By the thunder drakes, you got it! Take the Lucky Clover, champ!"',
        failText: 'The dice bounces into Barnaby\'s cider mug! He laughs warmly: "Close one! Have an apple slice on the house anyway!"',
      },
      {
        text: 'Return to the fireplace hearth and chat with the travelers',
        targetNodeId: 'wander_tavern_hearth',
        category: 'roleplay',
      },
    ],
  },

  // 1c. TAVERN BARD PHONICS RHYME
  'wander_tavern_bard': {
    id: 'wander_tavern_bard',
    act: 0,
    actTitle: 'Side Quest: Wayward Badger Tavern',
    title: 'The Ballad of the Starlight Compass',
    backgroundTheme: 'tavern',
    subjectFocus: 'phonics',
    isWanderLocation: true,
    locationName: 'Tavern Hearthside Stage',
    imageUrl: ART_TAVERN_HEARTH,
    imageCaption: '🪕 Nimble the gnome troubadour plucking gentle melodies on an ebony lute.',
    narration:
      'Nimble the gnome troubadour tunes his little lute with a gentle plink. "Listen closely, brave hero! My song tells of the ancient dragon compass, but the final rhyming line is missing! Help me complete the verse: \'Over the hills and through the dark, we follow the glowing starlight ______!\' Which word rhymes with dark and spark?"',
    dmNotes:
      'Curriculum Link: Phonics rhyming words with the "ar" phoneme (bark, park, spark).',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'tavern_rhyme_spark',
        word: 'spark',
        phonemes: ['sp', 'ar', 'k'],
        correctAnswer: 'spark',
        options: ['spark', 'spoke', 'spin'],
        type: 'rhyme',
        instruction: 'Which word rhymes with "dark"? Blend the sounds: /sp/ /ar/ /k/!',
        hint: 'Listen to the rhyme: dark ... park ... b-ark ... sp-ar-k!',
      },
    },
    choices: [
      {
        text: 'Sing "SPARK" together with Nimble to finish the tavern song!',
        targetNodeId: 'wander_tavern_hearth',
        category: 'phonics',
        successText: 'The whole tavern bursts into happy applause! Nimble bows low and gifts you 2 Star Sparks!',
      },
      {
        text: 'Step outside back onto the adventure road',
        targetNodeId: 'act1_intro',
        category: 'quest',
      },
    ],
  },

  // =========================================================================
  // 2. THE WHISPERING WATERFALL & SECRET GROTTO
  // =========================================================================
  'wander_waterfall_pool': {
    id: 'wander_waterfall_pool',
    act: 0,
    actTitle: 'Side Quest: Whispering Waterfall',
    title: 'The Rainbow Basin & Whispering Cascade',
    backgroundTheme: 'forest',
    subjectFocus: 'geography',
    isWanderLocation: true,
    locationName: 'Whispering Waterfall Basin',
    imageUrl: ART_WATERFALL_GROTTO,
    imageCaption: '🌊 Rushing turquoise waters cascading past mossy stone cliffs with rainbow mists.',
    narration:
      'Following the sound of rushing thunder, you emerge into a hidden ravine! A majestic curtain of crystal-clear water pours down fifty feet from the highland cliffs into a wide turquoise lagoon. Rainbows dance through the rising mist. Behind the roaring water veil, you notice the tell-tale shimmer of a hidden cavern opening!',
    dmNotes:
      'D&D Exploration Encounter: Athletics or Speed check to swim or hop across river boulders to reach the grotto.',
    challenge: {
      type: 'dice-check',
      dcTarget: 3,
      statUsed: 'speed',
    },
    choices: [
      {
        text: '🏊 Swim across the warm crystal pool to the secret cave behind the waterfall curtain!',
        targetNodeId: 'wander_smuggler_grotto',
        category: 'wander',
        icon: '🏊',
        successText: 'You paddle smoothly through the refreshing spray right through the watery curtain into dry air!',
        failText: 'You splash playfully with a rainbow trout, then wade safely into the hidden cave!',
      },
      {
        text: '🪵 Search the shore for smooth river skipping stones (Mental Maths)',
        targetNodeId: 'act1_otter_ford',
        category: 'maths',
        icon: '🪵',
      },
      {
        text: '🏕️ Make camp near the peaceful roaring waters to rest',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
        icon: '🏕️',
      },
      {
        text: '🌲 Hike back along the fern trail to the main Whispering Woods',
        targetNodeId: 'act1_intro',
        category: 'quest',
        icon: '🌲',
      },
    ],
  },

  // 2b. SECRET SMUGGLER'S GROTTO
  'wander_smuggler_grotto': {
    id: 'wander_smuggler_grotto',
    act: 0,
    actTitle: 'Side Quest: Whispering Waterfall',
    title: 'The Secret Smuggler Grotto Behind the Falls',
    backgroundTheme: 'cavern',
    subjectFocus: 'history',
    isWanderLocation: true,
    locationName: 'Hidden Grotto Cavern',
    imageUrl: ART_WATERFALL_GROTTO,
    imageCaption: '💎 A dry torchlit sea-grotto behind the water curtain containing an ancient brass chest.',
    narration:
      'Passing behind the roar of the water curtain, you step onto dry sandy stone. The waterfall sounds like a soothing gentle hum in here! At the back of the grotto sits a barnacle-crusted brass chest left by river-smugglers centuries ago during the Epoch of Ocean and Stone. A riddle plate on the latch reads: "I live in the river, I love shiny stones, and I wear sleek fur: who am I?"',
    dmNotes:
      'D&D Treasure Chest: Solve the animal riddle or test phonics to pop open the chest.',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'grotto_otter_riddle',
        word: 'otter',
        phonemes: ['o', 'tt', 'er'],
        correctAnswer: 'otter',
        options: ['otter', 'owl', 'ox'],
        type: 'blend',
        instruction: 'Who is the playful river swimmer? Spell /o/ /tt/ /er/!',
        hint: 'Starts with short /o/, has double /t/, ends with /er/!',
      },
    },
    choices: [
      {
        text: 'Open the chest and retrieve the Mermaid Pearl & Brass Spyglass!',
        targetNodeId: 'wander_waterfall_pool',
        category: 'quest',
        gainItem: {
          id: 'mermaid_pearl',
          name: 'Rainbow Mermaid Pearl',
          icon: '🔮',
          description: 'A glowing pearl that shines in dark waters and reveals hidden paths.',
          type: 'relic',
        },
        successText: 'Click! The chest springs open, revealing a glittering rainbow pearl and ancient river maps! (+3 Sparks!)',
      },
      {
        text: 'Swim back out to the sunlit waterfall basin',
        targetNodeId: 'wander_waterfall_pool',
        category: 'wander',
      },
    ],
  },

  // =========================================================================
  // 3. THE MOONLIT PIXIE HOLLOW & FAIRY RING
  // =========================================================================
  'wander_pixie_ring': {
    id: 'wander_pixie_ring',
    act: 0,
    actTitle: 'Side Quest: Moonlit Pixie Ring',
    title: 'The Luminescent Fairy Mushroom Ring',
    backgroundTheme: 'forest',
    subjectFocus: 'creativity',
    isWanderLocation: true,
    locationName: 'Faerie Mushroom Ring',
    imageUrl: ART_PIXIE_RING,
    imageCaption: '🍄 Giant glowing violet and crimson toadstools with dancing winged pixies beneath the moon.',
    narration:
      'Stepping through an archway of honeysuckle vines, the air begins to tingle with lavender sparkles! Before you lies a true Faerie Ring: a circle of colossal spotted mushrooms glowing with soft bioluminescent pastel light. Tiny winged pixies no bigger than your thumb are playing tag across the mushroom caps, leaving trails of glitter that shimmer in the moonlight!',
    dmNotes:
      'D&D Social / Acrobatics Check: The child can roll Acrobatics to balance on a toadstool, or roll Persuasion to converse with the Pixie Queen.',
    challenge: {
      type: 'dice-check',
      dcTarget: 3,
      statUsed: 'sparkle',
    },
    choices: [
      {
        text: '🧚 Bow gracefully and ask Queen Gossamer for a fairy blessing (Sparkle DC 3)',
        targetNodeId: 'wander_pixie_riddle',
        category: 'roleplay',
        icon: '🧚',
        successText: 'Queen Gossamer giggles with delight and lands gently upon your shoulder with shimmering wings!',
        failText: 'A cheeky pixie sprinkles glitter in your hair, making you sneeze harmless rainbow bubbles!',
      },
      {
        text: '✨ Collect a vial of glowing Starlight Pixie Dust from the mushroom caps',
        targetNodeId: 'wander_pixie_ring',
        category: 'quest',
        gainItem: {
          id: 'pixie_dust',
          name: 'Glowing Pixie Dust',
          icon: '✨',
          description: 'Makes the user leap twice as far and glimmers with safe starlight.',
          type: 'potion',
        },
        successText: 'You scoop up a vial of glowing golden dust! (+1 Spark gained!)',
      },
      {
        text: '🌲 Follow the starlight path back to the Ancient Singing Elder Oak',
        targetNodeId: 'act1_elder_tree',
        category: 'quest',
        icon: '🌲',
      },
      {
        text: '🏕️ Sit by the mossy logs and enjoy a peaceful campfire rest',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
        icon: '🏕️',
      },
    ],
  },

  // 3b. PIXIE QUEEN RIDDLE
  'wander_pixie_riddle': {
    id: 'wander_pixie_riddle',
    act: 0,
    actTitle: 'Side Quest: Moonlit Pixie Ring',
    title: "Queen Gossamer's Starlight Riddle",
    backgroundTheme: 'forest',
    subjectFocus: 'phonics',
    isWanderLocation: true,
    locationName: "Pixie Queen's Court",
    imageUrl: ART_PIXIE_RING,
    imageCaption: '👑 Queen Gossamer crowning you with a tiara woven from glowing night-blooming jasmine.',
    narration:
      'Queen Gossamer hovers right before your nose, her gossamer wings fluttering faster than a hummingbird\'s! "To prove your ears are keen enough to guide the dragons, solve my nighttime riddle: \'I shine up in the midnight blue, I twinkle bright and guide what\'s true. Blend /m/ /oo/ /n/ and say my name, to win our fairy starlight game!\'"',
    dmNotes:
      'Curriculum Link: Digraph /oo/ (long vowel sound as in moon, spoon, balloon).',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'pixie_moon_riddle',
        word: 'moon',
        phonemes: ['m', 'oo', 'n'],
        correctAnswer: 'moon',
        options: ['moon', 'man', 'mud'],
        type: 'digraph',
        instruction: 'Blend the sounds: /m/ ... /oo/ ... /n/!',
        hint: 'First sound /m/ like milk, middle /oo/ like spoon, ending /n/ like nut!',
      },
    },
    choices: [
      {
        text: 'Proclaim "MOON" and receive the Queen\'s Star Ribbon!',
        targetNodeId: 'wander_pixie_ring',
        category: 'phonics',
        gainItem: {
          id: 'fairy_bell',
          name: 'Silver Fairy Bell',
          icon: '🔔',
          description: 'Rings with a sweet chime that calms energetic dragons.',
          type: 'relic',
        },
        successText: 'Queen Gossamer claps her hands! All the pixies dance in a joyful spiral, bestowing the Silver Fairy Bell upon you!',
      },
      {
        text: 'Thank the pixies and return to the forest path',
        targetNodeId: 'act1_intro',
        category: 'quest',
      },
    ],
  },

  // =========================================================================
  // 4. SPROCKET THE GOBLIN'S CLOCKWORK WORKSHOP
  // =========================================================================
  'wander_goblin_camp': {
    id: 'wander_goblin_camp',
    act: 0,
    actTitle: "Side Quest: Sprocket's Workshop",
    title: "Sprocket's Clockwork Tinkering Camp",
    backgroundTheme: 'cavern',
    subjectFocus: 'maths',
    isWanderLocation: true,
    locationName: "Sprocket's Workshop",
    imageUrl: ART_GOBLIN_WORKSHOP,
    imageCaption: '⚙️ Brass gears, steam valves, blueprints, and a friendly goblin inventor in brass goggles.',
    narration:
      'CLANG-WHIRR-PSSSHT! A puff of sweet cinnamon-scented steam billows from behind a clump of willow trees. You find a lively outdoor workshop filled with brass cogs, spinning copper gyroscopes, and colorful blueprints. A green-skinned goblin in leather overalls and oversized brass goggles looks up with a cheerful grin: "Ahoy, adventurer! I\'m Sprocket! I\'m building a steam-wing flying cart, but my gear tooth calculations got all scrambled!"',
    dmNotes:
      'D&D Social / Tinkering Encounter: Subverts the trope that goblins are enemies—Sprocket is an enthusiastic engineer who loves arithmetic!',
    choices: [
      {
        text: '🔧 Help Sprocket solve the gear arithmetic puzzle to test the flying cart!',
        targetNodeId: 'wander_goblin_cart',
        category: 'maths',
        icon: '🔧',
      },
      {
        text: '🔍 Trade shiny pebbles and screws for a Clockwork Brass Compass',
        targetNodeId: 'wander_goblin_camp',
        category: 'quest',
        gainItem: {
          id: 'brass_compass',
          name: 'Clockwork Brass Compass',
          icon: '🧭',
          description: 'A spinning mechanical compass that points directly toward the nearest dragon.',
          type: 'tool',
        },
        successText: 'Sprocket happily trades the shiny brass compass for two shiny pebbles! "Fair deal, squire!"',
      },
      {
        text: '🍺 Ask Sprocket for directions to the Wayward Badger Tavern',
        targetNodeId: 'wander_tavern_hearth',
        category: 'wander',
        icon: '🍺',
      },
      {
        text: '🏰 Return to the main road heading toward the Castle Drawbridge',
        targetNodeId: 'act3_castle_approach',
        category: 'quest',
        icon: '🏰',
      },
    ],
  },

  // 4b. GOBLIN STEAM CART MATHS
  'wander_goblin_cart': {
    id: 'wander_goblin_cart',
    act: 0,
    actTitle: "Side Quest: Sprocket's Workshop",
    title: 'Calculating the Steam-Wing Gears',
    backgroundTheme: 'cavern',
    subjectFocus: 'maths',
    isWanderLocation: true,
    locationName: 'Flying Cart Test Stand',
    imageUrl: ART_GOBLIN_WORKSHOP,
    imageCaption: '🛞 The miniature flying steam-cart with polished wooden wings and spinning brass wheels.',
    narration:
      'Sprocket holds up a small brass gear and a large copper gear. "To balance the wings so we don\'t do somersaults into the river, the top gear has 5 teeth and the bottom gear needs 4 teeth! What is 5 plus 4? If we get 9 teeth total, the propeller will spin like lightning!"',
    dmNotes:
      'Curriculum Link: KS1 Mental Maths - Addition within 10 (5 + 4 = 9).',
    challenge: {
      type: 'maths',
      mathData: {
        id: 'sprocket_addition_gears',
        question: 'What is 5 + 4 gear teeth?',
        num1: 5,
        num2: 4,
        operator: '+',
        correctAnswer: 9,
        options: [7, 8, 9, 10],
        maxCountVisual: 10,
        type: 'addition',
        flavorSpell: 'Clockwork Gear Mesh: 5 + 4 = 9!',
      },
    },
    choices: [
      {
        text: 'Declare the answer 9 and pull the steam release lever!',
        targetNodeId: 'wander_goblin_camp',
        category: 'maths',
        successText: 'VROOOOOOM! The brass propeller whirls smoothly into a golden blur! Sprocket cheers and does a backflip! (+3 Sparks!)',
      },
      {
        text: 'Return to Sprocket\'s workbench',
        targetNodeId: 'wander_goblin_camp',
        category: 'roleplay',
      },
    ],
  },

  // =========================================================================
  // 5. THE SUNKEN CRYPT OF THE DRAGON KNIGHTS
  // =========================================================================
  'wander_crypt_entry': {
    id: 'wander_crypt_entry',
    act: 0,
    actTitle: 'Side Quest: Sunken Dragon Crypt',
    title: 'The Sunken Crypt of the Dragon Knights',
    backgroundTheme: 'cavern',
    subjectFocus: 'history',
    isWanderLocation: true,
    locationName: 'Ancient Crypt Staircase',
    imageUrl: ART_SUNKEN_CRYPT,
    imageCaption: '🏰 Ancient stone stairs descending into a torchlit hall with carved dragon pillars.',
    narration:
      'Near the mossy roots of the ancient cliffs, you discover an arched doorway carved directly into the mountain stone. Flagstone stairs descend into a cool, dry chamber illuminated by ever-burning enchanted torches. On either side stand statues of the legendary First Dragon Knights—heroes who rode alongside dragons eight hundred years ago. Ahead lies the grand tomb of Sir Rowan the Kindhearted!',
    dmNotes:
      'Classic D&D Dungeon Crawl: Emphasize atmosphere—torchlight, stone shadows, historic inscriptions. Check for traps with Smarts or Bravery!',
    challenge: {
      type: 'dice-check',
      dcTarget: 3,
      statUsed: 'smarts',
    },
    choices: [
      {
        text: '🕯️ Approach the stone sarcophagus to read the ancient phonetic inscription',
        targetNodeId: 'wander_crypt_tomb',
        category: 'history',
        icon: '🕯️',
        successText: 'Your boots tread safely across the carved flagstones without disturbing any dust!',
        failText: 'You accidentally tap a loose pebble that clatters into the corner, but all remains quiet!',
      },
      {
        text: '💎 Search the stone alcoves for ancient explorer supplies',
        targetNodeId: 'wander_crypt_entry',
        category: 'quest',
        gainItem: {
          id: 'knight_torch',
          name: 'Ever-Burning Blue Torch',
          icon: '🔦',
          description: 'A magical blue torch that burns without heat or smoke. Lights any dark cavern.',
          type: 'tool',
        },
        successText: 'In a stone wall niche, you find an Ever-Burning Blue Torch! It casts gentle daylight around you.',
      },
      {
        text: '🌲 Climb the stairs back up to the surface woods',
        targetNodeId: 'act1_gate',
        category: 'quest',
        icon: '🌲',
      },
      {
        text: '🏕️ Rest at the campfire before entering deeper',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
        icon: '🏕️',
      },
    ],
  },

  // 5b. TOMB OF SIR ROWAN
  'wander_crypt_tomb': {
    id: 'wander_crypt_tomb',
    act: 0,
    actTitle: 'Side Quest: Sunken Dragon Crypt',
    title: "The Sarcophagus of Sir Rowan & The Shield of Kindness",
    backgroundTheme: 'cavern',
    subjectFocus: 'phonics',
    isWanderLocation: true,
    locationName: "Sir Rowan's Tomb",
    imageUrl: ART_SUNKEN_CRYPT,
    imageCaption: '🛡️ A carved stone sarcophagus topped with a gleaming dragon crest and ancient sound runes.',
    narration:
      'Upon the stone tomb rests a relief of a smiling knight resting with a slumbering dragon curled around his feet. Beneath the dragon crest, ancient phonetic runes glow with faint starlight. The inscription reads: "He who reads the word of the celestial heavens shall inherit the Shield of Kindness." The carved runes spell: /s/ /t/ /ar/! Blend the sounds to awaken the ancient relic!',
    dmNotes:
      'Curriculum Link: Letters and Sounds Phase 3 - Digraph "ar" blended with consonant cluster "st" (/s/ /t/ /ar/ = star).',
    challenge: {
      type: 'phonics',
      phonicsData: {
        id: 'crypt_star_rune',
        word: 'star',
        phonemes: ['s', 't', 'ar'],
        correctAnswer: 'star',
        options: ['star', 'stir', 'stop'],
        type: 'digraph',
        instruction: 'Blend the sounds on the tomb: /s/ ... /t/ ... /ar/!',
        hint: 'First blend /st/, then add the "ar" digraph like in park and dark!',
      },
    },
    choices: [
      {
        text: 'Speak "STAR" with reverence and claim the Dragon Knight Shield!',
        targetNodeId: 'wander_crypt_entry',
        category: 'phonics',
        gainItem: {
          id: 'dragon_shield',
          name: 'Dragon Knight Shield',
          icon: '🛡️',
          description: 'A polished shield of kindness that protects against dragon sneeze embers.',
          type: 'shield',
        },
        successText: 'A soft golden chime echoes through the stone hall! The stone crest glides back, presenting the Dragon Knight Shield! (+3 Sparks!)',
      },
      {
        text: 'Step back into the torchlit hallway',
        targetNodeId: 'wander_crypt_entry',
        category: 'quest',
      },
    ],
  },

  // =========================================================================
  // 6. THE ADVENTURER'S CAMPFIRE & REST SITE
  // =========================================================================
  'wander_campfire_rest': {
    id: 'wander_campfire_rest',
    act: 0,
    actTitle: 'Campfire & Rest Site',
    title: "The Adventurer's Campfire",
    backgroundTheme: 'forest',
    subjectFocus: 'creativity',
    isWanderLocation: true,
    locationName: 'Campfire Rest Clearing',
    imageUrl: ART_CAMPFIRE_REST,
    imageCaption: '🏕️ Crackling birch logs beneath a twinkling canopy of constellations, with cozy bedrolls.',
    narration:
      'You gather dry birch logs inside a circle of smooth river stones and strike a spark. In moments, a cheerful campfire crackles to life, casting dancing golden reflections against the emerald pine boughs! High above, shooting stars streak across the deep violet sky. The warmth soothes your tired feet, and your faithful companions curl up happily beside the flames. All your hearts are fully restored!',
    dmNotes:
      'D&D Short Rest / Long Rest Mechanic: Fully heals the hero back to maxHearts! Ask the child: "What was your favorite discovery on our adventure so far?"',
    choices: [
      {
        text: '🏕️ Take a Short Rest: Roast marshmallows and recover all hearts! (+Full Heal)',
        targetNodeId: 'wander_campfire_rest',
        category: 'rest',
        icon: '🏕️',
        successText: 'You toast a golden marshmallow over the embers and watch the stars. Your health is completely restored!',
      },
      {
        text: '🌲 Return to the Whispering Woods main quest line',
        targetNodeId: 'act1_intro',
        category: 'quest',
        icon: '🌲',
      },
      {
        text: '🍺 Head over to the Wayward Badger Tavern for warm company',
        targetNodeId: 'wander_tavern_hearth',
        category: 'wander',
        icon: '🍺',
      },
      {
        text: '🌊 Follow the sound of rushing waters to the Whispering Waterfall',
        targetNodeId: 'wander_waterfall_pool',
        category: 'wander',
        icon: '🌊',
      },
      {
        text: '🏰 Walk North towards the Stepping-Stone Citadel of High Astraea',
        targetNodeId: 'act3_castle_approach',
        category: 'quest',
        icon: '🏰',
      },
    ],
  },
};
