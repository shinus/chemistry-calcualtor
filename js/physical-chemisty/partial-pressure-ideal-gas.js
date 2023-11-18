let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

function calculate() {
  const moles = parseFloat(input1.value);
  const temperature = parseFloat(input2.value);
  const volume = parseFloat(input3.value);

  if (
    isNaN(moles) ||
    isNaN(temperature) ||
    isNaN(volume) ||
    moles < 0 ||
    temperature < 0 ||
    volume < 0
  ) {
    alert(
      "Please enter valid values for amount of moles, temperature, and volume."
    );
    return;
  }

  const gasConstant = 8.3145; // J/(mol·K)
  const partialPressure = (moles * gasConstant * temperature) / volume;

  result.textContent =
    partialPressure.toFixed(4) + " Pa";
}
