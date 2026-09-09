import React, { useState } from 'react';
import { Hero } from '../types';
import { PRESET_HEROES } from '../data/heroes';
import { soundManager } from '../utils/audio';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { ArtStudioModal } from './ArtStudioModal';
import { Heart, Zap, Shield, Sparkles, Footprints, BookOpen, Flame, UserCheck, Palette } from 'lucide-react';

interface CharacterSheetProps {
  hero: Hero;
  onSelectHero: (hero: Hero) => void;
  onUpdateHero: (hero: Hero) => void;
  onClose?: () => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({
  hero,
  onSelectHero,
  onUpdateHero,
  onClose,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [customName, setCustomName] = useState(hero.name);
  const [isArtStudioOpen, setIsArtStudioOpen] = useState(false);
  const [artStudioPrompt, setArtStudioPrompt] = useState('');
  const [artStudioInitialImage, setArtStudioInitialImage] = useState<string | undefined>(undefined);

  const heroPortrait = hero.portraitUrl || ADVENTURE_ASSETS.heroes[hero.id]?.portraitUrl;

  const handleCampfireRest = () => {
    soundManager.playSparkle();
    onUpdateHero({
      ...hero,
      currentHearts: hero.maxHearts,
      starSparks: Math.max(hero.starSparks, 5),
    });
  };

  const handleSaveName = () => {
    if (customName.trim()) {
      onUpdateHero({
        ...hero,
        name: customName.trim(),
      });
    }
    setIsEditingName(false);
  };

  return (
    <div id="character-sheet" className="bg-amber-50/95 border-4 border-amber-400 rounded-3xl p-5 sm:p-6 shadow-2xl max-w-xl mx-auto text-stone-800">
      {/* Guildhall Banner Artwork */}
      <div className="relative h-28 rounded-2xl overflow-hidden border-2 border-amber-300 mb-4 shadow-md group">
        <img
          src={ADVENTURE_ASSETS.pages.characterSheet.bannerUrl}
          alt="Adventurers Guildhall"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-3">
          <span className="text-xs font-bold text-amber-200 drop-shadow flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            The High Guildhall of Astraea • Hero Records
          </span>
        </div>
      </div>

      {/* Header with Switcher */}
      <div className="flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-200/80 px-2 py-0.5 rounded-md">
            Junior Hero Sheet
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950">
            Adventurer Dossier
          </h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-950 rounded-xl font-bold text-xs cursor-pointer"
          >
            Close
          </button>
        )}
      </div>

      {/* Preset Character Picker */}
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
          Choose a Class or Hero:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESET_HEROES.map((h) => {
            const isSelected = h.id === hero.id;
            return (
              <button
                key={h.id}
                onClick={() => {
                  soundManager.playClick();
                  onSelectHero(h);
                  setCustomName(h.name);
                }}
                className={`p-2.5 rounded-2xl flex flex-col items-center gap-1 transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-105'
                    : 'bg-white hover:bg-amber-100 text-amber-950 border-amber-300'
                }`}
              >
                <span className="text-2xl">{h.avatar}</span>
                <span className="font-extrabold text-xs leading-tight">{h.name}</span>
                <span className="text-[10px] opacity-80 uppercase tracking-tighter">
                  {h.classType}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Badge Display */}
      <div className="bg-white border-2 border-amber-300 rounded-3xl p-4 sm:p-5 shadow-sm mb-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* Illustrated Avatar / Portrait with AI Paint Trigger */}
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-4xl shadow-inner shrink-0 group">
          {heroPortrait ? (
            <img
              src={heroPortrait}
              alt={hero.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span>{hero.avatar}</span>
          )}
          <button
            onClick={() => {
              soundManager.playSparkle();
              setArtStudioPrompt(
                `A charming fantasy portrait of ${hero.name}, ${hero.title}, ${hero.classType} class. Friendly and brave young adventurer, storybook watercolor style, whimsical fantasy realm.`
              );
              setArtStudioInitialImage(heroPortrait);
              setIsArtStudioOpen(true);
            }}
            className="absolute bottom-1 inset-x-1 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 text-[10px] font-black flex items-center justify-center gap-1 shadow-md border border-amber-300 transition-all cursor-pointer opacity-90 group-hover:opacity-100"
            title="Create custom AI portrait"
          >
            <Palette className="w-3 h-3" />
            <span>AI Art</span>
          </button>
        </div>

        <div className="flex-1 text-center sm:text-left">
          {isEditingName ? (
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="px-2 py-1 border-2 border-amber-400 rounded-xl text-base font-bold text-amber-950"
                maxLength={16}
              />
              <button
                onClick={handleSaveName}
                className="px-3 py-1 bg-emerald-600 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h4 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950">
                {hero.name}
              </h4>
              <button
                onClick={() => setIsEditingName(true)}
                className="text-xs text-amber-700 hover:text-amber-900 underline cursor-pointer"
              >
                (rename)
              </button>
            </div>
          )}

          <p className="text-xs font-bold text-amber-800 mb-2">{hero.title}</p>

          {/* Hearts & Sparks */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="flex items-center gap-1.5">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              <span className="font-extrabold text-sm text-stone-800">
                {hero.currentHearts} / {hero.maxHearts} Hearts
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-5 h-5 fill-amber-500 text-amber-500" />
              <span className="font-extrabold text-sm text-stone-800">
                {hero.starSparks} Star Sparks
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats (4 Core child-friendly attributes) */}
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
          Hero Attributes (Added to Dice Rolls):
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-2.5 text-center shadow-sm">
            <Shield className="w-5 h-5 text-amber-600 mx-auto mb-1" />
            <span className="text-[11px] font-bold text-stone-500 uppercase block">Bravery</span>
            <span className="text-xl font-black text-amber-900">+{hero.stats.bravery}</span>
          </div>
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-2.5 text-center shadow-sm">
            <BookOpen className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <span className="text-[11px] font-bold text-stone-500 uppercase block">Smarts</span>
            <span className="text-xl font-black text-indigo-950">+{hero.stats.smarts}</span>
          </div>
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-2.5 text-center shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <span className="text-[11px] font-bold text-stone-500 uppercase block">Sparkle</span>
            <span className="text-xl font-black text-amber-900">+{hero.stats.sparkle}</span>
          </div>
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-2.5 text-center shadow-sm">
            <Footprints className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <span className="text-[11px] font-bold text-stone-500 uppercase block">Speed</span>
            <span className="text-xl font-black text-emerald-950">+{hero.stats.speed}</span>
          </div>
        </div>
      </div>

      {/* Adventurer Satchel / Backpack */}
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
          🎒 Adventurer&apos;s Satchel ({hero.inventory.length} items):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {hero.inventory.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-amber-200 rounded-2xl p-2.5 flex items-center gap-2 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="overflow-hidden">
                <h5 className="text-xs font-extrabold text-amber-950 truncate">
                  {item.name}
                </h5>
                <p className="text-[10px] text-stone-500 truncate">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campfire Rest Action */}
      <div className="bg-amber-200/70 border border-amber-300 rounded-2xl p-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-600 shrink-0" />
          <div>
            <h5 className="text-xs font-extrabold text-amber-950">
              Campfire Rest
            </h5>
            <p className="text-[11px] text-amber-800">
              Roast a marshmallow and recover all Hearts!
            </p>
          </div>
        </div>
        <button
          onClick={handleCampfireRest}
          className="px-3.5 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl font-bold text-xs shadow cursor-pointer transition-all active:scale-95"
        >
          Rest & Heal ❤️
        </button>
      </div>

      {/* AI Art Studio for Custom Hero Portrait */}
      {isArtStudioOpen && (
        <ArtStudioModal
          hero={hero}
          initialPrompt={artStudioPrompt}
          initialImage={artStudioInitialImage}
          onClose={() => setIsArtStudioOpen(false)}
          onSaveCustomArt={(imgUrl) => {
            onUpdateHero({ ...hero, portraitUrl: imgUrl });
            setIsArtStudioOpen(false);
          }}
        />
      )}
    </div>
  );
};
