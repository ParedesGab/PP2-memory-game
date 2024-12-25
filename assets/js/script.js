//Game container
const gameContainer = document.getElementById("game-container");

//Game variables 
const flippedCards = 0;
let firstCard = null;
let secondCard = null;
let revealedCard = null;
let firstResult = null;
let secondResult = null;

/**let firstCardNumber = 0; // Number
let firstCardSuit = ""; // String
let deck = []; // Array
let cardDetails = {}; // Object*/

/**
 * Generates the array containing the card images as objects with alt and name attributes
 */
function cardDeckArray() {
  return [{
      imgSrc: "assets/images/dice.png",
      name: "dice",
      alt: "dice"
    },
    {
      imgSrc: "assets/images/dice.png",
      name: "dice",
      alt: "dice"
    },
    {
      imgSrc: "assets/images/witch.png",
      name: "witch",
      alt: "witch"
    },
    {
      imgSrc: "assets/images/witch.png",
      name: "witch",
      alt: "witch"
    },
    {
      imgSrc: "assets/images/crystal.png",
      name: "crystal",
      alt: "crystal"
    },
    {
      imgSrc: "assets/images/crystal.png",
      name: "crystal",
      alt: "crystal"
    },
    {
      imgSrc: "assets/images/woman.png",
      name: "woman",
      alt: "woman"
    },
    {
      imgSrc: "assets/images/woman.png",
      name: "woman",
      alt: "woman"
    },
    {
      imgSrc: "assets/images/house.png",
      name: "house",
      alt: "house"
    },
    {
      imgSrc: "assets/images/house.png",
      name: "house",
      alt: "house"
    },
    {
      imgSrc: "assets/images/ball.png",
      name: "ball",
      alt: "crystal-ball"
    },
    {
      imgSrc: "assets/images/ball.png",
      name: "ball",
      alt: "crystal-ball"
    },
    {
      imgSrc: "assets/images/moon.png",
      name: "moon",
      alt: "moon"
    },
    {
      imgSrc: "assets/images/moon.png",
      name: "moon",
      alt: "moon"
    },
    {
      imgSrc: "assets/images/unicorn.png",
      name: "unicorn",
      alt: "unicorn"
    },
    {
      imgSrc: "assets/images/unicorn.png",
      name: "unicorn",
      alt: "unicorn"
    },
  ];
}

const cardDeck = cardDeckArray(); //g -

/**
 * Function that generates random values between -0.5 and 0.5
 */
function randomValues(a, b) {
  const randomNumber = Math.random() - 0.5;
  return randomNumber; // random numbers between -0.5 and 0.5
}

/** 
 * Function that sorts the card deck randomly
 */
function randomizeCardDeck() {
  const cardsArray = cardDeckArray();
  const sortedCardArray = cardsArray.sort(randomValues); //withot () calls out the entire function
  return sortedCardArray;
}

console.log(randomizeCardDeck()); //outputs and array

/** 
 * Create 16 cards within the game-container section
 */

function generateCards() {
  const sortedCardArray = randomizeCardDeck();

  sortedCardArray.forEach((item, index) => {
    //Create the elements
    const memoryCard = document.createElement("div");
    const cardFront = document.createElement("img");
    const cardBack = document.createElement("div");

    //Add clases to them
    memoryCard.classList.add("card");
    cardFront.classList = "face";
    cardBack.classList.add("back");

    //Append the elements
    gameContainer.appendChild(memoryCard);
    memoryCard.appendChild(cardFront);
    memoryCard.appendChild(cardBack);

    //Add image value to the face
    cardFront.src = item.imgSrc;

    // Set id and data-id attributes
    const idValue = String(index); // Convert index to a string
    memoryCard.id = idValue; // Example: "0", "1", ..., "15"
    memoryCard.setAttribute("data-id", idValue);
    memoryCard.setAttribute("name", item.name);
    cardFront.setAttribute("alt", item.alt);

    console.log(memoryCard);
  });

}

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  generateCards();
  //Get all memory cards for them to be clicked
  const allMemoryCards = document.getElementsByClassName("card");

  //console.log(allMemoryCards); //Returns all cards an array. 
  //Log to confirm the cards have been created
  console.log(`Total memory cards found: ${allMemoryCards.length}`);

  for (const memoryCard of allMemoryCards) {
    //console.log(memoryCard); // Returns individually each card

    memoryCard.addEventListener("click", function () { //when a button is clicked, the code that is inside this function will run.
      const cardId = this.getAttribute("id");
      if (cardId === "submit") {
        const cardId = this.getAttribute("id");
        alert("you clicked submit");
        //location.reload(); // Reload the page if the "submit" card is clicked
      } else {
        const cardId = this.getAttribute("id");
        //alert(`You clicked ${cardId}`);
        revealCard(cardId)
        //flippTheCards(cardId);
      }
    });
  }
});

/** 
 * Main function to handle card flipping logic (code to be executed when user clicks a button)
 */
function flippTheCards(cardId) {
  //flippedCards++;
  //console.log(flippedCards); //allows you to see the increase in the console!  // Note, "return" is not needed because you do not want the function to provide a value but rather to perform an action (i.e., of increasing the amount of flipped cards)

  // Handle the first card
  if (flippedCards === 0) {
    const revealedCard1 = revealCard(cardId);
    const firstCard = revealedCard1[0];
    const firstResult = revealedCard1[1];

    console.log(firstCard);
    console.log(firstResult);
    flippedCards++;
    console.log(flippedCards);

    // Handle the second  card
  } else if (flippedCards === 1) {

    const revealedCard2 = revealCard(cardId);
    const secondCard = revealedCard2[0];
    const secondResult = revealedCard2[1];

    console.log(secondCard);
    console.log(secondResult);
    flippedCards++;
    console.log(flippedCards);

    //Decrease number of chances
    decreaseChances();

    //After the user clicked on the 2nd card, check if there is a match or not
    if (firstResult === secondResult) {
      flippedCards = 0; // Reset the flipped cards count

      //Increment the score
      incrementScore();
      //decreaseChances();

    } else { //  cover the results after a certain amount of time (setTimeout)
      //alert("not a match");

      setTimeout(checkNoMatch, 1000); //call the entire function and reset unmatched cards after 1.2s.
    }
  }
}

/** 
 * Function that will flip a card and reveal its content, returning an array.
 */
function revealCard(cardId) {
  const sortedCardArray = randomizeCardDeck();

  //Get the card by Id
  let card = document.getElementById(cardId);

  //Store the inner content in the variable "result"
  let result = sortedCardArray[cardId];

  //card.innerHTML = result;
  //card.innerHTML = `<img src="${result.imgSrc}" alt="${result.alt}">`;

  //Once it was clicked, it cannot be clicked again
  card.disabled = true;
  return [
    card, // e.g., <button class="btn" id="1"></button>
    result // 🤩  
  ];
}