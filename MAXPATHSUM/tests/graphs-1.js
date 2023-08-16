import { Graph } from "../models/Graph";

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

dfsFromFirst = graph.dfs(first);
console.log(Array.from(dfsFromFirst));