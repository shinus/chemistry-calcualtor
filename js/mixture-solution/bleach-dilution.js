let dropOptions = [
    { value: "l", name: "liters" },
    { value: "gal_us", name: "gallons(US)" },
    { value: "gal_uk", name: "gallons(UK)" },
    { value: "fl_oz_us", name: "fluid ounces(US)" },
    { value: "fl_oz_uk", name: "fluid ounces(UK)" },
    { value: "ml", name: "milliliters" },
    { value: "cups", name: "cups" },
    { value: "pints", name: "pints" },
    { value: "quarts", name: "quarts" },
    { value: "tablespoons", name: "tablespoons" },
    { value: "teaspoons", name: "teaspoons" },
    { value: "cubic_inches", name: "cubic inches" },
    { value: "cubic_feet", name: "cubic feet" },
    { value: "cubic_cm", name: "cubic centimeters" },
    { value: "cubic_m", name: "cubic meters" }
];
let chlorine_concentration_options = [
    { value: "ppm", name: "parts per million" },
    { value: "g/L", name: "grams per liter" },
    { value: "mg/L", name: "miligrams per liter" },
    { value: "g/dL", name: "grams per deciliter" },
    { value: "mg/dL", name: "miligrams per deciliter" }
];

let bleach_concentration = document.getElementById("input1");
let chlorine_concentration = document.getElementById("input2");
let chlorine_volume = document.getElementById("input3");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

bleach_concentration.placeholder = "%";



calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';



dropOptions.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop3.add(opt);
    inputdrop4.add(opt.cloneNode(true)); // Clone the option for the second dropdown
});

chlorine_concentration_options.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    
});

function convertToMgPerL(concentration, unit) {
    const conversionFactors = {
        "ppm": 1,
        "mg/L": 1,
        "g/L": 1000,
        "g/dL": 10000,
        "mg/dL": 10
    };
    return concentration * conversionFactors[unit];
}

// Convert from mg/L to the desired chlorine concentration unit
function convertFromMgPerL(concentration, unit) {
    const conversionFactors = {
        "ppm": 1,
        "mg/L": 1,
        "g/L": 0.001,
        "g/dL": 0.0001,
        "mg/dL": 0.1
    };
    return concentration * conversionFactors[unit];
}
function calculate() {
    let bleachConc = parseFloat(bleach_concentration.value.replace('%', '')) / 100; // Convert percentage to a fraction
    let chlorineUnit = inputdrop2.value;
    let desiredChlorineConc = convertToMgPerL(parseFloat(chlorine_concentration.value), chlorineUnit);
    let desiredVolume = parseFloat(chlorine_volume.value);
    let volumeUnit = inputdrop3.value;
    let bleachUnit = inputdrop4.value;

    // Convert everything to a common unit (liters) for calculation
    let volumeInLiters = convertToLiters(desiredVolume, volumeUnit);
    
    // Calculate the amount of bleach needed in mg
    let bleachAmountMg = desiredChlorineConc * volumeInLiters;

    // Calculate the volume of bleach needed in mL
   // let bleachVolumeMl = (bleachAmountMg * 0.00105) / bleachConc;
    let bleachVolumeMl = bleachAmountMg / (bleachConc * 1000);


    // Convert bleach volume to desired unit
    let bleachVolumeInDesiredUnit = convertFromLiters(bleachVolumeMl, bleachUnit);

    result.textContent = `You need ${bleachVolumeInDesiredUnit.toFixed(2)} ${bleachUnit} of bleach to achieve the desired concentration.`;
}





function convertToLiters(volume, unit) {
    const conversionFactors = {
        "l": 1,
        "gal_us": 3.78541,
        "gal_uk": 4.54609,
        "fl_oz_us": 0.0295735,
        "fl_oz_uk": 0.0284131,
        "ml": 0.001,
        "cups": 0.237,
        "pints": 0.473,
        "quarts": 0.946,
        "tablespoons": 0.0148,
        "teaspoons": 0.00493,
        "cubic_inches": 0.0164,
        "cubic_feet": 28.3168,
        "cubic_cm": 0.001,
        "cubic_m": 1000
    };
    return volume * conversionFactors[unit];
}

function convertFromLiters(volume, unit) {
    const conversionFactors = {
        "l": 1,
        "gal_us": 0.264172,
        "gal_uk": 0.219969,
        "fl_oz_us": 33.814,
        "fl_oz_uk": 35.1951,
        "ml": 1000,
        "cups": 4.22675,
        "pints": 2.11338,
        "quarts": 1.05669,
        "tablespoons": 67.628,
        "teaspoons": 202.884,
        "cubic_inches": 61.0237,
        "cubic_feet": 0.035315,
        "cubic_cm": 1000,
        "cubic_m": 0.001
    };
    return volume * conversionFactors[unit];
}

console.log('bleach dilution calculator v14');

