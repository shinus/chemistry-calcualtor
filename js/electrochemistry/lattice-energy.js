const cationsArray = [
    { symbol: "Cs", cationRadius: 167, cationCharge: +1 }, // Cesium
    { symbol: "Be", cationRadius: 45, cationCharge: +2 },  // Beryllium
    { symbol: "Ca", cationRadius: 100, cationCharge: +2 }, // Calcium
    { symbol: "Sr", cationRadius: 118, cationCharge: +2 }, // Strontium
    { symbol: "K", cationRadius: 138, cationCharge: +1 },  // Potassium
    { symbol: "Mg", cationRadius: 72, cationCharge: +2 },  // Magnesium
    { symbol: "Li", cationRadius: 76, cationCharge: +1 },  // Lithium
    { symbol: "Na", cationRadius: 102, cationCharge: +1 }, // Sodium
    { symbol: "Rb", cationRadius: 148, cationCharge: +1 }, // Rubidium
    { symbol: "Ba", cationRadius: 149, cationCharge: +2 }, // Barium
];

const anionsArray = [
    { symbol: "F", anionRadius: 133, anionCharge: -1 },  // Fluorine
    { symbol: "O", anionRadius: 140, anionCharge: -2 },  // Oxygen
    { symbol: "S", anionRadius: 184, anionCharge: -2 },  // Sulfur
    { symbol: "Cl", anionRadius: 181, anionCharge: -1 }, // Chlorine
    { symbol: "N", anionRadius: 146, anionCharge: -3 },  // Nitrogen
    { symbol: "Br", anionRadius: 196, anionCharge: -1 }, // Bromine
    { symbol: "Te", anionRadius: 211, anionCharge: -2 }, // Bromine
    { symbol: "I", anionRadius: 220, anionCharge: -1 }, // Bromine
];

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop3 = document.getElementById("inputdrop3");

let input1 = document.getElementById("input1");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

cationsArray.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.symbol;
    opt.text = option.symbol;
    inputdrop1.add(opt);
});

anionsArray.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.symbol;
    opt.text = option.symbol;
    inputdrop3.add(opt);
});

inputdrop1.addEventListener('change', () => {
    const selectedCation = cationsArray.find((cation) => cation.symbol === inputdrop1.value);
    if (selectedCation) {
        input1.value = selectedCation.cationCharge;
        input2.value = selectedCation.cationRadius;
    }
});

inputdrop3.addEventListener('change', () => {
    const selectedAnion = anionsArray.find((anion) => anion.symbol === inputdrop3.value);
    if (selectedAnion) {
        input3.value = selectedAnion.anionCharge;
        input4.value = selectedAnion.anionRadius;
    }
});

function calculate() {
    const cationCharge = Math.abs(parseFloat(input1.value)); // Use absolute value of charge
    const anionCharge = Math.abs(parseFloat(input3.value)); // Use absolute value of charge

    if (!isNaN(cationCharge) && !isNaN(anionCharge)) {
        // Constants for Kapustinskii equation
        const K = 1.202e-4; // J·m/mol
        const d = 3.45e-11; // m

        // Convert radii from pm to m
        const cationRadius = parseFloat(input2.value) * 1e-12; // m
        const anionRadius = parseFloat(input4.value) * 1e-12; // m

        // Calculate the number of ions in the formula unit
        const nu = cationCharge * anionCharge / gcd(cationCharge, anionCharge); // Use gcd function to find the greatest common divisor

        // Use the correct formula for the Kapustinskii equation
        let latticeEnergy = K * nu * cationCharge * anionCharge / (cationRadius + anionRadius) * (1 - d / (cationRadius + anionRadius));

        latticeEnergy  = latticeEnergy /2 

        result.textContent = `Lattice Energy: ${latticeEnergy.toFixed(2)} J/mol`;
    } else {
        result.textContent = "Please enter valid charges for the cation and anion.";
    }
}

// Helper function to find the greatest common divisor of two numbers
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}
