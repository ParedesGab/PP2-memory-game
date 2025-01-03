// Game container
const gameContainer = document.getElementById("game-board");

// Game variables that are reassigned later in the code
let flippedCards = 0; // This variable will increase by 1 every time a user clicks a card
let firstButtonCard; //html element: <button ...></button>
let secondButtonCard; //html element: <button ...></button>
let revealedCard;
let firstsImageRevealed = {};
let secondImageRevealed = {};
let shuffledCardDeck = [];

/**
 * Generates the array containing the card images as objects with alt and name attributes
 */
function cardDeckArray() {
  return [{
      imgSrc: "assets/images/alien.png",
      name: "alien",
      alt: "alien"
    },
    {
      imgSrc: "assets/images/alien.png",
      name: "alien",
      alt: "alien"
    },
    {
      imgSrc: "assets/images/astronaut.png",
      name: "astronaut",
      alt: "astronaut"
    },
    {
      imgSrc: "assets/images/astronaut.png",
      name: "astronaut",
      alt: "astronaut"
    },
    {
      imgSrc: "assets/images/comet.png",
      name: "comet",
      alt: "comet"
    },
    {
      imgSrc: "assets/images/comet.png",
      name: "comet",
      alt: "comet"
    },
    {
      imgSrc: "assets/images/earth.png",
      name: "earth",
      alt: "earth"
    },
    {
      imgSrc: "assets/images/earth.png",
      name: "earth",
      alt: "earth"
    },
    {
      imgSrc: "assets/images/launch.png",
      name: "launch",
      alt: "launch"
    },
    {
      imgSrc: "assets/images/launch.png",
      name: "launch",
      alt: "launch"
    },
    {
      imgSrc: "assets/images/mercury.png",
      name: "mercury",
      alt: "mercury"
    },
    {
      imgSrc: "assets/images/mercury.png",
      name: "mercury",
      alt: "mercury"
    },
    {
      imgSrc: "assets/images/saturn.png",
      name: "saturn",
      alt: "saturn"
    },
    {
      imgSrc: "assets/images/saturn.png",
      name: "saturn",
      alt: "saturn"
    },
    {
      imgSrc: "assets/images/sun.png",
      name: "sun",
      alt: "sun"
    },
    {
      imgSrc: "assets/images/sun.png",
      name: "sun",
      alt: "sun"
    },
  ];
}

/** 
 * Function that generates random values between -0.5 and 0.5 
 */
function randomValues() {
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

    // Set aria label attribute
    const ariaLabelIndex = i + 1;
    memoryCard.setAttribute("aria-label", `memory card ${ariaLabelIndex}`);

    // Attach the click event listener
    memoryCard.addEventListener("click", function () {
      handleCardFlip(i); // Flip the clicked card
    });

    //Append the buttons to game board
    gameContainer.appendChild(memoryCard);

    document.getElementById("controls").classList.remove("hide");
  }
}

/** 
 * Main function to handle card flipping logic 
 */
function handleCardFlip(cardIdNumber) {

  // Handle the first card
  if (flippedCards === 0) {
    revealedCard = revealCard(cardIdNumber);

    firstButtonCard = revealedCard[0];
    firstsImageRevealed = revealedCard[1];

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
  memoryCardByID.classList.add('no-hover');

  return [memoryCardByID, cardObjectDetails]; // Return the <button ...></button> card, and an object of the carDeck array, respectively.
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

  firstButtonCard.classList.remove('no-hover');
  secondButtonCard.classList.remove('no-hover');

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
 * Increment the score every time there is a match 
 */
function incrementScore() {
  const currentScore = parseInt(document.getElementById("score").innerText);
  const updatedUserScore = currentScore + 100; //Add 100 points every time the user has a match

  document.getElementById("score").innerText = ` ${updatedUserScore}`;
  if (updatedUserScore === 800) {
    document.getElementById("score").innerText = `🎉 800! 🎉`;

    //If score is 800 (all cards are matched) -> end the game
    gameFinishedCongratulations();
  }
}

/** 
 * Congratulates the user after finishing the game and displays the number of movements.
 */
function gameFinishedCongratulations() {

  //Remove game heading smaller-name class
  document.getElementById("game-name").classList.remove("smaller-name");

  const finalMovements = parseInt(document.getElementById("movements").innerText);
  document.getElementById("total-movements").innerText = finalMovements;

  // Show final board for 4s, then display the game result
  setTimeout(function () {
    hideHtmlElement("game-board");
    hideHtmlElement("controls");
    showHtmlElement("main-container");
    showHtmlElement("game-done-congratulations");

    //Make game heading smaller
    document.getElementById("game-name").classList.add("smaller-name");

  }, 4000);
}

/** 
 * Hides an HTML element by adding the "hide" class to it
 */
function hideHtmlElement(id) {
  document.getElementById(id).classList.add("hide");
}

/** 
 * Displays an HTML element by removing the"hide" class from it
 */
function showHtmlElement(id) {
  document.getElementById(id).classList.remove("hide");
}

/** 
 * Resets the game
 */
function resetGame() {
  // Reset game variables
  flippedCards = 0;
  firstButtonCard = {};
  secondButtonCard = {};
  firstsImageRevealed = {};
  secondImageRevealed = {};

  // Clear game board
  gameContainer.innerHTML = '';

  // Reset score and movements
  document.getElementById("score").innerText = '0';
  document.getElementById("movements").innerText = '0';

  // Create a new deck and shuffle
  let cardDeck = cardDeckArray();
  shuffledCardDeck = randomizeCardDeck();

  // Create the cards again
  createMemoryCards();
}

/** 
 * Starts a new game when the Play again! button is clicked
 */
function playGame() {
  // Call the resetGame function
  resetGame();

  //In case hidden, unhide the memory board game
  document.getElementById("memory-game-container").classList.remove("hide");
  document.getElementById("game-board").classList.remove("hide");

  //Make game heading smaller
  document.getElementById("game-name").classList.add("smaller-name");

  // Hide any other elements
  document.getElementById("home-menu-buttons").classList.add("hide");
  document.getElementById("game-indications").classList.add("hide");
  document.getElementById("game-done-congratulations").classList.add("hide");
}

/** 
 * Function that onclick takes you to the Game indications
 */
function gameIndications() {
  document.getElementById("game-indications").classList.remove("hide");
  document.getElementById("home-menu-buttons").classList.add("hide");
  document.getElementById("game-name").classList.add("smaller-name");
}

/**
 * ReturnHome from the Memory card page
 */
function returnHome() {
  document.getElementById("home-menu-buttons").classList.remove("hide");
  document.getElementById("memory-game-container").classList.add("hide");
}

/** 
 * Onclick takes you to the home page
 */
function showMainMenu() {
  document.getElementById("home-menu-buttons").classList.remove("hide");
  document.getElementById("game-done-congratulations").classList.add("hide");
  document.getElementById("game-indications").classList.add("hide");
}

/**
 * Code to be executed when the DOM finishes loading.
 * Contains the function that onclick takes you to the Home Page
 */
document.addEventListener("DOMContentLoaded", function () {
  showMainMenu();
});