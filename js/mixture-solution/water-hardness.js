
let drop1 = [
    { value: "g/L", name: "grams per liter" },
    { value: "mg/L", name: "miligrams per liter" },
    { value: "g/ml", name: "grams per mililiter" },
    { value: "ppm", name: "parts per million" },
    { value: "lbs/US gal", name: "pounds per us gallon" },
  ];
  
  let input1 = document.getElementById("input1");
  let inputdrop1 = document.getElementById('inputdrop1')
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let calcBtn = document.getElementById("calcBtn");
  let result = document.getElementById("result-section");
  let inputdrop2 = document.getElementById("inputdrop2");
  let inputdrop3 = document.getElementById("inputdrop3");
  const getScript = document.currentScript;
  const permaLink = getScript.dataset.permalink;
  
  
  calcBtn.addEventListener("click", calculatehardness);
  
  drop1.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop1.add(option);
    inputdrop1.value = "g/L";
  });
  
  drop1.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop2.add(option);
    inputdrop2.value = "mg/L";
  });


  drop1.forEach((listitem) => {
    let option = document.createElement("option");
    option.value = listitem.value;
    option.text = `${listitem.value} - ${listitem.name}`;
    inputdrop3.add(option);
    inputdrop3.value = "mg/L";
  });
  
  console.log('its fresh')
  function calculatehardness() {
    let input1Val = convertToMgPerL(parseFloat(input1.value), inputdrop1.value);
    let input2Val = convertToMgPerL(parseFloat(input2.value), inputdrop2.value);

    if (isNaN(input1Val) || isNaN(input2Val)) {
        result.innerHTML = "Please enter valid numbers for calcium and magnesium!";
        return;
    }

    let hardness = 2.497 * input1Val + 4.118 * input2Val;
    input3.value = hardness.toFixed(2);

    result.innerHTML = `Calcium: ${input1Val} mg/L, Magnesium: ${input2Val} mg/L results in Water Hardness: ${hardness.toFixed(2)} mg/L of CaCO₃`;
}

function convertToMgPerL(value, unit) {
    switch (unit) {
        case "g/L":
            return value * 1000; // grams to milligrams
        case "g/ml":
            return value * 1000000; // grams per milliliter to milligrams per liter
        case "ppm":
            return value; // ppm is equivalent to mg/L
        case "lbs/US gal":
            return value * 119826.427; // pounds per US gallon to milligrams per liter
        default:
            return value; // assuming mg/L or any other unhandled units
    }
}


  