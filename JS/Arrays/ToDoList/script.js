function listJS() {
    var items = new Array();
    do {
        var choice = prompt("What would you like to do?");
        if (choice === "new") {
            var item = prompt("Enter a new todo:");
            items.push(item);
        } else if (choice === "list") {
            console.log("List: " + items);
        }
    } while (choice === "new" || choice === "list");
}

window.setTimeout(listJS, 500);