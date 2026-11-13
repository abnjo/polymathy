# POLYMATHY — Knowledge Graph & Learning Assistant

Polymathy is a local-first, zero-dependency visual knowledge workspace built on a Compound Directed Acyclic Graph (Compound DAG). It maps conceptual depth outward from a single `Knowledge` origin vertex while enforcing prerequisite dependencies across branches using Git-style `MAIN` (primary goal) and `HEAD` (active inspection) navigation.

Featuring a crisp, high-contrast engineering aesthetic with zero decorative blur, Polymathy lets you explore deep subtopic hierarchies through hollow progress conduits, jump smoothly down prerequisite chains without losing your place, and edit or extend your curriculum directly through the UI.

---

## 60-Second Quick Start

No build tools, Node.js, or `npm install` are required.

- **Direct Launch:** Double-click `index.html` or open it directly in any browser (`xdg-open index.html` on Linux, `open index.html` on macOS).
- **Optional Local Server (Recommended for clean `localStorage` isolation & PWA installation):**
  ```bash
  python3 -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.
- **Install as Standalone PWA:** Open `http://localhost:8080` and click **`[Install App]`** in the topbar (or your browser's install icon) to install Polymathy as a standalone desktop or mobile app with offline service worker caching.

---

## Visual Legend (At-a-Glance)

| Visual Element | Meaning & Behavior |
| :--- | :--- |
| **Origin Dot `Knowledge`** | Root origin vertex of the graph. All disciplines branch outward from here. |
| **Hollow Conduit + Crossbar** | Hierarchy resolution edge (`parent -> child`). Fills as you complete material; perpendicular crossbar marks your achievement frontier. |
| **Red Arrow (Solid)** | Incomplete prerequisite link. Outgoing arrows display interactive destination directory badges (`-> Directory / Target`) along the curve so you can see where they are leading at a glance; click arrow or badge to jump straight to the connected topic. |
| **Green Arrow (Dotted)** | Completed prerequisite foundation. Displays destination directory badge along the curve. |
| **Blue `MAIN` Beacon** | Your primary, long-term learning target anchored on the map. |
| **Purple `HEAD` Reticle** | The topic currently open in the right-hand inspection & study side panel. |
| **Dashed Draft Topic Card** | Placeholder synthesized automatically when another topic links to it; hydrates into a full card once created or imported. |

---

## Canvas Navigation & Scrolling

| Input Method | How to Navigate |
| :--- | :--- |
| **Pan / Scroll Canvas** | • **Mouse wheel / Trackpad 2-finger scroll:** Natural canvas scrolling (scrolls vertically/horizontally)<br>• **Mouse drag:** Click and drag background anywhere<br>• **Touch screens:** 1-finger swipe to pan<br>• **On-screen buttons:** Click `[Left]` `[Up]` `[Down]` `[Right]` in the bottom HUD |
| **Zoom In / Out** | • **Pinch gesture:** 2 fingers on touch screens or trackpads<br>• **Ctrl + Scroll / Cmd + Scroll:** Mouse wheel zoom centered on cursor<br>• **HUD Buttons:** Click `[+]` or `[-]`, or toggle `[Wheel: Scroll / Zoom]` |
| **Fit / Center** | Click **`[Fit]`** in HUD to zoom-to-fit all visible topics |
| **Main Goal Spotlight** | • Click **`[Spotlight]`** in the `MAIN:` chip on the topbar center or **`[Goal Spotlight]`** in HUD (hotkey `S`)<br>• Switch between 3 spotlight modes via **`[Mode: ...]`** button or `Shift + S`:<br>&nbsp;&nbsp;1. **Hybrid Mode:** Shows the exact category containment spine of `MAIN` + all required prerequisite paths with interconnecting arrows, cleanly pruning all unrelated branches.<br>&nbsp;&nbsp;2. **Hierarchy Mode:** Isolates strictly the pure containment hierarchy tree (`Knowledge -> Domain -> ... -> Goal`). Zero cross-branch distractions.<br>&nbsp;&nbsp;3. **Prerequisites Mode:** Isolates the exact prerequisite dependency DAG leading into the goal with full intermediate arrows.<br>• Unrelated domains and sibling branches are completely pruned from the layout for an uncluttered view. |
| **Toggle Downstream Arrows** | • Click **`[Downstream: ON/OFF]`** in the canvas HUD<br>• Click **`[Hide on Map / Show on Map]`** in the side panel Downstream Unlocks header<br>• Hides outgoing prerequisite arrows from the canvas for a clean view |
| **Keyboard Shortcuts** | • `M`: Smoothly glide camera to `MAIN`<br>• `H`: Smoothly glide camera to `HEAD`<br>• `S`: Toggle Main Goal Spotlight on/off<br>• `Shift + S`: Cycle Goal Spotlight Mode (Hybrid \| Hierarchy \| Prerequisites)<br>• `Esc`: Return from detour or close active dialog |

