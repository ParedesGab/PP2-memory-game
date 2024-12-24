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
  const sortedCardData = cardsArray.sort(randomValues); //withot () calls out the entire function
  return sortedCardData;
}

console.log(randomizeCardDeck()); //outputs and array

/** 
 * Create 16 cards within the game-container section
 */
function generateHtmlCards() {
  const sortedCardData = randomizeCardDeck();

  for (item = 0; item <= sortedCardData.length; item++) {
    //Create the elements
    const memoryCard = document.createElement("div");
    const cardFront = document.createElement("img");
    const cardBack = document.createElement("div");
    //Add clases to them
    memoryCard.classList.add("card");
    cardFront.classList.add("face");
    cardBack.classList.add("back");

    const gameContainer = document.getElementById("game-container");

    gameContainer.appendChild(memoryCard);
    memoryCard.appendChild(cardFront);
    memoryCard.appendChild(cardBack);

    console.log(memoryCard);
  };
}

generateHtmlCards();


/**cardData.forEach((item) => {

  //Add classes to the created elements
  card.classList = "card";
  face.classList = "face";
  back.classList = "back";

  //Add image info to the cards
  face.src = item.imgSrc;

  //Add attributes to the created elements
  card.setAttribute("name", item.name);

  //Add attributes to the created elements
  face.setAttribute("alt", item.alt);

  //console.log(item); //Each array object consoled separately

  //Append the cards to the section 
  section.appendChild(card);
  card.appendChild(face);
  card.appendChild(back);

  //Add event listener
  card.addEventListener("click", (e) => {
    card.classList.toggle("toggleCard"); //animation

    //Every time we toggle the card, we check the card
    checkCards(e);
  });
});*/