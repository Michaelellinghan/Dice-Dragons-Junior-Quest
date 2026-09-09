import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from '../types';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Wand2,
  Image as ImageIcon,
  Download,
  Upload,
  UserCheck,
  RefreshCw,
  Sliders,
  Palette,
  Eye,
  X,
  Check,
  Info,
  HelpCircle,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ArtStudioModalProps {
  hero: Hero;
  onUpdateHeroPortrait?: (newPortraitUrl: string) => void;
  onClose: () => void;
  initialMode?: 'create' | 'edit';
  initialImageUrl?: string;
}

const PROMPT_SUGGESTIONS = [
  {
    title: 'Baby Forest Dragon',
    prompt: 'A tiny friendly baby moss wyrm dragon with emerald scales sleeping on an ancient mossy log, surrounded by glowing butterflies and wildflowers',
    style: 'storybook fantasy',
  },
  {
    title: 'Floating Cloud Castle',
    prompt: 'A whimsical fairytale castle perched on a fluffy white cloud island, with rainbow waterfalls pouring into the blue sky and golden spires',
    style: 'watercolor tale',
  },
  {
    title: 'Secret Tabletop Map',
    prompt: 'An ancient hand-drawn parchment cartography map of an enchanted kingdom with winding rivers, mountain peaks, dragon icons, and a decorative compass rose',
    style: 'vintage parchment',
  },
  {
    title: 'Brave Little Knight',
    prompt: 'A cheerful young child in shining silver armor holding a polished wooden sword, smiling proudly in front of a medieval stone fortress',
    style: 'storybook fantasy',
  },
  {
    title: 'Glittering Crystal Cave',
    prompt: 'A magical underground cavern filled with giant glowing violet amethyst geodes, turquoise subterranean lakes, and gentle warm light',
    style: 'radiant magical',
  },
];

const EDIT_SUGGESTIONS = [
  'Add a friendly smiling baby dragon perched on the shoulder or tree',
  'Change the time of day to starry night with glowing fireflies and aurora',
  'Add a sparkling double rainbow arching across the sky',
  'Cover the scene in gentle sparkling winter snow and frosted crystals',
  'Add glowing ancient gold runes floating in the air',
];

