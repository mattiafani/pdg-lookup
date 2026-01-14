// Elementary particles and common composites (dictionary lookup)
const PDG = {
    11: "electron (e-)",
    "-11": "positron (e+)",
    13: "muon (mu-)",
    "-13": "anti-muon (mu+)",
    15: "tau (tau-)",
    "-15": "anti-tau (tau+)",
    12: "electron neutrino",
    "-12": "electron anti-neutrino",
    14: "muon neutrino",
    "-14": "muon anti-neutrino",
    16: "tau neutrino",
    "-16": "tau anti-neutrino",
    22: "photon",
    23: "Z boson",
    24: "W+ boson",
    "-24": "W- boson",
    21: "gluon",
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
    111: "neutral pion (pi0)",
    211: "positive pion (pi+)",
    "-211": "negative pion (pi-)",
    130: "K-long (K0_L)",
    310: "K-short (K0_S)",
    311: "neutral kaon (K0)",
    321: "positive kaon (K+)",
    "-321": "negative kaon (K-)",
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

// Particle properties and facts (including liquid argon interaction data)
const PARTICLE_INFO = {
    22: { 
        mass: "0", 
        charge: "0", 
        spin: "1", 
        type: "Gauge boson", 
        stability: "Stable",
        "LAr radiation length": "14 cm",
        "LAr pair production threshold": "1.022 MeV",
        "LAr critical energy": "~40 MeV",
        "LAr scintillation yield": "~40,000 photons/MeV",
        "LAr photon attenuation": "~200 cm (128 nm)"
    },
    11: { 
        mass: "0.511 MeV/c²", 
        charge: "-1e", 
        spin: "1/2", 
        type: "Lepton", 
        stability: "Stable",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr radiation length": "14 cm",
        "LAr critical energy": "~40 MeV",
        "LAr range (1 MeV)": "~0.4 cm",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV (W-value: 23.6 eV)",
        "LAr scintillation yield": "~40,000 photons/MeV",
        "LAr recombination (MIP)": "~30% at 500 V/cm"
    },
    "-11": { 
        mass: "0.511 MeV/c²", 
        charge: "+1e", 
        spin: "1/2", 
        type: "Lepton", 
        stability: "Stable",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr radiation length": "14 cm",
        "LAr critical energy": "~40 MeV",
        "LAr range (1 MeV)": "~0.4 cm",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV",
        "LAr scintillation yield": "~40,000 photons/MeV",
        "LAr annihilation": "→ 2γ at rest"
    },
    13: { 
        mass: "105.66 MeV/c²", 
        charge: "-1e", 
        spin: "1/2", 
        type: "Lepton", 
        stability: "2.2 μs",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr range (1 GeV)": "~6 m",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV",
        "LAr scintillation yield": "~40,000 photons/MeV",
        "LAr recombination (MIP)": "~30% at 500 V/cm"
    },
    2212: { 
        mass: "938.272 MeV/c²", 
        charge: "+1e", 
        spin: "1/2", 
        type: "Baryon", 
        stability: "Stable",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr dE/dx (peak)": "~8-10 MeV/cm (Bragg peak)",
        "LAr range (100 MeV)": "~1 cm",
        "LAr range (1 GeV)": "~40 cm",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV",
        "LAr scintillation yield": "~40,000 photons/MeV",
        "LAr quenching factor": "~0.7 (low energy)",
        "LAr recombination": "Energy dependent, ~50-80%"
    },
    "-2212": { 
        mass: "938.272 MeV/c²", 
        charge: "-1e", 
        spin: "1/2", 
        type: "Baryon", 
        stability: "Stable",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr annihilation": "→ pions at rest",
        "LAr annihilation energy": "~1876 MeV"
    },
    2112: { 
        mass: "939.565 MeV/c²", 
        charge: "0", 
        spin: "1/2", 
        type: "Baryon", 
        stability: "~15 min (free)",
        "LAr interaction": "Nuclear scattering",
        "LAr mean free path": "~50 cm (thermal)",
        "LAr nuclear recoil": "Detectable via ionization",
        "LAr recoil quenching": "~25% (Lindhard model)",
        "LAr capture cross section": "~0.6 barn (Ar-40)"
    },
    211: { 
        mass: "139.57 MeV/c²", 
        charge: "+1e", 
        spin: "0", 
        type: "Meson", 
        stability: "26 ns",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr range (100 MeV)": "~5 cm",
        "LAr decay length (100 MeV)": "~0.6 cm",
        "LAr decay mode": "→ μ + νμ (99.99%)",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV",
        "LAr scintillation yield": "~40,000 photons/MeV"
    },
    "-211": { 
        mass: "139.57 MeV/c²", 
        charge: "-1e", 
        spin: "0", 
        type: "Meson", 
        stability: "26 ns",
        "LAr dE/dx (MIP)": "~2.12 MeV/cm",
        "LAr range (100 MeV)": "~5 cm",
        "LAr decay length (100 MeV)": "~0.6 cm",
        "LAr decay mode": "→ μ + νμ (99.99%)",
        "LAr ionization yield": "~4.2×10⁴ e⁻/MeV",
        "LAr scintillation yield": "~40,000 photons/MeV"
    },
    111: { 
        mass: "134.98 MeV/c²", 
        charge: "0", 
        spin: "0", 
        type: "Meson", 
        stability: "8.4×10⁻¹⁷ s",
        "LAr decay": "→ 2γ (98.8%)",
        "LAr decay length": "<1 nm",
        "LAr signature": "Electromagnetic shower from photons"
    },
    12: {
        type: "Lepton",
        mass: "< 1 eV/c²",
        charge: "0",
        spin: "1/2",
        stability: "Stable",
        "LAr cross section (1 GeV)": "~10⁻³⁸ cm²",
        "LAr interaction": "Weak only (CC/NC)",
        "LAr mean free path": "~10¹⁵ cm (detection unlikely)",
        "LAr CC interaction": "νe + Ar → e⁻ + X",
        "LAr detection": "Via charged lepton production"
    },
    14: {
        type: "Lepton",
        mass: "< 0.19 MeV/c²",
        charge: "0",
        spin: "1/2",
        stability: "Stable",
        "LAr cross section (1 GeV)": "~10⁻³⁸ cm²",
        "LAr interaction": "Weak only (CC/NC)",
        "LAr mean free path": "~10¹⁵ cm",
        "LAr CC interaction": "νμ + Ar → μ⁻ + X",
        "LAr detection": "Via muon production"
    }
};

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

// Calculate nuclear mass using semi-empirical mass formula (SEMF)
function calculateNuclearMass(Z, A) {
    var N = A - Z;
    
    // Constants (in MeV)
    var protonMass = 938.272;
    var neutronMass = 939.565;
    var electronMass = 0.511;
    
    // SEMF coefficients (in MeV)
    var aV = 15.75;  // Volume term
    var aS = 17.8;   // Surface term
    var aC = 0.711;  // Coulomb term
    var aA = 23.7;   // Asymmetry term
    var aP = 11.18;  // Pairing term
    
    // Binding energy from SEMF
    var volumeTerm = aV * A;
    var surfaceTerm = -aS * Math.pow(A, 2/3);
    var coulombTerm = -aC * Z * Z / Math.pow(A, 1/3);
    var asymmetryTerm = -aA * Math.pow(N - Z, 2) / A;
    
    // Pairing term
    var pairingTerm = 0;
    if (N % 2 === 0 && Z % 2 === 0) {
        pairingTerm = aP / Math.sqrt(A);  // Even-even
    } else if (N % 2 === 1 && Z % 2 === 1) {
        pairingTerm = -aP / Math.sqrt(A); // Odd-odd
    }
    
    var bindingEnergy = volumeTerm + surfaceTerm + coulombTerm + asymmetryTerm + pairingTerm;
    
    // Nuclear mass = sum of nucleon masses - binding energy
    var nuclearMass = Z * protonMass + N * neutronMass - bindingEnergy;
    
    // Atomic mass = nuclear mass + electron masses
    var atomicMass = nuclearMass + Z * electronMass;
    
    return {
        nuclear: nuclearMass.toFixed(3),
        atomic: atomicMass.toFixed(3),
        binding: bindingEnergy.toFixed(3),
        bindingPerNucleon: (bindingEnergy / A).toFixed(3)
    };
}

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
    
    // Calculate mass
    var masses = calculateNuclearMass(Z, A);
    
    return {
        name: name,
        Z: Z,
        N: N,
        A: A,
        L: L,
        I: I,
        element: element,
        atomicMass: masses.atomic,
        nuclearMass: masses.nuclear,
        bindingEnergy: masses.binding,
        bindingPerNucleon: masses.bindingPerNucleon
    };
}

