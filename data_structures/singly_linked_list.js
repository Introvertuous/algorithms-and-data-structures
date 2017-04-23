'use strict';

let Node = {
  create(data=null, next=null) {
    let instance = Object.create(this);
    instance.data = data;
    instance.next = next;
    return instance;
  }
};

module.exports = {
  create() {
    let instance = Object.create(this);
    instance._head = null;
    instance._tail = null;
    return instance;
  },

  pushFirst(data) {
    let n = Node.create(data, this._head);
    this._head = n;
    if(this._tail === null)
      this._tail = n;
  },

  popFirst() {
    if(this._head === null)
      return null;
    let d = this._head.data;
    if(this._head === this._tail) {
      this._head = null;
      this._tail = null;
    }
    else
      this._head = this._head.next;
    return d;
  },

  pushLast(data) {
    let n = Node.create(data, null);
    if(this._head === null)
      this._head = n;
    else
      this._tail.next = n;
    this._tail = n;
  },

  reverse() {
    if(this._head === null)
      return;
    this._tail = this._head;
    let prev = null;
    let next = this._head.next;

    while(true) {
      this._head.next = prev;
      prev = this._head;
      if(next === null)
        break;
      this._head = next;
      next = next.next;
    }
  },

  get(i) {
    let curr = this._head;
    while(curr != null && i > 0) {
      curr = curr.next;
      i--;
    }
    if(i !== 0)
      throw new Error('Index outside of list range');
    return curr;
  },

  middle() {
    let curr = this._head;
    let halfCurr = this._head;
    let count = 1;
    while(curr != null) {
      if(count % 2 == 0)
        halfCurr = halfCurr.next;
      curr = curr.next;
      count++;
    }
    return halfCurr.data;
  },

  [Symbol.iterator]() {
    let curr = undefined;
    return {
      next: () => {
        curr = (curr == undefined) ? this._head : curr.next;
        return {
          value: curr,
          done: (curr == undefined)
        };
      }
    };
  }
};
