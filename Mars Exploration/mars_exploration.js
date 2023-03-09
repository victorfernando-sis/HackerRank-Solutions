// https://www.hackerrank.com/challenges/three-month-preparation-kit-mars-exploration/problem

function marsExploration(s) {
    const expectedMsg = new Array(s.length / 3).fill('SOS').join('')    
    const diff = expectedMsg.split('').filter((item, i) => item != s[i])
    return diff.length
}