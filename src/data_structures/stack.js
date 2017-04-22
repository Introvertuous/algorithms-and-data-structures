'use strict';

module.exports = {
  create() {
    let instance = Object.create(this);
    instance._list = [];
    return instance;
  },

  push(value) {
    this._list.push(value);
  },

  pop() {
    if(this._list.length === 0)
      return;
    return this._list.pop();
  },

  peek() {
    return this._list[this._list.length - 1];
  }
};
