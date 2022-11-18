export default
//
// ES6
// Clase de grafo

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) { // Agrega un nodo al grafo
        this.nodes.push(node);
    }

    addEdge(edge) { // Agrega un arco al grafo
        this.edges.push(edge);
    }

    getNodes() { // Devuelve los nodos del grafo
        return this.nodes;
    }

    walkShortestPath(start, end) { // Camina el camino más corto
        let queue = [];
        let visited = [];
        let path = [];
        let current = start;
        queue.push(current);
        visited.push(current);
        while (queue.length > 0) {
            current = queue.shift();
            if (current === end) {
                path.push(current);
                return path;
            }
            let neighbors = current.getNeighbors();
            neighbors.forEach(neighbor => {
                if (visited.indexOf(neighbor) === -1) {
                    visited.push(neighbor);
                    queue.push(neighbor);
                }
            });
            path.push(current);
        }
    }

    walkDepthFirst(start, end) { // Camina el camino más largo
        let stack = [];
        let visited = [];
        let path = [];
        let current = start;
        stack.push(current);
        visited.push(current);
        while (stack.length > 0) {
            current = stack.pop();
            if (current === end) {
                path.push(current);
                return path;
            }
            let neighbors = current.getNeighbors();
            neighbors.forEach(neighbor => {
                if (visited.indexOf(neighbor) === -1) {
                    visited.push(neighbor);
                    stack.push(neighbor);
                }
            });
            path.push(current);
        }
    }


}