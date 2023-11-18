let area = [
  { value: "cal/s∙cm∙°C", name: "Calorie/Second-Centimeter-°C (cal/s∙cm∙°C)" },
  { value: "kW/m∙K", name: "Kilowatt/Meter-K (kW/m∙K)" },
  { value: "W/cm∙°C", name: "Watt/Centimeter-°C (W/cm∙°C)" },
  { value: "W/m∙K", name: "Watt/Meter-K (W/m∙K)" },
  {
    value: "BTU∙in/h∙ft²∙°F",
    name: "BTU-Inch/Hour-Square Foot-°F (BTU∙in/h∙ft²∙°F)",
  },
  { value: "BTU/h∙ft∙°F", name: "BTU/Hour-Foot-°F (BTU/h∙ft∙°F)" },
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
  selectFrom.value = "cal/s∙cm∙°C";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "W/cm∙°C";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInWattPerCentimeter = 0;
  let output = 0;

  switch (from) {
    case "W/cm∙°C":
      inputInWattPerCentimeter = input;
      break;
    case "cal/s∙cm∙°C":
      inputInWattPerCentimeter = input * 4.184;
      break;
    case "kW/m∙K":
      inputInWattPerCentimeter = input * 10;
      break;
    case "W/m∙K":
      inputInWattPerCentimeter = input * 0.01;
      break;
    case "BTU∙in/h∙ft²∙°F":
      inputInWattPerCentimeter = input * 0.00144;
      break;
    case "BTU/h∙ft∙°F":
      inputInWattPerCentimeter = input * 0.0173;
      break;
    default:
      console.log("Invalid unit");
      break;
  }
  switch (to) {
    case "W/cm∙°C":
      output = inputInWattPerCentimeter;
      break;
    case "cal/s∙cm∙°C":
      output = inputInWattPerCentimeter / 4.184;
      break;
    case "kW/m∙K":
      output = inputInWattPerCentimeter / 10;
      break;
    case "W/m∙K":
      output = inputInWattPerCentimeter / 0.01;
      break;
    case "BTU∙in/h∙ft²∙°F":
      output = inputInWattPerCentimeter / 0.00144;
      break;
    case "BTU/h∙ft∙°F":
      output = inputInWattPerCentimeter / 0.0173;
      break;
    default:
      console.log("Invalid unit");
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
