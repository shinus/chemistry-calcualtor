let form = document.createElement("form");
form.setAttribute("id","calculator_form1");
form.setAttribute("name","calculator_form1");

let row = document.createElement("div")
row.setAttribute("class","row")
row.setAttribute("id","calculator-row-2");
let col1 = document.createElement("div");
col1.setAttribute("class","col-md-12")
let col2 = document.createElement("div");
col2.setAttribute("class","col-md-12")
let neer = document.createElement("div");
neer.setAttribute("class","d-flex calculator-inputs");
let label = document.createElement("label");
label.setAttribute("for","option1__id");
label.innerHTML = "option second";
let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("name","boxinput");
input.setAttribute("id","option2");
let select = document.createElement("select");
select.setAttribute("class","form-control");
select.setAttribute("name","boxmenu");
select.setAttribute("id","Box2");
neer.appendChild(input)
neer.appendChild(select)
col1.appendChild(label);
col2.appendChild(neer);
row.appendChild(col1);
row.appendChild(col2);
form.appendChild(row);
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
let query = document.querySelector(".row.w-100.mx-auto");
insertAfter(form,  query.lastElementChild);
//precision 
let apre = document.createElement("div");
apre.setAttribute("id","calculator-row-3")
apre.setAttribute("class","row")
insertAfter(apre,  form.lastElementChild);
let acol1 = document.createElement("div");
acol1.setAttribute("class","col-md-12");
let acol2 = document.createElement("div");
acol2.setAttribute("class","col-md-12");
let alabel = document.createElement("label");
alabel.setAttribute("for","precision__id");
alabel.innerHTML = "precision";
acol1.appendChild(alabel);
let prediv = document.createElement("div");
prediv.setAttribute("class","d-flex calculator-inputs");
let ainput = document.createElement("select");
ainput.setAttribute("class","form-control");
ainput.setAttribute("name","precision");
ainput.setAttribute("id","precision");
var pitchNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let e = 0; e < pitchNames.length; e++) {
  let option = document.createElement("option")
    option.value = pitchNames[e];
    option.text = pitchNames[e];
    ainput.appendChild(option);
}
prediv.appendChild(ainput)
acol2.appendChild(prediv)
apre.appendChild(acol1)
apre.appendChild(acol2)

var Box = document.getElementById("Box");
var Box2 = document.getElementById("Box2");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var precision = document.getElementById("precision");



var preBox = Box.value;
var preBox2 = Box2.value;
var property = "solution-concentration";

var box = [ "kilogram/liter (kg/L)", "gram/liter (g/L)", "milligram/liter (mg/L)", "part/million (ppm)", "grain/gallon (US) (gr/gal (US))", "grain/gallon (UK) (gr/gal (UK))", "pound/gallon (US) (lb/gal (US))", "pound/gallon (UK) (lb/gal (UK))", "pound/million gallon (US)", "pound/million gallon (UK)", "pound/cubic foot (lb/ft³)"];
var fact = [1, 0.001, 1E-06, 9.98859000367304E-07, 1.71180612105784E-05, 1.42537676644471E-05, 0.119826428437127, 0.099776373608464, 1.19826428437127E-07, 9.97763736084643E-08, 0.016018463521794];
  
option2.value = 10
option1.value = 1;

function createDropDownForUnits(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");

    option.value = arr[i].values;
    option.text = arr[i].name;
    element.appendChild(option);
  }
}
function init() {
  
  createDropDownForUnits(box, Box);
  createDropDownForUnits(fact, Box2);
}
init();