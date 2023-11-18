let dropdownmeter = [
    { value: "mm3", name: "cubic millimeters" },
    { value: "cm3", name: "cubic centimeters" },
    { value: "dm3", name: "cubic decimeters" },
    { value: "m3", name: "cubic meters" },
    { value: "cu in", name: "cubic inches" },
    { value: "cu ft", name: "cubic feet" },
    { value: "cu yd", name: "cubic yards" },
    { value: "ml", name: "milliliters" },
    { value: "cl", name: "centiliters" },
    { value: "liters", name: "liters" },
    { value: "US gal", name: "gallons (US)" },
    { value: "UK gal", name: "gallons (UK)" },
    { value: "US fl oz", name: "fluid ounces (US)" },
    { value: "UK fl oz", name: "fluid ounces (UK)" },
    { value: "cups", name: "US customary cups" },
    { value: "tbsp", name: "tablespoons (15ml)" },
    { value: "tsp", name: "teaspoons (5ml)" },
    { value: "US qt", name: "quarts (US)" },
    { value: "UK qt", name: "quarts (UK)" },
    { value: "US pt", name: "pints (US)" },
    { value: "UK pt", name: "pints (UK)" }
];

let dropMolar = [
    { value: "M", name: "molars" },
    { value: "mM", name: "millimolars" },
    { value: "µM", name: "micromolars" },
    { value: "nM", name: "nanomolars" },
    { value: "pM", name: "picomolars" },
    { value: "fM", name: "femtomolars" },
    { value: "aM", name: "attomolars" },
    { value: "zM", name: "zeptomolars" },
    { value: "yM", name: "joktomolars" }
];


  let input1 = document.getElementById("input1");
  let inputdrop1 = document.getElementById('inputdrop1')
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  let calcBtn = document.getElementById("calcBtn");
  let result = document.getElementById("result-section");
  let inputdrop2 = document.getElementById("inputdrop2");
  let inputdrop3 = document.getElementById("inputdrop3");
  let inputdrop4 = document.getElementById("inputdrop4");
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  console.log('code v4')
  calcBtn.addEventListener("click", calculateDilution);
  calcBtn.style.background='black'
  
  dropdownmeter.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop2.add(option);
    inputdrop4.add(option.cloneNode(true))
    inputdrop2.value = "liters";
    inputdrop4.value = "liters";
  });
  
  dropMolar.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop1.add(option);
    inputdrop3.add(option.cloneNode(true));
    inputdrop1.value = "M";
    inputdrop3.value = "M";
  });


// function calculateDilution() {
//     let concentration_initial = parseFloat(input1.value);
//     let volume_initial = parseFloat(input2.value);
//     let concentration_final = parseFloat(input3.value);
//     let volume_final = parseFloat(input4.value);

//     let concentration_initial_drop = parseFloat(inputdrop1.value);
//     let volume_initial_drop = parseFloat(inputdrop2.value);
//     let concentration_final_drop = parseFloat(inputdrop3.value);
//     let volume_final_drop = parseFloat(inputdrop4.value);
    

//     // Calculate using the dilution formula
//     const finalVolume = (initialConcentration * volume_initial) / concentration_final;

//     res.innerText = `To achieve the desired concentration, you'll need a final volume of ${finalVolume.toFixed(2)} liters.`;
// }


function convertToStandardUnit(value, unit) {
    switch (unit) {
        // Molar concentration conversions
        case "M":
            return value;  // Already a standard unit for molarity in this context
        case "mM":
            return value * 1e-3;
        case "µM":
            return value * 1e-6;
        case "nM":
            return value * 1e-9;
        case "pM":
            return value * 1e-12;
        case "fM":
            return value * 1e-15;
        case "aM":
            return value * 1e-18;
        case "zM":
            return value * 1e-21;
        case "yM":
            return value * 1e-24;
        default:
            return value;
    }
}

