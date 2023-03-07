// https://www.hackerrank.com/challenges/three-month-preparation-kit-counting-valleys/problem

function countingValleys(steps, path) {
    let level = 0 // Keep track of the level the hiker is at
    let status = ['S'] // Status is a log of the hiker's location: Sea (S),Mountain (M) or Valley (V)
    Array.from(path).forEach(item => {
        const prevStatus = status.slice(-1)
        const nextLevel = item == 'U' ? level + 1 : level - 1
        if (nextLevel > 0 && prevStatus == 'S') {
            level++
            status.push('M')
        }
        else if (nextLevel < 0 && prevStatus == 'S') {
            level--
            status.push('V')
        }
        else if (nextLevel == 0 && prevStatus != 'S') {
            level = 0
            status.push('S')
        }
        else {
            level = nextLevel
        }
    })

    // Count how many times the hiker was in a Valley
    return status.filter(item => item == 'V').length
}
