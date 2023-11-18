let area = [
  { value: "rad/s²", name: "Radian/Square Second" },
  { value: "rad/min²", name: "Radian/Square Minute" },
  { value: "rev/min²", name: "Revolution/Square Minute" },
  { value: "rev/min.s", name: "Revolution/Minute Second" },
  { value: "rev/s²", name: "Revolution/Square Second" },
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
  selectFrom.value = "rev/min²";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "rev/s²";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let RevolutionPerMinute = 0;
  let output = 0;

  // Convert input to revolutions per square minute

  // Convert input to one unit
  switch (from) {
    case "rad/s²":
      RevolutionPerMinute = input * 572.9578;
      break;
    case "rad/min²":
      RevolutionPerMinute = input * 0.15915;
      break;
    case "rev/min.s":
      RevolutionPerMinute = input * 60;
      break;
    case "rev/min²":
      RevolutionPerMinute = input;
      break;
    case "rev/s²":
      RevolutionPerMinute = input * 3600;
      break;
    default:
      alert("Invalid 'from' unit selected");
      return;
  }

  // Convert square meters to output unit
  switch (to) {
    case "rad/s²":
      output = RevolutionPerMinute / 572.9578;
      break;
    case "rad/min²":
      output = RevolutionPerMinute / 0.15915;
      break;
    case "rev/min.s":
      output = RevolutionPerMinute / 60;
      break;
    case "rev/min²":
      output = RevolutionPerMinute;
      break;
    case "rev/s²":
      output = RevolutionPerMinute / 3600;
      break;
    default:
      alert("Invalid 'to' unit selected");
      return;
  }
  // result.innerHTML = `${input} ${from} = ${output.toFixed(2)} ${to}`;
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
