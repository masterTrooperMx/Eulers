/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers
 */

// a1 + a2 + ... + a150 = N
console.time('LSUM');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input = '';
let maxX = 0, maxY = 0, sum = 0;

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    let tmp = [];
    let out = [];
    input = input.split('\n');//map(Number);
    maxY = input.length;

    for(let i = 0; i < maxY; i++){
        tmp = BigInt(input[i]);
        console.log(`tmp ${tmp}`);
        sum = BigInt(sum) + BigInt(tmp);
        out.push(BigInt(tmp));
        maxX = out.length;
    }
    console.log(`out ${out}`);
    input = out;
}

function main() {
    prepareInput();
    console.log(`${input.length} nums, sum ${sum}`);
}

main();
console.timeEnd('LSUM');