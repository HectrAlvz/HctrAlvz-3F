//
// graph as aSet
//

class GraphSet extends GraphArray {
  constructor() {
    super();
    this.type = 'set';
  }

  // add a node to the graph
  addNode(node) {
    if (this.nodes.indexOf(node) === -1) {
      this.nodes.push(node);
    }
  }

  // add an edge to the graph
  addEdge(edge) {
    if (this.edges.indexOf(edge) === -1) {
      this.edges.push(edge);
    }
  }

  // remove a node from the graph
  removeNode(node) {
    const index = this.nodes.indexOf(node);
    if (index !== -1) {
      this.nodes.splice(index, 1);
    }
  }

  // remove an edge from the graph
  removeEdge(edge) {
    const index = this.edges.indexOf(edge);
    if (index !== -1) {
      this.edges.splice(index, 1);
    }
  }
}