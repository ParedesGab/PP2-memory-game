// Global variables (include them in functions later)
const emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "😁", "😁", "😘", "😘", "😎", "😎", "🤩", "🤩", "😶‍🌫️", "😶‍🌫️"];
console.log(emojis.length); // output:16

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  // Build 16 button cards with class name "btn" and id from 0 to 15
  for (i = 0; i < emojis.length; i++) {
    let buttonCard = document.createElement("button");
    buttonCard.classList.add("btn");

    let idValue = String(i); //Convert i to a string
    buttonCard.id = idValue; // Return the id: "0", "1"... "15"

    let buttonContainer = document.getElementById("container-cards");
    buttonContainer.appendChild(buttonCard);

    console.log(buttonCard);

    //Get all buttons
    let buttons = document.getElementsByTagName("button");
    //console.log(buttons[i]);
    //console.log(buttons.length);
    //console.log(buttons);
  }

  /**let buttons = document.getElementsByTagName("button");
  console.log(buttons); //Returns 17 buttons (i.e., memory card and the reset button)
  console.log(buttons.length); // output: 17

  for (i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    console.log(button); //<button data-id="0" class="btn">A</button> / <button data-id="submit" class="btn--restart">Restart Game</button>/ ... etc.
  }*/


})


/** Function to create the memory card buttons, with class "btn" */
function buttonCards() {

}

/** Function to create data-id attribute*/

/** Function to run the memory game */
// Code to be executed when user clicks a button

function runMemoryGame() {

}

/** Function to check if there is a match */
function checkMatch() {

}

/** Function to check if there is no match */
function checkNoMatch() {

}

/** Function to decrease the chances left */
function decreaseChances() {

}

/** Function to increment the score every time there is a match */
function incrementScore() {}

/** Function to restart the game */
function restartGame() {}





















/**Generates a random number between 0 and 1 
function randomValues(a, b) {
let randomNumber = Math.random(); //create random number between 0 and 1
if (randomNumber > 0.5) { //50% probability
  return 2;
} else {
  return -1 //incorrect
}
}
console.log(randomValues()); // output: -2 or 1 

/** Sorts an array randomly by comparing two elements of the array (a and b)
* Together with randomValues, they check which comes first, if a or b.

function sortEmojis(emojis) {
return emojis.sort(randomValues);
}

//console.log(sortEmojis(emojis));*/



// Notes
// Code to be executed when the DOM finishes loading
/**document.addEventListener("DOMContentLoaded", function () {
let buttons = document.getElementsByTagName("button");
console.log(buttons); //Returns 17 buttons (i.e., memory card and the reset button)
console.log(buttons.length); // output: 17

for (let button of buttons) {
  console.log(button); // e.g., <button data-id="0" class="btn">A</button> / <button data-id="submit" class="btn--restart">Restart Game</button>/ ... etc.
}

//Another way to write it
console.log("----------------------------------");
for (i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  console.log(button);
}
})*/