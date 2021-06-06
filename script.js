var timeBlocks = document.querySelectorAll(".time-block");
var six = timeBlocks[0].firstChild.data;
var seven = timeBlocks[1].firstChild.data;
var eight = timeBlocks[2].firstChild.data;
var nine = timeBlocks[3].firstChild.data;
var ten = timeBlocks[4].firstChild.data;
var eleven = timeBlocks[5].firstChild.data;
var twelve = timeBlocks[6].firstChild.data;
var one = timeBlocks[7].firstChild.data;
var two = timeBlocks[8].firstChild.data;
var three = timeBlocks[9].firstChild.data;
var four = timeBlocks[10].firstChild.data;
var five = timeBlocks[11].firstChild.data;

var selectedBlocks = [six, seven, eight, nine, ten, eleven, twelve, one, two, three, four, five];

console.log(selectedBlocks[5]);


var timeEl = document.getElementById("currentDay");

function currentDay() {
    
    var timeInterval = setInterval(function() {
      timeEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    }, 1000);
};

currentDay();


//find a way to grab elements of the time-blocks and create a for loop
// function agendaTasks() {
//   var currentTime = moment().format("h:mm a");

//   console.log(currentTime);

//   for(var i=0; i<selectedBlocks.length; i++){
  
//     if (selectedBlocks[i] < currentTime) {
//       console.log("this time is in the past!");
//       selectedBlocks[i].style.color = "grey";
      
//     };


// };
//   };



var textInput = document.querySelectorAll(".description").value; //text input into the text area
var storageInput = document.querySelectorAll(".storageInput");
var saveBtn = document.querySelectorAll(".btn"); //save button
var storedInput = localStorage.getItem("textInput"); //whatever is saved in local storage 'textInput' the browser will retreive

if(textInput) {
  textInput.textContent = storedInput;
};


function saveToLocalStorage () {
  localStorage.setItem('textInput', textInput.textContent);
  
};


saveBtn.addEventListener("click", saveToLocalStorage);


//create local storage -- key value pairs
//set to push into local storage -- have to set local storage
//get pulls from local storage -- have to set something into local storage before retrieving it

//add event listener for save button to save to local storage and to remain displayed onto the page

//var savedInput = JSON.parse(localStorage.getItem("textInput")) || [];