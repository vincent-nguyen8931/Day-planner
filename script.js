var timeText;
var timeSwitchCount = 0;
var time = 1;
var currentTime = dayjs().hour();
var possibleTimes = [0, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// var timeIntToString;

// appends current day of the week and date to header section
$("#headerRow").append("<h2>" + dayjs().format("dddd, MMMM D") + "</h2>");

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

// switch (timeIntToString) {
//   case 9: return "9AM";
//   case 10: return "10AM";
//   case 11: return "11AM";
//   case 12: return "12PM";
//   case 13: return "1PM";
//   case 14: return "2PM";
//   case 15: return "3PM";
//   case 16: return "4PM";
//   case 17: return "5PM";
// }

// appends rows and columns to the container id planner
for (i = 1; i < 10; i++) {
  changeTime();
  // makes a new row and increments time by 1 so that another time slot can be created.
  $("#planner").append("<article class='row' style='margin-left:15%;' id=timeRow" + time++ + "></article>");
  $("#timeRow" + i).append("<article class='col-1' style='text-align:right; padding-top:5px; border:1px solid black;'>" + timeText + "</article>");
  $("#timeRow" + i).append("<article class='col' id='plannerText" + i + "'></article>");
  // pulls textarea box from bootstrap and appends it to the column plannerText for each row.
  $("#plannerText" + i).append("<section class='input-group'>");
  $("#plannerText" + i).append("<section class='input-group-append'>");
  $("#plannerText" + i).append("<textarea class='form-control' id='textArea" + i + "' aria-label='With textarea'></textarea>");
  $("#plannerText" + i).append("</section>");
  $("#plannerText" + i).append("</section>");
  $("#timeRow" + i).append("<article class='col-1' style='border:1px solid black; background:cyan;' id=saveIcon" + i + "></article>");
  $("#saveIcon" + i).append("<i class='far fa-save' style='padding-right: 40%; padding-top: 35%;' id=saveBtn></i>");
  timeSwitchCount++;
}

function changeRowColor() {
  // for loop iterates through every row created above
  for (i = 1; i < 10; i++) {
    // if statement checks for current time being greater than the array of possible times. When true, the row is given the class "past" to represent a past time.
    if (currentTime > possibleTimes[i]) {
      $("#textArea" + i).addClass("past");
      $("#textArea" + i).removeClass("present");
      $("#textArea" + i).removeClass("future");
    }
    // if statement checks for current time being less than the array of possible times. When true, the row is given the class "future" to represent a future time.
    else if (currentTime < possibleTimes[i]) {
      $("#textArea" + i).removeClass("past");
      $("#textArea" + i).removeClass("present");
      $("#textArea" + i).addClass("future");
    }
    // if neither of the above are true, then the class "present" will be added to make that row be considered the present time.
    else {
      $("#textArea" + i).removeClass("past");
      $("#textArea" + i).addClass("present");
      $("#textArea" + i).removeClass("future");
    }
  }
}

changeRowColor();