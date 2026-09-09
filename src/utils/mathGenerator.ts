import { MathDifficultyRange, MathOperatorMode, WildMagicSurge } from '../types';

export interface GeneratedMathSpell {
  spellName: string;
  problem: string;
  num1: number;
  num2: number;
  operator: '+' | '-';
  answer: number;
  hint: string;
  options: number[];
  visualCounters: { count1: number; count2: number; op: '+' | '-' };
}

const SPELL_FLAVORS: { name: string; icon: string }[] = [
  { name: 'Starlight Shimmer Bolt', icon: '✨' },
  { name: 'Ember Spark Bloom', icon: '🔥' },
  { name: 'Dragon River Wave', icon: '🌊' },
  { name: 'Moonbeam Ward', icon: '🌙' },
  { name: 'Crystal Levitate Chime', icon: '💎' },
  { name: 'Whispering Vine Grow', icon: '🌿' },
  { name: 'Sunfire Shield', icon: '☀️' },
  { name: 'Zephyr Breeze Sprint', icon: '💨' },
];

export function generateMathProblem(
  range: MathDifficultyRange,
  mode: MathOperatorMode,
  seedTitle?: string
): GeneratedMathSpell {
  // Determine operator
  let op: '+' | '-';
  if (mode === 'addition') {
    op = '+';
  } else if (mode === 'subtraction') {
    op = '-';
  } else {
    op = Math.random() > 0.5 ? '+' : '-';
  }

  let num1 = 2;
  let num2 = 1;
  let answer = 3;

  if (range === '1-5') {
    if (op === '+') {
      num1 = Math.floor(Math.random() * 3) + 1; // 1 to 3
      num2 = Math.floor(Math.random() * (5 - num1)) + 1; // 1 to (5 - num1)
      answer = num1 + num2;
    } else {
      num1 = Math.floor(Math.random() * 3) + 3; // 3 to 5
      num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 1 to (num1 - 1)
      answer = num1 - num2;
    }
  } else if (range === '1-10') {
    if (op === '+') {
      num1 = Math.floor(Math.random() * 6) + 2; // 2 to 7
      num2 = Math.floor(Math.random() * (10 - num1)) + 1; // 1 to (10 - num1)
      answer = num1 + num2;
    } else {
      num1 = Math.floor(Math.random() * 6) + 5; // 5 to 10
      num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
      answer = num1 - num2;
    }
  } else {
    // 1-20
    if (op === '+') {
      num1 = Math.floor(Math.random() * 11) + 4; // 4 to 14
      num2 = Math.floor(Math.random() * (20 - num1)) + 1;
      answer = num1 + num2;
    } else {
      num1 = Math.floor(Math.random() * 10) + 11; // 11 to 20
      num2 = Math.floor(Math.random() * 9) + 1; // 1 to 9
      answer = num1 - num2;
    }
  }

  // Create options
  const set = new Set<number>();
  set.add(answer);
  // Add distractors close to answer
  const deltas = [-2, -1, 1, 2, 3, -3];
  for (const delta of deltas.sort(() => Math.random() - 0.5)) {
    const candidate = answer + delta;
    if (candidate >= 0 && candidate !== answer) {
      set.add(candidate);
    }
    if (set.size >= 3) break;
  }
  // If still not 3, add fallback
  while (set.size < 3) {
    const r = Math.max(0, answer + Math.floor(Math.random() * 5) - 2);
    set.add(r);
  }

  const options = Array.from(set).sort((a, b) => a - b);

  // Pick spell name
  const randomSpell = SPELL_FLAVORS[Math.floor(Math.random() * SPELL_FLAVORS.length)];
  const spellName = seedTitle || `${randomSpell.icon} ${randomSpell.name}`;

  // Hint
  let hint = '';
  if (op === '+') {
    hint =
      range === '1-5'
        ? `Hold up ${num1} fingers, then put up ${num2} more!`
        : `Start on ${Math.max(num1, num2)} and count up ${Math.min(num1, num2)} more!`;
  } else {
    hint =
      range === '1-5'
        ? `Show ${num1} fingers, then fold down ${num2} of them!`
        : `Start at ${num1} and count backwards ${num2} steps!`;
  }

  return {
    spellName,
    problem: `${num1} ${op} ${num2}`,
    num1,
    num2,
    operator: op,
    answer,
    hint,
    options,
    visualCounters: {
      count1: num1,
      count2: num2,
      op,
    },
  };
}

export const WILD_MAGIC_SURGES: WildMagicSurge[] = [
  {
    id: 'surge_glitter_sneeze',
    title: 'Baby Sparky Glitter Sneeze',
    icon: '✨',
    description: 'Baby dragon Sparky sneezes a warm cloud of violet glitter over everyone!',
    consequence: 'Everyone giggles and gains a temporary golden starlight aura!',
    sparkleBonus: 1,
  },
  {
    id: 'surge_soap_bubbles',
    title: 'Strawberry Bubble Fountain',
    icon: '🫧',
    description: 'Your wand spouts dozens of giant strawberry-scented soap bubbles that float up!',
    consequence: 'Pip the puppy squire joyfully jumps to pop three bubbles!',
  },
  {
    id: 'surge_singing_toads',
    title: 'Choir of Moss Toads',
    icon: '🐸',
    description: 'Three polite river toads with top hats hop out of the ferns and sing a jaunty chorus!',
    consequence: 'Their delightful singing grants everyone +1 Bravery on the next turn!',
  },
  {
    id: 'surge_pink_plume',
    title: 'Feather Color Swap',
    icon: '🪶',
    description: 'Sir Barnaby’s knightly helmet feather flashes bright neon raspberry pink!',
    consequence: 'Sir Barnaby chuckles proudly: "A most stylish battle modification!"',
  },
  {
    id: 'surge_apple_tumble',
    title: 'The Honey Apple Bounce',
    icon: '🍎',
    description: 'Pip accidentally knocks over a wicker basket, sending three sweet honey apples rolling!',
    consequence: 'Everyone snacks on fresh orchard apples, restoring cheerful energy!',
  },
  {
    id: 'surge_flower_crown',
    title: 'Instant Daisy Garland',
    icon: '🌼',
    description: 'A ring of cheerful yellow buttercups and wild daisies weaves itself into your hair!',
    consequence: 'The friendly woodland creatures bow respectfully to the newly crowned hero!',
  },
  {
    id: 'surge_butterfly_swarm',
    title: 'Starlight Moth Escort',
    icon: '🦋',
    description: 'A fluttering swirl of sky-blue butterflies lands gently on your adventure backpack.',
    consequence: 'Their glowing wing-dust lights up dark corners of the trail!',
  },
];

export function getRandomSurge(): WildMagicSurge {
  return WILD_MAGIC_SURGES[Math.floor(Math.random() * WILD_MAGIC_SURGES.length)];
}
