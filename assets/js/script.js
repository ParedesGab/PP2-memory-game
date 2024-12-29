// Game container
const gameContainer = document.getElementById("game-board");

// Game variables 
let flippedCards = 0; // This variable will increase by 1 every time a user clicks a card
let firstButtonCard; //html element: <button ...></button>
let secondButtonCard; //html element: <button ...></button>
let revealedCard;
let firstsImageRevealed = {};
let secondImageRevealed = {};
let shuffledCardDeck = []

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

//const shuffledCardDeck = randomizeCardDeck(); //Derives from function randomizeCardDeck()
//console.log(shuffledCardDeck); //outputs a randomly sorted array

/** 
 * Create 16 button cards with class name "btn" and id string values from 0 to 15 
 */
function createMemoryCards() {
  //const shuffledCardDeck = randomizeCardDeck();
  for (let i = 0; i < shuffledCardDeck.length; i++) {
    //Create a memory card
    const memoryCard = document.createElement("button");
    memoryCard.classList.add("btn");

    //Assing them the attributes id and data-id
    const idValue = String(i); // Convert i to a string
    memoryCard.id = idValue; // Assign the id: "0", "1", ..., "15"
    memoryCard.setAttribute("data-id", idValue);

    // // Set aria label attribute
    const ariaLabelIndex = i + 1;
    memoryCard.setAttribute("aria-label", `memory card ${ariaLabelIndex}`);

    // Attach the click event listener
    memoryCard.addEventListener("click", function () {
      handleCardFlip(i); // Flip the clicked card
    });

    //Append the buttons to game board
    gameContainer.appendChild(memoryCard);

    document.getElementById("controls").classList.remove("hidden");
  };
}

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  createMemoryCards();

  // Get all buttons with the class "btn", for them to be clicked
  const allMemoryCards = document.getElementsByClassName("btn");

  for (let memoryCard of allMemoryCards) {
    memoryCard.addEventListener("click", function () {
      let cardIdNumber = this.getAttribute("id")
      if (cardIdNumber === "submit") {
        //ocation.reload();
      } else {
        handleCardFlip(cardIdNumber);
      }
    });
  }
});

/** 
 * Main function to handle card flipping logic 
 */
function handleCardFlip(cardIdNumber) {

  //const revealedCard = revealCard(cardIdNumber);
  // const firstButtonCard; 
  // const secondButtonCard;

  // Handle the first card
  if (flippedCards === 0) {
    revealedCard = revealCard(cardIdNumber);

    firstButtonCard = revealedCard[0];
    firstsImageRevealed = revealedCard[1];

    console.log(firstButtonCard); // <button ...></button>
    console.log(firstsImageRevealed); // {object of the array}

    flippedCards++;

    // Handle the second card
  } else if (flippedCards === 1) {
    revealedCard = revealCard(cardIdNumber);

    secondButtonCard = revealedCard[0];
    secondImageRevealed = revealedCard[1];

    flippedCards++;

    // Check if the cards match based on the property name
    if (firstsImageRevealed.name === secondImageRevealed.name) {
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
 * Function to reveal the image of a memory card 
 * and prevent it to be further clicked
 */
function revealCard(cardIdNumber) {
  // Get a memory card by its ID
  const memoryCardByID = document.getElementById(cardIdNumber);

  // Add the properties of the randomly shuffled card deck array to a memory card.
  const cardObjectDetails = shuffledCardDeck[cardIdNumber];
  memoryCardByID.innerHTML = `<img src="${cardObjectDetails.imgSrc}" alt="${cardObjectDetails.alt}">`;

  // Disable the clicked card  so it cannot be clicked again
  memoryCardByID.disabled = true;

  return [memoryCardByID, cardObjectDetails]; // Return the <button ...></button> card and an object of the carDeck array, respectively.
}

/** 
 * Resets unmatched cards.
 * This function clears the content of two unmatched cards, re-enables them 
 * for interaction, and resets the flipped cards count to allow further gameplay.
 */
function checkNoMatch() {
  firstButtonCard.innerHTML = "";
  secondButtonCard.innerHTML = "";

  // Enable the cards so they can be clicked again.
  firstButtonCard.disabled = false;
  secondButtonCard.disabled = false;

  // Reset the flipped cards count
  flippedCards = 0;
}

/** 
 * Function to track the number of movements made by the user
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

    //If score is 800 (all cards are matched), end the game
    gameFinishedCongratulations();
  }
}

/** 
 * Congratulates the user after finishing the game and displays the number of movements.
 */

function gameFinishedCongratulations() {

  const finalMovements = parseInt(document.getElementById("movements").innerText);
  document.getElementById("total-movements").innerText = finalMovements;

  changeMenu(MENU.CONGRATULATIONS);

  // Show final board for 2 seconds, then display the game result
  setTimeout(function () {
    hideHtmlElement("game-board");
    hideHtmlElement("controls");
    showHtmlElement("main-container");
    showHtmlElement("game-done-congratulations");

  }, 1300);
}

/***/
function changeMenu(menuId) {
  // Get all game elements
  let homeMenuElements = document.getElementById("main-container").children;
  //console.log(homeMenuElements); //IDs: game-name, home-menu-buttons, game-indications, game-done-congratulations

  for (let element of homeMenuElements) {
    if (element.id === "game-name") {
      // Always display the game name
      continue;
    } else if (element.id === menuId) {
      // Show selected menu screen
      element.classList.remove("hidden");
    } else {
      // Hide other screens
      element.classList.add("hidden");
    }
  }
}

/** 
 * Displays an HTML element by removing the"hidden" class from it
 */
function showHtmlElement(id) {
  document.getElementById(id).classList.remove("hidden");
}

/** 
 * Hides an HTML element by adding the "hidden" class to it
 */
function hideHtmlElement(id) {
  document.getElementById(id).classList.add("hidden");
}

/**
 * Function that onclick takes you to the Home Page
 */
function showMainMenu() {
  changeMenu(MENU.MAIN);
}