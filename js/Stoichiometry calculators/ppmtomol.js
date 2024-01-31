
// let dropdownppm = [
//     { value: "mg/l", name: "miligrams per liter(mg/L)" },
//     { value: "ppm", name: "parts per million(ppm)" },
//     { value: "ppb", name: "parts per billion(ppb)" },
// ];


let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let volume_of_solution = document.getElementById("input2");
let molality = document.getElementById("input3");
// let inputdrop1 = document.getElementById("inputdrop1");
let inputdrop3 = document.getElementById("inputdrop3");
let inputdrop4 = document.getElementById("inputdrop4");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "ppm", values: input1 },
    // { name: "ppmdrop", values: inputdrop1 },
    { name: "molar", values: input2 },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName == "INPUT") {
        queryP.values.value = parameter_value;
      } else if (queryP.values.tagName == "SELECT") {
        queryP.values.selectedIndex = parameter_value;
      }
    }
  }

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();     


// dropdownppm.forEach((option) => {
//     let opt = document.createElement("option");
//     opt.value = option.value;
//     opt.text = option.name;
//     inputdrop1.add(opt);
//     inputdrop1.value = "mg/l"
// });

function calculate() {
    const ppmInput = parseFloat(input1.value);
    const molarMassInput = parseFloat(input2.value);
    // const ppmUnit = inputdrop1.value;
    
    // // Define conversion factors for units
    // const ppmConversionFactors = {
    //     "mg/l": 1,
    //     "ppm": 1e-3,
    //     "ppb": 1e-6,
    // };

    // Convert input values to common units
    const ppmInMgPerLiter = ppmInput;
    const molarMassInGramsPerMole = molarMassInput;
    var result;
    
    if (!isNaN(ppmInMgPerLiter) && !isNaN(molarMassInGramsPerMole) && molarMassInGramsPerMole !== 0) {
        const molarity = (ppmInMgPerLiter / 1000) / molarMassInGramsPerMole;
        let resulto = molarity.toFixed(6); // Display up to 6 decimal places
        result = resulto;
    
       
    }
    return result
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = calculate();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>  " + result  +  " molars  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);