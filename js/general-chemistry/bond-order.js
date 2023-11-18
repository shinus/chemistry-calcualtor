let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

function calculate() {
  let inpt1 = input1.value;
  let inpt2 = input2.value;
  if (inpt2 > inpt1) {
    result.textContent = `There are always more bonding electrons than
        ntibonding electrons.`;
        return;
  } else {
    let BondOrder = (inpt1 - inpt2) / 2;
    result.textContent = BondOrder;
  }
}

console.log("js loaded yes and updated b3");
