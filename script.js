var timeText;
var timeSwitchCount = 0;
var time = 1;

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

// appends rows and columns to the container id planner
for (i = 1; i < 10; i++) {
  changeTime();
  // makes a new row and increments time by 1 so that another time slot can be created.
  $("#planner").append("<article class='row' style='margin-left:15%;' id=timeRow" + time++ + "></article>");
  $("#timeRow" + i).append("<article class='col-1' style='text-align:right; padding-top:5px; border:1px solid black;'>" + timeText + "</article>");
  $("#timeRow" + i).append("<article class='col' id='plannerText" + i + "'></article>");
  $("#plannerText" + i).append("<section class='input-group'>");
  $("#plannerText" + i).append("<section class='input-group-append'>");
  $("#plannerText" + i).append("<textarea class='form-control' aria-label='With textarea'></textarea>");
  $("#plannerText" + i).append("</section>");
  $("#plannerText" + i).append("</section>");
  $("#timeRow" + i).append("<article class='col-1' style='border:1px solid black; background:cyan;' id=saveIcon" + i + "></article>");
  $("#saveIcon" + i).append("<i class='far fa-save' style='padding-right: 40%; padding-top: 35%;' id=saveBtn></i>");
  timeSwitchCount++;
}