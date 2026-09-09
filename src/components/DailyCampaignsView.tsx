import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DailyCampaign, DailyCampaignScene, Hero } from '../types';
import { DAILY_CAMPAIGNS } from '../data/dailyCampaigns';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  generateReadingCardsPdf,
  generateCampaignChroniclePdf,
  generateCharacterAndAccessoriesPdf,
  generateFullJournalPdf,
  generateAstraeaMapPdf,
} from '../utils/pdfGenerator';
import {
  generateMathProblem,
  getRandomSurge,
  GeneratedMathSpell,
} from '../utils/mathGenerator';
import { MathDifficultyRange, MathOperatorMode, WildMagicSurge } from '../types';
import { DailyJournalView } from './DailyJournalView';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { ArtStudioModal } from './ArtStudioModal';
import {
  Calendar,
  CheckCircle,
  Circle,
  Volume2,
  Sparkles,
  Printer,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Compass,
  History,
  Calculator,
  Award,
  Layers,
  Download,
  Dices,
  Check,
  PenTool,
  Scroll,
  Settings,
  HelpCircle,
  Search,
  RotateCcw,
  Zap,
  MapPin,
  Palette,
} from 'lucide-react';

interface DailyCampaignsViewProps {
  hero: Hero;
  onHeroUpdate: (updated: Hero) => void;
  onSelectPrintable?: () => void;
  onOpenMap?: () => void;
}

