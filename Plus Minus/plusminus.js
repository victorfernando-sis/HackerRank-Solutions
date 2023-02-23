'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    const pos_count = arr.filter(num=>num>0).length
    const neg_count = arr.filter(num=>num<0).length
    const zero_count = arr.filter(num=>num==0).length
    
    const pos_ratio = (pos_count/arr.length).toFixed(6)
    const neg_ratio = (neg_count/arr.length).toFixed(6)
    const zero_ratio = (zero_count/arr.length).toFixed(6)
    
    console.log(pos_ratio)
    console.log(neg_ratio)
    console.log(zero_ratio)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
