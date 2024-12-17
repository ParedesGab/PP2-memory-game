const emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "😁", "😁", "😘", "😘", "😎", "😎", "🤩", "🤩", "😶‍🌫️", "😶‍🌫️"];
console.log(emojis.length); // output:16

/**Generates a random number between 0 and 1 */
function randomValues(a, b) {
  let randomNumber = Math.random(); //create random number between 0 and 1
  if (randomNumber > 0.5) { //50% probability
    return 2;
  } else {
    return -1 //incorrect
  }
}
console.log(randomValues()); // output: -2 or 1 

/** Sorts an array randomly by comparing two elements of the array (a and b)
 * Together with randomValues, they check which comes first, if a or b.
 */
function sortEmojis(emojis) {
  return emojis.sort(randomValues);
}

//console.log(sortEmojis(emojis));

// 