let area = [
  { value: "l/l/°C", name: "length/length/Celsius (l/l/°C)" },
  { value: "l/l/°F", name: "Length/Length/Fahrenheit (l/l/°F)" },
  { value: "l/l/K", name: "Length/Length/Kelvin (l/l/K)" },
  { value: "l/l/°Ra", name: "Length/Length/Rankine (l/l/°Ra)" },
  { value: "l/l/°R", name: "Length/Length/Reaumur (l/l/°R)" },
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
  selectFrom.value = "l/l/°C";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "l/l/°F";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInLengthLengthFahrenheit = 0;
  let output = 0;

  switch (from) {
    case "l/l/°F":
      inputInLengthLengthFahrenheit = input;
      break;
    case "l/l/°C":
      inputInLengthLengthFahrenheit = input * 0.55556;
      break;
    case "l/l/K":
      inputInLengthLengthFahrenheit = input * 0.55556;
      break;
    case "l/l/°Ra":
      inputInLengthLengthFahrenheit = input * 1;
      break;
    case "l/l/°R":
      inputInLengthLengthFahrenheit = input * 0.44444;
      break;
  }
  switch (to) {
    case "l/l/°F":
      output = inputInLengthLengthFahrenheit;
      break;
    case "l/l/°C":
      output = inputInLengthLengthFahrenheit / 0.55556;
      break;
    case "l/l/K":
      output = inputInLengthLengthFahrenheit / 0.55556;
      break;
    case "l/l/°Ra":
      output = inputInLengthLengthFahrenheit / 1;
      break;
    case "l/l/°R":
      output = inputInLengthLengthFahrenheit / 0.44444;
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
