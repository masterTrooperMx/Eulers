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
let max = 1000;
let listM = [];

const sumArr = (arr) => {
    return arr.reduce(function(x,y){return x+y});
}

const isMult = (i, n) => {
    let isIt = false;
    let tmp = i.split('');
    if(n == 3){
        tmp = sumArr(tmp);
        isIt = (tmp%n == 0) ? true : false;
        //isIt = (i%3 == 0) ? true : false; // takes longer time
    } else if( n == 5) {
        tmp = Number(tmp.slice(-1));
        isIt = (tmp == 0 || tmp == 5) ? true : false;
    }
    return isIt;
}

for(let i = 0; i < max-1; i++){
    let num = String(i+1);
    if(isMult(num, 3) || isMult(num, 5)){
        listM.push(Number(num));
    }
}
//console.log(listM, listM.length);
console.log(sumArr(listM));
console.timeEnd('MULT3OR5');