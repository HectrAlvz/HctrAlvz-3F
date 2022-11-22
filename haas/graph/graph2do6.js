//
// ops  6
//

class Graph {
    in2list(m){
        let l=[]
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                if (m[i][j]===1)
                l.push([i,j])
            }
        }
        return l
    }//
    in2matrix(l){
        let m=[]
        for (let i = 0; i < l.length; i++) {
            for (let j = 0; j < l[i].length; j++) {
                if (m[i][j]===undefined)
                m[i][j]=0
            }
        }
        return m
    }//
    in2incidences(a){
    let m=[]
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
        if (m[i][j]===undefined)
            m[i][j]=0
        }
    }return m
    }
    in2adjacencies(i){
    let a=[]
    for (let i = 0; i < i.length; i++) {
        for (let j = 0; j < i[i].length; j++) {
        if (m[i][j]===undefined)
            m[i][j]=0
        }
    }return m
    }

    getLoopy(){
    let l=[]
    for (let i = 0; i < this.m.length; i++) {
        for (let j = 0; j < this.m[i].length; j++) {
        if (this.m[i][j]===1)
            l.push([i,j])
        }
    }return l
    }
    getUndirected(){
    let u=[]
    for (let i = 0; i < this.m.length; i++) {
        for (let j = 0; j < this.m[i].length; j++) {
        if (this.m[i][j]===1)
            u.push([i,j])
        }
    }return u
    }
    getDirected(){
        let d=[]
        for (let i = 0; i < this.m.length; i++) {
            for (let j = 0; j < this.m[i].length; j++) {
                if (this.m[i][j]===1)
                d.push([i,j])
            }
        }
        return d
    }
    getTriangle(){
        let t=[]
        for (let i = 0; i < this.m.length; i++) {
            for (let j = 0; j < this.m[i].length; j++) {
                if (this.m[i][j]===1)
                t.push([i,j])
            }
        }
        return t
    }
    
    toString(){
    let s=''
        if (this.m.length>1 && this.m[0].length>0){
            for (let i = 0; i < this.m.length; i++) {
                for (let j = 0; j < this.m[i].length; j++) {
                    s+=this.m[i][j]+' '
                }
                s+='\n'
            }
            return s
        }
    }
    print(){
        console.log(this.toString())
    }
}
