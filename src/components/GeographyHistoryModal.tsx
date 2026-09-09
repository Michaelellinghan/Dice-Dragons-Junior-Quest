import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GeoHistoryChallenge } from '../types';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Compass, Castle, CheckCircle2, Volume2 } from 'lucide-react';

interface GeoHistoryModalProps {
  challenge: GeoHistoryChallenge;
  onSolved: () => void;
}

export const GeographyHistoryModal: React.FC<GeoHistoryModalProps> = ({
  challenge,
  onSolved,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (opt: string) => {
    setSelectedOption(opt);
    if (opt.toLowerCase() === challenge.correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      soundManager.playSparkle();
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
      });
      setTimeout(() => {
        onSolved();
      }, 1500);
    } else {
      setIsCorrect(false);
      soundManager.playGentleBoop();
    }
  };

  return (
    <div id="geography-history-modal" className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-5 sm:p-6 shadow-2xl max-w-xl mx-auto my-4 text-stone-800">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4">
        <div className="flex items-center gap-2">
          {challenge.type === 'compass' || challenge.type === 'map' ? (
            <Compass className="w-7 h-7 text-amber-700" />
          ) : (
            <Castle className="w-7 h-7 text-amber-700" />
          )}
          <div>
            <span className="text-xs font-black uppercase text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-md">
              {challenge.type === 'compass' || challenge.type === 'map' ? 'Geography Quest' : 'History & Castles'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-fantasy text-amber-950">
              Explorer Knowledge Check
            </h3>
          </div>
        </div>
        <button
          onClick={() => soundManager.speak(`${challenge.question} ${challenge.context}`)}
          className="p-2 rounded-full bg-amber-200 hover:bg-amber-300 text-amber-900 transition-colors cursor-pointer"
          title="Listen to question"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Story Context & Visual */}
      <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-4 mb-4 text-stone-700 flex items-center gap-3">
        <div className="text-4xl sm:text-5xl shrink-0 select-none">
          {challenge.imageIcon || (challenge.type === 'compass' ? '🧭' : '🏰')}
        </div>
        <p className="text-sm sm:text-base font-medium leading-snug">
          {challenge.context}
        </p>
      </div>

      {/* Compass Visual for Compass questions */}
      {challenge.type === 'compass' && (
        <div className="flex justify-center my-3">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 border-4 border-amber-500 shadow-md flex items-center justify-center">
            <span className="absolute top-1 font-black text-amber-950 text-sm">N (North)</span>
            <span className="absolute bottom-1 font-black text-amber-950 text-sm">S (South)</span>
            <span className="absolute right-2 font-black text-amber-950 text-sm">E</span>
            <span className="absolute left-2 font-black text-amber-950 text-sm">W</span>
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-2 h-16 bg-gradient-to-b from-rose-600 via-stone-400 to-stone-700 rounded-full shadow"
            />
          </div>
        </div>
      )}

      {/* Question */}
      <h4 className="text-base sm:text-lg font-extrabold text-amber-950 mb-4 leading-snug">
        {challenge.question}
      </h4>

      {/* Options */}
      <div className="space-y-2.5 mb-4">
        {challenge.options.map((opt) => {
          const isSelected = selectedOption === opt;
          return (
            <motion.button
              key={opt}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(opt)}
              disabled={isCorrect === true}
              className={`w-full p-4 rounded-2xl font-bold text-left text-base sm:text-lg transition-all cursor-pointer border-3 shadow-md flex items-center justify-between gap-3 ${
                isSelected && isCorrect
                  ? 'bg-emerald-500 text-white border-emerald-600'
                  : isSelected && isCorrect === false
                  ? 'bg-rose-100 text-rose-950 border-rose-400'
                  : 'bg-white hover:bg-amber-100/90 text-amber-950 border-amber-300 hover:border-amber-400'
              }`}
            >
              <span>{opt}</span>
              {isSelected && isCorrect && <CheckCircle2 className="w-6 h-6 text-white shrink-0" />}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation on correct */}
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-100 border border-emerald-400 rounded-2xl p-3 text-emerald-950 text-sm font-semibold"
        >
          🌟 {challenge.explanation}
        </motion.div>
      )}

      {isCorrect === false && (
        <p className="text-xs sm:text-sm text-amber-800 font-bold text-center mt-2">
          Almost! Think about your explorer clues and try again!
        </p>
      )}
    </div>
  );
};
