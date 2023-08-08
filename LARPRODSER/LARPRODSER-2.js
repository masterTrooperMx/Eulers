/**
 * The four adjacent digits in the 1000-digit number that have the greatest product are 
 * 9 x 9 x 8 x 9 = 5832.
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. 
 * What is the value of this product?
 */

// a1 x a2 x ... x a13 = N
console.time('LARPRODSER-2');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input = '';
let maxX = 0, maxY = 0;

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    let tmp = [];
    let out = [];
    input = input.split('\n');//map(Number);
    maxY = input.length;

    for(let i = 0; i < maxY; i++){
        tmp = input[i].split('').map(Number);
        console.log(`tmp ${tmp}`);
        for(let j = 0; j < tmp.length; j++){
            out.push(BigInt(tmp[j]));
        }
        maxX = out.length;
    }
    console.log(`out ${out}`);
    input = out;
}

// think is a big array of numbers so work with just H searching
function searchH(group) {
    // search horizontally, group is the size of adjacent numbers
    let prod = 0;
    let conseq = []; // initializing array with zeros
    console.log(`H j 0 maxX ${maxX-group}, i 0 maxY ${maxY}`);
    //for(let i = 0; i < maxY; i++){
        for(let j = 0; j <= maxX-group; j++){
            let tmp = input.slice(j,j+group);
            let ptmp = tmp.reduce((a, b) => BigInt(a)*BigInt(b), 1);
            console.log(`(${j}),[${tmp}], ${ptmp}`);
            if(ptmp > prod){
                prod = ptmp;
                conseq = tmp;
            }
        }
    //}
    return {
        "way": "H",
        "prod": prod,
        "conseq": conseq,
    }
}



const maxVal = (arr, fn) => {
    // max value functional
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        let tmp = fn(arr[i]);
        if(tmp > max){
            max = tmp;
        }
    }
    return max;
}

function main() {
    prepareInput();
    //console.log(`${input.length} lines, maxX ${maxX}, maxY ${maxY}, ${input}`);
    const w = 13;
    const maxH = searchH(w);

    const res = maxH;
    console.log(res);
    console.log(maxVal(res, (a) => { return a.prod; }));
}

main();
console.timeEnd('LARPRODSER-2');