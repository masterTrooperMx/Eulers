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

// translate nodes vals
transList = [3, 7, 4, 2, 4, 6, 8, 5, 9, 3];

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

// https://stackoverflow.com/questions/20798477/how-to-find-the-indexes-of-all-occurrences-of-an-element-in-array
function stripPaths (listOL, ini) {
    let indices = [], tmp = [], i = -1;
    for(const l of listOL) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        //console.log(l);
        while((i = l.indexOf(ini, i+1)) != -1){ // optional operator of indexOf
            tmp.push(i);
        }
        indices.push([l, tmp]);
        tmp = [];
        i = -1;
    }
    return indices;
}

function preparePaths(listOL){
    let listOut = [];
    //console.log('...');
    for(const tmp of listOL) {
        let [l, idx] = tmp;
        //console.log(l, idx);
        if(idx.length != 1) {
            let lon = idx[1] - idx[0];
            for(let i = 0; i < idx.length; i++){
                //console.log(l, idx[i], lon, l.slice(idx[i], lon));
                listOut.push(l.splice(0, lon)); // takes first lon elements and shorten array
            }
        } else {
            listOut.push(l);
        }
    }
    return listOut;
}

let aP;
function findPaths(n1, n2, root) {
    return new Promise((resolve, reject) => {
        aP += graph.findAllPaths(n1, n2, root)
        if(aP != []){
            resolve(aP);
        } else {
            reject(new Error('camino vacio'));
        }
    });
}
let paths = [];
const vals = dfsPathsArr.map(node => node.value);
console.log(`${vals}`);
// find all paths parallel with Promises
// aP = graph.findAllPaths(1, 7, null);
// paths.push(plainPath(aP));
// aP = graph.findAllPaths(1, 8, null);
// paths.push(plainPath(aP));
// aP = graph.findAllPaths(1, 9, null);
// paths.push(plainPath(aP));
// aP = graph.findAllPaths(1, 10, null);
// paths.push(plainPath(aP));
findPaths(1, 7, null)
    .then(aP => console.log(aP))
    .catch(error => console.error(error));

//console.log(aP);
// console.log('--paths',paths);
// const strPaths = stripPaths(paths, 1);
//console.log('--strip', strPaths);
// const singlePaths = preparePaths(strPaths);
// console.log('--prep', singlePaths);
// translate all
// let transPaths = [];
// singlePaths.forEach(arr => {
//     let tmp = [];
//     for(let i = 0; i < arr.length; i++){
//         tmp.push(transList[arr[i]-1]);
//     }
//     transPaths.push(tmp);
//     tmp = [];
// });
// sum all
// console.log('---trans');
// transPaths.forEach(arr => {
//     console.log(arr, arr.reduce((x,y) => x+y));
// });