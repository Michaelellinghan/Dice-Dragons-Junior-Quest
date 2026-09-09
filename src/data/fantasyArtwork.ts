// Pure fantasy storybook illustrations and reliable vector art for Dice & Dragons
// Guaranteed to render instantly, offline-safe, and free of real-world stock photos.

// Helper to encode SVG as data URI
export function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

// 1. PIP THE PUPPY SQUIRE (Friendly fantasy puppy with hero bandana in enchanted blackberry glade)
export const ART_PUPPY_SQUIRE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7dd3fc"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#d9f99d"/>
    </linearGradient>
    <linearGradient id="furGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="40%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="earGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="bushGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#15803d"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Sky & Forest Glade -->
  <rect width="800" height="500" fill="url(#skyGrad)"/>
  
  <!-- Sunbeams -->
  <polygon points="0,0 200,500 120,500 0,0" fill="#fef08a" opacity="0.3"/>
  <polygon points="150,0 450,500 370,500 150,0" fill="#fef08a" opacity="0.25"/>
  <polygon points="400,0 750,500 670,500 400,0" fill="#fef08a" opacity="0.2"/>

  <!-- Blackberry Bush Background Leaves -->
  <ellipse cx="180" cy="380" rx="160" ry="120" fill="url(#bushGrad)"/>
  <ellipse cx="620" cy="390" rx="170" ry="130" fill="url(#bushGrad)"/>
  <ellipse cx="400" cy="430" rx="280" ry="120" fill="#166534"/>

  <!-- Wild Blackberries -->
  <circle cx="160" cy="350" r="14" fill="#312e81"/>
  <circle cx="172" cy="356" r="12" fill="#4338ca"/>
  <circle cx="152" cy="362" r="10" fill="#3730a3"/>
  <circle cx="640" cy="360" r="14" fill="#312e81"/>
  <circle cx="652" cy="368" r="12" fill="#4338ca"/>

  <!-- Fairy Fireflies -->
  <circle cx="120" cy="220" r="6" fill="#fef08a" filter="url(#glow)"/>
  <circle cx="680" cy="200" r="8" fill="#fef08a" filter="url(#glow)"/>
  <circle cx="280" cy="180" r="5" fill="#a7f3d0" filter="url(#glow)"/>
  <circle cx="520" cy="190" r="6" fill="#fef08a" filter="url(#glow)"/>

  <!-- PUPPY BODY -->
  <ellipse cx="400" cy="340" rx="105" ry="100" fill="url(#furGrad)" stroke="#b45309" stroke-width="4"/>
  
  <!-- White Chest Patch -->
  <ellipse cx="400" cy="355" rx="55" ry="50" fill="#fefce8"/>

  <!-- Red Adventurer Bandana -->
  <polygon points="340,300 460,300 400,380" fill="#dc2626"/>
  <polygon points="350,300 450,300 400,370" fill="#ef4444"/>
  <!-- Gold Star on Bandana -->
  <polygon points="400,320 404,332 416,332 406,340 410,352 400,344 390,352 394,340 384,332 396,332" fill="#fde047"/>

  <!-- PUPPY HEAD -->
  <ellipse cx="400" cy="240" rx="90" ry="80" fill="url(#furGrad)" stroke="#b45309" stroke-width="4"/>
  <ellipse cx="400" cy="265" rx="45" ry="38" fill="#fefce8"/>

  <!-- Floppy Ears -->
  <!-- Left Ear -->
  <path d="M 320 200 C 270 200, 260 290, 300 320 C 330 330, 340 270, 335 220 Z" fill="url(#earGrad)" stroke="#78350f" stroke-width="4"/>
  <!-- Right Ear -->
  <path d="M 480 200 C 530 200, 540 290, 500 320 C 470 330, 460 270, 465 220 Z" fill="url(#earGrad)" stroke="#78350f" stroke-width="4"/>

  <!-- Big Curious Anime Eyes -->
  <!-- Left Eye -->
  <ellipse cx="365" cy="230" rx="20" ry="24" fill="#1e1b4b"/>
  <circle cx="360" cy="222" r="8" fill="#ffffff"/>
  <circle cx="372" cy="238" r="4" fill="#ffffff"/>
  <!-- Right Eye -->
  <ellipse cx="435" cy="230" rx="20" ry="24" fill="#1e1b4b"/>
  <circle cx="430" cy="222" r="8" fill="#ffffff"/>
  <circle cx="442" cy="238" r="4" fill="#ffffff"/>

  <!-- Eye Highlights / Cheerful Eyebrows -->
  <ellipse cx="360" cy="195" rx="14" ry="7" fill="#b45309" transform="rotate(-10 360 195)"/>
  <ellipse cx="440" cy="195" rx="14" ry="7" fill="#b45309" transform="rotate(10 440 195)"/>

  <!-- Cute Black Button Nose -->
  <polygon points="400,250 388,265 412,265" fill="#0f172a" stroke="#0f172a" stroke-linejoin="round" stroke-width="6"/>
  <ellipse cx="396" cy="254" rx="4" ry="2" fill="#ffffff"/>

  <!-- Happy Smiling Mouth & Pink Tongue -->
  <path d="M 388 270 Q 400 278, 412 270" stroke="#0f172a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 395 273 Q 400 292, 405 273 Z" fill="#f43f5e"/>

  <!-- Paws peeking over bottom bush -->
  <ellipse cx="350" cy="410" rx="30" ry="22" fill="url(#furGrad)" stroke="#b45309" stroke-width="4"/>
  <circle cx="340" cy="410" r="5" fill="#b45309"/>
  <circle cx="350" cy="408" r="5" fill="#b45309"/>
  <circle cx="360" cy="410" r="5" fill="#b45309"/>

  <ellipse cx="450" cy="410" rx="30" ry="22" fill="url(#furGrad)" stroke="#b45309" stroke-width="4"/>
  <circle cx="440" cy="410" r="5" fill="#b45309"/>
  <circle cx="450" cy="408" r="5" fill="#b45309"/>
  <circle cx="460" cy="410" r="5" fill="#b45309"/>

  <!-- Golden Starlight Sparks around Puppy -->
  <polygon points="300,160 303,170 313,170 305,176 308,186 300,180 292,186 295,176 287,170 297,170" fill="#facc15" filter="url(#glow)"/>
  <polygon points="490,150 493,160 503,160 495,166 498,176 490,170 482,176 485,166 477,160 487,160" fill="#facc15" filter="url(#glow)"/>
