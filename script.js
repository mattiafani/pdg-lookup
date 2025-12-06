const PDG = {
    11: "e⁻ (electron)",
    -11: "e⁺ (positron)",
    13: "μ⁻ (muon)",
    -13: "μ⁺ (anti-muon)",
    211: "π⁺",
    -211: "π⁻",
    111: "π⁰",
    2212: "proton",
    -2212: "anti-proton",
    2112: "neutron",
    -2112: "anti-neutron",
    22: "γ (photon)",
    12: "νₑ",
    -12: "ν̄ₑ",
    14: "ν_μ",
    -14: "ν̄_μ",
    16: "ν_τ",
    -16: "ν̄_τ"
};

function lookup() {
    const code = parseInt(document.getElementById("pdgInput").value);
    const resultDiv = document.getElementById("result");

    if (PDG[code]) {
        resultDiv.innerHTML = `Particle: <span style="color: green">${PDG[code]}</span>`;
    } else {
        resultDiv.innerHTML = "<span style='color: red'>Unknown PDG code</span>";
    }
}

