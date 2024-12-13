const emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "😁", "😁", "😘", "😘", "😎", "😎", "🤩", "🤩", "😶‍🌫️", "😶‍🌫️"];

/** Generate random numbers that the sort method can use to decide the order of the array elements.
 * And if it
 */
function randomNumbers(a, b) {
  let randomValue = Math.random(); //create random number between 0 and 1
  if (randomValue > 0.5) { //50% probability
    return 2;
  } else {
    return -1 //incorrect
  }
}

/** Sort the Emojis using the randomNumbers function*/
function sortEmojis(emojis) {
  return emojis.sort(randomNumbers);
}

console.log(sortEmojis(emojis)); // Shuffled emojis


/** let randomCard = checkRandom(); //2 or -1
console.log(randomCard); //output will be 2 or 1
emojis.sort(randomCard); //this is asking to sort between 2 or -1 - which does not make sense, hence the error

Function to sort the randomEmojis  
function sortRandom() {*/

/**let randomEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1); 
Same as emojis.sort(function)
() anonymus function => is what follows inside {},
 and conditional statemetn*/


/** Function to generate random numbers 
/** Sort the Emojis using the randomNumbers function
function sortEmojis(array) {
  return array.sort(randomNumbers);
}*/