let api = "https://api.exchangerate-api.com/v4/latest/USD";
let currencies = [
  { value: "USD", name: "US Dollar" },
  { value: "INR", name: "Indian Rupees" },
  { value: "GBP", name: "British Pound" },
  { value: "JPY", name: "Japanese Yen" },
  { value: "CAD", name: "Canadian Dollar" },
  { value: "CNY", name: "CNYYuan Renminbi" },
  { value: "CHF", name: "CHFSwiss Franc" },
  { value: "AUD", name: "AUDAustralian Dollar" },
  { value: "NZD", name: "NZDNew Zealand Dollar " },
  { value: "HKD", name: "HKDHong Kong Dollar" },
  { value: "RUB", name: "RUBRussian Ruble" },
  { value: "ZAR", name: "ZAR South African Rand" },
  { value: "MXN", name: "MXNMexican Nuevo Peso" },
  { value: "AED", name: "AEDEmirati Dirham" },
  { value: "ARS", name: "ARSArgentine Peso" },
  { value: "AUD", name: "AUDAustralian Dollar" },
  { value: "CLP", name: "CLPChilean Peso" },
  { value: "COP", name: "COPColombian Peso" },
  { value: "HRK", name: "HRKCroatian Kuna" },
  { value: "BGN", name: "BGNBulgarian Lev" },
  { value: "RON", name: "RONRomanian New Leu" },
  { value: "BRL", name: "BRLBrazilian Real" },
  { value: "KRW", name: "KRWKorean Won" },
  { value: "SGD", name: "SGDSingapore Dollar" },
  { value: "TWD", name: "TWDTaiwan Dollar" },
  { value: "BSD", name: "BSDBahamian Dollar" },
  { value: "CAD", name: "CADCanadian Dollar" },
  { value: "CHF", name: "CHFSwiss Franc" },
  { value: "CLP", name: "CLPChilean Peso" },
  { value: "COP", name: "COPColombian Peso" },
];
let amount = document.getElementById("amount");
amount.value = 100;
let selectto = document.getElementById("selectto");
let currencySelect = document.getElementById("currency-select");
let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result-section");
let resultFrom;
let resultTo;
let searchValue = amount;
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;
currencies.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  currencySelect.add(option);
  currencySelect.value = "USD";
});
currencies.forEach((currency) => {
  let option = document.createElement("option");
  option.value = currency.value;
  option.text = `${currency.value} - ${currency.name}`;
  selectto.add(option);
  selectto.value = "INR";
});

let queryParams = [
  {
    name: "amount",
    values: amount,
  },
  {
    name: "convertfrom",
    values: currencySelect,
  },
  {
    name: "convertto",
    values: selectto,
  },
];

function handleSubmit() {
  // e.preventDefault();
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then((y) => displayResults(y));
  resultPage2(queryParams);
}
function displayResults(currency) {
  let fromRate = currency.rates[currencySelect.value];
  let toRate = currency.rates[selectto.value];
  result.innerHTML =
    amount.value +
    " " +
    currencySelect.value +
    " " +
    "=" +
    " " +
    ((toRate / fromRate) * amount.value).toFixed(2) +
    `<strong"> ` +
    selectto[selectto.selectedIndex].text.split("-")[1] +
    `</strong>`;
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
