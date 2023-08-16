/**
 * https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
 */

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop(element) {
        if(this.items.length == 0) {
            return "underflow";
        }
        return this.items.pop();
    }

    peek(element) {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
};
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
    *dfs(first) {
        const visited = new Map();
        const visitList = new Stack();

        visitList.push(first);

        while(!visitList.isEmpty()) {
            const node = visitList.pop();
            if(node && !visited.has(node)) {
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj => {
                    visitList.push(adj)
                });
            }
        }
    }
};

Graph.UNDIRECTED = Symbol('undirected graph');
Graph.DIRECTED = Symbol('directed graph');

const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1,2);
graph.addEdge(1, 3);
graph.addEdge(1,4);
graph.addEdge(5,2);

console.log(graph);

dfsFromFirst = graph.dfs(first);
console.log(Array.from(dfsFromFirst));