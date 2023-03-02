// https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?

function lonelyinteger(a) {
    let result
    const isDuplicated = (num, arr) => (
        arr.filter(i => i == num).length > 1 ? true : false
    )
    a.forEach((num, i, arr) => {
        if (!isDuplicated(num, arr)) result = num
    })
    return result
}