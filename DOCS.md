# POLYMATHY — Technical & Schema Reference

This document specifies the formal Compound DAG model, hollow conduit progress equations, 3-layer OverlayFS persistence algebra, stub auto-hydration rules, DFS acyclicity guarantees, and Frontier Radar ranking algorithms implemented in `index.html`.

---

## 1. Architecture & Graph Algebra

The live knowledge graph is a tuple:

$$G = (V, E_{\text{tree}}, E_{\text{prereq}}, S)$$

- **$V$ (Topic Vertices):** Conceptual nodes rooted at $v_0 = \text{knowledge}$ (`parentId: null`). All edges use inverted ownership (`parentId` and `prereqIds[]`) so new subtopics and cross-branch dependencies append in $O(1)$ delta patches without mutating parent or prerequisite records.
- **$E_{\text{tree}} \subset V \times V$ (Containment Tree):** A strict rooted tree governing map multifurcation, truncated directory breadcrumbs, and hollow progress conduits.
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

1. All outgoing prerequisite edges $(v \to w) \in E_{\text{prereq}}$ turn **dotted green** (`[C]`) across the entire graph.
2. Appending deeper subtopics under $v$ at a later date reduces $r_v < 1$ again (turning $v$ into a composite node), without ever re-locking downstream topics.
3. On the map conduit leading into $v$, a fixed **double-bar baseline gate** remains stamped at the baseline threshold while the active perpendicular achievement crossbar advances ahead of it as new deeper subtopics are completed.

---

## 2. 3-Layer OverlayFS Storage Guide

The live graph is materialized via a deterministic three-layer fold:

$$\text{LiveGraph} = \big(\text{fold}(\text{Layer 0}) \oplus \text{fold}(\text{Layer 1})\big) \bowtie \text{Layer 2}$$

### 2.1 Layer 0 — Append-Only Curriculum Patches (`patches/*.json`)

Never mutated by UI edits. Patches are applied sequentially; `nodes[]` add or idempotently upgrade nodes, while `extensions[]` append prerequisites or sources to existing targets:

```json
{
  "patch_id": "2026-11-12_graph_theory_planar",
  "extensions": [
    {
      "targetId": "math.graph_theory",
      "addPrereqs": ["math.topology.point_set_basics"],
      "addSources": [
        { "id": "src_diestel_ch4", "title": "Diestel - Graph Theory (Ch. 4: Planar Graphs)" }
      ]
    }
  ],
  "nodes": [
    {
      "id": "math.graph_theory.planar_graphs",
      "title": "Planar Graphs & Kuratowski's Theorem",
      "parentId": "math.graph_theory",
      "prereqIds": ["math.graph_theory.connectivity"],
      "intro": "Graphs embeddable in $\\mathbb{R}^2$ without edge crossings; governed by Euler's formula $V - E + F = 2$.",
      "sources": [
        { "id": "src_kuratowski_notes", "title": "Kuratowski & Wagner Minor Characterization Notes" }
      ]
    }
  ]
}
```

### 2.2 Layer 1 — User UI Overrides (`user_overrides.json`)

Stores all interactive edits using field-level patches, **Two-Phase Set (2P-Set)** edge deltas (`addPrereqs` / `removePrereqs`, `addSources` / `removeSourceIds`), `custom_nodes`, `reparents`, and `tombstones`:

```json
{
  "custom_nodes": [],
  "field_overrides": {
    "math.graph_theory": {
      "title": "Graph Theory & Combinatorial Structures",
      "intro": "Custom condensed intro edited in side panel."
    }
  },
  "edge_deltas": {
    "math.graph_theory.planar_graphs": {
      "addPrereqs": ["math.linear_algebra.eigenvalues"],
      "removePrereqs": ["math.topology.point_set_basics"],
      "addSources": [
        { "id": "src_user_euler", "title": "Personal Proof Notes on Euler Characteristic" }
      ],
      "removeSourceIds": []
    }
  },
  "reparents": {},
  "tombstones": []
}
```

Using `[Layer Inspector]`, individual node overrides can be reverted to Layer 0, or all Layer 1 overrides can be **squashed** into a clean numbered Layer 0 patch (`NNN_user_squashed.json`).

### 2.3 Layer 2 — Progress & Navigation Telemetry (`state.json`)

Strictly decoupled from curriculum structure so patches never reset user mastery:

```json
{
  "navigation": {
    "MAIN": "physics.relativity.general_relativity",
    "HEAD": "math.differential_geometry.manifolds",
    "detourStack": [
      "physics.relativity.general_relativity",
      "math.differential_geometry.riemannian_metrics"
    ]
  },
  "nodes": {
    "math.linear_algebra.vectors_matrices": {
      "introDone": true,
      "baselineDone": true,
      "completedSourceIds": ["src_vec_strang", "src_vec_3b1b"],
      "expandedOnMap": false
    }
  }
}
```

---

## 3. Stub Node Auto-Hydration & Cycle Prevention

### 3.1 Ghost / Stub Auto-Hydration

During the Layer 0 $\oplus$ Layer 1 fold, a fixed-point pass inspects every `parentId` and `prereqId`. Any referenced ID absent from Layer 0/1 (and not tombstoned) is synthesized in memory as a **Stub Node**:

- `isStub: true`, `baselineDone: false`
- `title` inferred from the trailing dot-delimited slug segment
- `parentId` inferred from the dot-delimited prefix (e.g., `math.topology.point_set_basics` $\to$ `math.topology` $\to$ `math` $\to$ `knowledge`)

Stubs render with dashed borders and `[STUB NODE]` badges. Importing a future patch defining that ID seamlessly hydrates the stub without breaking any incoming prerequisite edges.

### 3.2 Strict Acyclicity Enforcement (DFS)

- **UI Prerequisite Linking:** Adding edge $(p, t) \in E_{\text{prereq}}$ runs a Depth-First Search from $t$ along outgoing prerequisite dependents. If $p$ is reachable from $t$, the link is rejected and the exact cycle path is displayed inline.
- **Patch Import Validation:** Before merging a JSON patch into Layer 0, the engine performs a 3-color DFS cycle check across the entire merged $E_{\text{prereq}}$ graph and rejects any patch that introduces a directed loop.

---

## 4. Frontier Radar Algorithms

Opened via `[Frontier Radar]` in the top telemetry bar:

1. **Ready Frontier Queue:** Filters all topics with `baselineDone === false` whose prerequisites all satisfy `p.baselineDone === true`. Ranks candidates by shortest undirected graph distance (across $E_{\text{tree}} \cup E_{\text{prereq}}$) to `MAIN`, breaking ties by shallowest tree depth.
2. **High-Leverage Bottlenecks:** For every incomplete topic $u$, performs BFS along outgoing dependent edges in $E_{\text{prereq}}$ to count distinct incomplete downstream vertices reachable from $u$. Topics are sorted descending by this transitive unblocking count.
3. **Active `MAIN` Dependency Subgraph Filter:** Computes the union of `MAIN`'s tree ancestors and all transitive prerequisites (plus their tree ancestors) so the canvas can dim unrelated branches and spotlight the active learning path.
