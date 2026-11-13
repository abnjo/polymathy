# POLYMATHY — Technical & Schema Reference

This document specifies the formal Compound DAG model, hollow conduit progress equations, 3-layer OverlayFS persistence algebra, stub auto-hydration rules, DFS acyclicity guarantees, and Frontier Radar ranking algorithms implemented in `index.html`.

---

## 1. Architecture & Graph Algebra

The live knowledge graph is a tuple:

$$G = (V, E_{\text{tree}}, E_{\text{prereq}}, S)$$

- **$V$ (Topic Vertices):** Conceptual nodes rooted at $v_0 = \text{knowledge}$ (`parentId: null`). All edges use inverted ownership (`parentId` and `prereqIds[]`) so new subtopics and cross-branch dependencies append in $O(1)$ delta patches without mutating parent or prerequisite records.
- **$E_{\text{tree}} \subset V \times V$ (Containment Tree):** A strict rooted tree governing map multifurcation, directory breadcrumbs, and hollow progress conduits.
- **$E_{\text{prereq}} \subset V \times V$ (Prerequisite DAG):** Cross-branch directed edges $(p, t)$ indicating that topic $p$ must latch `baselineDone = true` before $t$ is unblocked.
- **$S$ (Source Attachments):** External learning artifacts (textbooks, lectures, papers) bound to a topic $v \in V$ without polluting $E_{\text{prereq}}$.

### 1.1 Leaf vs. Composite Conduit Progress Ratios

For each vertex $v \in V$ with direct children $C_v$ and attached sources $S_v$, the conduit progress ratio $r_v \in [0, 1]$ is computed recursively:

- **Leaf Topic ($|C_v| = 0$):**
  $$r_v = 0.30 \cdot \mathbb{I}(\text{introDone}) + 0.40 \cdot \frac{|S_{v,\text{done}}|}{|S_v|} + 0.30 \cdot \mathbb{I}(\text{baselineDone})$$
  When $|S_v| = 0$, weights normalize to $0.50 \cdot \mathbb{I}(\text{introDone}) + 0.50 \cdot \mathbb{I}(\text{baselineDone})$.

- **Composite Topic ($|C_v| > 0$):**
  $$r_v = \frac{1}{|C_v|} \sum_{c \in C_v} r_c$$

### 1.2 Decoupled Baseline Latch Invariant

`baselineDone = true` is a **permanent latch**:

1. All outgoing prerequisite edges $(v \to w) \in E_{\text{prereq}}$ turn **dotted green** across the entire graph.
2. Appending deeper subtopics under $v$ at a later date reduces $r_v < 1$ again (turning $v$ into a composite node), without ever re-locking downstream topics.
3. On the map conduit leading into $v$, a fixed **double-bar baseline gate** remains stamped at the baseline threshold while the active perpendicular achievement crossbar advances ahead of it as new deeper subtopics are completed.

---

## 2. 3-Layer OverlayFS Storage Guide

The live graph is materialized via a deterministic three-layer fold:

$$\text{LiveGraph} = \big(\text{fold}(\text{Layer 0}) \oplus \text{fold}(\text{Layer 1})\big) \bowtie \text{Layer 2}$$

### 2.1 Layer 0 — Decoupled Base Curriculum (`curriculum.json` / `curriculum.js` & `patches/*.json`)

Never mutated by UI edits. The base graph is decoupled from `index.html` into `curriculum.json` (and the `curriculum.js` browser-companion wrapper). Layer 0 patches are applied sequentially; `nodes[]` add or idempotently upgrade nodes, while `extensions[]` append prerequisites or sources to existing targets. When `curriculum.json` is edited on disk and served locally, `index.html` dynamically ingests the new nodes without resetting user progress.

### 2.2 Layer 1 — User UI Overrides (`user_overrides.json`)

Stores all interactive edits made directly in the UI using field-level patches, **Two-Phase Set (2P-Set)** edge deltas (`addPrereqs` / `removePrereqs`, `addSources` / `removeSourceIds`), `custom_nodes`, `reparents`, and `tombstones`:

