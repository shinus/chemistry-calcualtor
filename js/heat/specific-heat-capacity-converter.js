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
var property = "specific-heat-capacity";

var box = [ "joule/kilogram/K (J/(kg*K))", "joule/kilogram/°C (J/(kg*°C))", "joule/gram/°C (J/(g*°C))", "kilojoule/kilogram/K (kJ/(kg*K))", "kilojoule/kilogram/°C (kJ/(kg*°C))", "calorie (IT)/gram/°C (cal/(g*°C))", "calorie (IT)/gram/°F (cal/(g*°F))", "calorie (th)/gram/°C (cal (th)/(g*°C))", "kilocalorie (IT)/kilogram/°C", "kilocalorie (th)/kilogram/°C", "kilocalorie (IT)/kilogram/K (kcal/(kg*K))", "kilocalorie (th)/kilogram/K", "kilogram-force meter/kilogram/K", "pound-force foot/pound/°R", "Btu (IT)/pound/°F (Btu/(lb*°F))", "Btu (th)/pound/°F (Btu (th)/(lb*°F))", "Btu (IT)/pound/°R (Btu/(lb*°R))", "Btu (th)/pound/°R (Btu (th)/(lb*°R))", "Btu (IT)/pound/°C (Btu/(lb*°C))", "CHU/pound/°C (CHU/(lb*°C))"];
var fact = [1, 1, 1000, 1000, 1000, 4186.79818795374, 4186.79818795374, 4183.9953808691, 4186.79818795374, 4183.9953808691, 4186.79818795374, 4183.9953808691, 9.80665002863885, 5.3803204610332, 4186.79818795374, 4183.9953808691, 4186.79818795374, 4183.9953808691, 2325.99791125388, 4186.79818795374];
  
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