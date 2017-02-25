'use strict';

module.exports = {
  create() {
    let instance = Object.create(this);
    instance._list = [];
    return instance;
  },

  enqueue(value) {
    this._list.push(value);
  },

  dequeue() {
    if(this._list.length === 0)
      return;
    return this._list.shift();
  },

  peek() {
    return this._list[0];
  }
};
