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
var property = "molar-flow";

var box = [ "mol/second (mol/s)", "examol/second (Emol/s)", "petamol/second (Pmol/s)", "teramol/second (Tmol/s)", "gigamol/second (Gmol/s)", "megamol/second (Mmol/s)", "kilomol/second (kmol/s)", "hectomol/second (hmol/s)", "dekamol/second (damol/s)", "decimol/second (dmol/s)", "centimol/second (cmol/s)", "millimol/second (mmol/s)", "micromol/second (µmol/s)", "nanomol/second (nmol/s)", "picomol/second (pmol/s)", "femtomol/second (fmol/s)", "attomol/second (amol/s)", "mol/minute (mol/min)", "mol/hour (mol/h)", "mol/day (mol/d)", "millimol/minute (mmol/min)", "millimol/hour (mmol/h)", "millimol/day (mmol/d)", "kilomol/minute (kmol/min)", "kilomol/hour (kmol/h)", "kilomol/day (kmol/d)"];
var fact = [1, 1E+018, 1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100, 10, 0.1, 0.01, 0.001, 1E-06, 1E-09, 1E-12, 1E-15, 1E-18, 0.016666666666667, 0.000277777777778, 1.15740740740741E-05, 1.66666666666667E-05, 2.77777777777778E-07, 1.15740740740741E-08, 16.6666666666667, 0.277777777777778, 0.011574074074074];
     
  
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