let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

function calculate() {
    
const totalPressure = parseFloat(input1.value
  );
  const moleFraction = parseFloat(input2.value);
  
  if (
    isNaN(totalPressure) ||
    isNaN(moleFraction) ||
    totalPressure < 0 ||
    moleFraction < 0 ||
    moleFraction > 1
  ) {
    alert("Please enter valid values for total pressure and mole fraction.");
    return;
  }
  
  const partialPressure = totalPressure * moleFraction;
  
  result.textContent =
    partialPressure.toFixed(4);
  
}
