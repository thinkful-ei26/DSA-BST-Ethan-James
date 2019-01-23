'use strict';

class BinarySearchTree {
  constructor(key=null, value=null, parent=null){
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value){
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if(key < this.key){
      if(this.left === null){
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } 
    else {
      if(this.right === null){
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key){
    if (this.key === key){
      return this.value;
    }
    else if(key < this.key && this.left){
      return this.left.find(key);
    }
    else if(key > this.key && this.right){
      return this.right.find(key);
    }
    else {
      console.error('Key not found');
    }
  }
//   removeFromScratch(key){
//     //step 1 find the node to delete first
//     if(this.key===key){
//         //handle the deleteing part here
//         //step 2 key is found:
//            if(!this.left && !this.right){
//                 //no children
//                 //compare this.parent.key > || < to this.key ,,set let or right to null
//                 if(this.parent.key > this.key){
//                     this.parent.left = null;
//                 }
//                 else if(this.parent.key < this.key){
//                     this.parent.right = null;
//                 }
//             }
//             else if(!this.left || !this.right){
//                 //1child      in example,, remove(6) this.right=== 8 this.left ===null
//                 if(!this.left){
//                     this.parent.right = this.right;
//                 } else {
//                     //this.parent.left =;
//                 }
//             }
//             else {
//                 //2children

//             }
        
//     }
//     else if(key < this.key&& this.left){
//         this.left.remove(key);
//     }
//     else if(key > this.key&& this.right){
//         this.right.remove(key);
//     }
//     else {
//         console.log('key not found');
//         return;
//     }
    
//   }
remove(key){
    if(this.key==key){
        if(this.left && this.right){
            const successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        else if(this.left){
            this._replaceWith(this.left);
        }
        else if (this.right){
            this._replaceWith(this.right);
        }
        else {
            this._replaceWith(null);
        }
    }
    else if(key< this.key && this.left){
        this.left.remove(key);
    }
    else if (key > this.key && this.right){
        this.right.remove(key);
    }
    else {
        console.log("No Key Found");
    }
}
_findMin() {
    if (!this.left) {
        return this;
    }
    return this.left._findMin();
}
_replaceWith(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }
}

}
function main(){
    const myTree = new BinarySearchTree();
    myTree.insert(3, 3);
    myTree.insert(1,1);
    myTree.insert(4,4);
    myTree.insert(6,6);
    myTree.insert(9,9);
    myTree.insert(2,2);
    myTree.insert(5,5);
    myTree.insert(7,7);
    console.log("Done");
}
main();