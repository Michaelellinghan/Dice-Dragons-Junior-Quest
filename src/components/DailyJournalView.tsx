import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero, DailyJournalEntry, DailyCampaign } from '../types';
import { DAILY_CAMPAIGNS } from '../data/dailyCampaigns';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  generateJournalEntryPdf,
  generateFullJournalPdf,
} from '../utils/pdfGenerator';
import {
  BookOpen,
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Save,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  Smile,
  PenTool,
  RotateCcw,
  CheckCircle,
  Award,
  Calendar,
  Layers,
  Heart,
  Star,
  Check,
  Compass,
} from 'lucide-react';

interface DailyJournalViewProps {
  hero: Hero;
  activeDayNumber: number;
  onSelectDay: (dayNum: number) => void;
  onHeroUpdate?: (updated: Hero) => void;
  onBackToQuest?: () => void;
}

const MOODS: { id: DailyJournalEntry['heroMood']; label: string; icon: string; desc: string }[] = [
  { id: 'brave', label: 'Brave & Bold', icon: '🦁', desc: 'Faced challenges with courage!' },
  { id: 'curious', label: 'Curious Explorer', icon: '🧭', desc: 'Discovered exciting new secrets!' },
  { id: 'clever', label: 'Clever Thinker', icon: '🧙‍♂️', desc: 'Solved puzzles & math spells!' },
  { id: 'joyful', label: 'Joyful & Happy', icon: '🌈', desc: 'Full of smiles and giggles!' },
  { id: 'calm', label: 'Calm & Peaceful', icon: '🌙', desc: 'Relaxed under the starlight.' },
  { id: 'proud', label: 'Proud Hero', icon: '👑', desc: 'Completed today\'s great quest!' },
];

const AVAILABLE_STICKERS = [
  { id: 'star', emoji: '🌟', name: 'Starlight Spark' },
  { id: 'dragon', emoji: '🐉', name: 'Friendly Dragon' },
  { id: 'paw', emoji: '🐾', name: 'Puppy Pawprint' },
  { id: 'shield', emoji: '🛡️', name: 'Hero Shield' },
  { id: 'sword', emoji: '🗡️', name: 'Crystal Wand' },
  { id: 'scroll', emoji: '📜', name: 'Rune Scroll' },
  { id: 'gem', emoji: '💎', name: 'Prehistoric Gem' },
  { id: 'crown', emoji: '👑', name: 'Royal Crown' },
  { id: 'owl', emoji: '🦉', name: 'Wise Owl' },
  { id: 'compass', emoji: '🧭', name: 'Brass Compass' },
  { id: 'shroom', emoji: '🍄', name: 'Glow Shroom' },
  { id: 'tree', emoji: '🌲', name: 'Whisper Pine' },
  { id: 'fire', emoji: '🔥', name: 'Warm Ember' },
  { id: 'snow', emoji: '❄️', name: 'Frost Flake' },
  { id: 'flower', emoji: '🌸', name: 'Fairy Blossom' },
];

