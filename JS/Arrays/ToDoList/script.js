function listJS() {
    var items = new Array();
    do {
        var choice = prompt("What would you like to do?");
        if (choice === "new") {
            var item = prompt("Enter a new todo:");
            items.push(item);
            console.log("Item added.");
        } else if (choice === "list") {
            console.log("List of items:-")
            items.forEach(function (todo, i) {
                console.log((i + 1) + ". " + todo);
            });
        } else if (choice === "delete") {
            var index = prompt("Enter index of todo to delete: ");
            items.splice(index, 1); // to delete n items starting from index.
            console.log("Item deleted.");
        }
    } while (choice !== "quit");
}

window.setTimeout(listJS, 500);