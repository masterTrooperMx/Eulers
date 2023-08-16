// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
const { Stack } = require("./Stack"); // load class 

class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = []; // adjacency list
    }

    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if(index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getAdjacents() {
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map holds key-value pairs, remeber insertion and order, no duplicates
class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);
        if(this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode);
        }
        return [sourceNode, destinationNode];
    }

    addVertex(value) {
        if(this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value);
        if(current) {
            for(const node of this.nodes.values()) {
                node.removeAdjacent(current);
            }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if(sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);

            if(this.edgeDirection === Graph.UNDIRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }
        }
        return [sourceNode, destinationNode];
    }
    // DFS deep first search
    // as a generator function https://stackoverflow.com/questions/9620586/what-is-function-in-javascript
    *dfs(first) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
        const visited = new Map();
        const visitList = new Stack();

        visitList.push(first);

        while(!visitList.isEmpty()) {
            const node = visitList.pop();
            if(node && !visited.has(node)) {
                yield node; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
                visited.set(node);
                node.getAdjacents().forEach(adj => {
                    visitList.push(adj)
                });
            }
        }
    }

    findAllPaths(source, destination, path = new Map()) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        const newPath = new Map(path);
    
        if (!destinationNode || !sourceNode) return [];
    
        newPath.set(sourceNode);
    
        if (source === destination) {
          return [Array.from(newPath.keys())];
        }
    
        const paths = [];
        sourceNode.getAdjacents().forEach((node) => {
          if (!newPath.has(node)) {
            const nextPaths = this.findAllPaths(node.value, destination, newPath);
            nextPaths.forEach((nextPath) => paths.push(nextPath));
          }
        });
        return paths;
    }
};
//
Graph.UNDIRECTED = Symbol('undirected graph');
Graph.DIRECTED = Symbol('directed graph');

module.exports = { Node, Graph };