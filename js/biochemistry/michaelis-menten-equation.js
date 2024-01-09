let dropMolar = [
  { value: "M", name: "molars" },
  { value: "mM", name: "millimolars" },
  { value: "µM", name: "micromolars" },
  { value: "nM", name: "nanomolars" },
  { value: "pM", name: "picomolars" }
];

let timeunit = [
    { value: 's' ,name: 'seconds'}
]

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const inputdrop1 = document.getElementById("inputdrop1");
const inputdrop2 = document.getElementById("inputdrop2");
const inputdrop3 = document.getElementById("inputdrop3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "constant", values: input1 },
    { name: "speed", values: input2 },
    { name: "substrate", values: input3 },
];

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
  }
}

init()

// calcBtn.style.background = "black";
calcBtn.addEventListener("click", showResult);


dropMolar.forEach((option) => {
  let opt = document.createElement("option");
  opt.value = option.value;
  opt.text = option.name;
  inputdrop1.add(opt);
  inputdrop3.add(opt.cloneNode(true));
  inputdrop1.value = "M";
  inputdrop3.value = "M";
});


timeunit.forEach((option) => {
    let opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.name;
    inputdrop2.add(opt);
    inputdrop2.value = "s";
  });

function getExact() {
    const km = parseFloat(input1.value);
    const kmunit = inputdrop1.value;
    const vmax = parseFloat(input2.value);
    const substrateConcentration = parseFloat(input3.value);
    const substrateunit = inputdrop3.value;

    if (isNaN(km) || isNaN(vmax) || isNaN(substrateConcentration)) {
        alert('Please enter valid numeric values for all inputs.');
        return;
    }

    const reactionRate = (vmax * substrateConcentration) / (convertToStandardUnit(km,kmunit) + convertToStandardUnit(substrateConcentration,substrateunit));
    result = reactionRate;
    return result
}

function showResult() {
  if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
  }
  var result = getExact();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>Reaction rate (V)  " + result.toFixed(2)  +  " Sec </b>";

  output.append(div1);
  output.append(div2);
}

function convertToStandardUnit(value, unit) {
    switch (unit) {
      // Molar concentration conversions
      case "M":
        return value; // Already a standard unit for molarity in this context
      case "mM":
        return value * 1e-3;
      case "µM":
        return value * 1e-6;
      case "nM":
        return value * 1e-9;
      case "pM":
        return value * 1e-12;
      case "fM":
        return value * 1e-15;
      case "aM":
        return value * 1e-18;
      case "zM":
        return value * 1e-21;
      case "yM":
        return value * 1e-24;
      default:
        return value;
    }
  }
  