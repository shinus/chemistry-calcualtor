let dropdownliter = [
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

let solutionNeutralized = [
    { value: "Yes", name: "Yes" },
    { value: "No", name: "No" },
    { value: "No Sure", name: "No Sure" },
]

let strengthdrop = [
    { value: "weak", name: "weak" },
    { value: "strong", name: "strong" },
    { value: "unknown", name: "unknown" },
]

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

let KaArray = [
    { value: 1.0e-100, name: "x10^-100" },
    { value: 1.0e-101, name: "x10^-101" },
    { value: 1.0e-102, name: "x10^-102" },
    { value: 1.0e-103, name: "x10^-103" },
    { value: 1.0e-104, name: "x10^-104" },
    { value: 1.0e-105, name: "x10^-105" },
    { value: 1.0e-106, name: "x10^-106" },
    { value: 1.0e-107, name: "x10^-107" },
    { value: 1.0e-108, name: "x10^-108" },
    { value: 1.0e-109, name: "x10^-109" },
    { value: 1.0e-110, name: "x10^-110" },
    { value: 1.0e-5, name: "x10^-5" },
    { value: 1.0e-6, name: "x10^-6" },
    { value: 1.0e-7, name: "x10^-7" },
    { value: 1.0e-8, name: "x10^-8" },
    { value: 1.0e-9, name: "x10^-9" },
    { value: 1.0e-10, name: "x10^-10" },
    { value: 1.0e-11, name: "x10^-11" },
    { value: 1.0e-12, name: "x10^-12" },
    { value: 1.0e0, name: "x10^0" },
    { value: 1.0e1, name: "x10^1" },
    { value: 1.0e2, name: "x10^2" },
    { value: 1.0e3, name: "x10^3" },
    { value: 1.0e4, name: "x10^4" },
    { value: 1.0e5, name: "x10^5" },
    { value: 1.0e6, name: "x10^6" },
    { value: 1.0e7, name: "x10^7" },
];


  let input1 = document.getElementById("input1");
  let inputdrop1 = document.getElementById('inputdrop1')
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");
  let input5 = document.getElementById("input5");
  let input6 = document.getElementById("input6");
  let input7 = document.getElementById("input7");
  let input8 = document.getElementById("input8");
  let input9 = document.getElementById("input9");
  let input10 = document.getElementById("input10");
  let input11 = document.getElementById("input11");
  let input12 = document.getElementById("input12");
  let calcBtn = document.getElementById("calcBtn");
  let result = document.getElementById("result-section");
  let inputdrop2 = document.getElementById("inputdrop2");
  let inputdrop3 = document.getElementById("inputdrop3");
  let inputdrop4 = document.getElementById("inputdrop4");
  let inputdrop5 = document.getElementById("inputdrop5");
  let inputdrop6 = document.getElementById("inputdrop6");
  let inputdrop7 = document.getElementById("inputdrop7");
  let inputdrop8 = document.getElementById("inputdrop8");
  let inputdrop9 = document.getElementById("inputdrop9");
  let inputdrop10 = document.getElementById("inputdrop10");
  let inputdrop11 = document.getElementById("inputdrop11");
  let inputdrop12 = document.getElementById("inputdrop12");
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  console.log('code v5')
  calcBtn.addEventListener("click", calculateTitrations);
  calcBtn.style.background='black'
  
  dropMolar.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop3.add(option);
    inputdrop8.add(option.cloneNode(true))
    inputdrop3.value = "M";
    inputdrop8.value = "M";
  });


  KaArray.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop6.value = "1.0e1";
    inputdrop5.value = "1.0e1";
    inputdrop11.value = "1.0e1";
    inputdrop5.add(option);
    inputdrop6.add(option.cloneNode(true))
    inputdrop11.add(option.cloneNode(true))
  });

  solutionNeutralized.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop1.add(option);
    inputdrop1.value = "No";
  });


  strengthdrop.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop2.add(option);
    inputdrop7.add(option.cloneNode(true))
    inputdrop2.value = "weak";
    inputdrop7.value = "weak";
  });
  

  dropdownliter.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop12.add(option);
    inputdrop9.add(option.cloneNode(true));
    inputdrop12.value = "liters";
    inputdrop9.value = "liters";
  });


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

