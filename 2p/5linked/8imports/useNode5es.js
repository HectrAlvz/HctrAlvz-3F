//
//
//
// import LinkedList from '../../../haas/linked/node5es.js'

import LinkedList from '../../../haas/linked/node5es.js'

let list = new LinkedList()

list.append('a')
console.log(list)

console.log("******************************")

list.append('b')
list.append([1, 2, 3, 4, 5])
console.log(list)

console.log("******************************")

list.prepend([123,'abc'])
console.log(list)

console.log("******************************")

console.log(list.getHead())

console.log("******************************")

console.log(list.getTail())

console.log("******************************")

console.log(list.toString())

console.log("******************************")
console.log("*-**-**-**-**-**-**-**-**-**-*")

list.traverse()