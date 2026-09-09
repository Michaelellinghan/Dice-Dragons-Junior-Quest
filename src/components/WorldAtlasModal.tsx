import React, { useState } from 'react';
import {
  REALM_LORE,
  FantasyRace,
  RegionInfo,
  DragonLore,
  MagicalCreature,
  HistoricalEra,
  FantasyFaction,
  LandmarkLore,
} from '../data/worldLore';
import { soundManager } from '../utils/audio';
import {
  Globe,
  MapPin,
  Users,
  BookOpen,
  Compass,
  Sparkles,
  X,
  Volume2,
  Shield,
  Heart,
  Calendar,
  Flame,
  Castle,
  Tent,
} from 'lucide-react';

interface WorldAtlasModalProps {
  onClose?: () => void;
}

export const WorldAtlasModal: React.FC<WorldAtlasModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<
    'regions' | 'dragons' | 'creatures' | 'peoples' | 'history' | 'factions' | 'landmarks'
  >('regions');
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(REALM_LORE.regions[0]);
  const [selectedRace, setSelectedRace] = useState<FantasyRace>(REALM_LORE.races[0]);
  const [selectedDragon, setSelectedDragon] = useState<DragonLore>(REALM_LORE.dragons[0]);
  const [selectedCreature, setSelectedCreature] = useState<MagicalCreature>(
    REALM_LORE.creatures[0]
  );
  const [selectedFaction, setSelectedFaction] = useState<FantasyFaction>(
    REALM_LORE.factions?.[0]
  );
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkLore>(
    REALM_LORE.landmarks?.[0]
  );

  return (
    <div
      id="world-atlas-modal"
      className="w-full max-w-4xl mx-auto p-3 sm:p-6 bg-amber-50 border-4 border-amber-400 rounded-3xl shadow-2xl text-stone-800 my-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-3xl select-none">🌍✨</span>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-200/80 px-2 py-0.5 rounded-md">
              Astraea World Codex & Lore Compendium
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950">
              The Grand Atlas of Spellbound
            </h3>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-amber-200 text-stone-600 transition-colors cursor-pointer"
            title="Close Codex"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-2 border-b border-amber-200 pb-3 mb-5 overflow-x-auto">
        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('regions');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'regions'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Compass className="w-4 h-4" />
          5 Kingdom Regions
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('dragons');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'dragons'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Flame className="w-4 h-4" />
          5 Elemental Dragons
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('creatures');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'creatures'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Magical Creatures Guide
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('peoples');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'peoples'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Users className="w-4 h-4" />
          Diverse Peoples
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('history');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'history'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Eras & The 3 Runes
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('factions');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'factions'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Shield className="w-4 h-4" />
          Guilds & Factions
        </button>

        <button
          onClick={() => {
            soundManager.playClick();
            setActiveTab('landmarks');
          }}
          className={`px-3.5 py-2 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'landmarks'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-300'
          }`}
        >
          <Tent className="w-4 h-4" />
          D&D Side-Treks
        </button>
      </div>

      {/* TAB 1: GEOGRAPHICAL REGIONS */}
      {activeTab === 'regions' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            {REALM_LORE.regions.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedRegion(region);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border-2 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100/80 text-amber-950 border-amber-200'
                  }`}
                >
                  <span className="text-2xl select-none">{region.icon}</span>
                  <div>
                    <h5 className="text-xs font-black leading-tight">{region.name}</h5>
                    <span className="text-[10px] opacity-85 block uppercase font-bold">
                      {region.compassPosition} Compass Point
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-4xl select-none">{selectedRegion.icon}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                    {selectedRegion.name}
                  </h4>
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                    Position: {selectedRegion.compassPosition} on Kingdom Map
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  soundManager.speak(
                    `${selectedRegion.name}. ${selectedRegion.geographyLore} ${selectedRegion.historyNote}`
                  )
                }
                className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors cursor-pointer"
                title="Listen to lore read aloud"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-extrabold text-amber-900 block">🌿 Climate & Terrain:</span>
                <p className="text-stone-700">{selectedRegion.climate}</p>
              </div>

              <div>
                <span className="font-extrabold text-amber-900 block">📍 Famous Landmark:</span>
                <p className="text-stone-700 font-semibold">{selectedRegion.landmark}</p>
              </div>

              <div>
                <span className="font-extrabold text-amber-900 block">🗺️ Geography Lore:</span>
                <p className="text-stone-700 leading-relaxed">{selectedRegion.geographyLore}</p>
              </div>

              <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200">
                <span className="font-extrabold text-amber-900 block">📜 Historical Connection:</span>
                <p className="text-stone-700 leading-relaxed">{selectedRegion.historyNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ELEMENTAL DRAGONS LORE */}
      {activeTab === 'dragons' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            {REALM_LORE.dragons.map((dragon) => {
              const isSelected = selectedDragon.id === dragon.id;
              return (
                <button
                  key={dragon.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedDragon(dragon);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border-2 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100/80 text-amber-950 border-amber-200'
                  }`}
                >
                  <span className="text-2xl select-none">{dragon.avatar}</span>
                  <div>
                    <h5 className="text-xs font-black leading-tight">{dragon.name}</h5>
                    <span className="text-[10px] opacity-85 block truncate">{dragon.element}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl select-none">{selectedDragon.avatar}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                    {selectedDragon.name}
                  </h4>
                  <span className="text-xs font-bold text-amber-800 block">
                    {selectedDragon.title} • {selectedDragon.element}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  soundManager.speak(
                    `${selectedDragon.name}, ${selectedDragon.title}. ${selectedDragon.loreDescription} Calming lullaby: ${selectedDragon.calmingLullaby}`
                  )
                }
                className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors cursor-pointer"
                title="Listen to dragon lore read aloud"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <p className="text-stone-700 leading-relaxed font-medium bg-amber-50/70 p-3 rounded-2xl border border-amber-200/80">
                {selectedDragon.loreDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span className="font-extrabold text-amber-900 block text-[11px]">
                    ✨ Personality:
                  </span>
                  <p className="text-stone-700 text-xs">{selectedDragon.personality}</p>
                </div>

                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span className="font-extrabold text-amber-900 block text-[11px]">
                    🍓 Favorite Treat:
                  </span>
                  <p className="text-stone-700 text-xs">{selectedDragon.favoriteTreat}</p>
                </div>

                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span className="font-extrabold text-amber-900 block text-[11px]">
                    📍 Habitat:
                  </span>
                  <p className="text-stone-700 text-xs">{selectedDragon.habitat}</p>
                </div>

                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                  <span className="font-extrabold text-amber-900 block text-[11px]">
                    🔢 Math Magic Affinity:
                  </span>
                  <p className="text-stone-700 text-xs">{selectedDragon.mathAffinity}</p>
                </div>
              </div>

              <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-200 text-indigo-950">
                <span className="font-extrabold block text-xs mb-0.5">
                  🌙 Calming Bedtime Lullaby:
                </span>
                <p className="text-xs italic leading-relaxed">{selectedDragon.calmingLullaby}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MAGICAL CREATURES BESTIARY */}
      {activeTab === 'creatures' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            {REALM_LORE.creatures.map((creature) => {
              const isSelected = selectedCreature.id === creature.id;
              return (
                <button
                  key={creature.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCreature(creature);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border-2 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100/80 text-amber-950 border-amber-200'
                  }`}
                >
                  <span className="text-2xl select-none">{creature.icon}</span>
                  <div>
                    <h5 className="text-xs font-black leading-tight">{creature.name}</h5>
                    <span className="text-[10px] opacity-85 block truncate">
                      {creature.habitat}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl select-none">{selectedCreature.icon}</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                    {selectedCreature.name}
                  </h4>
                  <span className="text-xs font-bold text-amber-800">
                    Habitat: {selectedCreature.habitat}
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  soundManager.speak(
                    `${selectedCreature.name}. ${selectedCreature.description} Ranger tip: ${selectedCreature.rangerTip}`
                  )
                }
                className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 transition-colors cursor-pointer"
                title="Listen to creature guide read aloud"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-extrabold text-amber-900 block">📖 Field Notes:</span>
                <p className="text-stone-700 leading-relaxed">{selectedCreature.description}</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-emerald-950">
                <span className="font-extrabold block">🐾 Junior Explorer Ranger Tip:</span>
                <p className="text-xs leading-relaxed">{selectedCreature.rangerTip}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: DIVERSE FANTASY PEOPLES */}
      {activeTab === 'peoples' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            {REALM_LORE.races.map((race) => {
              const isSelected = selectedRace.id === race.id;
              return (
                <button
                  key={race.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedRace(race);
                  }}
                  className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer border-2 flex items-center gap-3 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100/80 text-amber-950 border-amber-200'
                  }`}
                >
                  <span className="text-2xl select-none">{race.avatar}</span>
                  <div>
                    <h5 className="text-xs font-black leading-tight">{race.name}</h5>
                    <span className="text-[10px] opacity-85 block truncate">
                      {race.homeland}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center gap-3 border-b pb-3 mb-3">
              <span className="text-4xl select-none">{selectedRace.avatar}</span>
              <div>
                <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                  {selectedRace.name}
                </h4>
                <span className="text-xs font-bold text-amber-800">
                  Homeland: {selectedRace.homeland}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-extrabold text-amber-900 block">🏡 Culture & Way of Life:</span>
                <p className="text-stone-700 leading-relaxed">{selectedRace.culture}</p>
              </div>

              <div>
                <span className="font-extrabold text-amber-900 block">✨ Unique Gifts & Abilities:</span>
                <p className="text-stone-700 leading-relaxed">{selectedRace.uniqueTraits}</p>
              </div>

              <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-emerald-950">
                <span className="font-extrabold block">🤝 Inclusive Worldbuilding Note:</span>
                <p className="text-xs leading-relaxed">{selectedRace.inclusiveNote}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: WORLD HISTORY, ERAS & THE THREE RUNES */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm space-y-3 text-xs sm:text-sm">
            <div className="border-b pb-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                {REALM_LORE.eraName}
              </span>
              <h4 className="text-xl font-black font-fantasy text-amber-950 mt-1">
                The Legend of Astraea & The Three Great Runes
              </h4>
            </div>

            <p className="text-stone-700 leading-relaxed text-sm">
              {REALM_LORE.historySummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-center">
                <span className="text-2xl block mb-1 select-none">📖</span>
                <h5 className="font-black text-amber-950 text-xs">The Rune of Words</h5>
                <p className="text-[11px] text-stone-600 mt-1">
                  Phonics sounds (/c/-/a/-/t/, /sh/, /ch/) that bring words to life and unlock ancient gates.
                </p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-center">
                <span className="text-2xl block mb-1 select-none">⚡</span>
                <h5 className="font-black text-amber-950 text-xs">The Rune of Measure</h5>
                <p className="text-[11px] text-stone-600 mt-1">
                  Arithmetic magic (addition & subtraction) that calms dragons and builds sturdy bridges.
                </p>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-center">
                <span className="text-2xl block mb-1 select-none">🧭</span>
                <h5 className="font-black text-amber-950 text-xs">The Rune of Memory</h5>
                <p className="text-[11px] text-stone-600 mt-1">
                  Compass directions and historical discoveries (castles, fossils) that teach where we come from.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline of Eras */}
          <div className="bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm">
            <h4 className="text-base font-black font-fantasy text-amber-950 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-700" />
              Chronicle of Eras: How Astraea Was Formed
            </h4>

            <div className="space-y-3">
              {REALM_LORE.eras.map((era) => (
                <div
                  key={era.id}
                  className="bg-amber-50/70 border border-amber-200 rounded-2xl p-3 text-xs sm:text-sm"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-amber-200/60 pb-1.5 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl select-none">{era.symbol}</span>
                      <h5 className="font-black text-amber-950 text-xs sm:text-sm">
                        {era.eraName}
                      </h5>
                    </div>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                      {era.timeframe}
                    </span>
                  </div>
                  <p className="text-stone-700 text-xs mb-2 leading-relaxed">{era.summary}</p>
                  <div className="space-y-1">
                    <span className="font-extrabold text-[11px] text-amber-900 block">
                      Key Discoveries:
                    </span>
                    {era.keyDiscoveries.map((disc, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-stone-600 text-[11px]">
                        <span className="text-amber-500">★</span>
                        <span>{disc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: GUILDS & FACTIONS */}
      {activeTab === 'factions' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Faction Selector List */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-2">
              Select Guild or Order:
            </h4>
            {REALM_LORE.factions.map((faction) => {
              const isSelected = selectedFaction?.id === faction.id;
              return (
                <button
                  key={faction.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedFaction(faction);
                  }}
                  className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100 text-amber-950 border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{faction.icon}</span>
                    <div>
                      <div className="font-black text-xs sm:text-sm leading-tight">
                        {faction.name}
                      </div>
                      <div
                        className={`text-[10px] font-bold ${
                          isSelected ? 'text-amber-100' : 'text-amber-700'
                        }`}
                      >
                        Led by {faction.leader}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Faction Detail Panel */}
          {selectedFaction && (
            <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-amber-200 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl select-none p-2 bg-amber-100 rounded-2xl border border-amber-300">
                    {selectedFaction.icon}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                      {selectedFaction.name}
                    </h4>
                    <p className="text-xs italic font-bold text-amber-700">
                      {selectedFaction.motto}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  <span className="font-black text-amber-900 block mb-0.5">Headquarters:</span>
                  <span className="text-stone-700">{selectedFaction.headquarters}</span>
                </div>
                <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  <span className="font-black text-amber-900 block mb-0.5">Guild Leader:</span>
                  <span className="text-stone-700">{selectedFaction.leader}</span>
                </div>
              </div>

              <div className="bg-amber-50/50 p-3.5 rounded-2xl border border-amber-200 text-xs sm:text-sm leading-relaxed text-stone-700">
                <span className="font-black text-amber-900 block mb-1">Guild History & Purpose:</span>
                {selectedFaction.description}
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-3.5 rounded-2xl border border-amber-300 text-xs sm:text-sm text-amber-950">
                <span className="font-black text-amber-900 flex items-center gap-1.5 mb-1">
                  <Shield className="w-4 h-4 text-amber-700" />
                  D&D Tabletop Role in the Campaign:
                </span>
                {selectedFaction.dndRole}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 7: SECRET D&D LANDMARKS & SIDE-TREKS */}
      {activeTab === 'landmarks' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Landmark Selector List */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-800 mb-2">
              Select Wander Landmark:
            </h4>
            {REALM_LORE.landmarks.map((lm) => {
              const isSelected = selectedLandmark?.id === lm.id;
              return (
                <button
                  key={lm.id}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedLandmark(lm);
                  }}
                  className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-amber-100 text-amber-950 border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{lm.icon}</span>
                    <div>
                      <div className="font-black text-xs sm:text-sm leading-tight">
                        {lm.name}
                      </div>
                      <div
                        className={`text-[10px] font-bold ${
                          isSelected ? 'text-amber-100' : 'text-amber-700'
                        }`}
                      >
                        {lm.region}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Landmark Detail Panel */}
          {selectedLandmark && (
            <div className="md:col-span-2 bg-white border-2 border-amber-300 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-3 border-b border-amber-200 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl select-none p-2 bg-amber-100 rounded-2xl border border-amber-300">
                    {selectedLandmark.icon}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black font-fantasy text-amber-950">
                      {selectedLandmark.name}
                    </h4>
                    <p className="text-xs font-bold text-amber-700">
                      Region: {selectedLandmark.region}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 p-3.5 rounded-2xl border border-amber-200 text-xs sm:text-sm leading-relaxed text-stone-700">
                <span className="font-black text-amber-900 block mb-1">Atmosphere & Setting:</span>
                {selectedLandmark.description}
              </div>

              <div className="bg-amber-100/70 p-3.5 rounded-2xl border border-amber-300 text-xs sm:text-sm text-stone-700">
                <span className="font-black text-amber-900 block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Campfire Whispers & Secret Rumor:
                </span>
                {selectedLandmark.secretRumor}
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-3.5 rounded-2xl border border-amber-300 text-xs sm:text-sm text-amber-950">
                <span className="font-black text-amber-900 flex items-center gap-1.5 mb-1">
                  <Compass className="w-4 h-4 text-amber-700" />
                  D&D Side-Trek Encounter Prompt:
                </span>
                {selectedLandmark.dndEncounterPrompt}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
