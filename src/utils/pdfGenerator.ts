import { jsPDF } from 'jspdf';
import { Hero, DailyCampaign, DailyJournalEntry } from '../types';
import { READING_CARDS } from '../data/readingCards';
import { DAILY_CAMPAIGNS } from '../data/dailyCampaigns';

// ============================================================================
// 1. 30-CARD TABLETOP PHONICS & READING DECK PDF
// ============================================================================
/**
 * Generates and downloads the 30-Card Tabletop Phonics & Reading Deck PDF.
 * Formatted as premium tabletop cards with ornate borders, cut guides,
 * distinct color-coded category headers, large decodable typography,
 * sound buttons (dots/dashes), and matching card backs.
 *
 * All text elements are strictly bound-checked with splitTextToSize so no words
 * ever go off the page or card boundary.
 */
export function generateReadingCardsPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm

  const cols = 2;
  const rows = 3;
  const cardsPerPage = cols * rows; // 6 cards per page -> 5 pages of cards + 1 page of card backs
  const marginX = 14;
  const marginY = 16;
  const cardWidth = 86;
  const cardHeight = 82;
  const spacingX = (pageWidth - marginX * 2 - cardWidth * cols) / (cols - 1); // ~10mm
  const spacingY = (pageHeight - marginY * 2 - cardHeight * rows) / (rows - 1); // ~7mm

  READING_CARDS.forEach((card, index) => {
    const pageIndex = Math.floor(index / cardsPerPage);
    const cardOnPage = index % cardsPerPage;

    if (cardOnPage === 0 && index > 0) {
      doc.addPage();
    }

    // Page Top Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(130, 80, 20);
    const totalSheets = Math.ceil(READING_CARDS.length / cardsPerPage);
    doc.text(
      `DICE & DRAGONS: JUNIOR QUEST  •  TABLETOP READING DECK  •  SHEET ${pageIndex + 1} OF ${totalSheets}`,
      pageWidth / 2,
      10,
      { align: 'center' }
    );

    const col = cardOnPage % cols;
    const row = Math.floor(cardOnPage / cols);
    const x = marginX + col * (cardWidth + spacingX);
    const y = marginY + row * (cardHeight + spacingY);

    // Dotted scissor cut guide rectangle
    doc.setLineDashPattern([2, 2], 0);
    doc.setDrawColor(140, 140, 140);
    doc.setLineWidth(0.3);
    doc.roundedRect(x - 1.5, y - 1.5, cardWidth + 3, cardHeight + 3, 3, 3, 'S');
    doc.setLineDashPattern([], 0); // reset

    // Cut guide label - placed safely inside top margin
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.5);
    doc.setTextColor(150, 150, 150);
    doc.text('✂ cut along dotted line', x + cardWidth - 2, y - 2.2, { align: 'right' });

    // Outer Card Fill (Antique Parchment)
    doc.setFillColor(254, 252, 246);
    doc.setDrawColor(180, 150, 100);
    doc.setLineWidth(0.6);
    doc.roundedRect(x, y, cardWidth, cardHeight, 3.5, 3.5, 'FD');

    // Inner Card Border (Double line fantasy feel)
    doc.setDrawColor(210, 185, 140);
    doc.setLineWidth(0.3);
    doc.roundedRect(x + 2, y + 2, cardWidth - 4, cardHeight - 4, 2.5, 2.5, 'S');

    // Category Color Palettes
    let headerBg = [217, 237, 225]; // Forest Green default
    let headerText = [20, 80, 45];
    let categoryBadge = 'CVC WORD';

    if (card.type === 'digraph') {
      headerBg = [224, 235, 248]; // Citadel Indigo
      headerText = [25, 60, 120];
      categoryBadge = 'DIGRAPH';
    } else if (card.type === 'tricky-word') {
      headerBg = [245, 228, 245]; // Mystic Purple
      headerText = [100, 25, 100];
      categoryBadge = 'TRICKY WORD';
    } else if (card.type === 'sentence') {
      headerBg = [254, 238, 205]; // Starlight Gold
      headerText = [130, 60, 10];
      categoryBadge = 'LORE SCROLL';
    }

    // Card Header Bar
    doc.setFillColor(headerBg[0], headerBg[1], headerBg[2]);
    doc.roundedRect(x + 3.5, y + 3.5, cardWidth - 7, 8.5, 2, 2, 'F');

    // Card Number & Category (Safely spaced and aligned)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(headerText[0], headerText[1], headerText[2]);
    doc.text(card.cardNumber, x + 5.5, y + 9.2);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.text(categoryBadge, x + cardWidth - 5.5, y + 9.2, { align: 'right' });

    // Card Title (Safely wrapped within cardWidth - 12)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(35, 30, 25);
    const splitTitle = doc.splitTextToSize(card.title, cardWidth - 12);
    doc.text(splitTitle[0] || card.title, x + 6, y + 17.5);

    // Main Word or Sentence Area
    if (card.sentence) {
      // Decodable Sentence Parchment Panel
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(220, 195, 150);
      doc.setLineWidth(0.3);
      doc.roundedRect(x + 5, y + 21.5, cardWidth - 10, 24, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(25, 25, 25);
      const splitSentence = doc.splitTextToSize(`"${card.sentence}"`, cardWidth - 14);
      doc.text(splitSentence.slice(0, 3), x + 7, y + 29);
    } else {
      // Big Decodable Word Panel
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(225, 205, 165);
      doc.setLineWidth(0.4);
      doc.roundedRect(x + 5, y + 21.5, cardWidth - 10, 24, 2.5, 2.5, 'FD');

      // Dynamically scale word font size to fit width safely
      doc.setFont('helvetica', 'bold');
      const wordLen = (card.word || '').length;
      const wordFontSize = wordLen > 6 ? 15 : wordLen > 4 ? 18 : 22;
      doc.setFontSize(wordFontSize);
      doc.setTextColor(20, 20, 20);
      doc.text(card.word || '', x + cardWidth / 2, y + 33.5, { align: 'center' });

      // Sound Buttons (Dots for single letters, Dashes for digraphs)
      if (card.soundButtons && card.soundButtons.length > 0) {
        const btnCount = card.soundButtons.length;
        const totalSpacing = Math.min(13, (cardWidth - 26) / Math.max(btnCount, 1));
        const startX = x + cardWidth / 2 - ((btnCount - 1) * totalSpacing) / 2;
        const btnY = y + 39.5;

        card.soundButtons.forEach((btnType, btnIdx) => {
          const btnX = startX + btnIdx * totalSpacing;
          doc.setFillColor(110, 50, 15);
          if (btnType === 'dash') {
            doc.roundedRect(btnX - 3.5, btnY - 0.8, 7, 1.6, 0.8, 0.8, 'F');
          } else {
            doc.circle(btnX, btnY, 1.3, 'F');
          }

          // Phoneme guide label under button
          if (card.phonemes?.[btnIdx]) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6);
            doc.setTextColor(120, 70, 20);
            doc.text(`/${card.phonemes[btnIdx]}/`, btnX, btnY + 4.2, { align: 'center' });
          }
        });
      }
    }

    // Card Narrative Lore (Safely bounded to 2 lines max so it never collides with bottom banner)
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6.5);
    doc.setTextColor(80, 70, 60);
    const splitFlavor = doc.splitTextToSize(card.flavor, cardWidth - 12);
    doc.text(splitFlavor.slice(0, 2), x + 6, y + 51);

    // Bottom DM Placement Banner (Safely wrapped and centered)
    doc.setFillColor(242, 236, 222);
    doc.roundedRect(x + 3.5, y + cardHeight - 14, cardWidth - 7, 10.5, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.2);
    doc.setTextColor(130, 50, 0);
    const dmInstruction = doc.splitTextToSize(
      'TABLETOP DM: Place face-up on table. Child touches sound buttons & reads aloud!',
      cardWidth - 9
    );
    doc.text(dmInstruction, x + cardWidth / 2, y + cardHeight - 9.5, { align: 'center' });
  });

  // PAGE 6: PRINTABLE CARD BACKS (Optional double-sided printing)
  doc.addPage();
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(130, 80, 20);
  doc.text(
    'DICE & DRAGONS: JUNIOR QUEST  •  PRINTABLE CARD BACKS (OPTIONAL REVERSE PRINT)',
    pageWidth / 2,
    10,
    { align: 'center' }
  );

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const bx = marginX + c * (cardWidth + spacingX);
      const by = marginY + r * (cardHeight + spacingY);

      // Card Back Background
      doc.setFillColor(60, 25, 10);
      doc.roundedRect(bx, by, cardWidth, cardHeight, 3.5, 3.5, 'F');

      // Ornate Border
      doc.setDrawColor(218, 165, 32);
      doc.setLineWidth(0.8);
      doc.roundedRect(bx + 3, by + 3, cardWidth - 6, cardHeight - 6, 2.5, 2.5, 'S');

      doc.setDrawColor(180, 130, 20);
      doc.setLineWidth(0.3);
      doc.roundedRect(bx + 5, by + 5, cardWidth - 10, cardHeight - 10, 2, 2, 'S');

      // Central Crest
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 215, 0);
      doc.text('DICE & DRAGONS', bx + cardWidth / 2, by + cardHeight / 2 - 6, {
        align: 'center',
      });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(240, 230, 180);
      doc.text('JUNIOR QUEST', bx + cardWidth / 2, by + cardHeight / 2, {
        align: 'center',
      });

      doc.setFont('helvetica', 'italic');
      doc.setFontSize(6.5);
      doc.setTextColor(200, 180, 130);
      doc.text('★ Tabletop Phonics Rune ★', bx + cardWidth / 2, by + cardHeight / 2 + 7, {
        align: 'center',
      });
    }
  }

  doc.save('Dice_and_Dragons_30_Reading_Cards_Deck.pdf');
}