---

## Core Study Workflow (4 Steps)

1. **Pick a Target Goal (`MAIN`):**
   Click any domain on the map to expand its subtopics and view it in the side panel (`HEAD`). Click **`[Set as Main Target]`** in the header to anchor your primary objective beacon.
2. **Clear Prerequisites:**
   Check the **Prerequisites** card in the side panel. If red prerequisites are listed, click **`Detour →`** to inspect the required topic and push your origin to the Detour History stack. Use **`[← Back]`** anytime to return.
3. **Study & Check Off Tasks:**
   - **Overview & Notes:** Review the technical definition and formulas ($LaTeX$ supported). Check **`Concept understood`**.
   - **Resources & Study Materials:** Study attached textbooks or video lectures and check them off.
   - **Subtopics & Tasks:** Break the topic into component tasks and check them off as you learn.
4. **Mark Topic Completed:**
   - Click **`[Mark Topic Completed]`** to permanently latch completion. All outgoing prerequisite arrows turn dotted green across the graph, unlocking dependent topics. You can still return and add deeper subtopics later anytime without re-locking downstream topics.

---

## Modular Exam & Course Playlists

While `curriculum.json` organizes all human knowledge into a clean, reductionist taxonomy, real-world study frequently follows structured exams, degree curricula, or book-by-book sequences that cut across distinct branches of science.

Polymathy provides **Playlists** as an independent overlay layer without distorting the underlying tree:

- **Top Bar Integration:** Direct playlist locator pill displaying `PLAYLIST: <title> (<step>/<total>)` with `<` and `>` steppers, `[Spotlight]` toggle, and `[Fit]` framing.
- **Side Panel Contextual Banner:** When inspecting a playlist step, renders `ACTIVE PLAYLIST // STEP k OF N`, pedagogical notes, target level, and step progression buttons.
- **Auto-Advance Hook:** When completing baseline mastery on an active playlist step, the system automatically advances to the next step, updates `MAIN` and `HEAD`, and glides the camera smoothly across the map.
- **Map Route Overlay:** Small `#1`, `#2`... sequence badges on visible playlist nodes and a dashed guided trajectory spline tracing the path across domains.
- **Playlist Spotlight Mode:** Isolates the active syllabus against the universal map using a 4-tier visual hierarchy (fading unrelated domains to a faint watermark, auto-expanding the directory spine, and auto-framing the syllabus).
- **Built-in Presets:**
  1. **JEE Advanced / Foundational Engineering Entrance (`Exam`):** 16-step foundational STEM curriculum spanning algebra, calculus, Newtonian dynamics, thermodynamics, electromagnetism, and chemical principles.
  2. **Path to General Relativity & QFT (`Degree Track`):** 10-step trajectory from multivariable calculus and analytical mechanics to curved spacetime and quantum field theory.
  3. **Mathematical & Algorithmic Foundations of AI (`Specialization`):** 8-step rigorous pathway across linear algebra, multivariate optimization, probability theory, statistics, algorithms, information theory, and deep learning.
  4. **Programming Languages & Paradigms Track (`Specialization`):** 13-step progression from low-level systems execution (Assembly, C, Rust) through OOP (C++, Java), pure functional programming (Haskell, Lisp), logic programming (Prolog), dynamic scripting (Python, TypeScript), to concurrent systems (Go).
  5. **Software Developer Roadmap: Web to Systems (`Career Track`):** 11-step progressive pathway from client-side web markup (HTML/CSS/DOM) and interactive scripting (JavaScript & TypeScript) through core algorithms, general-purpose software (Python), computer architecture, procedural systems (C), high-performance OOP (C++), and operating systems to networked applications, Rust, and Go.
