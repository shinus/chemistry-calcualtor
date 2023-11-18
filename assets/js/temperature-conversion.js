let area = [
  { value: "°C", name: "Celsius" },
  { value: "°F", name: "Fahrenheit" },
  { value: "K", name: "Kelvin" },
  { value: "°Ra", name: "Rankine" },
  { value: "°R", name: "Réaumur" },
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
  selectFrom.value = "°C";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "°F";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInSqM = 0;
  let output = 0;

  // Convert input to Celsius
  switch (from) {
    case "°C":
      output = input;
      break;
    case "°F":
      output = ((input - 32) * 5) / 9;
      break;
    case "K":
      output = input - 273.15;
      break;
    case "°Ra":
      output = ((input - 491.67) * 5) / 9;
      break;
    case "°R":
      output = (input * 5) / 4;
      break;
    default:
      alert("Invalid input unit");
      return;
  }

  // Convert Celsius to output
  switch (to) {
    case "°C":
      break;
    case "°F":
      output = (output * 9) / 5 + 32;
      break;
    case "K":
      output += 273.15;
      break;
    case "°Ra":
      output = ((output + 273.15) * 9) / 5;
      break;
    case "°R":
      output = (output * 4) / 5;
      break;
    default:
      alert("Invalid output unit");
      return;
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