function convertToStandardMeter(value, unit) {
    switch (unit) {
        // Volume conversions to cubic meters (m³)
        case "mm3":
            return value * 1e-9;  // 1 mm³ is 1e-9 m³
        case "cm3":
            return value * 1e-6;  // 1 cm³ is 1e-6 m³
        case "dm3":
            return value * 1e-3;  // 1 dm³ is 1e-3 m³
        case "m3":
            return value;         // Already in standard unit
        case "cu in":
            return value * 1.6387e-5;  // 1 cubic inch is approximately 1.6387e-5 m³
        case "cu ft":
            return value * 0.0283168;  // 1 cubic foot is approximately 0.0283168 m³
        case "cu yd":
            return value * 0.764555;   // 1 cubic yard is approximately 0.764555 m³
        case "ml":
            return value * 1e-6;      // 1 milliliter is 1e-6 m³
        case "cl":
            return value * 1e-5;      // 1 centiliter is 1e-5 m³
        case "liters":
            return value * 1e-3;      // 1 liter is 1e-3 m³
        case "US gal":
            return value * 0.00378541; // 1 US gallon is approximately 0.00378541 m³
        case "UK gal":
            return value * 0.00454609; // 1 UK gallon is approximately 0.00454609 m³
        case "US fl oz":
            return value * 2.95735e-5; // 1 US fluid ounce is approximately 2.95735e-5 m³
        case "UK fl oz":
            return value * 2.84131e-5; // 1 UK fluid ounce is approximately 2.84131e-5 m³
        case "cups":
            return value * 0.000236588; // 1 US customary cup is approximately 0.000236588 m³
        case "tbsp":
            return value * 1.5e-5;     // 1 tablespoon (15ml) is 1.5e-5 m³
        case "tsp":
            return value * 5e-6;       // 1 teaspoon (5ml) is 5e-6 m³
        case "US qt":
            return value * 0.000946353; // 1 US quart is approximately 0.000946353 m³
        case "UK qt":
            return value * 0.00113652;  // 1 UK quart is approximately 0.00113652 m³
        case "US pt":
            return value * 0.000473176; // 1 US pint is approximately 0.000473176 m³
        case "UK pt":
            return value * 0.000568261; // 1 UK pint is approximately 0.000568261 m³
        default:
            return value;
    }
}
// ... [previous definitions]

// Event Listeners for dynamic update on dropdown change
inputdrop1.addEventListener("change", updateResults);
inputdrop2.addEventListener("change", updateResults);
inputdrop3.addEventListener("change", updateResults);
inputdrop4.addEventListener("change", updateResults);

// Function to update results dynamically
function updateResults() {
    let filledInputs = 0;

    if (input1.value) filledInputs++;
    if (input2.value) filledInputs++;
    if (input3.value) filledInputs++;
    if (input4.value) filledInputs++;

    if (filledInputs === 3) {
        calculateDilution();
    }
}

function calculateDilution() {
    let concentration_initial = convertToStandardUnit(parseFloat(input1.value || 0), inputdrop1.value);
    let volume_initial = convertToStandardMeter(parseFloat(input2.value || 0), inputdrop2.value);
    let concentration_final = convertToStandardUnit(parseFloat(input3.value || 0), inputdrop3.value);
    let volume_final = convertToStandardMeter(parseFloat(input4.value || 0), inputdrop4.value);

    // Check which input is empty and calculate its value
    if (!input1.value) {
        concentration_initial = (concentration_final * volume_final) / volume_initial;
        input1.value = concentration_initial.toFixed(2);
    } else if (!input2.value) {
        volume_initial = (concentration_final * volume_final) / concentration_initial;
        input2.value = volume_initial.toFixed(2);
    } else if (!input3.value) {
        concentration_final = (concentration_initial * volume_initial) / volume_final;
        input3.value = concentration_final.toFixed(2);
    } else if (!input4.value) {
        volume_final = (concentration_initial * volume_initial) / concentration_final;
        input4.value = volume_final.toFixed(2);
    }

    // Display the result
    result.innerText = `With initial concentration of ${concentration_initial.toFixed(2)} M and initial volume of ${volume_initial.toFixed(2)} liters, to achieve a final concentration of ${concentration_final.toFixed(2)} M, you'll need a final volume of ${volume_final.toFixed(2)} liters.`;
}


// Trigger initial calculation on button click
calcBtn.addEventListener("click", calculateDilution);

console.log('3ug')