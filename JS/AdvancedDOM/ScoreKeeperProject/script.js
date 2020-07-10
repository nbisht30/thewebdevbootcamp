var p1btn = document.getElementById("pl1btn");
var p1src = document.getElementById("p1scr");
var p2btn = document.getElementById("pl2btn");
var p2src = document.getElementById("p2scr");
var reset = document.getElementById("reset");

var playLimInc = document.getElementById("playInc");
var playLim = document.getElementById("playLim");

reset.addEventListener("click", function () {
    p1src.textContent = "0";
    p1src.style.color = "black";
    p2src.textContent = "0";
    p2src.style.color = "black";
});

var p1win = false;
var p2win = false;

p1btn.addEventListener("click", function () {
    let num = p1src.textContent;
    if (p2win === true) {
        alert("Player 2 has already won!");
    }
    else if (num < playLim.textContent && p1win !== true && p2win === false) {
        num++;
        p1src.textContent = num;
        if (playLim.textContent == num) {
            p1src.style.color = "green";
            p1win = true;
            setTimeout(() => alert("Player 1 has won!"), 1000);
        }
    }
});

p2btn.addEventListener("click", function () {
    let num = p2src.textContent;
    if (p1win === true) {
        alert("Player 1 has already won!");
    }
    else if (num < playLim.textContent && p2win !== true && p1win === false) {
        num++;
        p2src.textContent = num;
        if (playLim.textContent == num) {
            p2src.style.color = "green";
            p2win = true;
            setTimeout(() => alert("Player 2 has won!"), 1000);
        }
    }
});

playLimInc.addEventListener("change", function () {
    if (playLimInc.value > playLim.textContent) {
        p1win = false;
        p2win = false;
        p1src.style.color = "black";
        p2src.style.color = "black";
    }
    playLim.textContent = playLimInc.value;
});

