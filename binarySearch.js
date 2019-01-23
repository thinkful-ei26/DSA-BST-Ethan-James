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
}