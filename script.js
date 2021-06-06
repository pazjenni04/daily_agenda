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

var buttons = document.querySelectorAll(".btn"); //save buttons 
var btnLength = buttons.length; //since generating an array, need to grab length and generate a for loop so event listener can apply to all buttons

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

//   for(var i=0; i<selectedBlocks.length; i++){
  
//     if (currentTime > selectedBlocks[i]) {
//       console.log("Ahead of time!");
//       selectedBlocks [i] = document.querySelector(".hour");
//       selectedBlocks[i].style.backgroundColor = "green";
//     } else if (currentTime < selectedBlocks[i]) {
//       console.log("Running behind!");
//       selectedBlocks[i] = document.querySelector(".hour");
//       selectedBlocks[i].style.backgroundColor = "red";
//     } else if (currentTime === selectedBlocks[i]) {
//       console.log("Just on time!");
//       selectedBlocks[i] = document.querySelector(".hour");
//       selectedBlocks[i].style.backgroundColor = "none";
//     };

//   };
// };
// agendaTasks();







var storedInput = localStorage.getItem("textInput"); //whatever is saved in local storage 'textInput' the browser will retreive

textInput.addEventListener('input', tasks => {
  textInput.textContent = tasks.target.value
  });






var textInput = document.querySelectorAll(".description"); //text input into the text area
var savedInput = JSON.parse(localStorage.getItem("textInput")) || [];

for (var i=0; i<btnLength; i++) {
  buttons[i].addEventListener('click', function () {
   
    var selectedText = {
      text: document.querySelectorAll(".description").value,
      time: timeEl.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    }; //objects will be pushed into local storage
    
    savedInput.push(selectedText);
  
    localStorage.setItem('textInput', JSON.stringify(savedInput));
    alert("Schedule has been saved");
    console.log("Schedule saved")

  }, false);
  };  //eventListener for save buttons -- if multiple save buttons, have to create a for-loop for event listener to apply to each

 
 
  












//create local storage -- key value pairs
//set to push into local storage -- have to set local storage
//get pulls from local storage -- have to set something into local storage before retrieving it

//add event listener for save button to save to local storage and to remain displayed onto the page

