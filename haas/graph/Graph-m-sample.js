import M   from '../matrix/Matrix.js'
//
// ok - asMatrix
//
export default
//
//
//
class GraphSample {

    getDisconected(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
	}
    getCycle(){
	return [
	    [0,1,0,0,0,0,0,1],
	    [1,0,1,0,0,0,0,0],
	    [0,1,0,1,0,0,0,0],
	    [0,0,1,0,1,0,0,0],
	    [0,0,0,1,0,1,0,0],
	    [0,0,0,0,1,0,1,0],
	    [0,0,0,0,0,1,0,1],
	    [1,0,0,0,0,0,1,0],
	]
	}
    getWheel(){
	return [
	    [0,1,1,1,1,1,1],
	    [1,0,1,0,0,0,0],
	    [1,1,0,1,0,0,0],
	    [1,0,1,0,1,0,0],
	    [1,0,0,1,0,1,0],
	    [1,0,0,0,1,0,1],
	    [1,0,0,0,0,1,0],
	]
	}
    getRegular(){
	return [
	    [0,1,0,0],
	    [1,0,1,0],
	    [0,1,0,1],
	    [0,0,1,0]
	]
	}
    getInduced(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
	}
    getIsomorphic(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
	}
    getEulerian(){
	return [
	    [0,1,0,0,0,0,0,1],
	    [1,0,1,0,0,0,0,0],
	    [0,1,0,1,0,0,0,0],
	    [0,0,1,0,1,0,0,0],
	    [0,0,0,1,0,1,0,0],
	    [0,0,0,0,1,0,1,0],
	    [0,0,0,0,0,1,0,1],
	    [1,0,0,0,0,0,1,0],
	]
	}
    getHamiltonian(){
	return [
	    [0,1,1,1,1,1,1],
	    [1,0,1,0,0,0,0],
	    [1,1,0,1,0,0,0],
	    [1,0,1,0,1,0,0],
	    [1,0,0,1,0,1,0],
	    [1,0,0,0,1,0,1],
	    [1,0,0,0,0,1,0],
	]
	}
    getWeighted(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
	}
    getMultipleGraph(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
	}

    getComplete(n){
	let g = new M(n)
	g.ones()
	for (let i = 0; i < n; i++)
	    g.setValue(i,i,0)
	return g.getMatrix()
    }

    getCompleteDummy(){
	return [
	    [0, 1, 1, 1, 1], 
	    [1, 0, 1, 1, 1], 
	    [1, 1, 0, 1, 1], 
	    [1, 1, 1, 0, 1], 
	    [1, 1, 1, 1, 0], 
	]
    }

    getPlanar(){
	return  [
	    [0, 1, 1, 1, 0, 0, 0, 0], 
	    [1, 0, 1, 0, 0, 1, 0, 1], 
	    [1, 1, 0, 1, 1, 0, 0, 1], 
	    [1, 0, 1, 0, 1, 0, 0, 0], 
	    [0, 0, 1, 1, 0, 0, 1, 1], 
	    [0, 1, 0, 0, 0, 0, 1, 1], 
	    [0, 0, 0, 0, 1, 1, 0, 1], 
	    [0, 1, 1, 0, 1, 1, 1, 0] 
	]//n
    }

    aNew(){//console.log('A null graph...') let n =[]
	return [[]]
    }
    
    getUndirected(){
	return [
	    [0,1,0,0],
	    [1,0,1,1],
	    [0,1,0,1],
	    [0,1,1,0]
	]
    }

    getDirected(){
	return [
	    [0,1,0,0],
	    [0,0,1,0],
	    [0,0,0,1],
	    [0,1,0,0]
	]
    }

    getLoopy(){
	return [
	    [1,1],//x7
	    [1,0],//x6
	]
    }
}