- **Custom Builder & AI Prompt Generator:** Interactively build custom playlists in the modal, import external `.json` syllabi (with automatic stub topic synthesis for novel IDs), or click `[Copy LLM Playlist Prompt]` to generate complete playlists with any LLM.

---

## Full UI Editing & File Architecture

### Decoupled Graph File (`curriculum.json` & `curriculum.js`)
The entire STEM curriculum knowledge graph is completely separated from `index.html` into standalone external files:
- **`curriculum.json`**: Standalone pure JSON file containing 121 topics, mathematical definitions ($LaTeX$), prerequisite links, and textbook references across Mathematics, Pure Sciences (Physics, Chemistry, Biology), Computer Science, Engineering, and Philosophy/Economics. You can inspect or edit this file directly in any text editor.
- **`curriculum.js`**: Synchronously auto-loadable companion script enabling instant out-of-the-box operation via direct browser double-click (`file://`), bypassing browser local fetch CORS restrictions. When served via HTTP (`python3 -m http.server`), `index.html` dynamically fetches and live-reloads `curriculum.json`.
- **`[Load File]` button in Topbar**: Select and load any custom `.json` graph file on demand directly through your browser.
- **`[Export curriculum.json]` in Storage & Backups**: Export the current graph back into clean standalone JSON format anytime.

### Decoupled Playlist Presets Directory (`playlists/` & `presets/`)
The examination and degree course playlist presets are separated from `index.html` into standalone external JSON files in a dedicated directory:
- **`playlists/index.json`**: Manifest array registering all available preset JSON files in the directory.
- **`playlists/*.json`**: Individual standalone pure JSON preset files (e.g. `preset_jee_adv_stem.json`, `preset_theoretical_physics_gr.json`, `preset_modern_ai_foundations.json`) with step sequences, pedagogical notes, and target mastery levels. You can add new syllabus files or edit existing ones directly.
- **`playlists/presets.js`**: Synchronously auto-loadable companion script defining `window.POLYMATHY_PLAYLIST_PRESETS` for instant zero-configuration offline execution via direct double-click (`file://`).
- **`presets/`**: Duplicate directory structure mirroring `playlists/` to guarantee full cross-compatibility regardless of directory naming preference.
- **`[Reload Presets from Directory]` in Storage & Backups**: Instantly refresh and re-sync presets directly from the directory without restarting the browser or losing user edits.
- **JavaScript API**: Access programmatic controls via `window.polymathy.reloadPresetsFromDirectory()` and `window.polymathy.getPresetsSource()`.

### Progressive Web App (PWA) & Offline Caching
Polymathy is configured as a standalone Progressive Web App powered by service worker caching:
- **Web App Manifest (`manifest.webmanifest` & `manifest.json`):** Configures display mode (`standalone`), high-resolution Vitruvian Man icons from `resources/`, and theme colors.
- **Service Worker (`sw.js`):** Pre-caches the core application shell, offline companion scripts, and icons on install. Implements stale-while-revalidate caching with background sync so the entire workspace functions seamlessly offline.
- **PWA Icons in `resources/`:** Multi-resolution icons derived from the authentic vector `vinci.svg`, including standard sizes (192x192, 512x512), Android safe-zone maskable icons, Apple touch icon (180x180), and multi-size `favicon.ico`.

### Direct In-App Editing
Everything in Polymathy is directly editable from the user interface:

- **Edit Topics:** Click **`[Edit Topic]`** on any topic to change its title, move it to a different parent category in the hierarchy (reparenting), edit overview notes (with KaTeX math support), or delete it.
- **Add Topics Anywhere:** Click **`[+ New Topic]`** in the topbar or HUD to create a brand new topic anywhere in the tree.
- **Edit Resources:** Click the **`[Edit]`** button on any textbook or link to edit its title and URL inline, or click **`[Remove]`** to delete. Add new resources with one click.
- **Edit Subtopics:** Click the **`[Edit]`** button on any subtopic in the task checklist to rename it inline, or click **`[Remove]`** to delete.
- **Link Prerequisites:** Use the instant topic selector to add or remove prerequisites with automatic cycle detection.
- **Manage Backups:** Open **`[Storage & Backups]`** in the topbar to download a complete backup `.json` bundle or restore previous data.
