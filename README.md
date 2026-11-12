# POLYMATHY — Compound DAG Knowledge Tracker & Learning Assistant

Polymathy is a local-first, zero-dependency Compound Directed Acyclic Graph (Compound DAG) workspace for mapping conceptual depth outward from a single `Knowledge` origin dot while enforcing cross-branch prerequisites via Git-style `MAIN` and `HEAD` navigation. Designed in the crisp, high-contrast **STEM Manual** aesthetic, it lets you explore deep subtopic hierarchies through hollow progress conduits, detour smoothly down prerequisite chains without losing your place, and extend your curriculum using modular LLM delta patches.

---

## 60-Second Quick Start

No build steps, Node.js, or `npm install` are required.

- **Direct Launch:** Double-click `index.html` or open it directly in any modern browser (`xdg-open index.html` on Linux, `open index.html` on macOS).
- **Optional Local Server (Recommended for clean `localStorage` isolation):**
  ```bash
  python3 -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.

---

## Visual Legend (At-a-Glance)

| Visual Symbol | Meaning & Behavior |
| :--- | :--- |
| **Origin Dot `(o)`** | Root `Knowledge` vertex at `(0, 0)`. Top-level domains radiate outward from here. |
| **Hollow Conduit + Perpendicular Crossbar** | Hierarchy resolution edge (`parent -> child`). Fills proportionally to topic progress and stamps a perpendicular achievement bar at the exact completion frontier (plus a double-bar gate if deeper subtopics are added after baseline latch). |
| **Solid Red Arrow (`[X]`)** | Incomplete cross-branch prerequisite (`baselineDone === false`) blocking mastery. Click the arrow or its directory pill to detour directly to that prerequisite. |
| **Dotted Green Arrow (`[C]`)** | Completed prerequisite (`baselineDone === true`). Permanently latched once baseline is completed. |
| **Blue `MAIN` Beacon** | Your primary, long-term study goal anchored on the map (`MAIN`). |
| **Purple `HEAD` Reticle** | The topic currently loaded in the right-hand execution side panel (`HEAD`). |
| **Dashed `[STUB NODE]` Card** | Auto-hydrated placeholder synthesized from a cross-branch reference before that topic's full patch is imported. |

---

## Core Study Workflow (4 Steps)

1. **Expand & Anchor Your Goal (`MAIN`):**
   Click any domain on the map to expand its subtopics and inspect it in the side panel (`HEAD`). Click **`[Set as MAIN Goal]`** in the topic header to anchor your primary objective.
2. **Check Module 1 (Prerequisites Gate) & Detour:**
   Inspect any solid red prerequisite arrows or `[SOLID]` rows in Module 1. Click a solid arrow on the map or **`[Detour ->]`** in the side panel to glide smoothly to that prerequisite and push your previous topic onto the **Detour Call Stack**. Use **`[<- Get Back]`** (or click any ancestor in the top breadcrumb chain) to return.
3. **Execute Intro, Sources & Subtopic Tasks:**
   - **Module 2:** Read the concept intro (with KaTeX math) and check **`Complete Intro & Core Vocabulary`**.
   - **Module 3:** Check off books, lectures, or papers, or add your own via **`[+ Add Source]`**.
   - **Module 4:** Click **`[Learn This Topic]`** to turn child subtopics into an active task checklist, or add deeper subtopics via **`[+ Add Subtopic]`**.
4. **Latch Baseline & Deepen Later:**
   - **Module 5:** Click **`[Mark Baseline Completed]`** to permanently latch downstream unlocks (turning outgoing prerequisite arrows dotted across the graph). You can return anytime later to add deeper subtopics in Module 4 without re-locking downstream topics.

---

## LLM-Assisted Expansion Workflow (3 Steps)

1. **Copy Context Slice:** Select any topic and click **`[Copy LLM Expansion Context]`** in Module 5. This copies a ~300-token prompt containing the target node's lineage, existing children (to avoid duplicates), and canonical cross-branch IDs.
2. **Generate Delta Patch:** Paste the prompt into any LLM to generate a strict Layer 0 Delta Patch JSON.
3. **Import Safely:** Click **`[+ Import Patch]`** in the top bar, paste or upload the `.json` patch, validate acyclicity, and merge. Your Layer 2 progress (`state`) and Layer 1 UI edits (`user_overrides`) remain completely untouched.

---

## Data Backup, Layer Overrides & Keyboard Shortcuts

- **3-Layer Persistence:** All data auto-saves to `localStorage` across three independent layers:
  - **Layer 0 (`patches`):** Append-only base curriculum patches.
  - **Layer 1 (`user_overrides`):** UI edits, custom subtopics, and 2P-Set edge deltas.
  - **Layer 2 (`state`):** Progress checkboxes, baseline latches, map expansions, and `MAIN`/`HEAD`/`detourStack` navigation.
- **Export / Squash:** Open **`[Layer Inspector]`** in the top bar to export a full backup bundle (`.json`), revert individual overrides to Layer 0, or squash Layer 1 UI edits into a clean numbered patch file.

### Keyboard & Canvas Shortcuts

| Input | Action |
| :--- | :--- |
| `Drag Canvas` or `Space + Drag` | Pan the infinite 2D SVG map |
| `Mouse Wheel` | Zoom anchored at cursor |
| `M` | Smoothly glide camera to `MAIN` |
| `H` | Smoothly glide camera to `HEAD` |
| `Esc` | Close open modal, or pop top frame from Detour Stack |
| `Drag Minimap` | Pan viewport directly from the top-right minimap |
