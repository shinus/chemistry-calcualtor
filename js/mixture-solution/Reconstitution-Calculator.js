console.log('js v2 updated')

let drop1 = [
    { value: "ng", name: "nanograms" },
    { value: "µg", name: "microgram" },
    { value: "mg", name: "miligrams" },
    { value: "g", name: "grams" },
    { value: "oz", name: "ounces" },
  ];

let drop2 = [
    { value: "cu in", name: "cubic inches" },
    { value: "µl", name: "microliters" },
    { value: "ml", name: "mililiters" },
    { value: "cl", name: "centiliters" },
    { value: "US fl oz", name: "fluid ounces" },
    { value: "UK fl oz", name: "fluid ounces" },
    { value: "cc", name: "cubic centimeter" },
  ];

let drop3 = [
    { value: "g/ml", name: "grams per mililiters" },
    { value: "mg/ml", name: "miligrams per mililiters" },
    { value: "µg/ml", name: "micrograms per mililiters" },
    { value: "g/µl", name: "grams per microliters" },
    { value: "mg/µl", name: "miligrams per microliters" },
    { value: "µg/µl", name: "micrograms per microliters" },
    { value: "lbs/US gal", name: "pounds per gallon" },
    { value: "lbs/UK gal", name: "pounds per gallon" },
    { value: "ng/ml", name: "nanograms per mililiters" }
  ];
  
  let dose = document.getElementById("input1");
  let inputdrop1 = document.getElementById('inputdrop1')
  let dosevolume = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let calcBtn = document.getElementById("calcBtn");
  let result = document.getElementById("result-section");
  let inputdrop2 = document.getElementById("inputdrop2");
  let inputdrop3 = document.getElementById("inputdrop3");
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  
  calcBtn.addEventListener("click", calculateReconstitution);
  
  drop1.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop1.add(option);
    inputdrop1.value = "mg";
  });
  
  drop2.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop2.add(option);
    inputdrop2.value = "ml";
  });


  drop3.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop3.add(option);
    inputdrop3.value = "g/ml";
  });
 
//   dose.addEventListener("input", calculateReconstitution);
//   dosevolume.addEventListener("input", calculateReconstitution);
//   input3.addEventListener("input", calculateReconstitution);

  function calculateReconstitution() {
    let doseVal = convertToStandardUnit(parseFloat(dose.value), inputdrop1.value);
    let volumeVal = convertToStandardUnit(parseFloat(dosevolume.value), inputdrop2.value);
    let input3Val = convertToStandardUnit(parseFloat(input3.value), inputdrop3.value);

    if (isNaN(doseVal)) {
        // If dose is empty, calculate its value
        doseVal = input3Val * volumeVal;
        dose.value = doseVal.toFixed(2);
    } else if (isNaN(volumeVal)) {
        // If volume is empty, calculate its value
        volumeVal = doseVal / input3Val;
        dosevolume.value = volumeVal.toFixed(2);
    } else if (isNaN(input3Val)) {
        // If input3 is empty, calculate its value (Reconstitution Concentration)
        input3Val = doseVal / volumeVal;
        input3.value = input3Val.toFixed(2);
    }

    let reconstitutionConcentration = doseVal / volumeVal;
    result.innerHTML = `Reconstitution Concentration: ${reconstitutionConcentration.toFixed(2)} ${inputdrop3.value}`;
}
function convertToStandardUnit(value, unit) {
    switch (unit) {
        // Weight conversions
        case "ng":
            return value * 1e-9;
        case "µg":
            return value * 1e-6;
        case "mg":
            return value * 1e-3;
        case "g":
            return value;
        case "oz":
            return value * 28.3495; // 1 ounce is approximately 28.3495 grams
        // Volume conversions
        case "cu in":
            return value * 16.387; // 1 cubic inch is approximately 16.387 milliliters
        case "µl":
            return value;  // micro-liter is already a standard unit for volume in this context
        case "ml":
            return value;
        case "cl":
            return value * 10; // 1 centiliter is 10 milliliters
        case "US fl oz":
            return value * 29.5735; // 1 US fluid ounce is approximately 29.5735 milliliters
        case "UK fl oz":
            return value * 28.4131; // 1 UK fluid ounce is approximately 28.4131 milliliters
        case "cc":
            return value; // cubic centimeter is equivalent to milliliter
        // Concentration conversions
        case "g/ml":
            return value;
        case "mg/ml":
            return value * 1e-3;
        case "µg/ml":
            return value * 1e-6;
        case "g/µl":
            return value * 1e3;
        case "mg/µl":
            return value;
        case "µg/µl":
            return value * 1e-3;
        case "lbs/US gal":
            // 1 US gallon is approximately 3,785.41 milliliters and 1 pound is approximately 453.592 grams
            return (value * 453.592) / 3785.41;
        case "lbs/UK gal":
            // 1 UK gallon is approximately 4,546.09 milliliters and 1 pound is approximately 453.592 grams
            return (value * 453.592) / 4546.09;
        case "ng/ml":
            return value * 1e-9;
        default:
            return value;
    }
}
console.log('val3')

