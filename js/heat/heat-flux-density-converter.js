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
var property = "heat-flux-density";

var box = [ "watt/square meter (W/m²)", "kilowatt/square meter (kW/m²)", "watt/square centimeter (W/cm²)", "watt/square inch (W/in²)", "joule/second/square meter (J/(s*m²))", "kilocalorie (IT)/hour/square meter", "kilocalorie (IT)/hour/square foot", "calorie (IT)/second/square centimeter", "calorie (IT)/minute/square centimeter", "calorie (IT)/hour/square centimeter", "calorie (th)/second/square centimeter", "calorie (th)/minute/square centimeter", "calorie (th)/hour/square centimeter", "dyne/hour/centimeter (dyn/(h*cm))", "erg/hour/square millimeter", "foot pound/minute/square foot", "horsepower/square foot (hp/ft²)", "horsepower (metric)/square foot", "Btu (IT)/second/square foot", "Btu (IT)/minute/square foot", "Btu (IT)/hour/square foot (Btu/(h*ft²))", "Btu (th)/second/square inch", "Btu (th)/second/square foot", "Btu (th)/minute/square foot", "Btu (th)/hour/square foot", "CHU/hour/square foot (CHU/(h*ft²))"];
var fact = [1, 1000, 10000, 1550.0031000062, 1, 1.16299999980927, 12.5184277515717, 41867.2807201172, 697.800184917049, 11.6299999710413, 41839.253587716, 697.333536024948, 11.6222222235136, 2.77777777777778E-07, 2.77777777777778E-05, 0.243231715585053, 8026.64847293013, 7916.84149691639, 11356.538527057, 189.275462991442, 3.15459074136261, 1633986.92810458, 11348.9343350659, 189.148869807131, 3.15248105413267, 5.67826339535553];
  
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