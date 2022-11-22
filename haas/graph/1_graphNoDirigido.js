// ES 6
// unordered graph
// Es 5

//*
//
// your undirected graph solution here
//

class graphNoDirigido {
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
}

let g = new graphNoDirigido()

g.addNode(5) // 5 nodos

g.addEdge(0, 1) // 0 y 1 son adyacentes
g.addEdge(0, 2) // 0 y 2 son adyacentes
g.addEdge(1, 3) // 1 y 3 son adyacentes
g.addEdge(2, 4) // 2 y 4 son adyacentes

console.log('Show Graph')

g.showGraph() // muestra el grafo
console.log()

console.log('Remove Edge 0, 1')

g.removeEdge(0, 1) // elimina la arista entre 0 y 1
console.log()
g.showGraph() // muestra el grafo


//*/

/*
function graphNoDirigido(v) { // v = vertices
    this.vertices = v // Numero de vertices
    this.edges = 0 // Numero de aristas
    this.adj = [] // Arreglo de aristas

    for (let i = 0; i < this.vertices; ++i) { // Inicializa el arreglo de aristas
        this.adj[i] = [] // con arreglos vacios
        this.adj[i].push("") // para evitar undefined
    }

    this.addEdge = addEdge // Agrega una arista
    this.showGraph = showGraph // Muestra el grafo
    this.deleteEdge = deleteEdge // Elimina una arista
    this.dfs = dfs // Busqueda en profundidad
    this.bfs = bfs // Busqueda en amplitud

    function addEdge(v, w) { // v = vertice, w = arista
        this.adj[v].push(w) // Agrega w a la lista de v
        this.adj[w].push(v) // Agrega v a la lista de w
        this.edges++ // Incrementa el numero de aristas
    }

    function deleteEdge(v, w) { // v = vertice, w = arista
        this.adj[v].splice(this.adj[v].indexOf(w), 1) // Elimina w de la lista de v
        this.adj[w].splice(this.adj[w].indexOf(v), 1) // Elimina v de la lista de w
        this.edges-- // Decrementa el numero de aristas
    }

    function showGraph() { // Muestra el grafo
        for (let i = 0; i < this.vertices; ++i) { // Recorre el arreglo de aristas
            process.stdout.write(`${i} -> `) // Muestra el vertice
            for (let j = 0; j < this.vertices; ++j) { // Recorre la lista de aristas
                if (this.adj[i][j] != undefined) // Si la arista existe
                    process.stdout.write(`${this.adj[i][j]} `) // Muestra la arista
            }
            console.log()
        }
    }

    function dfs(v) {
        let visited = new Array(this.vertices)
        for (let i = 0; i < this.vertices; i++)
            visited[i] = false

        dfsUtil(v, visited)
    }

    function dfsUtil(v, visited) {
        visited[v] = true
        console.log("Vertice Visitado: " + v + " ")

        for (let i in this.adj[v]) {
            let n = this.adj[v][i]
            if (!visited[n])
                dfsUtil(n, visited)
        }
    }

    // function dfs(v) { // v = vertice
    //     this.marked[v] = true // Marca el vertice como visitado
    //     if (this.adj[v] != undefined) { // Si el vertice tiene aristas
    //         print("Vertice visitado: " + v) // Muestra el vertice
    //         for (let w in this.adj[v]) { // Recorre la lista de aristas
    //             if (!this.marked[w]) { // Si la arista no ha sido visitada
    //                 this.dfs(w) // Visita la arista
    //             }
    //         }
    //     }
    // }

    function bfs(s) { // s = vertice
        var queue = [] // Crea una cola
        this.marked[s] = true; // Marca el vertice como visitado
        queue.unshift(s) // Agrega el vertice a la cola
        while (queue.length > 0) { // Mientras la cola no este vacia
            var v = queue.shift() // Extrae el primer elemento de la cola
            if (typeof(v) != "string") { // Si el elemento no es una cadena
                print("Visited vertex: " + v) // Muestra el vertice
            }
            for (var w of this.adj[v]) { // Recorre la lista de aristas
                if (!this.marked[w]) { // Si la arista no ha sido visitada
                    this.edgeTo[w] = v // Guarda el vertice anterior
                    this.marked[w] = true // Marca la arista como visitada
                    queue.unshift(w) // Agrega la arista a la cola
                }
            }
        }
    }
}
//*/