</svg>
`);

// 2. THE WAYWARD BADGER TAVERN (Cozy warm hearth, wooden beams, glowing tavern lanterns)
export const ART_TAVERN_HEARTH = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="100%" stop-color="#292524"/>
    </linearGradient>
    <radialGradient id="fireLight" cx="50%" cy="60%" r="50%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#f97316" stop-opacity="0.6"/>
      <stop offset="80%" stop-color="#ea580c" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Tavern Wooden Walls -->
  <rect width="800" height="500" fill="url(#wallGrad)"/>

  <!-- Wood Beams -->
  <rect x="0" y="0" width="800" height="50" fill="#78350f" stroke="#451a03" stroke-width="4"/>
  <rect x="80" y="0" width="40" height="500" fill="#78350f" stroke="#451a03" stroke-width="4"/>
  <rect x="680" y="0" width="40" height="500" fill="#78350f" stroke="#451a03" stroke-width="4"/>

  <!-- Stone Fireplace Hearth -->
  <path d="M 260 500 L 260 220 Q 400 180, 540 220 L 540 500 Z" fill="#57534e" stroke="#292524" stroke-width="8"/>
  <path d="M 310 500 L 310 280 Q 400 240, 490 280 L 490 500 Z" fill="#1c1917"/>

  <!-- Fireplace Mantle -->
  <rect x="230" y="200" width="340" height="30" rx="6" fill="#92400e" stroke="#451a03" stroke-width="4"/>
  <!-- Tankards and clock on mantle -->
  <rect x="360" y="160" width="35" height="40" rx="5" fill="#f59e0b"/>
  <circle cx="410" cy="180" r="18" fill="#e2e8f0" stroke="#78350f" stroke-width="4"/>
  <circle cx="440" cy="182" r="14" fill="#d97706"/>

  <!-- ROARING HEARTH FIRE -->
  <path d="M 350 480 Q 400 320, 410 400 Q 450 340, 460 480 Z" fill="#ef4444"/>
  <path d="M 370 480 Q 400 350, 410 420 Q 435 370, 445 480 Z" fill="#f97316"/>
  <path d="M 385 480 Q 400 380, 410 440 Q 425 400, 430 480 Z" fill="#fde047"/>

  <!-- Warm Ambient Glow from Fire -->
  <ellipse cx="400" cy="400" rx="360" ry="240" fill="url(#fireLight)"/>

  <!-- Round Tavern Wooden Table -->
  <ellipse cx="400" cy="480" rx="240" ry="60" fill="#a16207" stroke="#713f12" stroke-width="6"/>

  <!-- Foaming Cider Tankards on Table -->
  <rect x="330" y="440" width="36" height="48" rx="4" fill="#b45309" stroke="#78350f" stroke-width="3"/>
  <ellipse cx="348" cy="440" rx="20" ry="8" fill="#fef08a"/>
  <!-- Foam -->
  <circle cx="340" cy="435" r="8" fill="#ffffff"/>
  <circle cx="350" cy="432" r="9" fill="#ffffff"/>
  <circle cx="360" cy="436" r="7" fill="#ffffff"/>

  <rect x="440" y="440" width="36" height="48" rx="4" fill="#b45309" stroke="#78350f" stroke-width="3"/>
  <ellipse cx="458" cy="440" rx="20" ry="8" fill="#fef08a"/>
  <circle cx="450" cy="435" r="8" fill="#ffffff"/>
  <circle cx="460" cy="432" r="9" fill="#ffffff"/>

  <!-- Pair of D6 Dice on Table -->
  <rect x="390" y="455" width="22" height="22" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
  <circle cx="401" cy="466" r="3" fill="#dc2626"/>
  
  <rect x="418" y="450" width="22" height="22" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
  <circle cx="423" cy="455" r="2" fill="#ffffff"/>
  <circle cx="435" cy="467" r="2" fill="#ffffff"/>

  <!-- Hanging Lanterns -->
  <circle cx="160" cy="120" r="16" fill="#fef08a"/>
  <rect x="150" y="100" width="20" height="35" rx="3" fill="none" stroke="#78350f" stroke-width="4"/>
  <line x1="160" y1="50" x2="160" y2="100" stroke="#78350f" stroke-width="3"/>

  <circle cx="640" cy="120" r="16" fill="#fef08a"/>
  <rect x="630" y="100" width="20" height="35" rx="3" fill="none" stroke="#78350f" stroke-width="4"/>
  <line x1="640" y1="50" x2="640" y2="100" stroke="#78350f" stroke-width="3"/>

  <!-- Shield on Wall -->
  <polygon points="400,60 440,80 430,130 400,150 370,130 360,80" fill="#eab308" stroke="#a16207" stroke-width="4"/>
  <!-- Badger Crest on Shield -->
  <circle cx="400" cy="105" r="14" fill="#1e293b"/>
  <rect x="394" y="93" width="12" height="24" fill="#ffffff"/>
</svg>
`);

