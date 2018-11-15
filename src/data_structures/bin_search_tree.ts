export class BinSearchTreeNode<T> {
  public data: T;
  public left: BinSearchTreeNode<T> | null;
  public right: BinSearchTreeNode<T> | null;

  public constructor(
    data: T,
    left: BinSearchTreeNode<T> | null = null,
    right: BinSearchTreeNode<T> | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default class BinSearchTree<T> {
  private root: BinSearchTreeNode<T> | null;

  public constructor(root: BinSearchTreeNode<T> | null = null) {
    this.root = root;
  }

  public contains(data: T): Boolean {
    let curr = this.root;
    while (curr !== null) {
      if (data < curr.data) {
        curr = curr.left;
      } else if (data > curr.data) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  public toArray(): T[] {
    const result: T[] = [];

    this.traverse((node: BinSearchTreeNode<T>) => {
      result.push(node.data);
    });

    return result;
  }

  public size(): number {
    let length = 0;

    this.traverse(() => {
      length = length + 1;
    });

    return length;
  }

  public add(data: T) {
    const node = new BinSearchTreeNode(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let curr = this.root;
      while (true) {
        if (data < curr.data) {
          if (curr.left === null) {
            curr.left = node;
            break;
          } else {
            curr = curr.left;
          }
        } else if (data > curr.data) {
          if (curr.right === null) {
            curr.right = node;
            break;
          } else {
            curr = curr.right;
          }
        } else {
          break;
        }
      }
    }
  }

  public getHeight(curr: BinSearchTreeNode<T> | null = this.root): number {
    if (curr === null) {
      return -1;
    }

    const right = this.getHeight(curr.right);
    const left = this.getHeight(curr.left);

    return Math.max(left, right) + 1;
  }

  private traverse(
    callback: Function,
    node: BinSearchTreeNode<T> | null = this.root
  ) {
    if (node !== null) {
      if (node.left !== null) {
        this.traverse(callback, node.left);
      }

      callback(node);

      if (node.right !== null) {
        this.traverse(callback, node.right);
      }
    }
  }
}
