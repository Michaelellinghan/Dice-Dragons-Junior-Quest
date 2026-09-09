import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhonicsChallenge } from '../types';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Volume2, Sparkles, CheckCircle2, Hand, Eye } from 'lucide-react';

interface PhonicsPuzzleModalProps {
  challenge: PhonicsChallenge;
  onSolved: () => void;
  onCancel?: () => void;
}

export const PhonicsPuzzleModal: React.FC<PhonicsPuzzleModalProps> = ({
  challenge,
  onSolved,
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [activePhonemeIndex, setActivePhonemeIndex] = useState<number | null>(null);
  const [hasTappedAllButtons, setHasTappedAllButtons] = useState<boolean>(false);
  const [tappedIndices, setTappedIndices] = useState<number[]>([]);

  const handlePlaySound = (sound: string, index: number) => {
    soundManager.playClick();
    setActivePhonemeIndex(index);
    if (!tappedIndices.includes(index)) {
      const nextTapped = [...tappedIndices, index];
      setTappedIndices(nextTapped);
      if (nextTapped.length === challenge.phonemes.length) {
        setHasTappedAllButtons(true);
      }
    }
    soundManager.speak(sound, () => {
      setActivePhonemeIndex(null);
    });
  };

  const handleReadWordAloud = () => {
    soundManager.playSpellCast();
    soundManager.speak(challenge.word);
  };

  const handleConfirmRead = (wordRead: string) => {
    setSelectedWord(wordRead);
    if (wordRead.toLowerCase() === challenge.correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      soundManager.playSparkle();
      confetti({
        particleCount: 60,
        spread: 70,
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
    <div
      id="phonics-tabletop-card-modal"
      className="bg-amber-50/95 border-4 border-amber-400 rounded-3xl p-5 sm:p-7 shadow-2xl max-w-xl mx-auto my-5 text-stone-800 relative overflow-hidden"
    >
      {/* Tabletop DM Placement Banner */}
      <div className="bg-gradient-to-r from-amber-700 to-orange-700 text-white p-3 sm:p-3.5 rounded-2xl mb-4 flex items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl select-none">🃏✨</span>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-200 block">
              Tabletop Encounter Card
            </span>
            <h4 className="text-xs sm:text-sm font-black font-fantasy leading-tight">
              The Dungeon Master places a Rune Card in front of you!
            </h4>
          </div>
        </div>
        <button
          onClick={() => soundManager.speak(challenge.instruction)}
          className="p-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer shrink-0"
          title="Listen to DM prompt"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* Instruction */}
      <p className="text-sm sm:text-base font-bold text-amber-950 mb-4 leading-relaxed">
        {challenge.instruction}
      </p>

      {/* THE PHYSICAL ENCOUNTER CARD (Modeled like a real tabletop card) */}
      <div className="bg-white border-3 border-stone-800 rounded-2xl p-5 sm:p-6 shadow-xl max-w-md mx-auto my-3 relative overflow-hidden text-center">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 pb-2 mb-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
            {challenge.type.toUpperCase()} RUNE CARD
          </span>
          <span className="text-xs font-bold text-stone-500">
            Phase {challenge.phonemes.some((p) => p.length > 1) ? '3' : '2'} Phonics
          </span>
        </div>

        {/* Big Decodable Word Display */}
        <div className="my-3">
          <div className="text-5xl sm:text-6xl font-black font-mono tracking-widest text-stone-900 drop-shadow-sm select-none">
            {challenge.word}
          </div>

          {/* Sound Buttons Underneath (Dots for single letters, dashes for digraphs) */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-3">
            {challenge.phonemes.map((p, idx) => {
              const isDigraph = p.length > 1;
              const isPressed = activePhonemeIndex === idx;
              const hasTapped = tappedIndices.includes(idx);

              return (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePlaySound(p, idx)}
                    className={`cursor-pointer transition-all shadow-md flex items-center justify-center ${
                      isDigraph
                        ? 'w-10 h-3 rounded-full'
                        : 'w-4 h-4 rounded-full'
                    } ${
                      isPressed
                        ? 'bg-amber-400 ring-4 ring-amber-300 scale-110'
                        : hasTapped
                        ? 'bg-emerald-600'
                        : 'bg-amber-800 hover:bg-amber-600'
                    }`}
                    title={`Hear sound: /${p}/`}
                  />
                  <span className="text-xs font-black text-amber-900 uppercase">
                    /{p}/
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-stone-600 font-medium italic mt-3 mb-2">
          👆 Touch each sound button below the letters, blend them together, and read the card!
        </p>

        {/* Read aloud card audio button */}
        <button
          onClick={handleReadWordAloud}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs transition-colors cursor-pointer border border-amber-300"
        >
          <Volume2 className="w-4 h-4 text-amber-800" />
          <span>Listen to the whole word: &ldquo;{challenge.word}&rdquo;</span>
        </button>
      </div>

      {/* READING CARD CONFIRMATION BUTTONS */}
      <div className="mt-5">
        <span className="text-xs font-black uppercase tracking-wider text-amber-900 block text-center mb-2.5">
          What did the young adventurer read from the card?
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {challenge.options.map((opt, idx) => {
            const isSelected = selectedWord === opt;
            const isTargetCorrect = opt.toLowerCase() === challenge.correctAnswer.toLowerCase();

            return (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleConfirmRead(opt)}
                className={`py-3 px-4 rounded-2xl font-black text-base sm:text-lg transition-all cursor-pointer border-2 flex items-center justify-center gap-2 shadow-sm ${
                  isSelected && isCorrect
                    ? 'bg-emerald-500 border-emerald-600 text-white'
                    : isSelected && !isCorrect
                    ? 'bg-rose-500 border-rose-600 text-white'
                    : 'bg-white hover:bg-amber-100/80 border-amber-300 text-stone-800'
                }`}
              >
                <span>{opt}</span>
                {isSelected && isCorrect && <CheckCircle2 className="w-5 h-5 text-white" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Feedback Alert */}
      <AnimatePresence>
        {isCorrect === true && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-emerald-100 border-2 border-emerald-400 rounded-2xl text-emerald-950 text-center font-black text-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span>Brilliant reading! The ancient rune glows bright and unlocks the gate!</span>
          </motion.div>
        )}

        {isCorrect === false && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-rose-50 border-2 border-rose-300 rounded-2xl text-rose-950 text-center text-xs font-bold leading-relaxed"
          >
            <span>{challenge.hint} Point to each sound button on the card and try again!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
