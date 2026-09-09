import React, { useState } from 'react';
import { Hero } from '../types';
import { PRESET_HEROES } from '../data/heroes';
import { REALM_LORE } from '../data/worldLore';
import { SPELL_ACTIONS } from '../data/mathSpells';
import { READING_CARDS } from '../data/readingCards';
import { DAILY_CAMPAIGNS } from '../data/dailyCampaigns';
import { ADVENTURE_ASSETS } from '../data/adventureAssets';
import {
  Printer,
  FileText,
  Map,
  Dices,
  Scissors,
  Sparkles,
  BookOpen,
  Award,
  Shield,
  Heart,
  Calendar,
  Layers,
  Download,
} from 'lucide-react';
import {
  generateReadingCardsPdf,
  generateCampaignChroniclePdf,
  generateCharacterAndAccessoriesPdf,
} from '../utils/pdfGenerator';

interface PrintableScreenFreeKitProps {
  hero: Hero;
}

export const PrintableScreenFreeKit: React.FC<PrintableScreenFreeKitProps> = ({ hero }) => {
  const [selectedSection, setSelectedSection] = useState<
    'all' | 'cards_30' | 'campaign_20' | 'standees_map' | 'character' | 'dice_tokens' | 'spells' | 'certificate'
  >('all');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="printable-screen-free-kit" className="w-full max-w-5xl mx-auto p-3 sm:p-6">
      {/* Visual Illustrated Hero Banner (Hidden during print) */}
      <div className="print:hidden relative h-36 sm:h-48 rounded-3xl overflow-hidden border-4 border-amber-400 mb-5 shadow-xl group">
        <img
          src={ADVENTURE_ASSETS.pages.screenFreeKit.bannerUrl}
          alt="Tabletop Print and Play Materials"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex items-end p-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40">
              PHYSICAL CRAFTING &amp; TABLETOP SESSIONS
            </span>
            <h1 className="text-xl sm:text-2xl font-black font-fantasy text-white drop-shadow">
              Cut, Fold, Roll &amp; Learn Together
            </h1>
          </div>
        </div>
      </div>

      {/* Control Banner (Hidden during actual print) */}
      <div className="print:hidden bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white rounded-3xl p-6 shadow-xl mb-6 border-4 border-amber-400">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🖨️✂️</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/70 px-3 py-0.5 rounded-full border border-amber-600">
                100% Screen-Free Physical Resources
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-200">
              The Tabletop Print & Play Kit
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl font-medium mt-1">
              Download real ready-to-print PDF files or print directly! Includes the 30-Card Phonics Deck, 20-Day Campaign Chronicle (~20 min/day = 6.6+ hours!), foldable dice, standees, character sheets, and diplomas!
            </p>
          </div>

          {/* Action Buttons: Real PDF Downloads & Browser Print */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => generateReadingCardsPdf()}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-2xl bg-amber-300 hover:bg-amber-200 text-amber-950 font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Download actual 30-Card PDF file"
            >
              <Download className="w-4 h-4" />
              <span>30 Cards (PDF)</span>
            </button>

            <button
              onClick={() => generateCampaignChroniclePdf()}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Download actual 20-Day Campaign Handbook PDF file"
            >
              <Download className="w-4 h-4" />
              <span>20-Day Book (PDF)</span>
            </button>

            <button
              onClick={() => generateCharacterAndAccessoriesPdf(hero)}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-2xl bg-orange-400 hover:bg-orange-300 text-amber-950 font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Download Character sheet, dice net & diploma PDF file"
            >
              <Download className="w-4 h-4" />
              <span>Character Kit (PDF)</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-amber-400"
            >
              <Printer className="w-4 h-4" />
              <span>Print Page</span>
            </button>
          </div>
        </div>

        {/* Section Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto mt-5 pt-3 border-t border-amber-700">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider shrink-0">
            View / Filter:
          </span>
          {[
            { id: 'all', label: 'All Resources (Complete Kit)' },
            { id: 'cards_30', label: '🃏 30-Card Cut-Out Reading Deck' },
            { id: 'campaign_20', label: '📅 20-Day Campaign Chronicle' },
            { id: 'standees_map', label: '🗺️ Playmat & Mini Standees' },
            { id: 'character', label: '🎨 Coloring Character Sheets' },
            { id: 'dice_tokens', label: '🎲 Foldable Dice & Tokens' },
            { id: 'spells', label: '✨ Arithmetic Spell Cards' },
            { id: 'certificate', label: '🏆 Hero Certificate' },
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSection === sec.id
                  ? 'bg-amber-400 text-amber-950'
                  : 'bg-amber-950/60 hover:bg-amber-900 text-amber-200 border border-amber-700'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRINTABLE PAGES CONTAINER */}
      <div className="space-y-8 print:space-y-12 text-stone-900">
        {/* ============================================================ */}
        {/* 1. 30-CARD CUT-OUT TABLETOP PHONICS & READING DECK           */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'cards_30') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="border-b-2 border-stone-300 pb-4 mb-5 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Tactile Tabletop Cards • English Curriculum KS1 (Phases 2-4)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-950 print:text-black">
                The Complete 30-Card Tabletop Reading Deck
              </h3>
              <p className="text-xs text-stone-600 print:text-black mt-1 max-w-2xl mx-auto">
                Cut along the dashed lines with scissors. During tabletop play, the DM places each card directly in front of the child. The child touches each sound button (dots for letters, dashes for digraphs) and reads the card aloud!
              </p>
              <div className="print:hidden mt-3 flex justify-center">
                <button
                  onClick={() => generateReadingCardsPdf()}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete 30-Card Deck (PDF)</span>
                </button>
              </div>
            </div>

            {/* 30 Cut-Out Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 print:grid-cols-3">
              {READING_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="border-2 border-dashed border-stone-400 rounded-2xl p-4 bg-amber-50/50 print:bg-white flex flex-col justify-between text-center relative overflow-hidden"
                >
                  {/* Scissors Icon Guide */}
                  <div className="absolute top-1 right-1 text-stone-400 text-[10px]">✂️</div>

                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-stone-300 pb-1 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 print:text-black">
                        {card.cardNumber}
                      </span>
                      <span className="text-sm select-none">{card.glyph}</span>
                    </div>

                    <h5 className="text-xs font-black font-fantasy text-stone-900 print:text-black line-clamp-1 mb-1">
                      {card.title}
                    </h5>

                    {/* Word / Sentence Display */}
                    {card.sentence ? (
                      <div className="my-2 p-2 bg-white print:bg-transparent rounded-lg border border-stone-200 text-xs font-bold text-stone-800 leading-snug">
                        &ldquo;{card.sentence}&rdquo;
                      </div>
                    ) : (
                      <div className="my-2">
                        <div className="text-3xl font-black font-mono tracking-widest text-stone-900 print:text-black">
                          {card.word}
                        </div>
                        {/* Sound Buttons (Dots & Dashes) */}
                        <div className="flex items-center justify-center gap-3 mt-1.5">
                          {card.soundButtons?.map((btn, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                              {btn === 'dash' ? (
                                <div className="w-5 h-1.5 bg-stone-800 rounded-full" />
                              ) : (
                                <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" />
                              )}
                              <span className="text-[8px] font-bold text-stone-500">
                                {card.phonemes?.[idx] || ''}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: DM Prompt */}
                  <div className="border-t border-stone-200 pt-1.5 mt-2">
                    <p className="text-[9px] text-stone-600 print:text-black italic">
                      {card.flavor}
                    </p>
                    <span className="text-[8px] font-extrabold text-amber-800 print:text-black block mt-1">
                      👉 DM: Place in front of player. Read to cast spell!
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 2. THE 20-DAY CAMPAIGN CHRONICLE SESSION HANDBOOK            */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'campaign_20') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="border-b-2 border-stone-300 pb-4 mb-5 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Tabletop DM Handbook • 20 Sessions (~20 Mins Each)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-950 print:text-black">
                The 20-Day Astraea Campaign Chronicle
              </h3>
              <p className="text-xs text-stone-600 print:text-black mt-1 max-w-2xl mx-auto">
                A structured 20-day tabletop roleplay campaign for parents and teachers. Each day lasts ~20 minutes. Place the assigned card in front of the players, read the script aloud, roll a D6, and solve the arithmetic spell challenge!
              </p>
              <div className="print:hidden mt-3 flex justify-center">
                <button
                  onClick={() => generateCampaignChroniclePdf()}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download 20-Day Campaign Handbook (PDF)</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              {DAILY_CAMPAIGNS.map((camp) => (
                <div
                  key={camp.dayNumber}
                  className="border-2 border-stone-300 rounded-2xl p-4 bg-stone-50 print:bg-transparent print:border-stone-400"
                >
                  {/* Day Title Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-black bg-amber-200 print:bg-stone-200 text-stone-900 px-2 py-0.5 rounded-md text-xs">
                        DAY {camp.dayNumber}
                      </span>
                      <h4 className="font-black text-sm text-stone-900 print:text-black">
                        {camp.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold text-stone-600">
                      Region: {camp.region} • {camp.durationMinutes} Mins
                    </span>
                  </div>

                  {/* 3 Columns: DM Read-Aloud, Card & Math, Dice & Reward */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Col 1: Read Aloud Script */}
                    <div>
                      <span className="font-bold text-stone-700 print:text-black uppercase text-[10px] block mb-1">
                        📖 DM Read-Aloud Script:
                      </span>
                      <p className="italic text-stone-800 print:text-black leading-relaxed">
                        {camp.dmScript}
                      </p>
                    </div>

                    {/* Col 2: Card & Math Challenge */}
                    <div>
                      <span className="font-bold text-stone-700 print:text-black uppercase text-[10px] block mb-1">
                        🃏 Card to Place & Math Spell:
                      </span>
                      <div className="p-2 bg-white print:bg-transparent border border-stone-300 rounded-xl space-y-1">
                        <div className="font-bold text-amber-900 print:text-black">
                          👉 Place Card: #{camp.tableCardId.replace('card_', '')} ({camp.cardToPlace.word || camp.cardToPlace.title})
                        </div>
                        <div className="font-semibold text-stone-800">
                          Spell: {camp.mathChallenge.spellName}
                        </div>
                        <div className="text-stone-600">
                          Problem: {camp.mathChallenge.problem} = <strong>{camp.mathChallenge.answer}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Col 3: Dice & Bedtime Wrapup */}
                    <div>
                      <span className="font-bold text-stone-700 print:text-black uppercase text-[10px] block mb-1">
                        🎲 Dice Check & Bedtime Note:
                      </span>
                      <div className="p-2 bg-white print:bg-transparent border border-stone-300 rounded-xl space-y-1">
                        <div>
                          <strong>D6 Roll (DC {camp.diceCheck.dc}+):</strong> {camp.diceCheck.prompt}
                        </div>
                        <div className="text-emerald-800 font-semibold">
                          ✓ Reward: +{camp.reward.sparks}⭐, {camp.reward.badge}
                        </div>
                        <p className="text-stone-500 italic text-[10px] mt-1">
                          🌙 Bedtime: &ldquo;{camp.bedtimeReflection}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 3. TABLETOP HEX PLAYMAT & CUT-OUT STANDEES                   */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'standees_map') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="border-b-2 border-stone-300 pb-4 mb-5 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Tabletop Accessories • Miniatures & Playmat
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-fantasy text-amber-950 print:text-black">
                Fold-and-Stand Paper Miniatures & Adventure Playmat
              </h3>
              <p className="text-xs text-stone-600 print:text-black mt-1">
                Cut around the hero rectangles, fold along the dotted line, and tape the tabs to stand up on your table!
              </p>
            </div>

            {/* Foldable Standees Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { name: 'Aria Star-Mage', icon: '🧙‍♀️', type: 'Spells & Smarts', color: 'border-purple-400' },
                { name: 'Sir Barnaby', icon: '🦁', type: 'Shield & Bravery', color: 'border-amber-400' },
                { name: 'Rowan Fox-Scout', icon: '🦊', type: 'Speed & Nature', color: 'border-orange-400' },
                { name: 'Solara the Dragon', icon: '🐲', type: 'Guardian Dragon', color: 'border-emerald-400' },
              ].map((standee, idx) => (
                <div
                  key={idx}
                  className={`border-2 border-dashed ${standee.color} p-3 rounded-2xl text-center bg-stone-50 print:bg-white flex flex-col items-center justify-between`}
                >
                  <div className="text-[9px] text-stone-400">✂️ Cut Out</div>
                  <div className="my-2">
                    <span className="text-4xl select-none block mb-1">{standee.icon}</span>
                    <h5 className="font-black text-xs text-stone-900 print:text-black">{standee.name}</h5>
                    <span className="text-[10px] text-stone-500 font-semibold">{standee.type}</span>
                  </div>
                  <div className="w-full border-t-2 border-dotted border-stone-400 pt-1 mt-2 text-[9px] font-bold text-stone-500">
                    FOLD BASE TAB HERE
                  </div>
                </div>
              ))}
            </div>

            {/* Printable Grid Playmat */}
            <div className="border-4 border-stone-800 rounded-2xl p-4 bg-amber-50/70 print:bg-white text-center">
              <div className="flex items-center justify-between border-b border-stone-300 pb-2 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 print:text-black">
                  🧭 Kingdom of Astraea • Adventure Playmat Grid
                </span>
                <span className="text-xs font-bold text-stone-500">N ↑ E → S ↓ W ←</span>
              </div>

              {/* Grid Cells */}
              <div className="grid grid-cols-6 gap-2 text-center text-xs my-2">
                {[
                  '🌲 Sun-Glade (Gate)',
                  '🌲 Oak Hollow',
                  '🧭 4-Winds River',
                  '⛵ Otter Dam',
                  '🏰 Moat Lilies',
                  '🏰 Great Drawbridge',
                  '👑 Great Hall',
                  '🛡️ Castle Armory',
                  '🧱 Stone Barrier',
                  '🏔️ Mountain Pass',
                  '💎 Ammonite Fossil',
                  '🔮 Gem Door',
                  '🌌 Zephyr Clouds',
                  '🔥 Sparky\'s Lair',
                  '❄️ Glacia Peak',
                  '🌿 Bramble Vines',
                  '⭐ Solara Crater',
                  '👑 Crown of Astraea',
                ].map((zone, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-stone-400 print:border-black rounded-xl p-2 min-h-[60px] flex items-center justify-center font-bold text-stone-800 bg-white print:bg-transparent"
                  >
                    {zone}
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-stone-500 font-medium">
                Move your paper miniatures across the zones as you progress each day!
              </span>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. COLORING CHARACTER SHEETS                                 */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'character') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="text-center border-b-2 border-stone-300 pb-3 mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Adventurer Registry • Tabletop Character Sheet
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 print:text-black">
                Young Hero Dossier (Ready to Color!)
              </h3>
              <div className="print:hidden mt-2 flex justify-center">
                <button
                  onClick={() => generateCharacterAndAccessoriesPdf(hero)}
                  className="px-4 py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Hero Sheet & Accessories (PDF)</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ready Made Hero or Custom Blank */}
              <div className="border-2 border-stone-400 rounded-2xl p-4">
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                  <div>
                    <span className="text-xs text-stone-500 uppercase font-bold">Hero Name:</span>
                    <div className="text-lg font-black text-amber-950 print:text-black">
                      {hero.name} {hero.title}
                    </div>
                  </div>
                  <span className="text-3xl">{hero.avatar}</span>
                </div>

                {/* Heart Trackers (Color in with red crayon!) */}
                <div className="mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-800 print:text-black block mb-1">
                    Health Hearts (Color in 1–8 with Red Crayon!):
                  </span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div
                        key={num}
                        className="w-7 h-7 rounded-full border-2 border-stone-400 print:border-black flex items-center justify-center text-xs font-bold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Star Spark Mana Slots */}
                <div className="mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-800 print:text-black block mb-1">
                    Star Sparks (Draw stars as you earn them!):
                  </span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div
                        key={num}
                        className="w-7 h-7 rounded-xl border-2 border-dashed border-stone-400 print:border-black flex items-center justify-center text-xs font-bold"
                      >
                        ⭐
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backpack Inventory checklist */}
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-stone-700 print:text-black block mb-1">
                    Backpack Inventory:
                  </span>
                  <div className="border border-stone-300 rounded-xl p-2.5 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-black rounded-sm" />
                      <span>Explorer Brass Compass</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-black rounded-sm" />
                      <span>Parchment Map of Astraea</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-black rounded-sm" />
                      <span>Arithmetic Spellbook Wand</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-black rounded-sm" />
                      <span>_________________________ (Draw your own item!)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Draw Your Own Hero Box */}
              <div className="border-2 border-dashed border-stone-400 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[250px]">
                <span className="text-xs font-black uppercase tracking-wider text-stone-500 print:text-black">
                  Draw Your Young Hero Here:
                </span>
                <div className="w-full h-44 border-2 border-stone-200 rounded-xl flex items-center justify-center text-stone-300 text-xs font-semibold">
                  (Use your favorite crayons to design your wizard robe or knight armor!)
                </div>
                <div className="w-full text-left mt-2">
                  <span className="text-xs font-bold text-stone-600 print:text-black">
                    Hero Catchphrase: &ldquo;________________________________&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 5. FOLDABLE PAPER D6 DICE NET & MANA TOKENS                 */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'dice_tokens') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="border-b-2 border-stone-300 pb-3 mb-4 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Craftable Dice & Manipulatives • No Screens Needed
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 print:text-black">
                Foldable D6 Paper Dice & Counting Tokens
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Paper Dice Net */}
              <div className="border-2 border-stone-300 rounded-2xl p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 print:text-black block mb-3">
                  Cut around the solid lines, fold along the dotted lines, and glue the tabs!
                </span>

                {/* Cross Net Diagram */}
                <div className="flex flex-col items-center my-2">
                  {/* Top face (1) */}
                  <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                    1
                  </div>
                  {/* Middle row (2, 3, 4, 5) */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                      2
                    </div>
                    <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                      3
                    </div>
                    <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                      4
                    </div>
                    <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                      5
                    </div>
                  </div>
                  {/* Bottom face (6) */}
                  <div className="w-12 h-12 border-2 border-stone-800 flex items-center justify-center font-black text-lg bg-stone-100 print:bg-white">
                    6
                  </div>
                </div>
                <span className="text-[11px] text-stone-500 font-semibold block mt-3">
                  Tip: Use tape or glue sticks on the small white tabs for sturdy rolls!
                </span>
              </div>

              {/* 12 Cut-Out Counting Counters */}
              <div className="border-2 border-stone-300 rounded-2xl p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 print:text-black block mb-3">
                  Cut-Out Mana Counters (Use for Addition & Subtraction):
                </span>
                <div className="grid grid-cols-4 gap-3 my-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((token) => (
                    <div
                      key={token}
                      className="w-12 h-12 mx-auto rounded-full border-2 border-dashed border-stone-700 flex flex-col items-center justify-center bg-amber-50 print:bg-white"
                    >
                      <span className="text-sm leading-none">⭐</span>
                      <span className="text-[10px] font-black">{token}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[11px] text-stone-500 font-semibold block mt-3">
                  Have young learners physically move these tokens when solving spells!
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. ARITHMETIC SPELLBOOK FLASHCARDS                          */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'spells') && (
          <section className="bg-white border-4 border-amber-300 print:border-2 print:border-black rounded-3xl p-6 sm:p-8 shadow-md print:shadow-none print:break-after-page">
            <div className="border-b-2 border-stone-300 pb-3 mb-4 text-center">
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black">
                Tactile Arithmetic Magic • Age 5+
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-fantasy text-amber-950 print:text-black">
                Printable Spellbook Flashcards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {SPELL_ACTIONS.map((spell) => (
                <div
                  key={spell.id}
                  className="border-2 border-stone-400 rounded-2xl p-4 flex flex-col justify-between text-center bg-stone-50 print:bg-white"
                >
                  <div>
                    <span className="text-3xl select-none mb-1 block">{spell.icon}</span>
                    <h5 className="font-black text-sm text-stone-900 print:text-black">{spell.name}</h5>
                    <span className="text-[10px] font-bold text-amber-800 print:text-black uppercase">
                      {spell.mathType.toUpperCase()} SPELL
                    </span>
                    <p className="text-xs text-stone-600 print:text-black my-2 leading-tight">
                      {spell.description}
                    </p>
                  </div>
                  <div className="border-t border-stone-300 pt-2 text-[11px] font-bold text-stone-700 print:text-black">
                    Mana Cost: {spell.cost} ⭐ Spark
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. HERO GRADUATION CERTIFICATE OF MASTERY                   */}
        {/* ============================================================ */}
        {(selectedSection === 'all' || selectedSection === 'certificate') && (
          <section className="bg-white border-8 border-double border-amber-400 print:border-4 print:border-black rounded-3xl p-8 shadow-xl print:shadow-none print:break-after-page text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-4xl select-none">👑📜⭐</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-800 print:text-black block">
                Kingdom of Astraea • High Council of Spellbound
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-fantasy text-amber-950 print:text-black">
                Royal Certificate of Heroic Mastery
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 print:text-black font-medium">
                This royal diploma certifies that the brave young adventurer
              </p>

              <div className="my-6 border-b-2 border-stone-800 pb-2 text-2xl sm:text-3xl font-black font-fantasy text-amber-900 print:text-black">
                {hero.name} {hero.title}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 print:text-black leading-relaxed font-semibold">
                Has courageously blended phonics runes, navigated the four winds compass, mastered medieval castle fortifications and prehistoric fossils, and calmy soothed the elemental dragons through the power of arithmetic spells.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 text-xs font-bold text-stone-800 print:text-black">
                <div className="border-t border-stone-600 pt-2">
                  <span>Signed: King Alden of Astraea</span>
                </div>
                <div className="border-t border-stone-600 pt-2">
                  <span>Signed: Solara the Starlight Dragon</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