export const DailyCampaignsView: React.FC<DailyCampaignsViewProps> = ({
  hero,
  onHeroUpdate,
  onSelectPrintable,
  onOpenMap,
}) => {
  const [activeTab, setActiveTab] = useState<'campaign' | 'journal'>('campaign');
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);
  const [showExtendedLore, setShowExtendedLore] = useState<boolean>(false);
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_completed_days');
        return saved ? JSON.parse(saved) : [1];
      } catch {
        return [1];
      }
    }
    return [1];
  });
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [selectedBook, setSelectedBook] = useState<'all' | 'book_1' | 'book_2'>('all');
  const [diceRollResult, setDiceRollResult] = useState<number | null>(null);
  const [mathAnswerSelected, setMathAnswerSelected] = useState<number | null>(null);
  const [mathSuccess, setMathSuccess] = useState<boolean | null>(null);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  const [isArtStudioOpen, setIsArtStudioOpen] = useState<boolean>(false);
  const [artStudioPrompt, setArtStudioPrompt] = useState<string>('');
  const [artStudioInitialImage, setArtStudioInitialImage] = useState<string | undefined>(undefined);
  const [customDailyArt, setCustomDailyArt] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_custom_daily_art');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const handleSaveCustomDailyArt = (imgUrl: string) => {
    const key = `day_${selectedDayNum}_sc_${activeSceneIdx}`;
    const updated = { ...customDailyArt, [key]: imgUrl };
    setCustomDailyArt(updated);
    try {
      localStorage.setItem('dice_dragons_custom_daily_art', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Parent Math Spellcasting Difficulty Settings
  const [mathRange, setMathRange] = useState<MathDifficultyRange>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('dice_dragons_math_range') as MathDifficultyRange) || '1-10';
    }
    return '1-10';
  });
  const [mathOpMode, setMathOpMode] = useState<MathOperatorMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('dice_dragons_math_op_mode') as MathOperatorMode) || 'mixed';
    }
    return 'mixed';
  });
  const [showVisualCounters, setShowVisualCounters] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dice_dragons_show_counters');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });
  const [showMathSettings, setShowMathSettings] = useState<boolean>(false);

  // Active Wild Magic Surge (Gentle Consequence)
  const [activeSurge, setActiveSurge] = useState<WildMagicSurge | null>(null);

  // Scene Scavenger Hunt & In-Story Discoveries Found
  const [discoveredSceneSecrets, setDiscoveredSceneSecrets] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_scene_secrets');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  // Dynamic Math Problem for Active Scene
  const [customMathSpell, setCustomMathSpell] = useState<GeneratedMathSpell | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('dice_dragons_math_range', mathRange);
      localStorage.setItem('dice_dragons_math_op_mode', mathOpMode);
      localStorage.setItem('dice_dragons_show_counters', String(showVisualCounters));
    } catch {
      // ignore
    }
  }, [mathRange, mathOpMode, showVisualCounters]);

  useEffect(() => {
    try {
      localStorage.setItem('dice_dragons_completed_days', JSON.stringify(completedDays));
    } catch {
      // ignore
    }
  }, [completedDays]);

  const activeDay =
    DAILY_CAMPAIGNS.find((d) => d.dayNumber === selectedDayNum) || DAILY_CAMPAIGNS[0];
  const currentScene: DailyCampaignScene | undefined = activeDay.scenes?.[activeSceneIdx];

  // Reset scene index and challenge state when changing days, and generate difficulty-adapted math
  useEffect(() => {
    setActiveSceneIdx(0);
    setDiceRollResult(null);
    setMathAnswerSelected(null);
    setMathSuccess(null);
    setActiveSurge(null);
  }, [selectedDayNum]);

  // Adapt or generate math problem to match parent's difficulty settings
  useEffect(() => {
    if (currentScene?.mathProblem) {
      const generated = generateMathProblem(
        mathRange,
        mathOpMode,
        currentScene.mathProblem.spellName
      );
      setCustomMathSpell(generated);
    } else {
      setCustomMathSpell(null);
    }
    setMathAnswerSelected(null);
    setMathSuccess(null);
  }, [selectedDayNum, activeSceneIdx, mathRange, mathOpMode, currentScene?.mathProblem?.spellName]);

  const handleRerollMath = () => {
    soundManager.playSparkle();
    if (currentScene?.mathProblem) {
      const generated = generateMathProblem(
        mathRange,
        mathOpMode,
        currentScene.mathProblem.spellName
      );
      setCustomMathSpell(generated);
      setMathAnswerSelected(null);
      setMathSuccess(null);
    }
  };

  const handleToggleComplete = (dayNum: number) => {
    soundManager.playSparkle();
    let updated: number[];
    if (completedDays.includes(dayNum)) {
      updated = completedDays.filter((d) => d !== dayNum);
    } else {
      updated = [...completedDays, dayNum];
      confetti({
        particleCount: 70,
        spread: 75,
        origin: { y: 0.6 },
      });
      // Award star sparks
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + activeDay.reward.sparks,
      });
    }
    setCompletedDays(updated);
  };

  const handleRollDice = (dc: number) => {
    soundManager.playDiceRoll();
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRollResult(roll);
    if (roll >= dc) {
      soundManager.playVictory();
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + 1,
      });
    } else {
      soundManager.playSparkle();
      // Gentle Fumble triggers playful Wild Magic Surge!
      setActiveSurge(getRandomSurge());
    }
  };

  const handleSelectMath = (ans: number, correct: number) => {
    setMathAnswerSelected(ans);
    if (ans === correct) {
      setMathSuccess(true);
      soundManager.playVictory();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + 1,
      });
    } else {
      setMathSuccess(false);
      soundManager.playSpell();
      // Gentle misfire triggers a playful Wild Magic Surge!
      setActiveSurge(getRandomSurge());
    }
  };

  const handleDiscoverSecret = (secretId: string, label: string, sparks: number = 1) => {
    if (!discoveredSceneSecrets.includes(secretId)) {
      const updated = [...discoveredSceneSecrets, secretId];
      setDiscoveredSceneSecrets(updated);
      try {
        localStorage.setItem('dice_dragons_scene_secrets', JSON.stringify(updated));
      } catch {
        // ignore
      }
      soundManager.playVictory();
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + sparks,
      });
    } else {
      soundManager.playSparkle();
    }
  };

  const triggerPdfDownload = (type: 'cards' | 'handbook' | 'character' | 'map') => {
    setIsDownloading(type);
    soundManager.playSparkle();
    setTimeout(() => {
      if (type === 'cards') {
        generateReadingCardsPdf();
      } else if (type === 'handbook') {
        generateCampaignChroniclePdf();
      } else if (type === 'character') {
        generateCharacterAndAccessoriesPdf(hero);
      } else if (type === 'map') {
        generateAstraeaMapPdf(hero);
      }
      setIsDownloading(null);
    }, 150);
  };

  const filteredCampaigns = DAILY_CAMPAIGNS.filter((c) => {
    if (selectedBook === 'book_1' && c.dayNumber > 20) return false;
    if (selectedBook === 'book_2' && c.dayNumber <= 20) return false;
    if (filterSubject === 'all') return true;
    return c.subjectFocus === filterSubject;
  });

  const getSubjectBadge = (subject: string) => {
    switch (subject) {
      case 'phonics':
        return { bg: 'bg-emerald-100 text-emerald-900 border-emerald-300', icon: '📖 Phonics' };
      case 'maths':
        return { bg: 'bg-amber-100 text-amber-950 border-amber-300', icon: '🧮 Early Maths' };
      case 'history':
        return { bg: 'bg-rose-100 text-rose-950 border-rose-300', icon: '🏰 Castles & Fossils' };
      case 'geography':
        return { bg: 'bg-sky-100 text-sky-950 border-sky-300', icon: '🧭 Maps & Compass' };
      default:
        return { bg: 'bg-stone-100 text-stone-800 border-stone-300', icon: '✨ Adventure' };
    }
  };

  return (
    <div id="daily-campaigns-view" className="w-full max-w-6xl mx-auto p-3 sm:p-6">
      {/* Header Banner with Real PDF Downloads */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-orange-800 text-white rounded-3xl p-6 shadow-xl mb-6 border-4 border-amber-300">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-2xl">📅✨</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-200 bg-amber-950/70 px-3 py-0.5 rounded-full border border-amber-500">
                40 Daily Quests • 2 Books • 20 Sagas Universe
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-100">
              The Daily Campaign Chronicle
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl font-medium mt-1">
              A deep, story-rich daily curriculum across Astraea! Book I (Days 1–20) journeys through the Central Valleys, and Book II (Days 21–40) soars through the Sky Isles of Zephyria.
            </p>
          </div>

          {/* Quick PDF File Downloads directly in Header */}
          <div className="bg-amber-950/80 border-2 border-amber-400/80 rounded-2xl p-4 shrink-0 w-full lg:w-auto">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block mb-2 text-center lg:text-left">
              📥 Download Actual PDF Files:
            </span>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
              <button
                onClick={() => triggerPdfDownload('cards')}
                disabled={isDownloading !== null}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                title="Generate and download actual 50-card PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>50 Cards (PDF)</span>
              </button>

              <button
                onClick={() => triggerPdfDownload('handbook')}
                disabled={isDownloading !== null}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                title="Generate and download DM handbook PDF"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>DM Handbook (PDF)</span>
              </button>

              <button
                onClick={() => triggerPdfDownload('character')}
                disabled={isDownloading !== null}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-orange-400 hover:bg-orange-300 text-amber-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                title="Generate and download character kit & certificate PDF"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Hero Kit (PDF)</span>
              </button>

              <button
                onClick={() => triggerPdfDownload('map')}
                disabled={isDownloading !== null}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                title="Generate and download physical A4 tabletop adventure map PDF"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Physical Map (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="mt-5 pt-4 border-t border-amber-600/70 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-100 font-bold">
          <div className="flex items-center gap-2">
            <span>Overall Journey Completion:</span>
            <span className="bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full font-black text-xs">
              {completedDays.length} / {DAILY_CAMPAIGNS.length} Days Completed
            </span>
          </div>

          <div className="flex items-center gap-4">
            {onOpenMap && (
              <button
                onClick={onOpenMap}
                className="text-amber-200 hover:text-white underline text-xs font-bold cursor-pointer flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>Open Kingdom Map View</span>
              </button>
            )}

            {onSelectPrintable && (
              <button
                onClick={onSelectPrintable}
                className="text-amber-200 hover:text-white underline text-xs font-bold cursor-pointer flex items-center gap-1"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Open Printable Tabletop Playmat</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PARENTS & DMS MATH SPELLCASTING DIFFICULTY SETTINGS BAR */}
      <div className="mb-6 bg-white border-2 border-amber-300 rounded-2xl shadow-sm overflow-hidden">
        <div
          onClick={() => {
            setShowMathSettings(!showMathSettings);
            soundManager.playClick();
          }}
          className="p-3.5 sm:p-4 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-100/60 transition-colors"
        >
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-sm">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-black text-amber-950">
                  Parent / DM Math Difficulty Settings
                </span>
                <span className="bg-amber-200 text-amber-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-amber-400">
                  Range: {mathRange} • {mathOpMode.toUpperCase()}
                </span>
              </div>
              <p className="text-[11px] text-stone-600 font-medium">
                Adjust addition/subtraction ranges to match your child&apos;s early years / Year 1 / Year 2 level.
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMathSettings(!showMathSettings);
            }}
            className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-black text-xs flex items-center gap-1 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{showMathSettings ? 'Close Settings' : 'Adjust Difficulty'}</span>
          </button>
        </div>

        {/* Expandable Settings Controls */}
        <AnimatePresence>
          {showMathSettings && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 sm:p-6 bg-white border-t border-amber-200 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Range Selection */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-2">
                    1. Arithmetic Number Range:
                  </label>
                  <div className="space-y-1.5">
                    {[
                      {
                        val: '1-5' as MathDifficultyRange,
                        title: 'Level 1: Reception / Starter (1–5)',
                        desc: 'Numbers 1 to 5. Ideal for finger counting and counters (e.g. 2+3, 5-2).',
                      },
                      {
                        val: '1-10' as MathDifficultyRange,
                        title: 'Level 2: Year 1 Standard (1–10)',
                        desc: 'Numbers 1 to 10. Single digits & number bonds (e.g. 4+5, 8-3).',
                      },
                      {
                        val: '1-20' as MathDifficultyRange,
                        title: 'Level 3: Year 1/2 Challenge (1–20)',
                        desc: 'Numbers 1 to 20. Crossing 10 and teen numbers (e.g. 12+5, 17-6).',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => {
                          setMathRange(opt.val);
                          soundManager.playClick();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                          mathRange === opt.val
                            ? 'bg-amber-100/90 border-amber-600 text-amber-950 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                        }`}
                      >
                        <div className="text-xs font-black">{opt.title}</div>
                        <div className="text-[10px] text-stone-600 font-medium leading-tight mt-0.5">
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Operator Mode */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-2">
                    2. Spell Operations:
                  </label>
                  <div className="space-y-1.5">
                    {[
                      {
                        val: 'mixed' as MathOperatorMode,
                        title: 'Mixed (+ and −)',
                        desc: 'Alternates both addition and subtraction spells.',
                      },
                      {
                        val: 'addition' as MathOperatorMode,
                        title: 'Addition Only (+)',
                        desc: 'Combines two groups of sparks/vines.',
                      },
                      {
                        val: 'subtraction' as MathOperatorMode,
                        title: 'Subtraction Only (−)',
                        desc: 'Takes away or counts backwards.',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => {
                          setMathOpMode(opt.val);
                          soundManager.playClick();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                          mathOpMode === opt.val
                            ? 'bg-amber-100/90 border-amber-600 text-amber-950 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                        }`}
                      >
                        <div className="text-xs font-black">{opt.title}</div>
                        <div className="text-[10px] text-stone-600 font-medium leading-tight mt-0.5">
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Visual Counters & Sample Problem Preview */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-2">
                      3. Visual Counters (Touch &amp; Count):
                    </label>
                    <button
                      onClick={() => {
                        setShowVisualCounters(!showVisualCounters);
                        soundManager.playSparkle();
                      }}
                      className={`w-full p-2.5 rounded-xl border-2 text-left cursor-pointer transition-colors ${
                        showVisualCounters
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                          : 'bg-stone-50 border-stone-200 text-stone-600'
                      }`}
                    >
                      <div className="text-xs font-black flex items-center justify-between">
                        <span>✨ Sparkle Gem Manipulatives</span>
                        <span>{showVisualCounters ? '✓ ACTIVE' : 'DISABLED'}</span>
                      </div>
                      <p className="text-[10px] mt-0.5 leading-tight">
                        Displays clickable glowing stars and gems so young children can touch and count tokens one by one.
                      </p>
                    </button>
                  </div>

                  {/* Sample problem preview */}
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
                    <span className="text-[10px] font-black uppercase text-amber-800 block mb-1">
                      Current Settings Sample Problem:
                    </span>
                    <span className="text-sm font-black font-mono text-amber-950 bg-white px-2.5 py-1 rounded-lg border border-amber-300 inline-block">
                      {customMathSpell ? `${customMathSpell.problem} = ?` : '3 + 2 = ?'}
                    </span>
                    <p className="text-[10px] text-stone-600 mt-1 italic">
                      &ldquo;{customMathSpell?.hint || 'Count on with your fingers!'}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Mode Switcher: Campaign Tabletop vs. Daily Journal */}
      <div className="flex items-center gap-2 mb-6 bg-amber-900/10 p-1.5 rounded-2xl border-2 border-amber-300/80 max-w-md">
        <button
          onClick={() => {
            setActiveTab('campaign');
            soundManager.playClick();
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'campaign'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-stone-700 hover:bg-amber-100/60 font-bold'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Daily Campaign (Day {selectedDayNum})</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('journal');
            soundManager.playSparkle();
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'journal'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-stone-700 hover:bg-amber-100/60 font-bold'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>Adventurer&apos;s Journal</span>
        </button>
      </div>

      {activeTab === 'journal' ? (
        <DailyJournalView
          hero={hero}
          activeDayNumber={selectedDayNum}
          onSelectDay={(dayNum) => setSelectedDayNum(dayNum)}
          onHeroUpdate={onHeroUpdate}
          onBackToQuest={() => setActiveTab('campaign')}
        />
      ) : (
        /* Main Grid: Left Column Days List, Right Column Active Day Journey */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: 40 Days Selector with Book 1 and Book 2 Tabs */}
        <div className="lg:col-span-5 space-y-2.5">
          {/* Book / Saga Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200 rounded-2xl">
            <button
              onClick={() => {
                setSelectedBook('all');
                soundManager.playClick();
              }}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                selectedBook === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All (40 Days)
            </button>
            <button
              onClick={() => {
                setSelectedBook('book_1');
                if (selectedDayNum > 20) setSelectedDayNum(1);
                soundManager.playClick();
              }}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                selectedBook === 'book_1'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Book I (1–20)
            </button>
            <button
              onClick={() => {
                setSelectedBook('book_2');
                if (selectedDayNum <= 20) setSelectedDayNum(21);
                soundManager.playClick();
              }}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center ${
                selectedBook === 'book_2'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Book II (21–40)
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'all', label: `All (${filteredCampaigns.length})` },
              { id: 'phonics', label: '📖 Phonics' },
              { id: 'maths', label: '🧮 Maths' },
              { id: 'history', label: '🏰 History' },
              { id: 'geography', label: '🧭 Geo' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterSubject(f.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap transition-colors ${
                  filterSubject === f.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-200 hover:bg-stone-300 text-stone-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Days List */}
          <div className="max-h-[620px] overflow-y-auto pr-1 space-y-2.5">
            {filteredCampaigns.map((camp) => {
              const isSelected = camp.dayNumber === selectedDayNum;
              const isDone = completedDays.includes(camp.dayNumber);
              const badge = getSubjectBadge(camp.subjectFocus);

              return (
                <motion.div
                  key={camp.dayNumber}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedDayNum(camp.dayNumber)}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-amber-100 border-amber-600 shadow-md ring-2 ring-amber-400'
                      : isDone
                      ? 'bg-emerald-50/80 border-emerald-300 hover:bg-emerald-100/70'
                      : 'bg-white border-stone-200 hover:border-amber-400 hover:bg-amber-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleComplete(camp.dayNumber);
                      }}
                      className="shrink-0 text-stone-400 hover:text-emerald-600 transition-colors"
                    >
                      {isDone ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-5 h-5 text-stone-400" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase text-amber-800 tracking-wider">
                          Day {camp.dayNumber}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full border ${badge.bg}`}>
                          {badge.icon}
                        </span>
                        <span className="text-[10px] text-stone-500 font-semibold">
                          ~{camp.durationMinutes}m
                        </span>
                      </div>
                      <h4 className="text-sm font-extrabold text-stone-900 truncate">
                        {camp.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 truncate">
                        Card: {camp.cardToPlace.word ? `"${camp.cardToPlace.word}"` : camp.cardToPlace.title}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-700 translate-x-1' : 'text-stone-400'
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Day Multi-Scene Story & Tabletop Deck */}
        <div className="lg:col-span-7">
          <div className="bg-white border-4 border-amber-300 rounded-3xl p-5 sm:p-7 shadow-xl">
            {/* Active Day Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-amber-200 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-200/80 px-3 py-0.5 rounded-full">
                    Day {activeDay.dayNumber} of 20
                  </span>
                  <span
                    className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      getSubjectBadge(activeDay.subjectFocus).bg
                    }`}
                  >
                    {getSubjectBadge(activeDay.subjectFocus).icon}
                  </span>
                  <span className="text-xs text-stone-500 font-bold">
                    {activeDay.durationMinutes} Mins Session
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 mt-1">
                  {activeDay.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-medium">
                  {activeDay.subtitle}
                </p>
              </div>

              {/* Complete Toggle Button */}
              <button
                onClick={() => handleToggleComplete(activeDay.dayNumber)}
                className={`px-4 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  completedDays.includes(activeDay.dayNumber)
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-400'
                }`}
              >
                {completedDays.includes(activeDay.dayNumber) ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Done! (+{activeDay.reward.sparks}⭐)</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4" />
                    <span>Mark Complete</span>
                  </>
                )}
              </button>
            </div>

            {/* Multi-Scene Step Tabs */}
            {activeDay.scenes && activeDay.scenes.length > 0 && (
              <div className="mb-5 bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    Story Scenes ({activeDay.scenes.length} Chapters for Today):
                  </span>
                  <span className="text-[11px] font-bold text-amber-800">
                    Scene {activeSceneIdx + 1} of {activeDay.scenes.length}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {activeDay.scenes.map((sc, scIdx) => (
                    <button
                      key={scIdx}
                      onClick={() => {
                        setActiveSceneIdx(scIdx);
                        soundManager.playSparkle();
                      }}
                      className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                        activeSceneIdx === scIdx
                          ? 'bg-amber-600 text-white border-amber-700 shadow-md font-black'
                          : 'bg-white hover:bg-amber-100 text-stone-800 border-amber-200 font-bold'
                      }`}
                    >
                      <div className="text-[10px] uppercase opacity-80">Scene {scIdx + 1}</div>
                      <div className="text-xs truncate">{sc.title.split(':')[1] || sc.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Current Scene Display */}
            {currentScene ? (
              <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-sm">
                {/* Scene Artwork Banner */}
                {(() => {
                  const sceneKey = `day_${activeDay.dayNumber}_sc_${activeSceneIdx}`;
                  const regionKey = (activeDay.region || '').toLowerCase().replace(/[^a-z0-9]+/g, '_');
                  const displayArt =
                    customDailyArt[sceneKey] ||
                    (ADVENTURE_ASSETS.regions as Record<string, { bannerUrl: string }>)[regionKey]?.bannerUrl ||
                    ADVENTURE_ASSETS.pages.dailyCampaigns.bannerUrl;

                  return (
                    <div className="relative mb-4 h-44 sm:h-56 rounded-xl overflow-hidden border-2 border-amber-300 shadow-sm group">
                      <img
                        src={displayArt}
                        alt={currentScene.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                      {/* AI Art Studio Button */}
                      <button
                        onClick={() => {
                          soundManager.playSparkle();
                          setArtStudioPrompt(
                            `A magical children's book fantasy illustration for Day ${activeDay.dayNumber}: "${currentScene.title}". ${currentScene.narration.slice(0, 160)}, vivid watercolor fantasy adventure style.`
                          );
                          setArtStudioInitialImage(displayArt);
                          setIsArtStudioOpen(true);
                        }}
                        className="absolute top-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1.5 shadow-md border border-amber-300 transition-all cursor-pointer hover:scale-105"
                      >
                        <Palette className="w-3.5 h-3.5" />
                        <span>{customDailyArt[sceneKey] ? '✨ Edit Art' : '🎨 Paint Scene with AI'}</span>
                      </button>

                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-xs font-bold text-amber-200 drop-shadow-sm flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          {activeDay.title} • {currentScene.title}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-black font-fantasy text-amber-950">
                    {currentScene.title}
                  </h4>
                  <button
                    onClick={() => soundManager.speak(currentScene.narration)}
                    className="p-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                    title="Read Scene Aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Listen</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed mb-4">
                  {currentScene.narration}
                </p>

                {/* DM Prompt */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-4 text-purple-950">
                  <span className="text-[11px] font-black uppercase tracking-wider text-purple-900 block mb-1">
                    🎭 Dungeon Master Prompt for Parents:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold italic">
                    &ldquo;{currentScene.dmPrompt}&rdquo;
                  </p>
                </div>

                {/* Interactive Scene Challenge Area */}
                {(customMathSpell || currentScene.mathProblem) && (
                  <div className="bg-gradient-to-br from-amber-50 via-amber-100/70 to-orange-50 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 mb-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900">
                        <Calculator className="w-4 h-4 text-amber-700" />
                        <span>
                          Scene Spell Challenge:{' '}
                          {customMathSpell?.spellName || currentScene.mathProblem?.spellName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md border border-amber-400">
                          {mathRange} • {mathOpMode}
                        </span>
                        <button
                          onClick={handleRerollMath}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-amber-200 text-amber-950 font-bold text-[11px] border border-amber-300 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                          title="Generate a new math equation with current difficulty settings"
                        >
                          <RotateCcw className="w-3 h-3 text-amber-700" />
                          <span>New Spell</span>
                        </button>
                      </div>
                    </div>

                    {/* Visual Manipulatives (Sparkle / Gem Counting Tokens) */}
                    {showVisualCounters && customMathSpell && (
                      <div className="my-3 p-3 bg-white/90 border border-amber-200 rounded-xl flex flex-wrap items-center justify-center gap-3 select-none">
                        {/* Group 1 Tokens */}
                        <div className="flex items-center gap-1 flex-wrap justify-center">
                          {Array.from({ length: customMathSpell.num1 }).map((_, i) => (
                            <motion.button
                              key={`g1-${i}`}
                              whileTap={{ scale: 0.85 }}
                              onClick={() => soundManager.playSparkle()}
                              className="w-7 h-7 rounded-lg bg-amber-400 border border-amber-500 flex items-center justify-center text-xs shadow-xs cursor-pointer hover:bg-amber-300"
                              title={`Token ${i + 1}`}
                            >
                              ⭐
                            </motion.button>
                          ))}
                        </div>

                        {/* Operator Symbol */}
                        <span className="text-xl font-black text-amber-900 mx-1">
                          {customMathSpell.operator}
                        </span>

                        {/* Group 2 Tokens */}
                        <div className="flex items-center gap-1 flex-wrap justify-center">
                          {Array.from({ length: customMathSpell.num2 }).map((_, i) => (
                            <motion.button
                              key={`g2-${i}`}
                              whileTap={{ scale: 0.85 }}
                              onClick={() => soundManager.playSparkle()}
                              className="w-7 h-7 rounded-lg bg-sky-400 border border-sky-500 flex items-center justify-center text-xs shadow-xs cursor-pointer hover:bg-sky-300"
                              title={`Token ${i + 1}`}
                            >
                              💎
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Equation Prompt */}
                    <div className="text-center my-3">
                      <span className="text-2xl sm:text-3xl font-black font-mono bg-white px-5 py-2 rounded-xl border-2 border-amber-400 text-amber-950 shadow-inner inline-block">
                        {(customMathSpell?.problem || currentScene.mathProblem?.problem)} = ?
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 font-medium text-center mb-3">
                      💡 {customMathSpell?.hint || currentScene.mathProblem?.hint}
                    </p>

                    {/* Answer Options */}
                    <div className="flex items-center justify-center gap-3">
                      {(customMathSpell?.options || currentScene.mathProblem?.options || []).map((opt) => {
                        const correct = customMathSpell ? customMathSpell.answer : currentScene.mathProblem!.answer;
                        const isChosen = mathAnswerSelected === opt;
                        const isRight = opt === correct;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleSelectMath(opt, correct)}
                            className={`w-14 h-14 rounded-2xl text-xl font-black transition-all hover:scale-105 cursor-pointer border-2 shadow-sm ${
                              isChosen
                                ? isRight
                                  ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300'
                                  : 'bg-rose-500 text-white border-rose-600'
                                : 'bg-white hover:bg-amber-100 text-stone-900 border-amber-400'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {mathSuccess === true && (
                      <div className="mt-3 p-2.5 rounded-xl bg-emerald-100 border border-emerald-300 text-center">
                        <p className="text-xs font-black text-emerald-900">
                          ✨ Splendid arithmetic! The spell is cast with bright starlight! (+1 Star Spark⭐)
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Gentle Wild Magic Surge Notice (Playful Consequence on Misfire or Fumble) */}
                <AnimatePresence>
                  {activeSurge && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-purple-100 via-pink-50 to-amber-100 border-2 border-purple-400 text-purple-950 shadow-md"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{activeSurge.icon}</span>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-200/80 px-2 py-0.5 rounded-md">
                              Gentle Wild Magic Surge!
                            </span>
                            <h5 className="text-sm font-black text-purple-950">
                              {activeSurge.title}
                            </h5>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveSurge(null)}
                          className="px-2.5 py-1 rounded-xl bg-purple-200 hover:bg-purple-300 text-purple-950 font-bold text-xs cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-xs font-medium text-purple-900 mt-1">
                        {activeSurge.description}
                      </p>
                      <div className="mt-2 text-xs font-bold text-pink-900 bg-white/80 p-2 rounded-xl border border-pink-200">
                        🎉 Playful Consequence: {activeSurge.consequence}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dice Roll Challenge Area */}
                {currentScene.diceRoll && (
                  <div className="bg-sky-50 border-2 border-sky-300 rounded-2xl p-4 mb-4">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
                        <Dices className="w-4 h-4 text-sky-700" />
                        Roll D6 Skill Check: DC {currentScene.diceRoll.dc}+ ({currentScene.diceRoll.skill})
                      </span>
                      <button
                        onClick={() => handleRollDice(currentScene.diceRoll!.dc)}
                        className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                      >
                        <Dices className="w-4 h-4" />
                        <span>Roll D6 Die</span>
                      </button>
                    </div>
                    <p className="text-xs font-semibold text-stone-800 mb-2">
                      {currentScene.diceRoll.prompt}
                    </p>

                    {diceRollResult !== null && (
                      <div className="mt-2 p-3 bg-white rounded-xl border border-sky-300 text-xs">
                        <div className="font-black text-sm text-sky-900 mb-1">
                          🎲 You Rolled: {diceRollResult}!{' '}
                          {diceRollResult >= currentScene.diceRoll.dc ? (
                            <span className="text-emerald-700">(Success! +1 Star Spark⭐)</span>
                          ) : (
                            <span className="text-amber-700">(Gentle Fumble — Wild Magic Triggered!)</span>
                          )}
                        </div>
                        <p className="text-stone-700">
                          {diceRollResult >= currentScene.diceRoll.dc
                            ? currentScene.diceRoll.success
                            : currentScene.diceRoll.fumble}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive Scene Scavenger Hunt & Things to Find */}
                <div className="bg-emerald-50/70 border-2 border-emerald-300 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                      <Search className="w-4 h-4 text-emerald-700" />
                      <span>🔍 Things to Find &amp; Discover in this Scene</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-full">
                      Physical Tabletop &amp; In-Story
                    </span>
                  </div>

                  {/* Real-World Tabletop Room Challenge */}
                  <div className="p-3 bg-white rounded-xl border border-emerald-200 mb-2.5">
                    <span className="text-[10px] font-black uppercase text-amber-800 block mb-0.5">
                      🏠 Real-World Tabletop Hunt:
                    </span>
                    <p className="text-xs text-stone-800 font-medium">
                      {selectedDayNum <= 4 && 'Look around your real room: find an object as green or soft as forest moss!'}
                      {selectedDayNum >= 5 && selectedDayNum <= 8 && 'Look around your real room: find something as shiny or smooth as a river pebble!'}
                      {selectedDayNum >= 9 && selectedDayNum <= 12 && 'Look around your real room: find an object as sturdy as a castle shield or tower block!'}
                      {selectedDayNum >= 13 && selectedDayNum <= 16 && 'Look around your real room: find something that glitters or reflects light like an amethyst geode!'}
                      {selectedDayNum >= 17 && 'Look around your real room: find something as warm or colorful as dragon fire!'}
                    </p>
                  </div>

                  {/* In-Story Hidden Discovery Spots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      {
                        id: `scene_${selectedDayNum}_${activeSceneIdx}_secret1`,
                        title: 'Hollow Oak Nook',
                        icon: '🌿',
                        prompt: 'Search the mossy tree bark...',
                        found: 'You found a sleeping Amber Glow-Beetle! It gifts you +1 Star Spark!',
                        sparks: 1,
                      },
                      {
                        id: `scene_${selectedDayNum}_${activeSceneIdx}_secret2`,
                        title: 'Glinting Stone Crevice',
                        icon: '💎',
                        prompt: 'Inspect beneath the pebble...',
                        found: 'You uncovered a tiny Starlight Geode Shard! It hums with quiet energy!',
                        sparks: 1,
                      },
                    ].map((sec) => {
                      const isFound = discoveredSceneSecrets.includes(sec.id);
                      return (
                        <div
                          key={sec.id}
                          onClick={() => handleDiscoverSecret(sec.id, sec.title, sec.sparks)}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isFound
                              ? 'bg-emerald-100 border-emerald-400 text-emerald-950'
                              : 'bg-white hover:bg-emerald-100/50 border-stone-200 text-stone-800'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-lg">{sec.icon}</span>
                            <div className="min-w-0">
                              <div className="text-xs font-bold truncate">{sec.title}</div>
                              <div className="text-[10px] text-stone-600 truncate">
                                {isFound ? sec.found : sec.prompt}
                              </div>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-lg shrink-0 ${
                              isFound ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600'
                            }`}
                          >
                            {isFound ? '✓ Found (+1⭐)' : 'Tap to Inspect'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hero Adventure Relics Bar (Quick Item Utility) */}
                {hero.inventory && hero.inventory.length > 0 && (
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 mb-4 flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-black uppercase text-amber-900 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-700" />
                      <span>Hero Inventory Relics:</span>
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {hero.inventory.slice(0, 4).map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            soundManager.playSparkle();
                            confetti({ particleCount: 20, spread: 40, origin: { y: 0.7 } });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white hover:bg-amber-100 text-amber-950 text-xs font-bold border border-amber-300 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                          title={`${item.name}: ${item.description}`}
                        >
                          <span>{item.icon}</span>
                          <span>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scene Navigation Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                  <button
                    disabled={activeSceneIdx === 0}
                    onClick={() => setActiveSceneIdx((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-200 disabled:opacity-30 cursor-pointer flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Scene</span>
                  </button>

                  <button
                    disabled={activeSceneIdx >= activeDay.scenes.length - 1}
                    onClick={() =>
                      setActiveSceneIdx((prev) =>
                        Math.min(activeDay.scenes.length - 1, prev + 1)
                      )
                    }
                    className="px-4 py-1.5 rounded-xl text-xs font-black bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-30 cursor-pointer flex items-center gap-1"
                  >
                    <span>Next Scene</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null}

            {/* Tabletop Card To Place (THE KEY TABLETOP RESOURCE) */}
            <div className="bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200/60 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 mb-5 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{activeDay.cardToPlace.glyph}</span>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-300/80 px-2.5 py-0.5 rounded-full border border-amber-500">
                    Tabletop Card Resource: Place in Front of Child
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-800">
                  {activeDay.cardToPlace.cardNumber}
                </span>
              </div>

              {/* Physical Card Mockup on Table */}
              <div className="bg-white border-2 border-stone-800 rounded-2xl p-4 text-center shadow-md max-w-sm mx-auto my-3 relative overflow-hidden">
                <div className="text-xs font-black text-amber-700 uppercase tracking-widest border-b border-amber-200 pb-1 mb-2">
                  {activeDay.cardToPlace.title}
                </div>

                {/* Big Decodable Word or Sentence */}
                {activeDay.cardToPlace.sentence ? (
                  <div className="my-3 font-bold text-stone-800 text-base sm:text-lg bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                    &ldquo;{activeDay.cardToPlace.sentence}&rdquo;
                  </div>
                ) : (
                  <div className="my-2">
                    <div className="text-4xl sm:text-5xl font-black font-mono tracking-widest text-stone-900">
                      {activeDay.cardToPlace.word}
                    </div>

                    {/* Sound Buttons Underneath (Dots & Dashes) */}
                    <div className="flex items-center justify-center gap-4 mt-2">
                      {activeDay.cardToPlace.soundButtons?.map((btn, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          {btn === 'dash' ? (
                            <div className="w-7 h-2 bg-amber-700 rounded-full" />
                          ) : (
                            <div className="w-3.5 h-3.5 bg-amber-700 rounded-full" />
                          )}
                          <span className="text-[10px] font-bold text-stone-500 mt-1">
                            {activeDay.cardToPlace.phonemes?.[idx] || ''}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-stone-600 font-medium italic mt-2">
                  {activeDay.cardToPlace.flavor}
                </p>

                {/* Read Aloud button */}
                <button
                  onClick={() =>
                    soundManager.speak(
                      activeDay.cardToPlace.sentence ||
                        `${activeDay.cardToPlace.phonemes?.join(' ... ')} ... ${activeDay.cardToPlace.word}`
                    )
                  }
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs cursor-pointer border border-amber-300"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Hear Card Sounds</span>
                </button>
              </div>

              <p className="text-xs font-bold text-amber-900 text-center">
                💡 <span className="underline">Tabletop DM Instructions</span>: Place Card #{activeDay.cardToPlace.cardNumber.replace('CARD #', '')} face-up on the table. Have the child point to each sound button and read the card aloud!
              </p>
            </div>

            {/* Bedtime Wrap-Up Reflection */}
            <div className="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-200 text-indigo-950 mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-800 block mb-1">
                🌙 1-Minute Bedtime Starlight Reflection:
              </span>
              <p className="text-xs sm:text-sm font-medium italic leading-relaxed">
                &ldquo;{activeDay.bedtimeReflection}&rdquo;
              </p>
            </div>

            {/* Daily Journal Prompt Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 border-2 border-amber-400 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm mb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1">
                  <PenTool className="w-4 h-4 text-amber-700" />
                  <span>Adventurer&apos;s Creative Recall &amp; Journal:</span>
                </span>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  Did your hero finish today&apos;s journey? Dictate or write your memory in the Adventurer&apos;s Journal!
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveTab('journal');
                  soundManager.playSparkle();
                }}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs transition-all shadow-md cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Write / Dictate Day {activeDay.dayNumber} Entry</span>
              </button>
            </div>

            {/* Extended Chronicler's Lore & World-Building */}
            <div className="border-2 border-amber-300/80 rounded-2xl p-4 bg-amber-50/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Scroll className="w-4 h-4 text-amber-700" />
                  <span>Royal Chronicler&apos;s Field Lore ({activeDay.region}):</span>
                </span>
                <button
                  onClick={() => setShowExtendedLore(!showExtendedLore)}
                  className="text-xs font-bold text-amber-800 hover:underline cursor-pointer"
                >
                  {showExtendedLore ? '▲ Hide Lore' : '▼ Read Deep Lore'}
                </button>
              </div>

              {showExtendedLore && (
                <div className="mt-3 pt-3 border-t border-amber-200 text-xs sm:text-sm text-stone-700 font-medium space-y-2 leading-relaxed">
                  <p>
                    {activeDay.extendedLore ||
                      `In ancient times before the great divide, King Alden's ancestors forged an eternal peace treaty with the four elemental dragons: Pyra of the Fire Summit, Zephyr of the Whispering Woods, Aquilon of the Four Winds River, and Solara of the Starlight Heavens. Each dragon gifted a constellation of runes to the realm, engraved upon sacred stones so that young scholars could harness the elements with words of kindness and mental math clarity.`}
                  </p>
                  <p className="text-stone-600 italic">
                    The creatures of {activeDay.region} still remember the ancient pact. When an adventurer speaks with clear phonemes and solves arithmetic puzzles with patience, the forest glows with starlight magic that protects all travelers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* AI Art Studio Modal for Daily Campaign Scenes */}
      {isArtStudioOpen && (
        <ArtStudioModal
          hero={hero}
          initialPrompt={artStudioPrompt}
          initialImage={artStudioInitialImage}
          onClose={() => setIsArtStudioOpen(false)}
          onSaveCustomArt={(imgUrl) => {
            handleSaveCustomDailyArt(imgUrl);
            setIsArtStudioOpen(false);
          }}
        />
      )}
    </div>
  );
};
