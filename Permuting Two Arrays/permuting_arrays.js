// https://www.hackerrank.com/challenges/three-month-preparation-kit-two-arrays/problem

function twoArrays(k, A, B) {
    
    const A1 = A.sort(function (a, b) { return a - b });
    const B1 = B.sort(function (a, b) { return a - b }).reverse();
    for (let i = 0; i < A1.length; i++) {
        if (A1[i] + B1[i] < k) {
            return 'NO';
        }
    }
    return 'YES';
}