process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let T = 0;
let nodes = '';
let vals = '';
let levels = '';
let links = [];
let lattice = [];

class Node {
    constructor(name = 'noname', val = 0, level = 0, next = []) { // default vals
        this.name = String(name); // node name as string
        this.val = Number(val); // node value as a number
        this.level = Number(level); // node level in lattice as number
        this.next = next; // node list of next nodes as Array
    }
};
/*
First line will contain 
T, number of testcases. Then the testcases follow.
Each testcase contains of a single line of input, three space separated integers A, B, and C.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//map(Number);

    T = Number(input.splice(0, 1)[0]); // number of nodes
    nodes = String(input.splice(0, 1)[0]).split(' '); // array of chars
    vals = String(input.splice(0, 1)[0]).split(' ').map(Number); // array of numbers
    levels = String(input.splice(0, 1)[0]).split(' ').map(Number); // array of numbers

    for(let i = 0; i < T; i++){
        links.push(String(input.splice(0, 1)[0]).split(' '));
        lattice.push(new Node(nodes[i], vals[i], levels[i], links[i]));
    }
}

function printObj(object) {
    let output = '';
    for (let property in object) {
        output += property + ': ' + object[property]+'; ';
    }
    return output;
}

function main() {
    prepareInput();
    console.log(input);
    console.log(`${T}, ${nodes}, ${vals}, ${levels}`);

    console.log(lattice);
    let maxLev = Math.max(...levels);
    let i = 0; // actual level
    let node = new Node();
    node = lattice[0];
    console.log(`${maxLev}, ${i}, ${JSON.stringify(node)} ${printObj(node)} ${node?.val}`); // just crazy, optional chaining operator
}

main();