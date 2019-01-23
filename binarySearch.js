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
      console.log('No Key Found');
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
  const fakeTree = new BinarySearchTree();
  fakeTree.insert(2, 2);
  fakeTree.insert(99, 99);
  fakeTree.insert(1, 1);
  fakeTree.key = -42;
  // console.log(fakeTree);
  // myTree.insert(3, 3);
  // myTree.insert(1,1);
  // myTree.insert(4,4);
  // // myTree.insert(6,6);
  // myTree.insert(9,9);
  // myTree.insert(2,2);
  // myTree.insert(5,5);
  // myTree.insert(7,7);

  myTree.insert(9,9);
  myTree.insert(7,7);
  myTree.insert(5,5);
  myTree.insert(4,4);
  myTree.insert(3, 3);





  // findHeight(myTree);
  //let myArrayCounter = findHeight(myTree);
  //console.log(myArrayCounter);
  // console.log('Tree log is: ', isItBst(myTree));

  // console.log('Tree log is: ', isItBst(fakeTree));

  console.log(thirdLargestNode(myTree));
 
  console.log('Done');

}
main();

function findHeight(BST, counter=1, myTally = []){
  // console.log(BST);

  // let counter = 0;
  // console.log(counter);
  if (!BST.left && !BST.right) {
    // console.log(counter);
    myTally.push(counter);
    return;
  }
  else if (!BST.left) {
    // console.log(counter);
    return findHeight(BST.right, counter + 1, myTally);

  }
  else if (!BST.right) {
    // console.log(counter);
    return findHeight(BST.left, counter + 1, myTally);
  }
  else if (BST.right && BST.left) {
    findHeight(BST.left, counter + 1, myTally);
    findHeight(BST.right, counter + 1, myTally);
    // return myTally;
    return Math.max(...myTally);

  }
  // return this.left.findHeight(BST, counter + 1);
  // BST._findMin();

}

// let myArrayCounter = [...findHeight(myTree)];

function isItBst(tree, alwaysGreater = []){
/*input: a tree
* output: boolean true if tree is BST else false
  temp = is the next value always > temp 
    yes- continue
    no! return false stop here,
*/
  //  if(){//has no children left child
  //     if (alwaysGreater < this.key){
  //         return false;
  //     }
  //     alwaysGreater=this.key;
  //     return alwaysGreater;
  //console.log("Start of func: ", alwaysGreater);
  // **run left stuff then compare self, then run right stuff, then return true**
  if(tree.left){
    console.log(alwaysGreater);
    isItBst(tree.left, alwaysGreater);//here nested calls are running, 
    //console.log("here:", alwaysGreater);//expect 0 or 1?// 0 or 4?
    //here ^^ is done, 1 has been returned, alG === 0;
  }
  // here left side is done
  // compare the new alway value to itself
  if (tree.key < alwaysGreater[alwaysGreater.length - 1]){
    return false;
  }
  alwaysGreater.push(tree.key);
  // then run right side stuff
  if(tree.right){
    console.log(alwaysGreater);
    isItBst(tree.right, alwaysGreater);
  }
  // here left side and right side are done 
  return alwaysGreater;// 1 the variable or the primitive evaluation
  // compare to number and return key as new greater value
}

function thirdLargestNode(tree){
  //working from function to find largest node
  if (!tree.right) {
    // console.log(tree.value);
    if(tree.left){
      // console.log(tree.left.value);
      if(tree.left.right){
        return tree.left.value;
      } 
      else if(tree.left.left){
        return tree.left.left.value;
      } else {
        return tree.parent.value;
      }
    }
    else if (tree.parent.left){
      return tree.parent.left.value;
    } else return tree.parent.parent.value;
  }
  return thirdLargestNode(tree.right);
}
