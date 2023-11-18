let area = [
  { value: "cal/g∙°C", name: "Calorie/Gram °C (cal/g∙°C)" },
  { value: "J/g∙°C", name: "Joule/Gram °C (J/g∙°C)" },
  { value: "J/kg∙K", name: "Joule/Kilogram K (J/kg∙K)" },
  { value: "J/kg∙°C", name: "Joule/Kilogram °C (J/kg∙°C)" },
  { value: "kJ/kg∙K", name: "Kilocalorie/Kilogram °C (kJ/kg∙K)" },
  { value: "kJ/kg∙°C", name: "Kilojoule/Kilogram °C (kJ/kg∙°C)" },
  { value: "kJ/kg∙k", name: "Kilojoule/Kilogram K (kJ/kg∙K)" },
  { value: "BTU/lb∙°C", name: "BTU/Pound °C (BTU/lb∙°C)" },
  { value: "BTU/lb∙°F", name: "BTU/Pound °F (BTU/lb∙°F)" },
  { value: "BTU/lb∙°R", name: "BTU/Pound °R (BTU/lb∙°R)" },
  { value: "CHU/lb∙°C", name: "CHU/Pound °C (CHU/lb∙°C)" },
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
  selectFrom.value = "cal/g∙°C";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "J/kg∙K";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInJoulePerGram = 0;
  let output = 0;

  switch (from) {
    case "J/g∙°C":
      inputInJoulePerGram = input;
      break;
    case "cal/g∙°C":
      inputInJoulePerGram = input * 4.1868;
      break;
    case "J/kg∙K":
      inputInJoulePerGram = input * 0.001;
      break;
    case "J/kg∙°C":
      inputInJoulePerGram = input * 0.001;
      break;
    case "kJ/kg∙K":
      inputInJoulePerGram = input * 4.1868;
      break;
    case "kJ/kg∙k":
      inputInJoulePerGram = input * 1;
      break;
    case "kJ/kg∙°C":
      inputInJoulePerGram = input * 1;
      break;
    case "BTU/lb∙°C":
      inputInJoulePerGram = input * 2.326;
      break;
    case "BTU/lb∙°F":
      inputInJoulePerGram = input * 4.1868;
      break;
    case "BTU/lb∙°R":
      inputInJoulePerGram = input * 4.1868;
      break;
    case "CHU/lb∙°C":
      inputInJoulePerGram = input * 4.1868;
      break;
    default:
      console.log("Invalid unit");
  }
  switch (to) {
    case "J/g∙°C":
      output = output = inputInJoulePerGram;
      break;
    case "cal/g∙°C":
      output = inputInJoulePerGram / 4.1868;
      break;
    case "J/kg∙K":
      output = inputInJoulePerGram / 0.001;
      break;
    case "J/kg∙°C":
      output = inputInJoulePerGram / 0.001;
      break;
    case "kJ/kg∙K":
      output = inputInJoulePerGram / 4.1868;
      break;
    case "kJ/kg∙k":
      output = inputInJoulePerGram / 1;
      break;
    case "kJ/kg∙°C":
      output = inputInJoulePerGram / 1;
      break;
    case "BTU/lb∙°C":
      output = inputInJoulePerGram / 2.326;
      break;
    case "BTU/lb∙°F":
      output = inputInJoulePerGram / 4.1868;
      break;
    case "BTU/lb∙°R":
      output = inputInJoulePerGram / 4.1868;
      break;
    case "CHU/lb∙°C":
      output = inputInJoulePerGram / 4.1868;
      break;
    default:
      console.log("Invalid unit");
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