- **Editing Topic Title & Overview:** Saves to `field_overrides[nodeId]`.
- **Moving a Topic (Reparenting):** Saves to `reparents[nodeId] = newParentId`.
- **Editing / Deleting Sources:** Updates `edge_deltas[nodeId].addSources` and `removeSourceIds`.
- **Renaming / Deleting Subtopics:** Updates `field_overrides[subtopicId]` and `tombstones`.
- **Adding New Topics:** Saves new nodes to `custom_nodes[]`.

### 2.3 Layer 2 — Progress & Navigation Telemetry (`state.json`)

Strictly decoupled from curriculum structure so patches never reset user mastery:
Stores `introDone`, `baselineDone`, `completedSourceIds`, `expandedOnMap`, `MAIN`, `HEAD`, and `detourStack`.

---

## 3. Stub Node Auto-Hydration & Cycle Prevention

### 3.1 Ghost / Stub Auto-Hydration

During the Layer 0 $\oplus$ Layer 1 fold, any referenced ID absent from Layer 0/1 is synthesized in memory as a **Draft Topic Placeholder**:
- `isStub: true`, `baselineDone: false`
- `parentId` inferred from the dot-delimited prefix
- Hydrates cleanly into a full topic whenever created or imported.

### 3.2 Strict Acyclicity Enforcement (DFS)

- **UI Prerequisite Linking:** Adding edge $(p, t) \in E_{\text{prereq}}$ runs a Depth-First Search from $t$ along outgoing prerequisite dependents. If $p$ is reachable from $t$, the link is rejected and the cycle path is displayed inline.
- **Patch Import Validation:** Before merging a JSON patch into Layer 0, the engine performs a 3-color DFS cycle check across the entire merged $E_{\text{prereq}}$ graph.

### 3.3 Schema Migration & Deduplication (v1 to v2 Universal Taxonomy)

During migration from early prototype seeds to the MECE Reductionist Universal Taxonomy (`001_reductionist_universal_taxonomy`), local browser caches may retain legacy patches (`001_stem_polymath_curriculum`). To eliminate duplicate topic instances (such as multiple "Classical Mechanics" or "Quantum Physics" nodes under Physics):
1. **Automated Layer 0 Pruning:** The runtime purges any patch whose `patch_id` matches `001_stem_polymath_curriculum`, guaranteeing a single canonical base patch.
2. **Obsolete ID Gatekeeper:** Nodes carrying obsolete v1 prefix IDs (e.g. `physics.mechanics`, `physics.modern`, `chemistry.inorganic`, `math.calculus`, `cs.algorithms`) are blocked during the Layer 0 and Layer 1 fold.
3. **Outgoing Prerequisite Directory Badges:** All outgoing prerequisite edges from `HEAD` to dependent targets render an interactive destination badge along the trajectory curve (`-> Directory / Target`) and list them in the "Downstream Unlocks" side panel drawer.

---

## 4. Frontier Radar Algorithms

Opened via `[Frontier Radar]` in the top telemetry bar:

1. **Ready to Learn Queue:** Topics with `baselineDone === false` whose prerequisites all satisfy `p.baselineDone === true`.
2. **High-Leverage Bottlenecks:** Topics sorted descending by their transitive unblocking count across all downstream dependencies.
3. **Active `MAIN` Dependency Subgraph Spotlight:** Dims unrelated branches on the map to highlight only the learning pathway leading into your main objective.

---

## 5. Modular Exam & Course Playlist System

### 5.1 Playlist JSON Schema & Storage Key (`polymathy_playlists_v1`)

Playlists decouple conceptual knowledge containment ($E_{\text{tree}}, E_{\text{prereq}}$) from arbitrary examination or course study sequences.

```json
{
  "playlist_id": "preset_theoretical_physics_gr",
  "title": "Path to General Relativity & QFT",
  "category": "Degree Track",
  "description": "Minimum rigorous mathematical and physical trajectory from multivariable calculus to curved spacetime and quantum fields.",
  "steps": [
    {
      "nodeId": "math.algebra.linear",
      "targetLevel": "baseline",
      "note": "Inner products, bilinear forms, and spectral decomposition."
    }
  ]
}
```

