// Unit conversion factors for pressure units (Pa as the base unit)
const pressureConversionFactors = {
    Pa: 1,
    bar: 100000,
    at: 98066.5,
    atm: 101325,
    torr: 133.322,
    hPa: 100,
    kPa: 1000,
    mmHg: 133.322,
};

// Unit conversion factors for temperature units (Kelvin as the base unit)
const temperatureConversionFactors = {
    K: 1,
    F: 5/9,
    C: 1,
};

// Unit conversion factors for volume units (cubic meters as the base unit)
const volumeConversionFactors = {
    mm3: 1e-9,
    cm3: 1e-6,
    dm3: 1e-3,
    m3: 1,
    "cu in": 0.000016387064,
    "cu ft": 0.0283168466,
    ml: 1e-6,
    l: 0.001,
    "US gal": 0.00378541,
    tbsp: 0.00002218474,
};

// Unit conversion factors for mass units (grams as the base unit)
const massConversionFactors = {
    µg: 0.000001,
    pg: 1e-12,
    mg: 0.001,
    g: 1,
    dag: 10,
    kg: 1000,
};

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

// drop down unit loops
for (const option of Object.keys(pressureConversionFactors)) {
    let opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    inputdrop1.add(opt);
}

for (const option of Object.keys(temperatureConversionFactors)) {
    let opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    inputdrop2.add(opt);
}

for (const option of Object.keys(volumeConversionFactors)) {
    let opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    inputdrop3.add(opt);
}

for (const option of Object.keys(massConversionFactors)) {
    let opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    inputdrop4.add(opt);
}

// Define a function to calculate the molar mass
function calculateMolarMass() {
    const pressureUnit = inputdrop1.value;
    const temperatureUnit = inputdrop2.value;
    const volumeUnit = inputdrop3.value;
    const massUnit = inputdrop4.value;

    const pressure = parseFloat(input1.value) / pressureConversionFactors[pressureUnit];
    const temperature = parseFloat(input2.value) * temperatureConversionFactors[temperatureUnit];
    const volume = parseFloat(input3.value) * volumeConversionFactors[volumeUnit];
    const mass = parseFloat(input4.value) / massConversionFactors[massUnit];

    // Ideal gas constant (R)
    const R = 0.0821; // L.atm/mol.K

    // Calculate the number of moles using the ideal gas law
    const moles = (pressure * volume) / (R * temperature);

    // Calculate molar mass if mass is provided
    let molarMass;
    if (!isNaN(mass)) {
        molarMass = mass / moles;
    } else {
        molarMass = "Mass not provided";
    }

    // Display the result
    result.textContent = molarMass.toFixed(2) + " g/mol";
}

// Add event listener to the "Calculate" button
calcBtn.addEventListener("click", calculateMolarMass);
calcBtn.style.background = 'black';

