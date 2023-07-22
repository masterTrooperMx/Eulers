/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 
 * 600851475143?
 */

console.time('LAPRIMFACT');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
const num = 600851475143;
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
        if (num % prime == 0) { // it is a factor
            arr.push(prime);
            console.log(`${prime}`);
        }
    }
}
console.log(`${arr[-1]}`);
console.timeEnd('LAPRIMFACT');