export const ArtStudioModal: React.FC<ArtStudioModalProps> = ({
  hero,
  onUpdateHeroPortrait,
  onClose,
  initialMode = 'create',
  initialImageUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'edit'>(initialMode);
  const [prompt, setPrompt] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('storybook fantasy');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '16:9' | '4:3' | '3:4'>('1:1');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(initialImageUrl || null);
  const [caption, setCaption] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Edit Mode state
  const [imageToEdit, setImageToEdit] = useState<string>(
    initialImageUrl || ADVENTURE_ASSETS.regions.whispering_woods.bannerUrl
  );
  const [editPrompt, setEditPrompt] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setErrorMessage(null);
    soundManager.playSparkle();

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          style: selectedStyle,
          aspectRatio,
          imageSize: '1K',
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Generation failed');
      }

      setGeneratedImage(data.imageUrl);
      setCaption(data.caption || null);
      soundManager.playVictory();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } catch (err: any) {
      console.warn('Image generation warning:', err);
      // If API key is missing or quota reached, provide a beautiful curated preset fallback so user experience is smooth
      const fallbackUrl =
        selectedStyle === 'vintage parchment'
          ? ADVENTURE_ASSETS.maps.centralKingdomParchment
          : selectedStyle === 'watercolor tale'
          ? ADVENTURE_ASSETS.maps.skyIslesWatercolor
          : ADVENTURE_ASSETS.regions.whispering_woods.bannerUrl;

      setGeneratedImage(fallbackUrl);
      setErrorMessage(
        err.message?.includes('GEMINI_API_KEY')
          ? 'Notice: Running in preview gallery mode. Configure GEMINI_API_KEY in Settings for custom live AI generations.'
          : `Note: ${err.message || 'Gallery mode preview loaded.'}`
      );
      soundManager.playSparkle();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = async () => {
    if (!editPrompt.trim() || !imageToEdit) return;
    setIsGenerating(true);
    setErrorMessage(null);
    soundManager.playSparkle();

    try {
      // Check if image is already a base64 string, or fetch & convert it
      let base64Data = imageToEdit;
      if (imageToEdit.startsWith('http')) {
        try {
          const res = await fetch(imageToEdit);
          const blob = await res.blob();
          base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          });
        } catch {
          // If CORS prevents direct fetch of remote image, continue with placeholder
        }
      }

      const response = await fetch('/api/edit-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: editPrompt,
          imageBase64: base64Data,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Edit failed');
      }

      setGeneratedImage(data.imageUrl);
      setCaption(data.caption || null);
      soundManager.playVictory();
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    } catch (err: any) {
      console.warn('Image edit warning:', err);
      // Fallback
      setGeneratedImage(imageToEdit);
      setErrorMessage(
        err.message?.includes('GEMINI_API_KEY')
          ? 'Notice: Live AI image editing requires GEMINI_API_KEY. You can view the original image or select other adventure artwork below.'
          : `Note: ${err.message || 'Editing preview completed.'}`
      );
      soundManager.playSparkle();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageToEdit(result);
      soundManager.playSparkle();
    };
    reader.readAsDataURL(file);
  };

  const handleSetAsHeroPortrait = () => {
    if (generatedImage && onUpdateHeroPortrait) {
      onUpdateHeroPortrait(generatedImage);
      soundManager.playVictory();
      confetti({ particleCount: 30, spread: 50 });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#FAF6EE] border-4 border-amber-500 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900 text-white p-5 sm:p-6 border-b-4 border-amber-400 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center shadow text-2xl font-black">
              🎨
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-500">
                  Gemini Creative Studio
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-fantasy text-amber-100 mt-0.5">
                The Royal Dragon Art Studio
              </h2>
              <p className="text-xs text-amber-200 font-medium">
                Create new fantasy illustrations or edit existing adventure scenes with text prompts!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500 flex items-center justify-center text-amber-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="bg-amber-100/90 border-b-2 border-amber-300 px-6 py-2.5 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('create');
                soundManager.playClick();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'create'
                  ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300'
                  : 'bg-white hover:bg-amber-50 text-stone-700 border border-amber-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Create New Image</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('edit');
                soundManager.playClick();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'edit'
                  ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300'
                  : 'bg-white hover:bg-amber-50 text-stone-700 border border-amber-200'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>Edit Existing Image</span>
            </button>
          </div>

          <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="bg-amber-200 px-2 py-0.5 rounded font-mono text-[11px] text-amber-950 font-black">
              gemini-3.1-flash-image
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Prompt Controls */}
          <div className="lg:col-span-6 space-y-4">
            {activeTab === 'create' ? (
              <>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                    What magical scene would you like to imagine?
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your dragon, castle, forest glade, or heroic adventure..."
                    rows={3}
                    className="w-full p-3 rounded-2xl border-2 border-amber-300 bg-white text-stone-900 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-inner"
                  />
                </div>

                {/* Prompt Inspiration Pills */}
                <div>
                  <span className="text-[11px] font-black uppercase text-amber-900 block mb-1.5">
                    ✨ Quick Story Ideas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PROMPT_SUGGESTIONS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setPrompt(item.prompt);
                          setSelectedStyle(item.style);
                          soundManager.playClick();
                        }}
                        className="px-2.5 py-1 rounded-xl bg-white hover:bg-amber-100 text-stone-800 text-[11px] font-bold border border-amber-200 shadow-sm transition-colors cursor-pointer text-left"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Art Style Selector */}
                <div>
                  <span className="text-[11px] font-black uppercase text-amber-900 block mb-1.5">
                    🎨 Art Style:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'storybook fantasy', label: 'Storybook Fantasy' },
                      { id: 'watercolor tale', label: 'Soft Watercolor' },
                      { id: 'vintage parchment', label: 'Vintage Parchment' },
                      { id: 'radiant magical', label: 'Radiant Glow' },
                      { id: 'pencil sketch', label: 'Color Pencil Tale' },
                      { id: 'tabletop miniature', label: 'Tabletop RPG' },
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => {
                          setSelectedStyle(style.id);
                          soundManager.playClick();
                        }}
                        className={`p-2 rounded-xl text-xs font-black transition-all cursor-pointer text-center border ${
                          selectedStyle === style.id
                            ? 'bg-amber-500 text-white border-amber-700 shadow-sm'
                            : 'bg-white hover:bg-amber-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div>
                  <span className="text-[11px] font-black uppercase text-amber-900 block mb-1.5">
                    📐 Canvas Shape:
                  </span>
                  <div className="flex items-center gap-2">
                    {[
                      { id: '1:1', label: '1:1 Square (Portrait/Badge)' },
                      { id: '16:9', label: '16:9 Banner (Landscape)' },
                      { id: '4:3', label: '4:3 Card (Quest Scene)' },
                      { id: '3:4', label: '3:4 Hero (Full Length)' },
                    ].map((ratio) => (
                      <button
                        key={ratio.id}
                        onClick={() => {
                          setAspectRatio(ratio.id as any);
                          soundManager.playClick();
                        }}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold cursor-pointer transition-colors border ${
                          aspectRatio === ratio.id
                            ? 'bg-amber-800 text-white border-amber-900 shadow'
                            : 'bg-white hover:bg-amber-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        {ratio.id}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 border-2 border-amber-600"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Enchanting Canvas with Gemini...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Bring Scene to Life!</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              /* EDIT MODE */
              <>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                    1. Choose Base Image to Edit:
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-2 rounded-xl bg-white hover:bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload Your Drawing/Photo</span>
                    </button>
                    <span className="text-[11px] text-stone-500">or pick from adventure scenes:</span>
                  </div>

                  {/* Preset Scene Thumbnails */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {[
                      { name: 'Forest', url: ADVENTURE_ASSETS.regions.whispering_woods.bannerUrl },
                      { name: 'River', url: ADVENTURE_ASSETS.regions.four_winds_river.bannerUrl },
                      { name: 'Citadel', url: ADVENTURE_ASSETS.regions.castle_citadel.bannerUrl },
                      { name: 'Caves', url: ADVENTURE_ASSETS.regions.crystal_caverns.bannerUrl },
                      { name: 'Volcano', url: ADVENTURE_ASSETS.regions.mount_pyra.bannerUrl },
                      { name: 'Cloud Docks', url: ADVENTURE_ASSETS.regions.floating_docks.bannerUrl },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setImageToEdit(item.url);
                          soundManager.playClick();
                        }}
                        className={`relative rounded-xl overflow-hidden border-2 shrink-0 w-16 h-14 cursor-pointer transition-transform ${
                          imageToEdit === item.url ? 'ring-2 ring-amber-500 border-amber-800 scale-105' : 'border-stone-300'
                        }`}
                      >
                        <img
                          src={item.url}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-[9px] font-black text-center py-0.5">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                    2. Describe What to Change or Add:
                  </label>
                  <textarea
                    value={editPrompt}
                    onChange={(e) => setEditPrompt(e.target.value)}
                    placeholder="e.g., 'Add a friendly purple baby dragon next to the castle and make it sunset with fireflies'..."
                    rows={3}
                    className="w-full p-3 rounded-2xl border-2 border-amber-300 bg-white text-stone-900 text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-inner"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-black uppercase text-amber-900 block mb-1.5">
                    🪄 Fun Edit Ideas:
                  </span>
                  <div className="space-y-1">
                    {EDIT_SUGGESTIONS.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setEditPrompt(sug);
                          soundManager.playClick();
                        }}
                        className="w-full text-left px-2.5 py-1 rounded-xl bg-white hover:bg-amber-100 text-stone-800 text-[11px] font-medium border border-amber-200 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Wand2 className="w-3 h-3 text-amber-600 shrink-0" />
                        <span className="truncate">{sug}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleEdit}
                  disabled={isGenerating || !editPrompt.trim()}
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 border-2 border-amber-600"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Transforming with Gemini...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>Apply Magical Edit!</span>
                    </>
                  )}
                </button>
              </>
            )}

            {errorMessage && (
              <div className="p-3 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950 text-xs font-medium flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Right Column: Visual Preview Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center bg-stone-900 rounded-3xl p-5 border-4 border-amber-300 relative min-h-[340px]">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-20 h-20 rounded-full border-4 border-amber-400 border-t-transparent animate-spin flex items-center justify-center text-3xl">
                  🐲
                </div>
                <div className="text-white font-black font-fantasy text-lg">
                  Mixing Dragon Paints...
                </div>
                <p className="text-amber-200 text-xs max-w-xs">
                  The starlight quill is drawing your fantasy vision stroke by stroke!
                </p>
              </div>
            ) : generatedImage ? (
              <div className="w-full flex flex-col items-center space-y-3">
                <div className="relative w-full max-h-[380px] rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-black flex items-center justify-center">
                  <img
                    src={generatedImage}
                    alt="Generated fantasy scene"
                    className="w-full h-full object-contain max-h-[380px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-amber-950/80 text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-500">
                    AI Story Artwork
                  </div>
                </div>

                {caption && (
                  <p className="text-amber-100 text-xs italic text-center px-4 font-medium">
                    "{caption}"
                  </p>
                )}

                {/* Actions on Generated Image */}
                <div className="flex flex-wrap items-center justify-center gap-2 w-full pt-1">
                  {onUpdateHeroPortrait && (
                    <button
                      onClick={handleSetAsHeroPortrait}
                      className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs flex items-center gap-1.5 shadow cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Set as Hero Portrait</span>
                    </button>
                  )}

                  <a
                    href={generatedImage}
                    download="dice-and-dragons-art.png"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 font-black text-xs flex items-center gap-1.5 border border-amber-500 shadow cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Image</span>
                  </a>

                  <button
                    onClick={() => {
                      setImageToEdit(generatedImage);
                      setActiveTab('edit');
                      soundManager.playClick();
                    }}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center gap-1.5 shadow cursor-pointer"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>Edit this Image</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 text-stone-400">
                <div className="w-16 h-16 rounded-2xl bg-stone-800 border-2 border-stone-700 flex items-center justify-center text-3xl">
                  🖼️
                </div>
                <div className="text-white font-black text-sm">Artwork Canvas Ready</div>
                <p className="text-stone-400 text-xs max-w-xs">
                  Type an idea on the left and click "Bring Scene to Life" to generate customized adventure art!
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
