
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background = "#f8320df7";

calcBtn.addEventListener('click',calculate)

function calculate() {
    const percentRemaining = parseFloat(input1.value); 
    const halfLife = parseFloat(input2.value);

    const k = Math.log(2) / halfLife;
    const t = Math.log(percentRemaining / 100) / k;

    result.textContent = t.toFixed(2);
  }