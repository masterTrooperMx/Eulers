/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10001st prime number?
 */

// go to the archive of primes
console.time('10001PRIMES');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input = '';
let arr = [];

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() {
    prepareInput();
    console.log(`${input.length} lines`);
    let maxP = input.length;
    for (let i = 0; i < maxP; i++) {
        let prime = Number(input.splice(0, 1)[0]);
        arr.push(prime);
    }
    console.log(arr[10002]);
}

main();
console.timeEnd('10001PRIMES');