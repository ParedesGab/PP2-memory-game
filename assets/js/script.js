// Game container
const gameContainer = document.getElementById("game-container");

// Ids of the menu elements
const MENU = {
  MAIN: "home-menu",
  HOWTOPLAY: "game-indications",
  RESULT: "game-result",
};

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

// Game variables 
const cardDeck = cardDeckArray(); // Call the function to get the array of card objects
let flippedCards = 0; // This variable will increase by 1 every time a user clicks a card
let firstCard; //html element: <button ...></button>
let secondCard; //html element: <button ...></button>
let revealedCard; //html element: <button ...></button>
let firstResult = {};
let secondResult = {};

/** 
 * Function that generates random values between -0.5 and 0.5 
 */
function randomValues(a, b) {
  const randomNumber = Math.random() - 0.5;
  return randomNumber; // Random numbers between -0.5 and 0.5
}

/** 
 * Function that sorts the card deck randomly
 */
function randomizeCardDeck() {
  const cardsArray = cardDeckArray();
  const shuffledCardDeck = cardsArray.sort(randomValues); //withot () calls out the entire function
  return shuffledCardDeck;
}

const shuffledCardDeck = randomizeCardDeck(); //Derives from function randomizeCardDeck()
console.log(shuffledCardDeck); //outputs a randomly sorted array

/** 
 * Create 16 button cards with class name "btn" and id string values from 0 to 15 
 */
function createMemoryCards() {
  for (let i = 0; i < shuffledCardDeck.length; i++) {
    //Create a memory card
    const memoryCard = document.createElement("button");
    memoryCard.classList.add("btn");

    //Assing them the attributes id and data-id
    const idValue = String(i); // Convert i to a string
    memoryCard.id = idValue; // Assign the id: "0", "1", ..., "15"
    memoryCard.setAttribute("data-id", idValue);

    // // Set aria label attribute
    const ariaIndex = i + 1;
    memoryCard.setAttribute("aria-label", `memory card ${ariaIndex}`);

    const gameContainer = document.getElementById("game-container");
    gameContainer.appendChild(memoryCard);
  };
}

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  createMemoryCards();
  // Get all buttons for them to be clicked
  const allMemoryCards = document.getElementsByTagName("button");

  for (const memoryCard of allMemoryCards) {
    memoryCard.addEventListener("click", function () {
      const cardIdNumber = this.getAttribute("id")
      if (cardIdNumber === "submit") {
        location.reload();
      } else {
        //const cardIdNumber = this.getAttribute("id");
        handleCardFlip(cardIdNumber);
      }
    });
  }
});

/** 
 * Main function to handle card flipping logic 
 */
function handleCardFlip(cardIdNumber) {
  // Handle the first card
  if (flippedCards === 0) {
    revealedCard = revealCard(cardIdNumber);
    firstCard = revealedCard[0];
    firstResult = revealedCard[1];

    console.log(firstCard); // <button ...></button>
    console.log(firstResult); // {object of the array}

    flippedCards++;

    console.log(flippedCards);

    // Handle the second card
  } else if (flippedCards === 1) {
    revealedCard = revealCard(cardIdNumber);
    secondCard = revealedCard[0];
    secondResult = revealedCard[1];

    console.log(secondCard);
    console.log(secondResult);

    flippedCards++;

    console.log(flippedCards);

    // Check if the cards match based on the property name
    if (firstResult.name === secondResult.name) {
      flippedCards = 0; // Reset the flipped cards count
      incrementMovements();
      incrementScore();
    } else {
      setTimeout(checkNoMatch, 1000); // Reset unmatched cards after 1 second
      incrementMovements();
    }
  }
}

/** 
 * Function to reveal the content of a memory card 
 * and prevent it to be further clicked
 */
function revealCard(cardIdNumber) {
  // Get a memory card by its ID
  const memoryCardByID = document.getElementById(cardIdNumber);

  // Add to a memory card properties of the randomly sorted card deck array 
  const cardObjectDetails = shuffledCardDeck[cardIdNumber];
  memoryCardByID.innerHTML = `<img src="${cardObjectDetails.imgSrc}" alt="${cardObjectDetails.alt}">`;

  // Disable the card after it is clicked so it cannot be clicked again
  memoryCardByID.disabled = true;

  return [memoryCardByID, cardObjectDetails]; // Return the button card and an object of the array
}

/** 
 * Function to target the unmatched cards
 */
function checkNoMatch() {
  firstCard.innerHTML = "";
  secondCard.innerHTML = "";

  // Enable the cards so they can be clicked again
  firstCard.disabled = false;
  secondCard.disabled = false;

  // Reset the flipped cards count
  flippedCards = 0;
}

/** 
 * Function to track the number of movements made by the user decreaseChances
 */
function incrementMovements() {
  const currentMovement = parseInt(document.getElementById("movements").innerText); // Starts with 0
  const updatedUserMovements = currentMovement + 1; //Add one movement every time the user clicks

  document.getElementById("movements").innerText = ` ${updatedUserMovements}`;
}

/** 
 * Function to increment the score every time there is a match 
 */
function incrementScore() {
  const currentScore = parseInt(document.getElementById("score").innerText);
  const updatedUserScore = currentScore + 100; //Add 100 points every time the user has a match

  document.getElementById("score").innerText = ` ${updatedUserScore}`;
  if (updatedUserScore === 800) {
    document.getElementById("score").innerText = `🎉 800! 🎉`;

    //Function you have WON
  }
}

/** Function to block all cards at the end of the game 
function blockCards() {
  for (let j = 0; j <= 15; j++) {
    let blockedCard = document.getElementById(j);
    let result2 = emojis[j];
    blockedCard.innerHTML = `<img src ="assets/images/${result2}.png" alt="">`;
    blockedCard.disabled = true;
  }
}*/

/** 
 * Function to show the congratulations message and score summary
 */

function congratulationsGameCompleted() {

}