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

### 2.1 Layer 0 — Append-Only Curriculum Patches (`patches/*.json`)

Never mutated by UI edits. Patches are applied sequentially; `nodes[]` add or idempotently upgrade nodes, while `extensions[]` append prerequisites or sources to existing targets.

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

---

## 4. Frontier Radar Algorithms

Opened via `[Frontier Radar]` in the top telemetry bar:

1. **Ready to Learn Queue:** Topics with `baselineDone === false` whose prerequisites all satisfy `p.baselineDone === true`.
2. **High-Leverage Bottlenecks:** Topics sorted descending by their transitive unblocking count across all downstream dependencies.
3. **Active `MAIN` Dependency Subgraph Spotlight:** Dims unrelated branches on the map to highlight only the learning pathway leading into your main objective.
