/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 
 * 600851475143?
 */

console.time('LAPRIMFACT');
const { isPrime, arrUpPrime } = require('../utils/math_utils'); // to detect prime numbers
const max = 600851475143;

let arr = [];
let i = 1;
while (i < max) {
    let p = isPrime(i);
    if(p && max%i == 0){
        arr.push(i);
        console.log(`${i} is prime factor of ${max}`);
    } else if(p){
        console.log(`${i} is just another prime`);
    }
    i++;
}

const primes = arrUpPrime(max);
console.log(`up to ${max}, are ${arr.length} primes that are factors ${arr}`);
console.timeEnd('LAPRIMFACT');