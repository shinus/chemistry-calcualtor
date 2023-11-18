let area = [
  { value: "BTU/h∙ft²", name: "BTU/Hour Square Foot (BTU/h∙ft²)" },
  { value: "cal/s∙cm²", name: "Calorie/Second Square Centimeter (cal/s∙cm²)" },
  {
    value: "ft∙lb/min∙ft²",
    name: "Foot Pound/Minute Square Foot (ft∙lb/min∙ft²)",
  },
  { value: "hp/ft²", name: "Horsepower (metric)/Square Foot (hp/ft²)" },
  { value: "J/s∙m²", name: "Joule/Second Square Meter (J/s∙m²)" },
  { value: "kcal/h∙m²", name: "Kilocalorie/Hour Square Meter (kcal/h∙m²)" },
  { value: "kcal/h∙ft²", name: "Kilocalorie/Hour Square Foot (kcal/h∙ft²)" },
  { value: "kW/m²", name: "Kilowatt/Square Meter (kW/m²)" },
  { value: "W/cm²", name: "Watt/Square Centimeter (W/cm²)" },
  { value: "W/in²", name: "Watt/Square Inch (W/in²)" },
  { value: "W/m²", name: "Watt/Square Meter (W/m²)" },
  {
    value: "g∙cal/h∙cm²",
    name: "Gram Calorie/Hour Square Centimeter (g∙cal/h∙cm²)",
  },
  { value: "BTU/min∙ft²", name: "BTU/Minute Square Foot (BTU/min∙ft²)" },
  { value: "CHU/h∙ft²", name: "CHU/Hour Square Foot (CHU/h∙ft²)" },
  { value: "dyn/h∙cm", name: "Dyne/Hour Centimeter (dyn/h∙cm)" },
  { value: "erg/h∙mm²", name: "Erg/Hour Square Millimeter (erg/h∙mm²)" },
  { value: "hp/ft²", name: "Horsepower (UK)/Square Foot (hp/ft²)" },
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
  selectFrom.value = "BTU/h∙ft²";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kW/m²";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputKilowattPerSquareMeter = 0;
  let output = 0;

  switch (from) {
    case "BTU/h∙ft²":
      inputKilowattPerSquareMeter = input * 0.00315;
      break;
    case "cal/s∙cm²":
      inputKilowattPerSquareMeter = input * 41.868;
      break;
    case "ft∙lb/min∙ft²":
      inputKilowattPerSquareMeter = input * 0.00024;
      break;
    case "hp/ft²":
      inputKilowattPerSquareMeter = input * 7.91684;
      break;
    case "J/s∙m²":
      inputKilowattPerSquareMeter = input * 0.001;
      break;
    case "kcal/h∙m²":
      inputKilowattPerSquareMeter = input * 0.00116;
      break;
    case "kcal/h∙ft²":
      inputKilowattPerSquareMeter = input * 0.01252;
      break;
    case "kW/m²":
      inputKilowattPerSquareMeter = input;
      break;
    case "W/cm²":
      inputKilowattPerSquareMeter = input * 10;
      break;
    case "W/in²":
      inputKilowattPerSquareMeter = input * 1.55;
      break;
    case "W/m²":
      inputKilowattPerSquareMeter = input * 0.001;
      break;
    case "g∙cal/h∙cm²":
      inputKilowattPerSquareMeter = input * 0.01163;
      break;
    case "BTU/min∙ft²":
      inputKilowattPerSquareMeter = input * 0.18928;
      break;
    case "CHU/h∙ft²":
      inputKilowattPerSquareMeter = input * 0.00568;
      break;
    case "dyn/h∙cm":
      inputKilowattPerSquareMeter = input * 2.777777777e-10;
      break;
    case "erg/h∙mm²":
      inputKilowattPerSquareMeter = input * 2.777777777e-8;
      break;
    case "hp/ft²":
      inputKilowattPerSquareMeter = input * 8.02665;
      break;
    default:
  }
  switch (to) {
    case "BTU/h∙ft²":
      output = inputKilowattPerSquareMeter / 0.00315;
      break;
    case "cal/s∙cm²":
      output = inputKilowattPerSquareMeter / 41.868;
      break;
    case "ft∙lb/min∙ft²":
      output = inputKilowattPerSquareMeter / 0.00024;
      break;
    case "hp/ft²":
      output = inputKilowattPerSquareMeter / 7.91684;
      break;
    case "J/s∙m²":
      output = inputKilowattPerSquareMeter / 0.001;
      break;
    case "kcal/h∙m²":
      output = inputKilowattPerSquareMeter / 0.00116;
      break;
    case "kcal/h∙ft²":
      output = inputKilowattPerSquareMeter / 0.01252;
      break;
    case "kW/m²":
      output = inputKilowattPerSquareMeter;
      break;
    case "W/cm²":
      output = inputKilowattPerSquareMeter / 10;
      break;
    case "W/in²":
      output = inputKilowattPerSquareMeter / 1.55;
      break;
    case "W/m²":
      output = inputKilowattPerSquareMeter / 0.001;
      break;
    case "g∙cal/h∙cm²":
      output = inputKilowattPerSquareMeter / 0.01163;
      break;
    case "BTU/min∙ft²":
      output = inputKilowattPerSquareMeter / 0.18928;
      break;
    case "CHU/h∙ft²":
      output = inputKilowattPerSquareMeter / 0.00568;
      break;
    case "dyn/h∙cm":
      output = inputKilowattPerSquareMeter / 2.777777777e-10;
      break;
    case "erg/h∙mm²":
      output = inputKilowattPerSquareMeter / 2.777777777e-8;
      break;
    case "hp/ft²":
      output = inputKilowattPerSquareMeter / 8.02665;
      break;
    default:
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
