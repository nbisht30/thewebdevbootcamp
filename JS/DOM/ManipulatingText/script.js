var pTag1 = document.getElementById("last");
setTimeout(() => { 
    pTag1.textContent = "There ain't no goodbyes here!";
}, 5000);

setTimeout(() => { 
    pTag1.innerHTML = "There ain't no <strong>goodbyes</strong> here!";
}, 5000);


