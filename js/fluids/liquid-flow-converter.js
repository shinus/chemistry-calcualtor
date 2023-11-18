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
var property = "liquid-flow";

var box = [ "cubic meter/second (m³/s)", "cubic meter/day (m³/d)", "cubic meter/hour (m³/h)", "cubic meter/minute (m³/min)", "cubic centimeter/day (cm³/d)", "cubic centimeter/hour (cm³/h)", "cubic centimeter/minute (cm³/min)", "cubic centimeter/second (cm³/s)", "liter/day (L/d)", "liter/hour (L/h)", "liter/minute (L/min)", "liter/second (L/s)", "milliliter/day (mL/d)", "milliliter/hour (mL/h)", "milliliter/minute (mL/min)", "milliliter/second (mL/s)", "gallon (US)/day (gal (US)/d)", "gallon (US)/hour (gal (US)/h)", "gallon (US)/minute (gal (US)/min)", "gallon (US)/second (gal (US)/s)", "gallon (UK)/day (gal (UK)/d)", "gallon (UK)/hour (gal (UK)/h)", "gallon (UK)/minute (gal (UK)/min)", "gallon (UK)/second (gal (UK)/s)", "kilobarrel (US)/day (kbbl (US)/d)", "barrel (US)/day (bbl (US)/d)", "barrel (US)/hour (bbl (US)/h)", "barrel (US)/minute (bbl (US)/min)", "barrel (US)/second (bbl (US)/s)", "acre-foot/year (ac*ft/y)", "acre-foot/day (ac*ft/d)", "acre-foot/hour (ac*ft/h)", "hundred-cubic foot/day", "hundred-cubic foot/hour", "hundred-cubic foot/minute", "ounce/hour (oz/h)", "ounce/minute (oz/min)", "ounce/second (oz/s)", "ounce (UK)/hour (oz (UK)/h)", "ounce (UK)/minute (oz (UK)/min)", "ounce (UK)/second (oz (UK)/s)", "cubic yard/hour (yd³/h)", "cubic yard/minute (yd³/min)", "cubic yard/second (yd³/s)", "cubic foot/hour (ft³/h)", "cubic foot/minute (ft³/min)", "cubic foot/second (ft³/s)", "cubic inch/hour (in³/h)", "cubic inch/minute (in³/min)", "cubic inch/second (in³/s)", "pound/second (Gasoline at 15.5°C)", "pound/minute (Gasoline at 15.5°C)", "pound/hour (Gasoline at 15.5°C) (lb/h)", "pound/day (Gasoline at 15.5°C) (lb/d)", "kilogram/second (Gasoline at 15.5°C)", "kilogram/minute (Gasoline at 15.5°C)", "kilogram/hour (Gasoline at 15.5°C)", "kilogram/day (Gasoline at 15.5°C) (kg/d)"];
var fact = [1, 1.15740740740741E-05, 0.000277777777778, 0.016666666666667, 1.15740740740741E-11, 2.77777777777778E-10, 1.66666666666667E-08, 1E-06, 1.15740740740741E-08, 2.77777777777778E-07, 1.66666666666667E-05, 0.001, 1.15740740740741E-11, 2.77777777777778E-10, 1.66666666666667E-08, 1E-06, 4.38126363888889E-08, 1.05150327333334E-06, 6.30901963999996E-05, 0.003785411784002, 5.26167824074079E-08, 1.26280277777777E-06, 7.57681666666682E-05, 0.004546090000002, 0.001840130728334, 1.84013072833335E-06, 4.41631374799992E-05, 0.002649788248799, 0.158987294938922, 3.91136089388217E-05, 0.014276467262663, 0.342635214347929, 3.27741280001366E-05, 0.000786579072003, 0.047194744319762, 8.21486932291699E-09, 4.92892159374995E-07, 2.95735295625E-05, 7.89251785047729E-09, 4.73551071028637E-07, 2.8413064261719E-05, 0.00021237634945, 0.012742580967027, 0.764554858167776, 7.86579071999993E-06, 0.000471947443223, 0.028316846593194, 4.55196222244551E-09, 2.73117733333336E-07, 1.63870640000001E-05, 0.000613518927662, 1.02253154618056E-05, 1.70421924421297E-07, 7.1009135150461E-09, 0.001352577707176, 2.25429617824074E-05, 3.7571602974537E-07, 1.56548345717591E-08];
  
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