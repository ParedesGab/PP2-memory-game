// Global variables (include them in functions later)
let emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "😁", "😁", "😘", "😘", "😎", "😎", "🤩", "🤩", "😶‍🌫️", "😶‍🌫️"];
//console.log(emojis.length); // output:16

let flippedCards = 0; // this variable will increase by 1 every time an user clicks a button

let firstCard = null;
let secondCard = null;
let revealedCard = null;
let firstResult = null;
let secondResult = null;

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
emojis = sortEmojis(emojis)
console.log(emojis); // this is the randomly sorted array
console.log("----");

/** Create 16 button cards with class name "btn" and id string values from 0 to 15 */
for (let i = 0; i < emojis.length; i++) {
  let buttonCard = document.createElement("button");
  buttonCard.classList.add("btn");

  let idValue = String(i); //Convert i to a string
  buttonCard.id = idValue; // Return the id: "0", "1"... "15"

  let buttonContainer = document.getElementById("container-cards");
  buttonContainer.appendChild(buttonCard);
  //console.log(buttonCard);
}

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  //Get all buttons for them to be clicked
  let allButtons = document.getElementsByTagName("button");
  //console.log(allButtons); // Returns 17 buttons as an array. 

  for (let button of allButtons) {
    //console.log(button); // Returns individually each button (including the submit button) 
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

/** Main function to handle card flipping logic (code to be executed when user clicks a button)*/
function flippTheCards(cardNumber) {
  flippedCards++;
  console.log(flippedCards); //allows you to see the increase in the console!  // Note, "return" is not needed because you do not want the function to provide a value but rather to perform an action (i.e., of increasing the amount of flipped cards)

  if (flippedCards === 1) { //Only for the first card  
    revealedCard = revealCard(cardNumber);
    firstCard = revealedCard[0];
    firstResult = revealedCard[1];

    console.log(firstCard);
    console.log(firstResult);
    /*firstCard = document.getElementById(cardNumber);
    firstResult = emojis[cardNumber];
    firstCard.innerHTML = firstResult;

    firstCard.disabled = true; //No matter how many times you click on the first card the flippedCards number should stay in 1*/

  } else if (flippedCards === 2) {

    //Only for the second card  
    revealedCard = revealCard(cardNumber);
    secondCard = revealedCard[0];
    secondResult = revealedCard[1];

    console.log(secondCard);
    console.log(secondResult);
    /*secondCard = document.getElementById(cardNumber);
    secondResult = emojis[cardNumber];
    secondCard.innerHTML = secondResult;

    secondCard.disabled = true;*/

    /*HERE should go the code to decrease the number of CHANCES*/

    if (firstResult === secondResult) {
      flippedCards = 0; //reset the count of the amount of flipped Cards to 0

      /*HERE should go the code to increase the SCORE*/

    } else { //  cover the results after a certain amount of time (setTimeout)
      alert("not a match");
      //console.log(result);
      //setTimeout(checkMatch(cardNumber), 2000);
    }
  }
}


/** Function that will flip a card and reveal its content*/
function revealCard(cardNumber) {
  let card = document.getElementById(cardNumber);
  let result = emojis[cardNumber];
  card.innerHTML = result;
  card.disabled = true;
  return [
    card,
    result
  ];
}

/** Function to check if there is not a match 
function checkMatch(cardNumber) {
  card = document.getElementById(cardNumber);
  card.innerHTML = ' ';
  card.disabled = false;
  flippedCards = 0;
}*/

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