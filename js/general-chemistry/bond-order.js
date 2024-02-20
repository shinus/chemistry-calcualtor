let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "bonding", values: input1 },
  { name: "antibonding", values: input2 },
];

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init()

calcBtn.addEventListener("click", showResult);
// calcBtn.style.background = "black";

function getExact() {
  let inpt1 = input1.value;
  let inpt2 = input2.value;
  var result = 0;

    let bondOrder = (inpt1 - inpt2) / 2;
     result = "Bond order: " + bondOrder.toFixed(2); // Display bond order with two decimal places
  
  return result
}

function showResult() {
  if (event && event.type == "click") {
    reloadPage(queryParams);
    return;
  }
  var result = getExact();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");

  output.innerHTML = "";

  div1.innerHTML = "<b>  " + result + "  </b>";

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
}

console.log("js loaded yes and updated b3");
