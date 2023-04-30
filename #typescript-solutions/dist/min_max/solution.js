"use strict";
function miniMaxSum(arr) {
    var sum = arr.reduce(function (a, b) {
        return a + b;
    });
    var min = sum - Math.max.apply(Math, arr);
    var max = sum - Math.min.apply(Math, arr);
    return min + " " + max;
}
console.log(miniMaxSum([1, 2, 3, 4, 5, 6]));