// 3. THE WHISPERING WATERFALL & SECRET GROTTO
export const ART_WATERFALL_GROTTO = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="rockGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="poolGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0e7490"/>
    </linearGradient>
  </defs>

  <!-- Cliff Rocks Framing -->
  <rect width="800" height="500" fill="url(#rockGrad)"/>

  <!-- Cave Arch Opening -->
  <path d="M 0 0 L 260 0 L 220 380 L 0 450 Z" fill="#1e293b"/>
  <path d="M 540 0 L 800 0 L 800 450 L 580 380 Z" fill="#1e293b"/>

  <!-- Lush Ferns on Cliffs -->
  <ellipse cx="180" cy="200" rx="60" ry="30" fill="#16a34a"/>
  <ellipse cx="620" cy="220" rx="70" ry="35" fill="#16a34a"/>

  <!-- Rushing White-Blue Waterfall Cascade -->
  <path d="M 280 0 L 520 0 L 550 400 L 250 400 Z" fill="url(#waterGrad)"/>
  
  <!-- Foaming Water Lines -->
  <line x1="310" y1="0" x2="300" y2="400" stroke="#ffffff" stroke-width="4" stroke-opacity="0.8"/>
  <line x1="350" y1="0" x2="340" y2="400" stroke="#bae6fd" stroke-width="5" stroke-opacity="0.7"/>
  <line x1="400" y1="0" x2="400" y2="400" stroke="#ffffff" stroke-width="6" stroke-opacity="0.9"/>
  <line x1="450" y1="0" x2="460" y2="400" stroke="#bae6fd" stroke-width="5" stroke-opacity="0.7"/>
  <line x1="490" y1="0" x2="500" y2="400" stroke="#ffffff" stroke-width="4" stroke-opacity="0.8"/>

  <!-- Turquoise Lagoon Basin -->
  <ellipse cx="400" cy="440" rx="380" ry="80" fill="url(#poolGrad)"/>

  <!-- Foaming Mist Spray at Base of Waterfall -->
  <ellipse cx="400" cy="400" rx="160" ry="35" fill="#ffffff" opacity="0.85"/>
  <circle cx="320" cy="390" r="30" fill="#ffffff" opacity="0.7"/>
  <circle cx="370" cy="385" r="38" fill="#ffffff" opacity="0.8"/>
  <circle cx="430" cy="385" r="38" fill="#ffffff" opacity="0.8"/>
  <circle cx="480" cy="390" r="30" fill="#ffffff" opacity="0.7"/>

  <!-- Rainbow Arch in Mist -->
  <path d="M 250 390 Q 400 240, 550 390" stroke="#ef4444" stroke-width="5" fill="none" opacity="0.6"/>
  <path d="M 250 394 Q 400 244, 550 394" stroke="#f59e0b" stroke-width="5" fill="none" opacity="0.6"/>
  <path d="M 250 398 Q 400 248, 550 398" stroke="#10b981" stroke-width="5" fill="none" opacity="0.6"/>
  <path d="M 250 402 Q 400 252, 550 402" stroke="#3b82f6" stroke-width="5" fill="none" opacity="0.6"/>
  <path d="M 250 406 Q 400 256, 550 406" stroke="#8b5cf6" stroke-width="5" fill="none" opacity="0.6"/>

  <!-- Hidden Cave Glowing Eyes / Treasure Glow behind Waterfall -->
  <circle cx="380" cy="300" r="8" fill="#facc15"/>
  <circle cx="420" cy="300" r="8" fill="#facc15"/>
</svg>
`);

// 4. FAIRY RING & PIXIE HOLLOW
export const ART_PIXIE_RING = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="60%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#2e1065"/>
    </linearGradient>
    <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
      <stop offset="70%" stop-color="#fde047" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Deep Magical Twilight Sky -->
  <rect width="800" height="500" fill="url(#nightSky)"/>

  <!-- Giant Silver Full Moon -->
  <circle cx="400" cy="130" r="140" fill="url(#moonGlow)"/>
  <circle cx="400" cy="130" r="60" fill="#fef9c3"/>

  <!-- Stars -->
  <circle cx="100" cy="60" r="2" fill="#ffffff"/>
  <circle cx="180" cy="120" r="3" fill="#ffffff"/>
  <circle cx="280" cy="70" r="2" fill="#ffffff"/>
  <circle cx="560" cy="80" r="3" fill="#ffffff"/>
  <circle cx="680" cy="50" r="2" fill="#ffffff"/>
  <circle cx="720" cy="140" r="3" fill="#ffffff"/>

  <!-- Forest Silhouette -->
  <path d="M 0 350 Q 80 260, 160 350 Q 240 280, 320 350 Q 400 300, 480 350 Q 560 270, 640 350 Q 720 290, 800 350 L 800 500 L 0 500 Z" fill="#064e3b"/>

  <!-- Glowing Green Moss Field -->
  <ellipse cx="400" cy="460" rx="380" ry="100" fill="#047857"/>

  <!-- GLOWING TOADSTOOLS (Fairy Ring) -->
  <!-- Center Large Red Mushroom -->
  <rect x="385" y="380" width="30" height="70" rx="10" fill="#f8fafc"/>
  <path d="M 330 390 Q 400 280, 470 390 Z" fill="#ef4444"/>
  <circle cx="370" cy="345" r="8" fill="#ffffff"/>
  <circle cx="410" cy="330" r="10" fill="#ffffff"/>
  <circle cx="440" cy="355" r="7" fill="#ffffff"/>

  <!-- Left Blue Glowing Mushroom -->
  <rect x="235" y="410" width="20" height="50" rx="6" fill="#e0f2fe"/>
  <path d="M 190 420 Q 245 330, 300 420 Z" fill="#38bdf8"/>
  <circle cx="225" cy="385" r="6" fill="#ffffff"/>
  <circle cx="260" cy="375" r="7" fill="#ffffff"/>

  <!-- Right Violet Mushroom -->
  <rect x="545" y="410" width="20" height="50" rx="6" fill="#f3e8ff"/>
  <path d="M 500 420 Q 555 330, 610 420 Z" fill="#c084fc"/>
  <circle cx="535" cy="385" r="6" fill="#ffffff"/>
  <circle cx="570" cy="375" r="7" fill="#ffffff"/>

  <!-- Winged Pixies Dancing in Circle -->
  <!-- Pixie 1 (Left) -->
  <ellipse cx="320" cy="260" rx="8" ry="14" fill="#fbcfe8"/>
  <circle cx="320" cy="245" r="7" fill="#fed7aa"/>
  <ellipse cx="305" cy="250" rx="14" ry="6" fill="#a7f3d0" opacity="0.8" transform="rotate(-30 305 250)"/>
  <ellipse cx="335" cy="250" rx="14" ry="6" fill="#a7f3d0" opacity="0.8" transform="rotate(30 335 250)"/>

  <!-- Pixie 2 (Center High) -->
  <ellipse cx="400" cy="210" rx="8" ry="14" fill="#fef08a"/>
  <circle cx="400" cy="195" r="7" fill="#fed7aa"/>
  <ellipse cx="385" cy="200" rx="14" ry="6" fill="#bae6fd" opacity="0.8" transform="rotate(-30 385 200)"/>
  <ellipse cx="415" cy="200" rx="14" ry="6" fill="#bae6fd" opacity="0.8" transform="rotate(30 415 200)"/>

  <!-- Pixie 3 (Right) -->
  <ellipse cx="480" cy="260" rx="8" ry="14" fill="#a7f3d0"/>
  <circle cx="480" cy="245" r="7" fill="#fed7aa"/>
  <ellipse cx="465" cy="250" rx="14" ry="6" fill="#fbcfe8" opacity="0.8" transform="rotate(-30 465 250)"/>
  <ellipse cx="495" cy="250" rx="14" ry="6" fill="#fbcfe8" opacity="0.8" transform="rotate(30 495 250)"/>
</svg>
`);

