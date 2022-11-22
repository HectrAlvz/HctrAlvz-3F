//
// graph as aMap
//

class GraphMap {
  constructor() {
    this.aMap = new Map();
  }

  addVertex(vertex) {
    this.aMap.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.aMap.get(vertex1).push(vertex2);
    this.aMap.get(vertex2).push(vertex1);
  }

  print() {
    console.log(this.aMap);
  }
}