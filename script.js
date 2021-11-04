var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var h2 = document.querySelector("h2");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var btn = document.createElement("button");
btn.innerHTML = "Random Colors";
h2.insertAdjacentElement("beforebegin", btn);

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value+ ")";
  h3.textContent = body.style.background + ";";
}

setGradient();

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function colorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function convertRGBtoHex(red, green, blue) {
  return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

function randomizeColors() {
  color1.value = convertRGBtoHex(getRandomNumber(), getRandomNumber(), getRandomNumber());
  color2.value = convertRGBtoHex(getRandomNumber(), getRandomNumber(), getRandomNumber());
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomizeColors);