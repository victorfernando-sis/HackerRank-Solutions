// https://www.hackerrank.com/challenges/three-month-preparation-kit-divisible-sum-pairs/problem


function divisibleSumPairs(n, k, ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if (i < j) {
                if ((ar[i] + ar[j]) % k == 0)
                    count++
            }
        }
    }
    return count
}
