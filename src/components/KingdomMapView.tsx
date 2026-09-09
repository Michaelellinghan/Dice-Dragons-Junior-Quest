import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from '../types';
import { generateAstraeaMapPdf } from '../utils/pdfGenerator';
import { soundManager } from '../utils/audio';
import { CAMPAIGN_SAGAS, CampaignSaga } from '../data/campaignSagas';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { ArtStudioModal } from './ArtStudioModal';
import confetti from 'canvas-confetti';
import {
  Compass,
  Printer,
  Download,
  MapPin,
  Sparkles,
  TreePine,
  Waves,
  Castle,
  Gem,
  Flame,
  CheckCircle2,
  Circle,
  Eye,
  Volume2,
  Info,
  Calendar,
  Layers,
  Map,
  Cloud,
  Globe,
  Award,
  BookOpen,
  Palette,
  Wand2,
} from 'lucide-react';

interface KingdomMapViewProps {
  hero: Hero;
  completedDays?: number[];
  onSelectDay?: (dayNum: number) => void;
}

export type MapMode = 'central_kingdom' | 'sky_isles' | 'world_atlas';
export type MapStyle = 'parchment' | 'watercolor' | 'tactical';

export interface MapRegion {
  id: string;
  mapCategory: 'central_kingdom' | 'sky_isles';
  name: string;
  subtitle: string;
  themeColor: string;
  icon: string;
  days: number[];
  dragonGuardian: string;
  subjectFocus: string;
  weather: string;
  lore: string;
  secretToFind: string;
  landmarks: { name: string; desc: string; icon: string }[];
  coordinates: { x: number; y: number }; // percentage
}

