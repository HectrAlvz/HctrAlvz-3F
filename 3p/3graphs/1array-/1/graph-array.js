//
// graph as anArray
//

class GraphArray {
  constructor() {
    this.graph = [];
  }
  addVertex(vertex) {
    this.graph.push(vertex);
  }
  addEdge(vertex1, vertex2) {
    this.graph[vertex1].push(vertex2);
    this.graph[vertex2].push(vertex1);
  }
  print() {
    console.log(this.graph);
  }
}