// 5. SUNKEN CRYPT OF THE DRAGON KNIGHTS
export const ART_SUNKEN_CRYPT = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="cryptDungeon" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>
    <radialGradient id="torchGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fde047" stop-opacity="1"/>
      <stop offset="50%" stop-color="#f97316" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Dungeon Stone Walls -->
  <rect width="800" height="500" fill="url(#cryptDungeon)"/>

  <!-- Stone Flagstone Pillars -->
  <rect x="100" y="0" width="70" height="500" fill="#44403c" stroke="#292524" stroke-width="4"/>
  <rect x="630" y="0" width="70" height="500" fill="#44403c" stroke="#292524" stroke-width="4"/>

  <!-- Stone Wall Bricks -->
  <line x1="0" y1="120" x2="800" y2="120" stroke="#292524" stroke-width="3"/>
  <line x1="0" y1="240" x2="800" y2="240" stroke="#292524" stroke-width="3"/>
  <line x1="0" y1="360" x2="800" y2="360" stroke="#292524" stroke-width="3"/>

  <!-- Glowing Torches on Pillars -->
  <!-- Left Torch -->
  <circle cx="135" cy="200" r="90" fill="url(#torchGlow)"/>
  <rect x="130" y="210" width="10" height="40" fill="#78350f"/>
  <path d="M 125 210 Q 135 170, 145 210 Z" fill="#ef4444"/>
  <path d="M 130 210 Q 135 180, 140 210 Z" fill="#fde047"/>

  <!-- Right Torch -->
  <circle cx="665" cy="200" r="90" fill="url(#torchGlow)"/>
  <rect x="660" y="210" width="10" height="40" fill="#78350f"/>
  <path d="M 655 210 Q 665 170, 675 210 Z" fill="#ef4444"/>
  <path d="M 660 210 Q 665 180, 670 210 Z" fill="#fde047"/>

  <!-- Stone Sarcophagus of the First Knight -->
  <path d="M 280 500 L 320 320 L 480 320 L 520 500 Z" fill="#78716c" stroke="#292524" stroke-width="6"/>
  <polygon points="320,320 480,320 460,280 340,280" fill="#a8a29e" stroke="#292524" stroke-width="4"/>

  <!-- Carved Dragon Relief on Sarcophagus -->
  <circle cx="400" cy="380" r="35" fill="#ca8a04"/>
  <polygon points="400,355 410,380 435,380 415,395 422,420 400,405 378,420 385,395 365,380 390,380" fill="#fde047"/>

  <!-- Carved Phonics Sound Runes on Stone -->
  <text x="350" y="440" font-size="18" font-family="monospace" font-weight="bold" fill="#fde047">S - T - A - R</text>

  <!-- Golden Treasure Chest with Blue Relic Gem -->
  <rect x="520" y="420" width="70" height="50" rx="6" fill="#b45309" stroke="#78350f" stroke-width="4"/>
  <polygon points="515,420 595,420 585,395 525,395" fill="#d97706" stroke="#78350f" stroke-width="4"/>
  <circle cx="555" cy="435" r="7" fill="#38bdf8"/>
