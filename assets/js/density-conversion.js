let area = [
  { value: "kg/m³", name: "Kilogram/Cubic Meter" },
  { value: "g/cm³", name: "Gram/Cubic Centimeter" },
  { value: "lb/ft³", name: "Pound/Cubic Foot" },
  { value: "kg/cm³", name: "Kilogram/Cubic Centimeter" },
  { value: "kg/L", name: "Kilogram/Liter" },
  { value: "oz/in³", name: "Ounce/Cubic Inch" },
  { value: "oz/gal", name: "Ounce/Gallon" },
  { value: "lb/in³", name: "Pound/Cubic Inch" },
  { value: "lb/gal", name: "Pound/Gallon" },
  { value: "ag/L", name: "Attogram/Liter" },
  { value: "cg/L", name: "Centigram/Liter" },
  { value: "dag/L", name: "Decagram/Liter" },
  { value: "dg/L", name: "Decigram/Liter" },
  { value: "Eg/L", name: "Exagram/Liter" },
  { value: "fg/L", name: "Femtogram/Liter" },
  { value: "Gg/L", name: "Gigagram/Liter" },
  { value: "g/mm³", name: "Gram/Cubic Millimeter" },
  { value: "g/m³", name: "Gram/Cubic Meter" },
  { value: "g/L", name: "Gram/Liter" },
  { value: "hg/L", name: "Hectogram/Liter" },
  { value: "Mg/L", name: "Megagram/Liter" },
  { value: "µg/L", name: "Microgram/Liter" },
  { value: "mg/mm³", name: "Milligram/Cubic Millimeter" },
  { value: "mg/m³", name: "Milligram/Cubic Meter" },
  { value: "mg/cm³", name: "Milligram/Cubic Centimeter" },
  { value: "mg/L", name: "Milligram/Liter" },
  { value: "ng/L", name: "Nanogram/Liter" },
  { value: "oz/ft³", name: "Ounce/Cubic Foot" },
  { value: "pg/L", name: "Picogram/Liter" },
  { value: "Pg/l", name: "Petagram/Liter" },
  { value: "psi/1000ft", name: "Psi/1000 Feet" },
  { value: "Tg/L", name: "Teragram/Liter" },
  { value: "t/yd³", name: "Ton/Cubic Yard" },
];

let selectFrom = document.getElementById("from");
let selectTo = document.getElementById("to");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let defaultval = document.getElementById("from1");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;
defaultval.value = 100;

