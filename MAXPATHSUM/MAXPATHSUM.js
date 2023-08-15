/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *    3
 *   7 4
 *  2 4 6
 * 8 5 9 3
 * That is, 3 + 7 + 4 + 9 = 23.
 * Find the maximum total from top to bottom of the triangle below.
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. 
 * However, Problem 67, is the same challenge with a triangle containing one-hundred rows; 
 * it cannot be solved by brute force, and requires a clever method! ;o)
 */
//console.time('MAXPATHSUM');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';

function cacheInput(data) {
    input += data;
}

let T = 0;
let nodes = [];
let vals = [];
let levels = [];
let links = [];
let lattice = []; // lattice of nodes

class Node {
    constructor(name, val, level, next) {
        this.name = String(name); // node name as string
        this.val = Number(val); // node value as a number
        this.level = Number(level); // node level in lattice as number
        this.next = next; // node list of next nodes as Array
    }
}

function prepareInput() {
    input = input.split('\n');//map(Number);
    //console.log('p',input);
    let tmp = [];
    T = Number(input.splice(0, 1)[0]); // number of nodes
    //console.log(input, T, tmp);
    nodes = String(input.splice(0, 1)[0]).split(' ').map(String); // array of chars
    vals = String(input.splice(0, 1)[0]).split(' ').map(Number); // array of numbers
    levels = String(input.splice(0, 1)[0]).split(' ').map(Number); // array of numbers

    for(let i = 0; i < T; i++){
        links.push((input.splice(0, 1)[0]).split(' '));
        tmp.push(new Node(nodes[i], vals[i], levels[i], links[i]));
    }
    lattice = tmp;
}

function getMaxSum(sum, node) {// from array of nodes get max value fo sum and return node
    // check options
        let arrNxt = [];
        arr = node?.next; // just related to node ['X', 'Y']
        console.log('in', sum, arr, node);
        for(let i = 0; i < arr?.length; i++){ // find the nodes linked to node
            arrNxt.push(lattice.find(n => n.name === arr[i]));
        }
        //console.log('in', arrNxt);
        let sMax = arrNxt.map(obj => obj?.val+sum);
        //console.log(sMax);
        let max = Math.max(...sMax);
        let idx = sMax.indexOf(max);
        let tmp = arrNxt[idx];
        //console.log(max, idx, tmp);
        return [max, tmp];
}

function main() {
    prepareInput();
    console.log(lattice);
    console.log(`${nodes}, ${vals}, ${levels}`);
    
    let maxLev = Math.max(...levels);
    let i = 0; // actual level
    let node = lattice[0];
    console.log(`${maxLev}, ${i}, ${JSON.stringify(node)}`);
    let sum = Number(node?.val); //  start node 
    let path = []; path.push(`${node?.name}.${node?.val}`); 

    while(i < maxLev){
        let tmpL = lattice.filter((nd) => nd.level == i+1); // separate per level
        console.log(`${i}-${JSON.stringify(tmpL)}`);
        [sum, node] = getMaxSum(sum, node);
        path.push(`${node?.name}.${node?.val}`);
        i++;
    }
    console.log(`${path} ${sum}`);
}

main();