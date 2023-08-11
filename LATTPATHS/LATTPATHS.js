/**
 * Starting in the top left corner of a 2x2 grid, and only being able to move to the right and down, 
 * there are exactly 6 routes to the bottom right corner.
 * 
 * How many such routes are there through a 20x20 grid?
 * https://www.robertdickau.com/lattices.html
 */
let n = 20, m = 20;

const factorial = (n) => {
    // base case
    if(n == 0n || n == 1n){
        return 1n;
    }
    for(let i = n-1; i >= 1; i--){
        n = BigInt(n)*BigInt(i);
    }
    return n;
}
// n objects (size of set) combined in r subsets
const combinations = (n, r) => {
    // factorial(n) / factorial(n-r) * factorial(r)
    return factorial(n) / (factorial(n-r)*factorial(r));
}
// number of paths
const pathsLattice = (n, m) => {
    // is the same of binomial coeff
    return combinations(n+m,n);
}

function prepareInput() {
    // read command line
    if(process.argv.length > 2){
        [n, m] = process.argv.slice(2, 4).map(Number); // convert them into numbers
        //console.log(n,m);
    }
}

function main(){
    prepareInput();
    // like paths from (0,0) to (2,2) in a bigger lattice
    console.log(`n ${n}, m ${m}, paths ${pathsLattice(n,m)}`);
}

main();