export const DailyJournalView: React.FC<DailyJournalViewProps> = ({
  hero,
  activeDayNumber,
  onSelectDay,
  onHeroUpdate,
  onBackToQuest,
}) => {
  const [currentDayNum, setCurrentDayNum] = useState<number>(activeDayNumber || 1);
  const [journalEntries, setJournalEntries] = useState<Record<number, DailyJournalEntry>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_journal_entries');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  // Active entry fields
  const [summaryText, setSummaryText] = useState<string>('');
  const [heroMood, setHeroMood] = useState<DailyJournalEntry['heroMood']>('brave');
  const [favoritePart, setFavoritePart] = useState<string>('');
  const [selectedStickers, setSelectedStickers] = useState<string[]>([]);
  const [drawingDataUrl, setDrawingDataUrl] = useState<string | undefined>(undefined);

  // Dictation & Audio state
  const [isDictating, setIsDictating] = useState<boolean>(false);
  const [speechSupported, setSpeechSupported] = useState<boolean>(false);
  const [dictationStatus, setDictationStatus] = useState<string>('');
  const recognitionRef = useRef<any>(null);

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [brushColor, setBrushColor] = useState<string>('#b45309'); // Amber brown default
  const [brushSize, setBrushSize] = useState<number>(3);
  const [showCanvas, setShowCanvas] = useState<boolean>(false);

  // Notification toast
  const [showSavedToast, setShowSavedToast] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const activeCampaign: DailyCampaign =
    DAILY_CAMPAIGNS.find((c) => c.dayNumber === currentDayNum) || DAILY_CAMPAIGNS[0];

  // Check speech recognition capability on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSpeechSupported(true);
      }
    }
  }, []);

  // Load entry when day changes
  useEffect(() => {
    const existing = journalEntries[currentDayNum];
    if (existing) {
      setSummaryText(existing.summaryText || '');
      setHeroMood(existing.heroMood || 'brave');
      setFavoritePart(existing.favoritePart || '');
      setSelectedStickers(existing.stickers || []);
      setDrawingDataUrl(existing.drawingDataUrl);
    } else {
      // Default initial text with day-specific starter
      setSummaryText('');
      setHeroMood('brave');
      setFavoritePart('');
      setSelectedStickers([AVAILABLE_STICKERS[0].emoji]);
      setDrawingDataUrl(undefined);
    }
    // Stop any active dictation
    if (recognitionRef.current && isDictating) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      setIsDictating(false);
    }
  }, [currentDayNum]);

  // Handle Speech Recognition Dictation
  const toggleDictation = () => {
    if (!speechSupported) {
      setDictationStatus('Speech recognition is not supported in this browser. You can type or pick prompt starters!');
      setTimeout(() => setDictationStatus(''), 4000);
      return;
    }

    if (isDictating) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
      setIsDictating(false);
      setDictationStatus('Dictation paused.');
      setTimeout(() => setDictationStatus(''), 2000);
    } else {
      try {
        const SpeechRecognition =
          (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-GB';

        recognition.onstart = () => {
          setIsDictating(true);
          setDictationStatus('🎙️ Listening... Tell me your adventure!');
          soundManager.playSparkle();
        };

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          if (currentTranscript.trim()) {
            setSummaryText((prev) => {
              const prefix = prev.trim() ? prev.trim() + ' ' : '';
              return prefix + currentTranscript;
            });
          }
        };

        recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          setIsDictating(false);
          setDictationStatus(`Microphone notice: ${event.error === 'not-allowed' ? 'Please allow microphone access' : 'Could not hear clearly. Try again!'}`);
          setTimeout(() => setDictationStatus(''), 4000);
        };

        recognition.onend = () => {
          setIsDictating(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err) {
        console.error('Failed to start dictation:', err);
        setIsDictating(false);
        setDictationStatus('Could not access microphone.');
        setTimeout(() => setDictationStatus(''), 3000);
      }
    }
  };

  // Add starter phrase into summary
  const handleAddStarter = (phrase: string) => {
    soundManager.playClick();
    setSummaryText((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) {
        return phrase + ' ';
      }
      return `${trimmed} ${phrase} `;
    });
  };

  // Toggle Sticker
  const handleToggleSticker = (emoji: string) => {
    soundManager.playSparkle();
    if (selectedStickers.includes(emoji)) {
      setSelectedStickers(selectedStickers.filter((s) => s !== emoji));
    } else {
      if (selectedStickers.length < 8) {
        setSelectedStickers([...selectedStickers, emoji]);
      }
    }
  };

  // Read Journal Aloud using TTS
  const handleReadAloud = () => {
    if (!summaryText.trim()) {
      soundManager.speak(`Day ${currentDayNum}: ${activeCampaign.title}. Write or dictate your adventure summary first, junior explorer!`);
      return;
    }
    setIsSpeaking(true);
    soundManager.playSparkle();
    const textToSpeak = `Day ${currentDayNum}: ${activeCampaign.title}. My hero, ${hero.name}, felt ${heroMood} today. Here is my adventure: ${summaryText}. My favorite part was: ${favoritePart || 'exploring the realm'}.`;
    soundManager.speak(textToSpeak);
    setTimeout(() => setIsSpeaking(false), 5000);
  };

  // Save Entry
  const handleSaveEntry = () => {
    soundManager.playVictory();
    const wordCount = summaryText.trim().split(/\s+/).filter(Boolean).length;
    let drawingUrl = drawingDataUrl;

    if (canvasRef.current) {
      try {
        drawingUrl = canvasRef.current.toDataURL('image/png');
        setDrawingDataUrl(drawingUrl);
      } catch {
        // ignore
      }
    }

    const newEntry: DailyJournalEntry = {
      dayNumber: currentDayNum,
      entryDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      summaryText,
      heroMood,
      favoritePart,
      stickers: selectedStickers,
      drawingDataUrl: drawingUrl,
      wordsCount: wordCount,
    };

    const updated = {
      ...journalEntries,
      [currentDayNum]: newEntry,
    };

    setJournalEntries(updated);
    try {
      localStorage.setItem('dice_dragons_journal_entries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Award bonus Star Spark for creative writing if > 10 words
    if (wordCount >= 10 && onHeroUpdate) {
      onHeroUpdate({
        ...hero,
        starSparks: hero.starSparks + 1,
      });
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });
    }

    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2500);
  };

  // Canvas Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (canvasRef.current) {
      setDrawingDataUrl(canvasRef.current.toDataURL('image/png'));
    }
  };

  const clearCanvas = () => {
    soundManager.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDrawingDataUrl(undefined);
  };

  // Load existing drawing onto canvas when canvas is opened
  useEffect(() => {
    if (showCanvas && drawingDataUrl && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new Image();
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
        img.src = drawingDataUrl;
      }
    }
  }, [showCanvas, drawingDataUrl]);

  // Current entry word count
  const wordsCount = summaryText.trim().split(/\s+/).filter(Boolean).length;

  // Day specific sentence starters
  const defaultStarters =
    activeCampaign.creativeWritingPrompts && activeCampaign.creativeWritingPrompts.length > 0
      ? activeCampaign.creativeWritingPrompts
      : [
          `Today our party explored ${activeCampaign.region}...`,
          `We uncovered Card #${activeCampaign.cardToPlace.cardNumber.replace('CARD #', '')} and read "${activeCampaign.cardToPlace.word || activeCampaign.cardToPlace.title}"!`,
          `My hero's bravest moment was...`,
          `When we rolled the D6 die, we...`,
          `We cast the ${activeCampaign.mathChallenge.spellName} spell!`,
          `The funniest thing that happened today was...`,
        ];

  return (
    <div id="daily-journal-view" className="w-full max-w-6xl mx-auto p-3 sm:p-6">
      {/* Top Navigation Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 text-white rounded-3xl p-6 shadow-xl mb-6 border-4 border-amber-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-2xl">📜✍️</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3 py-0.5 rounded-full border border-amber-500">
                Adventurer&apos;s Creative Writing &amp; Recall Journal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-100">
              The Hero&apos;s Adventure Chronicle
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 max-w-2xl font-medium mt-1">
              Speak or write your heroic memories! Practicing story recall, imaginative adjectives, and sentence crafting after every daily campaign.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onBackToQuest && (
              <button
                onClick={onBackToQuest}
                className="px-4 py-2 rounded-2xl bg-amber-700 hover:bg-amber-600 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Return to Quest</span>
              </button>
            )}

            <button
              onClick={() => {
                soundManager.playSparkle();
                generateJournalEntryPdf(hero, activeCampaign, {
                  dayNumber: currentDayNum,
                  entryDate: new Date().toLocaleDateString('en-GB'),
                  summaryText,
                  heroMood,
                  favoritePart,
                  stickers: selectedStickers,
                  drawingDataUrl,
                  wordsCount,
                });
              }}
              className="px-3.5 py-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              title="Download this journal page as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Page (PDF)</span>
            </button>

            <button
              onClick={() => {
                soundManager.playSparkle();
                generateFullJournalPdf(hero, journalEntries);
              }}
              className="px-3.5 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              title="Download complete journal collection as PDF"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Full Chronicle (PDF)</span>
            </button>
          </div>
        </div>

        {/* 20-Day Scroller Bar */}
        <div className="mt-5 pt-4 border-t border-amber-700/60">
          <div className="flex items-center justify-between gap-2 mb-2 text-xs text-amber-200 font-bold">
            <span>Select Adventure Day to Record:</span>
            <span>
              {Object.keys(journalEntries).length} / 20 Journal Entries Written
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {DAILY_CAMPAIGNS.map((camp) => {
              const isSelected = camp.dayNumber === currentDayNum;
              const hasEntry = !!journalEntries[camp.dayNumber]?.summaryText?.trim();

              return (
                <button
                  key={camp.dayNumber}
                  onClick={() => {
                    setCurrentDayNum(camp.dayNumber);
                    onSelectDay(camp.dayNumber);
                    soundManager.playSparkle();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-amber-400 text-amber-950 border-amber-300 shadow-md scale-105 ring-2 ring-amber-300'
                      : hasEntry
                      ? 'bg-emerald-800/80 text-emerald-100 border-emerald-600 hover:bg-emerald-700'
                      : 'bg-amber-950/60 text-amber-200 hover:bg-amber-900 border-amber-700/60'
                  }`}
                >
                  <span>Day {camp.dayNumber}</span>
                  {hasEntry ? (
                    <CheckCircle className="w-3 h-3 text-emerald-300 fill-emerald-500" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Journal Editor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Today's Quest Recap & Parent DM Prompts */}
        <div className="lg:col-span-4 space-y-4">
          {/* Day Mission Summary Card */}
          <div className="bg-amber-50/90 border-3 border-amber-300 rounded-3xl p-5 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-200 px-2.5 py-0.5 rounded-full">
                Day {activeCampaign.dayNumber} Mission
              </span>
              <span className="text-xs font-bold text-stone-500">
                {activeCampaign.region}
              </span>
            </div>

            <h3 className="text-lg font-black font-fantasy text-amber-950">
              {activeCampaign.title}
            </h3>
            <p className="text-xs text-stone-600 font-medium mt-1 mb-3">
              {activeCampaign.subtitle}
            </p>

            {/* Tabletop Card & Spell Info */}
            <div className="space-y-2 bg-white/80 border border-amber-200 rounded-2xl p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-600">Tabletop Rune:</span>
                <span className="font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-lg">
                  {activeCampaign.cardToPlace.glyph} &ldquo;{activeCampaign.cardToPlace.word || activeCampaign.cardToPlace.title}&rdquo;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-600">Magic Spell:</span>
                <span className="font-black text-amber-900">
                  {activeCampaign.mathChallenge.spellName} ({activeCampaign.mathChallenge.problem} = {activeCampaign.mathChallenge.answer})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-600">Bedtime Star:</span>
                <span className="font-bold text-amber-700">
                  +{activeCampaign.reward.sparks} Sparks
                </span>
              </div>
            </div>
          </div>

          {/* DM / Parent Narrative Recall Prompts */}
          <div className="bg-purple-50/90 border-3 border-purple-200 rounded-3xl p-5 shadow-md text-purple-950">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-700" />
              <h4 className="text-xs font-black uppercase tracking-wider text-purple-900">
                Parent &amp; DM Creative Recall Prompts:
              </h4>
            </div>
            <p className="text-xs text-purple-800 font-medium mb-3">
              Ask these gentle questions to guide your child before writing or dictating:
            </p>
            <ul className="space-y-2 text-xs font-semibold text-purple-900">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600">1.</span>
                <span>&ldquo;Where did our adventure begin today, and who did we meet first?&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600">2.</span>
                <span>&ldquo;What obstacle stopped us, and how did we sound out the card or cast the spell to overcome it?&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600">3.</span>
                <span>&ldquo;How did your hero feel when the die rolled? Were you brave or laughing?&rdquo;</span>
              </li>
            </ul>
          </div>

          {/* Hero Mood Picker */}
          <div className="bg-white border-3 border-amber-300 rounded-3xl p-5 shadow-md">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-950 mb-3 flex items-center gap-1.5">
              <Smile className="w-4 h-4 text-amber-700" />
              <span>How Did Your Hero Feel Today?</span>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setHeroMood(m.id);
                    soundManager.playClick();
                  }}
                  className={`p-2.5 rounded-2xl text-left border-2 transition-all cursor-pointer flex items-center gap-2 ${
                    heroMood === m.id
                      ? 'bg-amber-100 border-amber-600 text-amber-950 shadow-sm ring-1 ring-amber-400'
                      : 'bg-stone-50 hover:bg-amber-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-xl">{m.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-black truncate">{m.label}</div>
                    <div className="text-[10px] text-stone-500 truncate">{m.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Writing Canvas, Dictation, Stickers & Sketch */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white border-4 border-amber-400 rounded-3xl p-5 sm:p-7 shadow-xl relative">
            {/* Journal Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-amber-200 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-fantasy text-amber-800">
                  Day {currentDayNum}:
                </span>
                <span className="text-base sm:text-lg font-black text-stone-800">
                  {hero.name}&apos;s Daily Entry
                </span>
              </div>

              {/* Dictation & Audio Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleDictation}
                  className={`px-3.5 py-2 rounded-2xl font-black text-xs transition-all shadow-md cursor-pointer flex items-center gap-2 ${
                    isDictating
                      ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-300'
                      : 'bg-amber-500 hover:bg-amber-400 text-amber-950'
                  }`}
                  title={isDictating ? 'Stop dictation' : 'Click to dictate adventure with microphone'}
                >
                  {isDictating ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      <span>Stop Listening</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      <span>Dictate Adventure</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleReadAloud}
                  className="px-3.5 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-black text-xs transition-colors cursor-pointer border border-amber-300 flex items-center gap-1.5"
                  title="Listen to your written adventure read aloud"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Read to Me</span>
                </button>
              </div>
            </div>

            {/* Dictation Live Status Bar */}
            {dictationStatus && (
              <div className="mb-3 p-2.5 bg-amber-100/90 border border-amber-400 rounded-xl text-xs font-bold text-amber-900 text-center animate-pulse">
                {dictationStatus}
              </div>
            )}

            {/* Sentence Starter Chips */}
            <div className="mb-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 block mb-1.5">
                💡 Tap a Sentence Starter to Begin:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {defaultStarters.map((starter, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleAddStarter(starter)}
                    className="text-xs font-bold bg-amber-50 hover:bg-amber-200 text-amber-950 px-3 py-1.5 rounded-xl border border-amber-300 transition-colors cursor-pointer text-left"
                  >
                    + {starter}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Creative Textarea */}
            <div className="mb-4 relative">
              <label
                htmlFor="journal-summary-input"
                className="text-xs font-black uppercase tracking-wider text-stone-700 block mb-1"
              >
                Adventurer&apos;s Summary:
              </label>
              <textarea
                id="journal-summary-input"
                value={summaryText}
                onChange={(e) => setSummaryText(e.target.value)}
                placeholder="What happened today? Speak into your microphone or write here! E.g. 'Today we crossed the Whispering Woods. We placed Card #01 and sounded out /c/ /a/ /t/. Then we cast Sparkbolt Bloom and leaped over the creek rocks with a roll of 5!'"
                rows={6}
                className="w-full p-4 rounded-2xl border-2 border-amber-300 bg-amber-50/40 focus:bg-white focus:border-amber-600 focus:outline-none text-stone-800 font-medium text-sm sm:text-base leading-relaxed resize-none shadow-inner"
              />

              {/* Live Words & Spark Counter */}
              <div className="flex items-center justify-between text-xs text-stone-500 mt-1 px-1 font-semibold">
                <div className="flex items-center gap-2">
                  <span>Words: {wordsCount}</span>
                  {wordsCount >= 10 ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      Splendid! +1 Star Spark bonus earned!
                    </span>
                  ) : (
                    <span className="text-amber-700">
                      (Write 10+ words to earn a Star Spark!)
                    </span>
                  )}
                </div>

                {summaryText && (
                  <button
                    onClick={() => setSummaryText('')}
                    className="text-stone-400 hover:text-rose-600 text-xs font-bold cursor-pointer"
                  >
                    Clear Text
                  </button>
                )}
              </div>
            </div>

            {/* Favorite Part Prompt */}
            <div className="mb-5">
              <label
                htmlFor="journal-fav-part"
                className="text-xs font-black uppercase tracking-wider text-stone-700 block mb-1"
              >
                🌟 What was your favorite moment of the quest today?
              </label>
              <input
                id="journal-fav-part"
                type="text"
                value={favoritePart}
                onChange={(e) => setFavoritePart(e.target.value)}
                placeholder="e.g. Giving the lost puppy squire travel biscuits and laughing at his tail wag!"
                className="w-full p-3 rounded-xl border-2 border-amber-200 bg-stone-50 focus:bg-white focus:border-amber-500 focus:outline-none text-xs sm:text-sm text-stone-800 font-medium"
              />
            </div>

            {/* Magical Stickers Bar */}
            <div className="mb-5 p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Stamp Stickers on Your Journal Page:</span>
                </span>
                <span className="text-[11px] font-bold text-stone-500">
                  {selectedStickers.length} / 8 Stamped
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {AVAILABLE_STICKERS.map((stk) => {
                  const isStamped = selectedStickers.includes(stk.emoji);
                  return (
                    <button
                      key={stk.id}
                      onClick={() => handleToggleSticker(stk.emoji)}
                      className={`px-2.5 py-1.5 rounded-xl text-lg transition-transform cursor-pointer border ${
                        isStamped
                          ? 'bg-amber-300 border-amber-600 shadow-md scale-110 ring-2 ring-amber-400'
                          : 'bg-white hover:bg-amber-100 border-stone-200 hover:scale-105'
                      }`}
                      title={stk.name}
                    >
                      {stk.emoji}
                    </button>
                  );
                })}
              </div>

              {selectedStickers.length > 0 && (
                <div className="mt-3 pt-2 border-t border-amber-200 flex items-center gap-2 text-xs font-bold text-amber-950">
                  <span>Current Stamps:</span>
                  <div className="flex items-center gap-1.5 text-xl">
                    {selectedStickers.map((s, idx) => (
                      <span key={idx} className="animate-bounce" style={{ animationDelay: `${idx * 120}ms` }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Optional Doodle & Drawing Pad Toggle */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setShowCanvas(!showCanvas)}
                  className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>{showCanvas ? 'Hide Drawing Canvas' : 'Draw a Picture for Today (Crayon Sketchpad)'}</span>
                </button>
                {drawingDataUrl && !showCanvas && (
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Picture saved with entry!
                  </span>
                )}
              </div>

              {showCanvas && (
                <div className="p-4 bg-amber-50/80 border-2 border-amber-300 rounded-2xl">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      {['#b45309', '#dc2626', '#16a34a', '#2563eb', '#9333ea', '#1c1917'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setBrushColor(c)}
                          style={{ backgroundColor: c }}
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
                            brushColor === c ? 'scale-125 border-amber-900 shadow-md ring-2 ring-white' : 'border-white'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={clearCanvas}
                        className="px-2.5 py-1 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-[11px] font-bold cursor-pointer flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" /> Clear
                      </button>
                    </div>
                  </div>

                  <canvas
                    ref={canvasRef}
                    width={560}
                    height={200}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-48 bg-white border-2 border-dashed border-amber-400 rounded-xl cursor-crosshair touch-none shadow-inner"
                  />
                  <p className="text-[11px] text-stone-500 text-center mt-1">
                    🎨 Use your mouse or finger to draw your favorite creature or scene!
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions: Save Entry & Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-amber-200">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentDayNum <= 1}
                  onClick={() => {
                    setCurrentDayNum((prev) => Math.max(1, prev - 1));
                    onSelectDay(Math.max(1, currentDayNum - 1));
                    soundManager.playSparkle();
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-100 disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Day</span>
                </button>

                <button
                  disabled={currentDayNum >= 20}
                  onClick={() => {
                    setCurrentDayNum((prev) => Math.min(20, prev + 1));
                    onSelectDay(Math.min(20, currentDayNum + 1));
                    soundManager.playSparkle();
                  }}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-100 disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  <span>Next Day</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveEntry}
                  className="px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs sm:text-sm transition-all shadow-lg cursor-pointer flex items-center gap-2 hover:scale-105"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Adventure Entry</span>
                </button>
              </div>
            </div>

            {/* Save Toast Notification */}
            <AnimatePresence>
              {showSavedToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 right-6 bg-emerald-700 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-black z-20 border border-emerald-400"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Adventure entry saved in your royal chronicle!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
