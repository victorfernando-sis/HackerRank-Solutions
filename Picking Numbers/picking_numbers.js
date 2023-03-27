//https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem

function pickingNumbers(a) {
    const isAbsValid = (a, b) => (Math.abs(a - b)) <= 1 ? true : false
    const sorted = a.sort((a, b) => a - b)
    const isAllEqual = sorted.every((item, i, array) => item === array[0])
    if (isAllEqual) return a.length
    const getSubarrays = (sorted) => {
        const subArrays = []
        return function () {
            sorted.reduce((acc, pilot, array) => {
                let firstItem = acc[0] || pilot
                if (isAbsValid(firstItem, pilot)) {
                    return [...acc, pilot]
                }
                subArrays.push(acc)
                firstItem = pilot
                return [pilot]
            }, [])
            return subArrays
        }
    }
    const subArrays = getSubarrays(sorted)()
    const sizes = subArrays.map(item => item.length)
    return Math.max(...sizes)
}