//
// design node (object) for a  
// weighted graph incidence list 
//

// Node with INCIDENCE DESIGN WITH TAGS and WEIGHT
let nodeW = {
    tag: ['a', 'b'],
    weight: 2,
    way: {
        'a': 2,
        'b': 5,
    }
}

let nodeX = {
    tag: ['a', 'c', 'd'],
    weight: 4,
    way: {
        'a': 2,
        'c': 8,
        'd': 3,
    }
}

let nodeY = {
    tag: ['b', 'c', 'd', 'e'],
    weight: 5,
    way: {
        'b': 5,
        'c': 8,
        'd': 1,
        'e': 3,
    }
}

let nodeZ = {
    tag: ['e'],
    weight: 7,
    way: {
        'e': 3,
    }
}

let connectionList = [nodeW, nodeX, nodeY, nodeZ]

console.log(connectionList)