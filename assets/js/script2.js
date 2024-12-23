//Get Button Container
const buttonContainer = document.getElementById("container-cards");

// Create an image element inside the button container
const img = document.createElement('img');
img.classList.add("btn");

// img.src = '../images/';
img.src = "assets/images/witch.png"
img.src = "assets/images/dice.png"

buttonContainer.appendChild(img);

console.log(img);