/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * criterios de divisibilidad
 * “3”: un número es divisible entre “3” si la suma de sus cifras es múltiplo de ‘3’.
 * “5”: un número es divisible entre “5” si acaba en ‘5’ o en ‘0’
 */
console.time('MULT3OR5');
// uploading utils functions
const {sumArr, isMult} = require('../utils/math_utils');

let max = 1000;
let listM = [];

for(let i = 0; i < max-1; i++){
    let num = String(i+1);
    if(isMult(num, 3) || isMult(num, 5)){
        listM.push(Number(num));
    }
}
//console.log(listM, listM.length);
console.log(sumArr(listM));
console.timeEnd('MULT3OR5');