// Elementary particles and common composites (dictionary lookup)
const PDG = {
    // Leptons
    11: "e⁻ (electron)",
    -11: "e⁺ (positron)",
    13: "μ⁻ (muon)",
    -13: "μ⁺ (anti-muon)",
    15: "τ⁻ (tau)",
    -15: "τ⁺ (anti-tau)",
    
    // Neutrinos
    12: "νₑ (electron neutrino)",
    -12: "ν̄ₑ (electron anti-neutrino)",
    14: "νμ (muon neutrino)",
    -14: "ν̄μ (muon anti-neutrino)",
    16: "ντ (tau neutrino)",
    -16: "ν̄τ (tau anti-neutrino)",
    
    // Gauge bosons
    22: "γ (photon)",
    23: "Z⁰ (Z boson)",
    24: "W⁺ (W boson)",
    -24: "W⁻ (W boson)",
    21: "g (gluon)",
    
    // Quarks
    1: "d (down quark)",
    -1: "d̄ (anti-down)",
    2: "u (up quark)",
    -2: "ū (anti-up)",
    3: "s (strange quark)",
    -3: "s̄ (anti-strange)",
    4: "c (charm quark)",
    -4: "c̄ (anti-charm)",
    5: "b (bottom quark)",
    -5: "b̄ (anti-bottom)",
    6: "t (top quark)",
    -6: "t̄ (anti-top)",
    
    // Pions
    111: "π⁰ (neutral pion)",
    211: "π⁺ (positive pion)",
    -211: "π⁻ (negative pion)",
    
    // Kaons
    130: "K⁰_L (K-long)",
    310: "K⁰_S (K-short)",
    311: "K⁰ (neutral kaon)",
    321: "K⁺ (positive kaon)",
    -321: "K⁻ (negative kaon)",
    
    // Baryons
    2212: "p (proton)",
    -2212: "p̄ (anti-proton)",
    2112: "n (neutron)",
    -2112: "n̄ (anti-neutron)",
    3122: "Λ⁰ (Lambda)",
    -3122: "Λ̄⁰ (anti-Lambda)",
    3222: "Σ⁺ (Sigma plus)",
    3212: "Σ⁰ (Sigma zero)",
    3112: "Σ⁻ (Sigma minus)",
    3322: "Ξ⁰ (Xi zero)",
    3312: "Ξ⁻ (Xi minus)",
    3334: "Ω⁻ (Omega minus)",
    
    // Special
    0: "invalid/unknown",
    2000000001: "¹H (hydrogen-1, proton in nucleus context)"
};

// Element names for nuclear notation
const ELEMENTS = [
    "", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
    "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

function decodeNucleus(code) {
    // PDG nuclear code format: ±10LZZZAAAI
    // L = number of strange quarks (Lambda number)
    // Z = atomic number (number of protons)
    // A = mass number (total nucleons)
    // I = isomer level (0 for ground state)
    
    const isAnti = code < 0;
    const absCode = Math.abs(code);
    
    // Check if it's in nuclear format (10-digit number starting with 10)
    const codeStr = absCode.toString();
    if (codeStr.length !== 10 || !codeStr.startsWith("10")) {
        return null;
    }
    
    // Extract components
    const L = parseInt(codeStr[2]);
    const Z = parseInt(codeStr.substring(3, 6));
    const A = parseInt(codeStr.substring(6, 9));
    const I = parseInt(codeStr[9]);
    
    // Validate
    if (Z > ELEMENTS.length - 1 || Z < 0 || A < Z) {
        return null;
    }
    
    const element = ELEMENTS[Z];
    const N = A - Z; // Number of neutrons
    
    let name = `${isAnti ? "anti-" : ""}`;
    
    // Add Lambda prefix if strange quarks present
    if (L > 0) {
        name += "Λ".repeat(L);
    }
    
    name += `${A}${element}`;
    
    // Add isomer notation if excited state
    if (I > 0) {
        name += `*${I}`;
    }
    
    // Add description
    name += ` (Z=${Z}, N=${N}, A=${A}`;
    if (L > 0) {
        name += `, Λ=${L}`;
    }
    if (I > 0) {
        name += `, isomer level ${I}`;
    }
    name += ")";
    
    return name;
}

function lookup() {
    const input = document.getElementById("pdgInput").value.trim();
    const code = parseInt(input, 10);
    const resultDiv = document.getElementById("result");
    
    // Check for invalid input
    if (isNaN(code) || input === "") {
        resultDiv.innerHTML = "<span style='color: red'>Please enter a valid PDG code</span>";
        return;
    }
    
    // First check dictionary
    if (PDG[code] !== undefined) {
        resultDiv.innerHTML = `<span style="color: green; font-weight: bold">${PDG[code]}</span>`;
        return;
    }
    
    // Try to decode as nucleus
    const nuclearName = decodeNucleus(code);
    if (nuclearName) {
        resultDiv.innerHTML = `<span style="color: blue; font-weight: bold">${nuclearName}</span>`;
        return;
    }
    
    // Unknown code
    resultDiv.innerHTML = `<span style='color: red'>Unknown PDG code: ${code}</span>`;
}

// Allow Enter key to trigger lookup
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('pdgInput');
    if (input) {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                lookup();
            }
        });
    }
});
