/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * evenly divisible = Leaving no remainder when divided by
 */
console.time('SMALLMULT');
const isEvenDiv = (num, ini, end) => {
    let evenly = true;
    for(let i = ini; i < end; i++){
        evenly = evenly && (num % i == 0);
    }
    return evenly;
}

let done = false;
let i = 1;
while(!done){
    if(isEvenDiv(i, 1, 20)){
        console.log(i);
        done = true;
    }
    i++;
}
console.timeEnd('SMALLMULT');