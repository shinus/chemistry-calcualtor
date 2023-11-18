
let voltUnits = [
    { value: 'V', name:'volts (V)'},
    { value: 'mV', name:'minivolts (mV)'},
    { value: 'kV', name:'kilovolts (kV)'},
    { value: 'MV', name:'megavolts'}
];

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");

let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");

calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';

voltUnits.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop2.add(opt.cloneNode(true));
});

// Set initial values for the dropdWowns
inputdrop1.value = "V";
inputdrop2.value = "mV";

function calculate() {
    const anode = parseFloat(input1.value);
    const cathode = parseFloat(input2.value);
    const anodeunit = inputdrop1.value;
    const cathodeunit = inputdrop2.value;

    // Convert anode and cathode values to standard units (volts)
    const standardAnode = convertToStandardUnit(anode, anodeunit);
    const standardCathode = convertToStandardUnit(cathode, cathodeunit);

    // Calculate the EMF difference
    const emfDifference =  standardCathode - standardAnode ;

    // Display the result in the result section
    result.textContent = `EMF Difference: ${emfDifference.toFixed(4)} V`;
}


function convertToStandardUnit(value, unit) {
    switch (unit) {
        case "V":
            return value;
        case "mV":
            return value / 1000; // Convert millivolts to volts
        case "µM":
            return value / 1e6;  // Convert microvolts to volts
        case "kV":
            return value * 1000;  // Convert kilovolts to volts
        case "MV":
            return value * 1e6;   // Convert megavolts to volts
        default:
            return value;
    }
}
