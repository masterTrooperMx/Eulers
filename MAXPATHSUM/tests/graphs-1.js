// https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/graphs/graph.js
const { Graph } = require("../models/Graph");

const graph = new Graph(Graph.DIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 5);
graph.addEdge(3, 6);
graph.addEdge(4, 7);
graph.addEdge(4, 8);
graph.addEdge(5, 8);
graph.addEdge(5, 9);
graph.addEdge(6, 9);
graph.addEdge(6, 10);

console.log(graph);

const dfsFromFirst = graph.dfs(first);
//console.log(JSON.stringify(Array.from(dfsFromFirst), null, 2));
const dfsPathsArr = Array.from(dfsFromFirst);
console.log(dfsPathsArr);

let str = '';
function printGraph(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].adjacents != []) {
            str += `${arr[i].value}-`;
            printGraph(arr[i].adjacents);
        } else {
            str += `\n`;
        }
    }
}

printGraph(dfsPathsArr);
console.log(str);

function plainPath (arrObj) {
    let tmp = [];
    for(let i = 0; i < arrObj.length; i++){
        for(p in arrObj[i]){ // properties of object
            //console.log(arrObj[i][p].value); // just the propperty I'm interested in
            tmp.push(arrObj[i][p].value);
        }
    }
    return tmp;
}

let paths = [];
const vals = dfsPathsArr.map(node => node.value);
console.log(`${vals}`);
// all paths
//console.log(aP);
//aP = null;
let aP = graph.findAllPaths(1, 7, null);
paths.push(plainPath(aP));
aP = graph.findAllPaths(1, 8, null);
paths.push(plainPath(aP));
aP = graph.findAllPaths(1, 9, null);
paths.push(plainPath(aP));
aP = graph.findAllPaths(1, 10, null);
paths.push(plainPath(aP));
//console.log(aP);

console.log(paths);