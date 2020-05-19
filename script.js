// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var currentDay = moment().format('dddd LL');
$("#currentDay").append(currentDay);

var currentTime = moment().format('LT');
$("#currentTime").append(currentTime);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

window.onload = function(){
    var val9 = localStorage.getItem('#comment9am');
    var val10 = localStorage.getItem('#comment10am');
    var val11 = localStorage.getItem('#comment11am');
    var val12 = localStorage.getItem('#comment12pm');
    var val1 = localStorage.getItem('#comment1pm');
    var val2 = localStorage.getItem('#comment2pm');
    var val3 = localStorage.getItem('#comment3pm');
    var val4 = localStorage.getItem('#comment4pm');
    var val5 = localStorage.getItem('#comment5pm');

    if (val9 == null) {
        val9 = "";
    }
    if (val10 == null) {
        val10 = "";
    }
    if (val11 == null) {
        val11 = "";
    }
    if (val12 == null) {
        val12 = "";
    }
    if (val1 == null) {
        val1 = "";
    }
    if (val2 == null) {
        val2 = "";
    }
    if (val3 == null) {
        val3 = "";
    }
    if (val4 == null) {
        val4 = "";
    }
    if (val5 == null) {
        val5 = "";
    }

   document.getElementById("comment9am").value = val9;
   document.getElementById("comment10am").value = val10;
   document.getElementById("comment11am").value = val11;
   document.getElementById("comment12pm").value = val12;
   document.getElementById("comment1pm").value = val1;
   document.getElementById("comment2pm").value = val2;
   document.getElementById("comment3pm").value = val3;
   document.getElementById("comment4pm").value = val4;
   document.getElementById("comment5pm").value = val5;
}

window.onbeforeunload = function(){
    localStorage.setItem('#comment9am', document.getElementById("comment9am").value);
    localStorage.setItem('#comment10am', document.getElementById("comment10am").value);
    localStorage.setItem('#comment11am', document.getElementById("comment11am").value);
    localStorage.setItem('#comment12pm', document.getElementById("comment12pm").value);
    localStorage.setItem('#comment1pm', document.getElementById("comment1pm").value);
    localStorage.setItem('#comment2pm', document.getElementById("comment2pm").value);
    localStorage.setItem('#comment3pm', document.getElementById("comment3pm").value);
    localStorage.setItem('#comment4pm', document.getElementById("comment4pm").value);
    localStorage.setItem('#comment5pm', document.getElementById("comment5pm").value);
}

