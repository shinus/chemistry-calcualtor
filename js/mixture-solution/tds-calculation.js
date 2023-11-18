let ArrayEC = [
    {name: "microsiemens per centimeter", value: 'µS/cm'},
    {name: "millisiemens per centimeter", value: "mS/cm"},
    {name: "decisiemens per meter", value: "dS/m"},
    {name: "micromho per centimeter", value: "µmho/cm"},
    {name: "millimho per centimeter", value: "mmho/cm"}
];

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById('inputdrop1');
let input2 = document.getElementById("input2");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let inputdrop2 = document.getElementById("inputdrop2");

input1.min = 0.5;
input1.max = 1;



ArrayEC.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
});

function convertToMicrosiemensPerCm(value, unit) {
    switch (unit) {
        case "µS/cm": return value;
        case "mS/cm": return value * 1e3;
        case "dS/m": return value * 1e4;
        case "µmho/cm": return value; // mho is an old term for siemens
        case "mmho/cm": return value * 1e3;
        default: return value;
    }
}

calcBtn.addEventListener("click", function() {
    if (input1.value < 0.55 || input1.value > 0.99) {
        alert('Please enter a value between 0.55 to 0.8. Note: 0.67 can be used for approximation.');
    }
    // Get the input values
    let EC = parseFloat(input2.value);
    let ke = parseFloat(input1.value);
    let unit = inputdrop2.value;

    // Convert the EC value to the base unit
    EC = convertToMicrosiemensPerCm(EC, unit);

    // Calculate TDS
    let TDS = ke * EC;

    // Display the result
    result.textContent = `${TDS.toFixed(3)} mg/L`;
});
