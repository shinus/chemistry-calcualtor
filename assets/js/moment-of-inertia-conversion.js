let area = [
  { value: "G∙cm²", name: "Gram Square Centimeter (G∙cm²)" },
  {
    value: "kgf∙cm∙s²",
    name: "Kilogram Force Centimeter Sq. Second (kgf∙cm∙s²)",
  },
  { value: "kgf∙m∙s²", name: "Kilogram Force Meter Square Second (kgf∙m∙s²)" },
  { value: "kg∙cm²", name: "Kilogram Square Centimeter (kg∙cm²)" },
  { value: "kg∙m²", name: "Kilogram Square Meter (kg∙m²)" },
  { value: "oz∙in∙s²", name: "Ounce Inch Square Second (oz∙in∙s²)" },
  { value: "oz∙in²", name: "Ounce Square Inch (oz∙in²)" },
  { value: "lb∙ft∙s²", name: "Pound Foot Square Second (lb∙ft∙s²)" },
  { value: "lb∙in∙s²", name: "Pound Inch Square Second (lb∙in∙s²)" },
  { value: "lb∙ft²", name: "Pound Square Foot (lb∙ft²)" },
  { value: "lb∙in²", name: "Pound Square Inch (lb∙in²)" },
  { value: "slug∙ft²", name: "Slug Square Foot (slug∙ft²)" },
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
  selectFrom.value = "G∙cm²";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kg∙m²";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilogramSquareMeter = 0;
  let output = 0;

  switch (from) {
    case "G∙cm²":
      inputInKilogramSquareMeter = input * 1e-7;
      break;
    case "kgf∙cm∙s²":
      inputInKilogramSquareMeter = input * 0.09807;
      break;
    case "kgf∙m∙s²":
      inputInKilogramSquareMeter = input * 9.80665;
      break;
    case "kg∙cm²":
      inputInKilogramSquareMeter = input / 0.0001;
      break;
    case "kg∙m²":
      inputInKilogramSquareMeter = input;
      break;
    case "oz∙in∙s²":
      inputInKilogramSquareMeter = input * 0.00706;
      break;
    case "oz∙in²":
      inputInKilogramSquareMeter = input * 0.00001829;
      break;
    case "lb∙ft∙s²":
      inputInKilogramSquareMeter = input * 1.35582;
      break;
    case "lb∙in∙s²":
      inputInKilogramSquareMeter = input * 0.11298;
      break;
    case "lb∙ft²":
      inputInKilogramSquareMeter = input * 0.04214;
      break;
    case "lb∙in²":
      inputInKilogramSquareMeter = input * 0.00029;
      break;
    case "slug∙ft²":
      inputInKilogramSquareMeter = input * 1.34359;
      break;
  }

  switch (to) {
    case "G∙cm²":
      output = inputInKilogramSquareMeter / 1e-7;
      break;
    case "kgf∙cm∙s²":
      output = inputInKilogramSquareMeter / 0.09807;
      break;
    case "kgf∙m∙s²":
      output = inputInKilogramSquareMeter / 9.80665;
      break;
    case "kg∙cm²":
      output = inputInKilogramSquareMeter / 0.0001;
      break;
    case "kg∙m²":
      output = inputInKilogramSquareMeter;
      break;
    case "oz∙in∙s²":
      output = inputInKilogramSquareMeter / 0.00706;
      break;
    case "oz∙in²":
      output = inputInKilogramSquareMeter / 0.00001829;
      break;
    case "lb∙ft∙s²":
      output = inputInKilogramSquareMeter / 1.35582;
      break;
    case "lb∙in∙s²":
      output = inputInKilogramSquareMeter / 0.11298;
      break;
    case "lb∙ft²":
      output = inputInKilogramSquareMeter / 0.04214;
      break;
    case "lb∙in²":
      output = inputInKilogramSquareMeter / 0.00029;
      break;
    case "slug∙ft²":
      output = inputInKilogramSquareMeter / 1.34359;
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
