/**
 * POLYMATHY — Reductionist Universal STEM Taxonomy
 * Autoloadable companion script for local offline and file:// execution.
 * When served via HTTP/HTTPS, index.html will attempt to fetch curriculum.json first.
 */
window.POLYMATHY_CURRICULUM = {
  "patch_id": "001_reductionist_universal_taxonomy",
  "meta": {
    "title": "Universal Reductionist Polymathy Taxonomy",
    "version": "2.0.0",
    "structure": "MECE top-down disciplinary partition (Depths 1-4) rooted at `knowledge`."
  },
  "extensions": [],
  "nodes": [
    {
      "id": "math",
      "title": "Mathematics",
      "parentId": "knowledge",
      "prereqIds": [],
      "intro": "The formal study of abstract structure, quantity, space, change, and logical deduction.",
      "sources": [
        {
          "id": "src_math_princeton",
          "title": "Gowers - The Princeton Companion to Mathematics"
        }
      ]
    },
    {
      "id": "math.foundations",
      "title": "Foundations & Mathematical Logic",
      "parentId": "math",
      "prereqIds": [],
      "intro": "Formal languages, proof systems, set-theoretic axioms, and structural morphisms underlying all mathematical reasoning.",
      "sources": []
    },
    {
      "id": "math.foundations.logic",
      "title": "Propositional & First-Order Logic",
      "parentId": "math.foundations",
      "prereqIds": [],
      "intro": "Syntax and semantics of formal deduction: truth tables, quantifiers $\\forall, \\exists$, soundness, and Godel's completeness theorem.",
      "sources": [
        {
          "id": "src_enderton_logic",
          "title": "Enderton - A Mathematical Introduction to Logic"
        }
      ]
    },
    {
      "id": "math.foundations.set_theory",
      "title": "Axiomatic Set Theory & Cardinality",
      "parentId": "math.foundations",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "ZFC axioms, relations, functions, ordinals, transfinite induction, and Cantor's hierarchy of infinities ($\\aleph_0 < 2^{\\aleph_0}$).",
      "sources": [
        {
          "id": "src_halmos_sets",
          "title": "Halmos - Naive Set Theory"
        }
      ]
    },
    {
      "id": "math.foundations.proof_methods",
      "title": "Proof Techniques & Mathematical Induction",
      "parentId": "math.foundations",
      "prereqIds": [
        "math.foundations.logic",
        "math.foundations.set_theory"
      ],
      "intro": "Direct proof, contrapositive, contradiction, well-ordering principle, and structural induction.",
      "sources": [
        {
          "id": "src_velleman_prove",
          "title": "Velleman - How to Prove It"
        }
      ]
    },
    {
      "id": "math.foundations.category_theory",
      "title": "Category Theory & Functors",
      "parentId": "math.foundations",
      "prereqIds": [
        "math.foundations.set_theory",
        "math.algebra.abstract.groups"
      ],
      "intro": "Objects, morphisms, functors, natural transformations, and universal properties unifying algebraic and topological structures.",
      "sources": [
        {
          "id": "src_maclane_cat",
          "title": "Mac Lane - Categories for the Working Mathematician"
        }
      ]
    },
    {
      "id": "math.algebra",
      "title": "Algebra",
      "parentId": "math",
      "prereqIds": [
        "math.foundations.proof_methods"
      ],
      "intro": "The study of algebraic operations, linear transformations, and abstract symmetry structures.",
      "sources": []
    },
    {
      "id": "math.algebra.elementary",
      "title": "Elementary Algebra & Polynomials",
      "parentId": "math.algebra",
      "prereqIds": [],
      "intro": "Symbolic manipulation, polynomial factorization, complex numbers $\\mathbb{C}$, inequalities, and functions.",
      "sources": [
        {
          "id": "src_gelfand_alg",
          "title": "Gelfand & Shen - Algebra"
        }
      ]
    },
    {
      "id": "math.algebra.linear",
      "title": "Linear Algebra & Vector Spaces",
      "parentId": "math.algebra",
      "prereqIds": [
        "math.algebra.elementary"
      ],
      "intro": "Vector spaces, linear maps, inner products, and spectral theory over fields $\\mathbb{R}$ and $\\mathbb{C}$.",
      "sources": [
        {
          "id": "src_axler_ladw",
          "title": "Axler - Linear Algebra Done Right"
        }
      ]
    },
    {
      "id": "math.algebra.linear.matrices_systems",
      "title": "Matrices, Determinants & Linear Systems",
      "parentId": "math.algebra.linear",
      "prereqIds": [
        "math.algebra.elementary"
      ],
      "intro": "Gaussian elimination, rank-nullity theorem $\\dim(V) = \\operatorname{rank}(T) + \\operatorname{nullity}(T)$, bases, and determinants.",
      "sources": [
        {
          "id": "src_strang_la",
          "title": "Strang - Introduction to Linear Algebra"
        }
      ]
    },
    {
      "id": "math.algebra.linear.eigen_spectral",
      "title": "Eigenvalues, Eigenvectors & Spectral Decomposition",
      "parentId": "math.algebra.linear",
      "prereqIds": [
        "math.algebra.linear.matrices_systems"
      ],
      "intro": "Characteristic polynomials $Av = \\lambda v$, diagonalization, Jordan normal form, and Singular Value Decomposition (SVD).",
      "sources": [
        {
          "id": "src_trefethen_nla",
          "title": "Trefethen & Bau - Numerical Linear Algebra (Part I)"
        }
      ]
    },
    {
      "id": "math.algebra.abstract",
      "title": "Abstract Algebra",
      "parentId": "math.algebra",
      "prereqIds": [
        "math.foundations.proof_methods",
        "math.discrete.number_theory"
      ],
      "intro": "Axiomatic algebraic structures: groups, rings, ideals, modules, and field extensions.",
      "sources": [
        {
          "id": "src_dummit_foote",
          "title": "Dummit & Foote - Abstract Algebra"
        }
      ]
    },
    {
      "id": "math.algebra.abstract.groups",
      "title": "Group Theory & Symmetry",
      "parentId": "math.algebra.abstract",
      "prereqIds": [
        "math.foundations.proof_methods",
        "math.discrete.number_theory"
      ],
      "intro": "Subgroups, cosets, Lagrange's theorem, normal subgroups, quotient groups $G/N$, and group actions.",
      "sources": [
        {
          "id": "src_artin_alg",
          "title": "Artin - Algebra (Ch. 2 & 6)"
        }
      ]
    },
    {
      "id": "math.algebra.abstract.rings_fields",
      "title": "Rings, Fields & Galois Theory",
      "parentId": "math.algebra.abstract",
      "prereqIds": [
        "math.algebra.abstract.groups"
      ],
      "intro": "Ideals, polynomial rings, field extensions, and the Galois correspondence between intermediate fields and subgroups.",
      "sources": [
        {
          "id": "src_stewart_galois",
          "title": "Stewart - Galois Theory"
        }
      ]
    },
    {
      "id": "math.analysis",
      "title": "Mathematical Analysis",
      "parentId": "math",
      "prereqIds": [
        "math.algebra.elementary",
        "math.foundations.proof_methods"
      ],
      "intro": "Rigorous study of limits, continuity, differentiation, integration, infinite series, and function spaces.",
      "sources": []
    },
    {
      "id": "math.analysis.single_calculus",
      "title": "Single-Variable Calculus",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.algebra.elementary",
        "math.geometry.euclidean_analytic"
      ],
      "intro": "Differential and integral calculus of real functions of a single variable.",
      "sources": [
        {
          "id": "src_spivak_calc",
          "title": "Spivak - Calculus"
        }
      ]
    },
    {
      "id": "math.analysis.single_calculus.limits_derivatives",
      "title": "Limits, Continuity & Differentiation",
      "parentId": "math.analysis.single_calculus",
      "prereqIds": [
        "math.algebra.elementary",
        "math.geometry.euclidean_analytic"
      ],
      "intro": "Epsilon-delta limits, derivatives $f'(x) = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$, chain rule, and Taylor approximations.",
      "sources": [
        {
          "id": "src_apostol_calc1",
          "title": "Apostol - Calculus Vol. 1 (Ch. 1-4)"
        }
      ]
    },
    {
      "id": "math.analysis.single_calculus.integration_series",
      "title": "Riemann Integration & Infinite Series",
      "parentId": "math.analysis.single_calculus",
      "prereqIds": [
        "math.analysis.single_calculus.limits_derivatives"
      ],
      "intro": "Fundamental Theorem of Calculus $\\int_a^b f'(x)\\,dx = f(b) - f(a)$, convergence tests, and power series.",
      "sources": [
        {
          "id": "src_apostol_calc1_int",
          "title": "Apostol - Calculus Vol. 1 (Ch. 5-11)"
        }
      ]
    },
    {
      "id": "math.analysis.multivariable_calculus",
      "title": "Multivariable & Vector Calculus",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.analysis.single_calculus.integration_series",
        "math.algebra.linear.matrices_systems"
      ],
      "intro": "Partial derivatives, Jacobians, gradients $\\nabla f$, curl, divergence, line/surface integrals, and generalized Stokes' theorem.",
      "sources": [
        {
          "id": "src_hubbard_vector",
          "title": "Hubbard & Hubbard - Vector Calculus, Linear Algebra, and Differential Forms"
        }
      ]
    },
    {
      "id": "math.analysis.real_analysis",
      "title": "Real Analysis & Measure Theory",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.analysis.single_calculus.integration_series",
        "math.foundations.proof_methods"
      ],
      "intro": "Completeness of $\\mathbb{R}$, compactness, uniform convergence, sigma-algebras, and Lebesgue integration.",
      "sources": [
        {
          "id": "src_rudin_pma",
          "title": "Rudin - Principles of Mathematical Analysis"
        }
      ]
    },
    {
      "id": "math.analysis.complex_analysis",
      "title": "Complex Analysis & Holomorphic Functions",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.analysis.multivariable_calculus",
        "math.analysis.real_analysis"
      ],
      "intro": "Cauchy-Riemann equations, Cauchy's integral formula $f(a) = \\frac{1}{2\\pi i}\\oint_\\gamma \\frac{f(z)}{z-a}\\,dz$, Laurent series, and residue calculus.",
      "sources": [
        {
          "id": "src_ahlfors_complex",
          "title": "Ahlfors - Complex Analysis"
        }
      ]
    },
    {
      "id": "math.analysis.differential_equations",
      "title": "Differential Equations & Dynamical Systems",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.analysis.multivariable_calculus",
        "math.algebra.linear.eigen_spectral"
      ],
      "intro": "Evolution equations governing continuous deterministic systems across space and time.",
      "sources": []
    },
    {
      "id": "math.analysis.differential_equations.odes",
      "title": "Ordinary Differential Equations",
      "parentId": "math.analysis.differential_equations",
      "prereqIds": [
        "math.analysis.single_calculus.integration_series",
        "math.algebra.linear.eigen_spectral"
      ],
      "intro": "First- and higher-order linear ODEs, matrix exponentials $e^{At}$, Laplace transforms, and phase-plane stability.",
      "sources": [
        {
          "id": "src_arnold_ode",
          "title": "Arnold - Ordinary Differential Equations"
        }
      ]
    },
    {
      "id": "math.analysis.differential_equations.pdes",
      "title": "Partial Differential Equations & Fourier Analysis",
      "parentId": "math.analysis.differential_equations",
      "prereqIds": [
        "math.analysis.differential_equations.odes",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Heat, wave, and Laplace equations, separation of variables, Fourier transforms, and Green's functions.",
      "sources": [
        {
          "id": "src_evans_pde",
          "title": "Evans - Partial Differential Equations"
        }
      ]
    },
    {
      "id": "math.analysis.functional_analysis",
      "title": "Functional Analysis & Hilbert Spaces",
      "parentId": "math.analysis",
      "prereqIds": [
        "math.analysis.real_analysis",
        "math.algebra.linear.eigen_spectral",
        "math.geometry.point_set_topology"
      ],
      "intro": "Banach and Hilbert spaces, bounded linear operators, Hahn-Banach theorem, and spectral theory of self-adjoint operators.",
      "sources": [
        {
          "id": "src_kreyszig_fa",
          "title": "Kreyszig - Introductory Functional Analysis with Applications"
        }
      ]
    },
    {
      "id": "math.geometry",
      "title": "Geometry & Topology",
      "parentId": "math",
      "prereqIds": [
        "math.algebra.elementary"
      ],
      "intro": "Spatial structure, invariance under continuous deformation, and curved manifolds.",
      "sources": []
    },
    {
      "id": "math.geometry.euclidean_analytic",
      "title": "Euclidean & Analytic Geometry",
      "parentId": "math.geometry",
      "prereqIds": [
        "math.algebra.elementary"
      ],
      "intro": "Synthetic geometry, trigonometry, conic sections, coordinate transformations, and inner-product geometry in $\\mathbb{R}^n$.",
      "sources": [
        {
          "id": "src_coxeter_geom",
          "title": "Coxeter - Introduction to Geometry"
        }
      ]
    },
    {
      "id": "math.geometry.point_set_topology",
      "title": "Point-Set & Algebraic Topology",
      "parentId": "math.geometry",
      "prereqIds": [
        "math.analysis.real_analysis",
        "math.foundations.set_theory"
      ],
      "intro": "Open sets, continuity, connectedness, compactness, homotopy groups $\\pi_1(X)$, and homology.",
      "sources": [
        {
          "id": "src_munkres_top",
          "title": "Munkres - Topology"
        }
      ]
    },
    {
      "id": "math.geometry.differential_geometry",
      "title": "Differential Geometry & Riemannian Manifolds",
      "parentId": "math.geometry",
      "prereqIds": [
        "math.analysis.multivariable_calculus",
        "math.algebra.linear.eigen_spectral",
        "math.geometry.point_set_topology"
      ],
      "intro": "Smooth manifolds, tangent bundles, differential forms, metric tensors $g_{\\mu\\nu}$, covariant derivatives, and Riemann curvature.",
      "sources": [
        {
          "id": "src_lee_manifolds",
          "title": "Lee - Introduction to Smooth Manifolds"
        }
      ]
    },
    {
      "id": "math.discrete",
      "title": "Discrete Mathematics & Combinatorics",
      "parentId": "math",
      "prereqIds": [
        "math.foundations.proof_methods"
      ],
      "intro": "Countable structures, integers, finite graphs, and combinatorial enumeration.",
      "sources": []
    },
    {
      "id": "math.discrete.combinatorics",
      "title": "Enumerative Combinatorics & Generating Functions",
      "parentId": "math.discrete",
      "prereqIds": [
        "math.foundations.proof_methods"
      ],
      "intro": "Bijective counting, inclusion-exclusion, recurrence relations, and ordinary/exponential generating functions.",
      "sources": [
        {
          "id": "src_stanley_ec1",
          "title": "Stanley - Enumerative Combinatorics Vol. 1"
        }
      ]
    },
    {
      "id": "math.discrete.number_theory",
      "title": "Elementary & Analytic Number Theory",
      "parentId": "math.discrete",
      "prereqIds": [
        "math.foundations.proof_methods"
      ],
      "intro": "Divisibility, modular arithmetic, quadratic reciprocity, prime distribution, and Diophantine equations.",
      "sources": [
        {
          "id": "src_hardy_wright",
          "title": "Hardy & Wright - An Introduction to the Theory of Numbers"
        }
      ]
    },
    {
      "id": "math.discrete.graph_theory",
      "title": "Graph Theory",
      "parentId": "math.discrete",
      "prereqIds": [
        "math.discrete.combinatorics"
      ],
      "intro": "Structural and extremal properties of vertices and edges $G = (V, E)$.",
      "sources": [
        {
          "id": "src_diestel_gt",
          "title": "Diestel - Graph Theory"
        }
      ]
    },
    {
      "id": "math.discrete.graph_theory.connectivity_trees",
      "title": "Connectivity, Trees & Matching",
      "parentId": "math.discrete.graph_theory",
      "prereqIds": [
        "math.discrete.combinatorics"
      ],
      "intro": "Paths, cycles, spanning trees, Eulerian/Hamiltonian circuits, Hall's marriage theorem, and max-flow min-cut.",
      "sources": [
        {
          "id": "src_bondy_murty",
          "title": "Bondy & Murty - Graph Theory"
        }
      ]
    },
    {
      "id": "math.discrete.graph_theory.planar_chromatic",
      "title": "Planar Graphs & Chromatic Theory",
      "parentId": "math.discrete.graph_theory",
      "prereqIds": [
        "math.discrete.graph_theory.connectivity_trees"
      ],
      "intro": "Planar embeddings, Euler's formula $V - E + F = 2$, Kuratowski's theorem, and vertex/edge coloring.",
      "sources": [
        {
          "id": "src_west_gt",
          "title": "West - Introduction to Graph Theory (Ch. 5-6)"
        }
      ]
    },
    {
      "id": "math.prob_stats",
      "title": "Probability & Statistics",
      "parentId": "math",
      "prereqIds": [
        "math.discrete.combinatorics",
        "math.analysis.single_calculus.integration_series"
      ],
      "intro": "Mathematical modeling of uncertainty, random processes, and inference from empirical data.",
      "sources": []
    },
    {
      "id": "math.prob_stats.probability_theory",
      "title": "Axiomatic Probability & Random Variables",
      "parentId": "math.prob_stats",
      "prereqIds": [
        "math.discrete.combinatorics",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Kolmogorov axioms, Bayes' theorem, expectation, moment-generating functions, Law of Large Numbers, and Central Limit Theorem.",
      "sources": [
        {
          "id": "src_blitzstein_prob",
          "title": "Blitzstein & Hwang - Introduction to Probability"
        }
      ]
    },
    {
      "id": "math.prob_stats.stochastic_processes",
      "title": "Stochastic Processes & Markov Chains",
      "parentId": "math.prob_stats",
      "prereqIds": [
        "math.prob_stats.probability_theory",
        "math.algebra.linear.eigen_spectral"
      ],
      "intro": "Discrete- and continuous-time Markov chains, Poisson processes, martingales, and Brownian motion.",
      "sources": [
        {
          "id": "src_ross_stoch",
          "title": "Ross - Stochastic Processes"
        }
      ]
    },
    {
      "id": "math.prob_stats.mathematical_statistics",
      "title": "Statistical Inference & Estimation Theory",
      "parentId": "math.prob_stats",
      "prereqIds": [
        "math.prob_stats.probability_theory"
      ],
      "intro": "Maximum likelihood estimation, Cramer-Rao lower bound, hypothesis testing, and Bayesian inference.",
      "sources": [
        {
          "id": "src_casella_berger",
          "title": "Casella & Berger - Statistical Inference"
        }
      ]
    },
    {
      "id": "physics",
      "title": "Physics",
      "parentId": "knowledge",
      "prereqIds": [
        "math.analysis.single_calculus.limits_derivatives"
      ],
      "intro": "Fundamental laws governing matter, energy, spacetime, and physical interactions across all scales.",
      "sources": [
        {
          "id": "src_feynman_lectures",
          "title": "Feynman, Leighton & Sands - The Feynman Lectures on Physics"
        }
      ]
    },
    {
      "id": "physics.classical_mechanics",
      "title": "Classical Mechanics",
      "parentId": "physics",
      "prereqIds": [
        "math.analysis.single_calculus.integration_series"
      ],
      "intro": "Macroscopic motion of particles, rigid bodies, and continuous media in the non-quantum, low-velocity regime.",
      "sources": []
    },
    {
      "id": "physics.classical_mechanics.newtonian",
      "title": "Kinematics & Newtonian Dynamics",
      "parentId": "physics.classical_mechanics",
      "prereqIds": [
        "math.analysis.single_calculus.limits_derivatives",
        "math.geometry.euclidean_analytic"
      ],
      "intro": "Vectors, inertial frames, Newton's laws $\\mathbf{F} = \\frac{d\\mathbf{p}}{dt}$, friction, and circular motion.",
      "sources": [
        {
          "id": "src_kleppner_kolenkow",
          "title": "Kleppner & Kolenkow - An Introduction to Mechanics"
        }
      ]
    },
    {
      "id": "physics.classical_mechanics.gravitation_rotational",
      "title": "Conservation Laws, Gravitation & Rigid Bodies",
      "parentId": "physics.classical_mechanics",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.analysis.single_calculus.integration_series"
      ],
      "intro": "Work-energy theorem, momentum conservation, Kepler orbits, inertia tensors, and Euler's equations for rigid bodies.",
      "sources": [
        {
          "id": "src_taylor_cm",
          "title": "Taylor - Classical Mechanics (Ch. 3-10)"
        }
      ]
    },
    {
      "id": "physics.classical_mechanics.analytical",
      "title": "Lagrangian & Hamiltonian Mechanics",
      "parentId": "physics.classical_mechanics",
      "prereqIds": [
        "physics.classical_mechanics.gravitation_rotational",
        "math.analysis.differential_equations.odes",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Principle of stationary action $\\delta S = 0$, Euler-Lagrange equations, Noether's theorem, and symplectic phase space.",
      "sources": [
        {
          "id": "src_goldstein_cm",
          "title": "Goldstein - Classical Mechanics"
        }
      ]
    },
    {
      "id": "physics.classical_mechanics.fluid_continuum",
      "title": "Continuum & Fluid Mechanics",
      "parentId": "physics.classical_mechanics",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.analysis.differential_equations.pdes"
      ],
      "intro": "Stress-strain tensors, elasticity, Euler equations, and the Navier-Stokes equations for viscous fluids.",
      "sources": [
        {
          "id": "src_landau_fluid",
          "title": "Landau & Lifshitz - Fluid Mechanics"
        }
      ]
    },
    {
      "id": "physics.em_optics",
      "title": "Electromagnetism & Optics",
      "parentId": "physics",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Classical field theory of electric and magnetic phenomena and electromagnetic wave propagation.",
      "sources": []
    },
    {
      "id": "physics.em_optics.electrostatics_magnetostatics",
      "title": "Electrostatics & Magnetostatics",
      "parentId": "physics.em_optics",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Gauss's law, electrostatic potential, boundary-value problems, Ampere's law, and vector potential $\\mathbf{A}$.",
      "sources": [
        {
          "id": "src_griffiths_em1",
          "title": "Griffiths - Introduction to Electrodynamics (Ch. 1-6)"
        }
      ]
    },
    {
      "id": "physics.em_optics.maxwell_electrodynamics",
      "title": "Electrodynamics & Maxwell's Equations",
      "parentId": "physics.em_optics",
      "prereqIds": [
        "physics.em_optics.electrostatics_magnetostatics",
        "math.analysis.differential_equations.pdes"
      ],
      "intro": "Faraday induction, displacement current, Maxwell's equations $\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\epsilon_0\\frac{\\partial \\mathbf{E}}{\\partial t}$, and radiation.",
      "sources": [
        {
          "id": "src_jackson_em",
          "title": "Jackson - Classical Electrodynamics"
        }
      ]
    },
    {
      "id": "physics.em_optics.optics",
      "title": "Geometrical & Wave Optics",
      "parentId": "physics.em_optics",
      "prereqIds": [
        "physics.em_optics.maxwell_electrodynamics"
      ],
      "intro": "Fermat's principle, paraxial ray matrices, interference, Fresnel/Fraunhofer diffraction, and polarization.",
      "sources": [
        {
          "id": "src_hecht_optics",
          "title": "Hecht - Optics"
        }
      ]
    },
    {
      "id": "physics.thermo_statmech",
      "title": "Thermodynamics & Statistical Mechanics",
      "parentId": "physics",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.prob_stats.probability_theory"
      ],
      "intro": "Macroscopic laws of energy and entropy derived from microscopic statistical ensembles.",
      "sources": []
    },
    {
      "id": "physics.thermo_statmech.thermodynamics",
      "title": "Laws of Thermodynamics & Potentials",
      "parentId": "physics.thermo_statmech",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "math.analysis.multivariable_calculus"
      ],
      "intro": "Zeroth through third laws, Carnot cycles, entropy $dS \\ge \\delta Q/T$, Legendre transforms, and Maxwell relations.",
      "sources": [
        {
          "id": "src_callen_thermo",
          "title": "Callen - Thermodynamics and an Introduction to Thermostatistics"
        }
      ]
    },
    {
      "id": "physics.thermo_statmech.statistical_mechanics",
      "title": "Statistical Ensembles & Phase Transitions",
      "parentId": "physics.thermo_statmech",
      "prereqIds": [
        "physics.thermo_statmech.thermodynamics",
        "math.prob_stats.probability_theory"
      ],
      "intro": "Microcanonical, canonical ($Z = \\sum e^{-\\beta E_i}$), and grand canonical ensembles, quantum gases, and Ising criticality.",
      "sources": [
        {
          "id": "src_kardar_statmech",
          "title": "Kardar - Statistical Physics of Particles"
        }
      ]
    },
    {
      "id": "physics.relativity",
      "title": "Relativity",
      "parentId": "physics",
      "prereqIds": [
        "physics.em_optics.maxwell_electrodynamics"
      ],
      "intro": "Spacetime geometry and gravitation as curvature of a Lorentzian manifold.",
      "sources": []
    },
    {
      "id": "physics.relativity.special",
      "title": "Special Relativity & Minkowski Spacetime",
      "parentId": "physics.relativity",
      "prereqIds": [
        "physics.classical_mechanics.newtonian",
        "physics.em_optics.maxwell_electrodynamics",
        "math.algebra.linear.matrices_systems"
      ],
      "intro": "Lorentz transformations, invariant interval $ds^2 = -c^2dt^2 + d\\mathbf{x}^2$, four-vectors, and relativistic electrodynamics.",
      "sources": [
        {
          "id": "src_taylor_wheeler",
          "title": "Taylor & Wheeler - Spacetime Physics"
        }
      ]
    },
    {
      "id": "physics.relativity.general",
      "title": "General Relativity & Einstein Field Equations",
      "parentId": "physics.relativity",
      "prereqIds": [
        "physics.relativity.special",
        "physics.classical_mechanics.analytical",
        "math.geometry.differential_geometry"
      ],
      "intro": "Equivalence principle, geodesics, Einstein field equations $G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}$, black holes, and cosmology.",
      "sources": [
        {
          "id": "src_carroll_gr",
          "title": "Carroll - Spacetime and Geometry"
        }
      ]
    },
    {
      "id": "physics.quantum",
      "title": "Quantum Physics",
      "parentId": "physics",
      "prereqIds": [
        "physics.classical_mechanics.analytical",
        "math.algebra.linear.eigen_spectral"
      ],
      "intro": "State vectors in Hilbert space, quantized observables, entanglement, and relativistic quantum fields.",
      "sources": []
    },
    {
      "id": "physics.quantum.nonrelativistic",
      "title": "Non-Relativistic Quantum Mechanics",
      "parentId": "physics.quantum",
      "prereqIds": [
        "physics.classical_mechanics.analytical",
        "math.algebra.linear.eigen_spectral",
        "math.analysis.differential_equations.pdes",
        "math.analysis.complex_analysis"
      ],
      "intro": "Schrodinger equation $i\\hbar\\frac{\\partial}{\\partial t}|\\psi\\rangle = \\hat{H}|\\psi\\rangle$, Dirac notation, angular momentum, perturbation theory, and spin.",
      "sources": [
        {
          "id": "src_sakurai_qm",
          "title": "Sakurai & Napolitano - Modern Quantum Mechanics"
        }
      ]
    },
    {
      "id": "physics.quantum.qft",
      "title": "Quantum Field Theory & Standard Model",
      "parentId": "physics.quantum",
      "prereqIds": [
        "physics.quantum.nonrelativistic",
        "physics.relativity.special",
        "math.algebra.abstract.groups"
      ],
      "intro": "Canonical and path-integral quantization of fields, Feynman diagrams, renormalization, and non-Abelian gauge theories.",
      "sources": [
        {
          "id": "src_peskin_schroeder",
          "title": "Peskin & Schroeder - An Introduction to Quantum Field Theory"
        }
      ]
    },
    {
      "id": "physics.condensed_matter",
      "title": "Condensed Matter & Solid-State Physics",
      "parentId": "physics",
      "prereqIds": [
        "physics.quantum.nonrelativistic",
        "physics.thermo_statmech.statistical_mechanics"
      ],
      "intro": "Crystal lattices, Bloch's theorem, electronic band structure, semiconductors, superconductivity, and topological phases.",
      "sources": [
        {
          "id": "src_ashcroft_mermin",
          "title": "Ashcroft & Mermin - Solid State Physics"
        }
      ]
    },
    {
      "id": "cs",
      "title": "Computer Science",
      "parentId": "knowledge",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "The science of computation, algorithmic complexity, information representation, and engineered computing systems.",
      "sources": []
    },
    {
      "id": "cs.theory",
      "title": "Theoretical Computer Science",
      "parentId": "cs",
      "prereqIds": [
        "math.discrete.graph_theory.connectivity_trees"
      ],
      "intro": "Mathematical foundations of algorithmic efficiency, computability limits, and information entropy.",
      "sources": []
    },
    {
      "id": "cs.theory.algorithms",
      "title": "Data Structures & Algorithm Design",
      "parentId": "cs.theory",
      "prereqIds": [
        "math.discrete.graph_theory.connectivity_trees",
        "math.discrete.combinatorics"
      ],
      "intro": "Asymptotic complexity $O(n\\log n)$, divide-and-conquer, dynamic programming, greedy algorithms, and graph traversal/shortest paths.",
      "sources": [
        {
          "id": "src_clrs",
          "title": "Cormen et al. (CLRS) - Introduction to Algorithms"
        }
      ]
    },
    {
      "id": "cs.theory.automata_computability",
      "title": "Automata, Formal Languages & Computability",
      "parentId": "cs.theory",
      "prereqIds": [
        "math.foundations.set_theory",
        "math.discrete.graph_theory.connectivity_trees"
      ],
      "intro": "Finite automata, context-free grammars, Turing machines, Church-Turing thesis, and the Halting Problem.",
      "sources": [
        {
          "id": "src_sipser",
          "title": "Sipser - Introduction to the Theory of Computation"
        }
      ]
    },
    {
      "id": "cs.theory.complexity",
      "title": "Computational Complexity Theory",
      "parentId": "cs.theory",
      "prereqIds": [
        "cs.theory.algorithms",
        "cs.theory.automata_computability"
      ],
      "intro": "Time/space hierarchies, $\\mathbf{P}$ vs. $\\mathbf{NP}$, Cook-Levin theorem, polynomial reductions, and randomized complexity.",
      "sources": [
        {
          "id": "src_arora_barak",
          "title": "Arora & Barak - Computational Complexity: A Modern Approach"
        }
      ]
    },
    {
      "id": "cs.theory.information_theory",
      "title": "Shannon Information Theory & Coding",
      "parentId": "cs.theory",
      "prereqIds": [
        "math.prob_stats.probability_theory"
      ],
      "intro": "Shannon entropy $H(X) = -\\sum p(x)\\log_2 p(x)$, mutual information, KL divergence, and channel capacity theorems.",
      "sources": [
        {
          "id": "src_cover_thomas",
          "title": "Cover & Thomas - Elements of Information Theory"
        }
      ]
    },
    {
      "id": "cs.systems",
      "title": "Computer Systems & Architecture",
      "parentId": "cs",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Hardware-software interface from Boolean logic gates up to distributed fault-tolerant clusters.",
      "sources": []
    },
    {
      "id": "cs.systems.digital_architecture",
      "title": "Digital Logic & Computer Architecture",
      "parentId": "cs.systems",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Combinational/sequential circuits, ISAs, pipelining, memory hierarchies, caches, and SIMD/GPU parallelism.",
      "sources": [
        {
          "id": "src_patterson_hennessy",
          "title": "Patterson & Hennessy - Computer Organization and Design"
        }
      ]
    },
    {
      "id": "cs.systems.operating_systems",
      "title": "Operating Systems & Concurrency",
      "parentId": "cs.systems",
      "prereqIds": [
        "cs.systems.digital_architecture",
        "cs.theory.algorithms"
      ],
      "intro": "Processes, threads, virtual memory paging, mutexes, deadlocks, scheduling, and file systems.",
      "sources": [
        {
          "id": "src_ostep",
          "title": "Arpaci-Dusseau - Operating Systems: Three Easy Pieces"
        }
      ]
    },
    {
      "id": "cs.systems.networking_distributed",
      "title": "Computer Networks & Distributed Systems",
      "parentId": "cs.systems",
      "prereqIds": [
        "cs.systems.operating_systems",
        "math.discrete.graph_theory.connectivity_trees"
      ],
      "intro": "TCP/IP stack, routing protocols, logical clocks, Raft/Paxos consensus, and replication consistency models.",
      "sources": [
        {
          "id": "src_kleppmann_ddia",
          "title": "Kleppmann - Designing Data-Intensive Applications"
        }
      ]
    },
    {
      "id": "cs.languages_compilers",
      "title": "Programming Languages & Compilers",
      "parentId": "cs",
      "prereqIds": [
        "cs.theory.automata_computability",
        "cs.systems.digital_architecture"
      ],
      "intro": "Lexing, parsing, type systems, lambda calculus, intermediate representations (SSA), and code optimization.",
      "sources": [
        {
          "id": "src_dragon_book",
          "title": "Aho, Lam, Sethi & Ullman - Compilers: Principles, Techniques, and Tools"
        }
      ]
    },
    {
      "id": "cs.ai_ml",
      "title": "Artificial Intelligence & Machine Learning",
      "parentId": "cs",
      "prereqIds": [
        "math.algebra.linear.eigen_spectral",
        "math.prob_stats.probability_theory",
        "cs.theory.algorithms"
      ],
      "intro": "Statistical pattern recognition, convex/non-convex optimization, and representation learning.",
      "sources": []
    },
    {
      "id": "cs.ai_ml.statistical_ml",
      "title": "Statistical Machine Learning & Optimization",
      "parentId": "cs.ai_ml",
      "prereqIds": [
        "math.algebra.linear.eigen_spectral",
        "math.analysis.multivariable_calculus",
        "math.prob_stats.mathematical_statistics"
      ],
      "intro": "Empirical risk minimization, bias-variance tradeoff, kernel methods, generalized linear models, and gradient descent.",
      "sources": [
        {
          "id": "src_bishop_prml",
          "title": "Bishop - Pattern Recognition and Machine Learning"
        }
      ]
    },
    {
      "id": "cs.ai_ml.deep_learning",
      "title": "Neural Architectures & Deep Learning",
      "parentId": "cs.ai_ml",
      "prereqIds": [
        "cs.ai_ml.statistical_ml",
        "cs.theory.information_theory"
      ],
      "intro": "Backpropagation, automatic differentiation, CNNs, Transformers, attention mechanisms, and generative modeling.",
      "sources": [
        {
          "id": "src_goodfellow_dl",
          "title": "Goodfellow, Bengio & Courville - Deep Learning"
        }
      ]
    },
    {
      "id": "engineering",
      "title": "Engineering & Applied Sciences",
      "parentId": "knowledge",
      "prereqIds": [
        "physics.classical_mechanics.newtonian"
      ],
      "intro": "Synthesis of physical laws and mathematical analysis into reliable physical, electronic, and autonomous systems.",
      "sources": []
    },
    {
      "id": "engineering.electrical",
      "title": "Electrical & Electronic Engineering",
      "parentId": "engineering",
      "prereqIds": [
        "physics.em_optics.electrostatics_magnetostatics"
      ],
      "intro": "Circuits, signal processing, solid-state devices, and analog/mixed-signal instrumentation.",
      "sources": []
    },
    {
      "id": "engineering.electrical.circuits",
      "title": "Linear Circuit Theory & Network Analysis",
      "parentId": "engineering.electrical",
      "prereqIds": [
        "physics.em_optics.electrostatics_magnetostatics",
        "math.analysis.differential_equations.odes"
      ],
      "intro": "Kirchhoff's laws, Thevenin/Norton equivalents, RLC transient/phasor response, and two-port networks.",
      "sources": [
        {
          "id": "src_sedra_smith",
          "title": "Sedra & Smith - Microelectronic Circuits (Ch. 1-2)"
        }
      ]
    },
    {
      "id": "engineering.electrical.signals_systems",
      "title": "Signals, Systems & Spectral Transforms",
      "parentId": "engineering.electrical",
      "prereqIds": [
        "engineering.electrical.circuits",
        "math.analysis.complex_analysis"
      ],
      "intro": "LTI systems, convolution, Laplace and Z-transforms, Nyquist-Shannon sampling, and digital filtering.",
      "sources": [
        {
          "id": "src_oppenheim_ss",
          "title": "Oppenheim & Willsky - Signals and Systems"
        }
      ]
    },
    {
      "id": "engineering.electrical.semiconductors_analog",
      "title": "Semiconductor Devices & Analog Electronics",
      "parentId": "engineering.electrical",
      "prereqIds": [
        "engineering.electrical.circuits",
        "physics.quantum.nonrelativistic"
      ],
      "intro": "PN junctions, MOSFETs, BJTs, operational amplifiers, feedback topologies, and low-noise amplification.",
      "sources": [
        {
          "id": "src_horowitz_hill",
          "title": "Horowitz & Hill - The Art of Electronics"
        }
      ]
    },
    {
      "id": "engineering.control_robotics",
      "title": "Control Theory & Robotics",
      "parentId": "engineering",
      "prereqIds": [
        "engineering.electrical.signals_systems"
      ],
      "intro": "Feedback stabilization, optimal estimation, and embodied autonomous actuation.",
      "sources": []
    },
    {
      "id": "engineering.control_robotics.control_theory",
      "title": "Classical & State-Space Control Theory",
      "parentId": "engineering.control_robotics",
      "prereqIds": [
        "engineering.electrical.signals_systems",
        "math.algebra.linear.eigen_spectral"
      ],
      "intro": "PID loops, Bode/Nyquist stability criteria, state-space controllability $\\dot{x} = Ax + Bu$, LQR, and Kalman filtering.",
      "sources": [
        {
          "id": "src_astrom_murray",
          "title": "Astrom & Murray - Feedback Systems"
        }
      ]
    },
    {
      "id": "engineering.control_robotics.robotics",
      "title": "Robot Kinematics, Estimation & Planning",
      "parentId": "engineering.control_robotics",
      "prereqIds": [
        "engineering.control_robotics.control_theory",
        "physics.classical_mechanics.gravitation_rotational"
      ],
      "intro": "Rigid-body transforms $SE(3)$, forward/inverse kinematics, SLAM, and trajectory optimization.",
      "sources": [
        {
          "id": "src_lynch_park",
          "title": "Lynch & Park - Modern Robotics"
        }
      ]
    },
    {
      "id": "natural_sciences",
      "title": "Chemistry & Biology",
      "parentId": "knowledge",
      "prereqIds": [
        "physics.thermo_statmech.thermodynamics"
      ],
      "intro": "Molecular structure, chemical reactivity, and self-organizing living systems.",
      "sources": []
    },
    {
      "id": "natural_sciences.chemistry",
      "title": "Chemistry",
      "parentId": "natural_sciences",
      "prereqIds": [
        "physics.quantum.nonrelativistic"
      ],
      "intro": "Electronic structure of atoms and molecules, bonding, thermodynamics of reactions, and synthesis.",
      "sources": []
    },
    {
      "id": "natural_sciences.chemistry.physical",
      "title": "Physical & Quantum Chemistry",
      "parentId": "natural_sciences.chemistry",
      "prereqIds": [
        "physics.quantum.nonrelativistic",
        "physics.thermo_statmech.thermodynamics"
      ],
      "intro": "Molecular orbital theory, spectroscopy, chemical kinetics, and Gibbs free energy equilibrium $\\Delta G = \\Delta H - T\\Delta S$.",
      "sources": [
        {
          "id": "src_atkins_pchem",
          "title": "Atkins & de Paula - Physical Chemistry"
        }
      ]
    },
    {
      "id": "natural_sciences.chemistry.organic",
      "title": "Organic Chemistry & Reaction Mechanisms",
      "parentId": "natural_sciences.chemistry",
      "prereqIds": [
        "natural_sciences.chemistry.physical"
      ],
      "intro": "Stereochemistry, functional groups, nucleophilic/electrophilic mechanisms, pericyclic reactions, and retrosynthesis.",
      "sources": [
        {
          "id": "src_clayden_org",
          "title": "Clayden, Greeves & Warren - Organic Chemistry"
        }
      ]
    },
    {
      "id": "natural_sciences.biology",
      "title": "Biology & Neuroscience",
      "parentId": "natural_sciences",
      "prereqIds": [
        "natural_sciences.chemistry.organic"
      ],
      "intro": "Information-processing biochemical networks, cellular physiology, and neural computation.",
      "sources": []
    },
    {
      "id": "natural_sciences.biology.molecular_cell",
      "title": "Molecular & Cellular Biology",
      "parentId": "natural_sciences.biology",
      "prereqIds": [
        "natural_sciences.chemistry.organic"
      ],
      "intro": "DNA replication, transcription, translation, metabolic pathways, and signal transduction.",
      "sources": [
        {
          "id": "src_alberts_cell",
          "title": "Alberts et al. - Molecular Biology of the Cell"
        }
      ]
    },
    {
      "id": "natural_sciences.biology.neuroscience",
      "title": "Computational & Systems Neuroscience",
      "parentId": "natural_sciences.biology",
      "prereqIds": [
        "natural_sciences.biology.molecular_cell",
        "engineering.electrical.signals_systems"
      ],
      "intro": "Hodgkin-Huxley membrane dynamics, synaptic plasticity, neural coding, and sensory/motor circuit computation.",
      "sources": [
        {
          "id": "src_dayan_abbott",
          "title": "Dayan & Abbott - Theoretical Neuroscience"
        }
      ]
    },
    {
      "id": "humanities",
      "title": "Philosophy, Linguistics & Economics",
      "parentId": "knowledge",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Formal and conceptual inquiry into knowledge, language, value, and strategic human institutions.",
      "sources": []
    },
    {
      "id": "humanities.philosophy",
      "title": "Philosophy",
      "parentId": "humanities",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Rigorous analysis of justification, reality, consciousness, and normative principles.",
      "sources": []
    },
    {
      "id": "humanities.philosophy.epistemology",
      "title": "Epistemology & Philosophy of Science",
      "parentId": "humanities.philosophy",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Theory of justification, induction, Popperian falsification, Kuhnian paradigms, and Bayesian confirmation.",
      "sources": [
        {
          "id": "src_popper_lsd",
          "title": "Popper - The Logic of Scientific Discovery"
        }
      ]
    },
    {
      "id": "humanities.philosophy.metaphysics_mind",
      "title": "Metaphysics & Philosophy of Mind",
      "parentId": "humanities.philosophy",
      "prereqIds": [
        "humanities.philosophy.epistemology"
      ],
      "intro": "Ontology, causation, modality, physicalism, functionalism, and the hard problem of consciousness.",
      "sources": [
        {
          "id": "src_kim_mind",
          "title": "Kim - Philosophy of Mind"
        }
      ]
    },
    {
      "id": "humanities.philosophy.ethics_political",
      "title": "Normative Ethics & Political Philosophy",
      "parentId": "humanities.philosophy",
      "prereqIds": [
        "math.foundations.logic"
      ],
      "intro": "Consequentialism, deontology, virtue ethics, social contract theory, and distributive justice.",
      "sources": [
        {
          "id": "src_rawls_justice",
          "title": "Rawls - A Theory of Justice"
        }
      ]
    },
    {
      "id": "humanities.linguistics",
      "title": "Linguistics & Formal Semantics",
      "parentId": "humanities",
      "prereqIds": [
        "cs.theory.automata_computability",
        "math.foundations.logic"
      ],
      "intro": "Phonology, generative syntax, compositional Montague semantics, and pragmatics.",
      "sources": [
        {
          "id": "src_heim_kratzer",
          "title": "Heim & Kratzer - Semantics in Generative Grammar"
        }
      ]
    },
    {
      "id": "humanities.economics",
      "title": "Economics & Game Theory",
      "parentId": "humanities",
      "prereqIds": [
        "math.analysis.multivariable_calculus",
        "math.prob_stats.probability_theory"
      ],
      "intro": "Resource allocation under scarcity, strategic interaction, and aggregate macroeconomic dynamics.",
      "sources": []
    },
    {
      "id": "humanities.economics.micro_game_theory",
      "title": "Microeconomics & Strategic Game Theory",
      "parentId": "humanities.economics",
      "prereqIds": [
        "math.analysis.multivariable_calculus",
        "math.prob_stats.probability_theory"
      ],
      "intro": "Utility maximization, general equilibrium, Nash equilibrium, mechanism design, and asymmetric information.",
      "sources": [
        {
          "id": "src_mascolell",
          "title": "Mas-Colell, Whinston & Green - Microeconomic Theory"
        }
      ]
    },
    {
      "id": "humanities.economics.macroeconomics",
      "title": "Macroeconomics & Growth Theory",
      "parentId": "humanities.economics",
      "prereqIds": [
        "humanities.economics.micro_game_theory",
        "math.analysis.differential_equations.odes"
      ],
      "intro": "Solow-Swan growth models, dynamic stochastic general equilibrium, monetary policy, and business cycles.",
      "sources": [
        {
          "id": "src_romer_macro",
          "title": "Romer - Advanced Macroeconomics"
        }
      ]
    }
  ]
};

window.POLYMATHY_SEED_CURRICULUM = window.POLYMATHY_CURRICULUM;
if (typeof module !== "undefined" && module.exports) {
  module.exports = window.POLYMATHY_CURRICULUM;
}

