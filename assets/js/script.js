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

const sortedCardArray = randomizeCardDeck();
sortedCardArray.forEach((item, index) => {
  //Create the elements
  const memoryCard = document.createElement("div");
  const cardFront = document.createElement("img");
  const cardBack = document.createElement("div");

  //Add clases to them
  memoryCard.classList.add("card");
  //cardFront.classList.add("face");
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

  console.log(memoryCard);
});