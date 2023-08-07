/**
 * 
 * function recurse() {
 *  // function  1st before calling itself
 *  // some where stop condition
 *  recurse(); // calling itself
 *  // function code last after finishing itself
 * }  
 */

function countDown(fromNumber) {
    // what it has to do
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) { // stop condition, when nextNumber == 0
        countDown(nextNumber);
    }
}

countDown(3);

function myCountDown(fromNumber) {
    // what it has to do
    console.log(fromNumber);
    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) { // stop condition, when nextNumber == 0
        countDown(nextNumber);
    }
    console.log(`nx ${nextNumber}`);
}

myCountDown(10);

function sum(n) {
    if (n <= 1) { // stop condition, when n == 0
      return n;
    }
    // what it has to do
    return n + sum(n - 1);
  }

console.log(sum(10));