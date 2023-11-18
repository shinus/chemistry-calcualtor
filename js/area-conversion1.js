let area = [
  { value: "ac", name: "Acre" },
  { value: "ha", name: "Hectare" },
  { value: "cm", name: "Square Centimeter" },
  { value: "sq ft", name: "Square foot" },
  { value: "sq in", name: "Square inch" },
  { value: "sq km", name: "Square Kilometer" },
  { value: "sq m", name: "Square Meter" },
  { value: "sq mil", name: "Square Mile" },
  { value: "sq yd", name: "Square Yard" },
  { value: "a", name: "Are" },
  { value: "arp", name: "Arpent" },
  { value: "b", name: "Barn" },
  { value: "c in", name: "Circular Inch" },
  { value: "c mil", name: "Circular Mil" },
  { value: "cuer", name: "Cuerda" },
  { value: "pl", name: "Plaza" },
  { value: "rood", name: "Rood" },
  { value: "sq mi", name: "Section" },
  { value: "sq ch", name: "Square Chain" },
  { value: "sq dm", name: "Square Decimeter" },
  { value: "sq dam", name: "Square Dekameter" },
  { value: "sq hm", name: "Square Hecotometer" },
  { value: "sq mm", name: "Square Millimeter" },
  { value: "sq nm", name: "Square nanometer" },
  { value: "sq rd", name: "Square Perch" },
  { value: "str.", name: "Strema" },
  { value: "t.s", name: "Township" },
  { value: "v.cl.c.", name: "Varas Castellanas Cuad" },
  { value: "v.cn.c.", name: "Varas Conuqueras Cuad" },
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
  selectFrom.value = "ac";
});

area.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectTo.add(option);
  selectTo.value = "cm";
});

function convertArea() {
  let input = document.getElementById("from1").value;
  let from = selectFrom.value;
  let to = selectTo.value;
  let inputInSqM = 0;
  let output = 0;

  // Convert input to square meters
  switch (from) {
    case "ac":
      inputInSqM = input * 4046.86;
      break;
    case "ha":
      inputInSqM = input * 10000;
      break;
    case "cm":
      inputInSqM = input / 10000;
      break;
    case "sq ft":
      inputInSqM = input / 10.764;
      break;
    case "sq in":
      inputInSqM = input / 1550;
      break;
    case "sq km":
      inputInSqM = input * 1000000;
      break;
    case "sq m":
      inputInSqM = input;
      break;
    case "sq mil":
      inputInSqM = input * 2589988.11;
      break;
    case "sq yd":
      inputInSqM = input / 1.196;
      break;
    case "a":
      inputInSqM = input * 100;
      break;
    case "arp":
      inputInSqM = input * 3418.89;
      break;
    case "b":
      inputInSqM = input / 1562500;
      break;
    case "c in":
      inputInSqM = input / 1549.997;
      break;
    case "c mil":
      inputInSqM = input / 1973525.73;
      break;
    case "cuer":
      inputInSqM = input * 3934.592;
      break;
    case "pl":
      inputInSqM = input * 278.784;
      break;
    case "rood":
      inputInSqM = input * 1011.714;
      break;
    case "sq mi":
      inputInSqM = input * 2589988.11;
      break;
    case "sq ch":
      inputInSqM = input * 404.6873;
      break;
    case "sq dm":
      inputInSqM = input / 100;
      break;
    case "sq dam":
      inputInSqM = input * 100;
      break;
    case "sq hm":
      inputInSqM = input * 10000;
      break;
    case "sq mm":
      inputInSqM = input / 1000000;
      break;
    case "sq nm":
      inputInSqM = input / 1e18;
      break;
    case "sq rd":
      inputInSqM = input * 25.2929;
      break;
    case "str.":
      inputInSqM = input * 100000;
      break;
    case "t.s":
      inputInSqM = input * 93239571.04;
      break;
    case "v.cl.c.":
      inputInSqM = input * 0.6989862;
      break;
    case "v.cn.c.":
      inputInSqM = input * 1.550003;
      break;
  }

  // Convert square meters to output unit
  switch (to) {
    case "ac":
      output = inputInSqM / 4046.86;
      break;
    case "ha":
      output = inputInSqM / 10000;
      break;
    case "cm":
      output = inputInSqM * 10000;
      break;
    case "sq ft":
      output = inputInSqM * 10.764;
      break;
    case "sq in":
      output = inputInSqM * 1550;
      break;
    case "sq km":
      output = inputInSqM / 1000000;
      break;
    case "sq m":
      output = inputInSqM;
      break;
    case "sq mil":
      output = inputInSqM / 2589988.11;
      break;
    case "sq yd":
      output = inputInSqM * 1.196;
      break;
    case "a":
      output = inputInSqM / 100;
      break;
    case "arp":
      output = inputInSqM / 3418.89;
      break;
    case "b":
      output = inputInSqM * 1562500;
      break;
    case "c in":
      output = inputInSqM * 1549.997;
      break;
    case "c mil":
      output = inputInSqM * 1973525.73;
      break;
    case "cuer":
      output = inputInSqM / 3934.592;
      break;
    case "pl":
      output = inputInSqM / 278.784;
      break;
    case "rood":
      output = inputInSqM / 1011.714;
      break;
    case "sq mi":
      output = inputInSqM / 2589988.11;
      break;
    case "sq ch":
      output = inputInSqM / 404.6873;
      break;
    case "sq dm":
      output = inputInSqM * 100;
      break;
    case "sq dam":
      output = inputInSqM / 100;
      break;
    case "sq hm":
      output = inputInSqM / 10000;
      break;
    case "sq mm":
      output = inputInSqM * 1000000;
      break;
    case "sq nm":
      output = inputInSqM * 1e18;
      break;
    case "sq rd":
      output = inputInSqM / 25.2929;
      break;
    case "str.":
      output = inputInSqM / 100000;
      break;
    case "t.s":
      output = inputInSqM / 93239571.04;
      break;
    case "v.cl.c.":
      output = inputInSqM / 0.6989862;
      break;
    case "v.cn.c.":
      output = inputInSqM / 1.550003;
      break;
  }

  result.innerHTML = `${input} ${from} = ${output.toFixed(6)} ${to}`;
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