function displayParticleInfo(name, info, type) {
    var html = '<div class="particle-name ' + type + '">' + name + '</div>';
    
    if (info) {
        html += '<div class="particle-info">';
        for (var key in info) {
            if (info.hasOwnProperty(key)) {
                var label = key.charAt(0).toUpperCase() + key.slice(1);
                html += '<div class="info-item">';
                html += '<div class="info-label">' + label + ':</div>';
                html += '<div class="info-value">' + info[key] + '</div>';
                html += '</div>';
            }
        }
        html += '</div>';
    }
    
    return html;
}

function lookup() {
    var input = document.getElementById("pdgInput").value.trim();
    var code = parseInt(input, 10);
    var resultDiv = document.getElementById("result");
    
    if (isNaN(code) || input === "") {
        resultDiv.innerHTML = displayParticleInfo("Please enter a valid PDG code", null, "error");
        return;
    }
    
    if (PDG[code] !== undefined) {
        var info = PARTICLE_INFO[code] || null;
        resultDiv.innerHTML = displayParticleInfo(PDG[code], info, "elementary");
        return;
    }
    
    var nucleus = decodeNucleus(code);
    if (nucleus) {
        var nuclearInfo = {
            "Atomic mass": nucleus.atomicMass + " MeV/c²",
            "Nuclear mass": nucleus.nuclearMass + " MeV/c²",
            "Binding energy": nucleus.bindingEnergy + " MeV",
            "Binding per nucleon": nucleus.bindingPerNucleon + " MeV/nucleon",
            "Atomic Number (Z)": nucleus.Z,
            "Neutron Number (N)": nucleus.N,
            "Mass Number (A)": nucleus.A,
            "Element": nucleus.element
        };
        if (nucleus.L > 0) {
            nuclearInfo["Lambda quarks"] = nucleus.L;
        }
        if (nucleus.I > 0) {
            nuclearInfo["Isomer level"] = nucleus.I;
        }
        
        resultDiv.innerHTML = displayParticleInfo(nucleus.name, nuclearInfo, "nucleus");
        return;
    }
    
    resultDiv.innerHTML = displayParticleInfo("Unknown PDG code: " + code, null, "error");
}