Active telemetry state persists in Layer 2 under `playlistState`:

```json
{
  "playlistState": {
    "activePlaylistId": "preset_theoretical_physics_gr",
    "activeStepIndex": 0,
    "showRouteOnMap": true,
    "autoAdvanceMain": true,
    "spotlightPlaylist": false,
    "spotlightIncludePrereqs": true,
    "autoExpandSpine": true
  }
}
```

### 5.2 Spotlight Vertex Set Algebra ($V_{\text{spotlight}}$)

When `spotlightMode === "playlist"`, Polymathy evaluates:

1. **Syllabus Step Vertices:**
   $$V_{\text{steps}} = \{ s.\text{nodeId} : s \in \text{activePlaylist.steps} \}$$
2. **Structural Spine Ancestors:**
   $$V_{\text{spine}} = \bigcup_{v \in V_{\text{steps}}} \text{Ancestors}(v)$$
3. **Off-Playlist Prerequisite Cone:**
   $$V_{\text{prereq}} = \begin{cases} \bigcup_{v \in V_{\text{steps}}} \text{TransitivePrereqs}(v) & \text{if } \texttt{spotlightIncludePrereqs} = \text{true} \\ \emptyset & \text{otherwise} \end{cases}$$

Total illuminated subgraph: $V_{\text{spotlight}} = V_{\text{steps}} \cup V_{\text{spine}} \cup V_{\text{prereq}}$.

### 5.3 Four-Tier Visual Contrast Hierarchy

| Contrast Tier | Opacity & Visual Treatment | Badges & Annotations |
| :--- | :--- | :--- |
| **1. Current Active Step** | `opacity: 1.0`; 2px accent border; pulsing `MAIN` beacon. | Sequence badge `#k ACTIVE` in `--accent-soft`. |
| **2. Remaining Playlist Steps** | `opacity: 1.0`; solid border; high-contrast route spline (`opacity: 0.85`). | Sequence badges `#1..#N` visible at all zoom levels. |
| **3. Structural Spine & Prereqs** | `opacity: 0.72`; hollow conduits along spine visible; dashed card border on off-syllabus prereqs. | Off-syllabus prerequisites annotated with `[PREREQ]` tag. |
| **4. Non-Spotlight Universe** | Dimmed to `opacity: 0.12`; background conduits dimmed to `opacity: 0.08`. | Subdued background blueprint. |

### 5.4 Decoupled Presets Directory Architecture

To decouple curriculum structure from custom study paths without hardcoding large JSON arrays in `index.html`, playlist presets reside in a dedicated external directory:

1. **Manifest File (`playlists/index.json` or `presets/index.json`):**
   ```json
   [
     "preset_jee_adv_stem.json",
     "preset_theoretical_physics_gr.json",
     "preset_modern_ai_foundations.json"
   ]
   ```
2. **Individual JSON Preset Definitions (`playlists/*.json`):**
   Each syllabus is stored as a clean, standalone JSON document containing `playlist_id`, `title`, `category`, `description`, and ordered `steps` array.
3. **Dual Protocol Hydration Strategy:**
   - **HTTP/HTTPS Protocol:** On startup or when clicking `[Reload Presets from Directory]`, `fetchPlaylistPresets()` queries `./playlists/index.json` (or `./presets/index.json`), fetches each referenced preset JSON, and merges them into `storedPlaylists`.
   - **`file://` Offline Protocol:** Browsers block local file fetches due to CORS. To maintain zero-dependency single-click offline launch, `playlists/presets.js` synchronously exports `window.POLYMATHY_PLAYLIST_PRESETS` which acts as the immediate offline source.
   - **In-Memory Fallback:** If neither directory nor script is reachable, `DEFAULT_FALLBACK_PRESETS` ensures the application never crashes.

