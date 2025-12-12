// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { Section } from './components/Section.jsx';
import { ProjectCard } from './components/ProjectCard.jsx';

// 🔹 helper for icons (and any other images in App)
const withBase = (path) => {
  if (!path) return path;
  if (path.startsWith('http')) return path;

  if (import.meta.env.DEV) {
    return '/' + path.replace(/^\/+/, '');
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleaned = path.replace(/^\/+/, '');
  return `${base}${cleaned}`;
};

const projects = [
  {
    title: 'Dragon Feast – Rogue-like Dragon Action',
    subtitle: 'Game-Design · 3D Assets · Audio-Design · Unity · Student Team Project',
    genre: 'Single-player, room-based rogue-like',
    engine: 'Unity',
    purpose:
      'Build a playful 3D rogue-like where a dragon mother fights through a modular castle to rescue her stolen eggs. The project explores how physics-driven combat, enemy collisions and readable spatial layouts can create a fast, intuitive core loop without relying on complex controls or UI.',
    role:
      'Game design · Level readability support · 3D environment assets · Audio design & implementation (FMOD + Unity)',
    tasks: [
      'Co-developed the main combat loop around launching knights into archers and the ballista boss, focusing on teaching through interaction instead of UI.',
      'Helped shape early-game flow and enemy readability by deciding which enemies appear first and how they are spaced inside rooms.',
      'Modelled and textured modular 3D environment assets used to build the castle rooms, keeping silhouettes and contrast readable from the gameplay camera.',
      'Designed and implemented sound effects using FMOD and Unity, including a sound manager, SFX integration and basic mixing for combat clarity.',
      'Contributed to the game design document and ongoing written analysis during playtests, documenting what felt fun, confusing or unbalanced.',
    ],
    highlight:
      'The game teaches players the entire combat system without tutorial pop-ups. Knights, archers and the ballista boss are introduced as readable “physical tools” so players naturally learn to launch enemies into each other while still feeling in control.',
    tools: ['Unity', 'FMOD', 'Blender', 'GitHub'],
    groupMembers: [
      'Justus Schultzke – Game design, 3D assets & audio',
      'Björn Martens – Programming, AI & boss mechanics',
      'Christian Bauer – Character modelling, rigging & animation',
      'Mia Reichmann – UI, environment art & textures',
    ],

    thumbnail: '/media/dragonfeast/combat-loop.webm',

    media: [
      {
        // 1 – core combat GIF (hero)
        type: 'video',
        src: '/media/dragonfeast/combat-loop.webm',
        alt: 'Dragon mom launching knights around a fountain arena, knocking them into each other.',
      },
      {
        // 2 – garden combat arena
        type: 'image',
        src: '/media/dragonfeast/dragonfeast-garden-arena.png',
        alt: 'Top-down view of a courtyard arena with four hedge corners and a central fountain used for combat encounters.',
      },
      {
        // 3 – great hall / social space
        type: 'image',
        src: '/media/dragonfeast/dragonfeast-great-hall.png',
        alt: 'Large great hall with wooden tables, benches, candles and red banners, used as a social / pacing space in the level.',
      },
      {
        // 4 – prison corridor / flow space
        type: 'image',
        src: '/media/dragonfeast/dragonfeast-prison-corridor.png',
        alt: 'Long stone corridor with torches, banners and props guiding the player through the prison wing.',
      },
    ],


  },
  {
    title: 'Mine Race – Fantasy Racing Boardgame',
    subtitle: 'Game-Design · Physical boardgame',
    genre: 'Family strategy · Modular track · Action-point racing',
    engine: 'Analog boardgame',

    purpose:
      'Design a chaotic but still readable fantasy racing game where different factions rush through an abandoned mine to reach a dragon’s hoard first. The goal was to mix strategic planning with unpredictable events so that both younger and more experienced players can enjoy sabotaging each other without the game becoming unfair or incomprehensible.',

    role:
      'Game design · Systems & card design · balancing support · 3D component design',

    tasks: [
      'Helped define the core concept of a modular mine track, where hex tiles are revealed as players move forward, creating tension between exploration and safety.',
      'Worked on the action card set: layout, card effects and the split between movement and special actions so players must constantly choose between speed and sabotage.',
      'Contributed to faction abilities for dwarves, elves, goblins and a necromancer team, making sure each faction plays differently but stays easy to understand at the table.',
      'Supported balancing by analysing playtest feedback and helping to classify cards as “chaotic” or “strategic” to keep a fair mix of controlled play and wild outcomes.',
      'Designed and modelled the 3D minecart player pieces in Blender and prepared them for 3D printing so the physical components support the racing fantasy.',
      'Worked on documentation sections in the Game Design Document, including concept description, theme, mechanics and development history.',
    ],

    highlight:
      'Mine Race uses a simple action-point system with a hard limit on how often players can move each turn. That small rule forces players to use sabotage, faction abilities and environmental events instead of only rushing forward, which creates the funny, chaotic mine-cart rivalry we were aiming for.',

    tools: [
      'Blender',
      'Bamboo Studio',
      'Excel',
      'nanDeck',
    ],

    groupMembers: [
      'Justus Schultzke – Systems design, cards, documentation & 3D minecarts',
      'Denise Alicia Franz – Balancing, rulebook & documentation',
      'Florine Bienhüls – Systems, game theory & rulebook layout',
      'Mia Reichmann – Board, tiles, character & visual design',
    ],

    media: [
      {
        type: "image",
        src: "/media/minerace/board-overview.jpg",
        alt: "Mine Race prototype: modular mine-track board with 3D minecarts and terrain pieces."
      },
      {
        type: "image",
        src: "/media/minerace/dwarf-card.png",
        alt: "Dwarf faction ability card showing special actions and AP costs."
      },
      {
        type: "image",
        src: "/media/minerace/board-layout.png",
        alt: "Top-down layout of the Mine Race board showing hex geometry and track distribution."
      }
    ],


  },

  {
    title: "Sir Hubert's Prison Break – Puzzle Platformer Escape",
    subtitle:
      'Game Design · Level & Puzzle Design · Worldbuilding · Unreal Engine · Student Team Project',
    genre: '3D puzzle platformer · Escape game',
    engine: 'Unreal Engine',

    purpose:
      "Create a short third-person escape adventure where Sir Hubert, a knight from the Mouse Kingdom, must flee the fortress of the Cat Empire. The prototype focuses on readable platforming challenges and environmental puzzles instead of complex combat, with each space acting as a deliberate step in his escape.",

    role:
      'Game design · Level & puzzle design · Worldbuilding · Platform layout · Starting area implementation · Documentation',

    tasks: [
      'Co-designed the overall escape flow from the prison starting area through interior rooms and out onto the castle walls and rooftops.',
      'Designed and blocked out multiple puzzle and platforming sections.',
      'Built the starting area of the game to establish tone, basic movement challenges.',
      'Created the main jump-and-run section.',
      'Worked on environmental puzzles such as torch interactions and triggers that open paths.',
      'Contributed to worldbuilding, building the landscape and night sky.',
      'Helped maintain the game design document, describing mechanics, level intentions and puzzle solutions so the team could implement and iterate consistently.',
    ],

    highlight:
      'The castle is built to guide players naturally: tight dungeons, vertical rooftops and hint signs create a readable escape route that feels grounded in the world.',

    tools: [
      'Unreal Engine',

    ],

    groupMembers: [
      'Justus Schultzke – Game design, level & puzzle design, worldbuilding, starting area',
      'Denise Alicia Franz – Level & labyrinth construction, puzzle logic, documentation & game design',
      'Mia Reichmann – Documentation, texturing, level integration, concept art & game design',
      'Jennifer Werner – Documentation, puzzle integration, puzzle logic, level building & game design'


    ],

    thumbnail: '/media/sirhubert/first-platformer.webm',

    media: [
      {
        type: 'video',
        src: '/media/sirhubert/first-platformer.webm',
        alt: 'Vertical platforming escape sequence where Sir Hubert jumps across moving stone platforms inside the castle.',
      },
      {
        type: 'video',
        src: '/media/sirhubert/torch-puzzle.webm',
        alt: 'Torch interaction puzzle where lighting a brazier or lever activates a mechanism and opens a new path.',
      },
      {
        type: 'image',
        src: '/media/sirhubert/castle-overview.png',
        alt: 'Exterior view over the castle district with rooftops, walls and torches defining the escape route.',
      },
      {
        type: 'image',
        src: '/media/sirhubert/jump-and-run.png',
        alt: 'Rooftop jump-and-run section with platforms attached to the sides of medieval houses along the castle wall.',
      },
      {
        type: 'image',
        src: '/media/sirhubert/labyrinth.png',
        alt: 'Top-down view of a labyrinth-like interior layout used for a navigation puzzle inside the castle.',
      },

      {
        type: 'image',
        src: '/media/sirhubert/sky-and-landscape.png',
        alt: 'View of the night sky and landscape',
      },

    ],
  },

  {
    title: 'Pocket Dimension Elevator – Roblox Puzzle Concept',
    subtitle: 'Concept · Environmental Puzzle · Level-Design',
    genre: 'Environmental puzzle / exploration',
    engine: 'Roblox (planned)',

    purpose:
      'Design a small-scale Roblox experience where players ride an elevator through a series of surreal “pocket dimensions” and solve short environmental puzzles to continue ascending. The concept focuses on readable spaces, strong themes per floor and a simple core loop that works on both PC and mobile. This project currently exists as a game design document only – no prototype yet.',

    role:
      'Solo concept – game & level design, puzzle design & documentation.',

    tasks: [
      'Outlined a core loop built around an elevator hub that connects a sequence of self-contained puzzle rooms, each with a clear goal and exit condition.',
      'Defined four themed “pocket dimension” floors (Lush Garden, Molten Core, Void Space, Crystal Cavern), each with its own visual mood and signature puzzle mechanic.',
      'Scoped puzzle mechanics to fit short, replayable Roblox sessions while still teaching players through environment and interaction instead of text-heavy tutorials.',
      'Planned a modular technical setup using Roblox TweenService for elevator movement and door animations, with puzzle modules that send completion events to the elevator system.',
      'Documented art, lighting and audio direction per floor to keep silhouettes readable, moods distinct and transitions between floors smooth and cinematic.',
    ],

    highlight:
      'The elevator structure frames the whole experience: each floor is a small, self-contained puzzle that introduces one clear idea and resolves quickly, making it well suited to short Roblox play sessions while still feeling atmospheric and cohesive.',

    tools: [
      'Roblox Studio',
    ],

    groupMembers: [
      'Justus Schultzke – Game & level design, concept & documentation',
      'Jean-Pierre Bindels – Scripting, level-building & sketching'
    ],

    media: [
      {
        type: 'image',
        src: '/media/pocket-dimension/molten-core.png',
        alt: 'Sketch of a molten cave arena with round stone platforms rising from hot liquid.'
      }
    ],

  },

];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-light via-bg-soft to-[#fdf9f5] text-slate-900 dark:from-bg-main dark:via-slate-950 dark:to-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-amber-900/10 bg-white/80 backdrop-blur-md dark:border-amber-200/10 dark:bg-slate-950/80">
        <div className="section-container flex items-center justify-between py-5 md:py-6">
          <div className="flex flex-col leading-tight">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-amber-700 dark:text-amber-200 dark:drop-shadow-[0_0_8px_rgba(245,158,11,0.35)]">
              Game Design Student
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-xl">
              Justus Schultzke
            </span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden text-base text-slate-700 dark:text-slate-300 md:flex md:gap-6">
              <a href="#projects" className="hover:text-accent">
                Design Projects
              </a>
              <a href="#studies" className="hover:text-accent">
                Level Design Studies
              </a>
              <a href="#skills" className="hover:text-accent">
                Skills
              </a>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* HERO – centered, bold intro */}
        <section className="relative flex min-h-[85vh] items-center justify-center">
          <div className="section-container flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04, ease: 'easeOut' }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-200 dark:drop-shadow-[0_0_8px_rgba(245,158,11,0.35)]"
            >
              Game Design Student · 4th Semester
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
              className="font-display text-[2.4rem] font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50 sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem]"
            >
              I explore how mechanics,
              <br />
              layout and feedback shape
              <br />
              player experience.
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed"
            >
              I study game design with a focus on gameplay, systems and level design. I
              enjoy breaking down why games feel good, prototyping ideas, and seeing how
              small design changes affect clarity, difficulty and flow. Right now I&apos;m
              especially interested in environment-driven gameplay and intuitive player
              guidance.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.22, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-600 dark:text-slate-400"
            >
              {/* pills inside unchanged */}
              <span className="rounded-full border border-slate-300/50 bg-white/80 px-4 py-1 font-mono uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-slate-300">
                Gameplay Design
              </span>
              <span className="rounded-full border border-slate-300/50 bg-white/80 px-4 py-1 font-mono uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-slate-300">
                Level Design (developing)
              </span>
              <span className="rounded-full border border-amber-500/50 bg-amber-200/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-800 backdrop-blur-sm dark:border-amber-300/40 dark:bg-black/50 dark:text-amber-200 dark:shadow-[0_0_14px_rgba(245,158,11,0.25)]">
                Scroll to see design projects ↓
              </span>
            </motion.div>

          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" label="About" index={0}>
          <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] md:items-start">
            {/* Left: editorial text */}
            <div className="space-y-4 text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed max-w-3xl">
              <p>
                I am a game design student in my fourth semester with a strong
                interest in gameplay, systems and level design. I like to
                analyse why certain mechanics and layouts feel good to play, and
                then rebuild those ideas in my own experiments.
              </p>
              <p>
                My work focuses on how mechanics, layout and feedback influence
                player decisions. I enjoy prototyping quickly, testing with real
                players and learning from what works and what does not. Right
                now, I am actively developing my level design skills through
                small layout experiments and design studies.
              </p>
            </div>

            {/* Right: Snapshot card moved here */}
            <div className="rounded-3xl border border-amber-900/10 bg-white/90 p-5 text-sm shadow-soft-xl backdrop-blur dark:border-amber-200/10 dark:bg-slate-950/90">
              <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">
                Snapshot
              </h2>
              <dl className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">
                    Based in
                  </dt>
                  <dd className="font-medium">Germany</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">
                    Focus
                  </dt>
                  <dd className="text-right">
                    Gameplay &amp; Systems Design
                    <br />
                    Level Design (developing)
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">
                    Engines
                  </dt>
                  <dd className="text-right">Unity · Unreal · Godot</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">Also</dt>
                  <dd className="text-right">
                    Web-based prototypes
                    <br />
                    Boardgame systems
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        {/* DESIGN PROJECTS */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <Section id="projects" label="Design Projects" index={1}>
            <div className="mb-8 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg md:leading-relaxed">
              Selected design projects focusing on gameplay systems, interaction
              and player experience. These are prototypes and studies rather
              than finished commercial products.
            </div>
            <div>
              {projects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </div>
          </Section>
        </div>

        {/* LEVEL DESIGN STUDIES */}
        <Section id="studies" label="Level Design Studies" index={2}>
          <div className="grid gap-8 md:grid-cols-2">
            {/* LEFT: INTRO */}
            <div className="space-y-4 text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                Ongoing theoretical explorations — updated as I develop new blockouts
              </p>

              <p>
                I use small, theory-driven studies to strengthen my level design skills. These
                explorations focus on layout, pacing and player guidance without requiring
                fully built or polished levels. The goal is to understand one design question
                at a time and apply it to future projects.
              </p>

              <p>
                Each study is an ongoing learning exercise that will later be supported with
                blockouts and diagrams as I develop them. For now, the focus is on analysing
                principles such as flow, sightlines, tension and readability.
              </p>

            </div>

            {/* RIGHT: STUDY CARDS */}
            <div className="space-y-3 text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed">
              {/* Study 01 */}
              <div className="rounded-2xl border border-amber-900/10 bg-white/90 p-3 shadow-soft-xl dark:border-amber-200/10 dark:bg-slate-950/90">

                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                  Study 01 — Player Guidance Through Layout
                </h3>
                <p className="mt-2 text-sm leading-relaxed md:text-base">
                  A conceptual study on how shapes, openings, obstacles and sightlines can guide
                  players without UI. Focus on funneling, visual anchors and anticipation.
                </p>

              </div>

              {/* Study 02 */}
              <div className="rounded-2xl border border-amber-900/10 bg-white/90 p-3 shadow-soft-xl dark:border-amber-200/10 dark:bg-slate-950/90">

                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                  Study 02 — Risk &amp; Reward in Space Design
                </h3>
                <p className="mt-2 text-sm leading-relaxed md:text-base">
                  A theoretical exploration of how optional routes, hazards and enemy placement
                  affect player decisions. Focus on reward placement and tension curves.
                </p>

              </div>

              {/* Study 03 */}
              <div className="rounded-2xl border border-amber-900/10 bg-white/90 p-3 shadow-soft-xl dark:border-amber-200/10 dark:bg-slate-950/90">

                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">
                  Study 03 — Teaching Through Environment
                </h3>
                <p className="mt-2 text-sm leading-relaxed md:text-base">
                  Investigating how lighting, props and repeated patterns can introduce mechanics
                  without text-heavy tutorials. Focus on tutorialisation and environmental messaging.
                </p>

              </div>
            </div>
          </div>
        </Section>


        {/* SKILLS */}
        <Section id="skills" label="Skills" index={3}>
          <div className="space-y-8">
            {/* Short intro */}
            <div className="max-w-3xl text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed">
              <p>
                I work mainly in gameplay and systems design, with a growing focus on
                level design. Most of my prototypes are built in Unity or Unreal, but
                I like to move between tools as needed and keep learning new workflows.
              </p>
            </div>

            {/* Group 1: Design focus */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
                Design focus
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {/* Gameplay Design */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 dark:bg-black">
                    GD
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Gameplay Design
                  </span>
                </div>

                {/* Systems Design */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 dark:bg-black">
                    SD
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Systems Design
                  </span>
                </div>

                {/* Level Design */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-50 dark:bg-black">
                    LD
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Level Design (developing)
                  </span>
                </div>

                {/* Player Experience */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-50 dark:bg-black">
                    PX
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Player Experience &amp; UX flow
                  </span>
                </div>
              </div>
            </div>

            {/* Group 2: Engines & tools */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
                Engines &amp; tools — using now
              </h3>

              {/* FIRST ROW(S): core tools in grid */}
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {/* Unity */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/unity.svg')}
                      alt="Unity"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Unity
                  </span>
                </div>

                {/* Unreal */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/unreal.svg')}
                      alt="Unreal"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Unreal Engine
                  </span>
                </div>

                {/* Godot */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/godot.svg')}
                      alt="Godot"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Godot
                  </span>
                </div>

                {/* FMOD */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/fmod.svg')}
                      alt="FMOD"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    FMOD
                  </span>
                </div>

                {/* Blender */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/blender.svg')}
                      alt="Blender"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Blender
                  </span>
                </div>

                {/* Github*/}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/github.svg')}
                      alt="Github"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Git / GitHub
                  </span>
                </div>

                {/* Typescript*/}
                <div className="flex flex-col items-center gap-2 col-start-3 sm:col-start-3 md:col-start-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/typescript.svg')}
                      alt="Typescript"
                      className="h-8 w-8 object-contain"
                    />

                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    typescript
                  </span>
                </div>

                {/* JavaScript — now directly under FMOD */}
                <div className="flex flex-col items-center gap-2 col-start-4 sm:col-start-4 md:col-start-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900">
                    <img
                      src={withBase('/icons/js.svg')}
                      alt="Javascript"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    JavaScript / Web tools
                  </span>
                </div>
              </div>

            </div>

            {/* Group 3: Currently exploring */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
                Currently exploring
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {/* Blockouts */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-900 dark:bg-amber-400">
                    LD
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Level blockouts
                  </span>
                </div>

                {/* Encounter Design */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-900 dark:bg-amber-400">
                    EC
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Encounter Design
                  </span>
                </div>

                {/* Lighting */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-900 dark:bg-amber-400">
                    LI
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Lighting & Atmosphere
                  </span>
                </div>

                {/* Audio Integration */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/90 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-900 dark:bg-amber-400">
                    AU
                  </div>
                  <span className="text-[0.7rem] font-medium tracking-wide text-slate-700 dark:text-slate-200">
                    Audio Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>




        {/* CONTACT */}
        <Section id="contact" label="Contact" index={4}>
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-slate-800 dark:text-slate-300 md:text-lg md:leading-relaxed">
            <p>
              If you&apos;re looking for a game or level design intern who
              enjoys prototyping, thinking about player experience and learning
              through iteration, I&apos;d be happy to talk.
            </p>

            <div className="rounded-3xl border border-amber-900/10 bg-white/90 p-5 text-sm shadow-soft-xl dark:border-amber-200/10 dark:bg-slate-950/90">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                Get in touch
              </div>
              <div className="mt-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Email
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="text-base font-medium text-accent underline-offset-4 hover:underline md:text-lg"
                >
                  schultzke.justus@gmail.com
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                <a
                  href="https://www.linkedin.com/in/justus-schultzke-93795a3a0/"
                  className="hover:text-accent"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/Jussie247" className="hover:text-accent" aria-label="GitHub">
                  GitHub
                </a>
              </div>
            </div>


          </div>
        </Section>
      </main>

      <footer className="border-t border-amber-900/10 py-6 text-[11px] text-slate-500 dark:border-amber-200/10 dark:text-slate-500">
        <div className="section-container flex items-center justify-between">
          <span>© {new Date().getFullYear()} Justus Schultzke</span>
          <span className="hidden sm:inline">

          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;


