// https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem

function matchingStrings(strings, queries) {
    const result = []
    queries.forEach(querie => {
        result.push(strings.filter(item => item == querie).length)
    })
    return result
}