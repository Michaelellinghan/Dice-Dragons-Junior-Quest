import { DailyCampaign } from '../types';
import { READING_CARDS } from './readingCards';
import { SKY_ISLES_CAMPAIGNS } from './dailyCampaignsSkyIsles';

const BASE_CAMPAIGNS_BOOK_1: DailyCampaign[] = [
  // =========================================================================
  // WEEK 1: THE WHISPERING WOODS & THE FOUR-WINDS RIVER (DAYS 1 - 5)
  // =========================================================================
  {
    dayNumber: 1,
    title: 'The Whispering Sun-Glade & The Kitten Gargoyle',
    subtitle: 'Awakening the ancient oak trail with CVC rune cards',
    region: 'The Whispering Woods',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'The morning dew sparkles like diamonds on the clover. Royal trumpets echo faintly across the hills—King Alden has dispatched an urgent parchment by owl! But before reaching the main road, the overgrown hedge trail is sealed by a sleeping stone kitten.',
    dmScript:
      'Parents & DMs: Hand the child their explorer backpack card. Read in a soft, mysterious storytelling voice: "You step onto a mossy path shaded by ancient willow branches. A stone kitten gargoyle snores atop a mossy boulder. It whispers in its sleep: \'To pass my vine-gate, read the three sounds carved into my collar!\' Place Card #01 in front of the players!"',
    tableCardId: 'card_01',
    cardToPlace: READING_CARDS[0], // cat
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Packing the Explorer Satchel',
        narration:
          'Before stepping onto the mossy path, you check your satchel. The forest breeze smells of pine needles and sweet clover. High in the branches, a blue robin chirps four times: "Pack your brass compass and your wooden wand, junior hero!"',
        dmPrompt: 'Ask the child: "What three things did your hero pack in their adventure backpack today?"',
        challengeType: 'roleplay',
        challengeSummary: 'Character preparation & explorer roleplay',
        rewardNote: 'Award 1 Heart of Bravery for preparing their supplies!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sleeping Stone Kitten',
        narration:
          'A carved granite kitten snores peacefully on a bed of ferns. Above its whiskers, three glowing runes pulse softly: /c/ ... /a/ ... /t/. The Dungeon Master sets Card #01 right in front of you!',
        dmPrompt: 'Place Card #01 on the table. Have the player touch each sound button with their finger.',
        challengeType: 'phonics',
        challengeSummary: 'Touch sound buttons /c/ /a/ /t/ and blend into "cat"',
        cardToPlace: READING_CARDS[0],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Bramble Vine Lift',
        narration:
          'The stone kitten opens its emerald eyes and purrs! "Mew! You said my name! But look: 3 thick bramble vines and 2 prickly rose vines block the archway. Cast your Sparkbolt spell to clear them both!"',
        dmPrompt: 'Have the child count on their fingers or use dried pasta/pennies: 3 vines + 2 vines.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 3 + 2 = 5',
        mathProblem: {
          spellName: 'Sparkbolt Bloom',
          problem: '3 + 2',
          answer: 5,
          hint: 'Hold up 3 fingers on your left hand and 2 fingers on your right hand. Count them together!',
          options: [4, 5, 6],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Mossy Leap & Campfire Rest',
        narration:
          'The vines dissolve into glowing starlight dust! Beyond lies a bubbling stream with slippery stepping stones. Roll your hero die to leap across safely without splashing your boots!',
        dmPrompt: 'Roll a D6. Target DC is 3+ (add +1 if Hero Speed is high).',
        challengeType: 'dice',
        challengeSummary: 'D6 Agility Leap Check (DC 3+)',
        diceRoll: {
          skill: 'speed',
          dc: 3,
          prompt: 'Roll your D6 to jump across the mossy creek rocks!',
          success: 'You land gracefully on both feet with a superhero pose!',
          fumble: 'A playful frog ribbits and splashes one boot with warm mud! You laugh and hop across!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Sparkbolt Bloom',
      problem: '3 + 2',
      answer: 5,
      hint: 'Hold up 3 fingers on your left hand, then pop up 2 more. Count all five together!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 3,
      prompt: 'Roll your hero die to see if your hero can leap over the bubbling creek rocks!',
      success: 'You land gracefully with a joyful jump! The gate stays open.',
      fumble: 'You splash into a shallow puddle of warm mud! A friendly frog ribbits in applause.',
    },
    reward: {
      sparks: 2,
      badge: 'Oak Wood Explorer Badge',
      item: 'Polished Amber Acorn',
    },
    bedtimeReflection:
      'Tonight when you close your eyes, picture that peaceful stone kitten purring softly in the sunbeams under the big oak tree.',
    extendedLore:
      'The Whispering Woods were planted centuries ago by Queen Rosalind, the first Starlight Druid of Astraea. Legend speaks of the Stone Gargoyles—guardians sculpted from fallen meteor rock to protect young forest deer from mischievous shadow goblins. Because the gargoyles love lullabies and letter sounds, they fall into centuries-long naps and only awaken when an adventurer speaks their phonetic password. The amber acorns found near the roots are said to glow with gentle warmth during chilly autumn evenings.',
    creativeWritingPrompts: [
      'Today my hero stepped into the Whispering Woods with...',
      'We found a sleeping stone kitten whose magical password was...',
      'When I cast Sparkbolt Bloom on the bramble vines, they...',
      'I leaped over the slippery creek rocks and felt...',
      'My puppy squire gave the stone kitten a friendly sniff and...',
    ],
  },

  {
    dayNumber: 2,
    title: 'The Canopy of the Screech Owl',
    subtitle: 'Lighting the path with sunlight runes and subtraction magic',
    region: 'The Whispering Woods',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'As afternoon shadows stretch across the woodland path, the trees grow dense and shadowy. A hollow trunk glows with golden warmth, where a feathered scholar peers through round brass spectacles.',
    dmScript:
      'Dungeon Master Prompt: "The shadows under the giant redwoods grow chilly. High above on an oak branch sits Professor Hoot, a wise barn owl wearing tiny spectacles. He hots softly: \'The darkness is thick ahead, travellers! Unless you can kindle the ancient light runes, you will have to sleep on prickly twigs!\' Place Card #02 on the table!"',
    tableCardId: 'card_02',
    cardToPlace: READING_CARDS[1], // sun
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Shadows in the Thicket',
        narration:
          'The forest canopy weaves so tightly together that daylight disappears. Little bioluminescent beetles flicker like tiny yellow lanterns on the tree trunks, but the trail is hard to see.',
        dmPrompt: 'Ask the player: "How does your hero stay brave when entering dark shadowy places?"',
        challengeType: 'roleplay',
        challengeSummary: 'Overcoming fear of the dark through courage & imagination',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Professor Hoot\'s Solar Rune',
        narration:
          'Professor Hoot swoops down with a flutter of soft brown feathers. "Hoo-hoo! The light of the realm sleeps inside this rune scroll. Place Card #02 on your table, adventurer! Sound it out: /s/ ... /u/ ... /n/!"',
        dmPrompt: 'Place Card #02 face up. Point to the dots beneath s-u-n.',
        challengeType: 'phonics',
        challengeSummary: 'Decode Card #02: /s/ /u/ /n/ -> "sun"',
        cardToPlace: READING_CARDS[1],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Dispelling the Fog Embers',
        narration:
          'A beam of pure golden sunlight bursts from your wand! But 6 heavy dark shadow wisps hover around the trail. You cast your Frost Shield to dispel 2 of them! How many shadow wisps are left?',
        dmPrompt: 'Use 6 pennies or counters. Take 2 away: 6 - 2 = ?',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 6 - 2 = 4',
        mathProblem: {
          spellName: 'Frost Shield Dispel',
          problem: '6 - 2',
          answer: 4,
          hint: 'Start with 6 fingers. Fold down 2 fingers. Count how many are still standing!',
          options: [3, 4, 5],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Owl\'s Feather Token',
        narration:
          'Professor Hoot hoots in delight: "Splendid arithmetic! Take this silver feather. It will guide you whenever you need to find true North!"',
        dmPrompt: 'Roll a D6 for Smarts check (DC 3+).',
        challengeType: 'dice',
        challengeSummary: 'Smarts Check to record the owl feather in your journal',
        diceRoll: {
          skill: 'smarts',
          dc: 3,
          prompt: 'Roll D6 to memorize the owl navigation secret!',
          success: 'You tuck the feather safely into your journal!',
          fumble: 'The feather tickles your nose and you sneeze three times! "Achoo!"',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Frost Shield Dispel',
      problem: '6 - 2',
      answer: 4,
      hint: 'Start with 6 counters. Push 2 away into the moss. Count what is left: 1, 2, 3, 4!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 3,
      prompt: 'Roll your D6 to see if you remember Professor Hoot\'s secret night-owl navigation tip!',
      success: 'You memorize the song of the stars! Your path glows bright.',
      fumble: 'The owl gently lands on your hat and ruffles your hair playfully.',
    },
    reward: {
      sparks: 2,
      badge: 'Silver Feather of Illumination',
    },
    bedtimeReflection:
      'Think of how the warm sun chased away the shadows, keeping the little woodland creatures safe in their nests.',
    extendedLore:
      'Professor Hoot is the chief librarian of the Great Starlight Aviary. Barn owls in Astraea are known to possess magical eyesight capable of seeing through illusions and shadow-fogs. His tiny spectacles were crafted by the royal silversmiths of King Alden using lenses cut from quartz crystals. He keeps a secret pocket notebook tucked beneath his wing where he records every child who successfully sounds out the letters of the ancient sun rune.',
    creativeWritingPrompts: [
      'High in the oak branches, Professor Hoot flapped his feathers and...',
      'When I decoded Card #02 for "sun", the dark forest trail...',
      'We had 6 shadow wisps and subtracted 2, leaving...',
      'Professor Hoot gave me a silver feather that smelled of...',
      'Before bed tonight, I remembered how warm sunlight always...',
    ],
  },

  {
    dayNumber: 3,
    title: 'The Lost Canine of the Riverbank',
    subtitle: 'Helping a lost royal hound through CVC sounding and addition',
    region: 'The Whispering Woods',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'A rustling sound comes from the blackberry bushes near the riverbank. A spotted puppy with floppy ears and a brass collar whimpers softly—he has chased a blue butterfly too far from the castle!',
    dmScript:
      'DM Prompt: "A sweet little puppy with floppy brown ears peeks out of the ferns. His collar has a shiny brass tag, but the letters are covered in muddy pawprints! The DM sets Card #03 on the table. Touch each sound button to see what kind of pet this is!"',
    tableCardId: 'card_03',
    cardToPlace: READING_CARDS[2], // dog
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Whimpering in the Willows',
        narration:
          'Near the rushing water of the Whispering River, you hear a soft "Yip! Yip!" Behind a clump of purple clover sits a floppy-eared puppy trembling with nervousness.',
        dmPrompt: 'Encourage the player to kneel down gently and offer their hand for the puppy to sniff.',
        challengeType: 'roleplay',
        challengeSummary: 'Gentleness with animals & empathy roleplay',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Reading the Brass Collar',
        narration:
          'The puppy wags its tail! You wipe the dried mud from its brass tag. Three clear runes appear: /d/ ... /o/ ... /g/. The DM places Card #03 on the table!',
        dmPrompt: 'Place Card #03 on the table. Point to /d/ /o/ /g/.',
        challengeType: 'phonics',
        challengeSummary: 'Decode Card #03: /d/ /o/ /g/ -> "dog"',
        cardToPlace: READING_CARDS[2],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Sharing the Travel Biscuits',
        narration:
          'The puppy\'s tummy rumbles loudly! You have 4 honey biscuits in your pouch, and Sir Barnaby donates 3 crispy trail crackers. How many treats do you have in total to feed your puppy friend?',
        dmPrompt: 'Count 4 biscuits + 3 crackers with counters: 4 + 3 = ?',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 4 + 3 = 7',
        mathProblem: {
          spellName: 'Feast of Friendship',
          problem: '4 + 3',
          answer: 7,
          hint: 'Start at 4, then count on 3 more: 5, 6, 7!',
          options: [6, 7, 8],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Happy Tail Wag',
        narration:
          'The puppy wolfs down the snacks and does two excited spins! He gives your hand a wet, sloppy lick and agrees to walk beside you as your loyal four-legged squire.',
        dmPrompt: 'Roll a D6 Bravery check (DC 3+) to give the puppy a heroic name!',
        challengeType: 'dice',
        challengeSummary: 'Bravery roll to bond with your animal companion',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to see how proudly the puppy marches beside you!',
          success: 'The puppy trots tall with his tail held high!',
          fumble: 'The puppy chases his own tail in three dizzy circles before walking!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Feast of Friendship',
      problem: '4 + 3',
      answer: 7,
      hint: 'Start with 4 biscuits in your bowl. Drop in 3 more. Count them up: 5, 6, 7!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see how proudly the puppy marches along the trail by your side!',
      success: 'The puppy holds its tail high and lets out a heroic bark!',
      fumble: 'The puppy chases its own tail in circles until it rolls over with all four paws in the air.',
    },
    reward: {
      sparks: 2,
      badge: 'Puppy Companion Ribbon',
      item: 'Braided Lead of Loyalty',
    },
    bedtimeReflection:
      'Think of how good it feels to help a lost friend find food, comfort, and safety.',
    extendedLore:
      'The Royal Hounds of Astraea are legendary for their loyalty and courage. Bred in the gentle hills surrounding Castle Thornwood, their floppy ears can hear the chime of a bell from three valleys away. Princess Willow lost her favorite puppy, Barnaby-Bear, while gathering wild bluebell honey. When you share travel biscuits with a hound of Astraea, they swear an oath of companionship that lasts a lifetime, often barking once for "Yes" and twice for "Danger ahead!".',
    creativeWritingPrompts: [
      'Near the river willows, my puppy squire whimpered because...',
      'We read the brass collar letters /d/ /o/ /g/ and realized...',
      'We added 4 honey biscuits and 3 trail crackers to make...',
      'My puppy squire gave my hand a wet lick and then...',
      'Tonight my puppy curled up at the foot of my bed, snoring like...',
    ],
  },

  {
    dayNumber: 4,
    title: 'The Four Winds Compass Bridge',
    subtitle: 'Navigating cardinal directions and map landmarks',
    region: 'The Whispering Woods',
    durationMinutes: 20,
    subjectFocus: 'geography',
    storyHook:
      'The river widens into swirling silver pools. A wooden footbridge spans the rapids, but a four-way weather vane points in all directions: North, South, East, and West. Which way leads to King Alden\'s castle?',
    dmScript:
      'DM Prompt: "You reach the great river fork. A tall oak post has four brass arrows pointing N, S, E, and W. Rowan the Fox whispers: \'Remember our traveller rhyme: Never Eat Shredded Wheat! North is straight ahead, East is where the sun wakes up, South is warm, and West is where the stars come out!\' The DM sets Card #07 on the table to fish out an explorer net!"',
    tableCardId: 'card_07',
    cardToPlace: READING_CARDS[6], // net
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Compass Rose on the Post',
        narration:
          'The brass compass rose gleams in the sunlight. A carved wooden pigeon points straight NORTH across the wooden footbridge.',
        dmPrompt: 'Teach the child the compass rhyme: "Never Eat Shredded Wheat = North, East, South, West". Have them point North!',
        challengeType: 'geography',
        challengeSummary: 'Identify cardinal directions: North is straight ahead',
        geoHistoryPrompt: {
          question: 'If North is straight ahead across the river, which direction is pointing backwards towards your house?',
          options: ['South', 'East', 'North'],
          correctAnswer: 'South',
          explanation: 'South is always opposite North! If you walk backwards, you go South.',
        },
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Fishing for the River Key',
        narration:
          'Under the bridge, a sparkling brass key has fallen into the reeds! Rowan says: "We need an explorer tool to scoop it up!" The DM places Card #07 on the table!',
        dmPrompt: 'Place Card #07 on the table. Point to /n/ /e/ /t/.',
        challengeType: 'phonics',
        challengeSummary: 'Decode Card #07: /n/ /e/ /t/ -> "net"',
        cardToPlace: READING_CARDS[6],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Balancing the Stepping Planks',
        narration:
          'You scoop the key from the water with your net! But the bridge needs 8 wooden planks. You already laid 5 planks down. How many more planks do you need to reach 8? (5 + ? = 8)',
        dmPrompt: 'Number bond / addition counting: 5 + ? = 8.',
        challengeType: 'math',
        challengeSummary: 'Number Bond Challenge: 5 + 3 = 8',
        mathProblem: {
          spellName: 'Carpentry Charm',
          problem: '5 + 3',
          answer: 8,
          hint: 'Hold up 5 fingers. How many more fingers do you need to make 8? Count: 6, 7, 8 (that is 3 more!)',
          options: [2, 3, 4],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: Crossing the Four-Winds Bridge',
        narration:
          'CLACK-CLACK! The bridge is sturdy and complete! You march across heading straight North, feeling the cool river spray against your face.',
        dmPrompt: 'Roll a D6 Speed check (DC 3+).',
        challengeType: 'dice',
        challengeSummary: 'Speed check to march across the bridge',
        diceRoll: {
          skill: 'speed',
          dc: 3,
          prompt: 'Roll D6 to see how swiftly your party crosses the bridge!',
          success: 'You march in perfect step like royal knights!',
          fumble: 'You stop to watch a family of ducklings paddle under the planks!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Carpentry Charm',
      problem: '5 + 3',
      answer: 8,
      hint: 'You have 5 planks. Count up on your fingers to 8: 6, 7, 8! That is 3 more planks!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 3,
      prompt: 'Roll D6 to see if your hero crosses the bridge in steady, rhythmic footsteps!',
      success: 'You march across like a royal guard on parade!',
      fumble: 'A family of yellow ducklings paddles under the bridge, making you stop to giggle.',
    },
    reward: {
      sparks: 2,
      badge: 'Four Winds Navigator Badge',
      item: 'Pocket Brass Compass',
    },
    bedtimeReflection:
      'Picture the river flowing calmly to the great blue sea, guided by the compass of the stars.',
    extendedLore:
      'The Four Winds Bridge was constructed by master stonemason Cedric over two centuries ago to unite the eastern wheat farmers with the northern parchment-makers. Legend tells that each wind brings a special gift: the North Wind brings mountain clarity, the South Wind brings blossoming fruit, the East Wind brings songs of the sunrise, and the West Wind brings quiet bedtime lullabies. Travelers who orient their brass compasses properly are granted safe passage across the roaring rapids.',
    creativeWritingPrompts: [
      'Standing at the Four Winds Bridge, the brass compass spun until...',
      'I recited "Never Eat Shredded Wheat" to remember that North was...',
      'We fished for the river key with Card #07 "net" and caught...',
      'To finish the bridge planks, we calculated 5 + 3 = ...',
      'When we crossed the river, the mist felt cool against my face and...',
    ],
  },

  {
    dayNumber: 5,
    title: 'The Muddy River Ford & The Otter Dam',
    subtitle: 'Understanding freshwater ecosystems and simple subtraction',
    region: 'The Whispering Woods',
    durationMinutes: 20,
    subjectFocus: 'geography',
    storyHook:
      'North of the bridge, the river shallows out into a wide muddy ford. A family of playful river otters is building a wooden dam to protect their lodge from flooding!',
    dmScript:
      'DM Prompt: "Three sleek, furry river otters pop their heads out of the water holding polished river stones. Barnaby the otter squeaks: \'If we don\'t patch the dam before high tide, our dry moss beds will get soaked! Can you read the secret of the mud to help us balance the logs?\' The DM places Card #08 on the table!"',
    tableCardId: 'card_08',
    cardToPlace: READING_CARDS[7], // mud
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Meeting the River Otters',
        narration:
          'Three slick brown otters slide down a muddy riverbank into the water with a joyful "WHEEE!" They balance flat stones on their tummies.',
        dmPrompt: 'Ask the child: "Have you ever seen an otter or played in squishy mud? How does mud help builders?"',
        challengeType: 'roleplay',
        challengeSummary: 'Nature observation & building materials',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Mud Mortar Rune',
        narration:
          'To glue their wooden logs together, the otters use thick, clay river mud. The DM places Card #08 on the table! Read the card to empower the mud mortar!',
        dmPrompt: 'Place Card #08 on the table. Point to /m/ /u/ /d/.',
        challengeType: 'phonics',
        challengeSummary: 'Decode Card #08: /m/ /u/ /d/ -> "mud"',
        cardToPlace: READING_CARDS[7],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Subtracting Driftwood Logs',
        narration:
          'There are 7 heavy driftwood branches clogging the river channel. The otters only need to remove 3 branches to let the fish swim through safely. 7 - 3 = ? How many branches remain in the dam?',
        dmPrompt: 'Use 7 tokens. Take 3 away: 7 - 3 = 4.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 7 - 3 = 4',
        mathProblem: {
          spellName: 'River Current Sweep',
          problem: '7 - 3',
          answer: 4,
          hint: 'Hold up 7 fingers (5 on one hand, 2 on the other). Put down 3 fingers. Count how many are left!',
          options: [3, 4, 5],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The River Otter Salute',
        narration:
          'The dam holds strong and steady! Water gurgles peacefully through the side channel. The otters dive and leap in synchronised somersaults to thank you.',
        dmPrompt: 'Roll D6 Sparkle check (DC 3+) to earn an otter swimming badge!',
        challengeType: 'dice',
        challengeSummary: 'Sparkle check for aquatic cheer',
        diceRoll: {
          skill: 'sparkle',
          dc: 3,
          prompt: 'Roll D6 to see if your hero can perform a funny otter wiggle dance!',
          success: 'The otters applaud with their wet paws!',
          fumble: 'You wiggle so hard your hat falls into the soft moss!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'River Current Sweep',
      problem: '7 - 3',
      answer: 4,
      hint: 'Start with 7 fingers. Fold down 3 fingers. You have 4 left!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can perform a silly otter wiggle dance!',
      success: 'The otters slap the water with their tails in roaring applause!',
      fumble: 'You wiggle so enthusiastically that your hat tumbles into a patch of soft moss.',
    },
    reward: {
      sparks: 3,
      badge: 'River Conservation Medal',
      item: 'Polished River Pebble',
    },
    bedtimeReflection:
      'Imagine floating calmly on your back in the gentle river current, safe and peaceful under the afternoon sun.',
    extendedLore:
      'River otters are known as the river architects of Astraea. They work alongside beavers and water fairies to ensure that spring runoff from the Dragon Spine Mountains does not overflow into farming villages. When otters build a dam, they leave small channels so silver trout and water beetles can swim safely through. The polished river pebble given as a reward is a token of gratitude from the Otter Elder Council, carrying a charm of natural water protection.',
    creativeWritingPrompts: [
      'At the muddy ford, three furry river otters asked our party to...',
      'We decoded Card #08 "/m/ /u/ /d/" to help them seal...',
      'When we subtracted 7 - 3, we saved 4 logs for...',
      'I did the happy otter wiggle dance by...',
      'The river pebble they gave me felt as smooth as...',
    ],
  },

  // =========================================================================
  // WEEK 2: THE CITADEL OF KING ALDEN & MEDIEVAL HISTORY (DAYS 6 - 10)
  // =========================================================================
  {
    dayNumber: 6,
    title: 'The Grand Castle Moat & The Golden Carp',
    subtitle: 'Exploring medieval castle fortifications and digraph /sh/',
    region: 'The Castle Citadel',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Emerging from the woodlands, the grand limestone battlements of King Alden\'s Citadel rise against the azure sky! A wide, deep ring of water circles the high stone walls. A shiny toy ship bobs near the gatehouse.',
    dmScript:
      'DM Prompt: "Towering gray stone walls loom ahead with fluttering blue banners! Surrounding the entire castle is a sparkling moat filled with water lilies. Sir Barnaby smiles: \'Why do you think ancient kings dug wide moats around their castles?\' (To prevent sneaky invaders and siege towers from getting close!) Now place Card #11 on the table!"',
    tableCardId: 'card_11',
    cardToPlace: READING_CARDS[10], // ship
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Why Castles Have Moats',
        narration:
          'You stand at the edge of the castle moat. Clear water reflects the stone battlements. Big golden carp swim peacefully among pink water lily pads.',
        dmPrompt: 'Ask the child: "Why did medieval builders dig water around castles instead of just putting up a fence?"',
        challengeType: 'history',
        challengeSummary: 'Medieval Castle Defense: Understanding moats and water barriers',
        geoHistoryPrompt: {
          question: 'What is the wide ring of water around a medieval castle called?',
          options: ['A Moat', 'A Swimming Pool', 'A Water Slide'],
          correctAnswer: 'A Moat',
          explanation: 'A moat was a wide, deep trench filled with water to protect castles from enemies and fire!',
        },
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Royal Courier Ship',
        narration:
          'A small remote-controlled magical wooden ship sails across the moat carrying King Alden\'s royal permit. The DM places Card #11 on the table! Notice the /sh/ sound has a dash button!',
        dmPrompt: 'Place Card #11 on the table. Show that "sh" makes ONE sound: /sh/!',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Digraph /sh/: Read Card #11 "ship"',
        cardToPlace: READING_CARDS[10],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Feeding the Castle Carp',
        narration:
          'Five golden carp swim to your left, and four silver carp swim to your right. How many royal castle fish are waiting for breadcrumbs? 5 + 4 = ?',
        dmPrompt: 'Arithmetic addition: 5 + 4 = 9.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 5 + 4 = 9',
        mathProblem: {
          spellName: 'Carp Whisperer',
          problem: '5 + 4',
          answer: 9,
          hint: 'Start with 5 on one hand, add 4 on the other hand. Count them up: 6, 7, 8, 9!',
          options: [8, 9, 10],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Moat Sentinel\'s Wave',
        narration:
          'A guard in gleaming chainmail armor leans over the parapet and salutes: "Permission to cross granted to the scholar of Astraea!"',
        dmPrompt: 'Roll D6 Bravery check (DC 3+) for a crisp knightly salute.',
        challengeType: 'dice',
        challengeSummary: 'Knightly courtesy check',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to deliver your finest royal salute!',
          success: 'Your salute is as sharp as a knight\'s sword!',
          fumble: 'You salute with your wooden wand and accidentally make sparks fly out the tip!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Carp Whisperer',
      problem: '5 + 4',
      answer: 9,
      hint: 'Start with 5 carp. Add 4 more on your fingers: 6, 7, 8, 9!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can deliver a crisp, formal royal salute to the castle guards!',
      success: 'The guards slam their shields with a resounding clang of respect!',
      fumble: 'You salute with your wand and accidentally shoot a harmless puff of purple smoke into your own hair.',
    },
    reward: {
      sparks: 3,
      badge: 'Castle Citadel Scholar Badge',
    },
    bedtimeReflection:
      'Picture the sturdy stone walls that have stood strong for hundreds of years, guarding all the families inside.',
    extendedLore:
      'Castle Thornwood was constructed from pale mountain granite in the Second Age of Astraea. Its defensive moat is fed by seven mountain springs, ensuring the water never stagnates. Inside the moat live the golden starlight carp, gentle fish that can grow as large as a shield. Castle guards are trained never to harm the carp, as they eat mosquito larvae and keep the moat waters clear as glass.',
    creativeWritingPrompts: [
      'As we reached the great castle moat, the stone walls looked...',
      'We identified why castles had moats in medieval history: to...',
      'We decoded Card #11 "/sh/ /i/ /p/" to sail a toy boat toward...',
      'When 5 carp met 4 more carp, there were 9 magical fish swimming...',
      'I gave the castle gatekeeper a formal salute and...',
    ],
  },

  {
    dayNumber: 7,
    title: 'The Great Timber Drawbridge',
    subtitle: 'Mechanical levers, castle gatehouses, and digraph /ch/',
    region: 'The Castle Citadel',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Massive iron chains groan in the gatehouse tower as two giant gears slowly turn. The massive oak drawbridge is ready to descend, but a heavy wooden safety chock blocks the winch wheel.',
    dmScript:
      'DM Prompt: "Heavy iron chains clang like church bells! The drawbridge is held up in the air. To lower it across the water without smashing into pieces, the gatekeeper needs you to read the digraph rune on the release lever! Place Card #16 on the table: touch the sound dash for /ch/!"',
    tableCardId: 'card_16',
    cardToPlace: READING_CARDS[15], // chip
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Giant Iron Chains',
        narration:
          'Two giant chains, each link as thick as an explorer\'s leg, hold the oak bridge up in the air. Sir Barnaby explains: "A drawbridge is the front door of the castle. When enemies approached, the guards wound the chains up so no one could walk inside!"',
        dmPrompt: 'Ask the child: "How would you lower a heavy bridge using pulleys and ropes?"',
        challengeType: 'history',
        challengeSummary: 'Drawbridge mechanics & medieval defense',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The /ch/ Rune on the Winch',
        narration:
          'Carved into the iron winch crank is the digraph /ch/! The DM places Card #16 on the table. Say the sound: "ch-ch-ch like a train engine!"',
        dmPrompt: 'Place Card #16 on the table. Guide the child to blend /ch/ /i/ /p/ into "chip".',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Digraph /ch/: Read Card #16 "chip"',
        cardToPlace: READING_CARDS[15],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Balancing the Counterweights',
        narration:
          'Ten heavy iron weights balance the drawbridge. The bridge currently has 7 weights attached. How many more weights are needed to make 10? 7 + ? = 10!',
        dmPrompt: 'Number bonds to 10: 7 + 3 = 10.',
        challengeType: 'math',
        challengeSummary: 'Number Bond to 10: 7 + 3 = 10',
        mathProblem: {
          spellName: 'Iron Winch Pulley',
          problem: '7 + 3',
          answer: 10,
          hint: 'Hold up 7 fingers. How many more fingers do you need to raise all 10 fingers? (3 more!)',
          options: [2, 3, 4],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Mighty Thud of Oak',
        narration:
          'CREEEAAAK... THUD! The drawbridge lands smoothly across the moat! The gatehouse arches open into the bustling, flag-lined courtyard.',
        dmPrompt: 'Roll D6 Speed check (DC 3+) to march across before the guards.',
        challengeType: 'dice',
        challengeSummary: 'Speed check to cross the lowered drawbridge',
        diceRoll: {
          skill: 'speed',
          dc: 3,
          prompt: 'Roll D6 to lead your companions into the castle courtyard!',
          success: 'You march in triumph as horns sound from the towers!',
          fumble: 'Your cape catches on a wooden peg and flutters behind you like a royal banner!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Iron Winch Pulley',
      problem: '7 + 3',
      answer: 10,
      hint: 'You have 7 counterweights. Count up to 10: 8, 9, 10! That is 3 more weights!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can lead the party across the drawbridge in proud, steady cadence!',
      success: 'You stride across like a victorious general receiving a parade!',
      fumble: 'You pause midway across to gaze at the reflection of the clouds in the moat water.',
    },
    reward: {
      sparks: 3,
      badge: 'Drawbridge Master Token',
      item: 'Iron Gate Link Keyring',
    },
    bedtimeReflection:
      'Remember the heavy drawbridge resting safely on the stone banks, welcoming weary travellers inside for warm soup and rest.',
    extendedLore:
      'The drawbridge of Castle Thornwood weighs over four tons and is constructed from heartwood oak reinforced with cold-hammered dwarven iron straps. Two massive stone counterweights are hidden inside the hollow flanking towers, balancing the bridge so that even two squires turning a wooden windlass can raise or lower the timber platform with ease. Above the gate arches is the portcullis, an iron-tipped wooden grate that could be dropped in an emergency.',
    creativeWritingPrompts: [
      'The heavy iron chains creaked as the timber drawbridge...',
      'We learned that a drawbridge acts like a front door that can...',
      'We blended the digraph on Card #16 "/ch/ /i/ /p/" to...',
      'Our math pulley needed 7 + 3 = 10 counterweights to balance...',
      'When the drawbridge hit the stone threshold with a mighty THUD, we...',
    ],
  },

  {
    dayNumber: 8,
    title: 'The Armory of the Royal Knights',
    subtitle: 'Chainmail, shields, and digraph /th/ phonics blending',
    region: 'The Castle Citadel',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Inside the castle armory, racks of polished steel suits, brightly painted wooden shields, and velvet tournament flags line the stone walls. Sir Barnaby needs help counting the practice shields!',
    dmScript:
      'DM Prompt: "Smell that? Polished metal, beeswax, and leather! In medieval times, knights wore chainmail rings woven together so swords could not cut through. Sir Barnaby pulls a silver practice moth from a velvet box. Place Card #14 on the table and sound out the soft /th/ sound!"',
    tableCardId: 'card_14',
    cardToPlace: READING_CARDS[13], // moth
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Armor of the Knights',
        narration:
          'Sir Barnaby lets you hold a piece of real chainmail. It feels surprisingly heavy and cool against your palm, made of thousands of tiny interlocking iron rings.',
        dmPrompt: 'Ask the child: "Why did knights wear metal armor instead of t-shirts and shorts?"',
        challengeType: 'history',
        challengeSummary: 'Medieval Armor: Chainmail and plate defense',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Velvet Silver Moth',
        narration:
          'Inside a royal tournament trunk, a silver moth badge holds a cloak pin. The DM places Card #14 on the table! Watch out for the /th/ sound at the end of the word!',
        dmPrompt: 'Place Card #14 on the table. Point to /m/ /o/ /th/. Show how tongue goes between teeth for /th/.',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Digraph /th/: Read Card #14 "moth"',
        cardToPlace: READING_CARDS[13],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Polishing the Heraldic Shields',
        narration:
          'Sir Barnaby has 10 heraldic shields to polish. He and his squire have already cleaned 4 shields. 10 - 4 = ? How many shields are left to shine before the banquet?',
        dmPrompt: 'Subtraction from 10: 10 - 4 = 6.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 10 - 4 = 6',
        mathProblem: {
          spellName: 'Armor Polish Spell',
          problem: '10 - 4',
          answer: 6,
          hint: 'Hold up all 10 fingers. Put down 4 fingers. Count how many are still up: 6!',
          options: [5, 6, 7],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Junior Knight Blessing',
        narration:
          'Sir Barnaby dips his wooden training sword and taps your left and right shoulder: "For wisdom, courage, and bright reading, you are an honorary Shield-Bearer of the Realm!"',
        dmPrompt: 'Roll D6 Bravery check (DC 3+) to accept the knighting accolade.',
        challengeType: 'dice',
        challengeSummary: 'Bravery roll for knight accolade ceremony',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to stand tall during the knightly blessing!',
          success: 'You stand as motionless and proud as a marble statue!',
          fumble: 'A feather duster tickles your ear and you giggle during the oath!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Armor Polish Spell',
      problem: '10 - 4',
      answer: 6,
      hint: 'Start with 10 fingers. Fold 4 away. You have 6 fingers left!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can stand completely still during the knightly accolade!',
      success: 'You stand as still as an ancient marble statue!',
      fumble: 'A feather duster tickles your ear and you burst into happy giggles.',
    },
    reward: {
      sparks: 3,
      badge: 'Knightly Shield-Bearer Badge',
      item: 'Silver Chainmail Ring Trinket',
    },
    bedtimeReflection:
      'Think of how true bravery isn\'t about fighting—it\'s about standing up to protect your friends and helping those in need.',
    extendedLore:
      'In the Kingdom of Astraea, knights are not trained for conquest, but for guardianship and scholarly wisdom. A knight of King Alden takes the Chivalric Vow of the Three Shields: to shield the weak from injustice, to shield truth from falsehood, and to shield the natural wildlands from destruction. Chainmail shirts consist of over twenty thousand tiny welded rings of silver-steel, flexible enough to run or dance in while deflecting flying brambles and dragon embers.',
    creativeWritingPrompts: [
      'Inside the royal armory, the suits of armor gleamed with...',
      'Sir Barnaby showed us real chainmail and explained that...',
      'We blended the soft sound on Card #14 "/m/ /o/ /th/" to...',
      'When we subtracted 10 - 4 = 6 shields, our hero...',
      'My hero held a miniature lion shield and took the oath to...',
    ],
  },

  {
    dayNumber: 9,
    title: 'The Great Hall Banquet of King Alden',
    subtitle: 'Medieval banquets, high-frequency tricky words, and addition',
    region: 'The Castle Citadel',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Long wooden banquet tables in the Great Hall are piled with roasted apples, honey bread, and steaming berry tea! King Alden sits upon the High Throne, but he cannot find his golden crown scroll.',
    dmScript:
      'DM Prompt: "Candles flicker in high iron chandeliers, casting warm golden light over tapestry walls! King Alden smiles warmly: \'Welcome to our table, little hero! In our history books, kings invited everyone to celebrate harvest. But tricky words cannot always be sounded out with normal rules—they must be learned by sight!\' Place Card #20 on the table!"',
    tableCardId: 'card_20',
    cardToPlace: READING_CARDS[19], // was
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Life in the Medieval Great Hall',
        narration:
          'Lute players pluck cheerful melodies by the giant stone fireplace. King Alden serves you warm apple cider in a carved wooden goblet. "A Great Hall was where the whole village gathered for news and feasting!"',
        dmPrompt: 'Ask the child: "What food would you request if King Alden threw a banquet for your birthday?"',
        challengeType: 'history',
        challengeSummary: 'Medieval social life & celebrations in the Great Hall',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Tricky Sight-Word Scroll',
        narration:
          'King Alden unrolls a gold-fringed parchment. "This word is tricky! It sounds like /w/ /o/ /z/, but it is spelled w-a-s. It tells us what happened in the past!" The DM places Card #20 on the table!',
        dmPrompt: 'Place Card #20 on the table. Practice reading "was" by sight.',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Tricky Word: Read Card #20 "was"',
        cardToPlace: READING_CARDS[19],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Counting the Honey Scones',
        narration:
          'The royal baker brings 6 blueberry muffins and 4 golden honey scones. How many sweet pastries are on the silver platter? 6 + 4 = ?',
        dmPrompt: 'Number bonds to 10: 6 + 4 = 10.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 6 + 4 = 10',
        mathProblem: {
          spellName: 'Royal Feast Baker',
          problem: '6 + 4',
          answer: 10,
          hint: '6 in your head, count 4 on your fingers: 7, 8, 9, 10!',
          options: [9, 10, 11],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: King Alden\'s Secret Map',
        narration:
          'King Alden presses a rolled parchment into your hands: "Beyond the castle lies the Mountain of Pyra. Take this map and my royal blessing to soothe the Starlight Dragon!"',
        dmPrompt: 'Roll D6 Sparkle check (DC 3+) to thank the King courteously.',
        challengeType: 'dice',
        challengeSummary: 'Sparkle check for royal court etiquette',
        diceRoll: {
          skill: 'sparkle',
          dc: 3,
          prompt: 'Roll D6 to bow or curtsy gracefully to King Alden!',
          success: 'The King claps in delight at your regal manners!',
          fumble: 'You bow so low that your satchel unclips and two shiny apples roll out onto the carpet!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Royal Feast Baker',
      problem: '6 + 4',
      answer: 10,
      hint: 'Start with 6 scones. Add 4 more: 7, 8, 9, 10! Exactly 10 scones for the feast!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can bow or curtsy gracefully to King Alden!',
      success: 'King Alden claps his hands in delight at your refined royal manners!',
      fumble: 'You bow so deeply that two shiny red apples spill out of your pockets onto the carpet.',
    },
    reward: {
      sparks: 3,
      badge: 'Royal Banquet Crown Badge',
      item: 'King Alden\'s Signed Royal Scroll',
    },
    bedtimeReflection:
      'Feel the warm firelight of the castle hearth wrapping around you like a cozy woollen blanket.',
    extendedLore:
      'The Great Hall of King Alden was designed to hold the entire town during the annual Midwinter Star Festival. Beneath the high rafters decorated with carved falcons and golden ivy, royal cooks prepare cinnamon spiced cider in copper kettles. King Alden\'s grandfather signed the Great Charter here, ensuring that all children in the realm, whether peasant or prince, have the right to learn to read runes and study the stars.',
    creativeWritingPrompts: [
      'In King Alden\'s great banquet hall, the scent of cinnamon and apples...',
      'We learned to read tricky word Card #20 "was" by sight because...',
      'The royal bakers made 6 berry muffins and 4 honey scones for a total of...',
      'King Alden smiled warmly from his carved throne and told us...',
      'Before we left the banquet, my hero received a royal scroll sealed with...',
    ],
  },

  {
    dayNumber: 10,
    title: 'The Historical Stone Gate of Wisdom',
    subtitle: 'Why stone replaced wood, and tricky word "said"',
    region: 'The Castle Citadel',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'As you leave the castle gates toward the rocky foothills, an ancient archway glows with magical historical riddles. Why did the old kings tear down their wooden forts to build in stone?',
    dmScript:
      'DM Prompt: "Before us stands the Arch of Ages. An engraving reads: \'Early castles were made of wooden logs, but wooden walls could catch fire from flaming arrows and rotted in the rain. So wise kings built walls of solid stone that last a thousand years!\' Now place Card #22 on the table: read the tricky word \'said\'!"',
    tableCardId: 'card_22',
    cardToPlace: READING_CARDS[21], // said
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Tale of Wood vs. Stone',
        narration:
          'You look back at the grand towers. Hundreds of years ago, the first castles were wooden forts built on hills called mottes. But when fires broke out, wood burned! Stone kept everyone safe and dry.',
        dmPrompt: 'Ask the child: "If you were building a castle to last 1,000 years, would you choose wood or stone? Why?"',
        challengeType: 'history',
        challengeSummary: 'Transition from wooden motte-and-bailey to stone castles',
        geoHistoryPrompt: {
          question: 'Why did medieval kings change from building wooden castles to building stone castles?',
          options: ['Stone does not burn in fire and lasts for centuries', 'Wood was too expensive', 'Stone was softer to sleep on'],
          correctAnswer: 'Stone does not burn in fire and lasts for centuries',
          explanation: 'Stone walls could not catch fire from flaming arrows and could not be easily battered down!',
        },
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Rune of What the King Spoke',
        narration:
          'On the stone archway, an inscription reads: "The King _______: Be brave and true!" The DM places Card #22 on the table! It spells: s-a-i-d = said!',
        dmPrompt: 'Place Card #22 on the table. Explain that s-a-i-d is read as "said" like "red".',
        challengeType: 'phonics',
        challengeSummary: 'Phase 4 Tricky Word: Read Card #22 "said"',
        cardToPlace: READING_CARDS[21],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The 10 Archway Keystone Blocks',
        narration:
          'The stone arch has 10 keystones. 8 keystones are already cemented in place. 8 + ? = 10. How many more keystones must you slide into the arch to open the pass?',
        dmPrompt: 'Number bond to 10: 8 + 2 = 10.',
        challengeType: 'math',
        challengeSummary: 'Number Bond to 10: 8 + 2 = 10',
        mathProblem: {
          spellName: 'Masonry Keystone Spell',
          problem: '8 + 2',
          answer: 10,
          hint: 'Count up from 8 to 10: 9, 10! Exactly 2 more stones!',
          options: [1, 2, 3],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Highlands Open Wide',
        narration:
          'The giant stone arch swings open with a low hum of magical power. Ahead rise the purple crags of Mount Pyra, bathed in the pink light of sunset.',
        dmPrompt: 'Roll D6 Smarts check (DC 3+) to record the history lesson.',
        challengeType: 'dice',
        challengeSummary: 'Smarts check to record castle history',
        diceRoll: {
          skill: 'smarts',
          dc: 3,
          prompt: 'Roll D6 to ink your historical discovery in your notebook!',
          success: 'Your journal drawing looks like a master royal blueprint!',
          fumble: 'Your ink bottle leaves a cute round smudge like a full moon!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Masonry Keystone Spell',
      problem: '8 + 2',
      answer: 10,
      hint: 'You have 8 stones. Count on: 9, 10! That is 2 more stones to make 10!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 3,
      prompt: 'Roll D6 to see if your hero records this historical lesson in their adventure log!',
      success: 'Your quill sketches a beautiful castle diagram worthy of an architect!',
      fumble: 'You smudge a bit of purple berry ink across your nose while drawing.',
    },
    reward: {
      sparks: 4,
      badge: 'Master Historian of Astraea',
      item: 'Carved Limestone Keystone Token',
    },
    bedtimeReflection:
      'Think of how strong and enduring stone is, standing firm through winter storms and summer heat.',
    extendedLore:
      'The Arch of Ages marks the boundary between the civilized Citadel lowlands and the wild volcanic foothills of Mount Pyra. Archaeologists in Astraea have uncovered charred wooden timbers from the original Motte-and-Bailey fortress dating back seven hundred years. King Alden\'s ancestors replaced the wood with mountain limestone, inventing the arched keystone technique which allows stone bridges and towers to stand without mortar.',
    creativeWritingPrompts: [
      'At the ancient stone arch, I learned that castles changed from wood to stone because...',
      'We read tricky word Card #22 "said", which sounded like...',
      'We calculated 8 + 2 = 10 to place the final keystone and...',
      'I sketched the grand castle gate in my notebook, adding details of...',
      'As we looked back at the castle one last time, the flags fluttered and...',
    ],
  },

  // =========================================================================
  // WEEK 3: THE PREHISTORIC CRYSTAL CAVERNS (DAYS 11 - 15)
  // =========================================================================
  {
    dayNumber: 11,
    title: 'The Spiral Shell of the Ammonite',
    subtitle: 'Prehistoric fossils, Mary Anning science, and vowel digraph /ai/',
    region: 'The Crystal Cavern of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Entering the foothills of Mount Pyra, a cool breeze wafts from a dark limestone cavern. Embedded in the rock wall is a perfect spiral shell millions of years old. A tiny cave bat hangs upside down above it.',
    dmScript:
      'DM Prompt: "As we step into the cavern entrance, glittering violet crystals reflect our lantern light. On the wall is a spiral rock pattern like a curled snail. It is an Ammonite fossil! Millions of years ago, this mountain was under a warm ocean! A brave scientist named Mary Anning discovered famous fossils just like this on coastal cliffs. Now place Card #18 on the table!"',
    tableCardId: 'card_18',
    cardToPlace: READING_CARDS[17], // rain
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Discovering the Ammonite Fossil',
        narration:
          'You trace your finger along the spiraling limestone ridges. It looks like a curled ram\'s horn or a snail shell, but it is made of hard, solid stone.',
        dmPrompt: 'Ask the child: "What is a fossil? How did a sea shell end up high up on a mountain?"',
        challengeType: 'history',
        challengeSummary: 'Prehistoric fossils & Mary Anning fossil hunting',
        geoHistoryPrompt: {
          question: 'What is a fossil?',
          options: ['The preserved remains of ancient plants or animals turned to stone', 'A plastic toy dropped by hikers', 'A piece of candy'],
          correctAnswer: 'The preserved remains of ancient plants or animals turned to stone',
          explanation: 'Over millions of years, ancient sea creatures were buried in mud and turned into rock fossils!',
        },
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Prehistoric Rain Rune',
        narration:
          'Ancient rain washed sediment over the shell to turn it to stone. The DM places Card #18 on the table! Look at the /ai/ digraph in the middle: /r/ /ai/ /n/ = rain!',
        dmPrompt: 'Place Card #18 on the table. Point out the dash for "ai" making the /ai/ sound.',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Vowel Digraph /ai/: Read Card #18 "rain"',
        cardToPlace: READING_CARDS[17],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Chipping the Fossil Free',
        narration:
          'You need 5 taps with your small geological hammer to free the specimen safely. You tap 2 times carefully. Tap, tap! How many more gentle taps are needed to reach 5? (2 + ? = 5)',
        dmPrompt: 'Arithmetic number bond: 2 + 3 = 5.',
        challengeType: 'math',
        challengeSummary: 'Number Bond to 5: 2 + 3 = 5',
        mathProblem: {
          spellName: 'Geologist\'s Chisel',
          problem: '2 + 3',
          answer: 5,
          hint: 'Hold up 2 fingers. How many more do you need to show all 5 fingers? 3 more!',
          options: [2, 3, 4],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Ammonite in your Pocket',
        narration:
          'POP! The fossil frees itself into your palm. It is cool, smooth, and patterned like a spiral galaxy.',
        dmPrompt: 'Roll D6 Smarts check (DC 3+) to classify the fossil.',
        challengeType: 'dice',
        challengeSummary: 'Smarts check for scientific classification',
        diceRoll: {
          skill: 'smarts',
          dc: 3,
          prompt: 'Roll D6 to safely pack the ancient fossil in velvet!',
          success: 'You pack it like a real museum curator!',
          fumble: 'You accidentally drop it into your boot and have to shake it out with a giggle!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Geologist\'s Chisel',
      problem: '2 + 3',
      answer: 5,
      hint: 'You gave 2 taps. Count up to 5: 3, 4, 5! That is 3 more gentle taps!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can wrap the fossil safely in soft wool for travel!',
      success: 'You pack the specimen like a professional museum scientist!',
      fumble: 'The fossil slips into your pocket and tickles your leg as you walk.',
    },
    reward: {
      sparks: 4,
      badge: 'Fossil Hunter Discovery Pin',
      item: 'Genuine Ammonite Spiral Fossil',
    },
    bedtimeReflection:
      'Imagine millions of years ago, when gentle ancient waves rolled across what are now giant mountains under the stars.',
    extendedLore:
      'The limestone layers of Mount Pyra were formed over one hundred and fifty million years ago when the entire continent was covered by a warm tropical ocean called the Tethys Sea. Mary Anning of Lyme Regis inspired the royal fossil hunters of Astraea, who carefully uncover ancient ammonite shells and ichthyosaur vertebrae preserved in dark shale. The spiral geometry of the ammonite shell is known as the Golden Spiral, reflecting the natural harmony found throughout the cosmos.',
    creativeWritingPrompts: [
      'In the cool crystal cavern, my fingers brushed against a stone fossil of...',
      'We learned that millions of years ago, this high mountain was once...',
      'We decoded Card #24 "/r/ /ai/ /n/" with vowel digraph /ai/ to...',
      'Tapping the rock gently with 2 + 3 = 5 strikes freed...',
      'The spiral ammonite shell in my hand felt smooth, cold, and shaped like...',
    ],
  },

  {
    dayNumber: 12,
    title: 'The Glowing Mushroom Grotto',
    subtitle: 'Counting cave fungi, subterranean ecosystems, and vowel digraph /ee/',
    region: 'The Crystal Cavern of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Deeper inside the limestone tunnels, a subterranean garden of bioluminescent mushrooms glows in shades of aqua, violet, and electric green! Fluffy cave moths flutter between the glowing caps.',
    dmScript:
      'DM Prompt: "Look around! We don\'t even need our lanterns here—hundreds of mushrooms glow with magic light! Some living things make their own light; that is called bioluminescence! To find the secret staircase behind the giant mushroom, place Card #17 on the table and read the vowel digraph /ee/!"',
    tableCardId: 'card_17',
    cardToPlace: READING_CARDS[16], // see
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Subterranean Light Garden',
        narration:
          'Giant parasol mushrooms as tall as pony horses glow with soothing emerald and lavender light. Tiny droplets of sweet water drip from stalactites overhead.',
        dmPrompt: 'Ask the child: "What colors would your mushroom glow if you had a magical nightlight garden?"',
        challengeType: 'roleplay',
        challengeSummary: 'Sensory observation & cave science',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sight of the Secret Stairs',
        narration:
          'Behind a cluster of blue button mushrooms, a secret spiral staircase is carved into the crystal rock. The DM places Card #17 on the table! Two \'e\'s hold hands to make the long /ee/ sound: /s/ /ee/ = see!',
        dmPrompt: 'Place Card #17 on the table. Point out the dash under "ee".',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Vowel Digraph /ee/: Read Card #17 "see"',
        cardToPlace: READING_CARDS[16],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Harvesting Glowing Spores',
        narration:
          'You collect 5 purple spore crystals in your left vial and 5 aqua spore crystals in your right vial. 5 + 5 = ? How many glowing crystals do you have to illuminate your path?',
        dmPrompt: 'Doubles addition: 5 + 5 = 10.',
        challengeType: 'math',
        challengeSummary: 'Doubles Addition: 5 + 5 = 10',
        mathProblem: {
          spellName: 'Luminescent Spore Lantern',
          problem: '5 + 5',
          answer: 10,
          hint: 'Hold up both hands with all 5 fingers spread out! Count all your fingers: 10!',
          options: [9, 10, 11],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Cave Moth Flurry',
        narration:
          'A cloud of friendly cave moths flutters around your lantern in swirling circles, guiding you straight up the spiraling stone stairs.',
        dmPrompt: 'Roll D6 Speed check (DC 3+) to follow the moth lanterns.',
        challengeType: 'dice',
        challengeSummary: 'Speed check on spiral cave stairs',
        diceRoll: {
          skill: 'speed',
          dc: 3,
          prompt: 'Roll D6 to step up the winding stairs smoothly!',
          success: 'You glide up the crystal steps like a dancing acrobat!',
          fumble: 'You step on a soft spongy mushroom that squeaks like a rubber duck!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Luminescent Spore Lantern',
      problem: '5 + 5',
      answer: 10,
      hint: 'Show 5 fingers on one hand and 5 on the other. Put them together: 10 fingers!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can step up the winding crystal stairs without slipping!',
      success: 'You glide up the steps smoothly like a mountain goat!',
      fumble: 'You step on a squishy mushroom that makes a funny "SQUEAK!" sound.',
    },
    reward: {
      sparks: 4,
      badge: 'Luminescent Grotto Explorer Badge',
      item: 'Vial of Glowing Aqua Cave Spores',
    },
    bedtimeReflection:
      'Picture soft, gentle green and purple mushroom lights glowing in the quiet dark, keeping you safe and cozy.',
    extendedLore:
      'The Luminescent Grotto contains the largest subterranean fungal colonies in all of Astraea. These glowing mushrooms, known to herbalists as Starlight Agaric, produce bioluminescent luciferin that emits a soothing blue-green radiance without producing heat. Cave salamanders and fruit bats use this gentle light to navigate underground waterways. Explorers often carry vials of dried spores to cultivate reading lanterns that never run out of oil.',
    creativeWritingPrompts: [
      'Deep underground, the mushroom grotto glowed with soft aqua and...',
      'We counted 5 blue mushrooms and 5 purple mushrooms, making 10...',
      'We blended vowel digraph Card #25 "/s/ /ee/ /d/" into "seed" to...',
      'When I stepped on the winding crystal stairs, the rock echoed with...',
      'My glowing spore vial cast dancing patterns across my ceiling tonight like...',
    ],
  },

  {
    dayNumber: 13,
    title: 'The Underground Echo Abyss',
    subtitle: 'Sound waves, echoes, subtraction, and consonant blend /st/',
    region: 'The Crystal Cavern of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'The cavern opens into a vast underground canyon. Across the chasm stands an ancient stone bridge, but it is covered in loose crystal gravel that slides when you speak too loudly!',
    dmScript:
      'DM Prompt: "HARK! When you speak in this giant cavern, your voice bounces off the high limestone walls: \'Hello... hello... hello!\' That is an echo! Sound travels through the air like invisible waves. To tread lightly and steady your boots, place Card #24 on the table: blend the /st/ sound in \'fast\'!"',
    tableCardId: 'card_24',
    cardToPlace: READING_CARDS[23], // fast
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Testing the Echo Canyon',
        narration:
          'You cup your hands and make a gentle owl sound: "Hoo!" Three seconds later, the canyon answers: "Hoo... hoo... hoo!" Sound waves bounce back from the rocky walls.',
        dmPrompt: 'Encourage the child to make an echo sound and listen for the bounce!',
        challengeType: 'roleplay',
        challengeSummary: 'Acoustics & sound wave echo demonstration',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Steady Boots Rune',
        narration:
          'To cross the slippery crystal gravel, you need quick, light feet. The DM places Card #24 on the table! Blend: /f/ /a/ /s/ /t/ = fast!',
        dmPrompt: 'Place Card #24 on the table. Point to /f/ /a/ /s/ /t/.',
        challengeType: 'phonics',
        challengeSummary: 'Phase 4 Adjacent Consonants: Read Card #24 "fast"',
        cardToPlace: READING_CARDS[23],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Removing the Shaky Stones',
        narration:
          'There are 9 loose sliding pebbles on the bridge arch. You carefully kick 4 of them off into the safety net below. 9 - 4 = ? How many solid stones remain?',
        dmPrompt: 'Subtraction from 9: 9 - 4 = 5.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 9 - 4 = 5',
        mathProblem: {
          spellName: 'Featherfoot Stabilization',
          problem: '9 - 4',
          answer: 5,
          hint: 'Hold up 9 fingers. Fold down 4 fingers. Count how many are left: 5!',
          options: [4, 5, 6],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: Slipping Past the Crystal Chasm',
        narration:
          'With light, nimble steps, you sprint across the canyon arch without making a single pebble rattle!',
        dmPrompt: 'Roll D6 Speed check (DC 3+) for featherlight steps.',
        challengeType: 'dice',
        challengeSummary: 'Speed roll for quiet steps',
        diceRoll: {
          skill: 'speed',
          dc: 3,
          prompt: 'Roll D6 to cross the bridge without waking the sleeping stalactites!',
          success: 'You cross as quietly as a falling snowflake!',
          fumble: 'Your water canteen clinks against your belt with a merry "DING!"',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Featherfoot Stabilization',
      problem: '9 - 4',
      answer: 5,
      hint: 'Hold up 9 fingers. Fold down 4. You have 5 fingers left standing!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can cross the bridge as silently as a falling snowflake!',
      success: 'You cross without making a single sound! The echo cavern sleeps.',
      fumble: 'Your water canteen clinks against your belt with a merry "CLINK!" that echoes three times.',
    },
    reward: {
      sparks: 4,
      badge: 'Silent Featherfoot Ribbon',
    },
    bedtimeReflection:
      'Listen closely to the quiet stillness in your room tonight, soft and restful like the sleeping echo cavern.',
    extendedLore:
      'The Echo Canyon of Mount Pyra is an acoustic marvel carved over millennia by underground glacial meltwater. Acoustic scholars from the Royal Academy travel here to test brass flutes and crystal tuning forks. Sound waves take exactly two and a half seconds to bounce across the great abyss and return, creating harmonic overtones that resonate through the stalactites like an ancient cathedral organ.',
    creativeWritingPrompts: [
      'When I called into the Echo Canyon, the limestone walls answered with...',
      'We learned that sound travels in invisible waves that bounce like...',
      'We blended consonant blend Card #24 "/f/ /a/ /s/ /t/" so we could...',
      'We subtracted 8 loose stones from 2 unstable rocks to leave...',
      'Tiptoeing across the crystal bridge felt as light as...',
    ],
  },

  {
    dayNumber: 14,
    title: 'The Great Number Bond Gateway of Ten',
    subtitle: 'Balancing the 10 elemental gems and tricky word "the"',
    region: 'The Crystal Cavern of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'maths',
    storyHook:
      'At the highest point of the crystal tunnels stands the colossal Gateway of Solara. Ten round gemstone sockets circle the carved arch. Six sockets are filled with blazing ruby crystals, but four are dark and empty!',
    dmScript:
      'DM Prompt: "Before us is the Great Dragon Gateway! Around the arch are 10 circular sockets. 6 red fire gems glow, but 4 sockets are cold and empty! A glowing inscription says: \'Only when 10 gems glow together will the summit doors swing open!\' First, read the golden key rune on Card #21!"',
    tableCardId: 'card_21',
    cardToPlace: READING_CARDS[20], // the
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Gateway of Ten Sockets',
        narration:
          'Ten circular sockets, each framed in platinum dragons, circle the towering archway. Six ruby gems pulse with warm light, but four sockets need fresh starlight gems.',
        dmPrompt: 'Ask the child: "If you have 6 gems, how many more do you need to reach 10? Can you count up on your fingers?"',
        challengeType: 'math',
        challengeSummary: 'Number bonds to 10: 6 + 4 = 10',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Key Word of the Arch',
        narration:
          'Above the keyhole, the most famous word in all kingdom storybooks is carved: t-h-e = the! The DM places Card #21 on the table!',
        dmPrompt: 'Place Card #21 on the table. Practice reading "the" by sight.',
        challengeType: 'phonics',
        challengeSummary: 'Phase 2 Tricky Sight Word: Read Card #21 "the"',
        cardToPlace: READING_CARDS[20],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Channeling the 4 Missing Gems',
        narration:
          'You reach into your satchel and pull out 4 shimmering starlight crystals. 6 ruby gems + 4 starlight gems = 10 glowing gems! The gateway hums with power!',
        dmPrompt: 'Demonstrate with 6 red counters and 4 blue counters: 6 + 4 = 10.',
        challengeType: 'math',
        challengeSummary: 'Number bond to 10: 6 + 4 = 10',
        mathProblem: {
          spellName: 'Gemstone Alignment',
          problem: '6 + 4',
          answer: 10,
          hint: 'Start at 6. Count on 4 more: 7, 8, 9, 10! Exactly 10 gems!',
          options: [8, 9, 10],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Doors of Starlight Open',
        narration:
          'All ten gems blaze in brilliant rainbow illumination! With a sound like singing crystal bells, the giant doors part to reveal the starlit sky above the clouds.',
        dmPrompt: 'Roll D6 Bravery check (DC 3+) to step through the gateway.',
        challengeType: 'dice',
        challengeSummary: 'Bravery roll to step onto the summit',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to step proudly through the summit doors!',
          success: 'A warm mountain breeze welcomes you like an old friend!',
          fumble: 'You stop to marvel at the sparkling crystals on the doorframe!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Gemstone Alignment',
      problem: '6 + 4',
      answer: 10,
      hint: '6 gems in the door. Count on: 7, 8, 9, 10! That is 4 more gems to make 10!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see if your hero steps through the glowing summit gateway with courage!',
      success: 'You step through with your chin held high and your eyes shining with excitement!',
      fumble: 'You pause to scoop up one fallen speck of glitter to keep as a souvenir.',
    },
    reward: {
      sparks: 5,
      badge: 'Number Bond Keystone Key',
      item: 'Rainbow Starlight Crystal',
    },
    bedtimeReflection:
      'Think of 10 twinkling stars lighting up the sky, each one in its perfect place to watch over your sleep.',
    extendedLore:
      'The Gateway of Solara was erected by the Dragon Architects during the Golden Era of Astraea. Its ten circular sockets correspond to the ten harmonic frequencies of dragon speech. Number bonds to ten are considered the foundational magic of the kingdom because the ten fingers of a human explorer mirror the ten constellation stars of the Dragon Throne. When all ten sockets are filled, the granite portals glide open with zero friction along magnetic basalt rails.',
    creativeWritingPrompts: [
      'Standing before the towering Gateway of Solara, the 10 sockets glowed with...',
      'We learned that 6 red gems plus 4 starlight gems make 10, completing...',
      'We read the famous tricky word Card #21 "the", which unlocked...',
      'When all 10 crystals aligned, a beam of warm golden light...',
      'The crystal key in my hero\'s satchel felt warm and hummed like...',
    ],
  },

  {
    dayNumber: 15,
    title: 'The Cloud-Perch of the Zephyr Pixies',
    subtitle: 'Reading decodable sentences and mountain geography',
    region: 'The High Slopes of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'geography',
    storyHook:
      'Stepping out of the cavern, you stand on a high mountain terrace above the clouds! Swirling white mists billow below like a sea of whipped cream. A family of tiny winged Zephyr Pixies invites you to their tea party.',
    dmScript:
      'DM Prompt: "Look down! The entire kingdom of Astraea stretches below: the green forest looks like moss, the river looks like a blue ribbon, and the castle looks like a toy dollhouse! That is called a bird\'s-eye view! A pixie hands you a tiny leaf scroll with a full decodable sentence. Place Card #25 on the table!"',
    tableCardId: 'card_25',
    cardToPlace: READING_CARDS[24], // sentence: red fox sat
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Bird\'s-Eye View of Astraea',
        narration:
          'From this high altitude, you can see how mountains, rivers, and forests fit together on the map. The wind is crisp and clean, tasting of snow and wild thyme.',
        dmPrompt: 'Ask the child: "What does \'bird\'s-eye view\' mean? How do maps show things from high up?"',
        challengeType: 'geography',
        challengeSummary: 'Geography concepts: Aerial & bird\'s-eye views',
        geoHistoryPrompt: {
          question: 'What do we call looking down at the world from high up above like an eagle or an airplane?',
          options: ['A Bird\'s-Eye View', 'A Mole\'s-Eye View', 'A Snail\'s-Eye View'],
          correctAnswer: 'A Bird\'s-Eye View',
          explanation: 'A bird\'s-eye view looks down from the sky, just like explorer maps show the land!',
        },
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Pixie Scroll of the Red Fox',
        narration:
          'The pixies unroll a tiny birch-bark scroll with a complete sentence! The DM places Card #25 on the table: "A red fox sat on a big log."',
        dmPrompt: 'Place Card #25 on the table. Have the child read each word pointing with their finger.',
        challengeType: 'phonics',
        challengeSummary: 'Decodable Sentence: Read Card #25',
        cardToPlace: READING_CARDS[24],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Cloud Biscuit Math',
        narration:
          'The pixies offer you 7 cloud marshmallows. You eat 3 of them with your warm chamomile tea. 7 - 3 = ? How many cloud marshmallows are left on the silver leaf plate?',
        dmPrompt: 'Subtraction from 7: 7 - 3 = 4.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 7 - 3 = 4',
        mathProblem: {
          spellName: 'Pixie Cloud Feast',
          problem: '7 - 3',
          answer: 4,
          hint: 'Start with 7 fingers. Fold down 3 fingers. Count what remains: 4!',
          options: [3, 4, 5],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Pixie Dust Blessing',
        narration:
          'The pixies sprinkle sparkling golden dust over your shoulders: "You are ready for the dragon summit! Your heart is kind and your mind is bright!"',
        dmPrompt: 'Roll D6 Sparkle check (DC 3+) to catch a flying star sparkle.',
        challengeType: 'dice',
        challengeSummary: 'Sparkle roll for pixie dust blessing',
        diceRoll: {
          skill: 'sparkle',
          dc: 3,
          prompt: 'Roll D6 to catch a shimmering pixie sparkle in your palm!',
          success: 'The sparkle swirls around your fingers like a tiny firefly!',
          fumble: 'The sparkle lands on your nose and makes you sneeze warm starlight!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Pixie Cloud Feast',
      problem: '7 - 3',
      answer: 4,
      hint: 'Start with 7 marshmallows. Take 3 away. You have 4 left!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can catch a swirling golden star sparkle in their palm!',
      success: 'The sparkle settles in your hand, glowing like a warm firefly!',
      fumble: 'The sparkle lands on your cheek and tickles you until you laugh.',
    },
    reward: {
      sparks: 5,
      badge: 'Zephyr Pixie Wing Pin',
      item: 'Pouch of Golden Pixie Dust',
    },
    bedtimeReflection:
      'Imagine sitting on a soft, fluffy cloud high above the quiet earth, looking down at the peaceful twinkling lights.',
    extendedLore:
      'Zephyr Pixies live on the cloud terraces of Mount Pyra, harvesting condensed starlight and dandelion fluff to weave winter blankets for sleeping mountain animals. Because they live thousands of feet above the valleys, they possess aerial maps detailing the migratory paths of migrating storks, eagles, and celestial wyverns. Their tea is brewed from wild cloudberry petals and chamomile blossoms, naturally soothing weary adventurers.',
    creativeWritingPrompts: [
      'Sitting high above the clouds, the entire kingdom of Astraea looked like...',
      'We learned that looking down from high above is called a...',
      'On Card #25, we read the full decodable sentence: "A red fox sat on a big log" and...',
      'The pixies served us cloudberry tea in tiny acorn cups that tasted like...',
      'When the wind blew, my hero caught a swirling golden star sparkle and...',
    ],
  },

  // =========================================================================
  // WEEK 4: THE STARLIGHT SUMMIT & CELESTIAL DRAGON FLIGHT (DAYS 16 - 20)
  // =========================================================================
  {
    dayNumber: 16,
    title: 'The Crater of Sparky the Baby Fire-Drake',
    subtitle: 'Soothing dragon hiccups with addition arithmetic spells',
    region: 'The Summit of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'maths',
    storyHook:
      'Near the volcanic hot springs at the mountain peak, a baby red dragon named Sparky is having fiery hiccups! Every time he hiccups—"HIC!"—a shower of glowing harmless spark-bubbles flies into the air.',
    dmScript:
      'DM Prompt: "HIC-CUP! A shower of pink and gold bubbles pops around us! Meet Sparky, a little fire dragon no bigger than a golden retriever puppy! His tummy is full of fiery fizz. To calm his tummy, he needs us to balance his spark numbers! Place Card #27 on the table to read the sentence scroll!"',
    tableCardId: 'card_27',
    cardToPlace: READING_CARDS[26], // sentence: the sun is hot
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Sparky\'s Fiery Hiccups',
        narration:
          'Sparky looks at you with big amber eyes and rubs his round tummy. "HIC!" A spark bubble floats up and pops against Rowan\'s hat with a gentle "poof!" of cinnamon scent.',
        dmPrompt: 'Encourage the child to make a gentle hiccup sound and pat Sparky\'s tummy.',
        challengeType: 'roleplay',
        challengeSummary: 'Helping others through empathy & patience',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sun and Fire Scroll',
        narration:
          'A scroll hangs on Sparky\'s collar describing his dragon fire. The DM places Card #27 on the table: "The sun is hot and big."',
        dmPrompt: 'Place Card #27 on the table. Read each word with sound buttons.',
        challengeType: 'phonics',
        challengeSummary: 'Decodable Sentence: Read Card #27',
        cardToPlace: READING_CARDS[26],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Cooling Water-Lily Spell',
        narration:
          'To cool Sparky\'s hiccups, you mix 4 blue glacier ice drops with 4 mountain spring water drops. 4 + 4 = ? How many soothing drops do you feed baby Sparky?',
        dmPrompt: 'Doubles addition: 4 + 4 = 8.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 4 + 4 = 8',
        mathProblem: {
          spellName: 'Soothing Glacial Elixir',
          problem: '4 + 4',
          answer: 8,
          hint: '4 on one hand, 4 on the other hand. Count them up: 5, 6, 7, 8!',
          options: [7, 8, 9],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Purring Fire-Drake',
        narration:
          'Sparky drinks the soothing elixir and lets out one last tiny "hic-burp" of lavender sparkles. He curls into a warm circle at your feet, purring like a giant furry engine.',
        dmPrompt: 'Roll D6 Bravery check (DC 3+) to scratch Sparky under his chin.',
        challengeType: 'dice',
        challengeSummary: 'Bravery check to pet the baby dragon',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to gently scratch Sparky behind his ruby scales!',
          success: 'Sparky closes his eyes in blissful warmth!',
          fumble: 'Sparky licks your chin with a warm tongue that smells like toasted marshmallows!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Soothing Glacial Elixir',
      problem: '4 + 4',
      answer: 8,
      hint: '4 drops on the left + 4 drops on the right. Count them all: 8 soothing drops!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can gently scratch baby Sparky behind his warm scales!',
      success: 'Sparky closes his eyes and purrs with blissful dragon joy!',
      fumble: 'Sparky playfully nuzzles your tummy, tickling you with his soft snout.',
    },
    reward: {
      sparks: 5,
      badge: 'Dragon Tamer Certificate',
      item: 'Warm Ruby Dragon Scale',
    },
    bedtimeReflection:
      'Feel the warm, cozy comfort of baby Sparky purring softly beside you, keeping you snug through the cool night.',
    extendedLore:
      'Baby fire dragons, or Wyrmlings, hatch once every century inside volcanic pumice geysers on Mount Pyra. Sparky is the youngest offspring of Pyra the Great Dragon. Because baby dragons do not yet have full control over their internal flame glands, excessive excitement or drinking cold mineral spring water causes harmless spark hiccups that smell pleasantly of toasted marshmallows and cinnamon.',
    creativeWritingPrompts: [
      'Near the volcanic hot springs, we met baby dragon Sparky whose hiccups made...',
      'We read sentence Card #27: "The sun is hot" and saw Sparky...',
      'We added 4 red sparks and 3 golden sparks, solving 4 + 3 = ...',
      'Sparky rolled over on his back to let me scratch his belly and...',
      'The ruby dragon scale he gifted me radiated gentle heat like a...',
    ],
  },

  {
    dayNumber: 17,
    title: 'The Starlight Peak of Glacia the Ice Dragon',
    subtitle: 'Freezing thermal vents with subtraction and tricky word "they"',
    region: 'The High Slopes of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'maths',
    storyHook:
      'Near the snowy summit ridge, icy winds swirl around crystalline blue arches. Glacia, the elegant Sapphire Ice-Drake, protects the mountain glacier. She tests travellers with frosted number runes.',
    dmScript:
      'DM Prompt: "Brrr! The air sparkles with crystalline snow diamonds! Glacia the Sapphire Drake spreads wings made of translucent blue ice. She speaks like falling glass chimes: \'To cross my frosted ridge without slipping, solve my frosty riddle and read the scroll of unity!\' Place Card #23 on the table!"',
    tableCardId: 'card_23',
    cardToPlace: READING_CARDS[22], // they
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Sapphire Ice Ridge',
        narration:
          'Glacia\'s scales shimmer like polished sapphires. She breathes a cool, refreshing mist that smells like mint and clean winter frost.',
        dmPrompt: 'Ask the child: "How does hot and cold balance nature on a high mountain?"',
        challengeType: 'geography',
        challengeSummary: 'Climate & altitude: Why mountain peaks have snow and glaciers',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Scroll of the Realm Companions',
        narration:
          'Glacia unrolls a scroll describing your brave party: "They walk together as friends." The DM places Card #23 on the table! Read the tricky word: t-h-e-y = they!',
        dmPrompt: 'Place Card #23 on the table. Practice reading "they".',
        challengeType: 'phonics',
        challengeSummary: 'Phase 4 Tricky Word: Read Card #23 "they"',
        cardToPlace: READING_CARDS[22],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Quenching the Overheated Geysers',
        narration:
          'Eight hot steam geysers are hissing on the ridge. Glacia asks you to freeze 3 geysers with your Frost Shield spell. 8 - 3 = ? How many warm geysers remain to keep the mountain creatures warm?',
        dmPrompt: 'Subtraction from 8: 8 - 3 = 5.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Subtraction: 8 - 3 = 5',
        mathProblem: {
          spellName: 'Glacial Chill Shield',
          problem: '8 - 3',
          answer: 5,
          hint: 'Hold up 8 fingers. Fold down 3 fingers. Count how many are left: 5!',
          options: [4, 5, 6],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Sapphire Icicle Wand',
        narration:
          'Glacia touches your wand with the tip of her frosted wing. The tip crystallizes into an unbreakable sapphire star that radiates cool calming light.',
        dmPrompt: 'Roll D6 Smarts check (DC 3+) to channel the ice magic.',
        challengeType: 'dice',
        challengeSummary: 'Smarts check for frost magic balance',
        diceRoll: {
          skill: 'smarts',
          dc: 3,
          prompt: 'Roll D6 to balance the frost magic without freezing your fingertips!',
          success: 'The wand glows with sparkling crystal blue light!',
          fumble: 'A snowflake lands right on the tip of your nose and melts into a drop!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Glacial Chill Shield',
      problem: '8 - 3',
      answer: 5,
      hint: '8 steam geysers. Freeze 3: count down: 7, 6, 5! Exactly 5 left!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can channel the frost magic smoothly into their wand!',
      success: 'Your wand glows with sparkling crystalline sapphire light!',
      fumble: 'A tiny snowflake lands right on your nose, making you cross your eyes.',
    },
    reward: {
      sparks: 5,
      badge: 'Glacial Frost Master Pin',
      item: 'Sapphire Icicle Wand Focus',
    },
    bedtimeReflection:
      'Feel the cool, clean winter breeze freshening the air, calming your thoughts for deep and peaceful rest.',
    extendedLore:
      'Glacia the Sapphire Ice-Drake guards the high altitude permafrost that feeds seven glacial streams during the summer months. Her scales are composed of organic ice-quartz crystals that do not melt even in direct sunlight. High mountain biomes rely on this perennial snowpack to slowly supply fresh water to the forests and farmlands across Astraea all through July and August.',
    creativeWritingPrompts: [
      'On the snowy summit ridge, Glacia the Ice Dragon spread her translucent wings of...',
      'We learned that mountain glaciers provide cool fresh water for...',
      'We read tricky word Card #23 "they", discovering that...',
      'We calculated 8 - 3 = 5 geysers to balance the mountain\'s temperature and...',
      'Glacia breathed a gentle mint-scented frost mist that made my hero feel...',
    ],
  },

  {
    dayNumber: 18,
    title: 'The Bramble Lair of Bramble the Earth Dragon',
    subtitle: 'Healing nature with addition and decodable sentence scrolls',
    region: 'The High Slopes of Mount Pyra',
    durationMinutes: 20,
    subjectFocus: 'creativity',
    storyHook:
      'In a sheltered alpine bowl near the summit, Bramble the Earth Dragon rests inside a cradle of mossy roots and wild berry bushes. He needs arithmetic magic to sprout golden dragon-fruit flowers!',
    dmScript:
      'DM Prompt: "Earth dragons have scales of jade and moss! Bramble yawns, smelling of sweet damp soil and fresh mint. He rumbles: \'When spring arrives, the mountain needs flowers to feed the bumblebees and pixies! Cast your Sprout Vine spell to help me count the blooms!\' Place Card #26 on the table!"',
    tableCardId: 'card_26',
    cardToPlace: READING_CARDS[25], // sentence: can you see the cat
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Mountain Greenhouse',
        narration:
          'Bramble the Earth Dragon is covered in lush green moss and tiny wild strawberries. Birds nest safely between his back ridges, singing sweet morning songs.',
        dmPrompt: 'Ask the child: "How do plants and trees protect the soil on a steep mountain from sliding down?"',
        challengeType: 'geography',
        challengeSummary: 'Plant roots & preventing soil erosion on mountains',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Question Scroll of the Pixies',
        narration:
          'Bramble points his leafy tail at a woven vine scroll. The DM places Card #26 on the table: "Can you see the cat?"',
        dmPrompt: 'Place Card #26 on the table. Point to the question mark at the end!',
        challengeType: 'phonics',
        challengeSummary: 'Decodable Question Sentence: Read Card #26',
        cardToPlace: READING_CARDS[25],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Blooming the Dragon-Fruit Flowers',
        narration:
          'You cast your Sprout Vine spell! 5 pink strawberry blossoms bloom on the left vine, and 3 golden dragon-fruit flowers bloom on the right vine. 5 + 3 = ? How many flowers bloom in total?',
        dmPrompt: 'Addition: 5 + 3 = 8.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 5 + 3 = 8',
        mathProblem: {
          spellName: 'Sprout Vine Bloom',
          problem: '5 + 3',
          answer: 8,
          hint: 'Start with 5 on one hand. Pop up 3 fingers on the other hand. Count: 6, 7, 8!',
          options: [7, 8, 9],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Crown of Mountain Jasmine',
        narration:
          'Bramble weaves a fragrant wreath of mountain jasmine and sets it gently upon your brow. "You carry the living heart of nature with you!"',
        dmPrompt: 'Roll D6 Sparkle check (DC 3+) to receive the flower wreath.',
        challengeType: 'dice',
        challengeSummary: 'Sparkle check to receive the wreath',
        diceRoll: {
          skill: 'sparkle',
          dc: 3,
          prompt: 'Roll D6 to wear the fragrant jasmine crown proudly!',
          success: 'A sweet perfume of wild jasmine surrounds you!',
          fumble: 'A friendly honeybee buzzes around your crown and lands softly on your shoulder!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Sprout Vine Bloom',
      problem: '5 + 3',
      answer: 8,
      hint: '5 blossoms on the left vine + 3 on the right vine. Count together: 6, 7, 8 blooms!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can wear the flower crown without a single petal dropping!',
      success: 'You look like the guardian prince or princess of the green forest!',
      fumble: 'A fuzzy yellow bumblebee lands on your crown to sip some nectar, buzzing happily.',
    },
    reward: {
      sparks: 5,
      badge: 'Earth Guardian Jasmine Wreath',
      item: 'Crown of Alpine Jasmine',
    },
    bedtimeReflection:
      'Breathe in the sweet scent of mountain strawberries and damp moss, resting deep in nature\'s gentle embrace.',
    extendedLore:
      'Bramble the Earth Dragon is the oldest living creature on Mount Pyra. His skin has transformed over nine hundred years into living peat, wild clover, and sweet alpine jasmine. Forest botanists believe that Bramble\'s deep rumbling purr stimulates root growth across the entire alpine watershed, preventing rockslides and keeping mountain valleys fertile throughout dry summers.',
    creativeWritingPrompts: [
      'Inside the sheltered alpine bowl, Bramble the Earth Dragon was covered in...',
      'We learned that plant roots protect steep mountain slopes from...',
      'We read question sentence Card #26: "Can you see the cat?" and noticed the...',
      'We sprouted 6 wild strawberries and 4 golden flowers, making a total of...',
      'Bramble placed a crown of alpine jasmine on my hero\'s head that smelled of...',
    ],
  },

  {
    dayNumber: 19,
    title: 'The Celestial Summit of Solara the Starlight Dragon',
    subtitle: 'The grand arithmetic dragon dance atop Mount Pyra',
    region: 'The Starlight Crater',
    durationMinutes: 25,
    subjectFocus: 'maths',
    storyHook:
      'At last, you stand inside the glittering Starlight Crater at the very peak of Mount Pyra! An immense, magnificent dragon with iridescent scales of gold, pearl, and violet curls atop a bed of starlight lilies. Solara opens her gentle violet eyes and welcomes you.',
    dmScript:
      'DM Prompt: "HURRAH! We have reached the highest point in the entire world! Solara the Great Starlight Dragon rises on majestic wings that shimmer like the aurora borealis! She speaks with a voice like warm golden bells: \'Welcome, hero of Astraea! Your journey through words, numbers, history, and the four winds has brought you here! Let us perform the Grand Dance of Arithmetic Balance!\' Place Card #30 on the table!"',
    tableCardId: 'card_30',
    cardToPlace: READING_CARDS[29], // sentence: the star is in the night
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Standing Before Solara',
        narration:
          'Solara the Starlight Dragon is as vast as a sailing ship, yet her eyes are as gentle as a grandmother\'s smile. Stardust falls from her wings like shimmering glitter.',
        dmPrompt: 'Ask the child: "How do you feel standing at the top of the mountain after 19 days of travel?"',
        challengeType: 'roleplay',
        challengeSummary: 'Reflecting on growth, perseverance, and achievement',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Starlight Night Scroll',
        narration:
          'Solara points with her golden claw at the constellation scroll. The DM places Card #30 on the table: "The star is in the night sky."',
        dmPrompt: 'Place Card #30 on the table. Read the grandest decodable sentence in the realm!',
        challengeType: 'phonics',
        challengeSummary: 'Decodable Sentence: Read Card #30',
        cardToPlace: READING_CARDS[29],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Grand Arithmetic Dance of Balance',
        narration:
          'Solara has 10 starlight energy sparks. You cast your Sparkbolt spell (adding 5 starlight beams) and your Frost Shield spell (balancing 5 cooling clouds). 5 + 5 = 10! The dragon\'s energy settles into pure, tranquil harmony.',
        dmPrompt: 'Demonstrate with 10 tokens: 5 + 5 = 10.',
        challengeType: 'math',
        challengeSummary: 'Mastery Number Bond: 5 + 5 = 10',
        mathProblem: {
          spellName: 'Celestial Starlight Symphony',
          problem: '5 + 5',
          answer: 10,
          hint: '5 stars + 5 clouds = 10 points of pure balance!',
          options: [8, 9, 10],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Starlight Dragon Flight',
        narration:
          'Solara lowers her golden neck: "Climb onto my back, junior hero! It is time to fly across the realm!" You hold onto her warm scales as she leaps into the starlit sky!',
        dmPrompt: 'Roll D6 Bravery check (DC 3+) for the epic dragon flight.',
        challengeType: 'dice',
        challengeSummary: 'Bravery roll for dragon flight',
        diceRoll: {
          skill: 'bravery',
          dc: 3,
          prompt: 'Roll D6 to soar through the aurora borealis on Solara\'s back!',
          success: 'You soar through rainbow starlight clouds with arms outstretched!',
          fumble: 'You hold on tight and shout with sheer delight as wind tickles your cheeks!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Celestial Starlight Symphony',
      problem: '5 + 5',
      answer: 10,
      hint: '5 starlight sparks + 5 cooling frost clouds = 10 points of total harmony!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 3,
      prompt: 'Roll D6 to see if your hero can soar into the night sky holding onto Solara\'s scales!',
      success: 'You soar above the world through glowing ribbons of aurora borealis!',
      fumble: 'You hold on tight and laugh out loud as stardust sprinkles your eyelashes.',
    },
    reward: {
      sparks: 6,
      badge: 'Champion Rider of the Starlight Dragon',
      item: 'Golden Starlight Dragon Scale',
    },
    bedtimeReflection:
      'Imagine soaring softly through the deep blue night sky on the back of a gentle golden dragon, watching the twinkling stars below.',
    extendedLore:
      'Solara the Starlight Dragon is the guardian matriarch of Astraea. Born during the convergence of the three moons over two thousand years ago, she is the keeper of the Great Constellation Archive. Her scales refract starlight into rainbow auroras that can be seen from every window in the kingdom. Ancient scrolls say that whenever a child learns to read and show kindness to animals, Solara\'s wings pulse with a warm golden glow that illuminates the northern sky.',
    creativeWritingPrompts: [
      'Standing atop the highest mountain crater, Solara the Starlight Dragon looked...',
      'We read the grandest sentence on Card #30: "The star is in the night sky" and...',
      'To balance Solara\'s celestial energy, we solved 5 + 5 = 10, bringing...',
      'Climbing onto Solara\'s golden back, her wings caught the wind and we...',
      'Soaring across the starry midnight sky above all of Astraea, I saw...',
    ],
  },

  {
    dayNumber: 20,
    title: 'The Royal Coronation & Knighting Ceremony',
    subtitle: 'Celebrating 20 days of courage, phonics, maths, and history',
    region: 'The Citadel of King Alden & The Great Hall',
    durationMinutes: 20,
    subjectFocus: 'history',
    storyHook:
      'Solara glides down from the clouds into the courtyard of King Alden\'s Castle! Trumpets blare, church bells ring, and the entire kingdom—knights, pixies, otters, and owls—cheers your name. Today you receive the Golden Crown of Wisdom!',
    dmScript:
      'DM Prompt: "CHEERS ROAR ACROSS THE CITADEL! King Alden, Sir Barnaby, Professor Hoot, and all four dragons stand in the Great Hall. You have read all 30 tabletop cards, mastered mental arithmetic, navigated the compass, and explored ancient history! It is time to sign your Royal Certificate of Heroic Mastery! Place Card #29 on the table!"',
    tableCardId: 'card_29',
    cardToPlace: READING_CARDS[28], // sentence: the king will sing
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Royal Triumphal Entry',
        narration:
          'You dismount from Solara\'s back onto a velvet red carpet. Flower petals of pink and gold rain down from the castle battlements. Sir Barnaby salutes with tears of joy in his eyes.',
        dmPrompt: 'Ask the child: "What was your favorite adventure of all 20 days?"',
        challengeType: 'roleplay',
        challengeSummary: 'Reflecting on personal favorite moments of the 20-day quest',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Song of King Alden',
        narration:
          'King Alden unrolls the Coronation Anthem. The DM places Card #29 on the table: "The king will sing a song for you!"',
        dmPrompt: 'Place Card #29 on the table. Point to /ng/ digraph in "sing" and "song".',
        challengeType: 'phonics',
        challengeSummary: 'Phase 3 Digraph /ng/: Read Card #29',
        cardToPlace: READING_CARDS[28],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Sum of All Your Stars',
        narration:
          'King Alden counts the royal treasury of wisdom: "You started with courage, and now you have earned dozens of Star Sparks!" Solve the final celebratory math riddle: 10 + 0 = 10 (perfect completion)!',
        dmPrompt: 'Zero property addition: 10 + 0 = 10.',
        challengeType: 'math',
        challengeSummary: 'Arithmetic Addition: 10 + 0 = 10',
        mathProblem: {
          spellName: 'Coronation Fanfare',
          problem: '10 + 0',
          answer: 10,
          hint: 'If you have 10 stars and add 0 more, how many do you have? Still 10!',
          options: [0, 10, 20],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Crowning & Certificate Presentation',
        narration:
          'King Alden and Solara place the Golden Crown of Astraea upon your head! You are officially proclaimed "Master Scholar & Dragon Protector of the Realm!"',
        dmPrompt: 'Roll D6 Bravery check (DC 1+) for the ultimate victory fanfare!',
        challengeType: 'dice',
        challengeSummary: 'Heroic graduation roll',
        diceRoll: {
          skill: 'bravery',
          dc: 1,
          prompt: 'Roll D6 for your coronation triumph!',
          success: 'The entire kingdom erupts in a deafening cheer: "LONG LIVE THE HERO!"',
          fumble: 'You smile broadly with pride and bow to all your kingdom friends!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Coronation Fanfare',
      problem: '10 + 0',
      answer: 10,
      hint: 'You have 10 stars and add zero more. You have all 10 stars of mastery!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 1,
      prompt: 'Roll D6 for the ultimate victory cheer across the kingdom of Astraea!',
      success: 'Confetti and fireworks erupt across the sky in celebration of your heroic mind!',
      fumble: 'You smile broadly with pride as Solara nuzzles your cheek lovingly.',
    },
    reward: {
      sparks: 10,
      badge: 'Grand Protector of the Realm Gold Medal',
      item: 'Golden Crown of Astraea & Royal Diploma',
    },
    bedtimeReflection:
      'Sleep tonight knowing you are a true champion of kindness, courage, and wisdom. The whole kingdom of Astraea will always remember your deeds.',
    extendedLore:
      'The Grand Coronation of Astraea is held once every generation to honor the young scholar who has mastered the four foundational disciplines: Phonics Runes of Reading, Mental Math of Balance, Geography of Maps, and Historical Knowledge of Castles and Earth. The Golden Crown of Astraea is fashioned from woven willow branches dipped in liquid gold, symbolizing that true strength bends with gentleness and grows with knowledge. All who complete this 20-day journey have their names permanently inscribed in the Royal Golden Chronicle.',
    creativeWritingPrompts: [
      'Today the entire kingdom gathered in the Great Hall to celebrate...',
      'We read Card #29: "The king will sing a song for you!" and the choir...',
      'Solving the final math fanfare 10 + 0 = 10 proved that...',
      'King Alden placed the Golden Crown of Astraea on my hero\'s head and...',
      'Looking back on all 20 days of our adventure across Astraea, I am most proud of...',
    ],
  },
];

export const DAILY_CAMPAIGNS: DailyCampaign[] = [
  ...BASE_CAMPAIGNS_BOOK_1,
  ...SKY_ISLES_CAMPAIGNS,
];

