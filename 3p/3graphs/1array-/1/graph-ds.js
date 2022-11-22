//
// graph as another data structure
//

class GraphDs {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }
  addNode(node) {
    this.nodes.push(node);
  }
  addEdge(edge) {
    this.edges.push(edge);
  }
}