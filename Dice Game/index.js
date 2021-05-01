
// Get random number one through 6
let randomNumber1 = randomGenerator();
// Get random number one through 6
let randomNumber2 = randomGenerator();
// Get random png picture
let randomDiceImage = "dice"+ randomNumber1 + ".png";
// Get random png picture
let randomDiceImage2 = "dice"+ randomNumber2 + ".png";
// get location of png picture
let randomimagesource = "images/"+randomDiceImage;
// get location of png picture
let randomimagesource2 = "images/"+randomDiceImage2;


function randomGenerator() {
var random = Math.floor(Math.random()*6)+1;
return random;
};

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute('src',randomimagesource);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute('src',randomimagesource2);

//changing title depending on who wins
if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = " Player One Wins "
} else if (randomNumber2 > randomNumber1){
document.querySelector("h1").innerHTML = "Player Two Wins "
} else {
  document.querySelector("h1").innerHTML = "Tied mfers "
}
