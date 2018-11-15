export class SinglyLinkedNode<T> {
  public data: T;
  public next: SinglyLinkedNode<T> | null;

  public constructor(data: T, next: SinglyLinkedNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class SinglyLinkedList<T> {
  private head: SinglyLinkedNode<T> | null;
  private tail: SinglyLinkedNode<T> | null;

  public constructor(
    head: SinglyLinkedNode<T> | null = null,
    tail: SinglyLinkedNode<T> | null = null
  ) {
    this.head = head;
    this.tail = tail;
  }

  public pushFirst(data: T) {
    const node = new SinglyLinkedNode(data, this.head);
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }

  public popFirst(): T | null {
    if (this.head === null) {
      return null;
    }
    const data = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return data;
  }

  public pushLast(data: T) {
    const node: SinglyLinkedNode<T> = new SinglyLinkedNode(data);
    if (this.head === null) {
      this.head = node;
    } else if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public reverse() {
    if (this.head === null) {
      return;
    }
    this.tail = this.head;
    let prev: SinglyLinkedNode<T> | null = null;
    let next: SinglyLinkedNode<T> | null = this.head.next;

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

  public get(index: number): T {
    let iterator = index;
    let curr = this.head;

    while (curr != null && iterator > 0) {
      curr = curr.next;
      iterator = iterator - 1;
    }

    if (iterator !== 0 || curr === null) {
      throw new Error('Index outside of list range');
    }

    return curr.data;
  }

  public middle(): T | null {
    let curr = this.head;
    let halfCurr = this.head;
    let count = 1;
    while (curr !== null && halfCurr !== null) {
      if (count % 2 === 0) {
        halfCurr = halfCurr.next;
      }
      curr = curr.next;
      count = count + 1;
    }

    if (halfCurr === null) {
      return null;
    }

    return halfCurr.data;
  }
}
