
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";

function calculate() {
    const initial = parseFloat(input1.value);
    const remaining = parseFloat(input2.value);
    const elapsed = parseFloat(input3.value);

    if (isNaN(initial) || isNaN(remaining) || isNaN(elapsed)) {
        result.innerHTML = "Please enter a value in all three input fields.";
        return;
    }

    const halfLife = elapsed * Math.log(2) / Math.log(initial / remaining);
    const decayConstant = Math.log(2) / halfLife;
    const meanLifetime = halfLife / Math.log(2);

    result.innerHTML = `Mean Lifetime: ${meanLifetime.toFixed(2)}<br>Decay Constant: ${decayConstant.toFixed(5)}<br>Half-Life: ${halfLife.toFixed(2)}`;
}

  
  // Trigger calculation on button click
  calcBtn.addEventListener("click", calculate);
