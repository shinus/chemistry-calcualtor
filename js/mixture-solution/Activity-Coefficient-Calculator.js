
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


calcBtn.addEventListener("click", calculate);
calcBtn.style.background ='black'

function calculate() {
  const A = 0.509;  // Constant for water at 25°C
  let z = parseFloat(document.getElementById('input1').value);
  let I = parseFloat(document.getElementById('input2').value);
  let f = parseFloat(document.getElementById('input3').value);

  if (isNaN(z)) {
      z = Math.sqrt(Math.log10(f) / (-A * Math.sqrt(I)));
      result.textContent = "Charge number of ions (Z) = " + z.toFixed(2);
  } else if (isNaN(I)) {
      I = (Math.log10(f) / (-A * z * z))**2;
      result.textContent = "Ionic strength (I) = " + I.toFixed(2);
  } else if (isNaN(f)) {
      f = Math.pow(10, -A * z * z * Math.sqrt(I));
      result.textContent = "Activity coefficient (f) = " + f.toFixed(2);
  } else {
      result.textContent = "Please leave one of the values empty.";
  }
}

