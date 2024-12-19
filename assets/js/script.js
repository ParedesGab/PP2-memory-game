// Global variables (include them in functions later)
let emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "😁", "😁", "😘", "😘", "😎", "😎", "🤩", "🤩", "😶‍🌫️", "😶‍🌫️"];
//console.log(emojis.length); // output:16

let flippedCards = 0; // this variable will increase by 1 every time an user clicks a button

let firstCard = null;
let secondCard = null;

/**Function that generates negative and positive random numbers between -0.5 and 0.5 */
function randomValues(a, b) {
  let randomNumber = Math.random() - 0.5; //create random number between -0.5 and 0.5
  return randomNumber;
}
//console.log(randomValues()); // positive random numbers between -0.5 and 0.5

/** Function that sorts an array randomly by comparing two elements of the array (a and b)
 * Together with randomValues, they check which comes first, if a or b.*/
function sortEmojis(emojis) {
  let sortedEmojis = emojis.sort(randomValues); //withot () calls out the entire function
  return sortedEmojis;
}

//console.log(sortEmojis) //this is the entire function as it is
let randomizedEmojis = sortEmojis(emojis)
console.log(randomizedEmojis); // this is the randomly sorted array
console.log("----");

/** Create 16 button cards with class name "btn" and id string values from 0 to 15 */
for (let i = 0; i < emojis.length; i++) {
  let buttonCard = document.createElement("button");
  buttonCard.classList.add("btn");

  let idValue = String(i); //Convert i to a string
  buttonCard.id = idValue; // Return the id: "0", "1"... "15"

  let buttonContainer = document.getElementById("container-cards");
  buttonContainer.appendChild(buttonCard);
  console.log(buttonCard);
}
console.log("----");

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  //Get all buttons for them to be clicked
  let allButtons = document.getElementsByTagName("button");
  //console.log(allButtons); // Returns 17 buttons as an array. 

  for (let button of allButtons) {
    console.log(button); // Returns individually each button (including the submit button) 
    button.addEventListener("click", function () { //when a button is clicked, the code that is inside this function will run.
      if (this.getAttribute("id") === "submit") {
        alert("you clicked submit");
      } else {
        let cardNumber = this.getAttribute("id");
        //alert(`You clicked ${cardNumber}`);
        flippTheCards(cardNumber);
      }
    })
  }
})

/** Function that increases the amount of flipped cards by 1 every time an user clicks a button (code to be executed when user clicks a button)*/
function flippTheCards(cardNumber) {
  flippedCards++;
  console.log(flippedCards); //allows you to see the increase in the console!
  // Note, "return" is not needed because you do not want the function to provide a value but rather to perform an action (i.e., of increasing the amount of flipped cards)

  if (flippedCards === 1) { //Only for the first card
    firstCard = document.getElementById(cardNumber);
    firstCard.innerHTML = "first card flipped: TEXT BEING SHOWN?";

  }

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