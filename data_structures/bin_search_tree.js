'use strict';

let Node = {
  create(data=null, left=null, right=null) {
    let instance = Object.create(this);
    instance.data = data;
    instance.left = left;
    instance.right = right;
    return instance;
  }
};

module.exports = {
  create() {
    let instance = Object.create(this);
    instance._root = null;
    return instance;
  },
  
  contains(data) {
    let curr = this._root;
    while(curr !== null) {
      if(data < curr.data)
        curr = curr.left;
      else if(data > curr.data)
        curr = curr.right;
      else
        return true;
    }
    return false;
  },

  _traverse(callback) {
    (function inOrder(node) {
      if(node !== null) {
        if(node.left !== null)
          inOrder(node.left);
        
        callback.call(this, node);

        if(node.right !== null) 
          inOrder(node.right);
      }
    })(this._root);
  },

  toArray() {
    let result = [];

    this._traverse((node) => {
      result.push(node.data);
    });

    return result;
  },

  size() {
    let length = 0;

    this._traverse(() => {
      length++;
    });

    return length;
  },

  add(data) {
    const node = Node.create(data, null, null);
    if(this._root === null)
      this._root = node;
    else {  
      let curr = this._root;

      while(true) {
        if(data < curr.data) {
          if(curr.left === null) {
            curr.left = node;
            break;
          } 
          else curr = curr.left;
        }
        else if(data > curr.data) {
          if(curr.right === null) {
            curr.right = node;
            break;
          }
          else curr = curr.right;
        }
        else break;
      }
    }
  },

  height() {
    return (function getHeight(root) {
      if(root === null)
        return -1;

      let left = getHeight(root.left);
      let right = getHeight(root.right);

      return Math.max(left, right) + 1;
    })(this._root);
  }
};
