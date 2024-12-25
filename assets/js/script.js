const gameContainer = document.getElementById("game-container");

/**
 * Generate the array containing the card images as objects
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
 * Function that generates negative and positive random numbers between -0.5 and 0.5
 */
function randomValues() {
  const randomNumber = Math.random() - 0.5;
  return randomNumber; // random numbers between -0.5 and 0.5
}

/** 
 * Function that sorts the array randomly
 */
function randomizeCardDeck() {
  const cardsArray = cardDeckArray();
  const sortedCardArray = cardsArray.sort(randomValues); //withot () calls out the entire function
  return sortedCardArray;
}

console.log(randomizeCardDeck()); //outputs and array

/** 
 * Create 16 cards within the game-container section
 * */

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

  console.log(allMemoryCards); //Returns all cards an array. 
  //Log to confirm the cards have been created
  console.log(`Total memory cards found: ${allMemoryCards.length}`);

  for (const memoryCard of allMemoryCards) {
    //console.log(memoryCard); // Returns individually each card

    memoryCard.addEventListener("click", function () { //when a button is clicked, the code that is inside this function will run.
      const cardId = this.getAttribute("id");
      if (cardId === "submit") {
        alert("you clicked submit");
        //location.reload(); // Reload the page if the "submit" card is clicked
      } else {
        alert(`You clicked ${cardId}`);
        //flippTheCards(cardId)
      }
    });
  }
});