let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

function calculate() {
    const rate1 = parseFloat(input1.value);
    const rate2 = parseFloat(input2.value);
    const molarmass1 = parseFloat(input3.value);
    const molarmass2 = parseFloat(input4.value);

    let missingMolarMass1 = NaN;
    let missingMolarMass2 = NaN;
    let validInputCount = 0;

    if (!isNaN(rate1)) validInputCount++;
    if (!isNaN(rate2)) validInputCount++;
    if (!isNaN(molarmass1)) validInputCount++;
    if (!isNaN(molarmass2)) validInputCount++;

    if (validInputCount >= 2) {
      if (!isNaN(rate1) && !isNaN(rate2) && isNaN(molarmass1) && !isNaN(molarmass2)) {
        missingMolarMass1 = (rate2 * rate2 * molarmass2) / (rate1 * rate1);
      } else if (!isNaN(rate1) && !isNaN(rate2) && !isNaN(molarmass1) && isNaN(molarmass2)) {
        missingMolarMass2 = (rate1 * rate1 * molarmass1) / (rate2 * rate2);
      }

      result.innerHTML = `
        Rate of Effusion of Gas 1: ${rate1.toFixed(2)}<br>
        Rate of Effusion of Gas 2: ${rate2.toFixed(2)}<br>
        Molar Mass of Gas 1 (optional): ${!isNaN(molarmass1) ? molarmass1.toFixed(2) : missingMolarMass1.toFixed(2)} g/mol<br>
        Molar Mass of Gas 2 (optional): ${!isNaN(molarmass2) ? molarmass2.toFixed(2) : missingMolarMass2.toFixed(2)} g/mol<br>
      `;
    } else {
      result.innerHTML = "Please provide numeric values in at least two input fields.";
    }
  }