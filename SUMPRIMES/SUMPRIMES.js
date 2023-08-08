/**
 * The sum of the primes below 10 is 2+3+5+7=17.
 * 
 * Find the sum of all the primes below two million.
 */

// go to the archive of primes
console.time('SUMPRIMES');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input = '';
let arr = [];
let sum = 0n;
const max = 2000000;

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
    for(let i = 0; i < maxP; i++){
        let prime = Number(input.splice(0, 1)[0]);
        //console.log(prime);
        if(prime <= max){
            arr.push(BigInt(prime));
        } else {
            break;
        }
    }
    //console.log(`${arr.length} ${arr}`);
    for(let i = 0; i < arr.length; i++){
        sum = sum + BigInt(arr[i]);
    }
    console.log(`${arr.length} primes, sum ${sum-1}`); // they consider 1 not a prime but a transition number, whatever that means
}

main();
console.timeEnd('SUMPRIMES');