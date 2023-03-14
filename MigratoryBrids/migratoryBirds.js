//https://www.hackerrank.com/challenges/three-month-preparation-kit-migratory-birds/problem

function migratoryBirds(arr) {
    const emptyArray = new Array(5).fill(0)
    const countingArray = arr.reduce((acc, pilot) => {
        acc[pilot - 1]++
        return acc
    }, emptyArray)
    const maxNum = Math.max(...countingArray)
    return countingArray.indexOf(maxNum)+1
}