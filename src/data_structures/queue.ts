export default class Queue<T> {
  private lis: T[] = [];

  public enqueue(val: T) {
    this.lis.push(val);
  }

  public dequeue(): T {
    if (this.lis.length === 0) {
      return null;
    }
    return this.lis.shift();
  }

  public peek(): T {
    return this.lis[0];
  }
}
