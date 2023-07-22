/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 
 * 9009 = 91 x 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
console.time('LARPALPROD');
let arrNums = [];

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const isPalindrome = (num) => {
    let palim = false;
    const sNum = String(num);
    // just compare string in inverse order with normal
    const muNs = reverseString(sNum);
    if( sNum === muNs){
        palim = true;
    }
    return palim;
}

const main = () => {
    for(let i = 100; i < 1000; i++){
        for(let j = 100; j < 1000; j++){
            //console.log(`${i} X ${j} = ${i*j}`);
            let res = i*j;
            if(isPalindrome(String(res))){
                arrNums.push(res);
            }
        }                                                                                           
    }
    arrNums.sort(function(a,b){return a -b;});
    console.log(Math.max(...arrNums));
    //console.log(`${arrNums}`);
}

main();
console.timeEnd('LARPALPROD');