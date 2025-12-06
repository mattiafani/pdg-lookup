// Elementary particles and common composites (dictionary lookup)
const PDG = {
    // Leptons
    11: "electron (e-)",
    "-11": "positron (e+)",
    13: "muon (mu-)",
    "-13": "anti-muon (mu+)",
    15: "tau (tau-)",
    "-15": "anti-tau (tau+)",
    
    // Neutrinos
    12: "electron neutrino",
    "-12": "electron anti-neutrino",
    14: "muon neutrino",
    "-14": "muon anti-neutrino",
    16: "tau neutrino",
    "-16": "tau anti-neutrino",
    
    // Gauge bosons
    22: "photon",
    23: "Z boson",
    24: "W+ boson",
    "-24": "W- boson",
    21: "gluon",
    
    // Quarks
    1: "down quark",
    "-1": "anti-down quark",
    2: "up quark",
    "-2": "anti-up quark",
    3: "strange quark",
    "-3": "anti-strange quark",
    4: "charm quark",
    "-4": "anti-charm quark",
    5: "bottom quark",
    "-5": "anti-bottom quark",
    6: "top quark",
    "-6": "anti-top quark",
    
    // Pions
    111: "neutral pion (pi0)",
    211: "positive pion (pi+)",
    "-211": "negative pion (pi-)",
    
    // Kaons
    130: "K-long (K0_L)",
    310: "K-short (K0_S)",
    311: "neutral kaon (K0)",
    321: "positive kaon (K+)",
    "-321": "negative kaon (K-)",
    
    // Baryons
    2212: "proton",
    "-2212": "anti-proton",
    2112: "neutron",
    "-2112": "anti-neutron",
    3122: "Lambda (Lambda0)",
    "-3122": "anti-Lambda",
    3222: "Sigma plus",
    3212: "Sigma zero",
    3112: "Sigma minus",
    3322: "Xi zero",
    3312: "Xi minus",
    3334: "Omega minus"
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
    var isAnti = code < 0;
    var absCode = Math.abs(code);
    
    var codeStr = absCode.toString();
    if (codeStr.length !== 10 || codeStr.substring(0, 2) !== "10") {
        return null;
    }
    
    var L = parseInt(codeStr[2]);
    var Z = parseInt(codeStr.substring(3, 6));
    var A = parseInt(codeStr.substring(6, 9));
    var I = parseInt(codeStr[9]);
    
    if (Z > ELEMENTS.length - 1 || Z < 0 || A < Z) {
        return null;
    }
    
    var element = ELEMENTS[Z];
    var N = A - Z;
    
    var name = "";
    if (isAnti) {
        name += "anti-";
    }
    
    if (L > 0) {
        name += "Lambda-" + L + " ";
    }
    
    name += element + "-" + A;
    
    if (I > 0) {
        name += " (isomer level " + I + ")";
    }
    
    name += " (Z=" + Z + ", N=" + N + ", A=" + A;
    if (L > 0) {
        name += ", Lambda=" + L;
    }
    name += ")";
    
    return name;
}

function lookup() {
    var input = document.getElementById("pdgInput").value.trim();
    var code = parseInt(input, 10);
    var resultDiv = document.getElementById("result");
    
    if (isNaN(code) || input === "") {
        resultDiv.innerHTML = "<span style='color: red'>Please enter a valid PDG code</span>";
        return;
    }
    
    if (PDG[code] !== undefined) {
        resultDiv.innerHTML = "Particle: <span style='color: green; font-weight: bold'>" + PDG[code] + "</span>";
        return;
    }
    
    var nuclearName = decodeNucleus(code);
    if (nuclearName) {
        resultDiv.innerHTML = "Nucleus: <span style='color: blue; font-weight: bold'>" + nuclearName + "</span>";
        return;
    }
    
    resultDiv.innerHTML = "<span style='color: red'>Unknown PDG code: " + code + "</span>";
}

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("pdgInput");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                lookup();
            }
        });
    }
});
