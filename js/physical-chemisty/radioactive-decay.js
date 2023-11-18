let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

const NA = 6.02214076e23;  

function calculate() {
  const mass = Number(input1.value)
  const molarMass = Number(input2.value)
  const halfLife = Number(input3.value)

  const activity = (NA / molarMass) * mass * Math.LN2 / halfLife;

  const specificActivity = (NA * Math.LN2) / (molarMass * halfLife);
  
  result.innerHTML =
    "Activity: " + activity.toExponential(4) + " Bq" + 
    "Specific Activity: " + specificActivity.toExponential(4) + " Bq/g";

}