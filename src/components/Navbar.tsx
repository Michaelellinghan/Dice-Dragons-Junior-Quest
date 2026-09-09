import React from 'react';
import { Hero } from '../types';
import {
  BookOpen,
  Sparkles,
  Printer,
  Scroll,
  Volume2,
  VolumeX,
  Compass,
  Dices,
  Calendar,
  Palette,
} from 'lucide-react';

interface NavbarProps {
  currentTab: 'story' | 'daily' | 'map' | 'arena' | 'sheet' | 'dm-kit' | 'screen-free' | 'world-atlas' | 'art-studio';
  onSelectTab: (tab: 'story' | 'daily' | 'map' | 'arena' | 'sheet' | 'dm-kit' | 'screen-free' | 'world-atlas' | 'art-studio') => void;
  hero: Hero;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  hero,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-amber-100/95 backdrop-blur-md border-b-2 border-amber-300 shadow-sm print:hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        {/* Brand & Title */}
        <div
          onClick={() => onSelectTab('story')}
          className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
            🎲
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-black font-fantasy text-amber-950 leading-tight">
              Dice & Dragons
            </h1>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 block -mt-0.5">
              Junior Quest • KS1 Edition
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {/* 1. Story Quest */}
          <button
            onClick={() => onSelectTab('story')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'story'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 hover:bg-amber-200/80'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Story Quest</span>
          </button>

          {/* 2. 20-Day Daily Campaigns */}
          <button
            onClick={() => onSelectTab('daily')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'daily'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-purple-950 hover:bg-purple-100 border border-purple-300'
            }`}
          >
            <Calendar className="w-4 h-4 text-purple-300" />
            <span className="hidden sm:inline">20-Day Campaigns</span>
            <span className="sm:hidden">20 Days</span>
          </button>

          {/* 3. Kingdom Adventure Map */}
          <button
            onClick={() => onSelectTab('map')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'map'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-emerald-950 hover:bg-emerald-100 border border-emerald-300'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span className="hidden md:inline">Kingdom Map</span>
            <span className="md:hidden">Map</span>
          </button>

          {/* 4. Screen-Free Printable Kit */}
          <button
            onClick={() => onSelectTab('screen-free')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'screen-free'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 hover:bg-amber-200/80'
            }`}
          >
            <Printer className="w-4 h-4 text-amber-600" />
            <span className="hidden md:inline">Print & Play Kit</span>
            <span className="md:hidden">Print</span>
          </button>

          {/* 5. Dragon Duel Arena */}
          <button
            onClick={() => onSelectTab('arena')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'arena'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 hover:bg-amber-200/80'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="hidden lg:inline">Dragon Duel Arena</span>
            <span className="lg:hidden">Arena</span>
          </button>

          {/* 5. World Atlas */}
          <button
            onClick={() => onSelectTab('world-atlas')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'world-atlas'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 hover:bg-amber-200/80'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="hidden md:inline">Atlas</span>
          </button>

          {/* 6. DM Companion */}
          <button
            onClick={() => onSelectTab('dm-kit')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'dm-kit'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-amber-950 hover:bg-amber-200/80'
            }`}
          >
            <Dices className="w-4 h-4" />
            <span className="hidden xl:inline">DM Companion</span>
          </button>

          {/* 7. AI Art Studio */}
          <button
            onClick={() => onSelectTab('art-studio')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              currentTab === 'art-studio'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-amber-200/60 text-amber-950 hover:bg-amber-300/80 border border-amber-400'
            }`}
          >
            <Palette className="w-4 h-4 text-amber-800" />
            <span className="hidden sm:inline">Art Studio</span>
            <span className="sm:hidden">Art</span>
          </button>
        </nav>

        {/* Hero Quick Capsule & Sound Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => onSelectTab('sheet')}
            className={`flex items-center gap-2 px-2.5 py-1 rounded-2xl border transition-all cursor-pointer ${
              currentTab === 'sheet'
                ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                : 'bg-white/90 hover:bg-amber-200/90 text-amber-950 border-amber-300'
            }`}
            title="Open Character Sheet"
          >
            {hero.portraitUrl ? (
              <img
                src={hero.portraitUrl}
                alt={hero.name}
                className="w-7 h-7 rounded-full object-cover border border-amber-400"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-xl">{hero.avatar}</span>
            )}
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-black leading-tight">{hero.name}</span>
              <div className="flex items-center gap-1 text-[10px] text-stone-600">
                <span>❤️ {hero.currentHearts}</span>
                <span>⭐ {hero.starSparks}</span>
              </div>
            </div>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 rounded-xl bg-white/90 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute Sounds & Voice' : 'Unmute Sounds & Voice'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
