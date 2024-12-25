// Game container
const gameContainer = document.getElementById("game-container");

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
let firstCard = null;
let secondCard = null;
let revealedCard = null;
let firstResult = null;
let secondResult = null;

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
function createButtonCards() {
  for (let i = 0; i < shuffledCardDeck.length; i++) {
    const buttonCard = document.createElement("button");
    buttonCard.classList.add("btn");

    const idValue = String(i); // Convert i to a string
    buttonCard.id = idValue; // Assign the id: "0", "1", ..., "15"

    const gameContainer = document.getElementById("game-container");
    gameContainer.appendChild(buttonCard);
  };
}

// Code to be executed when the DOM finishes loading
document.addEventListener("DOMContentLoaded", function () {

  createButtonCards();
  // Get all buttons for them to be clicked
  const allButtons = document.getElementsByTagName("button");

  for (const button of allButtons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("id") === "submit") {
        location.reload();
      } else {
        const cardNumber = this.getAttribute("id");
        flippTheCards(cardNumber);
      }
    });
  }
});


/** Main function to handle card flipping logic */
function flippTheCards(cardNumber) {
  // Handle the first card
  if (flippedCards === 0) {
    revealedCard = revealCard(cardNumber);
    firstCard = revealedCard[0];
    firstResult = revealedCard[1];
    console.log(firstCard);
    console.log(firstResult);
    flippedCards++;
    console.log(flippedCards);

    // Handle the second card
  } else if (flippedCards === 1) {
    revealedCard = revealCard(cardNumber);
    secondCard = revealedCard[0];
    secondResult = revealedCard[1];
    console.log(secondCard);
    console.log(secondResult);
    flippedCards++;
    console.log(flippedCards);

    // Check if the cards match
    if (firstResult.name === secondResult.name) {
      flippedCards = 0; // Reset the flipped cards count
      incrementScore();
    } else {
      setTimeout(checkNoMatch, 1000); // Reset unmatched cards after 1 second
    }
  }
}

/** Function to flip a card and reveal its content */
function revealCard(cardNumber) {
  // Get the card by ID
  const card = document.getElementById(cardNumber);

  // Get the card details from the deck (imgSrc, name, alt)
  const cardDetails = shuffledCardDeck[cardNumber];

  // Set the inner HTML of the card to display the image
  card.innerHTML = `<img src="${cardDetails.imgSrc}" alt="${cardDetails.alt}">`;

  // Disable the card after it is clicked
  card.disabled = true;

  return [card, cardDetails]; // Return the card and its details
}

/** Function to reset unmatched cards */
function checkNoMatch() {
  firstCard.innerHTML = "";
  secondCard.innerHTML = "";

  // Enable the cards so they can be clicked again
  firstCard.disabled = false;
  secondCard.disabled = false;

  // Reset the flipped cards count
  flippedCards = 0;
}

/** Increment score (this function should be implemented separately) */
function incrementScore() {
  // Increment the score by 1 or handle score updating logic here
  console.log("Score incremented!");
}

/** Function to decrease the chances left */
function decreaseChances() {
  let oldChance = parseInt(document.getElementById("chances").innerText);
  document.getElementById("chances").innerText = --oldChance; // Starts with 50
  //document.getElementById("chances").innerText = `Chances: ${oldChance++}`;
  //document.getElementById("chances").innerHTML = --oldChance;
  //document.getElementById("chances").innerHTML = `Chances: ${oldChance++}`;
  if (oldChance === 0) {
    blockCards();
    throw `GAME OVER! Aborting!`;
    //alert("🤖🤖🤖: Sorry, Game over!");

    //location.reload();
    //throw `Game over: Aborting!`;
  }
}

/** Function to increment the score every time there is a match */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  //document.getElementById("score").innerText = ++oldScore;
  document.getElementById("score").innerText = oldScore += 100;
  if (oldScore === 800) {
    document.getElementById("score").innerText = `🎉 800! 🎉`;
    //alert("Congratulations AI Wizard!!!👌🤖");
  }
}

/** Function to block all cards at the end of the game */
function blockCards() {
  for (let j = 0; j <= 15; j++) {
    let blockedCard = document.getElementById(j);
    let result2 = emojis[j];
    blockedCard.innerHTML = `<img src ="assets/images/${result2}.png" alt="">`;
    blockedCard.disabled = true;
  }
}