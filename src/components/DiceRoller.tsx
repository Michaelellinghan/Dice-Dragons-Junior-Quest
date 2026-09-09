import React, { useState } from 'react';
import { motion } from 'motion/react';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Dices, Sparkles, Trophy } from 'lucide-react';

interface DiceRollerProps {
  dcTarget?: number;
  statModifier?: { name: string; value: number };
  onRollComplete?: (result: { raw: number; total: number; success: boolean }) => void;
  label?: string;
  diceType?: 'd20' | 'd6';
}

export const DiceRoller: React.FC<DiceRollerProps> = ({
  dcTarget,
  statModifier,
  onRollComplete,
  label = 'Roll the Hero Dice!',
  diceType = 'd20',
}) => {
  const [isRolling, setIsRolling] = useState(false);
  const [rollResult, setRollResult] = useState<{ raw: number; total: number; success?: boolean } | null>(null);
  const [displayNumber, setDisplayNumber] = useState<number>(diceType === 'd20' ? 20 : 6);

  const sides = diceType === 'd20' ? 20 : 6;

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    setRollResult(null);
    soundManager.playDiceRoll();

    // Rattle numbers animation
    let counter = 0;
    const interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * sides) + 1);
      counter++;
      if (counter > 12) {
        clearInterval(interval);
        const finalRaw = Math.floor(Math.random() * sides) + 1;
        const mod = statModifier ? statModifier.value : 0;
        const total = finalRaw + mod;
        const success = dcTarget !== undefined ? total >= dcTarget : true;

        setDisplayNumber(finalRaw);
        setRollResult({ raw: finalRaw, total, success });
        setIsRolling(false);

        if (finalRaw === sides || (dcTarget !== undefined && success)) {
          soundManager.playSparkle();
          confetti({
            particleCount: finalRaw === sides ? 60 : 30,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#F59E0B', '#10B981', '#6366F1', '#EC4899'],
          });
        } else {
          soundManager.playGentleBoop();
        }

        if (onRollComplete) {
          onRollComplete({ raw: finalRaw, total, success });
        }
      }
    }, 65);
  };

  return (
    <div id="dice-roller-container" className="flex flex-col items-center bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-md max-w-sm mx-auto text-center">
      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide uppercase mb-2">
        <Dices className="w-4 h-4 text-amber-600" />
        <span>{label}</span>
      </div>

      {/* 3D Dice Display */}
      <div className="relative my-3 flex items-center justify-center">
        <motion.div
          animate={isRolling ? { rotate: [0, 90, 180, 270, 360], scale: [1, 1.25, 0.9, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex flex-col items-center justify-center shadow-xl border-4 select-none cursor-pointer transition-colors ${
            rollResult?.raw === sides
              ? 'bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-400 border-amber-500 text-amber-950 glow-amber'
              : rollResult && dcTarget && !rollResult.success
              ? 'bg-gradient-to-br from-stone-100 to-stone-200 border-stone-400 text-stone-700'
              : 'bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 border-amber-400 text-white shadow-amber-700/40'
          }`}
          onClick={handleRoll}
        >
          <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
            {diceType.toUpperCase()}
          </span>
          <span className="text-4xl sm:text-5xl font-black font-fantasy leading-none drop-shadow-sm">
            {displayNumber}
          </span>
        </motion.div>

        {rollResult?.raw === sides && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 -right-3 bg-yellow-400 text-amber-950 px-2 py-0.5 rounded-full text-xs font-extrabold flex items-center gap-1 shadow-md border border-amber-600"
          >
            <Sparkles className="w-3.5 h-3.5 fill-amber-950" />
            CRIT!
          </motion.div>
        )}
      </div>

      {/* Modifier and DC breakdown */}
      {statModifier && (
        <div className="text-xs text-stone-600 mb-2">
          Base Roll ({rollResult ? rollResult.raw : '?'}) +{' '}
          <span className="font-bold text-amber-800">
            +{statModifier.value} {statModifier.name}
          </span>{' '}
          = <span className="font-bold text-base text-amber-900">{rollResult ? rollResult.total : '?'}</span>
        </div>
      )}

      {dcTarget !== undefined && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-200/80 text-amber-900 border border-amber-300 mb-3">
          <Trophy className="w-3.5 h-3.5 text-amber-700" />
          Target Goal: {dcTarget}+
        </div>
      )}

      {/* Result feedback */}
      {rollResult && dcTarget !== undefined && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm font-bold px-3 py-1.5 rounded-xl mb-3 ${
            rollResult.success
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              : 'bg-orange-100 text-orange-900 border border-orange-300'
          }`}
        >
          {rollResult.success
            ? '🎉 Splendid Roll! Success!'
            : '🌟 Close try! Your hero finds another way!'}
        </motion.div>
      )}

      <button
        id="roll-dice-btn"
        disabled={isRolling}
        onClick={handleRoll}
        className="w-full py-3 px-6 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 active:scale-95 disabled:opacity-50 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
      >
        <Dices className="w-5 h-5" />
        {isRolling ? 'Rolling...' : `Tap to Roll ${diceType.toUpperCase()}!`}
      </button>
    </div>
  );
};
