var button = document.getElementsByTagName("button");
var body = document.querySelector("body");
button[0].addEventListener("click", function(){
    console.log("Button was clicked.");
    if(body.style.background === "blue"){
        body.style.background = "white";
    }else{
        body.style.background = "blue";
    }
});