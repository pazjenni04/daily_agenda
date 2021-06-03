var timeEl = document.getElementById("currentDay");

function currentDay() {
    
    var timeInterval = setInterval(function() {
      timeEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    }, 1000);
};

currentDay();


//find a way to grab elements of the time-blocks and create a for loop
//function pastPresentFuture() {
//}

//create local storage -- key value pairs
//set to push into local storage -- have to set local storage
//get pulls from local storage -- have to set something into local storage before retrieving it

//add event listener for save button to save to local storage and to remain displayed onto the page