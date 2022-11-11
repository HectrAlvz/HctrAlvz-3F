function Tree(data){
            this.data = data;
    this.left = null; this.right = null;
}

Tree.prototype = {
    constructor: Tree,
    insert: function(data){ // Inserta un nodo en el árbol
        if(data < this.data){
            if(this.left === null) this.left = new Tree(data) // Si no hay nodo izquierdo, lo crea
            else this.left.insert(data)
        }
        else{
            if(this.right === null) this.right = new Tree(data) // Si no hay nodo derecho, lo crea
            else this.right.insert(data)
        }
    },

    preorden: function(){ // Recorrido preorden
        console.log(this.data)
        if(this.left !== null) this.left.preorden()
        if(this.right !== null) this.right.preorden()
    },

    inorden: function(){ // Recorrido inorden
        if(this.left !== null) this.left.inorden()
        console.log(this.data)
        if(this.right !== null) this.right.inorden()
    },

    postorden: function(){ // Recorrido postorden
        if(this.left !== null) this.left.postorden() // Si hay nodo izquierdo, lo recorre
        if(this.right !== null) this.right.postorden() // Si hay nodo derecho, lo recorre
        console.log(this.data) // Muestra el dato del nodo
    },

    depthFirst: function(){ // Recorrido por niveles
        let queue = [this]
        while(queue.length > 0){
            let node = queue.pop()
            console.log(node.data)
            if(node.right !== null) queue.push(node.right)
            if(node.left !== null) queue.push(node.left)
        }
    },

    breadthFirst: function(){ // Recorrido por niveles
        let queue = [this]
        while(queue.length > 0){
            let node = queue.shift()
            console.log(node.data)
            if(node.left !== null) queue.push(node.left)
            if(node.right !== null) queue.push(node.right)
        }
    },

    preordenInv: function(){ // Recorrido preorden inverso
        if(this.right !== null) this.right.preordenInv()
        if(this.left !== null) this.left.preordenInv()
        console.log(this.data)
    },

    contains: function(data){ // Busca un nodo en el árbol
        if(data === this.data) return true // Si el nodo es el que buscamos, lo devuelve
        else if(data < this.data){
            if(this.left === null) return false
            else return this.left.contains(data) // Si no, busca en el nodo izquierdo
        }
        else{
            if(this.right === null) return false
            else return this.right.contains(data) // Si no, busca en el nodo derecho
        }
    }
}

let root = new Tree('Xo') // Nodo raíz

let O1 = new Tree('X4')
let O2 = new Tree('X3')

root.left = O1
root.right = O2

let q1 = new Tree('X2')
let q2 = new Tree('X1')

O2.left = q1
O2.right = q2

console.log('TREE')
console.log(root)
console.log('//////////////////////////////')

console.log('Preorden: ')
root.preorden()
console.log('-----------------')

console.log('Inorden: ')
root.inorden()
console.log('-----------------')

console.log('Postorden: ')
root.postorden()
console.log('-----------------')

console.log('Depth First: ')
root.depthFirst()
console.log('-----------------')

console.log('Breadth First: ')
root.breadthFirst()
console.log('- - - - - - - - -')
console.log('Preorden Inverso: ')
root.preordenInv()
console.log('-----------------')




