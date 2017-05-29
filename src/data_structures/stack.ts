'use strict';

export default class Stack<T> {
  private lis: T[] = [];

  public push (val: T) {
    this.lis.push(val);
  }

  public pop (): T {
    return this.lis.pop();
  }

  public peek (): T {
    return this.lis[this.lis.length - 1];
  }
}