</svg>
`);

// 6. SPROCKET THE GOBLIN'S CLOCKWORK WORKSHOP
export const ART_GOBLIN_WORKSHOP = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="workshopBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3f3f46"/>
      <stop offset="100%" stop-color="#18181b"/>
    </linearGradient>
  </defs>

  <!-- Workshop Background -->
  <rect width="800" height="500" fill="url(#workshopBg)"/>

  <!-- Pegboard Wall with Wrenches & Blueprints -->
  <rect x="40" y="40" width="720" height="240" rx="10" fill="#27272a" stroke="#52525b" stroke-width="4"/>
  <!-- Blueprint -->
  <rect x="80" y="70" width="160" height="110" fill="#0284c7" stroke="#ffffff" stroke-width="2"/>
  <line x1="90" y1="100" x2="230" y2="100" stroke="#ffffff" stroke-width="2"/>
  <circle cx="160" cy="140" r="22" fill="none" stroke="#ffffff" stroke-width="2"/>

  <!-- Big Brass Rotating Gears -->
  <!-- Gear 1 -->
  <circle cx="580" cy="140" r="50" fill="#d97706" stroke="#78350f" stroke-width="6"/>
  <circle cx="580" cy="140" r="20" fill="#18181b"/>
  <!-- Gear 2 -->
  <circle cx="660" cy="180" r="40" fill="#ca8a04" stroke="#78350f" stroke-width="5"/>
  <circle cx="660" cy="180" r="16" fill="#18181b"/>

  <!-- Wooden Workbench -->
  <rect x="0" y="320" width="800" height="180" fill="#78350f" stroke="#451a03" stroke-width="6"/>

  <!-- SPROCKET THE FRIENDLY GOBLIN (Green skin, big ears, brass goggles) -->
  <!-- Goblin Body -->
  <ellipse cx="320" cy="400" rx="55" ry="50" fill="#84cc16"/>
  <!-- Leather Apron with Tools -->
  <rect x="290" y="370" width="60" height="60" rx="4" fill="#a16207"/>
  
  <!-- Goblin Head -->
  <ellipse cx="320" cy="300" rx="50" ry="44" fill="#84cc16" stroke="#4d7c0f" stroke-width="3"/>

  <!-- Big Pointy Goblin Ears -->
  <polygon points="275,300 200,270 270,325" fill="#84cc16" stroke="#4d7c0f" stroke-width="3"/>
  <polygon points="365,300 440,270 370,325" fill="#84cc16" stroke="#4d7c0f" stroke-width="3"/>

  <!-- Big Round Brass Goggles on Forehead -->
  <circle cx="300" cy="285" r="18" fill="#38bdf8" stroke="#d97706" stroke-width="5"/>
  <circle cx="340" cy="285" r="18" fill="#38bdf8" stroke="#d97706" stroke-width="5"/>
  <rect x="315" y="282" width="10" height="6" fill="#78350f"/>

  <!-- Friendly Eyes -->
  <circle cx="305" cy="308" r="6" fill="#1c1917"/>
  <circle cx="335" cy="308" r="6" fill="#1c1917"/>

  <!-- Broad Grinning Mouth -->
  <path d="M 300 322 Q 320 335, 340 322" stroke="#1c1917" stroke-width="3" fill="none"/>

  <!-- Mechanical Steam-Wing Flying Cart on Table -->
  <rect x="420" y="340" width="160" height="70" rx="8" fill="#d97706" stroke="#78350f" stroke-width="4"/>
  <!-- Brass Propeller -->
  <ellipse cx="585" cy="375" rx="8" ry="35" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
  <!-- Wheels -->
  <circle cx="450" cy="415" r="20" fill="#475569" stroke="#1e293b" stroke-width="4"/>
  <circle cx="550" cy="415" r="20" fill="#475569" stroke="#1e293b" stroke-width="4"/>
</svg>
`);

// 7. HERO PORTRAITS (Storybook Fantasy Style)
export const ART_HERO_ARIA = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="ariaHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#4c1d95"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#ariaHalo)"/>
  <!-- Sparkling Stars in Background -->
  <polygon points="80,80 84,95 99,95 87,103 91,118 80,108 69,118 73,103 61,95 76,95" fill="#fde047"/>
  <polygon points="320,100 323,110 333,110 325,116 328,126 320,120 312,126 315,116 307,110 317,110" fill="#fde047"/>
  
  <!-- Lavender Wizard Cape & Robe -->
  <path d="M 120 400 L 150 260 L 250 260 L 280 400 Z" fill="#7e22ce" stroke="#581c87" stroke-width="4"/>
  <!-- Gold Starlight Brooch -->
  <polygon points="200,260 206,275 222,275 209,285 214,300 200,290 186,300 191,285 178,275 194,275" fill="#facc15"/>

  <!-- Aria Head & Gentle Smile -->
  <ellipse cx="200" cy="200" rx="55" ry="60" fill="#fed7aa"/>
  <!-- Dark wavy hair with starlight ribbon -->
  <path d="M 140 210 Q 140 130, 200 130 Q 260 130, 260 210 Q 260 170, 200 160 Q 140 170, 140 210 Z" fill="#1e1b4b"/>
  <!-- Big Purple Mage Eyes -->
  <ellipse cx="180" cy="195" rx="12" ry="15" fill="#6b21a8"/>
  <circle cx="177" cy="190" r="5" fill="#ffffff"/>
  <ellipse cx="220" cy="195" rx="12" ry="15" fill="#6b21a8"/>
  <circle cx="217" cy="190" r="5" fill="#ffffff"/>
  <!-- Sweet Smile -->
  <path d="M 190 225 Q 200 235, 210 225" stroke="#9a3412" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Pointy Wizard Hat with Gold Crescent Moon -->
  <polygon points="120,155 280,155 200,30" fill="#9333ea" stroke="#581c87" stroke-width="4"/>
  <ellipse cx="200" cy="155" rx="85" ry="16" fill="#7e22ce" stroke="#581c87" stroke-width="3"/>
  <path d="M 190 85 Q 205 95, 200 115 Q 185 105, 190 85 Z" fill="#facc15"/>

  <!-- Glowing Starlight Wand in hand -->
  <line x1="280" y1="360" x2="330" y2="240" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
  <polygon points="330,240 334,250 345,250 336,256 339,266 330,260 321,266 324,256 315,250 326,250" fill="#fde047"/>
