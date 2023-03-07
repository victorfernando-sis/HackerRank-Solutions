// https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem

function countingSort(arr) {
    let frequencyArray = new Array(100).fill(0)
    arr.forEach(item => frequencyArray[item] += 1)
    return frequencyArray
}
