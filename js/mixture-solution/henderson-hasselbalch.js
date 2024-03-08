let conjugate_base = document.getElementById("input1");
let acid = document.getElementById("input2");
let pk = document.getElementById("input3");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "base", values: conjugate_base },
    { name: "acid", values: acid },
    { name: "constant", values: pk },
];

function setParamValues(queryParams) {
    const params = new URLSearchParams(window.location.search);
    for (const queryP of queryParams) {
        var parameter_value = params.get(queryP.name);
        if (queryP.values.tagName === "INPUT") {
            queryP.values.value = parameter_value;
        } else if (queryP.values.tagName === "SELECT") {
            queryP.values.value = parameter_value; // Change selectedIndex to value
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

init();

function calculatePh() {
    let baseVal = parseFloat(conjugate_base.value);
    let acidVal = parseFloat(acid.value);
    let pKa = parseFloat(pk.value);

    let pH = pKa + Math.log10(baseVal / acidVal);
    result = `pH of the solution: ${pH.toFixed(2)}`;
    return result;
}

function resultPage2(queryParams) {
    reloadPage(queryParams);
  }

  function reloadPage(queryParams) {
    let url = "";
  
    for (queryP of queryParams) {
      var value;
  
      if (queryP.values.tagName == "INPUT") {
        value = queryP.values.value;
      } else if (queryP.values.tagName == "SELECT") {
        value = queryP.values.selectedIndex;
      }
  
      if (history.pushState) {
        var str = queryP.name + "=" + value + "&";
  
        url += str;
      }
    }
  
    url = url.slice(0, -1);
  
    var newURL =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      permaLink +
      "?" +
      url;
    window.location.href = newURL;
  }

function showResult() {
    if (event && event.type == "click") {
      reloadPage(queryParams);
      return;
    }
    var result = calculatePh();
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
  
    div1.innerHTML = "<b>  " + result + "   </b>";
  
    output.append(div1);
    output.append(div2);
  }
  
  calcBtn.addEventListener("click", showResult);
  