</svg>
`);

export const ART_HERO_BARNABY = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="barnabyHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#78350f"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#barnabyHalo)"/>

  <!-- Silver Knight Armor & Red Cloak -->
  <path d="M 110 400 L 140 260 L 260 260 L 290 400 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="5"/>
  <path d="M 140 260 L 120 400 L 90 400 Z" fill="#dc2626"/>
  <path d="M 260 260 L 280 400 L 310 400 Z" fill="#dc2626"/>

  <!-- Lion Crest on Chestplate -->
  <circle cx="200" cy="310" r="22" fill="#eab308"/>
  <circle cx="195" cy="306" r="3" fill="#78350f"/>
  <circle cx="205" cy="306" r="3" fill="#78350f"/>

  <!-- Barnaby Head & Brave Expression -->
  <ellipse cx="200" cy="190" rx="55" ry="58" fill="#ffedd5"/>
  <!-- Brown Tousled Adventurer Hair -->
  <path d="M 140 180 Q 140 115, 200 115 Q 260 115, 260 180 Q 240 140, 200 145 Q 160 140, 140 180 Z" fill="#78350f"/>

  <!-- Big Determined Eyes -->
  <ellipse cx="180" cy="185" rx="12" ry="14" fill="#0f172a"/>
  <circle cx="177" cy="180" r="4" fill="#ffffff"/>
  <ellipse cx="220" cy="185" rx="12" ry="14" fill="#0f172a"/>
  <circle cx="217" cy="180" r="4" fill="#ffffff"/>

  <!-- Confident Smile -->
  <path d="M 188 215 Q 200 225, 212 215" stroke="#9a3412" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Knight's Polished Wooden Shield with Kindness Heart -->
  <polygon points="270,280 340,290 325,380 270,360" fill="#b45309" stroke="#78350f" stroke-width="4"/>
  <path d="M 295 320 Q 305 310, 315 320 Q 305 340, 295 320 Z" fill="#ef4444"/>
</svg>
`);

export const ART_HERO_ZEPHYR = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="zephyrHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#zephyrHalo)"/>

  <!-- Green Ranger Tunic & Feathered Cowl -->
  <path d="M 120 400 L 150 260 L 250 260 L 280 400 Z" fill="#15803d" stroke="#14532d" stroke-width="4"/>
  
  <!-- Zephyr Head -->
  <ellipse cx="200" cy="190" rx="55" ry="58" fill="#ffedd5"/>
  <!-- Golden Wind-Swept Hair with Green Feather -->
  <path d="M 140 180 Q 150 115, 210 115 Q 270 115, 270 190 Q 240 145, 190 145 Q 150 145, 140 180 Z" fill="#ca8a04"/>
  <!-- Feather in Hair -->
  <polygon points="240,110 270,60 255,115" fill="#38bdf8"/>

  <!-- Emerald Green Eyes -->
  <ellipse cx="180" cy="185" rx="12" ry="14" fill="#047857"/>
  <circle cx="177" cy="180" r="4" fill="#ffffff"/>
  <ellipse cx="220" cy="185" rx="12" ry="14" fill="#047857"/>
  <circle cx="217" cy="180" r="4" fill="#ffffff"/>
  
  <path d="M 190 215 Q 200 224, 210 215" stroke="#9a3412" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Wooden Recurve Bow -->
  <path d="M 100 240 Q 80 320, 110 400" stroke="#78350f" stroke-width="6" fill="none"/>
  <line x1="100" y1="240" x2="110" y2="400" stroke="#f1f5f9" stroke-width="2"/>
</svg>
`);

export const ART_HERO_LUNA = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="lunaHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#312e81"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#lunaHalo)"/>

  <!-- Starlight Cleric Robe -->
  <path d="M 120 400 L 150 260 L 250 260 L 280 400 Z" fill="#4338ca" stroke="#312e81" stroke-width="4"/>

  <!-- Luna Head -->
  <ellipse cx="200" cy="190" rx="55" ry="58" fill="#fed7aa"/>
  <!-- Silver-Violet Braided Hair -->
  <path d="M 140 180 Q 140 115, 200 115 Q 260 115, 260 180 Q 240 145, 200 150 Q 150 145, 140 180 Z" fill="#e0e7ff"/>
  
  <!-- Gentle Indigo Eyes -->
  <ellipse cx="180" cy="185" rx="12" ry="14" fill="#3730a3"/>
  <circle cx="177" cy="180" r="4" fill="#ffffff"/>
  <ellipse cx="220" cy="185" rx="12" ry="14" fill="#3730a3"/>
  <circle cx="217" cy="180" r="4" fill="#ffffff"/>

  <path d="M 190 215 Q 200 223, 210 215" stroke="#9a3412" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Silver Crescent Moon Scepter -->
  <line x1="280" y1="380" x2="320" y2="220" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
  <path d="M 310 200 Q 335 200, 335 225 Q 315 220, 310 200 Z" fill="#fef08a"/>
</svg>
`);

// 8. SPARKY THE BABY EMBER DRAKE
export const ART_DRAGON_SPARKY = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <radialGradient id="sparkyBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="60%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#7c2d12"/>
    </radialGradient>
  </defs>
  <rect width="500" height="500" rx="40" fill="url(#sparkyBg)"/>
  <!-- Baby Drake Body -->
  <ellipse cx="250" cy="340" rx="90" ry="80" fill="#ea580c" stroke="#9a3412" stroke-width="4"/>
  <!-- Cream Yellow Belly Scales -->
  <ellipse cx="250" cy="350" rx="50" ry="60" fill="#fef08a"/>
  <line x1="210" y1="330" x2="290" y2="330" stroke="#ca8a04" stroke-width="3"/>
  <line x1="215" y1="360" x2="285" y2="360" stroke="#ca8a04" stroke-width="3"/>
  <line x1="225" y1="390" x2="275" y2="390" stroke="#ca8a04" stroke-width="3"/>

  <!-- Tiny Dragon Wings -->
  <!-- Left Wing -->
  <path d="M 190 280 Q 90 210, 120 300 Q 150 310, 180 310 Z" fill="#f97316" stroke="#c2410c" stroke-width="3"/>
  <!-- Right Wing -->
  <path d="M 310 280 Q 410 210, 380 300 Q 350 310, 320 310 Z" fill="#f97316" stroke="#c2410c" stroke-width="3"/>

  <!-- Drake Head -->
  <ellipse cx="250" cy="220" rx="80" ry="70" fill="#ea580c" stroke="#9a3412" stroke-width="4"/>
  <!-- Cute Nubby Horns -->
  <polygon points="200,165 175,105 220,150" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
  <polygon points="300,165 325,105 280,150" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>

  <!-- Big Curious Golden Dragon Eyes -->
  <ellipse cx="215" cy="210" rx="20" ry="24" fill="#1e1b4b"/>
  <circle cx="210" cy="202" r="8" fill="#ffffff"/>
  <circle cx="222" cy="216" r="4" fill="#ffffff"/>
  
  <ellipse cx="285" cy="210" rx="20" ry="24" fill="#1e1b4b"/>
  <circle cx="280" cy="202" r="8" fill="#ffffff"/>
  <circle cx="292" cy="216" r="4" fill="#ffffff"/>

  <!-- Snout & Tiny Embers Sneezing -->
  <ellipse cx="250" cy="250" rx="35" ry="22" fill="#fb923c"/>
  <circle cx="240" cy="246" r="4" fill="#7c2d12"/>
  <circle cx="260" cy="246" r="4" fill="#7c2d12"/>
  
  <!-- Ember Sparks from Snout -->
  <polygon points="250,225 253,235 263,235 255,241 258,251 250,245 242,251 245,241 237,235 247,235" fill="#fef08a"/>
  <circle cx="270" cy="230" r="5" fill="#facc15"/>
  <circle cx="230" cy="235" r="4" fill="#facc15"/>

  <!-- Cheerful Dragon Smile -->
  <path d="M 235 262 Q 250 274, 265 262" stroke="#7c2d12" stroke-width="3" fill="none"/>
