
let dropdownppm = [
    { value: "mg/l", name: "miligrams per liter(mg/L)" },
    { value: "ppm", name: "parts per million(ppm)" },
    { value: "ppb", name: "parts per billion(ppb)" },
];

let molarMassUnit = [
    { value: "g/mol", name: "g/mol" }
];


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let volume_of_solution = document.getElementById("input2");
let molality = document.getElementById("input3");
let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");


calcBtn.addEventListener("click", calculate);
calcBtn.style.background = 'black';


dropdownppm.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop1.add(opt);
    inputdrop1.value = "mg/l"
});

molarMassUnit.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "g/mol"
});

function calculate() {
    const ppmInput = parseFloat(input1.value);
    const molarMassInput = parseFloat(input2.value);
    const ppmUnit = inputdrop1.value;
    const molarMassUnit = inputdrop2.value;
    
    // Define conversion factors for units
    const ppmConversionFactors = {
        "mg/l": 1,
        "ppm": 1e-3,
        "ppb": 1e-6,
    };

    const molarMassConversionFactors = {
        "g/mol": 1,
    };

    // Convert input values to common units
    const ppmInMgPerLiter = ppmInput * ppmConversionFactors[ppmUnit];
    const molarMassInGramsPerMole = molarMassInput * molarMassConversionFactors[molarMassUnit];
    
    if (!isNaN(ppmInMgPerLiter) && !isNaN(molarMassInGramsPerMole) && molarMassInGramsPerMole !== 0) {
        const molarity = (ppmInMgPerLiter / 1000) / molarMassInGramsPerMole;
        let resulto = molarity.toFixed(6); // Display up to 6 decimal places
        result.textContent = `${resulto} molars`;
        console.log(result);
        console.log(resulto);
    } else {
        alert("Please enter valid PPM and Molar Mass values (Molar Mass should not be zero).");
    }
}

console.log(3487)