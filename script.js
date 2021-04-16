var timeText;
var rowClicked;
var rowSelected;
var storageLocation;
var timeSwitchCount = 0;
var time = 1;
var currentTime = dayjs().hour();
var possibleTimes = [0, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// function to save a value to specified key
function setJSON(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
// function to recall a value from specified key
function getJSON(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

// appends current day of the week and date to header section
$("#headerRow").append("<h2>" + dayjs().format("dddd, MMMM D") + "</h2>");

// when function is called, the rowClicked variable is changed in function saveInput at line 147, the switch statement will create the local storage key and store into rowClicked, change rowSelected into textarea ID, and storageLocation into local storage pull of value in that key. 
function checkRow() {
  switch (rowClicked) {
    case "saveIcon1":
      rowClicked = "events-9AM";
      rowSelected = "#textArea1";
      storageLocation = getJSON("events-9AM");
      break;
    case "saveIcon2":
      rowClicked = "events-10AM";
      rowSelected = "#textArea2";
      storageLocation = getJSON("events-10AM");
      break;
    case "saveIcon3":
      rowClicked = "events-11AM";
      rowSelected = "#textArea3";
      storageLocation = getJSON("events-11AM");
      break;
    case "saveIcon4":
      rowClicked = "events-12PM";
      rowSelected = "#textArea4";
      storageLocation = getJSON("events-12PM");
      break;
    case "saveIcon5":
      rowClicked = "events-1PM";
      rowSelected = "#textArea5";
      storageLocation = getJSON("events-1PM");
      break;
    case "saveIcon6":
      rowClicked = "events-2PM";
      rowSelected = "#textArea6";
      storageLocation = getJSON("events-2PM");
      break;
    case "saveIcon7":
      rowClicked = "events-3PM";
      rowSelected = "#textArea7";
      storageLocation = getJSON("events-3PM");
      break;
    case "saveIcon8":
      rowClicked = "events-4PM";
      rowSelected = "#textArea8";
      storageLocation = getJSON("events-4PM");
      break;
    case "saveIcon9":
      rowClicked = "events-5PM";
      rowSelected = "#textArea9";
      storageLocation = getJSON("events-5PM");
      break;
  }
}

// function changes the text of the time column into the text provided under each case. variable timeSwitchCount is set 0 globally and incremented in the for loop on line 107.
function changeTime() {
  switch (timeSwitchCount) {
    case 0:
      timeText = "9AM";
      break;
    case 1:
      timeText = "10AM";
      break;
    case 2:
      timeText = "11AM";
      break;
    case 3:
      timeText = "12PM";
      break;
    case 4:
      timeText = "1PM";
      break;
    case 5:
      timeText = "2PM";
      break;
    case 6:
      timeText = "3PM";
      break;
    case 7:
      timeText = "4PM";
      break;
    case 8:
      timeText = "5PM";
      break;
  }
}

// appends rows and columns to the container id planner
for (i = 1; i < 10; i++) {
  // calls to the function on line 74 to retrieve the proper text for the time column.
  changeTime();
  // makes a new row and increments time by 1 so that another time slot can be created.
  $("#planner").append("<article class='row' style='margin-left:15%;' id=timeRow" + time++ + ">");
  $("#timeRow" + i).append("<article class='col-1' style='text-align:right; margin-bottom: 10px; padding-top:5px; border:1px solid black; background:white;'>" + timeText);
  $("#timeRow" + i).append("<article class='col' id='plannerText" + i + "'>");
  // pulls textarea box from bootstrap and appends it to the column plannerText for each row. used for taking in user input.
  $("#plannerText" + i).append("<section class='input-group'>");
  $("#plannerText" + i).append("<section class='input-group-append'>");
  $("#plannerText" + i).append("<textarea class='form-control' style='border:1px solid black; margin-bottom: 10px' name='textArea" + i + "' id='textArea" + i + "' aria-label='With textarea'>");
  // creates a column so that the button image can be appended to it.
  $("#timeRow" + i).append("<article class='col-1' style='border:1px solid black; background:cyan; margin-bottom: 10px' id=saveIcon" + i + ">");
  $("#saveIcon" + i).append("<i class='far fa-save' style='padding-left: 40%; padding-top: 35%;' id=saveBtn>");
  // increments by one to move switch statement in changeTIme function down to the next case.
  timeSwitchCount++;
}

// for loop iterates through every row created above and sets each time row to varying colors based on past, present, and future time.
for (i = 1; i < 10; i++) {
  // if statement checks for current time being greater than the array of possible times. When true, the row is given the class "past" to represent a past time.
  if (currentTime > possibleTimes[i]) {
    $("#textArea" + i).addClass("past");
  }
  // if statement checks for current time being less than the array of possible times. When true, the row is given the class "future" to represent a future time.
  else if (currentTime < possibleTimes[i]) {
    $("#textArea" + i).addClass("future");
  }
  // if neither of the above are true, then the class "present" will be added to make that row be considered the present time.
  else {
    $("#textArea" + i).addClass("present");
  }
}

// creates a click event listener on every button in the column that goes into saveInput function.
for (i = 1; i < 10; i++) {
  $("#saveIcon" + i).click(saveInput);
}

// function sets rowClicked to the saveIcon + i from the for loop above. when entering function checkRow, rowClicked will become the local storage name, and rowSelected will become the text area id which is used to pull the user's input into local storage via the setJSON function.
function saveInput() {
  rowClicked = this.id;
  checkRow();
  setJSON(rowClicked, $(rowSelected).val());
}

// retrieves all information in local storage based on the "events" keys and stores them in their proper row.
  for (i = 1; i < 10; i++) {
    rowClicked = "saveIcon" + i;
    checkRow();
    $(rowSelected).val(storageLocation)
  }
