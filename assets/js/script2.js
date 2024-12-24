/**Get Button Container
const cardsContainer = document.getElementById("container-cards");

// Create an image element inside the button container
const img = document.createElement('img');
img.classList.add("btn");

// img.src = '../images/';
img.src = "assets/images/witch.png"
img.src = "assets/images/dice.png"

cardsContainer.appendChild(img);

console.log(img);*/

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//Link text
//playerLivesCount.textContent = playerLives;

//Generate the array containing the card images as objects
const getData = () => [{
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
const data = getData();

//Randomize an array
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

randomize();

// Card generator function
const cardGenerator = () => {
  const cardData = randomize();
  console.log(cardData); //cardData is the randomly sorted array

  //Generate the HTML 16 times
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

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
  });
};

//Check Cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target; //target is the element we clicked on
  console.log(clickedCard);
  clickedCard.classList.add("flipped"); //add flipped class everytime an element is clicked

  //Logic 
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);
  console.log("---");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        //card.classList.remove("toggleCard");
      });
    }
  }
};

cardGenerator();