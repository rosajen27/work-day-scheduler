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

    $("#button8am").click(function(){
        event.preventDefault();

        var comment = $.trim($("#comment8am").val());
        if(comment != ""){
            // Show alert dialog if value is not blank
            alert(comment);
        }
    });

// WHEN I refresh the page
// THEN the saved events persist