function getTodayDateString() {
    var today = new Date();
    return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}

function getDailyQuoteIndex() {
    var dateStr = getTodayDateString();
    var hash = 0;
    for (var i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash) % QUOTES.length;
}

function setRandomQuote() {
    var today = getTodayDateString();
    var storedDate = localStorage.getItem("quoteDate");
    var storedQuote = localStorage.getItem("quoteText");
    var storedAuthor = localStorage.getItem("quoteAuthor");
    
    if (storedDate === today && storedQuote && storedAuthor) {
        document.getElementById("quoteText").textContent = storedQuote;
        document.getElementById("quoteAuthor").textContent = storedAuthor;
        return;
    }
    
    fetch("https://api.quotable.io/quotes/random?tags=science|technology")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data && data[0]) {
                var quoteText = '"' + data[0].content + '"';
                var quoteAuthor = "— " + data[0].author;
                
                document.getElementById("quoteText").textContent = quoteText;
                document.getElementById("quoteAuthor").textContent = quoteAuthor;
                
                localStorage.setItem("quoteDate", today);
                localStorage.setItem("quoteText", quoteText);
                localStorage.setItem("quoteAuthor", quoteAuthor);
            } else {
                setLocalQuote();
            }
        })
        .catch(function() {
            setLocalQuote();
        });
}

function setLocalQuote() {
    var index = getDailyQuoteIndex();
    var quote = QUOTES[index];
    var quoteText = '"' + quote.text + '"';
    var quoteAuthor = "— " + quote.author;
    
    document.getElementById("quoteText").textContent = quoteText;
    document.getElementById("quoteAuthor").textContent = quoteAuthor;
    
    var today = getTodayDateString();
    localStorage.setItem("quoteDate", today);
    localStorage.setItem("quoteText", quoteText);
    localStorage.setItem("quoteAuthor", quoteAuthor);
}

// Physics quotes - expanded collection with fallback
const QUOTES = [
    { text: "The most incomprehensible thing about the world is that it is comprehensible.", author: "Albert Einstein" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.", author: "Richard Feynman" },
    { text: "The first principle is that you must not fool yourself, and you are the easiest person to fool.", author: "Richard Feynman" },
    { text: "God does not play dice with the universe.", author: "Albert Einstein" },
    { text: "Everything is theoretically impossible, until it is done.", author: "Robert A. Heinlein" },
    { text: "In physics, you don't have to go around making trouble for yourself—nature does it for you.", author: "Frank Wilczek" },
    { text: "Physics isn't the most important thing. Love is.", author: "Richard Feynman" },
    { text: "The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.", author: "Carl Sagan" },
    { text: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
    { text: "Science is not only compatible with spirituality; it is a profound source of spirituality.", author: "Carl Sagan" },
    { text: "An expert is a person who has made all the mistakes that can be made in a very narrow field.", author: "Niels Bohr" },
    { text: "What we observe is not nature itself, but nature exposed to our method of questioning.", author: "Werner Heisenberg" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Reality is merely an illusion, albeit a very persistent one.", author: "Albert Einstein" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "I think nature's imagination is so much greater than man's, she's never going to let us relax.", author: "Richard Feynman" },
    { text: "We are just an advanced breed of monkeys on a minor planet of a very average star.", author: "Stephen Hawking" },
    { text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", author: "Isaac Asimov" },
    { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Hubble" },
    { text: "I would rather have questions that can't be answered than answers that can't be questioned.", author: "Richard Feynman" },
    { text: "In science, there are no shortcuts to truth.", author: "Karl Popper" },
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.", author: "Louis Pasteur" }
];

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("pdgInput");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                lookup();
            }
        });
    }
    
    setRandomQuote();
});