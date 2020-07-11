var numSquares = 6;
var colors = getRandomColorArray(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    this.textContent = "New Colors";
    //generate all new colors
    colors = getRandomColorArray(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplauy to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < colors.length; i++) {
        // Adding initial colors to squares.
        squares[i].style.backgroundColor = colors[i];
    }
    //change background of h1
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    //generate all new colors
    colors = getRandomColorArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = getRandomColorArray(numSquares);
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

for (let i = 0; i < colors.length; i++) {
    // Adding initial colors to squares.
    squares[i].style.backgroundColor = colors[i];

    // Square click event.
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?"
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