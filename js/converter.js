function getTable() {
  var stTable = document.getElementById("stTable").value;
  var enTable = document.getElementById("enTable").value;
  if (enTable > stTable) getConversionTable(stTable, enTable, property);
  else alert("Start value shuld be less than end");
}
var precision = document.getElementById("precision");
precision.addEventListener("change", function () {
  Calculatebox(
    document.getElementById("calculator-form"),
    document.calculator_form1,
    property
  );
});

Box.addEventListener("change", function () {
  var u1 = this.value;
  // if (u1 == preBox2) Box2.value = preBox;
  // preBox = Box.value;
  // preBox2 = Box2.value;
  Calculatebox(
    document.getElementById("calculator-form"),
    document.calculator_form1,
    property
  );
});

Box2.addEventListener("change", function () {
  var u2 = this.value;
  // if (u2 == preBox) Box.value = preBox2;
  // preBox = Box.value;
  // preBox2 = Box2.value;
  Calculatebox(
    document.calculator_form1,
    document.getElementById("calculator-form"),
    property
  );
});

option1.addEventListener("keyup", function () {
  Calculatebox(
    document.getElementById("calculator-form"),
    document.calculator_form1,
    property
  );
});

option2.addEventListener("keyup", function () {
  Calculatebox(
    document.calculator_form1,
    document.getElementById("calculator-form"),
    property
  );
});
function resultfun() {
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="row" id="calculator-row-4"><div class="col-md-12">
                          <label for="stTable__id">Rows of table start from</label>
                      </div><div class="col-md-12">
                          <div class="d-flex calculator-inputs"><input class="form-control" type="text" value="1" id="stTable"></div>

                      </div></div>
                      <div class="row" id="calculator-row-5"><div class="col-md-12">
                      <label for="enTable__id">Rows of table end from</label>
                  </div><div class="col-md-12">
                      <div class="d-flex calculator-inputs"><input class="form-control" type="text" value="10" id="enTable"></div>
                  </div></div>
                  <div class="row" id="calculator-row-6"><div class="col-md-12">
                  <div class="d-flex justify-content-end">
                  <button class="submit-button" style="background-color:#fa980b ;" type="submit" id="calculate_btn">generate</button>
                  </div>
                  </div></div>`;
  document.getElementById("result-section").appendChild(div);
}
window.onload = function (e) {
  UpdateboxMenu(Box);
  UpdateboxMenu(Box2);
  defaultConversion(0, 1);
  getTable();
  Calculatebox(
    document.getElementById("calculator-form"),
    document.calculator_form1,
    property
  );
};
var tempIncrement = new Array(0, -32, -273.15, -491.67, 0);

function UpdateboxMenu(boxMenu) {
  FillMenuWithArray(boxMenu, box);
}

function FillMenuWithArray(myMenu, myArray) {
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function Calculatebox(sourceForm, targetForm, property) {
  var sourceValue = sourceForm.boxinput.value;
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    ConvertFromTo(sourceForm, targetForm, property);
  }
}

function ConvertFromTo(sourceForm, targetForm, property) {
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  sourceIndex = sourceForm.boxmenu.selectedIndex;
  sourceFactor = fact[sourceIndex];
  targetIndex = targetForm.boxmenu.selectedIndex;
  targetFactor = fact[targetIndex];

  result = sourceForm.boxinput.value;
  if (property == "temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }

  result = result * sourceFactor;
  result = result / targetFactor;

  if (property == "temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  var prec = document.getElementById("precision").value;
  var round = Math.pow(10, prec);
  result = Math.round(result * round) / round;

  //---------Get Formula --------
  var formula;
  if (result < sourceForm.boxinput.value) {
    formula =
      sourceForm.boxinput.value +
      " " +
      box[sourceIndex] +
      " / " +
      Math.round((targetFactor / sourceFactor) * 10000000000) / 10000000000 +
      " = " +
      result +
      " " +
      box[targetIndex];
    document.getElementById("formula").innerHTML = formula;
  } else {
    formula =
      sourceForm.boxinput.value +
      " " +
      box[sourceIndex] +
      " Ã— " +
      Math.round((sourceFactor / targetFactor) * 10000000000) / 10000000000 +
      " = " +
      result +
      " " +
      box[targetIndex];
    document.getElementById("formula").innerHTML = formula;
  }

  if (property == "temperature") {
    if (result < sourceForm.boxinput.value) {
      formula =
        "(" +
        sourceForm.boxinput.value +
        " " +
        box[sourceIndex] +
        tempIncrement[sourceIndex] +
        ")  / " +
        Math.round((targetFactor / sourceFactor) * 10000000000) / 10000000000 +
        " = " +
        result +
        " " +
        box[targetIndex];
      document.getElementById("formula").innerHTML = formula;
    } else {
      formula =
        "(" +
        sourceForm.boxinput.value +
        " " +
        box[sourceIndex] +
        " Ã— " +
        Math.round((sourceFactor / targetFactor) * 10000000000) / 10000000000 +
        ") + " +
        tempIncrement[targetIndex] * -1 +
        " = " +
        result +
        " " +
        box[targetIndex];
      document.getElementById("formula").innerHTML = formula;
    }
  }

  targetForm.boxinput.value = result;
}

function defaultConversion(index1, index2) {
  document.getElementById("calculator-form").boxmenu.selectedIndex = index1;
  document.calculator_form1.boxmenu.selectedIndex = index2;
}
let sec = document.getElementById("result-section");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
div1.setAttribute("id", "formula");
div2.setAttribute("id", "conversionTable");
sec.appendChild(div1);
resultfun();
sec.appendChild(div2);
document.getElementById("calculate_btn").addEventListener("click", () => {
  var stTable = document.getElementById("stTable").value;
  var enTable = document.getElementById("enTable").value;
  if (enTable > stTable) getConversionTable(stTable, enTable, property);
  else alert("Start value shuld be less than end");
});
function getConversionTable(start, end, property) {
  var table = "";
  var box1 =
    Box.options[
      document.getElementById("calculator-form").boxmenu.selectedIndex
    ].text;
  var box2 = Box2.options[document.calculator_form1.boxmenu.selectedIndex].text;

  table =
    `<table class="table table-hover">
          <thead>
            <tr class="table-info">
              <th scope="col">Sr.No.</th>
              <th scope="col">` +
    box1 +
    `</th>
              <th scope="col">` +
    box2 +
    `</th>
            </tr>
          </thead><tbody>`;
  var k = 0;
  for (var i = start; i <= end; i++) {
    result = convert(i, property);
    k++;
    table =
      table +
      `<tr>
      <th scope="row">` +
      k +
      `</th>
      <td>` +
      i +
      `</td>
      <td>` +
      result +
      `</td>
    </tr>`;
  }
  table = table + `</tbody></table>`;
  document.getElementById("conversionTable").innerHTML = table;
}

function convert(input, property) {
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  sourceIndex =
    document.getElementById("calculator-form").boxmenu.selectedIndex;
  sourceFactor = fact[sourceIndex];

  targetIndex = document.calculator_form1.boxmenu.selectedIndex;
  targetFactor = fact[targetIndex];

  result = input;
  if (property == "temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;
  result = result / targetFactor;

  if (property == "temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  var prec = document.getElementById("precision").value;
  var round = Math.pow(10, prec);
  result = Math.round(result * round) / round;

  return result;
}
