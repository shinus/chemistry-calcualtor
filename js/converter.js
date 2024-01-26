var property = "temperature"; // Assuming property is a global variable
var fact = [1, 1, 1, 1, 1]; // Assuming fact is an array with appropriate values
var box = ["Box1", "Box2", "Box3", "Box4", "Box5"]; // Assuming box is an array with appropriate values

function getTable() {
  var stTable = document.getElementById("stTable").value;
  var enTable = document.getElementById("enTable").value;
  if (enTable > stTable) getConversionTable(stTable, enTable, property);
  else alert("Start value should be less than end");
}

// ... (rest of the code)

document.getElementById("calculate_btn").addEventListener("click", () => {
  var stTable = document.getElementById("stTable").value;
  var enTable = document.getElementById("enTable").value;
  if (enTable > stTable) getConversionTable(stTable, enTable, property);
  else alert("Start value should be less than end");
});

function getConversionTable(start, end, property) {
  var table = "";
  var box1 = Box.options[document.getElementById("calculator-form").boxmenu.selectedIndex].text;
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
  var sourceIndex = document.getElementById("calculator-form").boxmenu.selectedIndex;
  var sourceFactor = fact[sourceIndex];

  var targetIndex = document.calculator_form1.boxmenu.selectedIndex;
  var targetFactor = fact[targetIndex];

  var result = input;
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

// Ensure the rest of your code is correctly integrated.
