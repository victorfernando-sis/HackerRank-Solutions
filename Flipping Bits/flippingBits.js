// https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem


function flippingBits(n) {
    const decToBin32 = (num) => num.toString(2).padStart(32, 0)

    const flippedBits = (num) => {
        return num.split('').map(i => i == 0 ? 1 : 0).join('')
    }
    const compose = (a,b) => (num) => a(b(num))
    const result = compose(flippedBits,decToBin32)(n)
    
    return parseInt(result,2)
}
