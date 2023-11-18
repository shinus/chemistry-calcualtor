let area = [
  {
    value: "cal/s∙cm²∙°F",
    name: "Calorie/Second Square Centimeter °C (cal/s∙cm²∙°F)",
  },
  { value: "J/s∙m²∙K", name: "Joule/Second Square Meter K (J/s∙m²∙K)" },
  {
    value: "kcal/h∙ft²∙°C",
    name: "Kilocalorie/Hour Square Foot °C (kcal/h∙ft²∙°C)",
  },
  {
    value: "kcal/h∙m²∙°C",
    name: "Kilocalorie/Hour Square Meter °C (kcal/h∙m²∙°C)",
  },
  { value: "W/m²∙°C", name: "Watt/Square Meter °C (W/m²∙°C)" },
  { value: "W/m²∙K", name: "Watt/Square Meter K (W/m²∙K)" },
  { value: "BTU/h∙ft²∙°F", name: "BTU/Hour Square Foot °F (BTU/h∙ft²∙°F)" },
  { value: "CHU/h∙ft²∙°C", name: "CHU/Hour Square Foot °C (CHU/h∙ft²∙°C)" },
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
  selectFrom.value = "cal/s∙cm²∙°F";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "kcal/h∙m²∙°C";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInKilocalorieHourSquareMeter = 0;
  let output = 0;

  switch (from) {
    case "cal/s∙cm²∙°F":
      inputInKilocalorieHourSquareMeter = input * 36000;
      break;
    case "J/s∙m²∙K":
      inputInKilocalorieHourSquareMeter = input * 0.85985;
      break;
    case "kcal/h∙ft²∙°C":
      inputInKilocalorieHourSquareMeter = input * 10.76391;
      break;
    case "kcal/h∙m²∙°C":
      inputInKilocalorieHourSquareMeter = input;
      break;
    case "W/m²∙°C":
      inputInKilocalorieHourSquareMeter = input * 0.85985;
      break;
    case "W/m²∙K":
      inputInKilocalorieHourSquareMeter = input * 0.85985;
      break;
    case "BTU/h∙ft²∙°F":
      inputInKilocalorieHourSquareMeter = input * 4.88243;
      break;
    case "CHU/h∙ft²∙°C":
      inputInKilocalorieHourSquareMeter = input * 4.88243;
      break;
  }
  switch (to) {
    case "cal/s∙cm²∙°F":
      output = inputInKilocalorieHourSquareMeter / 36000;
      break;
    case "J/s∙m²∙K":
      output = inputInKilocalorieHourSquareMeter / 0.85985;
      break;
    case "kcal/h∙ft²∙°C":
      output = inputInKilocalorieHourSquareMeter / 10.76391;
      break;
    case "kcal/h∙m²∙°C":
      output = inputInKilocalorieHourSquareMeter;
      break;
    case "W/m²∙°C":
      output = inputInKilocalorieHourSquareMeter / 0.85985;
      break;
    case "W/m²∙K":
      output = inputInKilocalorieHourSquareMeter / 0.85985;
      break;
    case "BTU/h∙ft²∙°F":
      output = inputInKilocalorieHourSquareMeter / 4.88243;
      break;
    case "CHU/h∙ft²∙°C":
      output = inputInKilocalorieHourSquareMeter / 4.88243;
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