</svg>
`);

// 9. THE ANCIENT TREE HOLLOW & PROFESSOR HOOT'S LIBRARY
export const ART_TREE_HOLLOW = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="gladeSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#86efac"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#gladeSky)"/>

  <!-- Great Ancient Oak Canopy -->
  <circle cx="400" cy="50" r="300" fill="#15803d"/>
  <circle cx="220" cy="120" r="180" fill="#166534"/>
  <circle cx="580" cy="120" r="180" fill="#166534"/>

  <!-- Massive Oak Trunk -->
  <path d="M 260 500 L 310 180 L 490 180 L 540 500 Z" fill="#78350f" stroke="#451a03" stroke-width="8"/>

  <!-- Round Hollow Window with Books & Lantern -->
  <circle cx="400" cy="340" r="95" fill="#fef3c7" stroke="#451a03" stroke-width="8"/>
  <rect x="330" y="380" width="140" height="15" fill="#92400e"/>
  <!-- Books on Shelf -->
  <rect x="340" y="340" width="18" height="40" rx="2" fill="#ef4444"/>
  <rect x="360" y="335" width="22" height="45" rx="2" fill="#3b82f6"/>
  <rect x="384" y="345" width="16" height="35" rx="2" fill="#10b981"/>
  <rect x="402" y="338" width="20" height="42" rx="2" fill="#f59e0b"/>

  <!-- PROFESSOR HOOT THE LIBRARY OWL -->
  <!-- Owl Body -->
  <ellipse cx="440" cy="345" rx="24" ry="30" fill="#a16207"/>
  <ellipse cx="440" cy="350" rx="14" ry="20" fill="#fef3c7"/>
  <!-- Owl Round Spectacles -->
  <circle cx="433" cy="335" r="9" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
  <circle cx="447" cy="335" r="9" fill="#ffffff" stroke="#d97706" stroke-width="3"/>
  <circle cx="433" cy="335" r="4" fill="#0f172a"/>
  <circle cx="447" cy="335" r="4" fill="#0f172a"/>
  <!-- Tiny Beak -->
  <polygon points="440,342 437,349 443,349" fill="#ea580c"/>

  <!-- Wooden Signpost: "Elder Tree Library" -->
  <rect x="140" y="360" width="12" height="140" fill="#78350f"/>
  <rect x="100" y="330" width="120" height="45" rx="6" fill="#fde68a" stroke="#78350f" stroke-width="3"/>
  <text x="110" y="357" font-size="14" font-family="serif" font-weight="bold" fill="#78350f">📖 Elder Oak</text>
</svg>
`);

// 10. CAMPFIRE REST SITE
export const ART_CAMPFIRE_REST = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="nightSkyCamp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="60%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <radialGradient id="campGlow" cx="50%" cy="75%" r="50%">
      <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
      <stop offset="40%" stop-color="#f97316" stop-opacity="0.6"/>
      <stop offset="80%" stop-color="#ea580c" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#nightSkyCamp)"/>

  <!-- Constellations & Milky Way -->
  <circle cx="120" cy="80" r="2" fill="#ffffff"/>
  <circle cx="240" cy="50" r="3" fill="#ffffff"/>
  <circle cx="360" cy="90" r="2" fill="#ffffff"/>
  <circle cx="480" cy="60" r="3" fill="#ffffff"/>
  <circle cx="620" cy="110" r="2" fill="#ffffff"/>
  <circle cx="700" cy="70" r="3" fill="#ffffff"/>
  <!-- Shooting Star -->
  <line x1="500" y1="40" x2="600" y2="80" stroke="#fef08a" stroke-width="2"/>

  <!-- Forest Tree Silhouettes -->
  <polygon points="60,400 120,220 180,400" fill="#064e3b"/>
  <polygon points="140,420 200,260 260,420" fill="#022c22"/>
  <polygon points="560,420 620,250 680,420" fill="#022c22"/>
  <polygon points="640,400 700,220 760,400" fill="#064e3b"/>

  <!-- Campfire Clearing -->
  <ellipse cx="400" cy="460" rx="360" ry="90" fill="#1e293b"/>
  
  <!-- Campfire Ambient Glow -->
  <ellipse cx="400" cy="380" rx="260" ry="160" fill="url(#campGlow)"/>

  <!-- Cozy Adventurer Bedrolls -->
  <ellipse cx="240" cy="430" rx="60" ry="25" fill="#b45309" stroke="#78350f" stroke-width="3"/>
  <ellipse cx="220" cy="425" rx="20" ry="18" fill="#fef3c7"/>

  <!-- Stone Fire Ring -->
  <ellipse cx="400" cy="420" rx="70" ry="30" fill="#57534e" stroke="#292524" stroke-width="4"/>
  <circle cx="340" cy="420" r="14" fill="#78716c"/>
  <circle cx="360" cy="435" r="16" fill="#78716c"/>
  <circle cx="400" cy="442" r="18" fill="#78716c"/>
  <circle cx="440" cy="435" r="16" fill="#78716c"/>
  <circle cx="460" cy="420" r="14" fill="#78716c"/>

  <!-- Burning Birch Logs -->
  <polygon points="360,420 440,390 445,400 365,430" fill="#d97706"/>
  <polygon points="440,420 360,390 355,400 435,430" fill="#d97706"/>

  <!-- Crackling Fire Flames -->
  <path d="M 370 420 Q 400 290, 410 360 Q 430 310, 435 420 Z" fill="#ef4444"/>
  <path d="M 380 420 Q 400 320, 410 370 Q 425 340, 425 420 Z" fill="#f97316"/>
  <path d="M 390 420 Q 400 340, 405 380 Q 415 360, 415 420 Z" fill="#fde047"/>

  <!-- Marshmallow on a Stick -->
  <line x1="280" y1="450" x2="380" y2="350" stroke="#78350f" stroke-width="4"/>
  <rect x="370" y="340" width="20" height="24" rx="6" fill="#ffffff" stroke="#fed7aa" stroke-width="2"/>
