//
// your undirected graph solution here
//

class graphNoDirigido {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.adj = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adj[node] = [];
    }

    addEdge(node1, node2) {
        this.edges.push([node1, node2]);
        this.adj[node1].push(node2);
        this.adj[node2].push(node1);
    }

    showGraph() {
        for (let i = 0; i < this.nodes.length; ++i) {
            process.stdout.write(`${this.nodes[i]} -> `)
            for (let j = 0; j < this.adj[this.nodes[i]].length; ++j) {
                process.stdout.write(`${this.adj[this.nodes[i]][j]} `)
            }
            console.log()
        }
    }

    searchNode(node) {
        let index = this.nodes.indexOf(node);
        return this.nodes[index];
    }
}

let g = new graphNoDirigido()
g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
g.addNode(4)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph()