//Cars is an array
const cars = ["Saab", "Volve", "Hero"]

//car is an object
const car = {type: "Saab", color: "red", color: "white"};

car.color = "blue";

car.owner = "Derek";

const nu = 6;

cars[0] = "BMW";

cars.push("Merc");

document.getElementById("testElement").innerHTML = cars + nu;

document.getElementById("testElement2").innerHTML = car;

function pencilFunc() {
  alert("Go yourself");
}

document.getElementById("Intro").innerHTML = "Hello there twice";

function onImage() {
  document.getElementById("on/off_image").src = "/Pictures/ezgif.com-gif-maker.gif"
}

function offImage() {
  document.getElementById("on/off_image").src =
    src = "/Pictures/top-view-blue-calculator-notepad-color-background_260672-4055.webp"
}

function changeButtonSize() {
  document.getElementById("button1").style.fontSize = "35px";
}

function getRidButton() {
  document.getElementById("previousButton").style.display = "none";
}

//4 ways to display data in javascript
//Inner html - write to a html element
function exampleInnerHtml() {
  document.getElementById("innerDemo").innerHTML = 5 + 6;
}

exampleInnerHtml();

//Write into a html doc using document.write
document.write(5 + 6);

//As a general rule according to W3schools I should always use const to declare a variable and use var if I think the variable will change.

