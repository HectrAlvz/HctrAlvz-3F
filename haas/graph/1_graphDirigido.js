//
// directed graph
//

class graphDirigido {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.edges.push([node1, node2]);
        this.adjacencyList[node1].push(node2);
    }

    searchNode(node) {
        let index = this.nodes.indexOf(node);
        return this.nodes[index];
    }
}