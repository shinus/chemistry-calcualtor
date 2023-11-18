let area = [
  { value: "dyn.cm", name: "Dyne Centimeter (dyn∙cm)" },
  { value: "dyn.m", name: "Dyne Meter (dyn∙m)" },
  { value: "dyn.mm", name: "Dyne Millimeter (dyn∙mm)" },
  { value: "gf.cm", name: "Gram Force Centimeter (gf∙cm)" },
  { value: "gf.m", name: "Gram Force Meter (gf∙m)" },
  { value: "gf.mm", name: "Gram Force Millimeter (gf∙mm)" },
  { value: "kgf.cm", name: "Kilogram Force Centimeter (kgf∙cm)" },
  { value: "kgf.m", name: "Kilogram Force Meter (kgf∙m)" },
  { value: "kgf.mm", name: "Kilogram Force Millimeter (kgf∙mm)" },
  { value: "N.cm", name: "Newton Centimeter (N∙cm)" },
  { value: "N.m", name: "Newton Meter (N∙m)" },
  { value: "N.mm", name: "Newton Millimeter (N∙mm)" },
  { value: "ozf.ft", name: "Ounce Force Foot (ozf∙ft)" },
  { value: "ozf.in", name: "Ounce Force Inch (ozf∙in)" },
  { value: "kN.m", name: "Kilonewton Meter (kN∙m)" },
  { value: "lbf.ft", name: "Pound Force Foot (lbf∙ft)" },
  { value: "lbf.in", name: "Pound Force Inch (lbf∙in)" },
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
  selectFrom.value = "kgf.m";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "gf.m";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInGramForceMeter = 0;
  let output = 0;

  switch (from) {
    case "dyn.cm":
      inputInGramForceMeter = input * 0.0000101972;
      break;
    case "dyn.m":
      inputInGramForceMeter = input * 0.0010197162;
      break;
    case "dyn.mm":
      inputInGramForceMeter = input * 0.0000010197;
      break;
    case "gf.cm":
      inputInGramForceMeter = input * 0.01;
      break;
    case "gf.m":
      inputInGramForceMeter = input;
      break;
    case "gf.mm":
      inputInGramForceMeter = input * 0.001;
      break;
    case "kgf.cm":
      inputInGramForceMeter = input * 10;
      break;
    case "kgf.m":
      inputInGramForceMeter = input * 1000;
      break;
    case "kgf.mm":
      inputInGramForceMeter = input * 1;
      break;
    case "N.cm":
      inputInGramForceMeter = input * 1.01972;
      break;
    case "N.m":
      inputInGramForceMeter = input * 101.97162;
      break;
    case "N.mm":
      inputInGramForceMeter = input * 0.10197;
      break;
    case "ozf.ft":
      inputInGramForceMeter = input * 8.64093;
      break;
    case "ozf.in":
      inputInGramForceMeter = input * 0.72008;
      break;
    case "kN.m":
      inputInGramForceMeter = input * 101971.6213;
      break;
    case "lbf.ft":
      inputInGramForceMeter = input * 138.25496;
      break;
    case "lbf.in":
      inputInGramForceMeter = input * 11.52125;
      break;
  }
  switch (to) {
    case "dyn.cm":
      output = inputInGramForceMeter / 0.0000101972;
      break;
    case "dyn.m":
      output = inputInGramForceMeter / 0.0010197162;
      break;
    case "dyn.mm":
      output = inputInGramForceMeter / 0.0000010197;
      break;
    case "gf.cm":
      output = inputInGramForceMeter / 0.01;
      break;
    case "gf.m":
      output = inputInGramForceMeter;
      break;
    case "gf.mm":
      output = inputInGramForceMeter / 0.001;
      break;
    case "kgf.cm":
      output = inputInGramForceMeter / 10;
      break;
    case "kgf.m":
      output = inputInGramForceMeter / 1000;
      break;
    case "kgf.mm":
      output = inputInGramForceMeter / 1;
      break;
    case "N.cm":
      output = inputInGramForceMeter / 1.01972;
      break;
    case "N.m":
      output = inputInGramForceMeter / 101.97162;
      break;
    case "N.mm":
      output = inputInGramForceMeter / 0.10197;
      break;
    case "ozf.ft":
      output = inputInGramForceMeter / 8.64093;
      break;
    case "ozf.in":
      output = inputInGramForceMeter / 0.72008;
      break;
    case "kN.m":
      output = inputInGramForceMeter / 101971.6213;
      break;
    case "lbf.ft":
      output = inputInGramForceMeter / 138.25496;
      break;
    case "lbf.in":
      output = inputInGramForceMeter / 11.52125;
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
