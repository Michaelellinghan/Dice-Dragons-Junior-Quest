import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero, StoryNode, StoryChoice } from '../types';
import { STORY_NODES } from '../data/storyCampaign';
import { PhonicsPuzzleModal } from './PhonicsPuzzleModal';
import { GeographyHistoryModal } from './GeographyHistoryModal';
import { DiceRoller } from './DiceRoller';
import { soundManager } from '../utils/audio';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { ArtStudioModal } from './ArtStudioModal';
import {
  Volume2,
  Scroll,
  Sparkles,
  ChevronRight,
  Music,
  MapPin,
  Flame,
  Shield,
  Compass,
  Palette,
  Wand2,
} from 'lucide-react';

interface StoryQuestViewProps {
  hero: Hero;
  currentNodeId: string;
  onNavigateNode: (nodeId: string) => void;
  onTriggerDragonArena: (dragonId: string) => void;
  onHeroUpdate: (updatedHero: Hero) => void;
  onOpenDailyCampaigns?: () => void;
}

export const StoryQuestView: React.FC<StoryQuestViewProps> = ({
  hero,
  currentNodeId,
  onNavigateNode,
  onTriggerDragonArena,
  onHeroUpdate,
}) => {
  const [showDmNotes, setShowDmNotes] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [itemGainedBanner, setItemGainedBanner] = useState<string | null>(null);
  const [companionTip, setCompanionTip] = useState<string | null>(null);
  const [readingPace, setReadingPace] = useState<'gentle' | 'normal'>('gentle');
  const [isArtStudioOpen, setIsArtStudioOpen] = useState(false);
  const [artStudioPrompt, setArtStudioPrompt] = useState('');
  const [artStudioInitialImage, setArtStudioInitialImage] = useState<string | undefined>(undefined);
  const [customStoryArt, setCustomStoryArt] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_custom_story_art');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const handleSaveCustomStoryArt = (imgUrl: string) => {
    const updated = { ...customStoryArt, [currentNodeId]: imgUrl };
    setCustomStoryArt(updated);
    try {
      localStorage.setItem('dice_dragons_custom_story_art', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const node: StoryNode = STORY_NODES[currentNodeId] || STORY_NODES['act1_intro'];

  const handleSpeakNarration = () => {
    const rate = readingPace === 'gentle' ? 0.82 : 1.0;
    soundManager.speak(node.narration, undefined, rate);
  };

  const handleChoiceClick = (choice: StoryChoice) => {
    soundManager.playClick();

    // Gain item if any
    if (choice.gainItem) {
      soundManager.playSparkle();
      setItemGainedBanner(`🎒 Found item: ${choice.gainItem.name}!`);
      onHeroUpdate({
        ...hero,
        inventory: [...hero.inventory, choice.gainItem],
        starSparks: hero.starSparks + 1,
      });
      setTimeout(() => setItemGainedBanner(null), 3000);
    }

    if (choice.targetNodeId === 'dragon_arena_trigger' || node.dragonBattleId) {
      onTriggerDragonArena(node.dragonBattleId || 'solara');
    } else {
      setChallengeCompleted(false);
      onNavigateNode(choice.targetNodeId);
      // Auto-narrate the new node at chosen rate
      setTimeout(() => {
        const nextNode = STORY_NODES[choice.targetNodeId];
        if (nextNode) {
          const rate = readingPace === 'gentle' ? 0.82 : 1.0;
          soundManager.speak(nextNode.narration, undefined, rate);
        }
      }, 400);
    }
  };

  // Background visual themes
  const getThemeBg = () => {
    switch (node.backgroundTheme) {
      case 'forest':
        return 'from-emerald-900/10 via-amber-50 to-amber-100/90 border-emerald-300';
      case 'castle':
        return 'from-stone-200/40 via-amber-50 to-amber-100/90 border-stone-300';
      case 'cavern':
        return 'from-purple-900/10 via-amber-50 to-indigo-100/90 border-purple-300';
      case 'starlight':
        return 'from-indigo-900/20 via-amber-50 to-yellow-100/90 border-amber-400';
      default:
        return 'from-amber-100/50 via-amber-50 to-orange-50 border-amber-300';
    }
  };

  const getThemeIcon = () => {
    switch (node.backgroundTheme) {
      case 'forest':
        return '🌲🌿🦉';
      case 'castle':
        return '🏰🛡️👑';
      case 'cavern':
        return '💎🔮🦇';
      case 'starlight':
        return '✨🐉🌟';
      default:
        return '📜🗺️🧭';
    }
  };

  // Companion party interactions
  const triggerCompanionBark = (companionId: string) => {
    soundManager.playSparkle();
    let text = '';
    if (companionId === 'puppy_companion') {
      text = 'Pip the Puppy Squire barks: "Woof woof! I smell adventure ahead! Remember to blend every sound button with your finger!"';
    } else if (companionId === 'owl_feather') {
      text = 'Professor Hoot whispers through the feather: "Hoo-hoo! Listen carefully to the initial sounds: /c/, /s/, /d/!"';
    } else if (companionId === 'singing_acorn') {
      text = 'The Singing Acorn hums: "La-la-la! Take a deep breath, brave hero! Nature is cheering for you!"';
    } else if (companionId === 'knightly_shield') {
      text = 'Sir Barnaby\'s token shines: "Stand tall, junior knight! Courage and honesty are the greatest shields!"';
    } else if (companionId === 'weather_vane_token') {
      text = 'Master Dylan\'s compass spins: "Never Eat Shredded Wheat! North is directly towards the mountains!"';
    } else if (companionId === 'ruby_scale' || companionId === 'pyra_ember_badge') {
      text = 'Sparky chirps: "Hic! Keep cozy and warm! 4 plus 4 equals 8!"';
    } else {
      text = 'Your magical relic warms with friendly starlight energy!';
    }
    setCompanionTip(text);
    soundManager.speak(text);
    setTimeout(() => setCompanionTip(null), 5000);
  };

  return (
    <div id="story-quest-view" className="w-full max-w-4xl mx-auto p-3 sm:p-6 space-y-4">
      {/* Item Gained Notification Banner */}
      <AnimatePresence>
        {itemGainedBanner && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-emerald-500 text-white font-extrabold text-sm sm:text-base py-3 px-5 rounded-2xl shadow-xl flex items-center justify-center gap-2 border-2 border-emerald-400"
          >
            <Sparkles className="w-5 h-5" />
            {itemGainedBanner}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Companion Tip Balloon */}
      <AnimatePresence>
        {companionTip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-amber-100 border-2 border-amber-400 text-amber-950 font-bold text-xs sm:text-sm p-3.5 rounded-2xl shadow-md flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐕✨</span>
              <span>{companionTip}</span>
            </div>
            <button
              onClick={() => setCompanionTip(null)}
              className="text-amber-800 hover:text-amber-950 text-xs font-black cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric Soundscapes & Audio Controls Bar */}
      <div className="bg-amber-100/70 border border-amber-300/80 rounded-2xl p-2.5 sm:p-3 flex flex-wrap items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-xs font-black text-amber-900 uppercase flex items-center gap-1 mr-1 shrink-0">
            <Music className="w-3.5 h-3.5 text-amber-700" />
            Ambience:
          </span>
          <button
            onClick={() => soundManager.playForestChime()}
            className="px-2.5 py-1 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 text-xs font-bold transition-all border border-emerald-300 cursor-pointer whitespace-nowrap"
            title="Forest chimes"
          >
            🌲 Woods Chime
          </button>
          <button
            onClick={() => soundManager.playCastleFanfare()}
            className="px-2.5 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold transition-all border border-stone-300 cursor-pointer whitespace-nowrap"
            title="Castle fanfare"
          >
            🏰 Castle Fanfare
          </button>
          <button
            onClick={() => soundManager.playCavernEcho()}
            className="px-2.5 py-1 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-950 text-xs font-bold transition-all border border-purple-300 cursor-pointer whitespace-nowrap"
            title="Cavern echo"
          >
            💎 Crystal Echo
          </button>
          <button
            onClick={() => soundManager.playDragonRumble()}
            className="px-2.5 py-1 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-950 text-xs font-bold transition-all border border-rose-300 cursor-pointer whitespace-nowrap"
            title="Dragon rumble"
          >
            🐲 Dragon Rumble
          </button>
        </div>

        {/* Reading Pace Selector */}
        <div className="flex items-center gap-1 text-xs font-bold text-amber-900">
          <span className="text-[11px] opacity-75">Voice Pace:</span>
          <button
            onClick={() => {
              soundManager.playClick();
              setReadingPace('gentle');
            }}
            className={`px-2 py-0.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              readingPace === 'gentle'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white hover:bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            Gentle (0.8x)
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setReadingPace('normal');
            }}
            className={`px-2 py-0.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
              readingPace === 'normal'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white hover:bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            Normal (1.0x)
          </button>
        </div>
      </div>

      {/* Main Parchment Storybook Container */}
      <div
        className={`bg-gradient-to-br ${getThemeBg()} border-4 rounded-3xl p-5 sm:p-8 shadow-2xl transition-colors relative overflow-hidden`}
      >
        {/* Top Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-amber-200/80 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl select-none">{getThemeIcon()}</span>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                {node.actTitle}
              </span>
              <h2 className="text-xl sm:text-3xl font-black font-fantasy text-amber-950 mt-0.5">
                {node.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Read Aloud Narration Button */}
            <button
              id="read-aloud-btn"
              onClick={handleSpeakNarration}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-200/90 hover:bg-amber-300 text-amber-950 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer border border-amber-400 shadow-sm"
              title="Listen to story narrator"
            >
              <Volume2 className="w-4 h-4 text-amber-800" />
              <span>Read Aloud</span>
            </button>

            {/* DM Secrets toggle */}
            <button
              onClick={() => setShowDmNotes(!showDmNotes)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer border ${
                showDmNotes
                  ? 'bg-purple-600 text-white border-purple-700'
                  : 'bg-white/80 hover:bg-purple-100 text-purple-950 border-purple-300'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>DM Guide</span>
            </button>
          </div>
        </div>

        {/* Parent / DM Teacher Notes Panel */}
        {showDmNotes && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-4 mb-5 text-purple-950 text-xs sm:text-sm shadow-inner"
          >
            <div className="flex items-center gap-2 font-black uppercase text-[11px] text-purple-800 tracking-wider mb-1">
              <Scroll className="w-4 h-4 text-purple-700" />
              <span>Dungeon Master Secret Notes (For Parents & Teachers):</span>
            </div>
            <p className="font-semibold leading-relaxed">{node.dmNotes}</p>
          </motion.div>
        )}

        {/* WHIMSICAL STORY SCENE ILLUSTRATION (Every Page / Node) */}
        {(() => {
          const displayImage =
            customStoryArt[currentNodeId] ||
            node.imageUrl ||
            (ADVENTURE_ASSETS.storyScenes as Record<string, { imageUrl?: string }>)[currentNodeId]?.imageUrl ||
            ADVENTURE_ASSETS.pages.storyQuest.bannerUrl;

          return (
            <div className="relative mb-5 rounded-2xl overflow-hidden border-3 border-amber-300/90 shadow-lg bg-stone-900 group">
              <img
                src={displayImage}
                alt={node.title}
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* AI Image Generation & Edit Button */}
              <button
                onClick={() => {
                  soundManager.playSparkle();
                  setArtStudioPrompt(
                    `A charming, whimsical children's book watercolor illustration for a fantasy story scene: "${node.title}". ${node.narration.slice(0, 160)}, vibrant storybook art style, highly detailed.`
                  );
                  setArtStudioInitialImage(displayImage);
                  setIsArtStudioOpen(true);
                }}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1.5 shadow-lg border border-amber-300 transition-all cursor-pointer hover:scale-105"
                title="Create or edit this scene's illustration using Gemini AI"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>{customStoryArt[currentNodeId] ? '✨ Edit AI Art' : '🎨 Paint Scene with AI'}</span>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-900/60 to-transparent p-3.5 text-amber-100 text-xs sm:text-sm font-semibold flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{node.imageCaption || `Scene: ${node.title}`}</span>
                </div>
                {customStoryArt[currentNodeId] && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-amber-950 px-2 py-0.5 rounded-md">
                    Custom AI Artwork
                  </span>
                )}
              </div>
            </div>
          );
        })()}

        {/* Primary Storybook Narration Box */}
        <div className="bg-white/95 border-2 border-amber-300/80 rounded-2xl p-5 sm:p-6 mb-5 shadow-sm">
          <p className="text-base sm:text-xl text-stone-800 font-medium leading-relaxed font-sans">
            {node.narration}
          </p>
        </div>

        {/* COMPANIONS ROSTER & TALKING CHEERS */}
        {hero.inventory.length > 0 && (
          <div className="mb-5 bg-amber-100/60 border border-amber-300 rounded-2xl p-3 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-900 uppercase">
                🎒 Party Companions & Charms:
              </span>
              <span className="text-xs text-stone-600">(tap for tips)</span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {hero.inventory.map((item, idx) => (
                <button
                  key={`${item.id}-${idx}`}
                  onClick={() => triggerCompanionBark(item.id)}
                  className="px-2.5 py-1 rounded-xl bg-white hover:bg-amber-200 border border-amber-400 text-stone-900 text-xs font-extrabold flex items-center gap-1 transition-transform hover:scale-105 cursor-pointer shadow-xs"
                  title={`Ask ${item.name} for advice!`}
                >
                  <span className="text-base select-none">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TABLETOP CARD PROMPT PREVIEW (If node has associated card) */}
        {node.cardPrompt && (
          <div className="mb-6 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-200 border-2 border-amber-400 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl select-none">{node.cardPrompt.glyph}</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-300 px-2 py-0.5 rounded-full border border-amber-500">
                  {node.cardPrompt.cardNumber} • {node.cardPrompt.type.toUpperCase()}
                </span>
                <h4 className="text-sm sm:text-base font-black font-fantasy text-stone-900 mt-0.5">
                  {node.cardPrompt.title}
                </h4>
                <p className="text-xs text-stone-600 font-medium">
                  {node.cardPrompt.flavor}
                </p>
              </div>
            </div>

            <button
              onClick={() => soundManager.speak(node.cardPrompt?.sentence || node.cardPrompt?.word || '')}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <Volume2 className="w-4 h-4" />
              <span>Hear Card Read</span>
            </button>
          </div>
        )}

        {/* ACTIVE CHALLENGE SECTION (Phonics Tabletop Card, Geo/History, or Dice Check) */}
        {node.challenge && !challengeCompleted && (
          <div className="my-6">
            {node.challenge.type === 'phonics' && node.challenge.phonicsData && (
              <PhonicsPuzzleModal
                challenge={node.challenge.phonicsData}
                onSolved={() => setChallengeCompleted(true)}
              />
            )}

            {node.challenge.type === 'geo-history' && node.challenge.geoData && (
              <GeographyHistoryModal
                challenge={node.challenge.geoData}
                onSolved={() => setChallengeCompleted(true)}
              />
            )}

            {node.challenge.type === 'maths' && node.challenge.mathData && (
              <div className="bg-amber-100/80 border-3 border-amber-400 rounded-3xl p-5 sm:p-6 text-center shadow-lg">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-300 px-3 py-1 rounded-full border border-amber-500">
                  ✨ Mental Math Spell Challenge
                </span>
                <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950 mt-2 mb-1">
                  {node.challenge.mathData.flavorSpell}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 font-semibold mb-4">
                  {node.challenge.mathData.question}
                </p>

                {/* Visual Counters */}
                <div className="flex items-center justify-center gap-1.5 flex-wrap my-3">
                  {Array.from({ length: node.challenge.mathData.num1 }).map((_, i) => (
                    <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>
                      💎
                    </span>
                  ))}
                  <span className="text-xl font-black text-amber-900 px-2 font-mono">
                    {node.challenge.mathData.operator}
                  </span>
                  {Array.from({ length: node.challenge.mathData.num2 }).map((_, i) => (
                    <span key={`sec-${i}`} className="text-2xl animate-bounce" style={{ animationDelay: `${(i + 4) * 100}ms` }}>
                      ✨
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3 mt-4">
                  {node.challenge.mathData.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        if (opt === node.challenge?.mathData?.correctAnswer) {
                          soundManager.playVictory();
                          setChallengeCompleted(true);
                        } else {
                          soundManager.playSpell();
                        }
                      }}
                      className="w-14 h-14 rounded-2xl bg-white hover:bg-amber-200 border-2 border-amber-500 text-stone-900 font-black text-xl shadow-md transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {node.challenge.type === 'dice-check' && (
              <DiceRoller
                dcTarget={node.challenge.dcTarget}
                statModifier={
                  node.challenge.statUsed
                    ? {
                        name: node.challenge.statUsed.toUpperCase(),
                        value: hero.stats[node.challenge.statUsed],
                      }
                    : undefined
                }
                onRollComplete={({ success }) => {
                  if (success) {
                    setChallengeCompleted(true);
                  }
                }}
                label="Adventure Skill Check"
              />
            )}
          </div>
        )}

        {/* Dragon Encounter Transition Banner */}
        {node.dragonBattleId && (
          <div className="my-5 bg-gradient-to-r from-amber-500 to-rose-600 p-5 rounded-3xl text-white text-center shadow-lg border-2 border-amber-300">
            <div className="text-5xl mb-2 select-none">🐲✨</div>
            <h4 className="text-xl sm:text-2xl font-black font-fantasy mb-1">
              A Dragon Duel Begins!
            </h4>
            <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto mb-4 font-semibold">
              Prepare your arithmetic magic spells! Add and subtract to calm the dragon&apos;s
              shimmering elemental heart!
            </p>
            <button
              onClick={() => onTriggerDragonArena(node.dragonBattleId!)}
              className="px-6 py-3 bg-white hover:bg-yellow-100 text-amber-950 font-black text-base rounded-2xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 text-amber-600" />
              Enter the Dragon Duel Arena!
            </button>
          </div>
        )}

        {/* STORY CHOICES BUTTONS */}
        <div className="mt-6 border-t-2 border-amber-200/80 pt-5">
          <span className="text-xs font-black uppercase tracking-wider text-amber-800 block mb-3">
            What will your hero do next?
          </span>
          <div className="space-y-3">
            {node.choices.map((choice, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleChoiceClick(choice)}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-black text-base sm:text-lg text-left shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-amber-400 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span>{choice.text}</span>
                </div>
                <ChevronRight className="w-6 h-6 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Art Studio for Scene Paintings */}
      {isArtStudioOpen && (
        <ArtStudioModal
          hero={hero}
          initialPrompt={artStudioPrompt}
          initialImage={artStudioInitialImage}
          onClose={() => setIsArtStudioOpen(false)}
          onSaveCustomArt={(imgUrl) => {
            handleSaveCustomStoryArt(imgUrl);
            setIsArtStudioOpen(false);
          }}
        />
      )}
    </div>
  );
};
