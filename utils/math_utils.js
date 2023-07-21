/**
 * functions used in solving eulers problems
 */

// sum all the entries of a given array
const sumArr = (arr) => {
    return arr.reduce(function(x,y){return x+y});
}

/**
 * check divisibility n of a number i, turns into string and apply criteria
 * isMult(15, 3) = 15%3 == 0 ?
 * https://www.juntadeandalucia.es/averroes/centros-tic/21003232/helvia/sitio/upload/08___multiplos_y_divisores___numeros_primos.pdf
 * criterios de divisibilidad
 * “2”: un número es divisible entre “2” si acaba en cifra par (0, 2, 4, 6, 8).
 * “3”: un número es divisible entre “3” si la suma de sus cifras es múltiplo de ‘3’.
 * “5”: un número es divisible entre “5” si acaba en ‘5’ o en ‘0’
 */
const isMult = (i, n) => {
    let isIt = false;
    let tmp = i.split('');
    if(n == 2){ // even number are those exactly divided by 2
        tmp = Number(tmp.slice(-1));
        isIt = (tmp == 0 || tmp == 2 || tmp == 4 || tmp == 6 || tmp == 8) ? true : false;
    } else if(n == 3){
        tmp = sumArr(tmp);
        isIt = (tmp%n == 0) ? true : false;
        //isIt = (i%3 == 0) ? true : false; // takes longer time
    } else if( n == 5) {
        tmp = Number(tmp.slice(-1));
        isIt = (tmp == 0 || tmp == 5) ? true : false;
    }
    return isIt;
}

/**
 * Fibonacci O(n) order, plain
 * https://jfbarrios.com/3-formas-de-obtener-el-fibonacci-de-un-numero-en-javascript
 */
const fibonacci = (n) => {
    const sol = [0,1]; // base case

    for(let i = 2; i <= n; i++){
        sol[i] = sol[i-1] + sol[i-2]; // dynamically growing the array
    }
    return sol[n];
}

module.exports = {
    sumArr,
    isMult
}