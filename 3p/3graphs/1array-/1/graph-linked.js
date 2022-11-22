//
// graph as aLinked
//

class GraphLinked {
  constructor() {
    this.aLinked = [];
  }

  addVertex(vertex) {
    this.aLinked[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.aLinked[vertex1].push(vertex2);
    this.aLinked[vertex2].push(vertex1);
  }

  print() {
    console.log(this.aLinked);
  }
}