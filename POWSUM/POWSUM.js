/**
 * 2**15 = 32768 and the sum of its digits is 3+2+7+6+8 = 26.
 * 
 * What is the sum of the digits of the number 2**1000?
 * https://www.designcise.com/web/tutorial/what-is-the-math-pow-alternative-for-bigint-values-in-javascript
 */
const pow = (base, exponent) => base ** exponent;

function main(){
    let sum = 0;
    const base = BigInt(2);
    const expo = BigInt(1000);
    const res = pow(base, expo);
    console.log(`${res}`);
    const str = res.toString(); // in JS strings are like arrays
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    console.log(`sum ${sum}`);
}

main();