const REGIONS: MapRegion[] = [
  // =========================================================================
  // MAP 1: CENTRAL ASTRAEA (DAYS 1 - 20)
  // =========================================================================
  {
    id: 'whispering_woods',
    mapCategory: 'central_kingdom',
    name: 'The Whispering Woods',
    subtitle: 'Ancient Sound-Stone Glades & Fern Meadows',
    themeColor: 'emerald',
    icon: '🌲',
    days: [1, 2, 3, 4],
    dragonGuardian: 'Bramble the Moss Wyrm & Pip the Puppy Squire',
    subjectFocus: 'Letters & Sounds Phase 2 (CVC Blending)',
    weather: 'Gentle dappled sunlight, fragrant honeysuckle breeze',
    lore: 'The oldest forest in Astraea, where sound-stones grow naturally in the bark of thousand-year-old oak trees. Bramble sleeps curled like a mossy hillock, breathing warm pine scents.',
    secretToFind: 'Hollow Oak Trunks where glow-moths store sweet wildflower honey.',
    landmarks: [
      { name: 'The Sleeping Kitten Gargoyle', desc: 'A carved stone kitten snoring on moss.', icon: '🐱' },
      { name: 'The Ancient Singing Elder Oak', desc: 'Huge boughs where dryad Elora teaches sound blending.', icon: '🌳' },
      { name: 'Professor Hoot’s Astronomy Tower', desc: 'A wooden treehouse filled with brass astrolabes.', icon: '🦉' },
    ],
    coordinates: { x: 22, y: 68 },
  },
  {
    id: 'four_winds_river',
    mapCategory: 'central_kingdom',
    name: 'The Four Winds River & Valley',
    subtitle: 'River Rapids, Weirs & Master Dylan’s Windmill',
    themeColor: 'sky',
    icon: '🌊',
    days: [5, 6, 7, 8],
    dragonGuardian: 'Aquilon the River Dragon & Friendly River Otters',
    subjectFocus: 'Phase 3 Digraphs (sh, ch, th) & River Currents',
    weather: 'Cool river spray, spinning fresh wind from the mountains',
    lore: 'Rushing downstream from Mount Pyra, this crystal-clear river turns the giant wheels of Master Dylan’s windmill. The river stones are polished like turquoise marbles.',
    secretToFind: 'Hidden river otter slide where silver salmon leap through rainbows.',
    landmarks: [
      { name: 'Master Dylan’s Watermill', desc: 'Turns grain and measures wind math.', icon: '🌾' },
      { name: 'The Four Winds Bridge', desc: 'Carved with roaring dragon gargoyles.', icon: '🌉' },
      { name: 'Azure Otter Estuary', desc: 'Playful otters offering shiny river pebbles.', icon: '🦦' },
    ],
    coordinates: { x: 42, y: 52 },
  },
  {
    id: 'castle_citadel',
    mapCategory: 'central_kingdom',
    name: 'The Citadel of High Astraea',
    subtitle: 'King Alden’s Sunlit Keep & Royal Galleries',
    themeColor: 'amber',
    icon: '🏰',
    days: [9, 10, 11, 12],
    dragonGuardian: 'Royal Guard Drake & Sir Barnaby the Brave',
    subjectFocus: 'KS1 Medieval History & Monarchy',
    weather: 'Warm courtyard breeze, ringing heraldic bells and trumpets',
    lore: 'Built atop golden limestone cliffs 400 years ago during Queen Eleanor’s reign. Its great hall houses medieval heraldic tapestries depicting peace treaties with dragons.',
    secretToFind: 'The secret tapestry passage leading directly to Queen Eleanor’s signet vault.',
    landmarks: [
      { name: 'The Sunlit Great Throne', desc: 'Carved from glowing amber and oak.', icon: '👑' },
      { name: 'The Tapestry Archive', desc: 'Depicting 400 years of Astraean kings & queens.', icon: '🖼️' },
      { name: 'The Royal Herb & Rose Garden', desc: 'Brimming with sweet lavender and mint.', icon: '🌹' },
    ],
    coordinates: { x: 50, y: 24 },
  },
  {
    id: 'crystal_caverns',
    mapCategory: 'central_kingdom',
    name: 'The Crystal Caverns & Fossil Quarry',
    subtitle: 'Prismatic Geodes & Prehistoric Strata',
    themeColor: 'purple',
    icon: '💎',
    days: [13, 14, 15, 16],
    dragonGuardian: 'Glacia the Frost Wyrm & Prehistoric Glow-Moths',
    subjectFocus: 'Earth Science, Rocks & Fossils',
    weather: 'Crisp subterranean air, soothing violet crystal glow',
    lore: 'Formed in cooling volcanic chambers millions of years ago. Ancient ammonite and dinosaur fossils line the rock strata, while amethyst geodes illuminate the deep tunnels.',
    secretToFind: 'The Whispering Geode Chamber that hums in three-part harmonic chords.',
    landmarks: [
      { name: 'The Great Amethyst Observatory', desc: 'A geode as tall as a village house.', icon: '🔮' },
      { name: 'The Prehistoric Sea Fossil Wall', desc: 'Imprinted with ancient ammonites & nautiluses.', icon: '🐚' },
      { name: 'The Subterranean Echo Lake', desc: 'Smooth water reflecting bioluminescent moss.', icon: '🛶' },
    ],
    coordinates: { x: 74, y: 64 },
  },
  {
    id: 'mount_pyra',
    mapCategory: 'central_kingdom',
    name: 'Mount Pyra & Starlight Pinnacle',
    subtitle: 'Volcanic Springs, Solara’s Nest & Dragon Arena',
    themeColor: 'rose',
    icon: '🌋',
    days: [17, 18, 19, 20],
    dragonGuardian: 'Solara the Sun Dragon & Pyra the Ember Wyrm',
    subjectFocus: 'Mental Maths (1-10 / 1-20) & Star Constellations',
    weather: 'Warm geothermal thermals, sparkling stardust dusk',
    lore: 'The highest volcanic crest in Astraea where Solara, Queen of Dragons, guards the Starlight Compass. Solara’s heart responds to arithmetic spells and acts of pure kindness.',
    secretToFind: 'Pyra’s secret geothermal marshmallow roasting pool.',
    landmarks: [
      { name: 'Pyra’s Thermal Marshmallow Pool', desc: 'Bubbling hot springs perfect for campfire treats.', icon: '🍢' },
      { name: 'The Dragon Duel Arena', desc: 'A ring of glowing runic pillars for friendly math duels.', icon: '⚔️' },
      { name: 'Solara’s High Sunlit Nest', desc: 'Piled with golden starlight crystals.', icon: '✨' },
    ],
    coordinates: { x: 84, y: 22 },
  },

  // =========================================================================
  // MAP 2: THE SKY ISLES OF ZEPHYRIA (DAYS 21 - 40)
  // =========================================================================
  {
    id: 'floating_docks',
    mapCategory: 'sky_isles',
    name: 'The Floating Docks of Zephyria',
    subtitle: 'Silk Skiff Moorings & Thermal Glider Launch',
    themeColor: 'sky',
    icon: '⛵',
    days: [21, 22, 23, 24],
    dragonGuardian: 'Aurelius the Sky Gryphon & Master Dylan',
    subjectFocus: 'Advanced Digraphs (/ng/, /ar/) & Cloud Physics',
    weather: 'Crisp mountain breeze, silver updrafts & soaring sky-sparrows',
    lore: 'Suspended in the sky by ancient stardust magnetic rings. Cloud skiffs dock here with silk sails, catching warm thermals to sail between the floating islands.',
    secretToFind: 'The Hidden Cloud Skiff Harbor where star-weavers weave rainbow sails.',
    landmarks: [
      { name: 'The Royal Cloud Skiff Anchorage', desc: 'Where the queen’s flagship rests on cotton fog.', icon: '⚓' },
      { name: 'The Silver Gryphon Perch', desc: 'A high granite nest lined with fragrant cedar.', icon: '🦅' },
      { name: 'The Polished Quartz Terrace', desc: 'Smooth crystal ground reflecting the constellations.', icon: '🌟' },
    ],
    coordinates: { x: 20, y: 65 },
  },
  {
    id: 'cumulus_nursery',
    mapCategory: 'sky_isles',
    name: 'The Fluffy Cumulus Nursery',
    subtitle: 'Baby Cloud Dragon Hammocks & Singing Lilies',
    themeColor: 'emerald',
    icon: '🪺',
    days: [25, 26, 27, 28],
    dragonGuardian: 'Dryad Elora & The Zephyr Dragon Hatchlings',
    subjectFocus: 'Vowel Teams (/ai/, /oa/, /ee/) & Plant Harmonics',
    weather: 'Warm lavender mist, sun-showers & soft double rainbows',
    lore: 'The softest and coziest place in all of Astraea. Giant hammocks woven from cloud-cotton hang from silver birch trees, cradling sleepy dragon hatchlings.',
    secretToFind: 'The Singing Lily Spring that chimes in five musical notes.',
    landmarks: [
      { name: 'The Cloud-Weaver Hammocks', desc: 'Giant suspended cotton beds for napping.', icon: '☁️' },
      { name: 'The Rainbow Lily Terraces', desc: 'Singing flowers that bloom during sun showers.', icon: '🌸' },
      { name: 'The Great Cloud Willow', desc: 'Silver bark tree with leaves as white as snow.', icon: '🌳' },
    ],
    coordinates: { x: 44, y: 48 },
  },
  {
    id: 'chime_belfry',
    mapCategory: 'sky_isles',
    name: 'The Starlight Chime Spire',
    subtitle: 'High Marble Belfry & Phosphor Pools',
    themeColor: 'amber',
    icon: '🔔',
    days: [29, 30, 31, 32],
    dragonGuardian: 'Zephyr the Cloud Wyrm & Bioluminescent Sky-Rays',
    subjectFocus: 'Split Digraphs, Musical Bells & Math Calibration',
    weather: 'Clear dusk breezes, melodic brass chimes carrying for miles',
    lore: 'Rising from a peak of white marble, the belfry houses sixteen bronze bells that guide flying ships through evening fog. Below lie warm volcanic pools glowing with turquoise light.',
    secretToFind: 'The Ancient Signet Vault holding Queen Eleanor’s Cloud Compass.',
    landmarks: [
      { name: 'The Sixteen Brass Bells', desc: 'Tuned to ring in harmony with the wind.', icon: '🛎️' },
      { name: 'The Aurora Glow Lagoon', desc: 'Warm thermal pools where winged rays swim.', icon: '🏊' },
      { name: 'The Zephyr Wind Harp', desc: 'Seventy-foot strings played by mountain thermals.', icon: '🎻' },
    ],
    coordinates: { x: 58, y: 72 },
  },
  {
    id: 'kite_meadows',
    mapCategory: 'sky_isles',
    name: 'The Windy Meadows & Cumulus Maze',
    subtitle: 'Dragon Kite Festivals & Bouncy Cloud Walls',
    themeColor: 'purple',
    icon: '🪁',
    days: [33, 34, 35, 36],
    dragonGuardian: 'Captain Astrid & The Turquoise Sky Robins',
    subjectFocus: 'Split Digraphs (/i_e/, /ou/, /ir/) & Spatial Orientation',
    weather: 'Steady playful gusts, purple clover blossoms dancing in the wind',
    lore: 'A high plateau carpeted with wild clover where young scholars fly silk dragon kites. Beyond lies the Cumulus Labyrinth whose walls are made of bouncy, marshmallow-soft clouds.',
    secretToFind: 'The Bouncy Cloud Trampoline Glade where you can jump forty feet high.',
    landmarks: [
      { name: 'The Dragon Kite Field', desc: 'Dozens of silk kites dancing in the blue sky.', icon: '🎏' },
      { name: 'The Sky Robin Sanctuary', desc: 'Cherry blossoms filled with friendly songbirds.', icon: '🐦' },
      { name: 'The High Azure Promenade', desc: 'A transparent bridge of enchanted solid glass.', icon: '🌉' },
    ],
    coordinates: { x: 76, y: 40 },
  },
  {
    id: 'aurora_summit',
    mapCategory: 'sky_isles',
    name: 'The Grand Aurora Spire',
    subtitle: 'The Cosmic Observatory & Beacon of the Stars',
    themeColor: 'rose',
    icon: '🌌',
    days: [37, 38, 39, 40],
    dragonGuardian: 'King Alden, Queen Solara & The Sovereign Dragons',
    subjectFocus: 'Full Sentence Fluency & 20-Sum Mental Math Mastery',
    weather: 'Radiant aurora borealis curtains of emerald, sapphire and gold',
    lore: 'The highest summit in the Sky Isles. Here stands the Great Beacon, which when ignited unites the earth and sky in perpetual harmony.',
    secretToFind: 'The Constellation Chorus Chamber where the stars sing in harmony.',
    landmarks: [
      { name: 'The Dragon Flight Course', desc: 'Twenty cloud rings suspended in thermal canyons.', icon: '🐲' },
      { name: 'The Starlight Observatory', desc: 'A dome open to the singing constellations.', icon: '🔭' },
      { name: 'The Great Aurora Beacon', desc: 'The golden pillar of rainbow light.', icon: '✨' },
    ],
    coordinates: { x: 86, y: 18 },
  },
];

