function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

myForEach([1, 2, 3, 4, 5], console.log);

myForEach([2, 3, 4, 5], function (i) {
    console.log("Value is: " + i);
})

// creating a foreach which doesnt require us to pass the array

Array.prototype.callableForEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

console.log("Callable for each results:-")
var arrCall = [9, 10, 11, 12];
arrCall.callableForEach(function (i) {
    console.log("Value is: " + i);
})