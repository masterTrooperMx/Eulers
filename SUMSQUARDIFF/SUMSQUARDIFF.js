/**
 * The sum of the squares of the first ten natural numbers is, 385 (1^2+2^2+ ... +10^2)
 * The square of the sum of the first ten natural numbers is, 3025 (1+2+...+10)^2
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 * 3025 - 385 = 2640
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
console.time('SUMSQUARDIFF');
const sumSquares = (ini, end) => {
    let sum = 0;
    for(let i = ini; i <= end; i++){
        sum += Math.pow(i, 2);
    }
    return sum;
}

const squareSum = (ini, end) => {
    let sum = 0;
    for(let i = ini; i <= end; i++){
        sum += i;
    }
    return(Math.pow(sum, 2));
}

const main = () => {
    const sS = sumSquares(1, 100);
    const Ss = squareSum(1, 100);
    console.log(`sum of quares: ${sS}, square of sum ${Ss}, diff ${Ss - sS}`);
}

main();
console.timeEnd('SUMSQUARDIFF');