var randomNumber = Math.random() * 6
var randomNumber1 = Math.floor(randomNumber) + 1;
var randomImage1 = "images/Dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage1);

var randomNumber = Math.random() * 6
var randomNumber2 = Math.floor(randomNumber) + 1;
var randomImage2 = "images/Dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Papa  Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Aadhya Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}