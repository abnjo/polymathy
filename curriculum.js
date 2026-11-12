/**
 * POLYMATHY — Default STEM Knowledge Graph
 * Autoloadable companion script for local offline and file:// execution.
 * When served via HTTP/HTTPS, index.html will attempt to fetch curriculum.json first.
 */
window.POLYMATHY_CURRICULUM = {
  "patch_id": "001_stem_polymath_curriculum",
  "title": "STEM Polymath Curriculum",
  "description": "Foundational STEM Compound DAG spanning Physics, Chemistry, Mathematics, and Computer Science with exact KaTeX formulas, subtopics, and textbook references.",
  "navigation": {
    "MAIN": "physics.mechanics.rotation",
    "HEAD": "physics.mechanics.rotation",
    "detourStack": []
  },
  "initial_state": {
    "navigation": {
      "MAIN": "physics.mechanics.rotation",
      "HEAD": "physics.mechanics.rotation",
      "detourStack": []
    },
    "nodes": {
      "knowledge": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [],
        "expandedOnMap": true
      },
      "physics": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": true
      },
      "chemistry": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": true
      },
      "math": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": true
      },
      "cs": {
        "introDone": false,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": false
      },
      "physics.mechanics": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_cm_taylor"
        ],
        "expandedOnMap": true
      },
      "physics.mechanics.kinematics": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_kin_hcv",
          "src_kin_irodov"
        ],
        "expandedOnMap": false
      },
      "physics.mechanics.newton_laws": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_nl_hcv"
        ],
        "expandedOnMap": false
      },
      "physics.mechanics.work_energy": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_we_hcv"
        ],
        "expandedOnMap": false
      },
      "physics.mechanics.rotation": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_rot_hcv"
        ],
        "expandedOnMap": false
      },
      "physics.mechanics.gravitation": {
        "introDone": false,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": false
      },
      "physics.mechanics.fluids": {
        "introDone": false,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": false
      },
      "chemistry.physical": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_pc_atkins"
        ],
        "expandedOnMap": true
      },
      "chemistry.physical.mole_concept": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_mole_ncert",
          "src_mole_rcm"
        ],
        "expandedOnMap": false
      },
      "chemistry.physical.atomic_structure": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_atom_ncert"
        ],
        "expandedOnMap": false
      },
      "chemistry.physical.thermodynamics": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_cth_ncert"
        ],
        "expandedOnMap": false
      },
      "math.calculus": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_calc_spivak"
        ],
        "expandedOnMap": true
      },
      "math.calculus.limits_continuity": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_lim_cengage"
        ],
        "expandedOnMap": false
      },
      "math.calculus.integration": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_int_cengage"
        ],
        "expandedOnMap": false
      },
      "math.calculus.multivariable": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": false
      },
      "math.algebra": {
        "introDone": true,
        "baselineDone": false,
        "completedSourceIds": [
          "src_alg_strang"
        ],
        "expandedOnMap": true
      },
      "math.algebra.matrices": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_mat_cengage"
        ],
        "expandedOnMap": false
      },
      "cs.algorithms": {
        "introDone": false,
        "baselineDone": false,
        "completedSourceIds": [],
        "expandedOnMap": false
      },
      "cs.algorithms.data_structures": {
        "introDone": true,
        "baselineDone": true,
        "completedSourceIds": [
          "src_ds_clrs"
        ],
        "expandedOnMap": false
      }
    }
  },
  "nodes": [
    {
      "id": "knowledge",
      "title": "Knowledge",
      "parentId": null,
      "prereqIds": [],
      "intro": "Root origin of the STEM knowledge graph. Expand into Physics, Chemistry, Mathematics, and Computer Science to track exact formulas, textbook sources, and prerequisite dependency chains.",
      "sources": []
    },
    {
      "id": "physics",
      "title": "Physics",
      "parentId": "knowledge",
      "prereqIds": [],
      "intro": "Quantitative laws of physical reality: mechanics, electrodynamics, thermodynamics, optics, and quantum physics.",
      "sources": [
        {
          "id": "src_phys_hcv",
          "title": "HC Verma — Concepts of Physics (Vol 1 & 2)"
        }
      ]
    },
    {
      "id": "chemistry",
      "title": "Chemistry",
      "parentId": "knowledge",
      "prereqIds": [],
      "intro": "Molecular architecture and atomic transformations: physical chemistry thermodynamics, inorganic bonding, and organic mechanisms.",
      "sources": [
        {
          "id": "src_chem_ncert",
          "title": "NCERT Chemistry (Class 11 & 12 Complete)"
        }
      ]
    },
    {
      "id": "math",
      "title": "Mathematics",
      "parentId": "knowledge",
      "prereqIds": [],
      "intro": "Analytical foundations: differential and integral calculus, linear algebra, coordinate geometry, and discrete combinatorics.",
      "sources": [
        {
          "id": "src_math_cengage",
          "title": "Cengage Mathematics Series (Calculus, Algebra, Coordinate Geometry)"
        }
      ]
    },
    {
      "id": "cs",
      "title": "Computer Science",
      "parentId": "knowledge",
      "prereqIds": [],
      "intro": "Computational theory: data structures, asymptotic algorithms, graph exploration, dynamic programming, and statistical machine learning.",
      "sources": [
        {
          "id": "src_cs_clrs",
          "title": "Cormen, Leiserson, Rivest, Stein — Introduction to Algorithms (4th ed.)"
        }
      ]
    },
    {
      "id": "physics.mechanics",
      "title": "Classical & Continuum Mechanics",
      "parentId": "physics",
      "prereqIds": [],
      "intro": "Kinematics, dynamics, conservation laws, rotational systems, gravitation, and fluid mechanics.",
      "sources": [
        {
          "id": "src_cm_taylor",
          "title": "Taylor — Classical Mechanics"
        }
      ]
    },
    {
      "id": "physics.mechanics.kinematics",
      "title": "1D & 2D Kinematics",
      "parentId": "physics.mechanics",
      "prereqIds": [],
      "intro": "Uniform acceleration equations $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 - u^2 = 2as$. Trajectory equation $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$, horizontal range $R = \\frac{u^2\\sin 2\\theta}{g}$, flight time $T = \\frac{2u\\sin\\theta}{g}$, and relative velocity $\\mathbf{v}_{A/B} = \\mathbf{v}_A - \\mathbf{v}_B$.",
      "sources": [
        {
          "id": "src_kin_hcv",
          "title": "HC Verma Vol. 1 — Ch. 3 Rest and Motion: Kinematics"
        },
        {
          "id": "src_kin_irodov",
          "title": "Irodov — Problems in General Physics (Sec 1.1 Kinematics)"
        }
      ]
    },
    {
      "id": "physics.mechanics.newton_laws",
      "title": "Newton's Laws & Friction",
      "parentId": "physics.mechanics",
      "prereqIds": [
        "physics.mechanics.kinematics"
      ],
      "intro": "Linear momentum conservation $\\mathbf{F}_{\\text{net}} = \\frac{d\\mathbf{p}}{dt} = m\\mathbf{a}$. Free-body diagrams, tension, and normal contact forces. Static friction $f_s \\le \\mu_s N$, kinetic friction $f_k = \\mu_k N$, angle of repose $\\tan\\theta = \\mu_s$. Inertial pseudo forces $\\mathbf{F}_{\\text{pseudo}} = -m\\mathbf{a}_0$ in non-inertial reference frames.",
      "sources": [
        {
          "id": "src_nl_hcv",
          "title": "HC Verma Vol. 1 — Ch. 5 Newton's Laws of Motion & Ch. 6 Friction"
        },
        {
          "id": "src_nl_kk",
          "title": "Kleppner & Kolenkow — An Introduction to Mechanics (Ch. 2)"
        }
      ]
    },
    {
      "id": "physics.mechanics.work_energy",
      "title": "Work, Energy & Power",
      "parentId": "physics.mechanics",
      "prereqIds": [
        "physics.mechanics.newton_laws"
      ],
      "intro": "Work integral $W = \\int \\mathbf{F} \\cdot d\\mathbf{r}$. Work-Energy Theorem $\\Delta K = W_{\\text{all}} = W_c + W_{nc} + W_{\\text{ext}}$. Conservative force criterion $\\mathbf{F} = -\\nabla U$ (curl free $\\nabla \\times \\mathbf{F} = 0$). Potential energy curves, stable/unstable equilibrium points ($\\frac{dU}{dx} = 0, \\frac{d^2 U}{dx^2} > 0$), and instantaneous power $P = \\mathbf{F} \\cdot \\mathbf{v}$.",
      "sources": [
        {
          "id": "src_we_hcv",
          "title": "HC Verma Vol. 1 — Ch. 8 Work and Energy"
        }
      ]
    },
    {
      "id": "physics.mechanics.rotation",
      "title": "Rotational Dynamics & Angular Momentum",
      "parentId": "physics.mechanics",
      "prereqIds": [
        "physics.mechanics.work_energy"
      ],
      "intro": "Torque $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F} = I\\boldsymbol{\\alpha}$. Moment of inertia $I = \\int r^2 dm$, parallel-axis theorem $I = I_{\\text{cm}} + Md^2$, and perpendicular-axis theorem $I_z = I_x + I_y$. Angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p} = I\\boldsymbol{\\omega}$. Total kinetic energy in rolling $K = \\frac{1}{2}M v_{\\text{cm}}^2 + \\frac{1}{2}I_{\\text{cm}}\\omega^2$; rolling without slipping condition $v_{\\text{cm}} = R\\omega$.",
      "sources": [
        {
          "id": "src_rot_hcv",
          "title": "HC Verma Vol. 1 — Ch. 10 Rotational Mechanics"
        },
        {
          "id": "src_rot_irodov",
          "title": "Irodov — Sec 1.5 Dynamics of a Solid Body"
        }
      ]
    },
    {
      "id": "physics.mechanics.gravitation",
      "title": "Gravitation & Kepler Orbits",
      "parentId": "physics.mechanics",
      "prereqIds": [
        "physics.mechanics.work_energy"
      ],
      "intro": "Newton's universal law $\\mathbf{F} = -\\frac{GMm}{r^2}\\hat{\\mathbf{r}}$. Gravitational potential $V(r) = -\\frac{GM}{r}$, potential energy $U = -\\frac{GMm}{r}$. Escape velocity $v_e = \\sqrt{\\frac{2GM}{R}}$, circular orbital speed $v_o = \\sqrt{\\frac{GM}{r}}$, and Kepler's third law $T^2 = \\frac{4\\pi^2}{GM}a^3$.",
      "sources": [
        {
          "id": "src_grav_hcv",
          "title": "HC Verma Vol. 1 — Ch. 11 Gravitation"
        }
      ]
    },
    {
      "id": "physics.mechanics.fluids",
      "title": "Fluid Statics & Dynamics",
      "parentId": "physics.mechanics",
      "prereqIds": [
        "physics.mechanics.work_energy"
      ],
      "intro": "Hydrostatic variation $dP = -\\rho g dz$, Pascal's law, Archimedes' buoyant force $F_B = \\rho_{\\text{fluid}} V_{\\text{disp}} g$. Continuity equation $A_1 v_1 = A_2 v_2$. Bernoulli equation along streamlines: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$. Torricelli's efflux law $v = \\sqrt{2gh}$, Viscosity $\\tau = \\eta \\frac{dv}{dy}$, and Stokes' viscous drag $F_v = 6\\pi\\eta r v$.",
      "sources": [
        {
          "id": "src_fluids_hcv",
          "title": "HC Verma Vol. 1 — Ch. 13 Fluids"
        }
      ]
    },
    {
      "id": "physics.electromagnetism",
      "title": "Electromagnetism & Electrodynamics",
      "parentId": "physics",
      "prereqIds": [],
      "intro": "Maxwell's electromagnetic field theory: electrostatics, capacitance, magnetostatics, and Faraday induction.",
      "sources": [
        {
          "id": "src_em_griffiths",
          "title": "Griffiths — Introduction to Electrodynamics (4th ed.)"
        }
      ]
    },
    {
      "id": "physics.electromagnetism.electrostatics",
      "title": "Electrostatics & Gauss's Law",
      "parentId": "physics.electromagnetism",
      "prereqIds": [
        "math.calculus.multivariable"
      ],
      "intro": "Coulomb's law $\\mathbf{F} = \\frac{q_1 q_2}{4\\pi\\varepsilon_0 r^2}\\hat{\\mathbf{r}}$. Electric field $\\mathbf{E} = -\\nabla V$, potential $V = \\frac{q}{4\\pi\\varepsilon_0 r}$. Gauss's divergence theorem $\\oint \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0}$. Electric dipole moment $\\mathbf{p} = q\\mathbf{d}$, potential $V = \\frac{p\\cos\\theta}{4\\pi\\varepsilon_0 r^2}$, torque $\\boldsymbol{\\tau} = \\mathbf{p} \\times \\mathbf{E}$, electrostatic energy density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$.",
      "sources": [
        {
          "id": "src_es_griffiths",
          "title": "Griffiths — Ch. 2 Electrostatics"
        },
        {
          "id": "src_es_hcv",
          "title": "HC Verma Vol. 2 — Ch. 29 Electric Field and Potential"
        }
      ]
    },
    {
      "id": "physics.electromagnetism.capacitance",
      "title": "Capacitance & Dielectrics",
      "parentId": "physics.electromagnetism",
      "prereqIds": [
        "physics.electromagnetism.electrostatics"
      ],
      "intro": "Charge-potential ratio $Q = CV$. Parallel-plate capacitance $C = \\frac{\\varepsilon_0 A}{d}$. Dielectric insertion $C = \\kappa C_0$, bound polarization charge density $\\sigma_b = \\mathbf{P} \\cdot \\hat{\\mathbf{n}}$. Stored electrostatic energy $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$.",
      "sources": [
        {
          "id": "src_cap_hcv",
          "title": "HC Verma Vol. 2 — Ch. 31 Capacitors"
        },
        {
          "id": "src_cap_purcell",
          "title": "Purcell & Morin — Electricity and Magnetism (Ch. 3)"
        }
      ]
    },
    {
      "id": "physics.electromagnetism.magnetism",
      "title": "Magnetostatics & Biot-Savart Law",
      "parentId": "physics.electromagnetism",
      "prereqIds": [
        "physics.electromagnetism.electrostatics"
      ],
      "intro": "Lorentz force $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$. Biot-Savart law $d\\mathbf{B} = \\frac{\\mu_0 I}{4\\pi} \\frac{d\\boldsymbol{\\ell} \\times \\hat{\\mathbf{r}}}{r^2}$. Ampère's circuital law $\\oint \\mathbf{B} \\cdot d\\boldsymbol{\\ell} = \\mu_0 I_{\\text{enc}}$. Magnetic dipole moment $\\mathbf{m} = I\\mathbf{A}$, torque $\\boldsymbol{\\tau} = \\mathbf{m} \\times \\mathbf{B}$, force on current wire $\\mathbf{F} = I\\mathbf{L} \\times \\mathbf{B}$.",
      "sources": [
        {
          "id": "src_mag_griffiths",
          "title": "Griffiths — Ch. 5 Magnetostatics"
        },
        {
          "id": "src_mag_hcv",
          "title": "HC Verma Vol. 2 — Ch. 34–35 Magnetic Field"
        }
      ]
    },
    {
      "id": "physics.electromagnetism.induction",
      "title": "Electromagnetic Induction & Maxwell Equations",
      "parentId": "physics.electromagnetism",
      "prereqIds": [
        "physics.electromagnetism.magnetism"
      ],
      "intro": "Faraday's law of induction $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$ where $\\Phi_B = \\int \\mathbf{B} \\cdot d\\mathbf{A}$. Lenz's law. Motional electromotive force $\\mathcal{E} = (\\mathbf{v} \\times \\mathbf{B}) \\cdot \\boldsymbol{\\ell}$. Self-inductance $\\mathcal{E} = -L \\frac{dI}{dt}$, stored magnetic energy $U_B = \\frac{1}{2}LI^2$. Maxwell-Ampère correction with displacement current density $J_d = \\varepsilon_0 \\frac{\\partial E}{\\partial t}$.",
      "sources": [
        {
          "id": "src_ind_griffiths",
          "title": "Griffiths — Ch. 7 Electrodynamics"
        },
        {
          "id": "src_ind_hcv",
          "title": "HC Verma Vol. 2 — Ch. 38 Electromagnetic Induction"
        }
      ]
    },
    {
      "id": "physics.thermal_optics",
      "title": "Thermal Physics & Wave Optics",
      "parentId": "physics",
      "prereqIds": [],
      "intro": "Thermodynamic cycles, kinetic theory, interference, diffraction, and wave phenomena.",
      "sources": [
        {
          "id": "src_therm_hcv",
          "title": "HC Verma Vol. 2 — Heat, Thermodynamics and Light Waves"
        }
      ]
    },
    {
      "id": "physics.thermal_optics.thermodynamics",
      "title": "Thermodynamics & Kinetic Theory",
      "parentId": "physics.thermal_optics",
      "prereqIds": [
        "physics.mechanics.work_energy"
      ],
      "intro": "Ideal gas equation $PV = nRT$, kinetic pressure $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2$, internal energy $U = \\frac{f}{2}nRT$. First Law $dQ = dU + dW$. Mayer's relation $C_p - C_v = R$, specific heat ratio $\\gamma = 1 + 2/f$. Adiabatic process $PV^\\gamma = \\text{const}$, work done $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$. Carnot engine efficiency $\\eta = 1 - \\frac{T_C}{T_H}$.",
      "sources": [
        {
          "id": "src_th_fermi",
          "title": "Enrico Fermi — Thermodynamics"
        },
        {
          "id": "src_th_hcv",
          "title": "HC Verma Vol. 2 — Ch. 24–27 Kinetic Theory & Thermodynamics"
        }
      ]
    },
    {
      "id": "physics.thermal_optics.wave_optics",
      "title": "Wave Optics & Interference",
      "parentId": "physics.thermal_optics",
      "prereqIds": [
        "physics.electromagnetism.induction"
      ],
      "intro": "Huygens' principle, coherent wave superposition, phase-path difference relation $\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x$. Young's double-slit interference intensity $I = 4I_0 \\cos^2(\\Delta\\phi/2)$, fringe spacing $\\beta = \\frac{\\lambda D}{d}$. Single-slit diffraction minima $a\\sin\\theta = m\\lambda$. Polarization, Brewster's law $\\tan\\theta_p = \\mu$, and Malus' law $I = I_0 \\cos^2\\theta$.",
      "sources": [
        {
          "id": "src_wo_hcv",
          "title": "HC Verma Vol. 2 — Ch. 17 Light Waves"
        }
      ]
    },
    {
      "id": "physics.modern",
      "title": "Modern Physics & Quantum Foundations",
      "parentId": "physics",
      "prereqIds": [],
      "intro": "Wave-particle duality, atomic Bohr transitions, nuclear binding energy, and radioactive decay.",
      "sources": [
        {
          "id": "src_mod_eisberg",
          "title": "Eisberg & Resnick — Quantum Physics of Atoms and Molecules"
        }
      ]
    },
    {
      "id": "physics.modern.quantum_basics",
      "title": "Photoelectric Effect & Bohr Atom",
      "parentId": "physics.modern",
      "prereqIds": [
        "physics.thermal_optics.wave_optics"
      ],
      "intro": "Einstein photoelectric equation $h\\nu = \\phi + K_{\\max} = \\phi + eV_0$. de Broglie matter wavelength $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mE}}$. Bohr angular momentum quantization $mvr = \\frac{nh}{2\\pi}$, energy levels $E_n = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$, and Rydberg spectral line formula $\\frac{1}{\\lambda} = R Z^2 \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$.",
      "sources": [
        {
          "id": "src_qb_hcv",
          "title": "HC Verma Vol. 2 — Ch. 42–43 Photoelectric Effect & Bohr Model"
        }
      ]
    },
    {
      "id": "physics.modern.nuclear",
      "title": "Nuclear Physics & Radioactivity",
      "parentId": "physics.modern",
      "prereqIds": [
        "physics.modern.quantum_basics"
      ],
      "intro": "Mass defect $\\Delta m = [Z m_p + (A - Z)m_n] - M_{\\text{nucleus}}$, binding energy per nucleon $\\text{BE}/A$. Radioactive decay law $N(t) = N_0 e^{-\\lambda t}$, half-life $t_{1/2} = \\frac{\\ln 2}{\\lambda}$, mean lifetime $\\tau = 1/\\lambda$, activity $A = \\lambda N$. Alpha, beta, and gamma radiation energetics and $Q$-value.",
      "sources": [
        {
          "id": "src_nuc_hcv",
          "title": "HC Verma Vol. 2 — Ch. 44–46 Nuclear Physics"
        }
      ]
    },
    {
      "id": "chemistry.physical",
      "title": "Physical Chemistry",
      "parentId": "chemistry",
      "prereqIds": [],
      "intro": "Thermodynamics, chemical equilibrium, atomic orbitals, reaction rates, and electrochemistry.",
      "sources": [
        {
          "id": "src_pc_atkins",
          "title": "Peter Atkins — Physical Chemistry"
        }
      ]
    },
    {
      "id": "chemistry.physical.mole_concept",
      "title": "Stoichiometry & Mole Concept",
      "parentId": "chemistry.physical",
      "prereqIds": [],
      "intro": "Avogadro's constant $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$. Moles $n = \\frac{m}{M} = \\frac{V_{\\text{gas}}(\\text{STP})}{22.4\\text{ L}}$. Stoichiometric ratios, limiting reagent calculations, percentage yield. Concentration formulas: Molarity $M = \\frac{n_{\\text{solute}}}{V_{\\text{soln}}(\\text{L})}$, Molality $m = \\frac{n_{\\text{solute}}}{m_{\\text{solvent}}(\\text{kg})}$, Mole fraction $\\chi_A = \\frac{n_A}{\\sum n}$.",
      "sources": [
        {
          "id": "src_mole_ncert",
          "title": "NCERT Class 11 — Ch. 1 Basic Concepts of Chemistry"
        },
        {
          "id": "src_mole_rcm",
          "title": "RC Mukherjee — Modern Approach to Chemical Calculations"
        }
      ]
    },
    {
      "id": "chemistry.physical.atomic_structure",
      "title": "Atomic Structure & Orbitals",
      "parentId": "chemistry.physical",
      "prereqIds": [
        "chemistry.physical.mole_concept"
      ],
      "intro": "Bohr hydrogen model, de Broglie relation $\\lambda = \\frac{h}{mv}$, Heisenberg uncertainty principle $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$. Four quantum numbers $(n, l, m_l, m_s)$, shapes of $s, p, d$ orbitals. Aufbau principle, Pauli exclusion principle, Hund's rule of maximum multiplicity. Radial wave-function nodes $n - l - 1$ and angular nodes $l$.",
      "sources": [
        {
          "id": "src_atom_ncert",
          "title": "NCERT Class 11 — Ch. 2 Structure of Atom"
        }
      ]
    },
    {
      "id": "chemistry.physical.thermodynamics",
      "title": "Chemical Thermodynamics & Energetics",
      "parentId": "chemistry.physical",
      "prereqIds": [
        "chemistry.physical.mole_concept"
      ],
      "intro": "State vs path functions. First law $\\Delta U = q + w$ ($w = -P_{\\text{ext}}\\Delta V$). Enthalpy $H = U + PV$, $\\Delta H = \\Delta U + \\Delta n_g RT$. Hess's law of constant heat summation. Entropy $S$, second law $\\Delta S_{\\text{univ}} \\ge 0$. Gibbs free energy $G = H - TS$, spontaneity condition $\\Delta G < 0$. Standard free energy relation $\\Delta G^\\circ = -RT\\ln K$.",
      "sources": [
        {
          "id": "src_cth_ncert",
          "title": "NCERT Class 11 — Ch. 6 Thermodynamics"
        }
      ]
    },
    {
      "id": "chemistry.physical.equilibrium",
      "title": "Chemical & Ionic Equilibrium",
      "parentId": "chemistry.physical",
      "prereqIds": [
        "chemistry.physical.thermodynamics"
      ],
      "intro": "Law of mass action, equilibrium constants $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$, $K_p = K_c(RT)^{\\Delta n_g}$. Reaction quotient $Q$. Le Chatelier's principle (pressure, temperature, volume shifts). Ionic autoionization of water $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$. Ostwald dilution law, buffer solutions via Henderson-Hasselbalch equation $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$, solubility product $K_{sp}$ and common-ion precipitation.",
      "sources": [
        {
          "id": "src_eq_ncert",
          "title": "NCERT Class 11 — Ch. 7 Equilibrium"
        }
      ]
    },
    {
      "id": "chemistry.physical.kinetics",
      "title": "Chemical Kinetics & Rates",
      "parentId": "chemistry.physical",
      "prereqIds": [
        "chemistry.physical.equilibrium"
      ],
      "intro": "Differential and integrated rate laws for zero, first, and second-order reactions. First-order half-life $t_{1/2} = \\frac{\\ln 2}{k}$ independent of initial concentration. Arrhenius temperature equation: $k = A e^{-E_a/RT}$, activation energy $E_a$, rate-determining step in multi-step reaction profiles.",
      "sources": [
        {
          "id": "src_kin_ncert",
          "title": "NCERT Class 12 — Ch. 4 Chemical Kinetics"
        }
      ]
    },
    {
      "id": "chemistry.physical.electrochemistry",
      "title": "Electrochemistry & Nernst Equation",
      "parentId": "chemistry.physical",
      "prereqIds": [
        "chemistry.physical.thermodynamics",
        "chemistry.physical.equilibrium"
      ],
      "intro": "Galvanic cell potential $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$. Nernst equation: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{RT}{nF}\\ln Q$. Free energy link $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$. Faraday's laws of electrolysis $m = \\frac{M}{nF}It$. Molar conductivity $\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$, Kohlrausch's law of independent ion migration $\\Lambda^\\circ_m = \\nu_+ \\lambda^\\circ_+ + \\nu_- \\lambda^\\circ_-$.",
      "sources": [
        {
          "id": "src_el_ncert",
          "title": "NCERT Class 12 — Ch. 3 Electrochemistry"
        }
      ]
    },
    {
      "id": "chemistry.inorganic",
      "title": "Inorganic Chemistry",
      "parentId": "chemistry",
      "prereqIds": [],
      "intro": "Periodic trends, chemical bonding, molecular orbitals, and coordination compounds.",
      "sources": [
        {
          "id": "src_ic_jdlee",
          "title": "JD Lee — Concise Inorganic Chemistry"
        }
      ]
    },
    {
      "id": "chemistry.inorganic.periodic_properties",
      "title": "Periodic Trends & Table Architecture",
      "parentId": "chemistry.inorganic",
      "prereqIds": [
        "chemistry.physical.atomic_structure"
      ],
      "intro": "Electronic structure of the periodic table ($s, p, d, f$ blocks). Effective nuclear charge $Z_{\\text{eff}} = Z - \\sigma$ (Slater's rules). Systematic trends: atomic and ionic radii, Ionization Energy (with filled/half-filled anomalies Be vs B, N vs O), Electron Gain Enthalpy (Cl vs F anomaly), Pauling electronegativity, Lanthanoid contraction and inert pair effect.",
      "sources": [
        {
          "id": "src_pt_ncert",
          "title": "NCERT Class 11 — Ch. 3 Classification of Elements"
        }
      ]
    },
    {
      "id": "chemistry.inorganic.chemical_bonding",
      "title": "Chemical Bonding & Molecular Orbitals",
      "parentId": "chemistry.inorganic",
      "prereqIds": [
        "chemistry.inorganic.periodic_properties"
      ],
      "intro": "Lattice energy, Born-Haber cycles, Fajan's rules for covalent character. Lewis structures and formal charge. VSEPR molecular geometry prediction. Valence Bond orbital hybridization ($sp, sp^2, sp^3, sp^3d, sp^3d^2$). Molecular Orbital Theory (MOT) for homonuclear/heteronuclear diatomics, bond order $\\frac{1}{2}(N_b - N_a)$, and paramagnetic unpaired electrons (e.g. $\\text{O}_2$). Hydrogen bonding.",
      "sources": [
        {
          "id": "src_cb_ncert",
          "title": "NCERT Class 11 — Ch. 4 Chemical Bonding and Molecular Structure"
        }
      ]
    },
    {
      "id": "chemistry.inorganic.coordination",
      "title": "Coordination Compounds",
      "parentId": "chemistry.inorganic",
      "prereqIds": [
        "chemistry.inorganic.chemical_bonding"
      ],
      "intro": "Werner's coordination theory. Monodentate, bidentate, ambidentate, and chelating ligands. IUPAC nomenclature of complexes. Geometrical and optical stereoisomerism. Crystal Field Theory (CFT): $d$-orbital splitting in octahedral ($\\Delta_o$) and tetrahedral ($\\Delta_t = \\frac{4}{9}\\Delta_o$) fields, spectrochemical series, high-spin vs low-spin configurations, and spin-only magnetic moment $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$.",
      "sources": [
        {
          "id": "src_coord_ncert",
          "title": "NCERT Class 12 — Ch. 9 Coordination Compounds"
        }
      ]
    },
    {
      "id": "chemistry.organic",
      "title": "Organic Chemistry",
      "parentId": "chemistry",
      "prereqIds": [],
      "intro": "Reaction mechanisms, stereochemistry, electron delocalization, functional group synthesis, and spectroscopy.",
      "sources": [
        {
          "id": "src_oc_sykes",
          "title": "Peter Sykes — A Guidebook to Mechanism in Organic Chemistry"
        }
      ]
    },
    {
      "id": "chemistry.organic.reaction_mechanisms",
      "title": "Reaction Mechanisms & Intermediates",
      "parentId": "chemistry.organic",
      "prereqIds": [
        "chemistry.inorganic.chemical_bonding"
      ],
      "intro": "Inductive, electromeric, resonance/mesomeric, and hyperconjugation electronic effects. Reactive intermediates: carbocations (stability order $3^\\circ > 2^\\circ > 1^\\circ$, 1,2-hydride and methyl shifts), carbanions, free radicals. Electrophiles and nucleophiles. Acid-base strength in organic compounds ($pK_a$ trends, aromaticity via Hückel's $4n+2$ rule).",
      "sources": [
        {
          "id": "src_goc_ncert",
          "title": "NCERT Class 11 — Ch. 12 Organic Chemistry: Basic Principles"
        }
      ]
    },
    {
      "id": "chemistry.organic.hydrocarbons_halides",
      "title": "Alkyl Halides & Substitution / Elimination",
      "parentId": "chemistry.organic",
      "prereqIds": [
        "chemistry.organic.reaction_mechanisms"
      ],
      "intro": "Free radical halogenation. Electrophilic addition to alkenes: Markovnikov rule, peroxide anti-Markovnikov effect, ozonolysis. Nucleophilic substitution: $S_N1$ (two-step, carbocation intermediate, racemization, tertiary favored) vs $S_N2$ (one-step concerted, backside attack, Walden inversion, primary favored). Elimination: $E1$ vs $E2$, Zaitsev's rule (more substituted alkene) vs Hofmann rule.",
      "sources": [
        {
          "id": "src_hh_ncert",
          "title": "NCERT Class 12 — Ch. 10 Haloalkanes and Haloarenes"
        }
      ]
    },
    {
      "id": "chemistry.organic.carbonyls",
      "title": "Aldehydes, Ketones & Carboxylic Acids",
      "parentId": "chemistry.organic",
      "prereqIds": [
        "chemistry.organic.hydrocarbons_halides"
      ],
      "intro": "Polar carbonyl group ($C=O$), nucleophilic addition mechanisms (cyanohydrin, hemiacetal, Grignard additions). Alpha-hydrogen acidity. Aldol condensation (cross and intramolecular), Cannizzaro reaction of non-enolizable aldehydes. Haloform reaction with methyl ketones ($\\text{CH}_3\\text{CO}-$). Nucleophilic acyl substitution on carboxylic acid derivatives.",
      "sources": [
        {
          "id": "src_carb_ncert",
          "title": "NCERT Class 12 — Ch. 12 Aldehydes, Ketones and Carboxylic Acids"
        }
      ]
    },
    {
      "id": "math.calculus",
      "title": "Calculus & Analysis",
      "parentId": "math",
      "prereqIds": [],
      "intro": "Limits, derivatives, integration techniques, ordinary differential equations, and vector fields.",
      "sources": [
        {
          "id": "src_calc_spivak",
          "title": "Michael Spivak — Calculus (4th ed.)"
        }
      ]
    },
    {
      "id": "math.calculus.limits_continuity",
      "title": "Limits, Continuity & Derivatives",
      "parentId": "math.calculus",
      "prereqIds": [],
      "intro": "Formal limit definition $\\lim_{x\\to a} f(x) = L$. L'Hôpital's rule for indeterminate forms $0/0$ and $\\infty/\\infty$. Squeeze theorem. Continuity condition $\\lim_{x\\to c} f(x) = f(c)$. Differentiability as linear approximation: $f'(x) = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$. Product, quotient, and chain rules. Mean Value Theorems (Rolle's and Lagrange's: $f'(c) = \\frac{f(b)-f(a)}{b-a}$).",
      "sources": [
        {
          "id": "src_lim_cengage",
          "title": "Cengage Mathematics — Calculus (Part 1)"
        }
      ]
    },
    {
      "id": "math.calculus.integration",
      "title": "Integral Calculus & Differential Equations",
      "parentId": "math.calculus",
      "prereqIds": [
        "math.calculus.limits_continuity"
      ],
      "intro": "Indefinite integrals, substitution, integration by parts $\\int u\\,dv = uv - \\int v\\,du$, partial fractions. Fundamental Theorem of Calculus: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. Definite integral symmetry properties, King's rule $\\int_a^b f(x)\\,dx = \\int_a^b f(a+b-x)\\,dx$. First-order linear differential equations with integrating factor $I = e^{\\int P(x)dx}$.",
      "sources": [
        {
          "id": "src_int_cengage",
          "title": "Cengage Mathematics — Calculus (Part 2)"
        }
      ]
    },
    {
      "id": "math.calculus.multivariable",
      "title": "Multivariable & Vector Calculus",
      "parentId": "math.calculus",
      "prereqIds": [
        "math.calculus.integration"
      ],
      "intro": "Scalar and vector fields on $\\mathbb{R}^3$. Partial derivatives, total differential $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy + \\frac{\\partial f}{\\partial z}dz$. Gradient vector $\\nabla f$, directional derivative $D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}$. Divergence $\\nabla \\cdot \\mathbf{F}$, Curl $\\nabla \\times \\mathbf{F}$. Green's theorem, divergence theorem, and Stokes' theorem $\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$.",
      "sources": [
        {
          "id": "src_mvc_hubbard",
          "title": "Hubbard & Hubbard — Vector Calculus and Differential Forms"
        }
      ]
    },
    {
      "id": "math.algebra",
      "title": "Algebra & Coordinate Geometry",
      "parentId": "math",
      "prereqIds": [],
      "intro": "Matrix transformations, conic sections, permutations, combinatorics, and probability theory.",
      "sources": [
        {
          "id": "src_alg_strang",
          "title": "Gilbert Strang — Introduction to Linear Algebra"
        }
      ]
    },
    {
      "id": "math.algebra.matrices",
      "title": "Matrices & Linear Systems",
      "parentId": "math.algebra",
      "prereqIds": [],
      "intro": "Matrix multiplication, transpose, symmetric and skew-symmetric matrices. Determinant expansion and invariance properties. Adjoint and matrix inverse $A^{-1} = \\frac{1}{\\det A}\\operatorname{adj}(A)$. Solving linear systems via Cramer's rule and Gaussian elimination. Characteristic equation $\\det(A - \\lambda I) = 0$, eigenvalues and eigenvectors, Cayley-Hamilton theorem.",
      "sources": [
        {
          "id": "src_mat_cengage",
          "title": "Cengage Mathematics — Algebra (Matrices & Determinants)"
        }
      ]
    },
    {
      "id": "math.algebra.coordinate_geom",
      "title": "Coordinate Geometry & Conic Sections",
      "parentId": "math.algebra",
      "prereqIds": [
        "math.calculus.limits_continuity"
      ],
      "intro": "Straight line equations, perpendicular distance $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2+b^2}}$. Circles $x^2 + y^2 + 2gx + 2fy + c = 0$. Conic sections by eccentricity $e$: Parabola ($e=1$, $y^2 = 4ax$), Ellipse ($e<1$, $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$), Hyperbola ($e>1$, $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$). Tangents, normals, and focal chord properties.",
      "sources": [
        {
          "id": "src_cg_loney",
          "title": "SL Loney — Elements of Coordinate Geometry"
        }
      ]
    },
    {
      "id": "math.algebra.probability_discrete",
      "title": "Probability & Combinatorics",
      "parentId": "math.algebra",
      "prereqIds": [],
      "intro": "Fundamental counting principle, Permutations $P(n,r) = \\frac{n!}{(n-r)!}$, Combinations $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Binomial theorem $(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k}b^k$. Conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. Total probability and Bayes' theorem: $P(B_i|A) = \\frac{P(A|B_i)P(B_i)}{\\sum P(A|B_j)P(B_j)}$. Random variables, binomial and normal distributions.",
      "sources": [
        {
          "id": "src_prob_blitz",
          "title": "Blitzstein & Hwang — Introduction to Probability"
        }
      ]
    },
    {
      "id": "cs.algorithms",
      "title": "Algorithms & Machine Learning",
      "parentId": "cs",
      "prereqIds": [],
      "intro": "Data structures, graph search, dynamic programming, and statistical learning optimization.",
      "sources": [
        {
          "id": "src_cs_bishop",
          "title": "Christopher Bishop — Pattern Recognition and Machine Learning"
        }
      ]
    },
    {
      "id": "cs.algorithms.data_structures",
      "title": "Linear & Tree Data Structures",
      "parentId": "cs.algorithms",
      "prereqIds": [],
      "intro": "Asymptotic complexity (Big-$O, \\Omega, \\Theta$). Dynamic arrays, amortized doubling. Stacks and queues with $O(1)$ operations. Binary Search Trees (BST), AVL self-balancing rotations. Binary heaps, priority queues with $O(\\log n)$ operations. Hash tables: collision resolution via chaining and open addressing, load factor.",
      "sources": [
        {
          "id": "src_ds_clrs",
          "title": "CLRS — Ch. 10 Elementary Data Structures & Ch. 11 Hash Tables"
        }
      ]
    },
    {
      "id": "cs.algorithms.graph_algorithms",
      "title": "Graph Search & Dynamic Programming",
      "parentId": "cs.algorithms",
      "prereqIds": [
        "cs.algorithms.data_structures"
      ],
      "intro": "Graph representations: adjacency matrix vs adjacency list. Breadth-First Search (BFS) for shortest paths in unweighted graphs in $O(V+E)$. Depth-First Search (DFS) for topological sorting and cycle detection. Dijkstra's shortest path algorithm using min-heaps in $O((V+E)\\log V)$. Minimum spanning trees via Kruskal and Prim. Dynamic programming: memoization, tabulation, and optimal substructure.",
      "sources": [
        {
          "id": "src_ga_clrs",
          "title": "CLRS — Ch. 22 Graph Algorithms & Ch. 24 Shortest Paths"
        },
        {
          "id": "src_ga_kt",
          "title": "Kleinberg & Tardos — Algorithm Design"
        }
      ]
    },
    {
      "id": "cs.algorithms.machine_learning",
      "title": "Machine Learning Foundations",
      "parentId": "cs.algorithms",
      "prereqIds": [
        "cs.algorithms.graph_algorithms",
        "math.calculus.multivariable",
        "math.algebra.matrices",
        "math.algebra.probability_discrete"
      ],
      "intro": "Supervised vs unsupervised learning. Linear regression, Mean Squared Error (MSE) loss function $J(\\theta) = \\frac{1}{2m}\\sum (h_\\theta(x^{(i)}) - y^{(i)})^2$. Gradient descent parameter updates $\\theta_j := \\theta_j - \\alpha \\frac{\\partial J}{\\partial \\theta_j}$. Logistic regression and cross-entropy loss. Regularization (L1 Lasso, L2 Ridge) and bias-variance tradeoff. Neural network backpropagation via matrix chain rule.",
      "sources": [
        {
          "id": "src_ml_bishop",
          "title": "Bishop — Pattern Recognition and Machine Learning (Ch. 1–3)"
        },
        {
          "id": "src_ml_cs229",
          "title": "Andrew Ng — Stanford CS229 Machine Learning Notes"
        }
      ]
    }
  ]
};
