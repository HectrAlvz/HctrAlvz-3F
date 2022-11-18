// arbol binarios
// grafo no derigido
//

// let tree =  [
//     [0, 1, 0, 0],//1
//     [1, 0, 1, 1],//2
//     [0, 1, 0, 1],//3
//     [0, 1, 1, 0],//4
// ]

class graph {
    constructor() {
        this.nodes = []
        this.edges = []
    }
    addNode(node) {
        let index = this.nodes.indexOf(node)
        if (index === -1) {
            this.nodes.push(node)
            this.edges.push([])
            for (let i = 0; i < this.edges.length; i++) {
                this.edges[i].push(0)
            }
        }
    }
    addEdge(node1, node2, weight = 1) {
        let index1 = this.nodes.indexOf(node1)
        let index2 = this.nodes.indexOf(node2)
        if (index1 !== -1 && index2 !== -1) {
            this.edges[index1][index2] = weight
            this.edges[index2][index1] = weight
        }
    }

    print() {
        console.log(this.nodes)
        console.log(this.edges)
    }
    //numeros de caminos
    numPaths(node1, node2) {
        let index1 = this.nodes.indexOf(node1)
        let index2 = this.nodes.indexOf(node2)
        let paths = 0
        if (index1 !== -1 && index2 !== -1) {
            for (let i = 0; i < this.edges.length; i++) {
                if (this.edges[index1][i] !== 0) {
                    if (this.edges[i][index2] !== 0) {
                        paths++
                    }
                }
            }
        }
        return paths
    }

    isSquared() {
        return this.nodes.length === this.edges.length
    }
    isComplete() {
        let complete = true
        for (let i = 0; i < this.edges.length; i++) {
            for (let j = 0; j < this.edges[i].length; j++) {
                if (this.edges[i][j] === 0) {
                    complete = false
                }
            }
        }
        return complete
    }
    isDirected() {
        let directed = false
        for (let i = 0; i < this.edges.length; i++) {
            for (let j = 0; j < this.edges[i].length; j++) {
                if (this.edges[i][j] !== this.edges[j][i]) {
                    directed = true
                }
            }
        }
        return directed
    }
    isWeighted() {
        let weighted = false;
        for (let i = 0; i < this.edges.length; i++) {
            for (let j = 0; j < this.edges[i].length; j++) {
                if (this.edges[i][j] !== 0) {
                    weighted = true
                }
            }
        }
        return weighted
    }
}

let graph1 = new graph()
graph1.addNode('a')
graph1.addNode('b')
graph1.addNode('c')
graph1.addNode('d')

graph1.addEdge('a', 'b', 2)
graph1.addEdge('a', 'c', 5)

graph1.addEdge('a', 'd', 7)
graph1.addEdge('b', 'c', 8)

graph1.addEdge('b', 'd', 3)
graph1.addEdge('c', 'd', 1)

console.log('Es cuadrada: ', graph1.isSquared())
console.log('Es completa: ', graph1.isComplete())
console.log('Es dirigida: ', graph1.isDirected())
console.log('Es ponderada: ', graph1.isWeighted())
console.log('---------------------')
graph1.print()

console.log('---------------------')
console.log('Numero de caminos: ', graph1.numPaths('a', 'a'))
