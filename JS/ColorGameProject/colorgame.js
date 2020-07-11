var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++) {
    // Adding initial colors to squares.
    squares[i].style.backgroundColor = colors[i];

    // Square click event.
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again.";
        }
    });
}

function changeColors(color) {
    // loop through all squares and change color
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}