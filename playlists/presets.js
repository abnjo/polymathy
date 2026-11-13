/**
 * POLYMATHY — Built-in Study Playlist & Exam Presets
 * Autoloadable companion script for local offline and file:// execution.
 * When served via HTTP/HTTPS, index.html will attempt to fetch playlists/*.json directly.
 */
window.POLYMATHY_PLAYLIST_PRESETS = [
  {
    "playlist_id": "preset_jee_adv_stem",
    "title": "JEE Advanced / Foundational Engineering Entrance",
    "category": "Exam",
    "description": "Rigorous foundational STEM curriculum covering algebra, coordinate geometry, calculus, mechanics, electromagnetism, and chemical principles.",
    "steps": [
      { "nodeId": "math.algebra.elementary", "targetLevel": "baseline", "note": "Master quadratic equations, binomial theorem, and progressions." },
      { "nodeId": "math.geometry.euclidean_analytic", "targetLevel": "baseline", "note": "Conic sections, parabolas, ellipses, hyperbolas, and coordinate transformations." },
      { "nodeId": "math.discrete.combinatorics", "targetLevel": "baseline", "note": "Permutations, combinations, inclusion-exclusion, and generating functions." },
      { "nodeId": "math.prob_stats.probability_theory", "targetLevel": "baseline", "note": "Conditional probability, Bayes theorem, and discrete distributions." },
      { "nodeId": "math.algebra.linear.matrices_systems", "targetLevel": "baseline", "note": "Determinants, matrix inversion, and Gaussian elimination." },
      { "nodeId": "math.analysis.single_calculus", "targetLevel": "baseline", "note": "Limits, continuity, differentiation, and definite Riemann integration." },
      { "nodeId": "math.analysis.differential_equations.odes", "targetLevel": "baseline", "note": "First-order linear ODEs and integrating factors." },
      { "nodeId": "physics.classical_mechanics.newtonian", "targetLevel": "baseline", "note": "Newton laws, friction, impulse, and work-energy theorem." },
      { "nodeId": "physics.classical_mechanics.gravitation_rotational", "targetLevel": "baseline", "note": "Center of mass, rotational inertia, torque, and Keplerian gravity." },
      { "nodeId": "physics.thermo_statmech.thermodynamics", "targetLevel": "baseline", "note": "Zeroth, First, and Second laws, Carnot engines, and entropy." },
      { "nodeId": "physics.em_optics.electrostatics_magnetostatics", "targetLevel": "baseline", "note": "Coulomb law, Gauss law, Ampere law, and Biot-Savart law." },
      { "nodeId": "physics.em_optics.maxwell_electrodynamics", "targetLevel": "baseline", "note": "Faraday law, Lenz rule, and electromagnetic wave propagation." },
      { "nodeId": "physics.em_optics.optics", "targetLevel": "baseline", "note": "Wavefront interference, diffraction, and geometric ray tracing." },
      { "nodeId": "natural_sciences.chemistry.physical", "targetLevel": "baseline", "note": "Atomic structure, chemical equilibrium, and kinetics." },
      { "nodeId": "natural_sciences.chemistry.organic", "targetLevel": "baseline", "note": "Reaction mechanisms, stereochemistry, and functional group synthesis." },
      { "nodeId": "engineering.electrical.circuits", "targetLevel": "baseline", "note": "Kirchhoff laws, RLC transients, and AC impedance analysis." }
    ]
  },
  {
    "playlist_id": "preset_theoretical_physics_gr",
    "title": "Path to General Relativity & QFT",
    "category": "Degree Track",
    "description": "Minimum rigorous mathematical and physical trajectory from multivariable calculus to curved spacetime and quantum fields.",
    "steps": [
      { "nodeId": "math.algebra.linear", "targetLevel": "baseline", "note": "Inner products, bilinear forms, and spectral decomposition." },
      { "nodeId": "math.analysis.multivariable_calculus", "targetLevel": "baseline", "note": "Master Jacobians, differential forms, and Stokes theorem." },
      { "nodeId": "math.analysis.differential_equations", "targetLevel": "baseline", "note": "Boundary value problems, Green functions, and Sturm-Liouville theory." },
      { "nodeId": "physics.classical_mechanics.analytical", "targetLevel": "baseline", "note": "Stationary action principle, Euler-Lagrange equations, and Noether theorem." },
      { "nodeId": "physics.em_optics.maxwell_electrodynamics", "targetLevel": "baseline", "note": "Covariant electrodynamics and relativistic field strength tensor." },
      { "nodeId": "physics.relativity.special", "targetLevel": "baseline", "note": "Minkowski metric, Lorentz group, and 4-tensors." },
      { "nodeId": "math.geometry.differential_geometry", "targetLevel": "baseline", "note": "Differentiable manifolds, affine connections, geodesics, and Riemann curvature." },
      { "nodeId": "physics.relativity.general", "targetLevel": "full", "note": "Einstein field equations, Schwarzschild metric, gravitational radiation, and FLRW cosmology." },
      { "nodeId": "physics.quantum.nonrelativistic", "targetLevel": "baseline", "note": "Hilbert spaces, operators, Schrodinger equation, and harmonic oscillator." },
      { "nodeId": "physics.quantum.qft", "targetLevel": "baseline", "note": "Canonical quantization, Klein-Gordon and Dirac fields, and Feynman diagrams." }
    ]
  },
  {
    "playlist_id": "preset_modern_ai_foundations",
    "title": "Mathematical & Algorithmic Foundations of AI",
    "category": "Specialization",
    "description": "Rigorous mathematical and computational foundations for modern artificial intelligence, machine learning, and deep neural architectures.",
    "steps": [
      { "nodeId": "math.algebra.linear", "targetLevel": "baseline", "note": "Vector spaces, SVD, matrix decompositions, and low-rank approximation." },
      { "nodeId": "math.analysis.multivariable_calculus", "targetLevel": "baseline", "note": "Multivariate gradients, Hessians, and unconstrained optimization." },
      { "nodeId": "math.prob_stats.probability_theory", "targetLevel": "baseline", "note": "Joint distributions, expectation, variance, and concentration inequalities." },
      { "nodeId": "math.prob_stats.mathematical_statistics", "targetLevel": "baseline", "note": "Maximum likelihood estimation, Bayesian inference, and hypothesis testing." },
      { "nodeId": "cs.theory.algorithms", "targetLevel": "baseline", "note": "Asymptotic analysis, divide-and-conquer, dynamic programming, and graph algorithms." },
      { "nodeId": "cs.theory.information_theory", "targetLevel": "baseline", "note": "Shannon entropy, mutual information, and Kullback-Leibler divergence." },
      { "nodeId": "cs.ai_ml.statistical_ml", "targetLevel": "baseline", "note": "Supervised and unsupervised models, loss functions, regularization, and generalization bounds." },
      { "nodeId": "cs.ai_ml.deep_learning", "targetLevel": "baseline", "note": "Backpropagation, transformers, attention mechanisms, and gradient dynamics." }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = window.POLYMATHY_PLAYLIST_PRESETS;
}
