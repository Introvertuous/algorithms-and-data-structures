import { isUndefined } from 'util';

export default class Queue<T> {
  private lis: T[] = [];

  public enqueue(val: T) {
    this.lis.push(val);
  }

  public dequeue(): T | null {
    if (this.lis.length === 0) {
      return null;
    }
    const el = this.lis.shift();
    if (isUndefined(el)) {
      return null;
    }
    return el;
  }

  public peek(): T {
    return this.lis[0];
  }
}
