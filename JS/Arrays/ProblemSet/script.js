function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([3, 6, 2, 5]);

// isUniform

function isUniform(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i]) return false;
    }
    return true;
}

console.log(isUniform([1, 1, 1, 1, 1]));
console.log(isUniform([1, 1, 1, 1, 2]));

// sum of elements in the array

function sumArray(arr) {
    var total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

console.log(sumArray([1, 2, 3]));

// max element in array

function maxInArr(arr) {
    var max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}

console.log(maxInArr([3, 2, 5, 1]));