export const KingdomMapView: React.FC<KingdomMapViewProps> = ({
  hero,
  completedDays = [1],
  onSelectDay,
}) => {
  const [mapMode, setMapMode] = useState<MapMode>('central_kingdom');
  const [mapStyle, setMapStyle] = useState<MapStyle>('parchment');
  const [selectedRegionId, setSelectedRegionId] = useState<string>('whispering_woods');
  const [selectedSagaIndex, setSelectedSagaIndex] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isArtStudioOpen, setIsArtStudioOpen] = useState<boolean>(false);
  const [artStudioPrompt, setArtStudioPrompt] = useState<string>('');
  const [artStudioInitialImage, setArtStudioInitialImage] = useState<string | undefined>(undefined);
  const [customRegionImages, setCustomRegionImages] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_custom_region_art');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const handleOpenArtStudioForRegion = (regionName: string, defaultPrompt: string, currentImg?: string) => {
    soundManager.playSparkle();
    setArtStudioPrompt(defaultPrompt);
    setArtStudioInitialImage(currentImg);
    setIsArtStudioOpen(true);
  };

  const handleSaveCustomRegionArt = (imgUrl: string) => {
    const updated = { ...customRegionImages, [selectedRegionId]: imgUrl };
    setCustomRegionImages(updated);
    try {
      localStorage.setItem('dice_dragons_custom_region_art', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const [foundMapSecrets, setFoundMapSecrets] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dice_dragons_map_secrets');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const currentRegions = REGIONS.filter((r) => r.mapCategory === mapMode);
  const activeRegion =
    REGIONS.find((r) => r.id === selectedRegionId) ||
    currentRegions[0] ||
    REGIONS[0];

  const handleSecretClick = (regionId: string) => {
    if (!foundMapSecrets.includes(regionId)) {
      const updated = [...foundMapSecrets, regionId];
      setFoundMapSecrets(updated);
      try {
        localStorage.setItem('dice_dragons_map_secrets', JSON.stringify(updated));
      } catch {
        // ignore
      }
      soundManager.playVictory();
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    } else {
      soundManager.playSparkle();
    }
  };

  const handleDownloadPdf = () => {
    setIsDownloading(true);
    soundManager.playSparkle();
    setTimeout(() => {
      generateAstraeaMapPdf(hero);
      setIsDownloading(false);
    }, 200);
  };

  const selectedSaga = CAMPAIGN_SAGAS[selectedSagaIndex] || CAMPAIGN_SAGAS[0];

  return (
    <div id="kingdom-map-view" className="w-full max-w-6xl mx-auto p-3 sm:p-6 space-y-6">
      {/* Top Banner with Map Mode Tabs & PDF Download */}
      <div className="bg-gradient-to-r from-amber-800 via-stone-800 to-amber-950 text-white rounded-3xl p-6 shadow-xl border-4 border-amber-400">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-2xl">🗺️✨</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-200 bg-amber-950/80 px-3 py-0.5 rounded-full border border-amber-500">
                Royal Cartography of Astraea • 20 Sagas &amp; 400 Days
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-100">
              {mapMode === 'central_kingdom' && 'The Kingdom of Astraea (Book I)'}
              {mapMode === 'sky_isles' && 'The Sky Isles of Zephyria (Book II)'}
              {mapMode === 'world_atlas' && 'The Grand Atlas of the 20 Sagas'}
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 font-medium max-w-2xl mt-1">
              Explore the physical geography, weather, dragon guardians, and hidden tabletop secrets across all realms of Astraea.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 w-full lg:w-auto">
            {/* Download Physical Map PDF */}
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-amber-500"
              title="Download high-resolution A4 Landscape printable map"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'Drawing Map...' : 'Download Map PDF'}</span>
            </button>
          </div>
        </div>

        {/* Map Mode Selector Tabs */}
        <div className="mt-5 pt-4 border-t border-amber-700/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <button
              onClick={() => {
                setMapMode('central_kingdom');
                setSelectedRegionId('whispering_woods');
                soundManager.playClick();
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                mapMode === 'central_kingdom'
                  ? 'bg-amber-400 text-amber-950 shadow-md ring-2 ring-amber-200'
                  : 'bg-amber-950/60 hover:bg-amber-900 text-amber-200 border border-amber-600'
              }`}
            >
              <Castle className="w-3.5 h-3.5" />
              <span>Book I: Kingdom of Astraea (Days 1–20)</span>
            </button>

            <button
              onClick={() => {
                setMapMode('sky_isles');
                setSelectedRegionId('floating_docks');
                soundManager.playClick();
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                mapMode === 'sky_isles'
                  ? 'bg-sky-400 text-sky-950 shadow-md ring-2 ring-sky-200'
                  : 'bg-amber-950/60 hover:bg-amber-900 text-amber-200 border border-amber-600'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Book II: Sky Isles of Zephyria (Days 21–40)</span>
            </button>

            <button
              onClick={() => {
                setMapMode('world_atlas');
                soundManager.playSparkle();
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                mapMode === 'world_atlas'
                  ? 'bg-emerald-400 text-emerald-950 shadow-md ring-2 ring-emerald-200'
                  : 'bg-amber-950/60 hover:bg-amber-900 text-amber-200 border border-amber-600'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Grand Atlas (20 Sagas • 400 Days)</span>
            </button>
          </div>

          {/* Map Style Switcher */}
          <div className="flex items-center gap-1 text-[11px] font-black uppercase text-amber-300">
            <span>Style:</span>
            {(['parchment', 'watercolor', 'tactical'] as MapStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => {
                  setMapStyle(style);
                  soundManager.playClick();
                }}
                className={`px-2 py-0.5 rounded-lg font-bold text-[10px] capitalize cursor-pointer transition-colors ${
                  mapStyle === style
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'bg-amber-900/60 hover:bg-amber-900 text-amber-200'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1 & 2: INTERACTIVE PHYSICAL PARCHMENT MAP */}
      {/* ========================================================================= */}
      {mapMode !== 'world_atlas' ? (
        <div
          className={`border-4 border-amber-800/80 rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden transition-colors ${
            mapStyle === 'parchment'
              ? 'bg-[#FAF4E5]'
              : mapStyle === 'watercolor'
              ? 'bg-gradient-to-br from-emerald-100 via-amber-100 to-sky-100'
              : 'bg-stone-900 text-white'
          }`}
        >
          {/* Parchment Header with Compass & Region Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-amber-300/80 pb-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-amber-700 bg-amber-100/90 flex items-center justify-center text-amber-900 shadow-inner">
                <Compass className="w-7 h-7 text-amber-800 animate-spin-slow" />
                <span className="absolute -top-1 text-[9px] font-black text-rose-700">N</span>
                <span className="absolute -bottom-1 text-[9px] font-black text-amber-900">S</span>
                <span className="absolute -right-1 text-[9px] font-black text-amber-900">E</span>
                <span className="absolute -left-1 text-[9px] font-black text-amber-900">W</span>
              </div>
              <div>
                <div className="text-xs font-black uppercase text-amber-900 tracking-wider">
                  {mapMode === 'central_kingdom' ? 'Central Astraea Realm' : 'Zephyria Cloud Archipelago'}
                </div>
                <div className="text-[11px] text-amber-700 font-semibold italic">
                  Scale: 1 Inch = 10 Dragon Leaps • Hand-Crafted Cartography
                </div>
              </div>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {currentRegions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setSelectedRegionId(r.id);
                    soundManager.playSparkle();
                  }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    selectedRegionId === r.id
                      ? 'bg-amber-800 text-white shadow-md'
                      : 'bg-white/80 hover:bg-amber-200 text-amber-950 border border-amber-300'
                  }`}
                >
                  <span>{r.icon}</span>
                  <span className="hidden sm:inline">{r.name.split('&')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Illustrated Fantasy Map Canvas */}
          <div
            className={`relative w-full h-[390px] sm:h-[480px] rounded-2xl border-3 border-amber-600/60 overflow-hidden shadow-inner flex items-center justify-center select-none ${
              mapStyle === 'parchment'
                ? 'bg-gradient-to-br from-amber-50 via-[#F7EED6] to-stone-100'
                : mapStyle === 'watercolor'
                ? 'bg-gradient-to-br from-emerald-100 via-sky-100 to-indigo-100'
                : 'bg-stone-950'
            }`}
          >
            {/* Illustrated Map Artwork Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img
                src={
                  mapMode === 'central_kingdom'
                    ? (mapStyle === 'watercolor'
                        ? ADVENTURE_ASSETS.maps.centralKingdomWatercolor
                        : ADVENTURE_ASSETS.maps.centralKingdomParchment)
                    : ADVENTURE_ASSETS.maps.skyIslesWatercolor
                }
                alt="Astraea Realm Cartography"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-40 mix-blend-multiply filter contrast-125 saturate-110 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/25 via-transparent to-amber-900/10 pointer-events-none" />
            </div>

            {/* Drifting Clouds Animation */}
            <motion.div
              animate={{ x: [-120, 900] }}
              transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}
              className="absolute top-10 -left-20 opacity-30 pointer-events-none flex items-center gap-40 z-10"
            >
              <span className="text-6xl filter drop-shadow-md">☁️</span>
              <span className="text-7xl filter drop-shadow-md">☁️</span>
              <span className="text-5xl filter drop-shadow-md">✨</span>
            </motion.div>

            {/* Flying Dragon Companion Patrol */}
            <motion.div
              animate={{
                x: [40, 200, 480, 740, 520, 260, 40],
                y: [80, 240, 160, 90, 220, 300, 80],
                rotate: [0, 15, -12, 8, -14, 12, 0],
              }}
              transition={{ repeat: Infinity, duration: 28, ease: 'easeInOut' }}
              className="absolute top-0 left-0 pointer-events-none z-20 text-3xl filter drop-shadow-lg select-none"
              title="Dragon patrol over Astraea"
            >
              🐲💨
            </motion.div>

            {/* SVG Terrain, Rivers, Contours & Trail Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-10">
              {mapMode === 'central_kingdom' ? (
                <>
                  {/* Rivers */}
                  <path
                    d="M 120 480 Q 220 320 340 240 T 560 120 T 780 40"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  {/* Forest, Mountain, Castle Regions */}
                  <circle cx="180" cy="360" r="110" fill="#a7f3d0" opacity="0.4" />
                  <circle cx="680" cy="340" r="100" fill="#e9d5ff" opacity="0.4" />
                  <circle cx="780" cy="120" r="90" fill="#fecdd3" opacity="0.4" />
                  <circle cx="460" cy="120" r="80" fill="#fef08a" opacity="0.35" />
                  {/* Dotted Trail */}
                  <path
                    d="M 140 400 Q 200 350 280 320 T 440 220 T 500 130 T 650 260 T 780 130"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="4"
                    strokeDasharray="6,6"
                  />
                </>
              ) : (
                <>
                  {/* Sky Isles Floating Clouds & Thermal Currents */}
                  <path
                    d="M 100 380 Q 280 300 450 340 T 750 220"
                    fill="none"
                    stroke="#a5f3fc"
                    strokeWidth="24"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <ellipse cx="200" cy="340" rx="120" ry="60" fill="#e0f2fe" opacity="0.6" />
                  <ellipse cx="440" cy="240" rx="140" ry="70" fill="#dcfce7" opacity="0.6" />
                  <ellipse cx="600" cy="380" rx="130" ry="65" fill="#fef9c3" opacity="0.6" />
                  <ellipse cx="760" cy="200" rx="120" ry="60" fill="#f3e8ff" opacity="0.6" />
                  <ellipse cx="860" cy="90" rx="90" ry="50" fill="#ffe4e6" opacity="0.7" />
                  {/* Rainbow current */}
                  <path
                    d="M 180 340 Q 320 180 440 240 T 760 200 T 860 90"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                  />
                </>
              )}
            </svg>

            {/* Interactive Region Landmark Pins */}
            {currentRegions.map((r) => {
              const isSelected = selectedRegionId === r.id;
              return (
                <motion.div
                  key={r.id}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    position: 'absolute',
                    left: `${r.coordinates.x}%`,
                    top: `${r.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="cursor-pointer z-10"
                  onClick={() => {
                    setSelectedRegionId(r.id);
                    soundManager.playSparkle();
                  }}
                >
                  <div
                    className={`flex flex-col items-center group transition-all ${
                      isSelected ? 'scale-110' : 'opacity-90'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-xl transition-transform border-3 ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-950 ring-4 ring-amber-300'
                          : 'bg-white hover:bg-amber-100 text-stone-800 border-amber-700'
                      }`}
                    >
                      <span>{r.icon}</span>
                    </div>
                    <span
                      className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black shadow-md whitespace-nowrap border ${
                        isSelected
                          ? 'bg-amber-900 text-white border-amber-950'
                          : 'bg-white/95 text-stone-900 border-stone-300'
                      }`}
                    >
                      {r.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Daily Tabletop Camps Bar at bottom of map */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border-2 border-amber-600/70 p-2.5 rounded-2xl text-[11px] font-bold text-amber-950 shadow-md flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-black uppercase tracking-wider text-amber-900">
                  📍 {mapMode === 'central_kingdom' ? 'Book I (Days 1–20):' : 'Book II (Days 21–40):'}
                </span>
              </div>
              <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                {(mapMode === 'central_kingdom'
                  ? Array.from({ length: 20 }, (_, i) => i + 1)
                  : Array.from({ length: 20 }, (_, i) => i + 21)
                ).map((d) => {
                  const isCompleted = completedDays.includes(d);
                  return (
                    <button
                      key={d}
                      onClick={() => {
                        if (onSelectDay) onSelectDay(d);
                        soundManager.playClick();
                      }}
                      className={`w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0 cursor-pointer border transition-transform hover:scale-115 ${
                        isCompleted
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-white hover:bg-amber-100 text-stone-700 border-stone-300'
                      }`}
                      title={`Day ${d}: Click to view daily quest!`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detailed Selected Region Lore & Field Notes */}
          <div className="mt-6 bg-white/95 border-3 border-amber-300 rounded-3xl p-5 sm:p-7 shadow-lg">
            {/* Landscape Artwork Banner with AI Edit Control */}
            <div className="relative h-44 sm:h-60 rounded-2xl overflow-hidden border-2 border-amber-400 mb-5 shadow-md group">
              <img
                src={customRegionImages[activeRegion.id] || (ADVENTURE_ASSETS.regions as Record<string, { bannerUrl?: string }>)[activeRegion.id]?.bannerUrl || ADVENTURE_ASSETS.pages.kingdomMap.bannerUrl}
                alt={activeRegion.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              
              {/* Top Atmospheric Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-200 border border-amber-400/60 shadow">
                  📍 {activeRegion.name} Territory
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/50 backdrop-blur-md text-sky-200 border border-sky-400/40">
                  {activeRegion.weather}
                </span>
              </div>

              {/* AI Art Studio Button */}
              <button
                onClick={() =>
                  handleOpenArtStudioForRegion(
                    activeRegion.name,
                    `A breathtaking fantasy landscape painting of ${activeRegion.name} in the magical realm of Astraea. ${activeRegion.lore}, weather ${activeRegion.weather}, guardian dragon ${activeRegion.dragonGuardian}, rich storybook watercolor illustration.`,
                    customRegionImages[activeRegion.id] || ADVENTURE_ASSETS.regions[activeRegion.id]?.bannerUrl
                  )
                }
                className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1.5 shadow-lg border border-amber-300 transition-all cursor-pointer hover:scale-105"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>{customRegionImages[activeRegion.id] ? '✨ Edit AI Art' : '🎨 Paint with AI'}</span>
              </button>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs sm:text-sm font-medium text-amber-100/90 italic drop-shadow-sm line-clamp-1">
                  &ldquo;{activeRegion.lore.slice(0, 120)}...&rdquo;
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b-2 border-amber-200/80 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{activeRegion.icon}</span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200 px-2.5 py-0.5 rounded-full">
                    Days {activeRegion.days.join(', ')} • {activeRegion.subjectFocus}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 mt-0.5">
                    {activeRegion.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => soundManager.speak(`${activeRegion.name}. ${activeRegion.lore}`)}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-amber-300 shrink-0"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Listen to Lore</span>
                </button>

                {onSelectDay && (
                  <button
                    onClick={() => onSelectDay(activeRegion.days[0])}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-sm shrink-0"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Play Day {activeRegion.days[0]} Quest</span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-800 font-medium">
              <div className="space-y-3">
                <p className="leading-relaxed bg-amber-50/60 p-3.5 rounded-2xl border border-amber-200">
                  {activeRegion.lore}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <span>🐲 Guardians &amp; Friends:</span>
                    <span className="text-stone-700 font-semibold">{activeRegion.dragonGuardian}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <span>🌤️ Weather &amp; Climate:</span>
                    <span className="text-stone-700 font-semibold">{activeRegion.weather}</span>
                  </div>
                </div>
              </div>

              {/* Landmarks & Scavenger Secret */}
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-2">
                  🏛️ Tabletop Landmarks:
                </span>
                <div className="space-y-2">
                  {activeRegion.landmarks.map((lm, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-2.5"
                    >
                      <span className="text-xl select-none">{lm.icon}</span>
                      <div>
                        <div className="font-black text-stone-900 text-xs">{lm.name}</div>
                        <div className="text-[11px] text-stone-600 font-medium">{lm.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Secret Scavenger Discovery */}
                <div className="mt-3 p-3 rounded-xl bg-amber-100/70 border-2 border-amber-300 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-amber-950 font-bold">
                    <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Secret to Find: {activeRegion.secretToFind}</span>
                  </div>
                  <button
                    onClick={() => handleSecretClick(activeRegion.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-black cursor-pointer transition-colors shrink-0 ${
                      foundMapSecrets.includes(activeRegion.id)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-600 text-white'
                    }`}
                  >
                    {foundMapSecrets.includes(activeRegion.id) ? '✓ Found!' : '🔍 Mark Found'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* MODE 3: THE GRAND ATLAS OF THE 20 SAGAS (400 DAYS)                        */
        /* ========================================================================= */
        <div className="bg-[#FAF4E5] border-4 border-amber-800/80 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="border-b-2 border-amber-300/80 pb-4">
            <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 flex items-center gap-2">
              <Globe className="w-6 h-6 text-amber-800" />
              <span>The 20 Sagas of the Astraean Universe (400 Days of Curriculum)</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-medium mt-1">
              Select any of the 20 epic sagas to examine its geographic setting, curriculum focus, and 20-day storyline:
            </p>
          </div>

          {/* 20 Sagas Grid Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
            {CAMPAIGN_SAGAS.map((saga, idx) => {
              const isSelected = selectedSagaIndex === idx;
              return (
                <button
                  key={saga.sagaNumber}
                  onClick={() => {
                    setSelectedSagaIndex(idx);
                    soundManager.playClick();
                  }}
                  className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-white border-amber-900 shadow-md ring-2 ring-amber-300'
                      : 'bg-white hover:bg-amber-100 text-stone-800 border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-lg mb-1">
                    <span className="font-fantasy font-black text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded text-xs">
                      {saga.romanNumeral}
                    </span>
                    <span className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-amber-950/40 text-amber-200' : 'bg-stone-200 text-stone-700'
                    }`}>
                      Days {saga.dayStartNumber}–{saga.dayEndNumber}
                    </span>
                  </div>
                  <div className="font-black text-xs truncate">{saga.title}</div>
                  <div className={`text-[10px] truncate ${isSelected ? 'text-amber-100' : 'text-stone-500'}`}>
                    {saga.worldRegion}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Saga Details Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border-3 border-amber-300 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-amber-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-fantasy font-black text-xl shadow">
                  {selectedSaga.romanNumeral}
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200 px-2.5 py-0.5 rounded-full inline-block">
                    Saga #{selectedSaga.sagaNumber} • Days {selectedSaga.dayStartNumber}–{selectedSaga.dayEndNumber} • {selectedSaga.curriculumFocus}
                  </div>
                  <h4 className="text-xl font-black font-fantasy text-amber-950 mt-1">
                    {selectedSaga.title}
                  </h4>
                  <div className="text-xs text-amber-800 font-bold">{selectedSaga.subtitle}</div>
                </div>
              </div>

              {onSelectDay && (
                <button
                  onClick={() => onSelectDay(selectedSaga.dayStartNumber)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Day {selectedSaga.dayStartNumber}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-800">
              <div className="space-y-2">
                <p className="leading-relaxed bg-amber-50 p-3 rounded-xl border border-amber-200">
                  {selectedSaga.storyArcSummary}
                </p>
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <span>🐲 Dragon Companion:</span>
                  <span className="text-stone-700">{selectedSaga.dragonCompanion}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <span>🏆 Graduation Heirloom:</span>
                  <span className="text-stone-700">{selectedSaga.legendaryArtifact}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block mb-2">
                  🗓️ 20-Day Thematic Breakdown:
                </span>
                <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {selectedSaga.dailyThemes.map((dayTheme) => (
                    <div
                      key={dayTheme.dayNumber}
                      className="p-2 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-black text-amber-800 w-14 shrink-0">Day {dayTheme.dayNumber}:</span>
                        <span className="font-medium text-stone-900 truncate max-w-xs">{dayTheme.title}</span>
                      </div>
                      <span className="text-[10px] text-stone-500 font-mono shrink-0">{dayTheme.focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Art Studio Modal for Map & Region Artwork */}
      {isArtStudioOpen && (
        <ArtStudioModal
          hero={hero}
          initialPrompt={artStudioPrompt}
          initialImage={artStudioInitialImage}
          onClose={() => setIsArtStudioOpen(false)}
          onSaveCustomArt={(imgUrl) => {
            handleSaveCustomRegionArt(imgUrl);
            setIsArtStudioOpen(false);
          }}
        />
      )}
    </div>
  );
};
