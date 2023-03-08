// https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem

function pangrams(s) {
    const letters = new Set(s.replaceAll(/([1-9]+)?(\s)/g, '').toLowerCase())
    return [...letters].length == 26 ? 'pangram' : 'not pangram'
}
