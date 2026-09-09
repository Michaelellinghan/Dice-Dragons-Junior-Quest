import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DragonEnemy, Hero, MathChallenge, SpellAction } from '../types';
import { DRAGONS, SPELL_ACTIONS, generateMathChallenge } from '../data/mathSpells';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { ArtStudioModal } from './ArtStudioModal';
import {
  Sparkles,
  Dices,
  Heart,
  Volume2,
  ShieldCheck,
  Zap,
  ArrowLeft,
  RefreshCw,
  Palette,
} from 'lucide-react';

interface DragonDuelArenaProps {
  hero: Hero;
  initialDragonId?: string;
  onExit: () => void;
  onVictory?: (dragon: DragonEnemy) => void;
  onHeroUpdate?: (updatedHero: Hero) => void;
}

export const DragonDuelArena: React.FC<DragonDuelArenaProps> = ({
  hero,
  initialDragonId = 'sparky',
  onExit,
  onVictory,
  onHeroUpdate,
}) => {
  const [selectedDragon, setSelectedDragon] = useState<DragonEnemy>(() => {
    return DRAGONS.find((d) => d.id === initialDragonId) || DRAGONS[0];
  });

  const [dragonEnergy, setDragonEnergy] = useState<number>(selectedDragon.maxEnergy);
  const [activeSpell, setActiveSpell] = useState<SpellAction | null>(null);
  const [mathChallenge, setMathChallenge] = useState<MathChallenge | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const [duelLog, setDuelLog] = useState<string>(
    `${selectedDragon.name} enters the arena! ${selectedDragon.catchphrase}`
  );

  const [isRollingDice, setIsRollingDice] = useState<boolean>(false);
  const [diceRollValue, setDiceRollValue] = useState<number | null>(null);
  const [isWon, setIsWon] = useState<boolean>(false);

  // Difficulty switch: 'easy' (numbers to 10) vs 'normal' (numbers to 20)
  const [difficulty, setDifficulty] = useState<'easy' | 'normal'>('easy');

  // Interactive manipulative counter state (tapping gems to count)
  const [tappedGems, setTappedGems] = useState<number>(0);

  // AI Art Studio State
  const [isArtStudioOpen, setIsArtStudioOpen] = useState(false);
  const [artStudioPrompt, setArtStudioPrompt] = useState('');
  const [artStudioInitialImage, setArtStudioInitialImage] = useState<string | undefined>(undefined);
  const [customDragonArt, setCustomDragonArt] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_custom_dragon_art');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const handleSaveCustomDragonArt = (imgUrl: string) => {
    const updated = { ...customDragonArt, [selectedDragon.id]: imgUrl };
    setCustomDragonArt(updated);
    try {
      localStorage.setItem('dice_dragons_custom_dragon_art', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSelectSpell = (spell: SpellAction) => {
    soundManager.playClick();
    setActiveSpell(spell);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setDiceRollValue(null);
    setTappedGems(0);

    const challenge = generateMathChallenge(spell.mathType, difficulty);
    setMathChallenge(challenge);
    soundManager.speak(`${spell.name}! ${challenge.question}`);
  };

  const handleAnswerClick = (ans: number) => {
    if (!mathChallenge || isAnswerCorrect !== null) return;

    setSelectedAnswer(ans);
    if (ans === mathChallenge.correctAnswer) {
      setIsAnswerCorrect(true);
      soundManager.playSparkle();

      // Trigger dice roll automatically with high excitement!
      triggerDiceRoll();
    } else {
      setIsAnswerCorrect(false);
      soundManager.playGentleBoop();
      setDuelLog('Gentle miss! Count the magic gems and try once more!');
    }
  };

  const triggerDiceRoll = () => {
    setIsRollingDice(true);
    soundManager.playDiceRoll();

    let count = 0;
    const interval = setInterval(() => {
      setDiceRollValue(Math.floor(Math.random() * 20) + 1);
      count++;
      if (count > 10) {
        clearInterval(interval);
        const finalRoll = Math.floor(Math.random() * 20) + 1;
        setDiceRollValue(finalRoll);
        setIsRollingDice(false);
        resolveSpellImpact(finalRoll);
      }
    }, 60);
  };

  const resolveSpellImpact = (roll: number) => {
    soundManager.playSpellCast();

    // Calculate effect based on roll & hero sparkle stat
    let power = 2;
    let logMsg = '';

    if (roll === 20) {
      power = 4;
      logMsg = `🌟 CRITICAL 20! A colossal blast of rainbow sparkles soothes ${selectedDragon.name}! (-4 Energy)`;
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    } else if (roll >= 10) {
      power = 3;
      logMsg = `✨ Great roll of ${roll}! Super spell power calms the dragon! (-3 Energy)`;
    } else {
      power = 2;
      logMsg = `🎯 Solid roll of ${roll}! Spell lands gently! (-2 Energy)`;
    }

    const newEnergy = Math.max(0, dragonEnergy - power);
    setDragonEnergy(newEnergy);
    setDuelLog(logMsg);

    // Update hero rewards
    if (onHeroUpdate) {
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + 1,
      });
    }

    if (newEnergy === 0) {
      // VICTORY! Dragon soothed!
      setIsWon(true);
      soundManager.playVictoryFanfare();
      soundManager.playDragonRumble();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
      });
      if (onVictory) {
        onVictory(selectedDragon);
      }
    } else {
      setTimeout(() => {
        // Reset spell selection for next turn
        setActiveSpell(null);
        setMathChallenge(null);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      }, 2000);
    }
  };

  const handleResetDragon = (dragon: DragonEnemy) => {
    setSelectedDragon(dragon);
    setDragonEnergy(dragon.maxEnergy);
    setActiveSpell(null);
    setMathChallenge(null);
    setIsWon(false);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setDiceRollValue(null);
    setDuelLog(`${dragon.name} awaits! ${dragon.catchphrase}`);
    soundManager.speak(`Behold, ${dragon.name}, ${dragon.title}!`);
  };

  return (
    <div id="dragon-duel-arena" className="w-full max-w-4xl mx-auto p-3 sm:p-6">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-3 shadow-sm">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-200 text-amber-950 font-bold text-sm shadow-sm transition-colors cursor-pointer border border-amber-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Quest
        </button>

        {/* Dragon Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {DRAGONS.map((d) => (
            <button
              key={d.id}
              onClick={() => handleResetDragon(d)}
              className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                selectedDragon.id === d.id
                  ? 'bg-amber-600 text-white shadow-md scale-105'
                  : 'bg-white hover:bg-amber-200 text-amber-900 border border-amber-200'
              }`}
            >
              <span>{d.avatar.slice(0, 2)}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        {/* Difficulty Pill */}
        <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-amber-300">
          <span className="text-xs font-bold text-stone-500">Grade:</span>
          <button
            onClick={() => setDifficulty(difficulty === 'easy' ? 'normal' : 'easy')}
            className="text-xs font-black text-amber-900 hover:text-amber-700 underline cursor-pointer"
          >
            {difficulty === 'easy' ? 'KS1 (Up to 10)' : 'Year 1+ (Up to 20)'}
          </button>
        </div>
      </div>

      {/* Grand Arena Atmospheric Banner */}
      <div className="relative h-28 sm:h-36 rounded-3xl overflow-hidden border-4 border-amber-400 mb-4 shadow-xl group">
        <img
          src={ADVENTURE_ASSETS.pages.dragonArena.bannerUrl}
          alt="Dragon Duel Arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent flex items-end p-4 sm:p-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-400/40">
              The Grand Astraean Colosseum
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-fantasy text-white drop-shadow-md">
              Math Magic &amp; Elemental Resonance
            </h2>
          </div>
        </div>
      </div>

      {/* Main Duel Stage Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* DRAGON CARD */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-100/80 border-4 border-amber-300 rounded-3xl p-5 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
          {/* Element Tag */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/90 text-amber-900 border border-amber-300 shadow-sm z-10">
            {selectedDragon.element} Dragon
          </span>

          <button
            onClick={() => soundManager.speak(selectedDragon.catchphrase)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors cursor-pointer z-10"
            title="Listen to dragon"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Dragon Illustrated Portrait & AI Art Button */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-400 my-2 shadow-md group">
            <img
              src={
                customDragonArt[selectedDragon.id] ||
                ADVENTURE_ASSETS.dragons[selectedDragon.id]?.portraitUrl ||
                ADVENTURE_ASSETS.dragons.solara.portraitUrl
              }
              alt={selectedDragon.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <button
              onClick={() => {
                soundManager.playSparkle();
                setArtStudioPrompt(
                  `A friendly, majestic fantasy dragon named ${selectedDragon.name}, the ${selectedDragon.title}. Element of ${selectedDragon.element}, whimsical storybook watercolor illustration, glowing magical eyes, warm expression.`
                );
                setArtStudioInitialImage(
                  customDragonArt[selectedDragon.id] ||
                  ADVENTURE_ASSETS.dragons[selectedDragon.id]?.portraitUrl
                );
                setIsArtStudioOpen(true);
              }}
              className="absolute bottom-1.5 right-1.5 px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-[10px] flex items-center gap-1 shadow-md border border-amber-300 cursor-pointer transition-transform hover:scale-105"
              title="Paint or edit this dragon with AI"
            >
              <Palette className="w-3 h-3" />
              <span>{customDragonArt[selectedDragon.id] ? '✨ Edit' : '🎨 Paint'}</span>
            </button>
          </div>

          <h3 className="text-2xl font-black font-fantasy text-amber-950">
            {selectedDragon.name}
          </h3>
          <p className="text-xs font-bold text-amber-800 mb-3">
            {selectedDragon.title}
          </p>

          {/* Speech Bubble */}
          <div className="bg-white/95 border-2 border-amber-300 rounded-2xl p-3 text-xs sm:text-sm font-medium text-amber-900 shadow-sm mb-4 relative max-w-xs">
            <span className="font-bold">Dragon says: </span>
            &ldquo;{selectedDragon.catchphrase}&rdquo;
          </div>

          {/* Dragon Energy Balance Bar */}
          <div className="w-full bg-stone-200 rounded-full h-6 border-2 border-stone-300 overflow-hidden relative shadow-inner mb-2">
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: `${(dragonEnergy / selectedDragon.maxEnergy) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-full flex items-center justify-end pr-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-spin" />
            </motion.div>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-stone-800 drop-shadow-sm">
              Energy to Calm: {dragonEnergy} / {selectedDragon.maxEnergy}
            </span>
          </div>

          <p className="text-xs text-amber-700 font-semibold">
            💡 {selectedDragon.weaknessHint}
          </p>
        </div>

        {/* HERO STATUS CARD */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/90 border-4 border-amber-300 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-3">
              <div className="flex items-center gap-3">
                {hero.portraitUrl || ADVENTURE_ASSETS.heroes[hero.id]?.portraitUrl ? (
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-sm shrink-0">
                    <img
                      src={hero.portraitUrl || ADVENTURE_ASSETS.heroes[hero.id]?.portraitUrl}
                      alt={hero.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-4xl">{hero.avatar}</span>
                )}
                <div>
                  <h4 className="text-xl font-black font-fantasy text-amber-950">
                    {hero.name}
                  </h4>
                  <span className="text-xs font-bold uppercase text-amber-800 bg-amber-200 px-2 py-0.5 rounded-md">
                    {hero.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-xl border border-amber-300">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  <span className="font-extrabold text-sm text-stone-800">
                    {hero.currentHearts}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-xl border border-amber-300">
                  <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-extrabold text-sm text-stone-800">
                    {hero.starSparks}
                  </span>
                </div>
              </div>
            </div>

            {/* Duel Battle Log */}
            <div className="bg-white/90 border border-amber-300 rounded-2xl p-3 min-h-[70px] text-xs sm:text-sm font-semibold text-amber-950 shadow-inner flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <span>{duelLog}</span>
            </div>
          </div>

          {/* Dice Roll Visual Box */}
          <div className="bg-amber-200/70 border-2 border-amber-300 rounded-2xl p-3 flex items-center justify-around">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                Hero Spell D20:
              </span>
              <span className="text-xs text-stone-600">
                Solves math ➔ rolls D20 to balance energy!
              </span>
            </div>
            <motion.div
              animate={isRollingDice ? { rotate: [0, 180, 360], scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, repeat: isRollingDice ? Infinity : 0 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center font-fantasy font-black text-2xl border-2 shadow-md ${
                diceRollValue === 20
                  ? 'bg-yellow-300 text-amber-950 border-yellow-500 glow-amber'
                  : 'bg-amber-600 text-white border-amber-400'
              }`}
            >
              {diceRollValue !== null ? diceRollValue : <Dices className="w-7 h-7" />}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SPELLCASTING & MATH CHALLENGE SECTION */}
      {!isWon ? (
        <div className="bg-white/95 border-4 border-amber-400 rounded-3xl p-4 sm:p-6 shadow-xl">
          {!activeSpell ? (
            <div>
              <div className="text-center mb-4">
                <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                  Turn: Young Adventurer
                </span>
                <h4 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950">
                  Select an Arithmetic Spell to Cast!
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SPELL_ACTIONS.map((spell) => (
                  <motion.button
                    key={spell.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelectSpell(spell)}
                    className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-50 to-amber-100 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-300 hover:border-amber-500 shadow-md text-left transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-3xl block">{spell.icon}</span>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                          spell.spellCategory === 'shield'
                            ? 'bg-sky-100 text-sky-800 border border-sky-300'
                            : spell.spellCategory === 'utility'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-amber-200 text-amber-900 border border-amber-300'
                        }`}>
                          {spell.spellCategory}
                        </span>
                      </div>
                      <h5 className="font-extrabold text-amber-950 text-base leading-tight">
                        {spell.name}
                      </h5>
                      <span className="text-[11px] font-bold text-amber-700 uppercase">
                        {spell.mathType}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                      {spell.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          ) : mathChallenge ? (
            /* MATH QUESTION INTERFACE WITH VISUAL COUNTER MANIPULATIVE */
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-between w-full border-b border-amber-200 pb-2 mb-3">
                <span className="font-extrabold text-sm text-amber-900 flex items-center gap-1.5">
                  <span className="text-xl">{activeSpell.icon}</span>
                  Casting: {activeSpell.name}
                </span>
                <button
                  onClick={() => setActiveSpell(null)}
                  className="text-xs font-bold text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Pick another spell
                </button>
              </div>

              {/* Big Math Question */}
              <h4 className="text-2xl sm:text-4xl font-black text-amber-950 my-2">
                {mathChallenge.question}
              </h4>

              {/* TACTILE VISUAL MANIPULATIVE (Gems for 5yo to count) */}
              <div className="my-3 p-3 rounded-2xl bg-amber-50 border-2 border-amber-200 max-w-md w-full">
                <span className="text-xs font-bold text-stone-500 block mb-1">
                  Touch the magic gems to count along! (Tapped: {tappedGems})
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 py-1">
                  {mathChallenge.type === 'addition' && (
                    <>
                      {/* First set of gems */}
                      {Array.from({ length: mathChallenge.num1 }).map((_, i) => (
                        <button
                          key={`n1-${i}`}
                          onClick={() => {
                            soundManager.playClick();
                            setTappedGems((prev) => prev + 1);
                          }}
                          className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-500 border-2 border-amber-600 flex items-center justify-center text-xs font-black text-amber-950 shadow cursor-pointer transition-transform active:scale-90"
                        >
                          ⭐
                        </button>
                      ))}
                      <span className="text-lg font-black text-amber-800 px-1">+</span>
                      {/* Second set of gems */}
                      {Array.from({ length: mathChallenge.num2 }).map((_, i) => (
                        <button
                          key={`n2-${i}`}
                          onClick={() => {
                            soundManager.playClick();
                            setTappedGems((prev) => prev + 1);
                          }}
                          className="w-8 h-8 rounded-full bg-emerald-400 hover:bg-emerald-500 border-2 border-emerald-600 flex items-center justify-center text-xs font-black text-emerald-950 shadow cursor-pointer transition-transform active:scale-90"
                        >
                          💎
                        </button>
                      ))}
                    </>
                  )}

                  {mathChallenge.type === 'subtraction' && (
                    <>
                      {Array.from({ length: mathChallenge.num1 }).map((_, i) => {
                        const isSubtracted = i >= mathChallenge.num1 - mathChallenge.num2;
                        return (
                          <div
                            key={`sub-${i}`}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow border-2 ${
                              isSubtracted
                                ? 'bg-stone-300 border-stone-400 opacity-40 line-through'
                                : 'bg-sky-400 border-sky-600 text-sky-950'
                            }`}
                          >
                            ❄️
                          </div>
                        );
                      })}
                    </>
                  )}

                  {mathChallenge.type === 'number-bond' && (
                    <>
                      {Array.from({ length: 10 }).map((_, i) => {
                        const isFilled = i < mathChallenge.num1;
                        return (
                          <div
                            key={`bond-${i}`}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black border-2 ${
                              isFilled
                                ? 'bg-purple-500 border-purple-700 text-white'
                                : 'bg-purple-100 border-dashed border-purple-400 text-purple-400'
                            }`}
                          >
                            {isFilled ? '★' : '?'}
                          </div>
                        );
                      })}
                    </>
                  )}

                  {mathChallenge.type === 'doubles' && (
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {Array.from({ length: mathChallenge.num1 }).map((_, i) => (
                          <span key={`d1-${i}`} className="text-xl">
                            ☀️
                          </span>
                        ))}
                      </div>
                      <span className="font-bold text-amber-700">+</span>
                      <div className="flex gap-1">
                        {Array.from({ length: mathChallenge.num2 }).map((_, i) => (
                          <span key={`d2-${i}`} className="text-xl">
                            ☀️
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Big Clickable Answer Choice Buttons */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-2">
                {mathChallenge.options.map((option) => {
                  const isSelected = selectedAnswer === option;
                  return (
                    <motion.button
                      key={option}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerClick(option)}
                      disabled={isAnswerCorrect === true || isRollingDice}
                      className={`py-4 rounded-2xl text-2xl sm:text-3xl font-black transition-all cursor-pointer border-3 shadow-md ${
                        isSelected && isAnswerCorrect
                          ? 'bg-emerald-500 text-white border-emerald-600 scale-105'
                          : isSelected && isAnswerCorrect === false
                          ? 'bg-rose-200 text-rose-950 border-rose-400'
                          : 'bg-gradient-to-b from-white to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-950 border-amber-300'
                      }`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              {/* Correct Feedback Message */}
              {isAnswerCorrect && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm font-bold text-emerald-800 bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-300 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Correct math! Rolling Hero D20 to launch spell...
                </motion.div>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        /* VICTORY / DRAGON FRIENDSHIP CELEBRATION */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-200 border-4 border-amber-400 rounded-3xl p-6 text-center shadow-2xl"
        >
          <div className="text-6xl sm:text-7xl mb-3 select-none">🏆🐉✨</div>
          <h3 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-950 mb-2">
            Friendship Achieved! You Soothed {selectedDragon.name}!
          </h3>
          <p className="text-base text-amber-900 max-w-md mx-auto mb-6">
            With your brilliant mental math and heroic dice rolls, you balanced the magical energies.
            {selectedDragon.name} happily curls up and presents you with the{' '}
            <span className="font-extrabold text-amber-950 underline">
              Dragon Friendship Medal of Spellbound
            </span>
            !
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleResetDragon(selectedDragon)}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-amber-100 text-amber-950 font-bold border-2 border-amber-400 shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <RefreshCw className="w-5 h-5 text-amber-700" />
              Play Again with {selectedDragon.name}
            </button>
            <button
              onClick={onExit}
              className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Return to Story Quest
            </button>
          </div>
        </motion.div>
      )}

      {/* AI Art Studio Modal for Painting Dragons */}
      {isArtStudioOpen && (
        <ArtStudioModal
          hero={hero}
          initialPrompt={artStudioPrompt}
          initialImage={artStudioInitialImage}
          onClose={() => setIsArtStudioOpen(false)}
          onSaveCustomArt={(imgUrl) => {
            handleSaveCustomDragonArt(imgUrl);
            setIsArtStudioOpen(false);
          }}
        />
      )}
    </div>
  );
};
