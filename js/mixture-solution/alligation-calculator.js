console.log('js loaded alligation')

let input1 = document.getElementById("input1");
let inputdrop1 = document.getElementById('inputdrop1')
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
let inputdrop2 = document.getElementById("inputdrop2");
let inputdrop3 = document.getElementById("inputdrop3");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "higher", values: input1 },
    { name: "lower", values: input2 },
    { name: "required", values: input3 },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (queryP of queryParams) {
      var parameter_value = params.get(queryP.name);
      if (queryP.values.tagName == "INPUT") {
        queryP.values.value = parameter_value;
      } else if (queryP.values.tagName == "SELECT") {
        queryP.values.selectedIndex = parameter_value;
      }
    }
  }

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function calculateAlligation() {
    let highConc = parseFloat(input1.value);
    let lowConc = parseFloat(input2.value);
    let reqConc = parseFloat(input3.value);

    let H = reqConc - lowConc;
    let L = highConc - reqConc;

    return result = "The alligation ratio to mix the two concentrations is \n" + H + " : " + L;
}

function showResult() {
    if (event && event.type == "click") {
        reloadPage(queryParams);
        return;
    }
    var result = calculateAlligation();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> " + result + "  </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}


calcBtn.addEventListener("click", showResult);
