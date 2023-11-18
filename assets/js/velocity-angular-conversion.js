let area = [
  { value: "(°/s)", name: "Degree/Second (°/s)" },
  { value: "(rad/s)", name: "Radian/Second (rad/s)" },
  { value: "(rev/min)", name: "Revolution/Minute (rev/min)" },
  { value: "(rev/s)", name: "Revolution/Second (rev/s)" },
  { value: "(°/day)", name: "Degree/Day (°/day)" },
  { value: "(°/h)", name: "Degree/Hour (°/h)" },
  { value: "(°/min)", name: "Degree/Minute (°/min)" },
  { value: "(rad/day)", name: "Radian/Day (rad/day)" },
  { value: "(rad/h)", name: "Radian/Hour (rad/h)" },
  { value: "(rad/min)", name: "Radian/Minute (rad/min)" },
  { value: "(rev/day)", name: "Revolution/Day (rev/day)" },
  { value: "(rev/h)", name: "Revolution/Hour (rev/h)" },
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
  selectFrom.value = "(°/s)";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "(rev/min)";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInRevolutionPerMinute = 0;
  let output = 0;

  switch (from) {
    case "(°/s)":
      inputInRevolutionPerMinute = input * 0.16667;
      break;
    case "(rad/s)":
      inputInRevolutionPerMinute = input * 9.5493;
      break;
    case "(rev/min)":
      inputInRevolutionPerMinute = input;
      break;
    case "(rev/s)":
      inputInRevolutionPerMinute = input * 60;
      break;
    case "(°/day)":
      inputInRevolutionPerMinute = input * 0.000001929;
      break;
    case "(°/h)":
      inputInRevolutionPerMinute = input * 0.0000462963;
      break;
    case "(°/min)":
      inputInRevolutionPerMinute = input * 0.0027777778;
      break;
    case "(rad/day)":
      inputInRevolutionPerMinute = input * 0.0001105243;
      break;
    case "(rad/h)":
      inputInRevolutionPerMinute = input * 0.0026525824;
      break;
    case "(rad/min)":
      inputInRevolutionPerMinute = input * 0.1591549431;
      break;
    case "(rev/day)":
      inputInRevolutionPerMinute = input * 0.0006944444;
      break;
    case "(rev/h)":
      inputInRevolutionPerMinute = input * 0.0166666667;
      break;
  }
  switch (to) {
    case "(°/s)":
      output = inputInRevolutionPerMinute / 0.16667;
      break;
    case "(rad/s)":
      output = inputInRevolutionPerMinute / 9.5493;
      break;
    case "(rev/min)":
      output = inputInRevolutionPerMinute;
      break;
    case "(rev/s)":
      output = inputInRevolutionPerMinute / 60;
      break;
    case "(°/day)":
      output = inputInRevolutionPerMinute / 0.000001929;
      break;
    case "(°/h)":
      output = inputInRevolutionPerMinute / 0.0000462963;
      break;
    case "(°/min)":
      output = inputInRevolutionPerMinute / 0.0027777778;
      break;
    case "(rad/day)":
      output = inputInRevolutionPerMinute / 0.0001105243;
      break;
    case "(rad/h)":
      output = inputInRevolutionPerMinute / 0.0026525824;
      break;
    case "(rad/min)":
      output = inputInRevolutionPerMinute / 0.1591549431;
      break;
    case "(rev/day)":
      output = inputInRevolutionPerMinute / 0.0006944444;
      break;
    case "(rev/h)":
      output = inputInRevolutionPerMinute / 0.0166666667;
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