function convertToStandardliter(value, unit) {
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


// ... [Rest of the code]

// Event listener for acid strength dropdown
inputdrop2.addEventListener("change", function() {
    adjustVisibility(inputdrop2, input5, input6);
});

// Event listener for base strength dropdown
inputdrop7.addEventListener("change", function() {
    adjustVisibility(inputdrop7, input10, input11);  // Assuming you have similar Ka/Kb fields for base
});

// Adjust visibility of Ka and Kb based on strength
function adjustVisibility(strengthDropdown, kaInput, kbInput) {
    if (strengthDropdown.value === "strong") {
        kaInput.style.display = "none";
        kbInput.style.display = "none";
        inputdrop3.style.display= 'none'
        inputdrop12.style.display = 'none'
    } else if (strengthDropdown.value === "weak") {
        kaInput.style.display = "block";
        kbInput.style.display = "block";
        inputdrop3.style.display= 'block'
        inputdrop12.style.display = 'block'
    }
}


// Initially set visibility based on default values
adjustVisibility(inputdrop2, input5, input6);
adjustVisibility(inputdrop7, input10, input11);



function calculateTitrations() {
    // Extracting values using their ids
    let isNeutralized = document.getElementById("inputdrop1").value;
    
    let acidStrength = document.getElementById("inputdrop2").value;
    let acidConcentrationUnit = document.getElementById("inputdrop3").value;
    let acidConcentration = convertToStandardUnit(parseFloat(document.getElementById("input3").value), acidConcentrationUnit);
    let acidVolumeUnit = document.getElementById("inputdrop12").value;
    let acidVolume = convertToStandardliter(parseFloat(document.getElementById("input12").value), acidVolumeUnit);
    
    let hPlusDonated = parseFloat(document.getElementById("input4").value);
    let ka = parseFloat(document.getElementById("input5").value);
    let kb = parseFloat(document.getElementById("input6").value);
    
    let baseStrength = document.getElementById("inputdrop7").value;
    let baseConcentrationUnit = document.getElementById("inputdrop8").value;
    let baseConcentration = convertToStandardUnit(parseFloat(document.getElementById("input8").value), baseConcentrationUnit);
    let baseVolumeUnit = document.getElementById("inputdrop9").value;
    let baseVolume = convertToStandardliter(parseFloat(document.getElementById("input9").value), baseVolumeUnit);
    
    let baseOHMinusDonated = parseFloat(document.getElementById("input10").value);

    // Calculations based on moles and volume
    let molesOfAcid = acidConcentration * acidVolume;
    let molesOfBase = baseConcentration * baseVolume;

    let resultantMoles;
    let resultantVolume;
    let resultantConcentration;
    let pH;

    
    let acidConcentrationValue = parseFloat(document.getElementById("input3").value);
    if (isNaN(acidConcentrationValue)) acidConcentrationValue = 0;

    let acidVolumeValue = parseFloat(document.getElementById("input12").value);
    if (isNaN(acidVolumeValue)) acidVolumeValue = 0;

    let hPlusDonatedValue = parseFloat(document.getElementById("input4").value);
    if (isNaN(hPlusDonatedValue)) hPlusDonatedValue = 0;

    let kaValue = parseFloat(document.getElementById("input5").value);
    if (isNaN(kaValue)) kaValue = 0;

    let kbValue = parseFloat(document.getElementById("input6").value);
    if (isNaN(kbValue)) kbValue = 0;

    let baseConcentrationValue = parseFloat(document.getElementById("input8").value);
    if (isNaN(baseConcentrationValue)) baseConcentrationValue = 0;

    let baseVolumeValue = parseFloat(document.getElementById("input9").value);
    if (isNaN(baseVolumeValue)) baseVolumeValue = 0;

    let baseOHMinusDonatedValue = parseFloat(document.getElementById("input10").value);
    if (isNaN(baseOHMinusDonatedValue)) baseOHMinusDonatedValue = 0;


    if (molesOfAcid > molesOfBase) {
        resultantMoles = molesOfAcid - molesOfBase;
        resultantVolume = acidVolume + baseVolume;
        resultantConcentration = resultantMoles / resultantVolume;
        pH = -Math.log10(resultantConcentration);
    } else if (molesOfBase > molesOfAcid) {
        resultantMoles = molesOfBase - molesOfAcid;
        resultantVolume = acidVolume + baseVolume;
        resultantConcentration = resultantMoles / resultantVolume;
        pH = 14 + Math.log10(resultantConcentration);
    } else {
        pH = 7;
    }

    // Displaying the results
    let resultString = "Resultant pH of the mixed solution is approximately " + pH.toFixed(2) + ".\n";
    resultString += "Concentration of the new solution = " + resultantConcentration.toFixed(3) + " M\n";
    resultString += "Volume = " + resultantVolume + " ml";

    // This will display the result in an alert, but you can modify it to display the result in any other way you prefer
    result.innerText = resultString;
}


