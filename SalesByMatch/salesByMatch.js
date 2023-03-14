//https://www.hackerrank.com/challenges/three-month-preparation-kit-sock-merchant/problem


function sockMerchant(n, ar) {

    const availableColors = new Set(ar)
    const pairs = [...availableColors].map(color => {
        const numOfPairs = ar.filter(item => item == color).length
        return (numOfPairs % 2 == 0) ? numOfPairs / 2 : (numOfPairs - 1) / 2
    })
    const result = pairs.reduce((a, b) => a + b)
    return result
}