calcBtn.addEventListener("click", convertArea);

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectFrom.add(option);
  selectFrom.value = "kg/m³";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "g/cm³";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInGramPerCubicCentimeter = 0;
  let output = 0;
  switch (from) {
    case "kg/m³":
      inputInGramPerCubicCentimeter = input * 0.001;
      break;
    case "g/cm³":
      inputInGramPerCubicCentimeter = input;
      break;
    case "lb/ft³":
      inputInGramPerCubicCentimeter = input * 0.01602;
      break;
    case "kg/cm³":
      inputInGramPerCubicCentimeter = input * 1000;
      break;
    case "kg/L":
      inputInGramPerCubicCentimeter = input * 1;
      break;
    case "oz/in³":
      inputInGramPerCubicCentimeter = input * 1.72999;
      break;
    case "oz/gal":
      inputInGramPerCubicCentimeter = input * 0.0074891517;
      break;
    case "lb/in³":
      inputInGramPerCubicCentimeter = input * 27.67990468;
      break;
    case "lb/gal":
      inputInGramPerCubicCentimeter = input * 0.1198264273;
      break;
    case "ag/L":
      inputInGramPerCubicCentimeter = input * 1.0e-21;
      break;
    case "cg/L":
      inputInGramPerCubicCentimeter = input * 0.00001;
      break;
    case "dag/L":
      inputInGramPerCubicCentimeter = input * 0.1;
      break;
    case "dg/L":
      inputInGramPerCubicCentimeter = input * 0.0001;
      break;
    case "Eg/L":
      inputInGramPerCubicCentimeter = input * 1.0e15;
      break;
    case "fg/L":
      inputInGramPerCubicCentimeter = input * 1e-15;
      break;
    case "Gg/L":
      inputInGramPerCubicCentimeter = input * 1000000;
      break;
    case "g/mm³":
      inputInGramPerCubicCentimeter = input * 1000;
      break;
    case "g/m³":
      inputInGramPerCubicCentimeter = input * 1.0e-6;
      break;
    case "g/L":
      inputInGramPerCubicCentimeter = input * 0.001;
      break;
    case "hg/L":
      inputInGramPerCubicCentimeter = input * 0.1;
      break;
    case "Mg/L":
      inputInGramPerCubicCentimeter = input * 1000;
      break;
    case "µg/L":
      inputInGramPerCubicCentimeter = input * 1e-9;
      break;
    case "mg/mm³":
      inputInGramPerCubicCentimeter = input;
      break;
    case "mg/m³":
      inputInGramPerCubicCentimeter = input * 1e-6;
      break;
    case "mg/cm³":
      inputInGramPerCubicCentimeter = input * 0.001;
      break;
    case "mg/L":
      inputInGramPerCubicCentimeter = input * 1.0e-6;
      break;
    case "ng/L":
      inputInGramPerCubicCentimeter = input * 1e-12;
      break;
    case "oz/ft³":
      inputInGramPerCubicCentimeter = input * 0.001;
      break;
    case "pg/L":
      inputInGramPerCubicCentimeter = input * 1.0e-15;
      break;
    case "Pg/l":
      inputInGramPerCubicCentimeter = input * 1000000000000;
      break;
    case "psi/1000ft":
      inputInGramPerCubicCentimeter = input * 0.00231;
      break;
    case "Tg/L":
      inputInGramPerCubicCentimeter = input * 1000000000;
      break;
    case "t/yd³":
      inputInGramPerCubicCentimeter = input * 1.18655;
      break;
    default:
      console.log("Invalid input unit.");
  }

  switch (to) {
    case "kg/m³":
      output = inputInGramPerCubicCentimeter / 0.001;
      break;
    case "g/cm³":
      output = inputInGramPerCubicCentimeter;
      break;
    case "lb/ft³":
      output = inputInGramPerCubicCentimeter / 0.01602;
      break;
    case "kg/cm³":
      output = inputInGramPerCubicCentimeter / 1000;
      break;
    case "kg/L":
      output = inputInGramPerCubicCentimeter / 1;
      break;
    case "oz/in³":
      output = inputInGramPerCubicCentimeter / 1.72999;
      break;
    case "oz/gal":
      output = inputInGramPerCubicCentimeter / 0.0074891517;
      break;
    case "lb/in³":
      output = inputInGramPerCubicCentimeter / 27.67990468;
      break;
    case "lb/gal":
      output = inputInGramPerCubicCentimeter / 0.1198264273;
      break;
    case "ag/L":
      output = inputInGramPerCubicCentimeter / 1.0e-21;
      break;
    case "cg/L":
      output = inputInGramPerCubicCentimeter / 0.00001;
      break;
    case "dag/L":
      output = inputInGramPerCubicCentimeter / 0.1;
      break;
    case "dg/L":
      output = inputInGramPerCubicCentimeter / 0.0001;
      break;
    case "Eg/L":
      output = inputInGramPerCubicCentimeter / 1.0e15;
      break;
    case "fg/L":
      output = inputInGramPerCubicCentimeter / 1e-15;
      break;
    case "Gg/L":
      output = inputInGramPerCubicCentimeter / 1000000;
      break;
    case "g/mm³":
      output = inputInGramPerCubicCentimeter / 1000;
      break;
    case "g/m³":
      output = inputInGramPerCubicCentimeter / 1.0e-6;
      break;
    case "g/L":
      output = inputInGramPerCubicCentimeter / 0.001;
      break;
    case "hg/L":
      output = inputInGramPerCubicCentimeter / 0.1;
      break;
    case "Mg/L":
      output = inputInGramPerCubicCentimeter / 1000;
      break;
    case "µg/L":
      output = inputInGramPerCubicCentimeter / 1e-9;
      break;
    case "mg/mm³":
      output = inputInGramPerCubicCentimeter / 1;
      break;
    case "mg/m³":
      output = inputInGramPerCubicCentimeter / 0.001;
      break;
    case "mg/cm³":
      output = inputInGramPerCubicCentimeter / 1;
      break;
    case "mg/L":
      output = inputInGramPerCubicCentimeter / 1.0e-6;
      break;
    case "ng/L":
      output = inputInGramPerCubicCentimeter / 1e-12;
      break;
    case "oz/ft³":
      output = inputInGramPerCubicCentimeter / 0.001;
      break;
    case "pg/L":
      output = inputInGramPerCubicCentimeter / 1.0e-15;
      break;
    case "Pg/l":
      output = inputInGramPerCubicCentimeter / 1000000000000;
      break;
    case "psi/1000ft":
      output = inputInGramPerCubicCentimeter / 0.00231;
      break;
    case "Tg/L":
      output = inputInGramPerCubicCentimeter / 1000000000;
      break;
    case "t/yd³":
      output = inputInGramPerCubicCentimeter / 1.18655;
      break;
  }
  result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;
}
let queryParams = [
  {
    name: "value",
    values: defaultval,
  },
  {
    name: "convertfrom",
    values: selectFrom,
  },
  {
    name: "convertto",
    values: selectTo,
  },
];
function handleSubmit() {
  convertArea();
  resultPage2(queryParams);
}
calcBtn.addEventListener("click", handleSubmit);

function setParams(queryParams) {
  let url =
    window.location.protocol +
    "//" +
    window.location.host +
    "/" +
    permaLink +
    "?";
  for (queryP of queryParams) {
    if (history.pushState) {
      var str = "&" + queryP.name + "=" + queryP.values.value;
      url = url + str;
    }
  }
  window.history.pushState({ path: url }, "", url);
}

function setParamValues(queryParams) {
  const params = new URLSearchParams(window.location.search);
  for (queryP of queryParams) {
    var parameter_value = params.get(queryP.name);
    if (queryP.values.tagName == "INPUT") {
      queryP.values.value = parameter_value;
    } else if (queryP.values.tagName == "SELECT") {
      queryP.values.value = parameter_value;
    }
  }
}
function resultPage2(queryParams) {
  var newUrl = window.location.href;
  if (!newUrl.includes("?")) {
    setParams(queryParams);
  } else {
    setParams(queryParams);
    // gtag("event", "page_view", {
    //   page_location: window.location.pathname + location.search,
    // });
  }
}
function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    handleSubmit();
  }
}
init();
