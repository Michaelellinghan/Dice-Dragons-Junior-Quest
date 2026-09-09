import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from '../types';
import { soundManager } from '../utils/audio';
import { DiceRoller } from './DiceRoller';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import {
  Volume2,
  Printer,
  Sparkles,
  BookOpen,
  Award,
  Music,
  Dices,
  Shield,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';

interface TabletopDMKitProps {
  hero: Hero;
}

export const TabletopDMKit: React.FC<TabletopDMKitProps> = ({ hero }) => {
  const [activeTab, setActiveTab] = useState<'soundboard' | 'cards' | 'rules' | 'certificate'>('soundboard');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="tabletop-dm-kit" className="w-full max-w-4xl mx-auto p-3 sm:p-6">
      {/* Visual DM Kit Banner (Hidden during print) */}
      <div className="print:hidden relative h-36 sm:h-44 rounded-3xl overflow-hidden border-4 border-amber-400 mb-5 shadow-xl group">
        <img
          src={ADVENTURE_ASSETS.pages.dmKit.bannerUrl}
          alt="Tabletop Dungeon Master Kit"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex items-end p-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-400/40">
              ORCHESTRATING ADVENTURE &amp; LEARNING
            </span>
            <h1 className="text-xl sm:text-2xl font-black font-fantasy text-white drop-shadow">
              The Dungeon Master Guide &amp; Soundboard
            </h1>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 text-white rounded-3xl p-6 shadow-xl mb-6 border-4 border-amber-400 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
            <span className="text-2xl">🎲👑</span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-purple-950/60 px-3 py-0.5 rounded-full border border-purple-700">
              Parents & Teachers Companion
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-200">
            The Tabletop Dungeon Master Kit
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl font-medium mt-1">
            Tools to run this adventure right at your kitchen table, living room rug, or classroom!
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-sm shadow-md transition-all cursor-pointer flex items-center gap-2 shrink-0"
        >
          <Printer className="w-4 h-4" />
          Print Material
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5">
        <button
          onClick={() => setActiveTab('soundboard')}
          className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'soundboard'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Music className="w-4 h-4" />
          Live SFX Soundboard
        </button>

        <button
          onClick={() => setActiveTab('cards')}
          className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'cards'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Encounter & Spell Cards
        </button>

        <button
          onClick={() => setActiveTab('rules')}
          className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'rules'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          5-Year-Old TTRPG Rules
        </button>

        <button
          onClick={() => setActiveTab('certificate')}
          className={`px-4 py-2 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'certificate'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Award className="w-4 h-4" />
          Printable Hero Certificate
        </button>
      </div>

      {/* TAB 1: LIVE SOUNDBOARD */}
      {activeTab === 'soundboard' && (
        <div className="bg-amber-50 border-4 border-amber-300 rounded-3xl p-6 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950">
              Dungeon Master Audio Atmosphere
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Tap these buttons while narrating to your kids at the physical table!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => soundManager.playDiceRoll()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">🎲</span>
              <span className="font-extrabold text-sm text-amber-950">Dice Rattle</span>
              <span className="text-[11px] text-stone-500">Rolling the bones</span>
            </button>

            <button
              onClick={() => soundManager.playSpellCast()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">✨</span>
              <span className="font-extrabold text-sm text-amber-950">Spell Twinkle</span>
              <span className="text-[11px] text-stone-500">Sparkbolt & Frost</span>
            </button>

            <button
              onClick={() => soundManager.playDragonRumble()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">🐲</span>
              <span className="font-extrabold text-sm text-amber-950">Dragon Purr / Roar</span>
              <span className="text-[11px] text-stone-500">Friendly dragon greeting</span>
            </button>

            <button
              onClick={() => soundManager.playSparkle()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">🌟</span>
              <span className="font-extrabold text-sm text-amber-950">Sparkle Chime</span>
              <span className="text-[11px] text-stone-500">Correct phonics answer</span>
            </button>

            <button
              onClick={() => soundManager.playVictoryFanfare()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">🎺</span>
              <span className="font-extrabold text-sm text-amber-950">Victory Fanfare</span>
              <span className="text-[11px] text-stone-500">Tamed the dragon!</span>
            </button>

            <button
              onClick={() => soundManager.playGentleBoop()}
              className="p-4 rounded-2xl bg-white hover:bg-amber-100 border-2 border-amber-300 shadow flex flex-col items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <span className="text-3xl">🧸</span>
              <span className="font-extrabold text-sm text-amber-950">Gentle Boop</span>
              <span className="text-[11px] text-stone-500">Silly gentle miss</span>
            </button>
          </div>

          <div className="max-w-md mx-auto">
            <DiceRoller label="Shared Tabletop Dice Roller" />
          </div>
        </div>
      )}

      {/* TAB 2: ENCOUNTER & SPELL CARDS */}
      {activeTab === 'cards' && (
        <div className="space-y-4">
          <div className="bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 font-semibold">
            🖨️ These encounter cards align with Key Stage 1 curriculum goals. Read them aloud to the table, have the young adventurers roll their d20, and count their answers with counters!
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Phonics */}
            <div className="bg-white border-3 border-amber-300 rounded-3xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📖</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Phonics KS1 Card
                  </span>
                  <h4 className="font-extrabold text-base text-amber-950">
                    The Sound-Stone Gate (/c/ - /a/ - /t/)
                  </h4>
                </div>
              </div>
              <p className="text-xs text-stone-700 mb-3">
                <strong>DM Script:</strong> &ldquo;You arrive at the gate. A stone kitten blinks its eyes: &apos;Sound out my name to enter!&apos; Press finger to table for each sound: /c/ ... /a/ ... /t/!&rdquo;
              </p>
              <div className="bg-amber-50 rounded-xl p-2.5 text-xs text-amber-900">
                <strong>Reward on Success:</strong> Gate opens, gain 1 Star Spark!
              </div>
            </div>

            {/* Card 2: Math Spell */}
            <div className="bg-white border-3 border-amber-300 rounded-3xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Maths Spell Card
                  </span>
                  <h4 className="font-extrabold text-base text-amber-950">
                    Spark Blast (Addition within 10)
                  </h4>
                </div>
              </div>
              <p className="text-xs text-stone-700 mb-3">
                <strong>DM Script:</strong> &ldquo;Hold out your star wand! To unleash Spark Blast, add 4 red sparks + 3 gold sparks! How many sparks are dancing in the air?&rdquo;
              </p>
              <div className="bg-amber-50 rounded-xl p-2.5 text-xs text-amber-900">
                <strong>Dice Roll:</strong> Roll d20. On 10+, deal 3 calming energy to the dragon!
              </div>
            </div>

            {/* Card 3: Geography */}
            <div className="bg-white border-3 border-amber-300 rounded-3xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🧭</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Geography Card
                  </span>
                  <h4 className="font-extrabold text-base text-amber-950">
                    The Four Winds Compass
                  </h4>
                </div>
              </div>
              <p className="text-xs text-stone-700 mb-3">
                <strong>DM Script:</strong> &ldquo;Remember our rhyme: Never Eat Shredded Wheat! Which direction points towards the mountain top? North, South, East, or West?&rdquo;
              </p>
              <div className="bg-amber-50 rounded-xl p-2.5 text-xs text-amber-900">
                <strong>Correct Answer:</strong> North points straight up on the map!
              </div>
            </div>

            {/* Card 4: History */}
            <div className="bg-white border-3 border-amber-300 rounded-3xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏰</span>
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    History Card
                  </span>
                  <h4 className="font-extrabold text-base text-amber-950">
                    Castle Parts & Moats
                  </h4>
                </div>
              </div>
              <p className="text-xs text-stone-700 mb-3">
                <strong>DM Script:</strong> &ldquo;Look at the grand medieval citadel! What do we call the big ring of water surrounding the walls to protect the kingdom?&rdquo;
              </p>
              <div className="bg-amber-50 rounded-xl p-2.5 text-xs text-amber-900">
                <strong>Correct Answer:</strong> The Moat! Cross by lowering the Drawbridge!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 5-YEAR-OLD TTRPG RULES */}
      {activeTab === 'rules' && (
        <div className="bg-white border-4 border-amber-300 rounded-3xl p-6 shadow-xl space-y-4 text-stone-800">
          <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 border-b border-amber-200 pb-2">
            The Golden Table Rules for 5-Year-Old Adventurers
          </h3>

          <div className="space-y-3 text-sm">
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="font-extrabold text-amber-950 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                1. Pure Sounds, Not Letter Names
              </h4>
              <p className="text-xs text-stone-600">
                In UK Phonics, pronounce crisp pure sounds: /s/ (like a hissing snake, not &quot;suh&quot;), /m/ (like yummy food, not &quot;muh&quot;), and /t/ (light tap, not &quot;tuh&quot;). This makes blending words 10x easier!
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="font-extrabold text-amber-950 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                2. Use Physical Counters as Mana Gems
              </h4>
              <p className="text-xs text-stone-600">
                Put 10 blueberries, dried pasta pieces, or Lego bricks in front of your child. When casting a spell like 3 + 4, let them physically slide 3 bricks and 4 bricks together to count 7!
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="font-extrabold text-amber-950 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                3. The Friendly Fumble Rule (No Character Death)
              </h4>
              <p className="text-xs text-stone-600">
                If they roll a 1 or miss an answer, characters never die or fail harshly. Instead, something funny happens: the dragon sneezes glitter, a squirrel drops an acorn on their helmet, or their spell makes a harmless puff of purple smoke!
              </p>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
              <h4 className="font-extrabold text-amber-950 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                4. Soothing Dragons, Not Slaying Dragons
              </h4>
              <p className="text-xs text-stone-600">
                Young children love animals and dragons! In this game, dragons are mischievous, tired, or have hiccups. Mathematical spells calm their fiery belly, thaw their frost wings, or balance their flower petals!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PRINTABLE CERTIFICATE */}
      {activeTab === 'certificate' && (
        <div className="bg-amber-100/60 border-4 border-dashed border-amber-500 rounded-3xl p-6 sm:p-10 shadow-2xl text-center print:border-solid print:bg-white">
          <div className="text-5xl sm:text-6xl mb-2 select-none">👑🐉📜</div>
          <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
            Kingdom of Spellbound Official Decree
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-fantasy text-amber-950 my-3">
            Certificate of Heroic Mastery
          </h2>
          <p className="text-sm sm:text-base text-stone-700 max-w-lg mx-auto mb-6">
            This certifies that <span className="font-black text-amber-900 underline text-xl">{hero.name}</span>, {hero.title}, has successfully mastered Phonics Runes, Castle Geography, and Arithmetic Dragon Spells!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-8 text-left">
            <div className="p-3 bg-white rounded-2xl border border-amber-300 text-center">
              <span className="text-2xl block">📖</span>
              <span className="font-bold text-xs text-amber-950">Phonics Master</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-amber-300 text-center">
              <span className="text-2xl block">⚡</span>
              <span className="font-bold text-xs text-amber-950">Mental Maths</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-amber-300 text-center">
              <span className="text-2xl block">🧭</span>
              <span className="font-bold text-xs text-amber-950">Compass Scout</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-amber-300 text-center">
              <span className="text-2xl block">🐲</span>
              <span className="font-bold text-xs text-amber-950">Dragon Soother</span>
            </div>
          </div>

          <div className="flex items-center justify-around border-t-2 border-amber-300 pt-6 max-w-md mx-auto text-xs font-bold text-stone-600">
            <div>
              <div className="h-0.5 w-24 bg-stone-400 mx-auto mb-1"></div>
              <span>King Alden&apos;s Royal Seal</span>
            </div>
            <div>
              <div className="h-0.5 w-24 bg-stone-400 mx-auto mb-1"></div>
              <span>Dungeon Master Signature</span>
            </div>
          </div>

          <div className="mt-6 print:hidden">
            <button
              onClick={handlePrint}
              className="px-6 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm shadow cursor-pointer transition-all inline-flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Print Certificate For Your Hero!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
