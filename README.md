# POLYMATHY — Knowledge Graph & Learning Assistant

Polymathy is a local-first, zero-dependency visual knowledge workspace built on a Compound Directed Acyclic Graph (Compound DAG). It maps conceptual depth outward from a single `Knowledge` origin vertex while enforcing prerequisite dependencies across branches using Git-style `MAIN` (primary goal) and `HEAD` (active inspection) navigation.

Featuring a crisp, high-contrast engineering aesthetic with zero decorative blur, Polymathy lets you explore deep subtopic hierarchies through hollow progress conduits, jump smoothly down prerequisite chains without losing your place, and edit or extend your curriculum directly through the UI.

---

## 60-Second Quick Start

No build tools, Node.js, or `npm install` are required.

- **Direct Launch:** Double-click `index.html` or open it directly in any browser (`xdg-open index.html` on Linux, `open index.html` on macOS).
- **Optional Local Server (Recommended for clean `localStorage` isolation):**
  ```bash
  python3 -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.

---

## Visual Legend (At-a-Glance)

| Visual Element | Meaning & Behavior |
| :--- | :--- |
| **Origin Dot `Knowledge`** | Root origin vertex of the graph. All disciplines branch outward from here. |
| **Hollow Conduit + Crossbar** | Hierarchy resolution edge (`parent -> child`). Fills as you complete material; perpendicular crossbar marks your achievement frontier. |
| **Red Arrow (Solid)** | Incomplete prerequisite blocking mastery. Hover over arrow for details, or click it to jump straight to that prerequisite topic. |
| **Green Arrow (Dotted)** | Completed prerequisite foundation. |
| **Blue `MAIN` Beacon** | Your primary, long-term learning target anchored on the map. |
| **Purple `HEAD` Reticle** | The topic currently open in the right-hand inspection & study side panel. |
| **Dashed Draft Topic Card** | Placeholder synthesized automatically when another topic links to it; hydrates into a full card once created or imported. |

---

## Canvas Navigation & Scrolling

| Input Method | How to Navigate |
| :--- | :--- |
| **Pan / Scroll Canvas** | • **Mouse wheel / Trackpad 2-finger scroll:** Natural canvas scrolling (scrolls vertically/horizontally)<br>• **Mouse drag:** Click and drag background anywhere<br>• **Touch screens:** 1-finger swipe to pan<br>• **On-screen buttons:** Click `◀` `▲` `▼` `▶` in the bottom HUD |
| **Zoom In / Out** | • **Pinch gesture:** 2 fingers on touch screens or trackpads<br>• **Ctrl + Scroll / Cmd + Scroll:** Mouse wheel zoom centered on cursor<br>• **HUD Buttons:** Click `[+]` or `[-]`, or toggle `[Wheel: Scroll / Zoom]` |
| **Fit / Center** | Click **`[Fit]`** to zoom-to-fit all visible topics |
| **Keyboard Shortcuts** | • `M`: Smoothly glide camera to `MAIN`<br>• `H`: Smoothly glide camera to `HEAD`<br>• `Esc`: Return from detour or close active dialog |

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

## Full UI Editing Capabilities

Everything in Polymathy is directly editable from the user interface:

- **Edit Topics:** Click **`[✏️ Edit Topic]`** on any topic to change its title, move it to a different parent category in the hierarchy (reparenting), edit overview notes (with KaTeX math support), or delete it.
- **Add Topics Anywhere:** Click **`[+ New Topic]`** in the topbar or HUD to create a brand new topic anywhere in the tree.
- **Edit Resources:** Click the **`✏️`** icon on any textbook or link to edit its title and URL inline, or click **`✕`** to delete. Add new resources with one click.
- **Edit Subtopics:** Click the **`✏️`** icon on any subtopic in the task checklist to rename it inline, or click **`✕`** to delete.
- **Link Prerequisites:** Use the instant topic selector to add or remove prerequisites with automatic cycle detection.
- **Manage Backups:** Open **`[Storage & Backups]`** in the topbar to download a complete backup `.json` bundle or restore previous data.
