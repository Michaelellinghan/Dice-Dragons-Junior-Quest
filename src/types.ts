export type Subject = 'phonics' | 'maths' | 'history' | 'geography' | 'creativity';

export interface HeroStats {
  bravery: number; // For facing spooky sounds, standing tall
  smarts: number; // For remembering history, geography & math
  sparkle: number; // Magic power, creativity & joy
  speed: number; // Quick reflexes, phonics blending
}

export interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: 'weapon' | 'shield' | 'trinket' | 'potion' | 'relic' | 'tool';
}

export interface Hero {
  id: string;
  name: string;
  race?: string;
  classTitle?: string;
  classType?: string;
  level?: number;
  title: string;
  avatar: string;
  portraitUrl?: string;
  bio?: string;
  stats: HeroStats;
  currentHearts: number;
  maxHearts: number;
  starSparks: number; // Mana / Reward currency
  inventory: InventoryItem[];
  knownSpells?: string[];
}

export interface PhonicsChallenge {
  id: string;
  word: string;
  phonemes: string[]; // e.g. ['c', 'a', 't'] or ['sh', 'i', 'p']
  correctAnswer: string;
  options: string[];
  type: 'cvc' | 'digraph' | 'vowel-sound' | 'sentence-reading' | 'blend' | 'segment' | 'rhyme' | 'tricky-word';
  instruction: string;
  hint: string;
  audioPrompt?: string;
}

export interface MathChallenge {
  id: string;
  type: 'addition' | 'subtraction' | 'number-bond' | 'counting' | 'doubles';
  question: string;
  num1: number;
  num2: number;
  operator: '+' | '-';
  correctAnswer: number;
  options: number[];
  maxCountVisual: number;
  flavorSpell: string;
}

export interface GeoHistoryChallenge {
  id: string;
  category?: 'geography' | 'history' | string;
  type?: string;
  title?: string;
  question: string;
  context: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  imageIcon?: string;
}

export interface ReadingCard {
  id: string;
  cardNumber: string; // e.g. "CARD #01"
  title: string;
  type: 'cvc-blend' | 'digraph' | 'tricky-word' | 'sentence' | 'riddle';
  word: string;
  phonemes?: string[];
  soundButtons?: ('dot' | 'dash')[];
  sentence?: string;
  flavor: string;
  glyph: string;
  hint: string;
}

export type MathDifficultyRange = '1-5' | '1-10' | '1-20';
export type MathOperatorMode = 'mixed' | 'addition' | 'subtraction';

export interface MathSettings {
  difficultyRange: MathDifficultyRange;
  operatorMode: MathOperatorMode;
  showVisualCounters: boolean;
}

export interface ScavengerSecret {
  id: string;
  name: string;
  icon: string;
  locationLabel: string;
  hint: string;
  foundDescription: string;
  itemReward?: InventoryItem;
  sparksReward?: number;
}

export interface WildMagicSurge {
  id: string;
  title: string;
  icon: string;
  description: string;
  consequence: string;
  sparkleBonus?: number;
}

export interface DailyCampaignScene {
  sceneNumber: number;
  title: string;
  narration: string;
  dmPrompt: string;
  challengeType: 'phonics' | 'math' | 'geography' | 'history' | 'dice' | 'roleplay';
  challengeSummary: string;
  cardToPlace?: ReadingCard;
  mathProblem?: {
    spellName: string;
    problem: string;
    answer: number;
    hint: string;
    options: number[];
  };
  geoHistoryPrompt?: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  };
  diceRoll?: {
    skill: 'bravery' | 'smarts' | 'sparkle' | 'speed';
    dc: number;
    prompt: string;
    success: string;
    fumble: string;
  };
  rewardNote?: string;
  scavengerHunt?: {
    roomPrompt: string;
    secrets: ScavengerSecret[];
  };
}

export interface DailyCampaign {
  dayNumber: number;
  title: string;
  subtitle: string;
  region: string;
  durationMinutes: number;
  subjectFocus: Subject;
  storyHook: string;
  dmScript: string;
  scenes: DailyCampaignScene[];
  tableCardId: string;
  cardToPlace: ReadingCard;
  mathChallenge: {
    spellName: string;
    problem: string;
    answer: number;
    hint: string;
  };
  diceCheck: {
    skill: 'bravery' | 'smarts' | 'sparkle' | 'speed';
    dc: number;
    prompt: string;
    success: string;
    fumble: string;
  };
  reward: {
    sparks: number;
    badge: string;
    item?: string;
  };
  bedtimeReflection: string;
  extendedLore?: string;
  creativeWritingPrompts?: string[];
}

export interface DailyJournalEntry {
  dayNumber: number;
  entryDate: string;
  summaryText: string;
  heroMood: 'brave' | 'curious' | 'joyful' | 'clever' | 'calm' | 'proud';
  favoritePart: string;
  stickers: string[];
  drawingDataUrl?: string;
  wordsCount: number;
  audioNoteDuration?: number;
}

export interface StoryNode {
  id: string;
  act: number;
  actTitle: string;
  title: string;
  narration: string;
  dmNotes: string;
  backgroundTheme: 'forest' | 'castle' | 'cavern' | 'mountain' | 'starlight' | 'tavern';
  subjectFocus?: Subject;
  imageUrl?: string;
  imageCaption?: string;
  cardPrompt?: ReadingCard;
  challenge?: {
    type: 'phonics' | 'maths' | 'geo-history' | 'dice-check';
    phonicsData?: PhonicsChallenge;
    mathData?: MathChallenge;
    geoData?: GeoHistoryChallenge;
    dcTarget?: number;
    statUsed?: 'bravery' | 'smarts' | 'sparkle' | 'speed';
  };
  choices: StoryChoice[];
  dragonBattleId?: string;
  isWanderLocation?: boolean;
  returnToNodeId?: string;
  locationName?: string;
}

export interface StoryChoice {
  text: string;
  targetNodeId: string;
  requiredStat?: 'bravery' | 'smarts' | 'sparkle' | 'speed';
  dc?: number;
  successText?: string;
  failText?: string;
  gainItem?: InventoryItem;
  badge?: string;
  category?: 'wander' | 'quest' | 'phonics' | 'maths' | 'roleplay' | 'rest';
  icon?: string;
}

export interface DragonOpponent {
  id: string;
  name: string;
  title: string;
  element: 'fire' | 'ice' | 'nature' | 'starlight' | 'frost';
  avatar: string;
  maxEnergy: number;
  currentEnergy: number;
  calmEnergyGoal?: number; // The target value player needs to bring dragon to
  description: string;
  preferredMathSpell?: string;
  dialogueIntro?: string;
  dialogueCalmed?: string;
  catchphrase?: string;
  weaknessHint?: string;
}

export type DragonEnemy = DragonOpponent;

export interface SpellAction {
  id: string;
  name: string;
  description: string;
  cost: number; // starSparks cost
  icon: string;
  mathType: 'addition' | 'subtraction' | 'utility' | 'doubles' | 'number-bond';
  effectValue?: number;
  spellCategory?: 'attack' | 'shield' | 'utility' | string;
  school?: string;
  formulaExample?: string;
  visualAid?: string;
}
