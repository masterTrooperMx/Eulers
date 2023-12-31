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
let maxX = 0, maxY = 0;

function cacheInput(data) {
    input += data;
}

function prepareInput() {
    let tmp = [];
    input = input.split('\n');//map(Number);
    maxY = input.length;

    for(let i = 0; i < maxY; i++){
        tmp = input[i].split('').map(Number);
        input[i] = tmp;
        maxX = tmp.length;
    }
}

function searchH(group) {
    // search horizontally, group is the size of adjacent numbers
    let prod = 0;
    let conseq = []; // initializing array with zeros
    for(let i = 0; i < maxY; i++){
        for(let j = 0; j <= maxX-group; j++){
            let tmp = input[i].slice(j,j+group);
            //console.log(i, j, tmp);
            let ptmp = tmp.reduce(function(a,b){ return a*b; });
            if(ptmp > prod){
                prod = ptmp;
                conseq = tmp;
            }
        }
    }
    return {
        "prod": prod,
        "conseq": conseq,
    }
}

function searchV(group) {
    // search horizontally, group is the size of adjacent numbers
    let prod = 0;
    let conseq = []; // initializing array with zeros
    for(let i = 0; i <= maxY-group; i++){
        for(let j = 0; j < maxX; j++){
            let tmp = [input[i][j], input[i+1][j], input[i+2][j], input[i+3][j]];
            let ptmp = tmp.reduce(function(a,b){ return a*b; });
            if(ptmp > prod){
                prod = ptmp;
                conseq = tmp;
            }
        }
    } 
    return {
        "prod": prod,
        "conseq": conseq,
    }
}

function searchTR(group){
    // transversal right
    let prod = 0;
    let conseq = []; // initializing array with zeros
    for(let i = 0; i <= maxY-group; i++){
        for(let j = 0; j <= maxX-group; j++){
            let tmp = [input[i][j], input[i+1][j+1], input[i+2][j+2], input[i+3][j+3]];
            let ptmp = tmp.reduce(function(a,b){ return a*b; });
            if(ptmp > prod){
                prod = ptmp;
                conseq = tmp;
            }
        }
    } 
    return {
        "prod": prod,
        "conseq": conseq,
    }
}

function searchTL(group) {
    // transversal left
    let prod = 0;
    let conseq = []; // initializing array with zeros
    for(let i = maxY-1; i > group; i--){
        for(let j = maxX-1; j > group; j--){
            //console.log(i,j);
            let tmp = [input[i][j], input[i-1][j-1], input[i-2][j-2], input[i-3][j-3]];
            let ptmp = tmp.reduce(function(a,b){ return a*b; });
            if(ptmp > prod){
                prod = ptmp;
                conseq = tmp;
            }
        }
    } 
    return {
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
    console.log(`${input[0].length} lines, maxX ${maxX}, maxY ${maxY}`);
    //console.table(input);
    const w = 4;
    const maxH = searchH(w);
    const maxV = searchV(w);
    const maxTd = searchTR(w);
    const maxTl = searchTL(w);
    const res = [maxH, maxV, maxTd, maxTl];
    console.log(res);
    console.log(maxVal(res, (a) => { return a.prod; }));
}

main();
console.timeEnd('LARPRODSER');