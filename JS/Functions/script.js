function isEven(num){
    return num % 2 === 0;
}

function fact(num){
    var fact = 1;
    while(num >= 2){
        fact = num * fact;
        num--;
    }
    return fact;
}

function kebabToSnake(string){
    var newStr = string.replace(/-/g, "_"); ///'-'/g is a regular expression
    return newStr;
}

var num = prompt("Enter a number: ");
if(isEven(num)) alert("Number was even.");
else alert("Number was odd.");

var numF = prompt("Enter a number for fact: ");
alert("Factorial is: " + fact(numF));

var string = prompt("Enter a kebab string: ");
alert("Snake version is: " + kebabToSnake(string));

// Higher order functions: Passing functions to functions

function sing(){
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}

// setInterval() -> Takes a function and calls in after intervals of mentioned time in milliseconds.

setInterval(sing, 1000);



