const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const vals = [3, 7, 4, 2, 4, 6, 8, 5, 9, 3];
const levels = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3];
const links = [['B', 'C'], ['D', 'E'], ['E', 'F'], ['G', 'H'], ['H', 'I'], ['I', 'J'], [], [], [], []];
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
    let tmp = [];
    //const A = new Node('A', '3', ['B', 'C']);
    for(let i = 0; i < nodes.length; i++){
        tmp.push(new Node(nodes[i], vals[i], levels[i], links[i]));
    }
    return tmp;
}

function genLinks(num) { // levels
    let l = 1;
    for(let i = 0; i < num; i++){
        let str = '';
        for(let j = 0; j < i; j++){
            ++l;
            str += `[n${l}, n${l+1}]\n`;
        }
        //console.log(`${i} ${l} ${str}`);
        console.log(`${str}`);
        str = '';
        if(i >= 1) { ++l; }
    }
}

function main() {
    lattice = prepareInput();
    console.log(lattice);

    let tmp = ['A', 'C', 'G', 'H'];
    let found = [];

    console.log(tmp);
    for(let i = 0; i < tmp.length; i++){
        console.log(tmp[i]);
        //console.log(lattice[i]);
        found.push(lattice.find(n => n.name === tmp[i]));
    }
    console.log(found);

    found = [];
    found = lattice.filter(n => n.name in tmp);
    console.log(found);

    genLinks(15);
}

main();