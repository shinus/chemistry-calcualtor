let area = [
  { value: "cm³/g", name: "Cubic Centimeter/Gram (cm³/g)" },
  { value: "ft³/kg", name: "Cubic Feet/Kilogram (ft³/kg)" },
  { value: "ft³/lb", name: "Cubic Feet/Pound (ft³/lb)" },
  { value: "m³/kg", name: "Cubic Meter/Kilogram (m³/kg)" },
  { value: "gal/lb", name: "Gallon (UK)/Pound (gal/lb)" },
  { value: "L/g", name: "Liter/Gram (L/g)" },
  { value: "L/kg", name: "Liter/Kilogram (L/kg)" },
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
  selectFrom.value = "L/kg";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "L/g";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInLiterGram = 0;
  let output = 0;
  switch (from) {
    case "cm³/g":
      inputInLiterGram = input * 0.001;
      break;
    case "ft³/kg":
      inputInLiterGram = input * 0.02832;
      break;
    case "ft³/lb":
      inputInLiterGram = input * 0.06243;
      break;
    case "m³/kg":
      inputInLiterGram = input * 1;
      break;
    case "gal/lb":
      inputInLiterGram = input * 0.01002;
      break;
    case "L/g":
      inputInLiterGram = input;
      break;
    case "L/kg":
      inputInLiterGram = input * 0.001;
      break;
    default:
      console.log("Invalid unit");
  }
  switch (to) {
    case "cm³/g":
      output = inputInLiterGram / 0.001;
      break;
    case "ft³/kg":
      output = inputInLiterGram / 0.02832;
      break;
    case "ft³/lb":
      output = inputInLiterGram / 0.06243;
      break;
    case "m³/kg":
      output = inputInLiterGram / 1;
      break;
    case "gal/lb":
      output = inputInLiterGram / 0.01002;
      break;
    case "L/g":
      output = inputInLiterGram;
      break;
    case "L/kg":
      output = inputInLiterGram / 0.001;
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
