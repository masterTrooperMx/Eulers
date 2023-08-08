/**
 * Highly Divisible Triangle Number
 */

const triangleNum = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

// hasDiv return array with divs
const hasDiv = (n) => {
    // div 1
    let divs = [1];
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            divs.push(i);
        }
    }
    if(n > 1){
        divs.push(n);// itself
    }
    return divs;
}

function main() {
    const max = 500;
    let maxDivs = 0;
    let i = 1;
    while(maxDivs <= max){
        let trian = triangleNum(i);
        let divs = hasDiv(trian);
        let len = divs.length;
        if(len > maxDivs) {
            maxDivs = len;
        }
        //console.log(`T(${i}) = ${trian}, divs ${divs}`);
        console.log(`T(${i}) = ${trian}, divs ${divs.length}, max divs ${maxDivs}`);
        //console.log(`T(${i}) = ${trian}, divs ${divs.length} ${divs}, max divs ${maxDivs}`);
        i++;
    }
}

main();