/**
 * The four adjacent digits in the 1000-digit number that have the greatest product are 
 * 9 x 9 x 8 x 9 = 5832.
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. 
 * What is the value of this product?
 */

// a1 x a2 x ... x a13 = N
console.time('LARPRODSER');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input = '';

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    let tmp = [];
    input = input.split('\n');//map(Number);
    for(let i = 0; i < input[i].length; i++){
        tmp.push(Number(input.splice(0, 1)[0]));
    }
    input[i] = tmp;
}

function main() {
    prepareInput();
    console.log(`${input[0].length} lines, ${input}`);

    console.log(arr[10002]);
}

main();
console.timeEnd('LARPRODSER');