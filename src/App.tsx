import React, { useState, useEffect } from 'react';
import { Hero } from './types';
import { PRESET_HEROES } from './data/heroes';
import { Navbar } from './components/Navbar';
import { StoryQuestView } from './components/StoryQuestView';
import { DailyCampaignsView } from './components/DailyCampaignsView';
import { DragonDuelArena } from './components/DragonDuelArena';
import { CharacterSheet } from './components/CharacterSheet';
import { TabletopDMKit } from './components/TabletopDMKit';
import { PrintableScreenFreeKit } from './components/PrintableScreenFreeKit';
import { WorldAtlasModal } from './components/WorldAtlasModal';
import { KingdomMapView } from './components/KingdomMapView';
import { ArtStudioModal } from './components/ArtStudioModal';
import { soundManager } from './utils/audio';

export default function App() {
  // Load saved hero or default to Aria
  const [hero, setHero] = useState<Hero>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dice_dragons_hero');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return PRESET_HEROES[0];
  });

  const [currentTab, setCurrentTab] = useState<
    'story' | 'daily' | 'map' | 'arena' | 'sheet' | 'dm-kit' | 'screen-free' | 'world-atlas' | 'art-studio'
  >('story');

  const [currentNodeId, setCurrentNodeId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dice_dragons_node') || 'act1_intro';
    }
    return 'act1_intro';
  });

  const [arenaDragonId, setArenaDragonId] = useState<string>('sparky');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Save hero to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dice_dragons_hero', JSON.stringify(hero));
    } catch {
      // ignore
    }
  }, [hero]);

  // Save quest node
  useEffect(() => {
    try {
      localStorage.setItem('dice_dragons_node', currentNodeId);
    } catch {
      // ignore
    }
  }, [currentNodeId]);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.sfxEnabled = next;
    soundManager.voiceEnabled = next;
    if (!next) {
      soundManager.stopSpeaking();
    }
  };

  const handleTriggerDragonArena = (dragonId: string) => {
    setArenaDragonId(dragonId);
    setCurrentTab('arena');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-stone-800 font-sans selection:bg-amber-200">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        hero={hero}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 py-4 sm:py-8 px-2 sm:px-4">
        {currentTab === 'story' && (
          <StoryQuestView
            hero={hero}
            currentNodeId={currentNodeId}
            onNavigateNode={(nextId) => setCurrentNodeId(nextId)}
            onTriggerDragonArena={handleTriggerDragonArena}
            onHeroUpdate={(updatedHero) => setHero(updatedHero)}
            onOpenDailyCampaigns={() => setCurrentTab('daily')}
          />
        )}

        {currentTab === 'daily' && (
          <DailyCampaignsView
            hero={hero}
            onHeroUpdate={(updatedHero) => setHero(updatedHero)}
            onOpenPrintableKit={() => setCurrentTab('screen-free')}
            onOpenMap={() => setCurrentTab('map')}
          />
        )}

        {currentTab === 'map' && (
          <KingdomMapView
            hero={hero}
            onSelectDay={(dayNum) => {
              setCurrentTab('daily');
            }}
          />
        )}

        {currentTab === 'arena' && (
          <DragonDuelArena
            hero={hero}
            initialDragonId={arenaDragonId}
            onExit={() => setCurrentTab('story')}
            onVictory={(dragon) => {
              // Advance story if defeating Solara
              if (dragon.id === 'solara') {
                setCurrentNodeId('act6_victory');
              }
            }}
            onHeroUpdate={(updatedHero) => setHero(updatedHero)}
          />
        )}

        {currentTab === 'sheet' && (
          <CharacterSheet
            hero={hero}
            onSelectHero={(newHero) => setHero(newHero)}
            onUpdateHero={(updated) => setHero(updated)}
            onClose={() => setCurrentTab('story')}
          />
        )}

        {currentTab === 'screen-free' && <PrintableScreenFreeKit hero={hero} />}

        {currentTab === 'world-atlas' && <WorldAtlasModal onClose={() => setCurrentTab('story')} />}

        {currentTab === 'dm-kit' && <TabletopDMKit hero={hero} />}

        {currentTab === 'art-studio' && (
          <ArtStudioModal
            hero={hero}
            onClose={() => setCurrentTab('story')}
            onUpdateHeroPortrait={(newPortraitUrl) => {
              setHero({ ...hero, portraitUrl: newPortraitUrl });
            }}
          />
        )}
      </main>

      {/* Bottom Subtle Footer */}
      <footer className="border-t border-amber-200/80 bg-amber-50/60 py-3 text-center text-xs text-stone-500 print:hidden">
        <p className="font-semibold text-amber-900">
          Dice & Dragons: Junior Quest — Supporting English National Curriculum & KS1 Phonics, Early Maths, History & Geography
        </p>
      </footer>
    </div>
  );
}
