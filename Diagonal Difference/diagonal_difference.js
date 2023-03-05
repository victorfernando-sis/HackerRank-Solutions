// https://www.hackerrank.com/challenges/three-month-preparation-kit-diagonal-difference/problem

function diagonalDifference(arr) {
    const sumDiagonal = (arr) => {
        let i = 0
        return function (orientation) {
            let result = 0
            arr.forEach(item => {
                const fragment = orientation == 'right' ?
                    item.reverse() : item
                result += fragment[i]
                i++
            })
            i = 0
            return result
        }
    }
    const getDiagonal = sumDiagonal(arr)
    return Math.abs(getDiagonal('left') - getDiagonal('right'))
}