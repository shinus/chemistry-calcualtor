let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = "black";

function calculate() {
    const crossSection = parseFloat(input1.value);
    const laserPower = parseFloat(input2.value);
    const wavelength = parseFloat(input3.value) * 1e-9; // Convert nm to meters
    const focusSize = parseFloat(input4.value) * 1e-6; // Convert μm to meters
    const exposureTime = parseFloat(input5.value);

    if (isNaN(crossSection) || isNaN(laserPower) || isNaN(wavelength) || isNaN(focusSize) || isNaN(exposureTime) ||
        crossSection <= 0 || laserPower <= 0 || wavelength <= 0 || focusSize <= 0 || exposureTime <= 0) {
        alert("Please enter valid positive values for all input fields.");
        return;
    }

    // Calculate photon flux
    const photonFlux = (laserPower) / (Math.PI * (focusSize * focusSize / 4) * wavelength);

    // Calculate excitations per molecule
   // const excitations = 0.5 * crossSection * photonFlux * Math.pow(exposureTime, 2);

    const excitations1 = 0.5 * crossSection *  Math.pow(photonFlux, 2) * exposureTime;

    result.innerHTML = `Photon Flux: ${photonFlux.toFixed(8)}<br>Excitations per Molecule: ${excitations1.toFixed(8)}`;

}
