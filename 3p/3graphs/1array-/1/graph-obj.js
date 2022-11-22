//
// graph as anObject
//

class GraphObj extends GraphSet {
    constructor() {
        super();
        this._obj = {};
    }
    addEdge(v, w) {
        this._obj[v] = this._obj[v] || [];
        this._obj[v].push(w);
        this._obj[w] = this._obj[w] || [];
        this._obj[w].push(v);
    }
    adj(v) {
        return this._obj[v];
    }
    vertices() {
        return Object.keys(this._obj);
    }
}