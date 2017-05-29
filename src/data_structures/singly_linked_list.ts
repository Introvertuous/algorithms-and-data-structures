'use strict';

export class SinglyLinkedNode<T> {
  public data: T;
  public next: SinglyLinkedNode<T>;

  public constructor (data: T, next: SinglyLinkedNode<T> = null) {
    this.data = data;
    this.next = next;
  }
}

export default class SinglyLinkedList<T> {
  private head: SinglyLinkedNode<T>;
  private tail: SinglyLinkedNode<T>;

  public constructor (head: SinglyLinkedNode<T> = null, tail: SinglyLinkedNode<T> = null) {
    this.head = head;
    this.tail = tail;
  }

  public pushFirst (data: T) {
    const node: SinglyLinkedNode<T> = new SinglyLinkedNode(data, this.head);
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }

  public popFirst (): T {
    if (this.head === null) {
      return null;
    }
    const data: T = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return data;
  }

  public pushLast (data: T) {
    const node: SinglyLinkedNode<T> = new SinglyLinkedNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public reverse () {
    if (this.head === null) {
      return;
    }
    this.tail = this.head;
    let prev: SinglyLinkedNode<T> = null;
    let next: SinglyLinkedNode<T> = this.head.next;

    while (true) {
      this.head.next = prev;
      prev = this.head;
      if (next === null) {
        break;
      }
      this.head = next;
      next = next.next;
    }
  }

  public get (i: number): T {
    let curr: SinglyLinkedNode<T> = this.head;
    while (curr != null && i > 0) {
      curr = curr.next;
      // tslint:disable-next-line:no-param-reassign
      i = i - 1;
    }
    if (i !== 0) {
      throw new Error('Index outside of list range');
    }
    return curr.data;
  }

  public middle (): T {
    let curr: SinglyLinkedNode<T> = this.head;
    let halfCurr: SinglyLinkedNode<T> = this.head;
    let count: number = 1;
    while (curr !== null) {
      if ((count % 2) === 0) {
        halfCurr = halfCurr.next;
      }
      curr = curr.next;
      count = count + 1;
    }
    return halfCurr.data;
  }
}
