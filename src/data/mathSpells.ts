import { DragonEnemy, MathChallenge, SpellAction } from '../types';

export const SPELL_ACTIONS: SpellAction[] = [
  {
    id: 'spark_blast',
    name: 'Sparkbolt',
    spellCategory: 'attack',
    school: 'spark',
    cost: 1,
    mathType: 'addition',
    description: 'Minor Attack: Combine two sets of glowing sparks to launch a gentle beam that calms the dragon!',
    formulaExample: '3 sparks + 2 sparks = 5 magic power!',
    visualAid: 'Count the yellow and red star sparks together on your fingers or counters.',
    icon: '⚡',
  },
  {
    id: 'frost_shield',
    name: 'Pebble & Frost Shield',
    spellCategory: 'shield',
    school: 'frost',
    cost: 1,
    mathType: 'subtraction',
    description: 'Shield Spell: Subtract fiery dragon embers using cool river stones to guard your party!',
    formulaExample: '6 hot embers - 2 cooled by shield = 4 embers left!',
    visualAid: 'Start with river stones, then take away the cooled embers to see what remains.',
    icon: '🛡️',
  },
  {
    id: 'vine_sprout',
    name: 'Sprout Vine Bridge',
    spellCategory: 'utility',
    school: 'nature',
    cost: 1,
    mathType: 'addition',
    description: 'Utility Spell: Grow magic vines across chasm gaps and lift friends up castle walls!',
    formulaExample: '4 green vines + 3 flower ropes = 7 vine steps!',
    visualAid: 'Count each vine leaf to build the safe walking bridge.',
    icon: '🌱',
  },
  {
    id: 'twin_stars',
    name: 'Twin Star Beam',
    spellCategory: 'attack',
    school: 'sun',
    cost: 2,
    mathType: 'doubles',
    description: 'Advanced Soothing Attack: Double your magical energy for an iridescent rainbow swirl!',
    formulaExample: 'Double 3 = 3 + 3 = 6 starlight bursts!',
    visualAid: 'Two equal groups side-by-side: 3 on left and 3 on right.',
    icon: '✨',
  },
  {
    id: 'crystal_bond',
    name: 'Crystal Harmony Rune',
    spellCategory: 'utility',
    school: 'nature',
    cost: 1,
    mathType: 'number-bond',
    description: 'Utility Spell: Balance ancient stone locks by finding the missing number that makes 10!',
    formulaExample: '7 crystal slots filled + 3 missing gems = 10 to unlock!',
    visualAid: 'Fill a ten-frame: count the empty boxes to reach ten.',
    icon: '💎',
  },
];

export const DRAGONS: DragonEnemy[] = [
  {
    id: 'sparky',
    name: 'Sparky',
    title: 'The Playful Ember-Drake',
    element: 'fire',
    avatar: '🐲🔥',
    maxEnergy: 10,
    currentEnergy: 10,
    description: 'A cheerful baby dragon who hiccups glowing sparks and loves warm cookies!',
    catchphrase: 'Rawr-poot! Let\'s play a numbers game, adventurer!',
    weaknessHint: 'Sparky loves cooling subtraction spells to calm his fiery hiccups!',
  },
  {
    id: 'glacia',
    name: 'Glacia',
    title: 'The Crystal Frost-Wyrm',
    element: 'frost',
    avatar: '🐉❄️',
    maxEnergy: 12,
    currentEnergy: 12,
    description: 'A shimmering ice dragon whose wings are trapped in winter frost.',
    catchphrase: 'Brrr! Bring warm addition math to melt the winter ice!',
    weaknessHint: 'Warm addition sparks melt her icy frost feathers!',
  },
  {
    id: 'bramble',
    name: 'Bramble',
    title: 'The Mossy Earth-Drake',
    element: 'nature',
    avatar: '🐲🌿',
    maxEnergy: 14,
    currentEnergy: 14,
    description: 'An ancient guardian sleeping under giant ferns. Needs number bonds to awaken bloom petals!',
    catchphrase: 'Yawn... Can you balance 10 flower petals for me?',
    weaknessHint: 'Bramble responds best to Number Bonds of 10!',
  },
  {
    id: 'solara',
    name: 'Solara',
    title: 'The Starlight Sun-Dragon',
    element: 'starlight',
    avatar: '✨🐉🌟',
    maxEnergy: 16,
    currentEnergy: 16,
    description: 'The majestic sovereign of Mount Pyra, guardian of the Golden Crown of Wisdom.',
    catchphrase: 'Young heroes! Show me your courage, phonics, and mental math!',
    weaknessHint: 'Solara tests all young heroes with quick arithmetic and hero dice rolls!',
  },
];

