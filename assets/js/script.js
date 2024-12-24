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
console.log(data);

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
function randomize() {
  const cardData = getData();
  let sortedCardData = cardData.sort(randomValues); //withot () calls out the entire function
  return sortedCardData;
}

console.log(randomize());