</svg>
`);

// Curated Royal Gallery Presets for instant 1-click equipping in ArtStudioModal
export interface GalleryArtPreset {
  id: string;
  title: string;
  category: 'companions' | 'heroes' | 'locations' | 'dungeons' | 'dragons';
  imageUrl: string;
  description: string;
  tag: string;
}

export const ROYAL_GALLERY_PRESETS: GalleryArtPreset[] = [
  {
    id: 'pip_puppy',
    title: 'Pip the Puppy Squire',
    category: 'companions',
    imageUrl: ART_PUPPY_SQUIRE,
    description: 'A loyal, floppy-eared hound squire in an enchanted blackberry bush.',
    tag: 'Faithful Hound',
  },
  {
    id: 'sparky_drake',
    title: 'Sparky the Baby Drake',
    category: 'dragons',
    imageUrl: ART_DRAGON_SPARKY,
    description: 'A cheerful baby fire drake who sneezes harmless golden embers.',
    tag: 'Fire Whelp',
  },
  {
    id: 'tavern_hearth',
    title: 'The Wayward Badger Tavern',
    category: 'locations',
    imageUrl: ART_TAVERN_HEARTH,
    description: 'A roaring stone hearth, wooden beams, foaming sweet cider, and dice games.',
    tag: 'Cozy Inn',
  },
  {
    id: 'waterfall_grotto',
    title: 'The Whispering Waterfall',
    category: 'locations',
    imageUrl: ART_WATERFALL_GROTTO,
    description: 'Rushing azure waterfalls with rainbow mists and a hidden grotto cave.',
    tag: 'Secret Cave',
  },
  {
    id: 'pixie_ring',
    title: 'The Moonlit Fairy Ring',
    category: 'locations',
    imageUrl: ART_PIXIE_RING,
    description: 'Luminescent toadstools and dancing winged pixies beneath a full silver moon.',
    tag: 'Faerie Hollow',
  },
  {
    id: 'sunken_crypt',
    title: 'The Sunken Dragon Crypt',
    category: 'dungeons',
    imageUrl: ART_SUNKEN_CRYPT,
    description: 'Ancient torchlit stone dungeon with dragon carvings and rune chests.',
    tag: 'D&D Dungeon',
  },
  {
    id: 'goblin_workshop',
    title: "Sprocket's Clockwork Camp",
    category: 'locations',
    imageUrl: ART_GOBLIN_WORKSHOP,
    description: 'Friendly goblin tinkerer building steam-wing flying carts with brass gears.',
    tag: 'Gnome Workshop',
  },
  {
    id: 'tree_hollow',
    title: "Professor Hoot's Oak Library",
    category: 'locations',
    imageUrl: ART_TREE_HOLLOW,
    description: 'Ancient oak tree hollow packed with spellbooks, scrolls, and scholarly owl.',
    tag: 'Word Haven',
  },
  {
    id: 'campfire_rest',
    title: 'The Adventurer Campfire',
    category: 'locations',
    imageUrl: ART_CAMPFIRE_REST,
    description: 'Star-lit wilderness campfire with crackling birch logs and roasted treats.',
    tag: 'Short Rest',
  },
  {
    id: 'aria_star',
    title: 'Aria the Star Mage',
    category: 'heroes',
    imageUrl: ART_HERO_ARIA,
    description: 'Lavender robed apprentice mage with crescent star wand and starlight cloak.',
    tag: 'Phonics Mage',
  },
  {
    id: 'barnaby_knight',
    title: 'Barnaby the Brave Knight',
    category: 'heroes',
    imageUrl: ART_HERO_BARNABY,
    description: 'Lion-crested young paladin with polished shield of kindness.',
    tag: 'Shield Knight',
  },
  {
    id: 'zephyr_ranger',
    title: 'Zephyr the Wind Ranger',
    category: 'heroes',
    imageUrl: ART_HERO_ZEPHYR,
    description: 'Nimble forest scout with feathered cowl and willow recurve bow.',
    tag: 'Cloud Scout',
  },
  {
    id: 'luna_cleric',
    title: 'Luna the Moon Cleric',
    category: 'heroes',
    imageUrl: ART_HERO_LUNA,
    description: 'Gentle healer with moonstone scepter and celestial starlight robes.',
    tag: 'Star Healer',
  },
];

