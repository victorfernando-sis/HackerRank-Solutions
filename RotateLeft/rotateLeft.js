// https://www.hackerrank.com/challenges/three-month-preparation-kit-kangaroo/problem

function rotateLeft(d, arr) {
    const array = [...arr]
    const fisrtPart = array.slice(0, d)
    const secondPart = array.slice(d)
    return secondPart.concat(fisrtPart)
}