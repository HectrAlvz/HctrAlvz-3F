function Tree(data){
            this.data = data;
    this.left = null; this.right = null;
}

Tree.prototype = {
    constructor: Tree,
    insert: function(data){
        if(data < this.data){
            if(this.left === null) this.left = new Tree(data);
            else this.left.insert(data);
        }
        else{
            if(this.right === null) this.right = new Tree(data);
            else this.right.insert(data);
        }
    },
    traverse: function(){
        if(this.left !== null) this.left.traverse();
        console.log(this.data);
        if(this.right !== null) this.right.traverse();
    },
    contains: function(data){
        if(data === this.data) return true;
        else if(data < this.data){
            if(this.left === null) return false;
            else return this.left.contains(data);
        }
        else{
            if(this.right === null) return false;
            else return this.right.contains(data);
        }
    }
};