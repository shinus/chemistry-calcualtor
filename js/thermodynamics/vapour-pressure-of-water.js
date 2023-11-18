let tempunits = [
  { label: "Celsius (C)", value: "Celsius" },
  { label: "Fahrenheit (F)", value: "Fahrenheit" },
];

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById("inputdrop1");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

tempunits.forEach((element) => {
  let option = document.createElement("option");
  option.value = element.value;
  option.text = element.label;
  inputdrop1.add(option);
  inputdrop1.value = "Celsius";
});


// Function to calculate vapor pressure using the simplified formula (in kPa)
function calculateSimplifiedVaporPressure(temperature, scale) {
  const T =
    scale === "Celsius"
      ? temperature + 273.15
      : (temperature - 32) * (5 / 9) + 273.15;
  const vaporPressure = Math.exp(20.386 - 5132 / T);
  return vaporPressure.toFixed(3); // Rounded to three decimal places
}

// Function to calculate vapor pressure using the Antoine formula (in kPa)
function calculateAntoineVaporPressure(temperature, scale) {
  const T = scale === "Celsius" ? temperature : (temperature - 32) * (5 / 9);
  const A = 8.07131;
  const B = 1730.63;
  const C = 233.426;
  const vaporPressure = Math.pow(10, A - B / (T + C));
  return vaporPressure.toFixed(3); // Rounded to three decimal places
}

// Function to calculate vapor pressure using the Magnus formula (in kPa)
function calculateMagnusVaporPressure(temperature, scale) {
  const T = scale === "Celsius" ? temperature : (temperature - 32) * (5 / 9);
  const vaporPressure = 0.61094 * Math.exp((17.625 * T) / (T + 243.04));
  return vaporPressure.toFixed(3); // Rounded to three decimal places
}

// Function to calculate vapor pressure using the Tetens formula (in kPa)
function calculateTetensVaporPressure(temperature, scale) {
  const T = scale === "Celsius" ? temperature : (temperature - 32) * (5 / 9);
  const vaporPressure = 0.61078 * Math.exp((17.27 * T) / (T + 237.3));
  return vaporPressure.toFixed(3); // Rounded to three decimal places
}

// Function to calculate vapor pressure using the Buck formula (in kPa)
function calculateBuckVaporPressure(temperature, scale) {
  const T = scale === "Celsius" ? temperature : (temperature - 32) * (5 / 9);
  const vaporPressure =
    0.61121 * Math.exp((18.678 - T / 234.5) * (T / (257.14 + T)));
  return vaporPressure.toFixed(3); // Rounded to three decimal places
}


calcBtn.addEventListener("click", () => {
  const temperature = parseFloat(input1.value);
  const scale = inputdrop1.value;
    console.log(scale)
  if (isNaN(temperature)) {
    alert("Please enter a valid temperature.");
    return;
  }

  const simplifiedPressure = calculateSimplifiedVaporPressure(
    temperature,
    scale
  );

  const antoinePressure = calculateAntoineVaporPressure(temperature, scale);
  const magnusPressure = calculateMagnusVaporPressure(temperature, scale);
  const tetensPressure = calculateTetensVaporPressure(temperature, scale);
  const buckPressure = calculateBuckVaporPressure(temperature, scale);

  result.innerHTML = `
                <h2>Results:</h2>
                <p>Simplified Formula: ${simplifiedPressure} Torr</p>
                <p>Antoine Formula: ${antoinePressure} Torr</p>
                <p>Magnus Formula: ${magnusPressure} kPa</p>
                <p>Tetens Formula: ${tetensPressure} kPa</p>
                <p>Buck Formula: ${buckPressure} kPa</p>
            `;
});
