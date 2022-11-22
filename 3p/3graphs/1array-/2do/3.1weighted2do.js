//
// dcomplab exercise
// complete graph as matrix
//

class graphMatrix {
  constructor(n) {
    this.n = n;
    this.matrix = new Array(n);
    for (let i = 0; i < n; i++) {
      this.matrix[i] = new Array(n);
    }
  }
  addEdge(i, j, weight) {
    this.matrix[i][j] = weight;
    this.matrix[j][i] = weight;
  }
  removeEdge(i, j) {
    this.matrix[i][j] = 0;
    this.matrix[j][i] = 0;
  }
  print() {
    for (let i = 0; i < this.n; i++) {
      let row = "";
      for (let j = 0; j < this.n; j++) {
        row += this.matrix[i][j] + " ";
      }
      console.log(row);
    }
  }
}