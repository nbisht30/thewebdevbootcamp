var colors = getRandomColorArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colors.length; i++) {
    // Adding initial colors to squares.
    squares[i].style.backgroundColor = colors[i];

    // Square click event.
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
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
    let randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

function getRandomColorArray(num) {
    // make array, add num random numbers to array and return the array
    var arr = [];
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(getRandomColor());
    }
    return arr;
}

function getRandomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}