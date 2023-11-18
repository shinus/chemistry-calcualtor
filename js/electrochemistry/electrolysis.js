// Select elements 
const massInput = document.getElementById('mass'); 
massInput.placeholder = "Enter mass in g";

const equivalentInput = document.getElementById('equivalent');
equivalentInput.placeholder = "Enter equivalent in C/mol";

const currentInput = document.getElementById('current');  
currentInput.placeholder = "Enter current in A";

const timeInput = document.getElementById('time');
timeInput.placeholder = "Enter time in s";
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.style.background ='black'
// Faraday's constant 
const FARADAY = 96485; 

calcBtn.addEventListener('click', () => {

  // Get input values
  const mass = parseFloat(massInput.value);
  const equivalent = parseFloat(equivalentInput.value);
  const current = parseFloat(currentInput.value);
  const time = parseFloat(timeInput.value);

  // Calculate missing value
  let missing;
  if(!mass) {
    missing = (equivalent * current * time) / FARADAY;
  } else if(!equivalent) {
    missing = (mass * FARADAY) / (current * time);
  } else if(!current) {
    missing = (mass * FARADAY) / (equivalent * time);
  } else if(!time) {
    missing = (mass * FARADAY) / (equivalent * current);
  }

  // Display result
  result.textContent = `
  Mass: ${mass || missing} 
  Equivalent: ${equivalent || missing}
  Current: ${current || missing}
  Time: ${time || missing}
  `;

});