// Helper to dynamically generate math questions for 5-year-olds (Reception / Year 1)
export function generateMathChallenge(
  type: 'addition' | 'subtraction' | 'doubles' | 'number-bond' | 'utility',
  difficulty: 'easy' | 'normal' | 'advanced' = 'easy'
): MathChallenge {
  if (type === 'utility') {
    return generateMathChallenge('number-bond', difficulty);
  }
  if (type === 'addition') {
    // Within 10 for easy, within 20 for normal/advanced
    const max = difficulty === 'easy' ? 6 : 10;
    const num1 = Math.floor(Math.random() * max) + 1;
    const num2 = Math.floor(Math.random() * (difficulty === 'easy' ? 4 : 8)) + 1;
    const ans = num1 + num2;

    const wrong1 = Math.max(1, ans + (Math.random() > 0.5 ? 1 : -1));
    const wrong2 = Math.max(1, ans + (Math.random() > 0.5 ? 2 : -2));
    const options = Array.from(new Set([ans, wrong1, wrong2])).sort((a, b) => a - b);
    while (options.length < 3) {
      options.push(ans + options.length);
    }

    return {
      id: `add_${Date.now()}`,
      type: 'addition',
      question: `What is ${num1} + ${num2}?`,
      num1,
      num2,
      operator: '+',
      correctAnswer: ans,
      options: options.slice(0, 3).sort((a, b) => a - b),
      maxCountVisual: ans,
      flavorSpell: 'Channel glowing star sparks!',
    };
  }

  if (type === 'subtraction') {
    const num1 = Math.floor(Math.random() * (difficulty === 'easy' ? 6 : 9)) + 4; // 4 to 10+
    const num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 1 to num1-1
    const ans = num1 - num2;

    const wrong1 = Math.max(0, ans + (Math.random() > 0.5 ? 1 : -1));
    const wrong2 = Math.max(0, ans + (Math.random() > 0.5 ? 2 : -2));
    const options = Array.from(new Set([ans, wrong1, wrong2])).sort((a, b) => a - b);
    while (options.length < 3) {
      options.push(ans + options.length);
    }

    return {
      id: `sub_${Date.now()}`,
      type: 'subtraction',
      question: `What is ${num1} - ${num2}?`,
      num1,
      num2,
      operator: '-',
      correctAnswer: ans,
      options: options.slice(0, 3).sort((a, b) => a - b),
      maxCountVisual: num1,
      flavorSpell: 'Quench the blazing embers!',
    };
  }

  if (type === 'doubles') {
    // Year 1 doubles: 1+1, 2+2, 3+3, 4+4, 5+5
    const base = Math.floor(Math.random() * 5) + 1;
    const ans = base * 2;
    const wrong1 = Math.max(2, ans - 2);
    const wrong2 = ans + 2;
    const options = Array.from(new Set([ans, wrong1, wrong2])).sort((a, b) => a - b);

    return {
      id: `double_${Date.now()}`,
      type: 'doubles',
      question: `What is double ${base}? (${base} + ${base})`,
      num1: base,
      num2: base,
      operator: '+',
      correctAnswer: ans,
      options,
      maxCountVisual: ans,
      flavorSpell: 'Twinned dragon resonance!',
    };
  }

  // Number bond to 10
  const num1 = Math.floor(Math.random() * 8) + 1; // 1 to 8
  const ans = 10 - num1;
  const wrong1 = Math.max(1, ans + 1);
  const wrong2 = Math.max(1, ans - 1);
  const options = Array.from(new Set([ans, wrong1, wrong2])).sort((a, b) => a - b);

  return {
    id: `bond_${Date.now()}`,
    type: 'number-bond',
    question: `We have ${num1} gems. How many more to make 10? (${num1} + ? = 10)`,
    num1,
    num2: ans,
    operator: '+',
    correctAnswer: ans,
    options,
    maxCountVisual: 10,
    flavorSpell: 'Complete the Ten-Gem Harmony Rune!',
  };
}
