import { DailyCampaign } from '../types';
import { READING_CARDS } from './readingCards';

export const SKY_ISLES_CAMPAIGNS: DailyCampaign[] = [
  // =========================================================================
  // WEEK 5 / BOOK II: THE SKY ISLES OF ZEPHYRIA (DAYS 21 - 25)
  // =========================================================================
  {
    dayNumber: 21,
    title: 'Boarding the Royal Cloud Skiff',
    subtitle: 'Awakening the silk sails with the wind rune card',
    region: 'The Floating Docks of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'With the Golden Crown of Astraea gleaming on your head, King Alden escorts you to the royal cliffside docks. Below lies the emerald kingdom; above, colossal floating islands drift like islands of cotton. Waiting at the wooden pier is the Royal Cloud Skiff, its silk sails fluttering in the cool mountain breeze.',
    dmScript:
      'Parents & DMs: Hand the child Card #31. Read with high adventure enthusiasm: "You stand at the edge of the highest cliff in Astraea! The cloud skiff rocks gently against the wooden pylons. Master Dylan adjusts the brass rudder and smiles: \'To catch the northern thermal, speak the secret word of the sky!\' Place Card #31 in front of the young hero!"',
    tableCardId: 'card_31_wind',
    cardToPlace: READING_CARDS[30], // wind
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Stepping Aboard the Skiff',
        narration:
          'You step onto the cedar deck of the cloud skiff. Pip the puppy squire scrambles aboard with his brass goggles strapped over his floppy ears. The morning air smells crisp, like pine needles and clean mountain snow.',
        dmPrompt: 'Ask the child: "How does the cloud skiff feel under your boots, and what color are your hero’s flying goggles?"',
        challengeType: 'roleplay',
        challengeSummary: 'Boarding the sky skiff & adventurer roleplay',
        rewardNote: 'Award 1 Heart of Bravery for stepping onto the flying ship!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Wind Rune Sail',
        narration:
          'Embroidered upon the white silk mainsail are four glowing sound buttons: /w/ ... /i/ ... /n/ ... /d/. The Dungeon Master places Card #31 right in front of you!',
        dmPrompt: 'Touch each sound button on Card #31: /w/ ... /i/ ... /n/ ... /d/! Blend into "wind"!',
        challengeType: 'phonics',
        challengeSummary: 'Blend sounds /w/ /i/ /n/ /d/ into "wind"',
        cardToPlace: READING_CARDS[30],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Thermal Lift Spell',
        narration:
          'The mainsail billows with silver light! 10 cool mountain drafts and 2 warm dragon thermals swirl together beneath the hull. Cast your Lift-Draft spell to soar into the sky!',
        dmPrompt: 'Have the child count on fingers: 10 + 2 drafts.',
        challengeType: 'math',
        challengeSummary: 'Addition: 10 + 2 = 12',
        mathProblem: {
          spellName: 'Zephyr Lift Draft',
          problem: '10 + 2',
          answer: 12,
          hint: 'Start at 10 and count on two more: 11, 12!',
          options: [11, 12, 13],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: Soaring Above the Clouds',
        narration:
          'The mooring ropes uncoil! With a graceful whoosh, the cloud skiff glides off the cliff into the endless blue sky! Below, the Whispering Woods look like green moss pillows.',
        dmPrompt: 'Roll D6 Speed check (DC 2+) to steer the brass rudder straight toward Cloud Isle!',
        challengeType: 'dice',
        challengeSummary: 'Rudder steering roll',
        diceRoll: {
          skill: 'speed',
          dc: 2,
          prompt: 'Roll D6 to catch the golden rainbow current!',
          success: 'The skiff catches the warm thermal, gliding smoothly like a silver swan!',
          fumble: 'A flock of singing sky-sparrows tickles Pip’s nose with purple feathers!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Thermal Lift Draft',
      problem: '10 + 2',
      answer: 12,
      hint: '10 plus 2 makes 12!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 2,
      prompt: 'Roll D6 to steer the cloud skiff toward the floating islands!',
      success: 'You navigate the sky currents with master-class precision!',
      fumble: 'Pip barks with glee as fluffy cloud mist tickles your cheeks!',
    },
    reward: {
      sparks: 5,
      badge: 'Sky Skiff Captain Badge',
      item: 'Brass Aviator Goggles & Silk Ribbon',
    },
    bedtimeReflection:
      'As you drift to sleep, imagine floating peacefully on a soft white cloud, watching the gentle stars twinkle above Astraea.',
    extendedLore:
      'The Floating Sky Isles of Zephyria were lifted high above the earth during the First Harmonic Convergence. Suspended by ancient gravitational stardust, their waterfalls fall into the sky before evaporating into rainbow mist. The Cloud-Weavers travel between isles using wooden skiffs equipped with starlight sails.',
    creativeWritingPrompts: [
      'When our cloud skiff lifted off the cliff into the blue sky, I saw...',
      'Pip put on his flying goggles and barked because...',
      'Blending /w/ /i/ /n/ /d/ made the silk sails glow with...',
      'Looking down at the kingdom below, the castle looked like...',
      'Tonight my hero dreams of sailing to the highest star because...',
    ],
  },

  {
    dayNumber: 22,
    title: 'The Feathered Gryphon Perch',
    subtitle: 'Healing the silver flight wing with the /ng/ digraph',
    region: 'The High Aerie of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'The cloud skiff docks at a floating granite aerie. Sitting atop a nest of silver pine needles is a magnificent feather-crested gryphon named Aurelius. The majestic creature winces gently—a stray cloud bramble has tangled in its silver wing.',
    dmScript:
      'Parents & DMs: Hand the child Card #32. Read gently: "The gryphon tilts its golden eagle head, chirping like a gigantic robin. Its silver wing feathers shimmer in the midday sun. To untangle the bramble, we must blend the /ng/ sound rune!"',
    tableCardId: 'card_32_wing',
    cardToPlace: READING_CARDS[31], // wing
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Greeting the Sky Gryphon',
        narration:
          'Aurelius lowers his beak and nuzzles your shoulder gently. His feathers are as soft as velvet, warm with sunbeams.',
        dmPrompt: 'Ask the child: "What gentle greeting does your hero whisper to the giant friendly gryphon?"',
        challengeType: 'roleplay',
        challengeSummary: 'Empathy & gentle animal greeting',
        rewardNote: 'Award 1 Heart of Kindness for befriending Aurelius!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Feathered Wing Rune',
        narration:
          'Gently lifting the tangled wing feather, you see three glowing runes carved into the silver quill: /w/ ... /i/ ... /ng/! The Dungeon Master places Card #32 on the table!',
        dmPrompt: 'Touch each sound button: /w/ ... /i/ ... /ng/! Notice how /n/ and /g/ sing together: /ng/!',
        challengeType: 'phonics',
        challengeSummary: 'Spot the /ng/ digraph in "wing"',
        cardToPlace: READING_CARDS[31],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Feather Restoration Spell',
        narration:
          'The bramble slips away! Now, 11 silver feathers and 3 golden feathers need gentle starlight smoothing. Cast your feather-mend spell!',
        dmPrompt: 'Help the child count 11 + 3 feathers.',
        challengeType: 'math',
        challengeSummary: 'Addition: 11 + 3 = 14',
        mathProblem: {
          spellName: 'Quill-Mend Sparkle',
          problem: '11 + 3',
          answer: 14,
          hint: 'Start at 11 and count 3 more: 12, 13, 14!',
          options: [13, 14, 15],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Gryphon Wing Bow',
        narration:
          'Aurelius spreads his wings wide, creating a gentle warm breeze that lifts Pip’s ears! The gryphon drops a glowing silver down feather into your satchel as a thank you token.',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to accept the majestic bow of honor!',
        challengeType: 'dice',
        challengeSummary: 'Gryphon bond roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 to receive the feather token of friendship!',
          success: 'Aurelius lets out a joyful trumpeting chirp that echoes across the clouds!',
          fumble: 'A warm gust of wind ruffles your hair into a funny feather hairdo!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Quill-Mend Sparkle',
      problem: '11 + 3',
      answer: 14,
      hint: '11 plus 3 makes 14 feathers!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 for the gryphon’s bond of friendship!',
      success: 'Aurelius bows low with royal dignity and friendship!',
      fumble: 'Aurelius nudges you with his beak in a playful tickle!',
    },
    reward: {
      sparks: 5,
      badge: 'Silver Gryphon Feather Badge',
      item: 'Iridescent Silver Gryphon Down Feather',
    },
    bedtimeReflection:
      'Think of how good it feels to help an animal in need. Sleep peacefully knowing your kindness spreads warmth everywhere.',
    extendedLore:
      'Sky Gryphons have guarded the high reaches of Astraea for centuries. Unlike earth creatures, their feathers never get wet from cloud mist, and they can hear a child whispering a phonics rhyme from five miles away.',
    creativeWritingPrompts: [
      'When I gently stroked Aurelius the gryphon’s silver feathers, he...',
      'Reading the word W-I-N-G made the magic bramble dissolve into...',
      'Solving 11 + 3 = 14 healed the gryphon’s wing so that he could...',
      'Aurelius gave me a silver feather that glows whenever...',
    ],
  },

  {
    dayNumber: 23,
    title: 'The Polished Starlight Terrace',
    subtitle: 'Illuminating the sky path with the /ar/ digraph card',
    region: 'The Starlight Terrace of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'The cloud skiff lands on a terrace paved with smooth translucent quartz. Across the terrace, starlight crystals are scattered like glittering sugar. But as dusk gathers, the navigation lanterns need glowing star shards to illuminate the path forward.',
    dmScript:
      'Parents & DMs: Hand the child Card #33. Read with mysterious wonder: "The sun is setting in shades of lilac and gold. On the crystal terrace, fallen starlight pieces hum with quiet music. The Dungeon Master places Card #33 in front of you!"',
    tableCardId: 'card_33_star',
    cardToPlace: READING_CARDS[32], // star
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Twilight on the Glass Terrace',
        narration:
          'You kneel on the smooth quartz floor. Below your feet, tiny constellations twinkle inside the stone like frozen fireworks.',
        dmPrompt: 'Ask the child: "What wish does your hero make upon the first twilight star?"',
        challengeType: 'roleplay',
        challengeSummary: 'Wishing upon the evening star',
        rewardNote: 'Award 1 Star Spark for heartfelt dreaming!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Polished Star Rune',
        narration:
          'A glowing crystal shard reflects your smile. Inscribed upon its facets is the pirate /ar/ digraph: /s/ ... /t/ ... /ar/! Place Card #33 on the table!',
        dmPrompt: 'Listen for the "ar" sound! Touch each sound button: /s/ ... /t/ ... /ar/! Blend into "star"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ar/ digraph in "star"',
        cardToPlace: READING_CARDS[32],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Charging the Lantern Shards',
        narration:
          'To light the four beacon towers, you collect 12 silver shards and 4 golden shards from the terrace floor. Cast your Glow-Gather spell!',
        dmPrompt: 'Help the child count 12 + 4 shards.',
        challengeType: 'math',
        challengeSummary: 'Addition: 12 + 4 = 16',
        mathProblem: {
          spellName: 'Starlight Cluster Gather',
          problem: '12 + 4',
          answer: 16,
          hint: 'Start at 12 and count on 4: 13, 14, 15, 16!',
          options: [15, 16, 17],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Four Beacons Ignite',
        narration:
          'You place the shards into the bronze lantern housings. With a chime of musical glass, four beams of lavender light shoot straight into the evening sky!',
        dmPrompt: 'Roll D6 Sparkle check (DC 2+) to synchronize the starlight beams!',
        challengeType: 'dice',
        challengeSummary: 'Starlight synchronization roll',
        diceRoll: {
          skill: 'sparkle',
          dc: 2,
          prompt: 'Roll D6 to align the beacon beams!',
          success: 'A bridge of solid purple starlight forms across to the next island!',
          fumble: 'Tiny friendly starlight glow-moths dance around your head in a circle!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Starlight Cluster Gather',
      problem: '12 + 4',
      answer: 16,
      hint: '12 plus 4 makes 16 glowing shards!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 2,
      prompt: 'Roll D6 to ignite the starlight beacon!',
      success: 'The terrace sparkles with radiant lavender brilliance!',
      fumble: 'You smile as stardust glitters on your explorer boots!',
    },
    reward: {
      sparks: 6,
      badge: 'Starlight Terrace Medallion',
      item: 'Polished Lavender Starlight Geode',
    },
    bedtimeReflection:
      'Look out your real window tonight and spot the brightest star. Remember that you carry a spark of that same bright light inside your heart.',
    extendedLore:
      'The Starlight Terrace was constructed by ancient astronomers who studied the movements of the Celestial Dragon constellation. The stones absorb sunlight by day and emit soothing, eye-safe luminescence at night.',
    creativeWritingPrompts: [
      'On the crystal terrace at sunset, the sky turned shades of...',
      'Reading S-T-A-R made the lavender crystals chime like...',
      'Counting 12 + 4 = 16 shards lit up the beacon bridge so that...',
      'My wish upon the evening star was for all creatures to...',
    ],
  },

  {
    dayNumber: 24,
    title: 'The Cloud-Weaver Nursery',
    subtitle: 'Tucking baby dragons to sleep with the /n/ /e/ /s/ /t/ blend',
    region: 'The Fluffy Cumulus Nursery',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Crossing the starlight bridge brings you to the softest place in all of Astraea: the Cloud-Weaver Nursery! Giant hammocks woven from cloud-cotton hang from silver birch trees. Inside the hammocks, baby Zephyr hatchlings are yawning, waiting for their bedtime story.',
    dmScript:
      'Parents & DMs: Hand the child Card #34. Read in a soft, cozy bedtime voice: "The air here is warm and smells of lavender and honey. Baby dragons with tiny silver wings are tumbling playfully in the cloud-fluff. To tuck them into bed, read Card #34!"',
    tableCardId: 'card_34_nest',
    cardToPlace: READING_CARDS[33], // nest
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Fluffy Cloud Fluff',
        narration:
          'Pip curls up instantly in a pile of warm down, letting out a contented puppy sigh. Three baby cloud dragons roll toward your boots, chirping like squeaky rubber ducks.',
        dmPrompt: 'Ask the child: "What cute baby names would you give these three little cloud dragons?"',
        challengeType: 'roleplay',
        challengeSummary: 'Naming the baby cloud dragons',
        rewardNote: 'Award 1 Heart of Gentleness for caring for the hatchlings!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Cloud Nest Rune',
        narration:
          'Woven into the edge of the cotton crib are four cozy sound buttons: /n/ ... /e/ ... /s/ ... /t/! The Dungeon Master places Card #34 right in front of you!',
        dmPrompt: 'Touch each sound button: /n/ ... /e/ ... /s/ ... /t/! Blend into "nest"!',
        challengeType: 'phonics',
        challengeSummary: 'Blend sounds /n/ /e/ /s/ /t/ into "nest"',
        cardToPlace: READING_CARDS[33],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Cloud Blanket Subtraction',
        narration:
          'There were 14 fluffy cloud blankets in the basket, but the baby dragons have cuddled under 3 of them already. How many clean blankets are left in the basket?',
        dmPrompt: 'Help the child count backwards: 14 take away 3.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 14 - 3 = 11',
        mathProblem: {
          spellName: 'Blanket Tucking Spell',
          problem: '14 - 3',
          answer: 11,
          hint: 'Start at 14 and count back 3: 13, 12, 11!',
          options: [10, 11, 12],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Cloud Lullaby',
        narration:
          'The little dragons snuggle under their blankets and close their shiny eyes. A gentle cloud chime plays a sweet lullaby from the birch tree boughs.',
        dmPrompt: 'Roll D6 Smarts check (DC 2+) to whisper the final gentle bedtime rhyme!',
        challengeType: 'dice',
        challengeSummary: 'Bedtime lullaby roll',
        diceRoll: {
          skill: 'smarts',
          dc: 2,
          prompt: 'Roll D6 to sing the peaceful nursery song!',
          success: 'All three baby dragons fall soundly asleep, puffing tiny starlight bubbles as they snooze!',
          fumble: 'One baby dragon snores with a tiny squeak and hugs your finger like a toy!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Blanket Tucking Spell',
      problem: '14 - 3',
      answer: 11,
      hint: '14 take away 3 leaves 11 clean blankets!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 2,
      prompt: 'Roll D6 to whisper the soft lullaby!',
      success: 'The nursery descends into peaceful, dreamy slumber!',
      fumble: 'You smile warmly as a baby dragon curls into a sleepy ball on your lap!',
    },
    reward: {
      sparks: 5,
      badge: 'Cloud Nursery Caretaker Ribbon',
      item: 'Silver Cloud-Cotton Sleep Charm',
    },
    bedtimeReflection:
      'Snuggle deep into your own cozy bed tonight. Just like the baby dragons in their cloud nests, you are safe, cherished, and loved.',
    extendedLore:
      'Cloud-Weaver Nurseries are protected by ancient sleep wards. No loud thunder or harsh winds can ever penetrate the cotton-mist boundaries, making it the most peaceful sanctuary in Astraea.',
    creativeWritingPrompts: [
      'In the cloud nursery, the three baby dragons snuggled and...',
      'Reading N-E-S-T made the cloud blankets fluff up like...',
      'Counting 14 - 3 = 11 blankets ensured that every creature had...',
      'The sweet lullaby we sang sounded like...',
    ],
  },

  {
    dayNumber: 25,
    title: 'The Rainbow Lily Rain-Garden',
    subtitle: 'Nourishing singing sky flowers with the /ai/ digraph card',
    region: 'The Rainbow Lily Terraces',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Morning on the floating isles brings a gentle sun shower. You step onto a terrace filled with giant rainbow lilies. Their petals open toward the sky, but the shower is light—the singing flowers need a refreshing rain spell to bloom in full splendor.',
    dmScript:
      'Parents & DMs: Hand the child Card #35. Read with joy: "The sun is shining while droplets of crystal rain fall like diamonds. When the lilies drink rain, they chime musical notes like bells! Place Card #35 in front of the player!"',
    tableCardId: 'card_35_rain',
    cardToPlace: READING_CARDS[34], // rain
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Singing Lily Petals',
        narration:
          'Giant lilies colored magenta, cyan, and sunflower yellow sway in the warm breeze. As raindrops hit their petals, they play musical notes: do, re, mi, fa, sol!',
        dmPrompt: 'Ask the child: "Can you sing a gentle three-note scale like the musical lilies?"',
        challengeType: 'roleplay',
        challengeSummary: 'Musical scale singing & plant harmony',
        rewardNote: 'Award 1 Heart of Joy for making music with nature!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sweet Rain Rune',
        narration:
          'A crystal watering can sits by the path, carved with the /ai/ vowel team: /r/ ... /ai/ ... /n/! The Dungeon Master sets Card #35 on the table!',
        dmPrompt: 'Remember the rule: when two vowels go walking, the first does the talking! /r/ ... /ai/ ... /n/ = "rain"!',
        challengeType: 'phonics',
        challengeSummary: 'Identify vowel team /ai/ in "rain"',
        cardToPlace: READING_CARDS[34],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Raindrop Flower Math',
        narration:
          '10 drops of sunlit rain fall on the red lilies, and 5 drops fall on the blue lilies. Cast your Rain-Shower spell to give them a healthy drink!',
        dmPrompt: 'Count 10 + 5 drops on fingers or counters.',
        challengeType: 'math',
        challengeSummary: 'Addition: 10 + 5 = 15',
        mathProblem: {
          spellName: 'Rainbow Shower Bloom',
          problem: '10 + 5',
          answer: 15,
          hint: '10 plus 5 makes 15 raindrops!',
          options: [14, 15, 16],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Grand Floral Harmony',
        narration:
          'The lilies drink deeply and burst into magnificent bloom! A double rainbow arches from one side of the floating island to the other.',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to step onto the rainbow archway!',
        challengeType: 'dice',
        challengeSummary: 'Rainbow bridge crossing roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 to step onto the solid rainbow bridge!',
          success: 'The rainbow bridge sparkles firmly under your feet like smooth colored glass!',
          fumble: 'A friendly drop of warm rain splashes gently on your nose with a giggle!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Rainbow Shower Bloom',
      problem: '10 + 5',
      answer: 15,
      hint: '10 plus 5 makes 15 drops of sweet rain!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 to cross the rainbow bridge!',
      success: 'You stride across the rainbow with triumphant confidence!',
      fumble: 'You smile broadly as rainbow light shimmers on your armor!',
    },
    reward: {
      sparks: 6,
      badge: 'Rainbow Bloom Botanist Badge',
      item: 'Ever-Singing Rainbow Lily Bulb',
    },
    bedtimeReflection:
      'Think of how rain helps flowers grow. In life, gentle challenges help our minds grow strong, smart, and wise.',
    extendedLore:
      'Rainbow Lilies bloom only in high altitude microclimates where sun and rain touch at the exact same moment. Their nectar is harvested by cloud bees to make healing honey-clover tea for tired travelers.',
    creativeWritingPrompts: [
      'When the rain droplets touched the rainbow lilies, they sang...',
      'Reading the word R-A-I-N made the sun shower turn into...',
      'Solving 10 + 5 = 15 helped all the thirsty flowers bloom into...',
      'Walking across the solid rainbow bridge felt like...',
    ],
  },

  // =========================================================================
  // WEEK 6: THE CELESTIAL CURRENTS & CLOUD HARBORS (DAYS 26 - 30)
  // =========================================================================
  {
    dayNumber: 26,
    title: 'The Sky Skiff Regatta',
    subtitle: 'Racing cloud buoys with the /oa/ vowel team in "boat"',
    region: 'The Azure Cloud Lagoon',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'At the Azure Cloud Lagoon, colorful flying skiffs have gathered for the annual Friendly Sky Regatta! Star-weavers in flowing silk cloaks wave from their docks. Master Dylan checks your skiff’s rudder and points to the starting line marked by glowing cloud buoys.',
    dmScript:
      'Parents & DMs: Hand the child Card #36. Read with cheerful excitement: "The regatta horns blow three merry notes! Boats of oak, silverwood, and wicker are ready to race around the cloud rings. Place Card #36 in front of the player!"',
    tableCardId: 'card_36_boat',
    cardToPlace: READING_CARDS[35], // boat
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Starting Horn',
        narration:
          'Pip stands on the bow of the skiff, holding the checkered regatta flag in his puppy paws. The wind ruffles your hair with fresh enthusiasm.',
        dmPrompt: 'Ask the child: "What motto or cheer does your hero shout to start the friendly race?"',
        challengeType: 'roleplay',
        challengeSummary: 'Sportsmanship & race cheering',
        rewardNote: 'Award 1 Heart of Fair Play for encouraging other racers!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sky Skiff Rune',
        narration:
          'Carved into the polished wooden prow of your craft is the /oa/ vowel team: /b/ ... /oa/ ... /t/! Place Card #36 on the table!',
        dmPrompt: 'Remember: "oa" makes the long /oh/ sound! Touch each sound button: /b/ ... /oa/ ... /t/!',
        challengeType: 'phonics',
        challengeSummary: 'Read vowel team /oa/ in "boat"',
        cardToPlace: READING_CARDS[35],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Cloud Buoy Turn',
        narration:
          'Your skiff leads a fleet of 15 wooden boats. After rounding the giant cumulus turn, 4 boats take the scenic route to admire a flock of sky-rays. How many boats are still racing alongside you?',
        dmPrompt: 'Help the child subtract 15 - 4.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 15 - 4 = 11',
        mathProblem: {
          spellName: 'Gale-Turn Acceleration',
          problem: '15 - 4',
          answer: 11,
          hint: '15 take away 4 leaves 11 boats!',
          options: [10, 11, 12],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Golden Finish Line',
        narration:
          'Side by side with Captain Astrid’s wicker skiff, both boats cross the golden starlight finish ribbon together! The crowd on the floating docks cheers with pure joy!',
        dmPrompt: 'Roll D6 Speed check (DC 2+) to execute a celebratory graceful turn!',
        challengeType: 'dice',
        challengeSummary: 'Finish line flair roll',
        diceRoll: {
          skill: 'speed',
          dc: 2,
          prompt: 'Roll D6 for the victory spin!',
          success: 'The skiff executes a flawless pirouette, sending sparkling cloud bubbles into the sky!',
          fumble: 'Pip drops the checkered flag and pounces on it playfully on the cedar deck!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Gale-Turn Acceleration',
      problem: '15 - 4',
      answer: 11,
      hint: '15 take away 4 leaves 11 boats!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 2,
      prompt: 'Roll D6 for the regatta finish spin!',
      success: 'You finish the race in perfect harmony and friendship!',
      fumble: 'You smile happily as other racers wave and cheer your name!',
    },
    reward: {
      sparks: 6,
      badge: 'Regatta Fair Play Pennant',
      item: 'Polished Brass Skiff Compass',
    },
    bedtimeReflection:
      'True games are played not to beat others, but to share joy, effort, and friendship together.',
    extendedLore:
      'The Sky Regatta of Zephyria has been held every solstice for three centuries. There are no losers in the regatta—every participant who crosses the finish line receives an identical brass navigation token.',
    creativeWritingPrompts: [
      'When the horn blew to start the sky boat race, our sails...',
      'Reading B-O-A-T made the wooden rudder glow with...',
      'Solving 15 - 4 = 11 boats helped us navigate through the...',
      'Crossing the finish ribbon alongside my new friends felt like...',
    ],
  },

  {
    dayNumber: 27,
    title: 'The Ancient Cloud Willow',
    subtitle: 'Climbing silver boughs with the /ee/ digraph card',
    region: 'The Willow Island Sanctuary',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'On a quiet floating island stands the great Cloud Willow, a tree whose trunk is made of silver bark and whose leaves are white as snow. In its highest branches, Dryad Elora has woven a reading platform surrounded by friendly cloud squirrels.',
    dmScript:
      'Parents & DMs: Hand the child Card #37. Read gently: "The silver willow branches sway like long silken ribbons. Dryad Elora calls down from the green canopy: \'Come climb with me, junior scholar! Touch Card #37 to awaken the tree’s ancient wisdom!\'"',
    tableCardId: 'card_37_tree',
    cardToPlace: READING_CARDS[36], // tree
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Silver Boughs',
        narration:
          'You place your hands on the silver bark. The tree trunk feels smooth and warm, vibrating with a quiet heartbeat of forest magic.',
        dmPrompt: 'Ask the child: "What gentle animal friend do you spot peeking out from the willow boughs?"',
        challengeType: 'roleplay',
        challengeSummary: 'Connecting with nature & animal spotting',
        rewardNote: 'Award 1 Heart of Wonder for observing the willow boughs!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Cloud Willow Rune',
        narration:
          'Carved into the main wooden archway is the /ee/ digraph rune: /t/ ... /r/ ... /ee/! The Dungeon Master places Card #37 on the table!',
        dmPrompt: 'Blend the sounds: /t/ ... /r/ ... /ee/! What leafy giant grows roots deep in the earth?',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ee/ digraph in "tree"',
        cardToPlace: READING_CARDS[36],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Counting Silver Acorns',
        narration:
          'A family of cloud squirrels shows you their treasure hollow: 12 silver acorns on the top shelf and 5 golden acorns on the bottom shelf. Cast your acorn-count spell!',
        dmPrompt: 'Help the child add 12 + 5 acorns.',
        challengeType: 'math',
        challengeSummary: 'Addition: 12 + 5 = 17',
        mathProblem: {
          spellName: 'Acorn Tally Blessing',
          problem: '12 + 5',
          answer: 17,
          hint: '12 plus 5 makes 17 sweet acorns!',
          options: [16, 17, 18],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Dryad’s Leaf Brooch',
        narration:
          'Dryad Elora smiles warmly and pins a silver willow leaf brooch to your tunic. "May you always grow tall, flexible, and kind like the willow tree."',
        dmPrompt: 'Roll D6 Smarts check (DC 2+) to memorize the tree’s ancient riddle!',
        challengeType: 'dice',
        challengeSummary: 'Willow wisdom roll',
        diceRoll: {
          skill: 'smarts',
          dc: 2,
          prompt: 'Roll D6 to understand the willow’s song!',
          success: 'The leaves whisper the secret location of the Starlight Chime Spire!',
          fumble: 'A soft willow leaf flutters down and lands squarely on Pip’s nose!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Acorn Tally Blessing',
      problem: '12 + 5',
      answer: 17,
      hint: '12 plus 5 makes 17 acorns!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 2,
      prompt: 'Roll D6 to memorize the willow riddle!',
      success: 'You commit the tree’s peaceful poem to your memory!',
      fumble: 'You smile as gentle leaves rustle in the afternoon breeze!',
    },
    reward: {
      sparks: 6,
      badge: 'Silver Willow Guardian Leaf',
      item: 'Carved Willow Leaf Reading Bookmark',
    },
    bedtimeReflection:
      'Like a strong tree, bend gently with the wind and keep your roots grounded in love, truth, and kindness.',
    extendedLore:
      'The Great Cloud Willow is said to have sprouted from a single seed planted by Queen Eleanor. Its roots do not touch soil; instead, they drink directly from the celestial cloud vapor.',
    creativeWritingPrompts: [
      'Climbing the silver boughs of the cloud tree, I discovered...',
      'Reading T-R-E-E made the white leaves hum a sweet song about...',
      'Solving 12 + 5 = 17 acorns helped the friendly squirrels...',
      'Dryad Elora told me the secret of the willow tree is to always...',
    ],
  },

  {
    dayNumber: 28,
    title: 'The Starlight Chime Spire',
    subtitle: 'Ringing brass bells with the /b/ /e/ /ll/ double consonant blend',
    region: 'The High Belfry of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Rising from a floating peak of white marble is the Starlight Chime Spire. Its open arches house sixteen polished brass bells of differing sizes. When the mountain winds blow through the arches, the bells chime musical signals to guide travelers through evening fog.',
    dmScript:
      'Parents & DMs: Hand the child Card #38. Read with clear ringing tones: "The evening fog is rolling in from the north. The bells need to be rung in harmony to guide the sky ships home. The Dungeon Master places Card #38 on the table!"',
    tableCardId: 'card_38_bell',
    cardToPlace: READING_CARDS[37], // bell
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Spiral Marble Stair',
        narration:
          'You climb the wide spiral steps of the belfry tower. Through the open stone arches, you can see the setting sun turning the clouds to shimmering apricot and rose.',
        dmPrompt: 'Ask the child: "How does the sound of ringing bells make your hero feel inside?"',
        challengeType: 'roleplay',
        challengeSummary: 'Reflecting on sound & feelings',
        rewardNote: 'Award 1 Heart of Calm for peaceful reflection!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Starlight Chime Rune',
        narration:
          'Cast upon the rim of the great central brass bell is the /ll/ double-consonant blend: /b/ ... /e/ ... /ll/! Place Card #38 on the table!',
        dmPrompt: 'Touch each sound button: /b/ ... /e/ ... /ll/! Blend into "bell"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the double /ll/ in "bell"',
        cardToPlace: READING_CARDS[37],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Silencing the Stray Chimes',
        narration:
          'There are 16 brass bells in the belfry. The storm wind has set 5 small bells jangling out of rhythm. Cast your Chime-Harmony spell to steady them!',
        dmPrompt: 'Help the child subtract 16 - 5 bells.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 16 - 5 = 11',
        mathProblem: {
          spellName: 'Chime Harmony Calibration',
          problem: '16 - 5',
          answer: 11,
          hint: '16 take away 5 leaves 11 bells ringing in sweet harmony!',
          options: [10, 11, 12],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Guiding Harmony',
        narration:
          'You pull the braided velvet bell cord. DING DONG CHIME! The rich bronze tone resonates across the sky, clearing a safe tunnel through the evening fog for three returning skiffs.',
        dmPrompt: 'Roll D6 Sparkle check (DC 2+) to ring the final clear chime!',
        challengeType: 'dice',
        challengeSummary: 'Bell ringing resonance roll',
        diceRoll: {
          skill: 'sparkle',
          dc: 2,
          prompt: 'Roll D6 to ring the bell of peace!',
          success: 'The warm tone echoes across the clouds, answered by cheering horns from the arriving ships!',
          fumble: 'Pip gives a cheerful "woof" in perfect harmony with the bell’s pitch!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Chime Harmony Calibration',
      problem: '16 - 5',
      answer: 11,
      hint: '16 take away 5 leaves 11 bells!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 2,
      prompt: 'Roll D6 for the bell-ringer’s resonance!',
      success: 'Your chime brings warmth and guidance to lost travelers!',
      fumble: 'You smile with pride as the brass bell gleams in the dusk!',
    },
    reward: {
      sparks: 6,
      badge: 'Belfry Harmony Chime Badge',
      item: 'Polished Miniature Brass Belfry Bell',
    },
    bedtimeReflection:
      'Listen to the quiet sounds around your room tonight. Let every gentle sound remind you that all is well and peaceful.',
    extendedLore:
      'The bells of Zephyria are cast from an alloy of copper and fallen stardust. Their frequencies can penetrate through the thickest weather, calming frightened birds and guiding explorers safely home.',
    creativeWritingPrompts: [
      'Standing in the high belfry as the sun set, the sky looked like...',
      'Reading B-E-L-L made the brass rim chime with a clear sound that...',
      'Solving 16 - 5 = 11 steadied the bells so that the sky ships could...',
      'When the grand chime rang across the clouds, everyone...',
    ],
  },

  {
    dayNumber: 29,
    title: 'The Aurora Glow Lagoon',
    subtitle: 'Swimming with bioluminescent sky-rays using the /ow/ digraph',
    region: 'The Phosphor Pools of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Night has fallen, but the sky is far from dark. You arrive at a warm thermal lagoon suspended on a bed of volcanic pumice. Swimming in the crystal water are bioluminescent sky-rays that emit soft cyan and violet light, leaving sparkling ripples wherever they glide.',
    dmScript:
      'Parents & DMs: Hand the child Card #39. Read with wonder: "The water here is as warm as a bedtime bath. Friendly winged rays with gentle eyes glide to the edge of the pool, nudging the stones to show you their glowing runes. Place Card #39 in front of the player!"',
    tableCardId: 'card_39_glow',
    cardToPlace: READING_CARDS[38], // glow
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Dipping Boots in the Warm Pool',
        narration:
          'You sit on the edge of the smooth pumice pool and dip your toes in. Tiny sparkling ripples spread out in glowing turquoise waves.',
        dmPrompt: 'Ask the child: "What gentle glow does your hero see beneath the surface of the warm water?"',
        challengeType: 'roleplay',
        challengeSummary: 'Sensory observation & peaceful relaxation',
        rewardNote: 'Award 1 Heart of Serenity for enjoying the peaceful lagoon!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Aurora Glow Rune',
        narration:
          'A winged sky-ray surfaces and presents a polished pearl marked with the /ow/ vowel team: /g/ ... /l/ ... /ow/! Place Card #39 on the table!',
        dmPrompt: 'Notice how "ow" makes the long /oh/ sound here: /g/ ... /l/ ... /ow/ = "glow"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ow/ digraph in "glow"',
        cardToPlace: READING_CARDS[38],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Sky-Ray School Math',
        narration:
          'There are 11 turquoise rays gliding on the left side of the pool and 6 violet rays on the right. Cast your Luminous-Count spell to gather them together!',
        dmPrompt: 'Help the child add 11 + 6 rays.',
        challengeType: 'math',
        challengeSummary: 'Addition: 11 + 6 = 17',
        mathProblem: {
          spellName: 'Luminescent Ray Chorus',
          problem: '11 + 6',
          answer: 17,
          hint: '11 plus 6 makes 17 glowing rays!',
          options: [16, 17, 18],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Bioluminescent Swirl',
        narration:
          'All 17 rays swim in a grand circle, lifting into the air like glowing kites! They shower you and Pip with warm, harmless starlight glitter.',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to glide on a ray’s back for a joyful lap!',
        challengeType: 'dice',
        challengeSummary: 'Sky-ray gliding roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 to glide across the warm lagoon!',
          success: 'You glide across the smooth water like a shining dolphin!',
          fumble: 'A playful ray splashes a gentle spray of warm sparkling water onto your tunic!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Luminescent Ray Chorus',
      problem: '11 + 6',
      answer: 17,
      hint: '11 plus 6 makes 17 glowing rays!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 to glide with the sky-rays!',
      success: 'You soar through the warm glowing water with radiant joy!',
      fumble: 'You laugh happily as colorful light dances all around you!',
    },
    reward: {
      sparks: 6,
      badge: 'Aurora Glow Swimmer Badge',
      item: 'Vial of Harmless Bioluminescent Stardust',
    },
    bedtimeReflection:
      'Imagine floating in that warm, glowing lagoon. Let all the tension leave your shoulders as you relax into your soft pillows.',
    extendedLore:
      'Bioluminescent Sky-Rays are warm-blooded aquatic beings that breathe both air and cloud-mist. They feed on stardust particles and are famous throughout Astraea for their playful, affectionate nature.',
    creativeWritingPrompts: [
      'Dipping my feet into the warm glowing lagoon, I saw...',
      'Reading G-L-O-W made the water shimmer with colors of...',
      'Solving 11 + 6 = 17 rays brought all the friendly creatures to...',
      'Gliding on the back of the gentle sky-ray felt like...',
    ],
  },

  {
    dayNumber: 30,
    title: 'The Cloud-Weaver Signet Vault',
    subtitle: 'Unlocking Queen Eleanor’s sky chest with the /ng/ digraph in "ring"',
    region: 'The High Archive of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Halfway through your Sky Isles journey, you arrive at the High Archive of Zephyria. Sitting on a plinth of carved lapis lazuli is Queen Eleanor’s sky chest. Locked for four centuries, it contains the legendary Cloud Compass needed to navigate the outer storm spires.',
    dmScript:
      'Parents & DMs: Hand the child Card #40. Read with noble solemnity: "The heavy gold lock has three revolving runic tumblers. The inscription reads: \'Only a scholar with kind hands and sharp phonics may turn my golden key.\' Place Card #40 on the table!"',
    tableCardId: 'card_40_ring',
    cardToPlace: READING_CARDS[39], // ring
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Lapis Lazuli Vault',
        narration:
          'Tall arched windows reveal the northern lights dancing across the sky. The golden chest gleams in the starlight, humming with ancient royal magic.',
        dmPrompt: 'Ask the child: "What promise of honor and kindness does your hero make before opening the royal chest?"',
        challengeType: 'roleplay',
        challengeSummary: 'Vow of honor & royal trust',
        rewardNote: 'Award 1 Heart of Honor for respecting history!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Golden Signet Rune',
        narration:
          'The three tumblers on the chest lock line up: /r/ ... /i/ ... /ng/! The Dungeon Master places Card #40 in front of you!',
        dmPrompt: 'Touch each sound button: /r/ ... /i/ ... /ng/! Blend into "ring"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ng/ digraph in "ring"',
        cardToPlace: READING_CARDS[39],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Tumbler Sequence Math',
        narration:
          'The lock mechanism requires 17 counter-clockwise turns, but Queen Eleanor’s diary notes 4 turns are already set. How many more clicks must you turn the dial?',
        dmPrompt: 'Help the child subtract 17 - 4.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 17 - 4 = 13',
        mathProblem: {
          spellName: 'Signet Tumbler Unlocking',
          problem: '17 - 4',
          answer: 13,
          hint: '17 take away 4 leaves 13 clicks!',
          options: [12, 13, 14],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Cloud Compass Revealed',
        narration:
          'CLICK! The heavy golden lid lifts smoothly. Inside, nestled on blue velvet, is the Cloud Compass of Zephyria, glowing with gentle sapphire light!',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to lift the royal heirloom!',
        challengeType: 'dice',
        challengeSummary: 'Royal heirloom retrieval roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 to receive the Cloud Compass!',
          success: 'The compass needle spins smoothly toward the North Star, chiming a melody of approval!',
          fumble: 'Pip sniffs the velvet cushion and sneezes a tiny puff of ancient lavender dust!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Signet Tumbler Unlocking',
      problem: '17 - 4',
      answer: 13,
      hint: '17 take away 4 leaves 13 clicks!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 to lift the Cloud Compass!',
      success: 'You hold the legendary compass aloft as starlight gleams upon your face!',
      fumble: 'You smile proudly as the ancient vault glows with golden warmth!',
    },
    reward: {
      sparks: 7,
      badge: 'Signet Keeper of Zephyria Medal',
      item: 'The Ancient Cloud Compass & Sapphire Chain',
    },
    bedtimeReflection:
      'You are halfway through Book II! Sleep with deep satisfaction knowing your wisdom has unlocked ancient wonders.',
    extendedLore:
      'The Cloud Compass was forged by Queen Eleanor herself. Its needle does not point toward magnetic north, but toward the nearest creature in need of friendship, help, or guidance.',
    creativeWritingPrompts: [
      'When the golden chest clicked open, the first thing I saw was...',
      'Reading R-I-N-G aligned the ancient tumblers with a satisfying...',
      'Solving 17 - 4 = 13 clicks unlocked the secret vault because...',
      'Holding Queen Eleanor’s Cloud Compass made me feel...',
    ],
  },

  // =========================================================================
  // WEEK 7: THE HARMONIC SPIRES & CLOUD FORGE (DAYS 31 - 35)
  // =========================================================================
  {
    dayNumber: 31,
    title: 'The Zephyr Wind Harp',
    subtitle: 'Playing sky melodies with the /ar/ digraph in "harp"',
    region: 'The Singing Pillars of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Guided by your new Cloud Compass, you land at the Singing Pillars. Stretched between two soaring crystalline arches are giant strings made of golden dragon-whisker silk. When mountain thermals breeze through the pass, the Zephyr Harp plays resonant music that calms wild storms.',
    dmScript:
      'Parents & DMs: Hand the child Card #41. Read with musical grace: "The great golden strings tremble in the breeze. To play a calming harmony that keeps the skies safe, read Card #41!"',
    tableCardId: 'card_41_harp',
    cardToPlace: READING_CARDS[40], // harp
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Standing at the Great Harp',
        narration:
          'The crystalline pillars tower seventy feet into the sky. You gently reach out your hand and pluck a golden string. A deep, rich chime reverberates through your chest.',
        dmPrompt: 'Ask the child: "What melody or song would your hero like the giant wind harp to play?"',
        challengeType: 'roleplay',
        challengeSummary: 'Musical imagination & harp melody',
        rewardNote: 'Award 1 Heart of Harmony for creating gentle music!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Zephyr Harp Rune',
        narration:
          'Carved into the tuning peg of the arch is the /ar/ digraph: /h/ ... /ar/ ... /p/! Place Card #41 on the table!',
        dmPrompt: 'Listen for the "ar" sound: /h/ ... /ar/ ... /p/! Blend into "harp"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ar/ digraph in "harp"',
        cardToPlace: READING_CARDS[40],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Tuning the Harp Strings',
        narration:
          'There are 13 low brass strings and 5 high silver strings that need careful tuning before the evening concert. Cast your Tuning-Fork spell!',
        dmPrompt: 'Help the child add 13 + 5 strings.',
        challengeType: 'math',
        challengeSummary: 'Addition: 13 + 5 = 18',
        mathProblem: {
          spellName: 'String Resonance Tuning',
          problem: '13 + 5',
          answer: 18,
          hint: '13 plus 5 makes 18 tuned strings!',
          options: [17, 18, 19],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Wind-Song Across the Realm',
        narration:
          'The wind catches all 18 strings at once! A magnificent, soothing chord spreads across the entire kingdom of Astraea. Below, children in their beds smile as the sweet lullaby enters their dreams.',
        dmPrompt: 'Roll D6 Sparkle check (DC 2+) to sustain the golden chord!',
        challengeType: 'dice',
        challengeSummary: 'Harmonic resonance roll',
        diceRoll: {
          skill: 'sparkle',
          dc: 2,
          prompt: 'Roll D6 for the kingdom-wide lullaby!',
          success: 'The music clears every stormy cloud from the horizon!',
          fumble: 'Pip howls along in a tiny, hilarious puppy baritone!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'String Resonance Tuning',
      problem: '13 + 5',
      answer: 18,
      hint: '13 plus 5 makes 18 strings!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 2,
      prompt: 'Roll D6 for the harp’s resonance!',
      success: 'Your music brings peace to every corner of the sky!',
      fumble: 'You laugh with delight as the golden strings shimmer warmly!',
    },
    reward: {
      sparks: 6,
      badge: 'Wind Harp Virtuoso Medallion',
      item: 'Golden Dragon-Whisker Harp String Ribbon',
    },
    bedtimeReflection:
      'Let the imagined music of the wind harp soothe your thoughts. Every gentle breath you take brings calm, peace, and restorative rest.',
    extendedLore:
      'The Zephyr Wind Harp was tuned 400 years ago by Queen Eleanor and Zephyr the Cloud Wyrm. Its strings never fray or snap, and its music can be heard by anyone who listens with an open, peaceful heart.',
    creativeWritingPrompts: [
      'When I plucked the giant golden harp string, the sound...',
      'Reading H-A-R-P made the mountain thermals sing like...',
      'Solving 13 + 5 = 18 tuned all the strings so that the music could...',
      'The song we played brought peaceful dreams to...',
    ],
  },

  {
    dayNumber: 32,
    title: 'The Campfire Firefly Hearth',
    subtitle: 'Baking sweet buns with the /ar/ blend in "spark"',
    region: 'The Hearthstone Peak of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'High in the mountains, the evening air grows brisk. You arrive at the Firefly Hearth, a round stone kitchen built around a geothermal hearthstone. Here, friendly star-bakers make sweet cloudberry buns, but the hearth embers need a warm spark to ignite.',
    dmScript:
      'Parents & DMs: Hand the child Card #42. Read with cozy warmth: "The stone oven smells of cinnamon and sweet wild berries. The baker smiles: \'To warm our hearth and bake buns for all the travelers, let us blend the spark rune!\' Place Card #42 on the table!"',
    tableCardId: 'card_42_spark',
    cardToPlace: READING_CARDS[41], // spark
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Kneading the Cloudberry Dough',
        narration:
          'You dust your hands with sweet powdered flour and help knead the fluffy purple cloudberry dough. Pip sits close by, hoping for a dropped blueberry.',
        dmPrompt: 'Ask the child: "What sweet shape does your hero mold their cloudberry bun into (a dragon, a star, or a heart)?"',
        challengeType: 'roleplay',
        challengeSummary: 'Culinary creativity & dough shaping',
        rewardNote: 'Award 1 Heart of Joy for creative baking!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Firefly Spark Rune',
        narration:
          'Carved into the flint spark-striker are four sound buttons: /s/ ... /p/ ... /ar/ ... /k/! The Dungeon Master places Card #42 on the table!',
        dmPrompt: 'Four sounds! /s/ ... /p/ ... /ar/ ... /k/! Blend into "spark"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ar/ blend in "spark"',
        cardToPlace: READING_CARDS[41],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Hearthstone Bun Count',
        narration:
          'The baker had 18 warm buns on the iron cooling rack. Hungry sky-scouts have just enjoyed 6 of them with cups of sweet mint tea. How many warm buns remain for the travelers?',
        dmPrompt: 'Help the child subtract 18 - 6.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 18 - 6 = 12',
        mathProblem: {
          spellName: 'Hearthstone Oven Tally',
          problem: '18 - 6',
          answer: 12,
          hint: '18 take away 6 leaves 12 warm buns!',
          options: [11, 12, 13],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Golden Cloudberry Feast',
        narration:
          'The remaining buns turn golden brown with a drizzle of honey glaze! Everyone gathers around the warm hearthstone, sharing stories and songs.',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to share the grand baker’s toast!',
        challengeType: 'dice',
        challengeSummary: 'Hearth toast roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 for the feast toast!',
          success: 'Everyone raises their cups of mint tea with a hearty cheer: "To the Scholar of Astraea!"',
          fumble: 'Pip gets a dab of purple berry jam on his puppy nose and licks it off happily!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Hearthstone Oven Tally',
      problem: '18 - 6',
      answer: 12,
      hint: '18 take away 6 leaves 12 warm buns!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 for the hearth feast toast!',
      success: 'Warmth and laughter fill the stone hearth kitchen!',
      fumble: 'You smile warmly as the aroma of cinnamon fills the air!',
    },
    reward: {
      sparks: 6,
      badge: 'Hearthstone Master Baker Ribbon',
      item: 'Warm Cloudberry Cinnamon Tart (In Satchel)',
    },
    bedtimeReflection:
      'Imagine the warm, comforting smell of cinnamon and sweet berries. Feel cozy and warm under your blankets as you drift off to sleep.',
    extendedLore:
      'Cloudberry Buns are the traditional travel rations of Astraean explorers. Packed with natural starlight vitamins and mountain honey, a single bun can keep a hero energized through an entire day of climbing.',
    creativeWritingPrompts: [
      'In the cozy mountain kitchen, the warm oven smelled like...',
      'Reading S-P-A-R-K made the hearthstones ignite with friendly...',
      'Solving 18 - 6 = 12 buns left plenty of warm treats for...',
      'Sitting by the warm campfire with Pip and my friends felt like...',
    ],
  },

  {
    dayNumber: 33,
    title: 'The Fluffy Cumulus Maze',
    subtitle: 'Navigating friendly fog with the /ou/ digraph in "cloud"',
    region: 'The Cumulus Labyrinth of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'To reach the Aurora Beacon, the path winds through the Cumulus Labyrinth. The walls are not made of stone or briars, but of thick, bouncy white clouds! Stepping into a wall just bounces you back like a trampoline. But finding the exit requires keen phonics and compass directions.',
    dmScript:
      'Parents & DMs: Hand the child Card #43. Read with bouncy fun: "The cloud walls are as tall as castle towers, but soft as pillows! To navigate through the maze without getting bounced into a giggle-spin, read Card #43!"',
    tableCardId: 'card_43_cloud',
    cardToPlace: READING_CARDS[42], // cloud
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Bouncing on Cloud Walls',
        narration:
          'Pip runs straight into a cloud wall and BOING! He bounces back onto his paws, wagging his tail with delight. You press your hand against the wall—it feels like warm, dense marshmallow fluff.',
        dmPrompt: 'Ask the child: "What funny sound does your hero make when bouncing against the fluffy cloud wall?"',
        challengeType: 'roleplay',
        challengeSummary: 'Playful cloud bouncing & maze fun',
        rewardNote: 'Award 1 Heart of Playfulness for joyful exploration!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Fluffy Cloud Rune',
        narration:
          'Carved into the signpost arch at the crossroads is the /ou/ vowel team: /c/ ... /l/ ... /ou/ ... /d/! Place Card #43 on the table!',
        dmPrompt: 'Remember: "ou" says /ow/ like in round! /c/ ... /l/ ... /ou/ ... /d/ = "cloud"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ou/ digraph in "cloud"',
        cardToPlace: READING_CARDS[42],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Crossroads Path Math',
        narration:
          'Your compass shows 12 cloud-stepping stones leading East and 7 leading North toward the Sunlit Arch. Cast your Path-Finder spell to tally all 19 stones!',
        dmPrompt: 'Help the child add 12 + 7 stones.',
        challengeType: 'math',
        challengeSummary: 'Addition: 12 + 7 = 19',
        mathProblem: {
          spellName: 'Cloud-Stone Path Alignment',
          problem: '12 + 7',
          answer: 19,
          hint: '12 plus 7 makes 19 stepping stones!',
          options: [18, 19, 20],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Sunlit Exit Arch',
        narration:
          'You take the final step and emerge from the white maze into brilliant, glorious sunshine! Ahead lies the High Azure Promenade, glistening like liquid sapphire.',
        dmPrompt: 'Roll D6 Speed check (DC 2+) to execute a celebratory leap out of the maze!',
        challengeType: 'dice',
        challengeSummary: 'Maze triumph leap roll',
        diceRoll: {
          skill: 'speed',
          dc: 2,
          prompt: 'Roll D6 for the triumphant leap!',
          success: 'You land cleanly on the sunlit marble terrace with arms held high in victory!',
          fumble: 'You do one final bouncy trampoline flip and land laughing on your feet!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Cloud-Stone Path Alignment',
      problem: '12 + 7',
      answer: 19,
      hint: '12 plus 7 makes 19 stepping stones!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 2,
      prompt: 'Roll D6 for the maze exit leap!',
      success: 'You emerge victorious from the cloud labyrinth!',
      fumble: 'You smile broadly as cloud mist tickles your nose!',
    },
    reward: {
      sparks: 6,
      badge: 'Labyrinth Navigator Compass Pin',
      item: 'Bouncy Cumulus Cloud Marble',
    },
    bedtimeReflection:
      'Whenever life feels confusing or misty like a maze, take one small, thoughtful step at a time. The sun always waits at the end of the path.',
    extendedLore:
      'The Cumulus Labyrinth shifts with the seasonal trade winds. It is used as an academy training ground for junior Wind-Riders to practice navigational math and spatial orientation.',
    creativeWritingPrompts: [
      'Bouncing against the giant fluffy cloud wall felt like...',
      'Reading C-L-O-U-D made the mist part to reveal...',
      'Solving 12 + 7 = 19 stepping stones guided my hero toward...',
      'Leaping out into the bright sunshine at the end of the maze, I saw...',
    ],
  },

  {
    dayNumber: 34,
    title: 'The Sky Robin Sanctuary',
    subtitle: 'Feeding turquoise songbirds with the /ir/ digraph in "bird"',
    region: 'The Singing Aviary of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'In a grove of flowering mountain cherries, hundreds of turquoise Sky Robins flutter between blossoms. Their feathers shimmer with iridescent cyan and gold. These friendly songbirds carry messages between the floating islands, but their feeding trays need sunflower seeds.',
    dmScript:
      'Parents & DMs: Hand the child Card #44. Read in a gentle, cheerful bird-chirping voice: "The little robins chirp: \'Chirp-chirp! Tweet!\' They land gently on your outstretched arms and shoulders. To fill their feeders, read Card #44!"',
    tableCardId: 'card_44_bird',
    cardToPlace: READING_CARDS[43], // bird
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Robins on Your Shoulders',
        narration:
          'Three tiny turquoise robins land right on your forearms. Their claws are light as matchsticks, and their round black eyes sparkle with curiosity.',
        dmPrompt: 'Ask the child: "Can your hero hold very still like a gentle tree branch so the birds feel safe?"',
        challengeType: 'roleplay',
        challengeSummary: 'Patience & stillness with nature',
        rewardNote: 'Award 1 Heart of Patience for gentle stillness!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Sky Robin Rune',
        narration:
          'Carved into the cedar birdfeeder is the /ir/ digraph: /b/ ... /ir/ ... /d/! The Dungeon Master places Card #44 in front of you!',
        dmPrompt: 'Listen for the "ir" sound: /b/ ... /ir/ ... /d/! Blend into "bird"!',
        challengeType: 'phonics',
        challengeSummary: 'Read the /ir/ digraph in "bird"',
        cardToPlace: READING_CARDS[43],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Sunflower Seed Subtraction',
        narration:
          'You poured 19 golden sunflower seeds into the round wooden tray. A flock of hungry robins happily ate 8 of the seeds. How many seeds remain for the evening flock?',
        dmPrompt: 'Help the child subtract 19 - 8.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 19 - 8 = 11',
        mathProblem: {
          spellName: 'Seed Feeder Conservation',
          problem: '19 - 8',
          answer: 11,
          hint: '19 take away 8 leaves 11 seeds!',
          options: [10, 11, 12],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Flute Song Chorus',
        narration:
          'Having enjoyed their meal, the entire flock takes flight together, circling the cherry trees while singing a three-part harmony of pure happiness.',
        dmPrompt: 'Roll D6 Sparkle check (DC 2+) to harmonize with the birds!',
        challengeType: 'dice',
        challengeSummary: 'Birdsong harmony roll',
        diceRoll: {
          skill: 'sparkle',
          dc: 2,
          prompt: 'Roll D6 to whistle with the robin flock!',
          success: 'The robins circle your head in a joyous halo of turquoise feathers!',
          fumble: 'A friendly robin drops a cherry blossom petal gently into your satchel!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Seed Feeder Conservation',
      problem: '19 - 8',
      answer: 11,
      hint: '19 take away 8 leaves 11 seeds!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 2,
      prompt: 'Roll D6 for the robin song harmony!',
      success: 'The birds fill the sanctuary with musical joy!',
      fumble: 'You smile happily as soft feathers brush against your cheek!',
    },
    reward: {
      sparks: 6,
      badge: 'Songbird Whisperer Feather Badge',
      item: 'Turquoise Sky-Robin Flight Down Feather',
    },
    bedtimeReflection:
      'Think of how gentle stillness invited the birds to trust you. Tonight, let your body become still, peaceful, and relaxed as you drift into dreamland.',
    extendedLore:
      'Sky Robins are the sacred messengers of the Cloud-Weaver Queens. Legend says they remember every kind word ever spoken in Astraea and repeat those words in their dawn songs.',
    creativeWritingPrompts: [
      'When the turquoise robin landed softly on my finger, I...',
      'Reading B-I-R-D made the cedar birdfeeder fill with glowing...',
      'Solving 19 - 8 = 11 seeds ensured that all the little robins had...',
      'The song the flock sang in the cherry trees sounded like...',
    ],
  },

  {
    dayNumber: 35,
    title: 'The Dragon Kite Festival',
    subtitle: 'Flying colored silks with the split digraph /i_e/ in "kite"',
    region: 'The Windy Meadows of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Every year, the children and dragon hatchlings of Zephyria gather for the Dragon Kite Festival! High on a windy plateau carpeted with purple clover, dozens of colorful kites shaped like dragons, butterflies, and stars dance in the sky. Master Dylan hands you a spool of golden string.',
    dmScript:
      'Parents & DMs: Hand the child Card #45. Read with outdoor enthusiasm: "The mountain wind is perfect today—steady, warm, and singing! To launch your magnificent scarlet dragon kite, read Card #45!"',
    tableCardId: 'card_45_kite',
    cardToPlace: READING_CARDS[44], // kite
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Assembling the Silk Kite',
        narration:
          'You snap the lightweight bamboo crossbars into place. Your kite is shaped like Solara the Sun Dragon, with trailing ribbon tails of orange, gold, and ruby red.',
        dmPrompt: 'Ask the child: "What special painted design or badge did your hero paint on the kite’s wings?"',
        challengeType: 'roleplay',
        challengeSummary: 'Kite decoration & creative design',
        rewardNote: 'Award 1 Heart of Creativity for designing a beautiful kite!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Dragon Kite Rune',
        narration:
          'Carved into the wooden spool handle is the split digraph magic "e": /k/ ... /i_e/ ... /t/! Place Card #45 on the table!',
        dmPrompt: 'Remember the magic "e"! It makes the /i/ say its own name! /k/ ... /igh/ ... /t/ = "kite"!',
        challengeType: 'phonics',
        challengeSummary: 'Read split digraph /i_e/ in "kite"',
        cardToPlace: READING_CARDS[44],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Tying the Ribbon Tails',
        narration:
          'To keep the kite stable in high thermals, you tie 14 red ribbon streamers and 5 golden tassels to the tail. Cast your Knot-Tying spell to fasten all 19 ribbons!',
        dmPrompt: 'Help the child add 14 + 5 ribbons.',
        challengeType: 'math',
        challengeSummary: 'Addition: 14 + 5 = 19',
        mathProblem: {
          spellName: 'Streamer Aerodynamic Knot',
          problem: '14 + 5',
          answer: 19,
          hint: '14 plus 5 makes 19 ribbon streamers!',
          options: [18, 19, 20],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: Launching into the Clouds',
        narration:
          'You sprint across the clover meadow, letting out the golden string. WHOOSH! The dragon kite catches the thermal and soars eighty feet high, dancing among the clouds!',
        dmPrompt: 'Roll D6 Speed check (DC 2+) to loop the kite through a fluffy cloud ring!',
        challengeType: 'dice',
        challengeSummary: 'Kite loop-de-loop roll',
        diceRoll: {
          skill: 'speed',
          dc: 2,
          prompt: 'Roll D6 to execute the cloud loop!',
          success: 'The kite loops smoothly through the cloud ring, drawing cheers from all the dragon hatchlings!',
          fumble: 'Pip chases the shadow of the kite across the clover meadow, barking happily!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Streamer Aerodynamic Knot',
      problem: '14 + 5',
      answer: 19,
      hint: '14 plus 5 makes 19 ribbons!',
    },
    diceCheck: {
      skill: 'speed',
      dc: 2,
      prompt: 'Roll D6 for the kite loop-de-loop!',
      success: 'Your dragon kite dances triumphantly high in the sky!',
      fumble: 'You smile broadly as the colorful ribbons flutter in the breeze!',
    },
    reward: {
      sparks: 6,
      badge: 'Master Kite-Flier Golden Ribbon',
      item: 'Miniature Silk Dragon Kite Charm',
    },
    bedtimeReflection:
      'Imagine holding the string of a soaring kite. Feel light, free, and peaceful as all worries drift away on the gentle wind.',
    extendedLore:
      'The Kite Festival of Zephyria celebrates the harmony between dragons and humans. Each kite flown carries a written message of gratitude, which dissolves into starlight as the kite touches the clouds.',
    creativeWritingPrompts: [
      'Running across the windy clover meadow with my dragon kite, I felt...',
      'Reading K-I-T-E made the golden string glow with...',
      'Solving 14 + 5 = 19 ribbons kept the kite balanced so that it could...',
      'Looking up at dozens of colorful dragon kites in the sky was like...',
    ],
  },

  // =========================================================================
  // WEEK 8: THE AURORA PINNACLE & THE GRAND BEACON (DAYS 36 - 40)
  // =========================================================================
  {
    dayNumber: 36,
    title: 'The High Azure Promenade',
    subtitle: 'Walking the transparent glass bridge with the sentence scroll',
    region: 'The Glass Bridge of High Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'You stand before the marvel of High Zephyria: the Azure Promenade! Stretched between two soaring cloud peaks is a bridge made of solid, transparent enchanted glass. Walking across it feels like walking on air, with the entire sunlit kingdom visible miles below your feet.',
    dmScript:
      'Parents & DMs: Hand the child Card #46. Read with noble grandeur: "The glass bridge sparkles under the midday sun. Below, rivers wind like silver threads. To step onto the transparent bridge with confidence, read Sentence Scroll #46!"',
    tableCardId: 'card_46_scroll_sky',
    cardToPlace: READING_CARDS[45], // sentence sky
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Stepping on Glass',
        narration:
          'You take your first step onto the transparent bridge. The glass is solid and warm under your boots, completely steady.',
        dmPrompt: 'Ask the child: "What does your hero see when looking down through the crystal bridge into the valley below?"',
        challengeType: 'roleplay',
        challengeSummary: 'Perspective, courage & valley observation',
        rewardNote: 'Award 1 Heart of Courage for stepping onto the bridge!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Sentence Scroll of the Sky',
        narration:
          'Inscribed in gold leaf along the handrail is Sentence Scroll #46: "The high sky is bright and blue." The Dungeon Master places Card #46 on the table!',
        dmPrompt: 'Track with your finger: "The ... high ... sky ... is ... bright ... and ... blue." Read each word clearly!',
        challengeType: 'phonics',
        challengeSummary: 'Read sentence scroll: "The high sky is bright and blue."',
        cardToPlace: READING_CARDS[45],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Crystal Balustrade Math',
        narration:
          'There are 15 azure crystal pillars on the left rail and 4 on the right. Cast your Starlight-Anchor spell to verify all 19 pillars!',
        dmPrompt: 'Help the child add 15 + 4.',
        challengeType: 'math',
        challengeSummary: 'Addition: 15 + 4 = 19',
        mathProblem: {
          spellName: 'Crystal Bridge Anchor',
          problem: '15 + 4',
          answer: 19,
          hint: '15 plus 4 makes 19 crystal pillars!',
          options: [18, 19, 20],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: Crossing into the High Spires',
        narration:
          'With steady, brave steps, you cross the crystal span! At the far end, two silver dragon statues bow their heads in salute.',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) to complete the crossing with regal poise!',
        challengeType: 'dice',
        challengeSummary: 'Bridge crossing majesty roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 to finish the promenade walk!',
          success: 'The crystal floor pulses with warm light under your boots!',
          fumble: 'Pip trots happily across the glass, totally unafraid and smiling!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Crystal Bridge Anchor',
      problem: '15 + 4',
      answer: 19,
      hint: '15 plus 4 makes 19 crystal pillars!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 for the bridge crossing!',
      success: 'You stride across the sky with royal majesty!',
      fumble: 'You smile proudly as the entire realm unfolds beneath you!',
    },
    reward: {
      sparks: 7,
      badge: 'Crystal Promenade Crosser Medal',
      item: 'Sliver of Transparent Azure Bridge Crystal',
    },
    bedtimeReflection:
      'Courage isn’t never feeling afraid; courage is taking one small, steady step forward even when something seems grand and new.',
    extendedLore:
      'The Azure Promenade was constructed during the reign of King Alden’s grandmother, Queen Maeve. Crafted from solidified stardust glass, it has never cracked or slipped in four hundred years.',
    creativeWritingPrompts: [
      'Stepping onto the transparent glass bridge, looking down at the world...',
      'Reading "The high sky is bright and blue" made the crystal railing...',
      'Solving 15 + 4 = 19 pillars anchored the bridge firmly so that...',
      'Reaching the far side of the sky bridge made me realize that I am...',
    ],
  },

  {
    dayNumber: 37,
    title: 'The Red Dragon Flight Trial',
    subtitle: 'Soaring with Zephyr using the sentence scroll "The red dragon can fly high."',
    region: 'The Thermal Canyons of High Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Zephyr the Cloud Wyrm lands upon the terrace. Today is the day of the Great Flight Trial! Zephyr kneels low and invites you to climb onto his silken back. To guide Zephyr through the thermal canyons, you must recite the ancient Dragon Flight decree.',
    dmScript:
      'Parents & DMs: Hand the child Card #47. Read with majestic energy: "Zephyr spreads his enormous feathered wings! His scales are like polished silver and crimson. Read Card #47 with pride to launch into the grand flight trial!"',
    tableCardId: 'card_47_scroll_dragon',
    cardToPlace: READING_CARDS[46], // sentence dragon fly
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Mounting the Great Dragon',
        narration:
          'You climb onto Zephyr’s broad back, holding onto the smooth leather reins. Pip sits securely in your satchel, his ears flapping in the updraft.',
        dmPrompt: 'Ask the child: "What signal does your hero give to tell Zephyr it is time to take flight?"',
        challengeType: 'roleplay',
        challengeSummary: 'Dragon communication & flight command',
        rewardNote: 'Award 1 Heart of Majesty for bonding with Zephyr!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Dragon Flight Scroll',
        narration:
          'Embroidered on the silk saddlecloth is Sentence Scroll #47: "The red dragon can fly high." The Dungeon Master places Card #47 on the table!',
        dmPrompt: 'Read smoothly with your finger: "The ... red ... dragon ... can ... fly ... high!"',
        challengeType: 'phonics',
        challengeSummary: 'Read sentence scroll: "The red dragon can fly high."',
        cardToPlace: READING_CARDS[46],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Cloud Ring Subtraction Math',
        narration:
          'There were 20 floating cloud rings set up in the sky canyon course. Zephyr has glided effortlessly through 5 of them already. How many cloud rings remain to complete the flight trial?',
        dmPrompt: 'Help the child subtract 20 - 5.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 20 - 5 = 15',
        mathProblem: {
          spellName: 'Thermal Altitude Glide',
          problem: '20 - 5',
          answer: 15,
          hint: '20 take away 5 leaves 15 cloud rings!',
          options: [14, 15, 16],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Cloud Canyon Dive',
        narration:
          'Zephyr dives smoothly through the remaining 15 rings, spreading his wings to glide into a warm updraft! The entire flight trial is a breathtaking success!',
        dmPrompt: 'Roll D6 Bravery check (DC 2+) for the grand landing touchdown!',
        challengeType: 'dice',
        challengeSummary: 'Dragon landing touchdown roll',
        diceRoll: {
          skill: 'bravery',
          dc: 2,
          prompt: 'Roll D6 for the triumphant landing!',
          success: 'Zephyr touches down on the marble terrace with gentle grace!',
          fumble: 'Zephyr gently nuzzles your chest, letting out a warm puff of cinnamon steam!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Thermal Altitude Glide',
      problem: '20 - 5',
      answer: 15,
      hint: '20 take away 5 leaves 15 rings!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 2,
      prompt: 'Roll D6 for the dragon touchdown!',
      success: 'You complete the flight trial as a master dragon rider!',
      fumble: 'You laugh with exhilarating joy after soaring through the clouds!',
    },
    reward: {
      sparks: 7,
      badge: 'Master Dragon-Rider Golden Wings',
      item: 'Silver Dragon-Scale Riding Pin',
    },
    bedtimeReflection:
      'Remember the thrill of soaring high above the clouds. Close your eyes and let your dreams carry you wherever your imagination wishes to go.',
    extendedLore:
      'The Red Dragon Flight Trial is a rite of passage for all protectors of Astraea. Dragons only allow scholars whose hearts are free of malice and full of kindness to ride upon their backs.',
    creativeWritingPrompts: [
      'When Zephyr spread his enormous wings and launched into the air...',
      'Reading "The red dragon can fly high" made the canyon thermals...',
      'Solving 20 - 5 = 15 rings guided us smoothly through the...',
      'Looking down from high above the clouds on the dragon’s back was...',
    ],
  },

  {
    dayNumber: 38,
    title: 'The Feathered Cloud Hammock',
    subtitle: 'Resting before the summit with the scroll "We sleep on a soft cloud bed."',
    region: 'The High Perch Nursery of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'The summit of the Aurora Spire is near. Before making the final ascent to light the Great Beacon, the rangers invite you to rest in the Feathered Cloud Hammocks. Suspended between starlight spires, these giant down-filled hammocks rock gently in the evening wind.',
    dmScript:
      'Parents & DMs: Hand the child Card #48. Read in a warm, relaxing, whisper-soft voice: "The sun has set, leaving deep indigo skies filled with twinkling stars. The giant hammock is waiting with soft wool blankets. Read Card #48 to settle in for rest!"',
    tableCardId: 'card_48_scroll_cloud_bed',
    cardToPlace: READING_CARDS[47], // sentence cloud bed
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: Sinking into the Down Hammock',
        narration:
          'You climb into the giant suspended hammock. The down filling cradles your body like a warm hug. Pip curls up right against your side.',
        dmPrompt: 'Ask the child: "What is your hero most proud of accomplishing across this sky adventure so far?"',
        challengeType: 'roleplay',
        challengeSummary: 'Reflection on personal growth & accomplishment',
        rewardNote: 'Award 1 Heart of Wisdom for proud self-reflection!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Sentence Scroll of Cloud Rest',
        narration:
          'Woven into the lavender blanket is Sentence Scroll #48: "We sleep on a soft cloud bed." The Dungeon Master sets Card #48 on the table!',
        dmPrompt: 'Read slowly and peacefully: "We ... sleep ... on ... a ... soft ... cloud ... bed."',
        challengeType: 'phonics',
        challengeSummary: 'Read sentence scroll: "We sleep on a soft cloud bed."',
        cardToPlace: READING_CARDS[47],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Counting Twilight Stars',
        narration:
          'Through the silk canopy, you spot 16 blue stars on the left and 3 golden stars on the right. Cast your Dream-Star tally spell to count all 19 stars!',
        dmPrompt: 'Help the child add 16 + 3.',
        challengeType: 'math',
        challengeSummary: 'Addition: 16 + 3 = 19',
        mathProblem: {
          spellName: 'Twilight Starlight Alignment',
          problem: '16 + 3',
          answer: 19,
          hint: '16 plus 3 makes 19 peaceful stars!',
          options: [18, 19, 20],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Gentle Rocking Rest',
        narration:
          'The hammock sways gently back and forth. A cool mountain breeze carries the scent of sweet lavender, and all your tired muscles completely relax.',
        dmPrompt: 'Roll D6 Smarts check (DC 2+) to welcome restorative dreams!',
        challengeType: 'dice',
        challengeSummary: 'Peaceful sleep roll',
        diceRoll: {
          skill: 'smarts',
          dc: 2,
          prompt: 'Roll D6 for deep, restorative rest!',
          success: 'You drift into the sweetest, most peaceful dream of flying with friendly dragons!',
          fumble: 'Pip snores softly like a tiny bumblebee in your arms!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Twilight Starlight Alignment',
      problem: '16 + 3',
      answer: 19,
      hint: '16 plus 3 makes 19 peaceful stars!',
    },
    diceCheck: {
      skill: 'smarts',
      dc: 2,
      prompt: 'Roll D6 for peaceful rest!',
      success: 'You rest deeply, recharging all your heroic energy!',
      fumble: 'You smile in peaceful comfort under the cozy blankets!',
    },
    reward: {
      sparks: 7,
      badge: 'Dream-Weaver Starlight Medal',
      item: 'Feathered Cloud-Hammock Sleep Ribbon',
    },
    bedtimeReflection:
      'You are safe, warm, and cozy in your bed. Close your eyes, let go of the day, and let yourself rest deeply.',
    extendedLore:
      'Cloud Hammocks are enchanted so that those who sleep within them wake up completely refreshed, with their minds sharpened and their hearts filled with optimism.',
    creativeWritingPrompts: [
      'Snuggling into the giant feathered cloud hammock, I felt...',
      'Reading "We sleep on a soft cloud bed" made the night sky turn...',
      'Solving 16 + 3 = 19 stars helped me count the constellations of...',
      'Tonight my hero dreams of the tomorrow’s grand finale because...',
    ],
  },

  {
    dayNumber: 39,
    title: 'The Constellation Chorus',
    subtitle: 'Harmonizing with stars using the scroll "All the sweet stars sing a song."',
    region: 'The Summit Observatory of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'Awakening completely refreshed, you make the final approach to the Aurora Spire. At the peak of the mountain, the night sky opens into a dome of brilliant constellations. The stars pulse with rhythmic light—they are waiting for a scholar to lead the Grand Constellation Chorus!',
    dmScript:
      'Parents & DMs: Hand the child Card #49. Read with cosmic wonder: "The northern lights ripple overhead like emerald and violet ribbons! The constellations of the Dragon, the Lion, and the Crown are shining. Read Card #49 to begin the cosmic song!"',
    tableCardId: 'card_49_scroll_starlight_song',
    cardToPlace: READING_CARDS[48], // sentence stars sing
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Starlight Dome',
        narration:
          'You stand beneath the open celestial sphere. Thousands of stars glitter so close it feels as though you could reach up and pick one like a shining apple.',
        dmPrompt: 'Ask the child: "If you could invent a brand new constellation in the sky, what shape would it be?"',
        challengeType: 'roleplay',
        challengeSummary: 'Constellation imagination & celestial wonder',
        rewardNote: 'Award 1 Heart of Cosmic Wonder for designing a new star shape!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: Sentence Scroll of the Star Song',
        narration:
          'Inscribed in silver starlight across the observatory balustrade is Sentence Scroll #49: "All the sweet stars sing a song." The Dungeon Master places Card #49 on the table!',
        dmPrompt: 'Read each word with clear, beautiful rhythm: "All ... the ... sweet ... stars ... sing ... a ... song!"',
        challengeType: 'phonics',
        challengeSummary: 'Read sentence scroll: "All the sweet stars sing a song."',
        cardToPlace: READING_CARDS[48],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: Constellation Star Subtraction',
        narration:
          'The Great Dragon constellation has 18 primary stars. 4 of the stars pulse in harmony with the harp. How many stars are left to synchronize with the flutes?',
        dmPrompt: 'Help the child subtract 18 - 4.',
        challengeType: 'math',
        challengeSummary: 'Subtraction: 18 - 4 = 14',
        mathProblem: {
          spellName: 'Constellation Harmonic Chord',
          problem: '18 - 4',
          answer: 14,
          hint: '18 take away 4 leaves 14 stars!',
          options: [13, 14, 15],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Aurora Borealis Chorus',
        narration:
          'All 18 stars sing in celestial harmony! The northern lights swirl across the sky in vibrant curtains of emerald, sapphire, and magenta.',
        dmPrompt: 'Roll D6 Sparkle check (DC 2+) to channel the aurora energy into the beacon crystal!',
        challengeType: 'dice',
        challengeSummary: 'Aurora channeling roll',
        diceRoll: {
          skill: 'sparkle',
          dc: 2,
          prompt: 'Roll D6 to ignite the beacon crystal!',
          success: 'The great beacon crystal absorbs the aurora light, glowing with brilliant white illumination!',
          fumble: 'A shower of harmless colorful starlight sparkles rains down like sweet confetti!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Constellation Harmonic Chord',
      problem: '18 - 4',
      answer: 14,
      hint: '18 take away 4 leaves 14 stars!',
    },
    diceCheck: {
      skill: 'sparkle',
      dc: 2,
      prompt: 'Roll D6 for the aurora chorus!',
      success: 'The sky bursts with glorious northern lights in celebration!',
      fumble: 'You smile with awe as stardust illuminates your hands!',
    },
    reward: {
      sparks: 8,
      badge: 'Constellation Choir Conductor Badge',
      item: 'Prismatic Aurora Quartz Crystal',
    },
    bedtimeReflection:
      'Look up at the night sky and remember that the same stardust that makes the northern lights dances inside your very own mind and heart.',
    extendedLore:
      'The Constellation Chorus occurs once every generation when the planets align with the Starlight Spire. It is said that anyone who sings with the stars on this night is granted clarity of mind and lasting courage.',
    creativeWritingPrompts: [
      'Standing under the dome of singing constellations, I heard...',
      'Reading "All the sweet stars sing a song" made the northern lights...',
      'Solving 18 - 4 = 14 stars synchronized the celestial choir so that...',
      'Watching the emerald and violet lights dance across the sky felt like...',
    ],
  },

  {
    dayNumber: 40,
    title: 'The Grand Aurora Beacon Lighting',
    subtitle: 'Crowning Book II with the scroll "You are a kind and brave friend."',
    region: 'The High Summit of Zephyria',
    durationMinutes: 20,
    subjectFocus: 'phonics',
    storyHook:
      'THE GRAND FINALE OF BOOK II! You stand at the pinnacle of the Aurora Spire beside King Alden, Solara, and Zephyr the Cloud Wyrm. Below you, the entire realm of Astraea is illuminated by the morning sun. The final task is to ignite the Great Beacon, establishing eternal friendship between the earth and the sky.',
    dmScript:
      'Parents & DMs: Hand the child Card #50! Stand tall and read with proud royal fanfare: "Trumpets sound across all twenty floating isles! King Alden and the dragons bow in deep respect to the young scholar. Read the ultimate graduation scroll of Book II!"',
    tableCardId: 'card_50_scroll_champion',
    cardToPlace: READING_CARDS[49], // sentence champion
    scenes: [
      {
        sceneNumber: 1,
        title: 'Scene 1: The Gathering of Realm Friends',
        narration:
          'Everyone you have helped across the 20 days of Book II is here: Aurelius the gryphon, Dryad Elora, the baby cloud dragons, Master Dylan, and Captain Astrid. They cheer and applaud as you step up to the beacon plinth.',
        dmPrompt: 'Ask the child: "What speech or thank-you words does your hero say to all the friends who helped you?"',
        challengeType: 'roleplay',
        challengeSummary: 'Gratitude & graduation speech',
        rewardNote: 'Award 5 Hearts of Gratitude for thanking your friends!',
      },
      {
        sceneNumber: 2,
        title: 'Scene 2: The Grand Graduation Scroll',
        narration:
          'Carved into the golden beacon pillar in radiant letters of light is Sentence Scroll #50: "You are a kind and brave friend." The Dungeon Master presents the final card!',
        dmPrompt: 'Read aloud with pride and dignity: "You ... are ... a ... kind ... and ... brave ... friend!"',
        challengeType: 'phonics',
        challengeSummary: 'Read the graduation scroll: "You are a kind and brave friend."',
        cardToPlace: READING_CARDS[49],
      },
      {
        sceneNumber: 3,
        title: 'Scene 3: The Beacon Ignition Math',
        narration:
          '10 beams of golden sunlight from the earth and 10 beams of starlight from the sky merge into the central lens. Cast your Beacon-Ignition spell!',
        dmPrompt: '10 plus 10! The grand mastery addition!',
        challengeType: 'math',
        challengeSummary: 'Addition: 10 + 10 = 20',
        mathProblem: {
          spellName: 'Aurora Beacon Mastery',
          problem: '10 + 10',
          answer: 20,
          hint: '10 plus 10 makes 20 radiant beams!',
          options: [19, 20, 21],
        },
      },
      {
        sceneNumber: 4,
        title: 'Scene 4: The Silver Starlight Wing-Cloak',
        narration:
          'THE BEACON IGNITES! A column of pure rainbow light arches across the heavens! King Alden and Zephyr fasten the Silver Starlight Wing-Cloak around your shoulders. You are officially proclaimed "Grand Scholar & Sovereign Protector of the Sky Isles!"',
        dmPrompt: 'Roll D6 Bravery check (DC 1+) for the ultimate coronation celebration fanfare!',
        challengeType: 'dice',
        challengeSummary: 'Final graduation roll',
        diceRoll: {
          skill: 'bravery',
          dc: 1,
          prompt: 'Roll D6 for the ultimate victory cheer across the sky isles!',
          success: 'Every bell in Zephyria chimes in joy, and dragons loop through the sky in a celebration of light!',
          fumble: 'You smile with immense pride as Zephyr and Pip nuzzle you with joyful love!',
        },
      },
    ],
    mathChallenge: {
      spellName: 'Aurora Beacon Mastery',
      problem: '10 + 10',
      answer: 20,
      hint: '10 plus 10 makes 20 radiant beams of light!',
    },
    diceCheck: {
      skill: 'bravery',
      dc: 1,
      prompt: 'Roll D6 for the ultimate graduation cheer!',
      success: 'The entire kingdom erupts in deafening celebration: "LONG LIVE THE SKY HERO!"',
      fumble: 'You smile with proud joy as golden confetti rains down across the peaks!',
    },
    reward: {
      sparks: 15,
      badge: 'Sovereign Protector of the Sky Isles Gold Medal',
      item: 'The Silver Starlight Wing-Cloak & Master Diploma',
    },
    bedtimeReflection:
      'Tonight you stand as a true champion. You have completed 40 glorious days of learning, reading, arithmetic, and kindness. Sleep with the deepest pride in your wonderful heart.',
    extendedLore:
      'The Lighting of the Aurora Beacon re-establishes the Great Harmonic Bridge between the Cloud Isles of Zephyria and the Central Valleys of Astraea. The hero who lights the beacon is remembered for all eternity in both the Earth Chronicles and the Sky Sagas.',
    creativeWritingPrompts: [
      'Standing at the pinnacle of the Aurora Spire with King Alden and Zephyr...',
      'Reading "You are a kind and brave friend" on the golden beacon made me feel...',
      'Solving 10 + 10 = 20 ignited the rainbow beam of light that...',
      'Receiving the Silver Starlight Wing-Cloak was the greatest moment because...',
      'Looking back on all 40 days of my adventure across Astraea, I have learned that...',
    ],
  },
];