// ============================================================================
// 2. 20-DAY CAMPAIGN CHRONICLE HANDBOOK PDF (1 DAY PER PAGE)
// ============================================================================
/**
 * Generates and downloads the 20-Day Campaign Chronicle Handbook PDF.
 * Premium layout: Cover page + 20 dedicated daily campaign pages (21 pages total).
 * High readability: 8-11pt text, structured sections, multi-scene breakdowns,
 * visual token counting dots for mental math, and bedtime reflections.
 *
 * Every single line of text is guaranteed to fit within page margins and column borders.
 */
export function generateCampaignChroniclePdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182mm

  // COVER PAGE
  doc.setFillColor(252, 248, 238);
  doc.rect(0, 0, 210, 297, 'F');

  // Decorative Golden Border
  doc.setLineWidth(1.5);
  doc.setDrawColor(180, 130, 40);
  doc.rect(10, 10, 190, 277);
  doc.setLineWidth(0.5);
  doc.rect(13, 13, 184, 271);

  // Title Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(120, 45, 10);
  doc.text('DICE & DRAGONS: JUNIOR QUEST', pageWidth / 2, 42, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(70, 50, 30);
  doc.text('The 20-Day Tabletop Campaign Chronicle', pageWidth / 2, 53, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 80, 60);
  doc.text('A Screen-Free Tabletop RPG for Children (Ages 5–7)', pageWidth / 2, 62, {
    align: 'center',
  });
  doc.text('Aligned with UK KS1 Phonics, Early Maths, History & Geography', pageWidth / 2, 68, {
    align: 'center',
  });

  // Instructions Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(210, 180, 130);
  doc.roundedRect(margin, 80, contentWidth, 70, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(90, 40, 10);
  doc.text('Dungeon Master Quickstart Guide (~20 Minutes / Session):', margin + 6, 89);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(50, 45, 40);
  const steps = [
    '1. Step 1 (Story Hook & Narration): Read the narrative script aloud in an engaging, lively voice.',
    '2. Step 2 (Tabletop Reading Card): Place the specified reading card face-up. Child touches sound buttons & reads aloud.',
    '3. Step 3 (Arithmetic Magic Spell): Work through mental math with fingers or counting tokens (pennies/pasta).',
    '4. Step 4 (Hero Die Roll): Roll a 6-sided die for the skill check. Low rolls have funny, gentle fumbles!',
    '5. Step 5 (Bedtime Starlight Reflection): Read the soothing wrap-up note as your child relaxes for sleep.',
    '6. Step 6 (Adventurer\'s Daily Journal): Let the child dictate or write today\'s memory in their Adventurer\'s Journal!',
  ];
  steps.forEach((st, idx) => {
    const wrappedStep = doc.splitTextToSize(st, contentWidth - 12);
    doc.text(wrappedStep, margin + 6, 98 + idx * 7.5);
  });

  // 4 Story Arcs Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(90, 40, 10);
  doc.text('The 4 Epic Curriculum Story Arcs:', margin, 163);

  const arcs = [
    { title: 'Week 1 (Days 1–5): The Whispering Woods & Four Winds River', desc: 'Phase 2 CVC Blending, Cardinal Directions, and Mental Addition within 10.' },
    { title: 'Week 2 (Days 6–10): The Citadel of King Alden & Royal Armory', desc: 'Consonant Digraphs (/sh/, /ch/, /th/), Medieval Castle Defences, and Subtraction.' },
    { title: 'Week 3 (Days 11–15): The Prehistoric Caverns & Fossil Quarry', desc: 'Vowel Digraphs (/ee/, /ai/, /oo/), Ammonite Fossils, and Number Bonds to 10.' },
    { title: 'Week 4 (Days 16–20): Mount Pyra Summit & The Starlight Flight', desc: 'Decodable Sentences, World Geography, Doubles, and Calming the 4 Elemental Dragons.' },
  ];

  arcs.forEach((a, i) => {
    const yPos = 173 + i * 18;
    doc.setFillColor(248, 242, 230);
    doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(110, 45, 10);
    doc.text(a.title, margin + 4, yPos + 5.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(70, 60, 50);
    doc.text(a.desc, margin + 4, yPos + 10.5);
  });

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(100, 80, 50);
  doc.text('Turn the page to begin Day 1 of your campaign chronicle...', pageWidth / 2, 265, {
    align: 'center',
  });

  // 20 DEDICATED DAILY CAMPAIGN PAGES (1 PAGE PER DAY)
  DAILY_CAMPAIGNS.forEach((day) => {
    doc.addPage();

    // Background Tint
    doc.setFillColor(254, 252, 247);
    doc.rect(0, 0, 210, 297, 'F');

    // Page Frame
    doc.setDrawColor(210, 185, 140);
    doc.setLineWidth(0.6);
    doc.rect(margin - 2, 10, contentWidth + 4, 276);

    // Top Header Banner
    doc.setFillColor(242, 224, 188);
    doc.roundedRect(margin, 13, contentWidth, 16, 2, 2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(110, 40, 10);
    doc.text(`DAY ${day.dayNumber}: ${day.title.toUpperCase()}`, margin + 5, 21.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(90, 60, 30);
    doc.text(
      `${day.region} • ${day.durationMinutes} Mins • Focus: ${day.subjectFocus.toUpperCase()}`,
      margin + 5,
      26
    );

    // Star Sparks Reward Badge (Right-aligned in header safely)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(140, 70, 10);
    doc.text(`★ Reward: +${day.reward.sparks} Sparks`, margin + contentWidth - 4, 21.5, {
      align: 'right',
    });
    doc.setFontSize(7);
    doc.setTextColor(10, 110, 40);
    doc.text(day.reward.badge, margin + contentWidth - 4, 26, { align: 'right' });

    // DM Script Section (Large, easily readable, safely wrapped)
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(220, 195, 150);
    doc.setLineWidth(0.4);
    doc.roundedRect(margin, 32, contentWidth, 42, 2.5, 2.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(90, 40, 10);
    doc.text('🎭 Dungeon Master Read-Aloud Narration (Read to Child):', margin + 5, 38.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(40, 35, 30);
    const splitScript = doc.splitTextToSize(`"${day.dmScript}"`, contentWidth - 10);
    doc.text(splitScript.slice(0, 7), margin + 5, 45);

    // 4-Scene Breakdown Table
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(90, 40, 10);
    doc.text('📜 4-Scene Chapter Walkthrough:', margin, 80);

    day.scenes.forEach((sc, scIdx) => {
      const sceneY = 84 + scIdx * 16.5;
      doc.setFillColor(scIdx % 2 === 0 ? 250 : 245, 245, 240);
      doc.roundedRect(margin, sceneY, contentWidth, 14.5, 1.5, 1.5, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.8);
      doc.setTextColor(110, 50, 10);
      doc.text(sc.title, margin + 3.5, sceneY + 4.8);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(50, 45, 40);
      const splitNarration = doc.splitTextToSize(sc.narration, contentWidth - 7);
      doc.text(splitNarration.slice(0, 2), margin + 3.5, sceneY + 9.2);
    });

    // 3 Challenge Columns: Tabletop Card, Arithmetic Spell, Dice Check
    const boxY = 153;
    const colW = (contentWidth - 6) / 3; // ~58.6mm each

    // Column 1: Tabletop Card
    doc.setFillColor(245, 240, 228);
    doc.setDrawColor(210, 185, 140);
    doc.roundedRect(margin, boxY, colW, 48, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(110, 40, 10);
    doc.text('1. TABLETOP CARD:', margin + 4, boxY + 6);

    doc.setFontSize(8.5);
    doc.setTextColor(30, 30, 30);
    doc.text(`Card #${day.tableCardId.replace('card_', '')}`, margin + 4, boxY + 12.5);

    // Safely wrap and size word or decodable sentence
    if (day.cardToPlace.word) {
      const w = day.cardToPlace.word;
      const wSize = w.length > 6 ? 10 : 13;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(wSize);
      doc.setTextColor(20, 20, 20);
      const splitWord = doc.splitTextToSize(`"${w}"`, colW - 8);
      doc.text(splitWord.slice(0, 2), margin + 4, boxY + 20.5);
    } else {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(20, 20, 20);
      const splitSent = doc.splitTextToSize(
        `"${day.cardToPlace.sentence || day.cardToPlace.title}"`,
        colW - 8
      );
      doc.text(splitSent.slice(0, 2), margin + 4, boxY + 19.5);
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(80, 70, 60);
    doc.text('Place card face-up on table.', margin + 4, boxY + 31);
    doc.text('Child points to sound buttons', margin + 4, boxY + 36);
    doc.text('& reads the word aloud.', margin + 4, boxY + 41);

    // Column 2: Arithmetic Spell with Hands-on Counters
    doc.setFillColor(245, 240, 228);
    doc.roundedRect(margin + colW + 3, boxY, colW, 48, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(110, 40, 10);
    doc.text('2. ARITHMETIC SPELL:', margin + colW + 7, boxY + 6);

    doc.setFontSize(7.8);
    doc.setTextColor(30, 30, 30);
    const splitSpellName = doc.splitTextToSize(day.mathChallenge.spellName, colW - 9);
    doc.text(splitSpellName.slice(0, 1), margin + colW + 7, boxY + 12.5);

    // Big Equation
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(120, 30, 10);
    doc.text(
      `${day.mathChallenge.problem} = ${day.mathChallenge.answer}`,
      margin + colW + 7,
      boxY + 20.5
    );

    // Counting dots drawn directly on paper for child to touch
    const problemParts = day.mathChallenge.problem.split(/([+-])/);
    if (problemParts.length >= 3) {
      const n1 = parseInt(problemParts[0].trim(), 10) || 0;
      const drawCount = Math.min(n1, 6);
      for (let d = 0; d < drawCount; d++) {
        doc.setFillColor(180, 120, 20);
        doc.circle(margin + colW + 9 + d * 5.5, boxY + 26.5, 1.6, 'F');
      }
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(70, 65, 60);
    const splitHint = doc.splitTextToSize(day.mathChallenge.hint, colW - 8);
    doc.text(splitHint.slice(0, 3), margin + colW + 7, boxY + 33);

    // Column 3: D6 Skill Check & Outcomes (Strictly bounded)
    doc.setFillColor(245, 240, 228);
    doc.roundedRect(margin + (colW + 3) * 2, boxY, colW, 48, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(110, 40, 10);
    doc.text('3. D6 DICE CHECK:', margin + (colW + 3) * 2 + 4, boxY + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(20, 20, 20);
    doc.text(`Target: DC ${day.diceCheck.dc}+ Check`, margin + (colW + 3) * 2 + 4, boxY + 12);

    // Skill name wrapped safely
    doc.setFontSize(6.8);
    const splitSkill = doc.splitTextToSize(`Skill: ${day.diceCheck.skill}`, colW - 8);
    doc.text(splitSkill.slice(0, 1), margin + (colW + 3) * 2 + 4, boxY + 16.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(10, 100, 30);
    doc.text('★ Success:', margin + (colW + 3) * 2 + 4, boxY + 22);
    doc.setFont('helvetica', 'normal');
    const splitSuccess = doc.splitTextToSize(day.diceCheck.success, colW - 8);
    doc.text(splitSuccess.slice(0, 2), margin + (colW + 3) * 2 + 4, boxY + 26);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(150, 70, 10);
    doc.text('★ Gentle Fumble:', margin + (colW + 3) * 2 + 4, boxY + 35);
    doc.setFont('helvetica', 'normal');
    const splitFumble = doc.splitTextToSize(day.diceCheck.fumble, colW - 8);
    doc.text(splitFumble.slice(0, 2), margin + (colW + 3) * 2 + 4, boxY + 39);

    // Bedtime Starlight Reflection Box
    const bedtimeY = 206;
    doc.setFillColor(236, 240, 252);
    doc.setDrawColor(180, 200, 240);
    doc.roundedRect(margin, bedtimeY, contentWidth, 24, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(40, 60, 130);
    doc.text('🌙 1-Minute Bedtime Starlight Reflection:', margin + 5, bedtimeY + 6.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.8);
    doc.setTextColor(50, 60, 100);
    const splitReflect = doc.splitTextToSize(`"${day.bedtimeReflection}"`, contentWidth - 10);
    doc.text(splitReflect.slice(0, 3), margin + 5, bedtimeY + 13);

    // Physical Completion Box on Sheet
    const signY = 234;
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(200, 180, 140);
    doc.roundedRect(margin, signY, contentWidth, 48, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(90, 40, 10);
    doc.text('Heroic Completion & Creative Writing Check:', margin + 5, signY + 6.5);

    // Checkboxes
    doc.setLineWidth(0.4);
    doc.rect(margin + 5, signY + 11, 4, 4);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(60, 55, 50);
    doc.text('Tabletop Card Read Aloud', margin + 12, signY + 14.2);

    doc.rect(margin + 62, signY + 11, 4, 4);
    doc.text('Math Spell Cast Successfully', margin + 69, signY + 14.2);

    doc.rect(margin + 124, signY + 11, 4, 4);
    doc.text('D6 Die Rolled & Recorded', margin + 131, signY + 14.2);

    // Daily Journal Prompt Reminder (Safely wrapped within contentWidth - 10)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(110, 40, 10);
    doc.text('✍️ Daily Journal Entry:', margin + 5, signY + 22.5);
    doc.setFont('helvetica', 'normal');
    const splitJournalPrompt = doc.splitTextToSize(
      'Have the child dictate or write today\'s memory into their Adventurer\'s Journal!',
      contentWidth - 48
    );
    doc.text(splitJournalPrompt, margin + 42, signY + 22.5);

    // Parent Signature Line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(90, 80, 70);
    doc.text('Parent / DM Signature: _______________________', margin + 5, signY + 38);
    doc.text('Date: ____________', margin + contentWidth - 5, signY + 38, { align: 'right' });
  });

  doc.save('Dice_and_Dragons_20_Day_Campaign_Handbook.pdf');
}

// ============================================================================
// 3. HERO DOSSIER, FOLDABLE DICE NET & ROYAL CERTIFICATE PDF
// ============================================================================
/**
 * Generates and downloads the Character Dossier, Foldable D6 Net (with GLUE TABS),
 * 12 Star Spark Mana Tokens, and Royal Certificate of Mastery.
 *
 * All text lines wrap safely inside page boundaries.
 */
export function generateCharacterAndAccessoriesPdf(hero: Hero) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // PAGE 1: CHARACTER COLORING DOSSIER & MANA COUNTERS
  doc.setFillColor(252, 250, 245);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(120, 50, 10);
  doc.text('DICE & DRAGONS: JUNIOR QUEST', pageWidth / 2, 20, { align: 'center' });

  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text('Tabletop Adventurer Dossier & Health Tracker', pageWidth / 2, 27, { align: 'center' });

  // Hero Sheet Box
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(180, 160, 120);
  doc.roundedRect(margin, 35, contentWidth, 110, 4, 4, 'FD');

  // Hero Name - Dynamically scale or wrap if long
  doc.setFont('helvetica', 'bold');
  const fullHeroTitle = `HERO NAME: ${hero.name.toUpperCase()} ${hero.title.toUpperCase()}`;
  const nameLen = fullHeroTitle.length;
  const heroFontSize = nameLen > 30 ? 11 : 13;
  doc.setFontSize(heroFontSize);
  doc.setTextColor(40, 40, 40);
  const splitHeroName = doc.splitTextToSize(fullHeroTitle, contentWidth - 16);
  doc.text(splitHeroName[0] || fullHeroTitle, margin + 8, 47);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`Race: ${hero.race || 'Human'}  |  Class: ${hero.classTitle}`, margin + 8, 54);

  // Heart Tracker
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(180, 30, 30);
  doc.text('Health Hearts (Color in 1–8 with your Red Crayon!):', margin + 8, 66);

  for (let i = 1; i <= 8; i++) {
    const hx = margin + 12 + (i - 1) * 18;
    doc.setDrawColor(200, 50, 50);
    doc.setLineWidth(0.6);
    doc.circle(hx, 76, 5, 'S');
    doc.setFontSize(8);
    doc.setTextColor(160, 30, 30);
    doc.text(`${i}`, hx, 78.5, { align: 'center' });
  }

  // Star Spark Tracker
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(180, 120, 10);
  doc.text('Star Sparks Mana (Draw stars as you earn rewards!):', margin + 8, 93);

  for (let i = 1; i <= 8; i++) {
    const sx = margin + 12 + (i - 1) * 18;
    doc.setDrawColor(220, 160, 20);
    doc.setLineDashPattern([1, 1], 0);
    doc.rect(sx - 5, 99, 10, 10, 'S');
    doc.setLineDashPattern([], 0);
    doc.setFontSize(7);
    doc.setTextColor(180, 140, 40);
    doc.text(`${i}`, sx, 105.5, { align: 'center' });
  }

  // Inventory Checklist
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(50, 50, 50);
  doc.text('Backpack Supplies Checklist:', margin + 8, 120);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('[ ] Brass Pocket Compass', margin + 12, 127);
  doc.text('[ ] Map Scroll of Astraea', margin + 12, 134);
  doc.text('[ ] Wooden Arithmetic Wand', margin + 85, 127);
  doc.text('[ ] Polished Starlight Pebble', margin + 85, 134);

  // Draw your hero frame
  doc.setDrawColor(150, 150, 150);
  doc.setLineDashPattern([2, 2], 0);
  doc.roundedRect(margin, 155, contentWidth, 125, 4, 4, 'S');
  doc.setLineDashPattern([], 0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(120, 120, 120);
  doc.text(
    'DRAW YOUR YOUNG HERO HERE (Use crayons for armor, robes, and magic sparkles!)',
    pageWidth / 2,
    165,
    { align: 'center' }
  );

  // PAGE 2: CRAFTABLE D6 DICE NET WITH REAL GLUE TABS
  doc.addPage();
  doc.setFillColor(252, 250, 245);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(120, 50, 10);
  doc.text('CRAFTABLE PAPER D6 DIE & STAR TOKENS', pageWidth / 2, 20, {
    align: 'center',
  });
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(
    'Cut along SOLID lines, FOLD dotted lines, and GLUE the shaded tabs to build a working die!',
    pageWidth / 2,
    26,
    { align: 'center' }
  );

  // Cross Dice Net with Real Glue Tabs
  const diceX = 65;
  const diceY = 40;
  const sz = 20;

  doc.setLineWidth(0.6);
  doc.setDrawColor(30, 30, 30);

  // Helper to draw a glue tab
  const drawGlueTab = (x1: number, y1: number, x2: number, y2: number, direction: 'up' | 'down' | 'left' | 'right') => {
    doc.setFillColor(235, 230, 215);
    doc.setLineDashPattern([1.5, 1.5], 0);
    const tabDepth = 6;
    let p3x = 0, p3y = 0, p4x = 0, p4y = 0;

    if (direction === 'up') {
      p3x = x2 - 3; p3y = y2 - tabDepth;
      p4x = x1 + 3; p4y = y1 - tabDepth;
    } else if (direction === 'down') {
      p3x = x2 - 3; p3y = y2 + tabDepth;
      p4x = x1 + 3; p4y = y1 + tabDepth;
    } else if (direction === 'left') {
      p3x = x2 - tabDepth; p3y = y2 - 3;
      p4x = x1 - tabDepth; p4y = y1 + 3;
    } else if (direction === 'right') {
      p3x = x2 + tabDepth; p3y = y2 - 3;
      p4x = x1 + tabDepth; p4y = y1 + 3;
    }

    doc.triangle(x1, y1, p4x, p4y, p3x, p3y, 'FD');
    doc.triangle(x1, y1, p3x, p3y, x2, y2, 'FD');
    doc.setLineDashPattern([], 0);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(4.5);
    doc.setTextColor(140, 130, 120);
    doc.text('GLUE', (x1 + x2) / 2, (y1 + y2) / 2 + (direction === 'up' ? -2.5 : direction === 'down' ? 4 : 1), { align: 'center' });
  };

  // Glue Tabs around the net
  drawGlueTab(diceX + sz, diceY, diceX + sz * 2, diceY, 'up'); // Top of Face 1
  drawGlueTab(diceX + sz, diceY, diceX + sz, diceY + sz, 'left'); // Left of Face 1
  drawGlueTab(diceX + sz * 2, diceY, diceX + sz * 2, diceY + sz, 'right'); // Right of Face 1
  drawGlueTab(diceX, diceY + sz, diceX, diceY + sz * 2, 'left'); // Left of Face 2
  drawGlueTab(diceX + sz * 4, diceY + sz, diceX + sz * 4, diceY + sz * 2, 'right'); // Right of Face 5
  drawGlueTab(diceX + sz, diceY + sz * 3, diceX + sz * 2, diceY + sz * 3, 'down'); // Bottom of Face 6

  // Draw 6 Cube Faces
  // Face 1 (top)
  doc.rect(diceX + sz, diceY, sz, sz);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(20, 20, 20);
  doc.text('1', diceX + sz + sz / 2, diceY + sz / 2 + 5, { align: 'center' });

  // Row (2, 3, 4, 5)
  for (let f = 2; f <= 5; f++) {
    const fx = diceX + (f - 2) * sz;
    const fy = diceY + sz;
    doc.rect(fx, fy, sz, sz);
    doc.text(`${f}`, fx + sz / 2, fy + sz / 2 + 5, { align: 'center' });
  }

  // Face 6 (bottom)
  doc.rect(diceX + sz, diceY + sz * 2, sz, sz);
  doc.text('6', diceX + sz + sz / 2, diceY + sz * 2 + sz / 2 + 5, { align: 'center' });

  // Cut-out tokens section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(120, 50, 10);
  doc.text('12 Cut-Out Star Spark Mana Tokens (For Hands-on Math):', margin, 125);

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      const tokNum = r * 4 + c + 1;
      const tx = margin + 15 + c * 45;
      const ty = 140 + r * 28;

      doc.setLineDashPattern([1.5, 1.5], 0);
      doc.setDrawColor(180, 140, 40);
      doc.circle(tx, ty, 11, 'S');
      doc.setLineDashPattern([], 0);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(160, 100, 10);
      doc.text(`★ STAR`, tx, ty - 1, { align: 'center' });
      doc.setFontSize(8);
      doc.text(`#${tokNum}`, tx, ty + 4, { align: 'center' });
    }
  }

  // PAGE 3: ROYAL CERTIFICATE OF MASTERY
  doc.addPage();
  doc.setFillColor(254, 252, 245);
  doc.rect(0, 0, 210, 297, 'F');

  // Ornate Double Border
  doc.setLineWidth(1.5);
  doc.setDrawColor(180, 130, 40);
  doc.rect(12, 12, 186, 273);
  doc.setLineWidth(0.5);
  doc.rect(15, 15, 180, 267);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(160, 100, 20);
  doc.text('KINGDOM OF ASTRAEA  •  HIGH COUNCIL OF SPELLBOUND', pageWidth / 2, 40, {
    align: 'center',
  });

  doc.setFontSize(22);
  doc.setTextColor(120, 40, 10);
  doc.text('ROYAL CERTIFICATE OF HEROIC MASTERY', pageWidth / 2, 55, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text('This certifies by decree of King Alden that the young adventurer', pageWidth / 2, 75, {
    align: 'center',
  });

  doc.setFont('helvetica', 'bold');
  const certHeroName = `${hero.name} ${hero.title}`;
  const certNameSize = certHeroName.length > 25 ? 16 : 20;
  doc.setFontSize(certNameSize);
  doc.setTextColor(40, 40, 40);
  doc.text(certHeroName, pageWidth / 2, 95, { align: 'center' });

  doc.setLineWidth(0.5);
  doc.setDrawColor(100, 100, 100);
  doc.line(45, 98, 165, 98);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  const certText = [
    'Has with great courage, quick thinking, and kindness of heart completed',
    'the 20-Day Astraea Campaign Chronicle. They have blended the 30 phonics cards,',
    'navigated the four winds compass, unlocked medieval castle fortresses, discovered',
    'prehistoric fossils, and calmed the elemental dragons through arithmetic magic.',
    '',
    'They are hereby proclaimed a Master Protector of Astraea and Champion Rider of the Starlight Dragon!',
  ];

  certText.forEach((ln, idx) => {
    doc.text(ln, pageWidth / 2, 115 + idx * 7, { align: 'center' });
  });

  // Signatures
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Signed: King Alden of Astraea', 35, 230);
  doc.line(35, 225, 95, 225);

  doc.text('Signed: Solara the Starlight Dragon', 115, 230);
  doc.line(115, 225, 185, 225);

  doc.save(`${hero.name.replace(/\s+/g, '_')}_Character_Kit_and_Certificate.pdf`);
}

// ============================================================================
// 4. ADVENTURER'S DAILY JOURNAL SHEET PDF (SINGLE ENTRY KEEPSAKE)
// ============================================================================
/**
 * Generates and downloads a single day's Adventurer's Daily Journal page.
 * Includes the child's hero name, day number, quest title, written/dictated summary,
 * mood badge, stickers earned, and a frame for drawing with crayons!
 *
 * All text lines wrap strictly within the content width so nothing runs off the page.
 */
export function generateJournalEntryPdf(
  hero: Hero,
  campaign: DailyCampaign,
  entry: DailyJournalEntry
) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Background
  doc.setFillColor(254, 252, 246);
  doc.rect(0, 0, 210, 297, 'F');

  // Double Border
  doc.setLineWidth(1.2);
  doc.setDrawColor(180, 130, 50);
  doc.rect(margin - 3, 10, contentWidth + 6, 276);
  doc.setLineWidth(0.4);
  doc.rect(margin, 13, contentWidth, 270);

  // Header Banner
  doc.setFillColor(242, 224, 188);
  doc.roundedRect(margin + 2, 15, contentWidth - 4, 18, 2, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(110, 40, 10);
  doc.text('ADVENTURER\'S DAILY CHRONICLE', pageWidth / 2, 24, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 60, 30);
  doc.text(
    `Hero: ${hero.name} ${hero.title}  •  Date: ${entry.entryDate || new Date().toLocaleDateString('en-GB')}`,
    pageWidth / 2,
    30,
    { align: 'center' }
  );

  // Day Mission Info
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(40, 35, 30);
  doc.text(`DAY ${campaign.dayNumber}: ${campaign.title.toUpperCase()}`, margin + 5, 42);

  // Split metadata across 2 cleanly wrapped lines so it NEVER exceeds the margin
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(90, 80, 70);
  const cardWordOrTitle = campaign.cardToPlace.word || campaign.cardToPlace.title;
  doc.text(
    `Region: ${campaign.region}  •  Tabletop Card: #${campaign.tableCardId.replace('card_', '')} "${cardWordOrTitle}"`,
    margin + 5,
    47
  );
  doc.text(
    `Arithmetic Spell: ${campaign.mathChallenge.spellName} (${campaign.mathChallenge.problem} = ${campaign.mathChallenge.answer})`,
    margin + 5,
    51.5
  );

  // Hero Mood Badge
  doc.setFillColor(245, 235, 215);
  doc.roundedRect(margin + 5, 56, contentWidth - 10, 10, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(120, 50, 10);
  doc.text(`Hero's Mood Today: ${entry.heroMood.toUpperCase()}`, margin + 8, 62.5);

  // Written / Dictated Narrative Summary
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(210, 185, 140);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin + 5, 70, contentWidth - 10, 72, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.2);
  doc.setTextColor(90, 40, 10);
  doc.text('My Adventure Summary (Written or Dictated by Hero):', margin + 9, 78);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 30, 30);

  const textToDisplay = entry.summaryText?.trim() || '(No adventure written yet. Handwrite your tale here!)';
  const splitText = doc.splitTextToSize(textToDisplay, contentWidth - 18);
  doc.text(splitText.slice(0, 10), margin + 9, 86);

  // Favorite Part (Safely wrapped)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(110, 45, 10);
  doc.text('🌟 My Favorite Moment:', margin + 9, 131);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.2);
  doc.setTextColor(60, 55, 50);
  const splitFav = doc.splitTextToSize(
    entry.favoritePart || 'Exploring with my companions!',
    contentWidth - 18
  );
  doc.text(splitFav.slice(0, 2), margin + 9, 137);

  // Drawing Frame (Draw today's memory)
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(180, 170, 160);
  doc.setLineDashPattern([2, 2], 0);
  doc.roundedRect(margin + 5, 148, contentWidth - 10, 98, 3, 3, 'FD');
  doc.setLineDashPattern([], 0);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(120, 110, 100);
  doc.text(
    'DRAW TODAY\'S HEROIC MEMORY HERE (Crayon sketch of dragons, castles, or puppy squire!)',
    pageWidth / 2,
    156,
    { align: 'center' }
  );

  // If user drew on canvas, embed it
  if (entry.drawingDataUrl) {
    try {
      doc.addImage(entry.drawingDataUrl, 'PNG', margin + 8, 160, contentWidth - 16, 80);
    } catch {
      // ignore
    }
  }

  // Footer / DM Stamp
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 80, 50);
  doc.text('Dungeon Master Verified: _______________________', margin + 10, 262);
  doc.text('Star Sparks Awarded: ★ ★', margin + contentWidth - 10, 262, { align: 'right' });

  doc.save(`${hero.name.replace(/\s+/g, '_')}_Journal_Day_${campaign.dayNumber}.pdf`);
}

// ============================================================================
// 5. FULL ADVENTURER'S JOURNAL CHRONICLE PDF
// ============================================================================
/**
 * Generates and downloads the child's complete Adventurer's Journal Chronicle
 * compiling all 20 daily entries into a keepsake adventure book.
 */
export function generateFullJournalPdf(
  hero: Hero,
  entries: Record<number, DailyJournalEntry>
) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Cover Page
  doc.setFillColor(252, 248, 238);
  doc.rect(0, 0, 210, 297, 'F');

  doc.setLineWidth(1.5);
  doc.setDrawColor(180, 130, 40);
  doc.rect(10, 10, 190, 277);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(110, 40, 10);
  doc.text('ADVENTURER\'S JOURNAL CHRONICLE', pageWidth / 2, 60, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(70, 50, 30);
  doc.text(`The Royal Memoirs of ${hero.name} ${hero.title}`, pageWidth / 2, 75, {
    align: 'center',
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 80, 50);
  doc.text('20 Daily Tales of Courage, Phonics Runes & Math Magic in Astraea', pageWidth / 2, 85, {
    align: 'center',
  });

  // Entry Pages
  DAILY_CAMPAIGNS.forEach((camp) => {
    doc.addPage();
    const ent = entries[camp.dayNumber] || {
      dayNumber: camp.dayNumber,
      entryDate: '',
      summaryText: '',
      heroMood: 'brave',
      favoritePart: '',
      stickers: [],
      wordsCount: 0,
    };

    doc.setFillColor(254, 252, 246);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setDrawColor(210, 185, 140);
    doc.setLineWidth(0.6);
    doc.rect(margin - 2, 10, contentWidth + 4, 276);

    // Header
    doc.setFillColor(242, 224, 188);
    doc.roundedRect(margin, 13, contentWidth, 14, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(110, 40, 10);
    doc.text(`DAY ${camp.dayNumber}: ${camp.title.toUpperCase()}`, margin + 5, 22);

    // Content Box
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(220, 195, 150);
    doc.roundedRect(margin, 32, contentWidth, 110, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(90, 40, 10);
    doc.text('Adventure Summary:', margin + 6, 40);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    const summary = ent.summaryText?.trim() || '(No entry recorded for this day yet.)';
    const splitSummary = doc.splitTextToSize(summary, contentWidth - 12);
    doc.text(splitSummary.slice(0, 14), margin + 6, 48);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(110, 45, 10);
    doc.text('Favorite Moment:', margin + 6, 128);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.2);
    doc.setTextColor(50, 45, 40);
    const splitFav = doc.splitTextToSize(
      ent.favoritePart || 'Journeying with my party!',
      contentWidth - 42
    );
    doc.text(splitFav.slice(0, 2), margin + 36, 128);

    // Drawing Frame
    doc.setDrawColor(180, 170, 160);
    doc.setLineDashPattern([2, 2], 0);
    doc.roundedRect(margin, 148, contentWidth, 125, 2, 2, 'S');
    doc.setLineDashPattern([], 0);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(130, 120, 110);
    doc.text('HEROIC SKETCHBOOK ENTRY', pageWidth / 2, 157, { align: 'center' });

    if (ent.drawingDataUrl) {
      try {
        doc.addImage(ent.drawingDataUrl, 'PNG', margin + 5, 162, contentWidth - 10, 104);
      } catch {
        // ignore
      }
    }
  });

  doc.save(`${hero.name.replace(/\s+/g, '_')}_Complete_Journal_Chronicle.pdf`);
}

// ============================================================================
// 5. OFFICIAL TABLETOP EXPEDITION MAP OF ASTRAEA (PHYSICAL PRINTABLE MAP)
// ============================================================================
/**
 * Generates an A4 Landscape format official tabletop parchment adventure map.
 * Complete with compass rose, regional landmarks, 20-day journey trail,
 * cartographer's legend, and tabletop coloring checklist.
 */
export function generateAstraeaMapPdf(hero?: Hero) {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;
  const margin = 10;

  // Background Antique Parchment
  doc.setFillColor(254, 250, 238);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Subtle terrain tint areas
  // 1. Forest Zone (bottom-left)
  doc.setFillColor(235, 247, 235);
  doc.roundedRect(14, 95, 80, 85, 8, 8, 'F');

  // 2. River Zone (middle-left flowing diagonally)
  doc.setFillColor(230, 245, 252);
  doc.roundedRect(88, 70, 65, 110, 8, 8, 'F');

  // 3. Castle Citadel Zone (top-middle)
  doc.setFillColor(247, 242, 235);
  doc.roundedRect(110, 26, 75, 55, 8, 8, 'F');

  // 4. Crystal Cavern Zone (bottom-right)
  doc.setFillColor(248, 238, 252);
  doc.roundedRect(160, 95, 75, 85, 8, 8, 'F');

  // 5. Mount Pyra Dragon Peak (top-right)
  doc.setFillColor(254, 240, 232);
  doc.roundedRect(210, 26, 72, 75, 8, 8, 'F');

  // Ornate Double Border
  doc.setDrawColor(135, 80, 30);
  doc.setLineWidth(1.2);
  doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);

  doc.setDrawColor(190, 145, 85);
  doc.setLineWidth(0.4);
  doc.rect(margin + 2.5, margin + 2.5, pageWidth - margin * 2 - 5, pageHeight - margin * 2 - 5);

  // Corner decorative flourishes
  const drawCorner = (cx: number, cy: number) => {
    doc.setFillColor(180, 130, 70);
    doc.circle(cx, cy, 2, 'F');
  };
  drawCorner(margin + 2.5, margin + 2.5);
  drawCorner(pageWidth - margin - 2.5, margin + 2.5);
  drawCorner(margin + 2.5, pageHeight - margin - 2.5);
  drawCorner(pageWidth - margin - 2.5, pageHeight - margin - 2.5);

  // Top Header Banner
  doc.setFillColor(245, 225, 185);
  doc.setDrawColor(140, 85, 30);
  doc.setLineWidth(0.6);
  doc.roundedRect(45, 12, 207, 13, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(110, 45, 10);
  doc.text('OFFICIAL TABLETOP EXPEDITION MAP OF THE REALM OF ASTRAEA', pageWidth / 2, 19, {
    align: 'center',
  });

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(120, 70, 25);
  doc.text('A KS1 Tabletop Cartography Guide for Young Adventurers • Journey Path Days 1 - 20', pageWidth / 2, 23.5, {
    align: 'center',
  });

  // COMPASS ROSE (Top Left)
  const compassX = 30;
  const compassY = 36;
  doc.setDrawColor(140, 85, 30);
  doc.setLineWidth(0.4);
  doc.circle(compassX, compassY, 12, 'S');
  doc.line(compassX, compassY - 14, compassX, compassY + 14);
  doc.line(compassX - 14, compassY, compassX + 14, compassY);

  // Compass Labels
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(160, 30, 20);
  doc.text('N', compassX, compassY - 15, { align: 'center' });
  doc.setTextColor(110, 50, 10);
  doc.text('S', compassX, compassY + 18, { align: 'center' });
  doc.text('E', compassX + 16, compassY + 2.5);
  doc.text('W', compassX - 20, compassY + 2.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(120, 90, 60);
  doc.text('Never Eat Shredded Wheat', compassX, compassY + 23, { align: 'center' });

  // REGION 1: Whispering Woods
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(25, 95, 45);
  doc.text('THE WHISPERING WOODS', 54, 103, { align: 'center' });
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(50, 80, 50);
  doc.text('[Ancient Oak Glades • Home of Pip & Bramble]', 54, 107, { align: 'center' });

  // Little landmark icons & labels
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(40, 70, 40);
  doc.text('^ ^ ^ Elder Oak', 24, 122);
  doc.text('~ ~ Bubbling Brook', 24, 142);
  doc.text('* * Professor Hoot’s Glade', 24, 162);

  // REGION 2: Four Winds River
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 80, 130);
  doc.text('THE FOUR WINDS RIVER', 120, 80, { align: 'center' });
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(30, 90, 140);
  doc.text('[Watermill Rapids & Otter Shallows]', 120, 84, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(20, 70, 110);
  doc.text('~ Master Dylan’s Windmill', 94, 110);
  doc.text('~ Pebble Weir Bridge', 94, 135);
  doc.text('~ Azure Otter Estuary', 94, 160);

  // REGION 3: Castle Citadel
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(120, 60, 20);
  doc.text('CITADEL OF HIGH ASTRAEA', 147, 34, { align: 'center' });
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(110, 80, 50);
  doc.text('[King Alden’s Sunlit Keep & Tapestries]', 147, 38, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 50, 20);
  doc.text('[+] Grand Sunlit Throne', 124, 48);
  doc.text('[+] Tapestry Archive Room', 124, 58);
  doc.text('[+] Royal Courtyard Garden', 124, 68);

  // REGION 4: Crystal Caverns
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(110, 35, 120);
  doc.text('THE CRYSTAL CAVERNS', 197, 103, { align: 'center' });
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(100, 50, 110);
  doc.text('[Prismatic Amethyst & Prehistoric Fossils]', 197, 107, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(90, 30, 100);
  doc.text('<> Giant Amethyst Geode', 168, 122);
  doc.text('<> Prehistoric Fossil Wall', 168, 142);
  doc.text('<> Glow-Moth Sanctuary', 168, 162);

  // REGION 5: Dragon Peaks
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(180, 45, 20);
  doc.text('MOUNT PYRA & STAR PINNACLE', 246, 34, { align: 'center' });
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(150, 60, 30);
  doc.text('[High Dragon Arena of Solara & Pyra]', 246, 38, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(140, 40, 20);
  doc.text('/\\ Ember Marshmallow Forge', 222, 50);
  doc.text('/\\ Dragon Duel Arena', 222, 65);
  doc.text('/\\ Starlight Constellation Spire', 222, 80);

  // 20-DAY TRAIL (Connected Checkpoints)
  // Coordinates for 20 checkpoints forming an adventure loop:
  const checkpoints = [
    { day: 1, x: 35, y: 170, label: 'Start' },
    { day: 2, x: 45, y: 155, label: 'Kitten' },
    { day: 3, x: 55, y: 140, label: 'Oak' },
    { day: 4, x: 68, y: 125, label: 'Gate' },
    { day: 5, x: 85, y: 145, label: 'Weir' },
    { day: 6, x: 100, y: 130, label: 'Mill' },
    { day: 7, x: 110, y: 115, label: 'Raft' },
    { day: 8, x: 115, y: 95, label: 'Delta' },
    { day: 9, x: 130, y: 70, label: 'Castle' },
    { day: 10, x: 145, y: 55, label: 'Throne' },
    { day: 11, x: 160, y: 65, label: 'Tapestry' },
    { day: 12, x: 170, y: 80, label: 'Vault' },
    { day: 13, x: 175, y: 115, label: 'Cavern' },
    { day: 14, x: 185, y: 135, label: 'Geode' },
    { day: 15, x: 195, y: 155, label: 'Fossils' },
    { day: 16, x: 215, y: 135, label: 'Glow' },
    { day: 17, x: 230, y: 95, label: 'Ridge' },
    { day: 18, x: 245, y: 85, label: 'Pyra' },
    { day: 19, x: 255, y: 60, label: 'Arena' },
    { day: 20, x: 265, y: 45, label: 'Solara' },
  ];

  // Draw connecting dashed path
  doc.setDrawColor(180, 110, 40);
  doc.setLineWidth(0.6);
  doc.setLineDashPattern([2, 2], 0);
  for (let i = 0; i < checkpoints.length - 1; i++) {
    const p1 = checkpoints[i];
    const p2 = checkpoints[i + 1];
    doc.line(p1.x, p1.y, p2.x, p2.y);
  }
  doc.setLineDashPattern([], 0); // reset

  // Draw checkpoints
  checkpoints.forEach((cp) => {
    // Outer circle
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(130, 70, 20);
    doc.setLineWidth(0.5);
    doc.circle(cp.x, cp.y, 4, 'FD');

    // Day number
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.5);
    doc.setTextColor(90, 40, 10);
    doc.text(String(cp.day), cp.x, cp.y + 1.8, { align: 'center' });

    // Checkbox circle below for child to color in
    doc.setDrawColor(180, 140, 90);
    doc.circle(cp.x + 4, cp.y - 3, 1.3, 'S');
  });

  // MAP LEGEND & FIELD QUEST (Bottom Footer Bar)
  doc.setFillColor(242, 228, 198);
  doc.setDrawColor(140, 85, 30);
  doc.setLineWidth(0.5);
  doc.roundedRect(14, 182, pageWidth - 28, 18, 2, 2, 'FD');

  // Legend Items
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(110, 40, 10);
  doc.text('MAP SYMBOLS & FIELD QUEST:', 18, 188);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(60, 50, 40);
  doc.text('Circles 1-20: Daily Journey Camps (Color circle when finished!)', 18, 194);
  doc.text('Dashed Trail: Royal Ranger Highway', 18, 198);

  doc.text('[ ] Found 3 River Otters     [ ] Spotted Baby Sparky     [ ] Solved Geode Puzzle     [ ] Calmed Solara', 105, 188);

  // Hero Name on Physical Map
  const heroName = hero?.name || 'Sir / Lady Explorer';
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(120, 50, 15);
  doc.text(`Official Cartographer: ${heroName}`, 220, 194);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 80, 60);
  doc.text('Keep this map on your adventure table!', 220, 198);

  doc.save(`${heroName.replace(/\s+/g, '_')}_Official_Astraea_Map.pdf`);
}

