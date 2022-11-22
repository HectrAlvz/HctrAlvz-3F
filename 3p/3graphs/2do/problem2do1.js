//
// your undirected graph solution here
//

class unDiGraph {
    constructor() {
        this.nodes = []
        this.edges = 0
        this.adj = {}
    }

    addNode(v){
        for (let i = 0; i < v ; i++) {
            this.nodes.push(i)
            this.adj[i] = []
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    }

    showGraph() {
        for (let i = 0; i < this.nodes.length; i++) {
            console.log('node: ', i, ' -> ', this.adj[i])
            // console.log(i + " -> ")
            // for (let j = 0; j < this.adj[i].length; j++) {
            //     console.log(this.adj[i][j] + " ")
            // }
            console.log()
        }
    }

    // Esto hace que si v y w son adyacentes,
    // se elimine la arista entre ellos.
    removeEdge(v, w) {
        this.adj[v] = this.adj[v].filter(
            u => u !== w // Filtra los elementos de v que no sean w
        )
        this.adj[w] = this.adj[w].filter(
            u => u !== v // Filtra los elementos de w que no sean v
        )
    }

    search(v, w) { // Busca si existe un camino entre v y w
        console.log('Searching for path between ' + v + ' and ' + w)

        // Existe un camino entre v y w?
        if (v < 0 || v >= this.nodes.length || w < 0 || w >= this.nodes.length) {
            console.log('   ------ Invalid vertex ------')
            return false // No existe camino
        }
        let visited = []
        for (let i = 0; i < this.nodes.length; i++) {
            visited[i] = false
        }
        return this.searchVisit(v, w, visited)
    }

    searchVisit(v, w, visited) { // Busca si existe un camino entre v y w
        visited[v] = true
        if (v === w) {
            return true
        }
        for (let u of this.adj[v]) {
            if (!visited[u]) {
                if (this.searchVisit(u, w, visited)) {
                    return true
                }
            }
        }
        return false
    }
}

let g = new unDiGraph()

g.addNode(5) // 5 nodos

g.addEdge(0, 1) // 0 y 1 son adyacentes
g.addEdge(0, 2) // 0 y 2 son adyacentes
g.addEdge(1, 3) // 1 y 3 son adyacentes
g.addEdge(2, 4) // 2 y 4 son adyacentes

console.log('\nShow Graph')
g.showGraph() // muestra el grafo
console.log()

console.log(' ') // Busca si hay camino entre 0 y 1
console.log('Found:', g.search(0, 1))

console.log('\nRemove Edge 0, 1')
g.removeEdge(0, 1) // elimina la arista entre 0 y 1

console.log()
g.showGraph() // muestra el grafo

console.log(' ') // Busca si hay camino entre 0 y 1
console.log('Exists:', g.search(0, 1))