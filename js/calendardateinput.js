/***********************************************
 Fool-Proof Date Input Script with DHTML Calendar
 by Jason Moon - http://calendar.moonscript.com/date_input_box.cfm
 ************************************************/

var DefaultDateFormat = "MM/DD/YYYY";
var HideWait = 3;
var Y2kPivotPoint = 76;
var UnselectedMonthText = "";
var FontSize = 16;
var FontFamily = "Tahoma";
var CellWidth = 27;
var CellHeight = 24;
var ImageURL = "/img/calander.jpg";
var NextURL = "/img/next.gif";
var PrevURL = "/img/prev.gif";
var CalBGColor = "white";
var TopRowBGColor = "buttonface";
var DayBGColor = "lightgrey";

var ZCounter = 100;
var Today = new Date();
var WeekDays = new Array("S", "M", "T", "W", "T", "F", "S");
var MonthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var MonthNames = new Array(
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
);

with (document) {
  writeln("<style>");
  writeln(
    "td.calendardate_input_box {letter-spacing:normal;line-height:normal;font-family:" +
      FontFamily +
      ",Sans-Serif;font-size:" +
      FontSize +
      "px;}"
  );
  writeln(
    "select.calendardate_input_box {letter-spacing:.06em;font-family:Verdana,Sans-Serif;font-size:11px;}"
  );
  writeln(
    "input.calendardate_input_box {letter-spacing:.06em;font-family:Verdana,Sans-Serif;font-size:11px;}"
  );
  writeln("</style>");
}
function YearDigitsOnly(B) {
  var A = B.keyCode ? B.keyCode : B.which;
  return (
    A == 8 || A == 9 || A == 37 || A == 39 || A == 46 || (A > 47 && A < 58)
  );
}
function GetTagPixels(A, C) {
  var B = C == "LEFT" ? A.offsetLeft : A.offsetTop;
  while (A.tagName != "BODY" && A.tagName != "HTML") {
    A = A.offsetParent;
    B += C == "LEFT" ? A.offsetLeft : A.offsetTop;
  }
  return B;
}
function BehindCal(C, E, F, B, I, G) {
  var A = GetTagPixels(C, "LEFT");
  var D = A + C.offsetWidth;
  var H = G + C.offsetHeight;
  return G < I && H > B && A < F && D > E;
}
function FixSelectLists(I) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    var G = this.getCalendar();
    var E = G.offsetLeft;
    var F = E + G.offsetWidth;
    var A = G.offsetTop;
    var H = A + CellHeight * 9;
    var B = false;
    formLoop: for (var C = this.formNumber; C < document.forms.length; C++) {
      for (var D = 0; D < document.forms[C].elements.length; D++) {
        if (typeof document.forms[C].elements[D].type == "string") {
          if (
            document.forms[C].elements[D].type == "hidden" &&
            document.forms[C].elements[D].name == this.hiddenFieldName
          ) {
            B = true;
            D += 3;
          }
          if (B) {
            if (document.forms[C].elements[D].type.substr(0, 6) == "select") {
              ListTopY = GetTagPixels(document.forms[C].elements[D], "TOP");
              if (ListTopY < H) {
                if (
                  BehindCal(document.forms[C].elements[D], E, F, A, H, ListTopY)
                ) {
                  document.forms[C].elements[D].style.visibility = I
                    ? "hidden"
                    : "visible";
                }
              } else {
                break formLoop;
              }
            }
          }
        }
      }
    }
  }
}
function DayCellHover(D, A, C, E) {
  D.style.backgroundColor = A ? DayBGColor : C;
  if (A) {
    if (
      this.yearValue == Today.getFullYear() &&
      this.monthIndex == Today.getMonth() &&
      E == Today.getDate()
    ) {
      self.status = "Click to select today";
    } else {
      var B = E.toString();
      switch (B.substr(B.length - 1, 1)) {
        case "1":
          B += E == 11 ? "th" : "st";
          break;
        case "2":
          B += E == 12 ? "th" : "nd";
          break;
        case "3":
          B += E == 13 ? "th" : "rd";
          break;
        default:
          B += "th";
          break;
      }
      self.status = "Click to select " + this.monthName + " " + B;
    }
  } else {
    self.status = "";
  }
  return true;
}
function PickDisplayDay(C) {
  this.show();
  var F = this.getMonthList();
  var B = this.getDayList();
  var A = this.getYearField();
  FixDayList(
    B,
    GetDayCount(this.displayed.yearValue, this.displayed.monthIndex)
  );
  for (var E = 0; E < F.length; E++) {
    if (F.options[E].value == this.displayed.monthIndex) {
      F.options[E].selected = true;
    }
  }
  for (var D = 1; D <= B.length; D++) {
    if (D == C) {
      B.options[D - 1].selected = true;
    }
  }
  this.setPicked(this.displayed.yearValue, this.displayed.monthIndex, C);
  A.value = this.picked.yearPad;
  A.defaultValue = A.value;
}
function BuildCalendarDays() {
  var C = 5;
  if (
    (this.displayed.dayCount == 31 && this.displayed.firstDay > 4) ||
    (this.displayed.dayCount == 30 && this.displayed.firstDay == 6)
  ) {
    C = 6;
  } else {
    if (this.displayed.dayCount == 28 && this.displayed.firstDay == 0) {
      C = 4;
    }
  }
  var D =
    '<table width="' +
    CellWidth * 7 +
    '" cellspacing="0" cellpadding="1" style="cursor:default">';
  for (var A = 0; A < C; A++) {
    D += "<tr>";
    for (var B = 1; B <= 7; B++) {
      Day = A * 7 + (B - this.displayed.firstDay);
      if (Day >= 1 && Day <= this.displayed.dayCount) {
        if (
          this.displayed.yearValue == this.picked.yearValue &&
          this.displayed.monthIndex == this.picked.monthIndex &&
          Day == this.picked.day
        ) {
          TextStyle = "color:white;font-weight:bold;";
          BackColor = DayBGColor;
        } else {
          TextStyle = "color:black;";
          BackColor = CalBGColor;
        }
        if (
          this.displayed.yearValue == Today.getFullYear() &&
          this.displayed.monthIndex == Today.getMonth() &&
          Day == Today.getDate()
        ) {
          TextStyle += "border:1px solid darkred;padding:0px;";
        }
        D +=
          '<td align="center" class="calendardate_input_box" style="cursor:default;height:' +
          CellHeight +
          ";width:" +
          CellWidth +
          ";" +
          TextStyle +
          ";background-color:" +
          BackColor +
          '" onClick="' +
          this.objName +
          ".pickDay(" +
          Day +
          ')" onMouseOver="return ' +
          this.objName +
          ".displayed.dayHover(this,true,'" +
          BackColor +
          "'," +
          Day +
          ')" onMouseOut="return ' +
          this.objName +
          ".displayed.dayHover(this,false,'" +
          BackColor +
          "')\">" +
          Day +
          "</td>";
      } else {
        D +=
          '<td class="calendardate_input_box" style="height:' +
          CellHeight +
          '">&nbsp;</td>';
      }
    }
    D += "</tr>";
  }
  return (D += "</table>");
}
function GetGoodYear(B) {
  if (B.length == 4) {
    return B;
  } else {
    var A = B < Y2kPivotPoint ? 2000 : 1900;
    return A + parseInt(B, 10);
  }
}
function GetDayCount(A, B) {
  return B == 1 && (A % 400 == 0 || (A % 4 == 0 && A % 100 != 0))
    ? 29
    : MonthDays[B];
}
function VirtualButton(B, A) {
  if (A) {
    B.style.borderLeft = "buttonshadow 1px solid";
    B.style.borderTop = "buttonshadow 1px solid";
    B.style.borderBottom = "buttonhighlight 1px solid";
    B.style.borderRight = "buttonhighlight 1px solid";
  } else {
    B.style.borderLeft = "buttonhighlight 1px solid";
    B.style.borderTop = "buttonhighlight 1px solid";
    B.style.borderBottom = "buttonshadow 1px solid";
    B.style.borderRight = "buttonshadow 1px solid";
  }
}
function NeighborHover(B, A, C) {
  if (A) {
    VirtualButton(B, false);
    self.status = "Click to view " + C.fullName;
  } else {
    B.style.border = "buttonface 1px solid";
    self.status = "";
  }
  return true;
}
function FixDayList(C, E) {
  var A = C.selectedIndex + 1;
  if (E != C.length) {
    var D = C.length;
    for (var B = Math.min(E, D); B < Math.max(E, D); B++) {
      B >= E
        ? (C.options[E] = null)
        : (C.options[B] = new Option(B + 1, B + 1));
    }
    A = Math.min(A, E);
    C.options[A - 1].selected = true;
  }
  return A;
}
function FixYearInput(A) {
  var B = new RegExp("\\d{" + A.defaultValue.length + "}");
  if (!B.test(A.value)) {
    A.value = A.defaultValue;
  }
}
function CalIconHover(B) {
  var A = this.isShowing() ? "hide" : "show";
  self.status = B ? "Click to " + A + " the calendar" : "";
  return true;
}
function CalTimerReset() {
  eval("clearTimeout(" + this.timerID + ")");
  eval(
    this.timerID +
      "=setTimeout('" +
      this.objName +
      ".show()'," +
      HideWait * 1000 +
      ")"
  );
}
function DoTimer(CancelTimer) {
  if (CancelTimer) {
    eval("clearTimeout(" + this.timerID + ")");
  } else {
    eval(this.timerID + "=null");
    this.resetTimer();
  }
}
function ShowCalendar() {
  if (this.isShowing()) {
    var A = true;
    this.getCalendar().style.zIndex = --ZCounter;
    this.getCalendar().style.visibility = "hidden";
    this.fixSelects(false);
  } else {
    var A = false;
    this.fixSelects(true);
    this.getCalendar().style.zIndex = ++ZCounter;
    this.getCalendar().style.visibility = "visible";
  }
  this.handleTimer(A);
  self.status = "";
}
function SetElementStatus(A) {
  this.getDayList().style.visibility = A ? "hidden" : "visible";
  this.getYearField().style.visibility = A ? "hidden" : "visible";
  this.getCalendarLink().style.visibility = A ? "hidden" : "visible";
}
function CheckMonthChange(C) {
  var B = this.getDayList();
  if (C.options[C.selectedIndex].value == "") {
    B.selectedIndex = 0;
    this.hideElements(true);
    this.setHidden("");
  } else {
    this.hideElements(false);
    if (this.isShowing()) {
      this.resetTimer();
      this.getCalendar().style.zIndex = ++ZCounter;
    }
    var A = FixDayList(
      B,
      GetDayCount(this.picked.yearValue, C.options[C.selectedIndex].value)
    );
    this.setPicked(this.picked.yearValue, C.options[C.selectedIndex].value, A);
  }
}
function CheckDayChange(A) {
  if (this.isShowing()) {
    this.show();
  }
  this.setPicked(
    this.picked.yearValue,
    this.picked.monthIndex,
    A.selectedIndex + 1
  );
}
function CheckYearInput(A) {
  if (A.value.length == A.defaultValue.length && A.defaultValue != A.value) {
    if (this.isShowing()) {
      this.resetTimer();
      this.getCalendar().style.zIndex = ++ZCounter;
    }
    var B = GetGoodYear(A.value);
    var C = this.getMonthList();
    var D = FixDayList(
      this.getDayList(),
      GetDayCount(B, this.picked.monthIndex)
    );
    this.setPicked(B, this.picked.monthIndex, D);
    A.defaultValue = A.value;
  }
}
function dateObject() {
  if (Function.call) {
    var C = this;
    var B = 0;
  } else {
    var C = arguments[0];
    var B = 1;
  }
  C.date =
    arguments.length == B + 1
      ? new Date(arguments[B + 0])
      : new Date(arguments[B + 0], arguments[B + 1], arguments[B + 2]);
  C.yearValue = C.date.getFullYear();
  C.monthIndex = C.date.getMonth();
  C.monthName = MonthNames[C.monthIndex];
  C.fullName = C.monthName + " " + C.yearValue;
  C.day = C.date.getDate();
  C.dayCount = GetDayCount(C.yearValue, C.monthIndex);
  var A = new Date(C.yearValue, C.monthIndex, 1);
  C.firstDay = A.getDay();
}
function storedMonthObject(E, D, C, B) {
  Function.call ? dateObject.call(this, D, C, B) : dateObject(this, D, C, B);
  this.yearPad = this.yearValue.toString();
  this.monthPad =
    this.monthIndex < 9
      ? "0" + String(this.monthIndex + 1)
      : this.monthIndex + 1;
  this.dayPad = this.day < 10 ? "0" + this.day.toString() : this.day;
  this.monthShort = this.monthName.substr(0, 3).toUpperCase();
  if (E.indexOf("YYYY") == -1) {
    this.yearPad = this.yearPad.substr(2);
  }
  if (E.indexOf("/") >= 0) {
    var A = "/";
  } else {
    if (E.indexOf("-") >= 0) {
      var A = "-";
    } else {
      var A = "";
    }
  }
  if (/DD?.?((MON)|(MM?M?))/.test(E)) {
    this.formatted = this.dayPad + A;
    this.formatted += RegExp.$1.length == 3 ? this.monthShort : this.monthPad;
  } else {
    if (/((MON)|(MM?M?))?.?DD?/.test(E)) {
      this.formatted = RegExp.$1.length == 3 ? this.monthShort : this.monthPad;
      this.formatted += A + this.dayPad;
    }
  }
  this.formatted =
    E.substr(0, 2) == "YY"
      ? this.yearPad + A + this.formatted
      : this.formatted + A + this.yearPad;
}
function displayMonthObject(D, C, B, A) {
  Function.call ? dateObject.call(this, C, B, A) : dateObject(this, C, B, A);
  this.displayID = D.hiddenFieldName + "_Current_ID";
  this.getDisplay = new Function(
    "return document.getElementById(this.displayID)"
  );
  this.dayHover = DayCellHover;
  this.goCurrent = new Function(
    D.objName +
      ".getCalendar().style.zIndex=++ZCounter;" +
      D.objName +
      ".setDisplayed(Today.getFullYear(),Today.getMonth());"
  );
  if (D.formNumber >= 0) {
    this.getDisplay().innerHTML = this.fullName;
  }
}
function neighborMonthObject(B, A, C) {
  Function.call ? dateObject.call(this, C) : dateObject(this, C);
  this.buttonID = B.hiddenFieldName + "_" + A + "_ID";
  this.hover = new Function("C", "O", "NeighborHover(C,O,this)");
  this.getButton = new Function(
    "return document.getElementById(this.buttonID)"
  );
  this.go = new Function(
    B.objName +
      ".getCalendar().style.zIndex=++ZCounter;" +
      B.objName +
      ".setDisplayed(this.yearValue,this.monthIndex);"
  );
  if (B.formNumber >= 0) {
    this.getButton().title = this.monthName;
  }
}
function SetDisplayedMonth(B, A) {
  this.displayed = new displayMonthObject(this, B, A, 1);
  this.previous = new neighborMonthObject(
    this,
    "Previous",
    this.displayed.date.getTime() - 86400000
  );
  this.next = new neighborMonthObject(
    this,
    "Next",
    this.displayed.date.getTime() + 86400000 * (this.displayed.dayCount + 1)
  );
  if (this.formNumber >= 0) {
    this.getDayTable().innerHTML = this.buildCalendar();
  }
}
function SetPickedMonth(B, C, A) {
  this.picked = new storedMonthObject(this.format, B, C, A);
  this.setHidden(this.picked.formatted);
  this.setDisplayed(B, C);
}
function calendarObject(F, J, E) {
  this.hiddenFieldName = F;
  this.monthListID = F + "_Month_ID";
  this.dayListID = F + "_Day_ID";
  this.yearFieldID = F + "_Year_ID";
  this.monthDisplayID = F + "_Current_ID";
  this.calendarID = F + "_ID";
  this.dayTableID = F + "_DayTable_ID";
  this.calendarLinkID = this.calendarID + "_Link";
  this.timerID = this.calendarID + "_Timer";
  this.objName = F + "_Object";
  this.format = J;
  this.formNumber = -1;
  this.picked = null;
  this.displayed = null;
  this.previous = null;
  this.next = null;
  this.setPicked = SetPickedMonth;
  this.setDisplayed = SetDisplayedMonth;
  this.checkYear = CheckYearInput;
  this.fixYear = FixYearInput;
  this.changeMonth = CheckMonthChange;
  this.changeDay = CheckDayChange;
  this.resetTimer = CalTimerReset;
  this.hideElements = SetElementStatus;
  this.show = ShowCalendar;
  this.handleTimer = DoTimer;
  this.iconHover = CalIconHover;
  this.buildCalendar = BuildCalendarDays;
  this.pickDay = PickDisplayDay;
  this.fixSelects = FixSelectLists;
  this.setHidden = new Function(
    "D",
    "if (this.formNumber >= 0) this.getHiddenField().value=D"
  );
  this.getHiddenField = new Function(
    "return document.forms[this.formNumber].elements[this.hiddenFieldName]"
  );
  this.getMonthList = new Function(
    "return document.getElementById(this.monthListID)"
  );
  this.getDayList = new Function(
    "return document.getElementById(this.dayListID)"
  );
  this.getYearField = new Function(
    "return document.getElementById(this.yearFieldID)"
  );
  this.getCalendar = new Function(
    "return document.getElementById(this.calendarID)"
  );
  this.getDayTable = new Function(
    "return document.getElementById(this.dayTableID)"
  );
  this.getCalendarLink = new Function(
    "return document.getElementById(this.calendarLinkID)"
  );
  this.getMonthDisplay = new Function(
    "return document.getElementById(this.monthDisplayID)"
  );
  this.isShowing = new Function(
    "return !(this.getCalendar().style.visibility != 'visible')"
  );
  function H(K) {
    for (var L = 0; L < MonthNames.length; L++) {
      if (MonthNames[L].substr(0, 3).toUpperCase() == K.toUpperCase()) {
        break;
      }
    }
    return L;
  }
  function D(L, K) {
    L.setPicked(Today.getFullYear(), Today.getMonth(), Today.getDate());
    if (K) {
      alert(
        "WARNING: The supplied date is not in valid '" +
          J +
          "' format: " +
          E +
          ".\nTherefore, the current system date will be used instead: " +
          L.picked.formatted
      );
    }
  }
  if (E != "") {
    if (this.format == "YYYYMMDD" && /^(\d{4})(\d{2})(\d{2})$/.test(E)) {
      this.setPicked(RegExp.$1, parseInt(RegExp.$2, 10) - 1, RegExp.$3);
    } else {
      if (this.format.substr(0, 2) == "YY" && /^(\d{2,4})(-|\/)/.test(E)) {
        var C = GetGoodYear(RegExp.$1);
        if (/(-|\/)(\w{1,3})(-|\/)(\w{1,3})$/.test(E)) {
          var I = RegExp.$2;
          var A = RegExp.$4;
          if (/D$/.test(this.format)) {
            var G = A;
            var B = I;
          } else {
            var G = I;
            var B = A;
          }
          B = /\d{1,2}/i.test(B) ? parseInt(B, 10) - 1 : H(B);
          this.setPicked(C, B, G);
        } else {
          D(this, true);
        }
      } else {
        if (/(-|\/)(\d{2,4})$/.test(E)) {
          var C = GetGoodYear(RegExp.$2);
          if (/^(\w{1,3})(-|\/)(\w{1,3})(-|\/)/.test(E)) {
            if (this.format.substr(0, 1) == "D") {
              var G = RegExp.$1;
              var B = RegExp.$3;
            } else {
              var B = RegExp.$1;
              var G = RegExp.$3;
            }
            B = /\d{1,2}/i.test(B) ? parseInt(B, 10) - 1 : H(B);
            this.setPicked(C, B, G);
          } else {
            D(this, true);
          }
        } else {
          D(this, true);
        }
      }
    }
  }
}
function date_input_box(DateName, Required, DateFormat, DefaultDate) {
  if (arguments.length == 0) {
    document.writeln(
      '<span style="color:red;font-size:' +
        FontSize +
        "px;font-family:" +
        FontFamily +
        ";\">ERROR: Missing required parameter in call to 'date_input_box': [name of hidden date field].</span>"
    );
  } else {
    if (arguments.length < 3) {
      DateFormat = DefaultDateFormat;
      if (arguments.length < 2) {
        Required = false;
      }
    } else {
      if (
        /^(Y{2,4}(-|\/)?)?((MON)|(MM?M?)|(DD?))(-|\/)?((MON)|(MM?M?)|(DD?))((-|\/)Y{2,4})?$/i.test(
          DateFormat
        )
      ) {
        DateFormat = DateFormat.toUpperCase();
      } else {
        var AlertMessage =
          "WARNING: The supplied date format for the '" +
          DateName +
          "' field is not valid: " +
          DateFormat +
          "\nTherefore, the default date format will be used instead: " +
          DefaultDateFormat;
        DateFormat = DefaultDateFormat;
        if (arguments.length == 4) {
          var CurrentDate = new storedMonthObject(
            DateFormat,
            Today.getFullYear(),
            Today.getMonth(),
            Today.getDate()
          );
          AlertMessage +=
            "\n\nThe supplied date (" +
            DefaultDate +
            ") cannot be interpreted with the invalid format.\nTherefore, the current system date will be used instead: " +
            CurrentDate.formatted;
          DefaultDate = CurrentDate.formatted;
        }
        alert(AlertMessage);
      }
    }
    if (!CurrentDate) {
      var CurrentDate = new storedMonthObject(
        DateFormat,
        Today.getFullYear(),
        Today.getMonth(),
        Today.getDate()
      );
    }
    if (arguments.length < 4) {
      DefaultDate = Required ? CurrentDate.formatted : "";
    }
    eval(
      DateName +
        "_Object=new calendarObject('" +
        DateName +
        "','" +
        DateFormat +
        "','" +
        DefaultDate +
        "')"
    );
    if (Required || arguments.length == 4) {
      var InitialStatus = "";
      var InitialDate = eval(DateName + "_Object.picked.formatted");
    } else {
      var InitialStatus = ' style="visibility:hidden"';
      var InitialDate = "";
      eval(
        DateName +
          "_Object.setPicked(" +
          Today.getFullYear() +
          "," +
          Today.getMonth() +
          "," +
          Today.getDate() +
          ")"
      );
    }
    with (document) {
      writeln(
        '<input type="hidden" name="' +
          DateName +
          '" value="' +
          InitialDate +
          '">'
      );
      for (var f = 0; f < forms.length; f++) {
        for (var e = 0; e < forms[f].elements.length; e++) {
          if (typeof forms[f].elements[e].type == "string") {
            if (
              forms[f].elements[e].type == "hidden" &&
              forms[f].elements[e].name == DateName
            ) {
              eval(DateName + "_Object.formNumber=" + f);
              break;
            }
          }
        }
      }
      writeln(
        '<table cellpadding="0" cellspacing="2"><tr>' +
          String.fromCharCode(13) +
          '<td valign="middle">'
      );
      writeln(
        '<select class="calendardate_input_box" style="font-size:16px;" id="' +
          DateName +
          '_Month_ID" onChange="' +
          DateName +
          '_Object.changeMonth(this)">'
      );
      if (!Required) {
        var NoneSelected = DefaultDate == "" ? " selected" : "";
        writeln(
          '<option value=""' +
            NoneSelected +
            ">" +
            UnselectedMonthText +
            "</option>"
        );
      }
      for (var i = 0; i < 12; i++) {
        MonthSelected =
          DefaultDate != "" && eval(DateName + "_Object.picked.monthIndex") == i
            ? " selected"
            : "";
        writeln(
          '<option value="' +
            i +
            '"' +
            MonthSelected +
            ">" +
            MonthNames[i].substr(0, 3) +
            "</option>"
        );
      }
      writeln(
        "</select>" +
          String.fromCharCode(13) +
          "</td>" +
          String.fromCharCode(13) +
          '<td valign="middle">'
      );
      writeln(
        "<select" +
          InitialStatus +
          ' class="calendardate_input_box" style="font-size:16px;" id="' +
          DateName +
          '_Day_ID" onChange="' +
          DateName +
          '_Object.changeDay(this)">'
      );
      for (var j = 1; j <= eval(DateName + "_Object.picked.dayCount"); j++) {
        DaySelected =
          DefaultDate != "" && eval(DateName + "_Object.picked.day") == j
            ? " selected"
            : "";
        writeln("<option" + DaySelected + ">" + j + "</option>");
      }
      writeln(
        "</select>" +
          String.fromCharCode(13) +
          "</td>" +
          String.fromCharCode(13) +
          '<td valign="middle">'
      );
      writeln(
        "<input" +
          InitialStatus +
          ' class="calendardate_input_box" style="font-size:16px;" type="text" id="' +
          DateName +
          '_Year_ID" size="6" maxlength="6" title="Year" value="' +
          eval(DateName + "_Object.picked.yearPad") +
          '" onKeyPress="return YearDigitsOnly(window.event)" onKeyUp="' +
          DateName +
          '_Object.checkYear(this)" onBlur="' +
          DateName +
          '_Object.fixYear(this)">'
      );
      write(
        '<td valign="middle">' +
          String.fromCharCode(13) +
          "<a" +
          InitialStatus +
          ' id="' +
          DateName +
          '_ID_Link" href="javascript:' +
          DateName +
          '_Object.show()" onMouseOver="return ' +
          DateName +
          '_Object.iconHover(true)" onMouseOut="return ' +
          DateName +
          '_Object.iconHover(false)"><img style="height: 25px;margin-left: 14px;" src="' +
          ImageURL +
          '" align="baseline" title="Calendar" border="0"></a>&nbsp;'
      );
      writeln(
        '<span id="' +
          DateName +
          '_ID" style="position:absolute;visibility:hidden;margin-top: 32px;margin-left:' +
          -7 * CellWidth +
          "px;width:" +
          CellWidth * 7 +
          "px;background-color:" +
          CalBGColor +
          ';border:1px solid dimgray;" onMouseOver="' +
          DateName +
          '_Object.handleTimer(true)" onMouseOut="' +
          DateName +
          '_Object.handleTimer(false)">'
      );
      writeln(
        '<table width="' +
          CellWidth * 7 +
          '" cellspacing="0" cellpadding="1">' +
          String.fromCharCode(13) +
          '<tr style="background-color:' +
          TopRowBGColor +
          ';">'
      );
      writeln(
        '<td id="' +
          DateName +
          '_Previous_ID" style="cursor:default" align="center" class="calendardate_input_box" style="height:' +
          CellHeight +
          '" onClick="' +
          DateName +
          '_Object.previous.go()" onMouseDown="VirtualButton(this,true)" onMouseUp="VirtualButton(this,false)" onMouseOver="return ' +
          DateName +
          '_Object.previous.hover(this,true)" onMouseOut="return ' +
          DateName +
          '_Object.previous.hover(this,false)" title="' +
          eval(DateName + "_Object.previous.monthName") +
          '"><img src="' +
          PrevURL +
          '"></td>'
      );
      writeln(
        '<td id="' +
          DateName +
          '_Current_ID" style="cursor:pointer" align="center" class="calendardate_input_box" style="height:' +
          CellHeight +
          '" colspan="5" onClick="' +
          DateName +
          '_Object.displayed.goCurrent()" onMouseOver="self.status=\'Click to view ' +
          CurrentDate.fullName +
          '\';return true;" onMouseOut="self.status=\'\';return true;" title="Show Current Month">' +
          eval(DateName + "_Object.displayed.fullName") +
          "</td>"
      );
      writeln(
        '<td id="' +
          DateName +
          '_Next_ID" style="cursor:default" align="center" class="calendardate_input_box" style="height:' +
          CellHeight +
          '" onClick="' +
          DateName +
          '_Object.next.go()" onMouseDown="VirtualButton(this,true)" onMouseUp="VirtualButton(this,false)" onMouseOver="return ' +
          DateName +
          '_Object.next.hover(this,true)" onMouseOut="return ' +
          DateName +
          '_Object.next.hover(this,false)" title="' +
          eval(DateName + "_Object.next.monthName") +
          '"><img src="' +
          NextURL +
          '"></td></tr>' +
          String.fromCharCode(13) +
          "<tr>"
      );
      for (var w = 0; w < 7; w++) {
        writeln(
          '<td width="' +
            CellWidth +
            '" align="center" class="calendardate_input_box" style="height:' +
            CellHeight +
            ";width:" +
            CellWidth +
            ';font-weight:bold;border-top:1px solid dimgray;border-bottom:1px solid dimgray;">' +
            WeekDays[w] +
            "</td>"
        );
      }
      writeln(
        "</tr>" +
          String.fromCharCode(13) +
          "</table>" +
          String.fromCharCode(13) +
          '<span id="' +
          DateName +
          '_DayTable_ID">' +
          eval(DateName + "_Object.buildCalendar()") +
          "</span>" +
          String.fromCharCode(13) +
          "</span>" +
          String.fromCharCode(13) +
          "</td>" +
          String.fromCharCode(13) +
          "</tr>" +
          String.fromCharCode(13) +
          "</table>"
      );
    }
  }
}
