'use strict'

export class BinSearchTreeNode<T> {
  public data: T
  public left: BinSearchTreeNode<T>
  public right: BinSearchTreeNode<T>

  public constructor (data: T, left: BinSearchTreeNode<T> = null, right: BinSearchTreeNode<T> = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

export default class BinSearchTree<T> {
  private root: BinSearchTreeNode<T>

  public constructor (root: BinSearchTreeNode<T> = null) {
    this.root = root
  }

  public contains (data: T): Boolean {
    let curr: BinSearchTreeNode<T> = this.root
    while (curr !== null) {
      if (data < curr.data) {
        curr = curr.left
      } else if (data > curr.data) {
        curr = curr.right
      } else {
        return true
      }
    }
    return false
  }

  public toArray (): Array<number> {
    const result: Array<number> = []

    this.traverse((node) => {
      result.push(node.data)
    })

    return result
  }

  public size (): number {
    let length: number = 0

    this.traverse(() => {
      length++
    })

    return length
  }

  public add (data: T) {
    const node: BinSearchTreeNode<T> = new BinSearchTreeNode(data)
    if (this.root === null) {
      this.root = node
    } else {
      let curr = this.root
      while (true) {
        if (data < curr.data) {
          if (curr.left === null) {
            curr.left = node
            break
          } else {
            curr = curr.left
          }
        } else if (data > curr.data) {
          if (curr.right === null) {
            curr.right = node
            break
          } else {
            curr = curr.right
          }
        } else {
          break
        }
      }
    }
  }

  public height (): number {
    return (function getHeight (curr: BinSearchTreeNode<T>): number {
      if (curr === null) {
        return -1
      }

      const right: number = getHeight(curr.right)
      const left: number = getHeight(curr.left)

      return Math.max(left, right) + 1
    })(this.root)
  }

  private traverse (callback: Function) {
    (function inOrder (node: BinSearchTreeNode<T>) {
      if (node !== null) {
        if (node.left !== null) {
          inOrder(node.left)
        }

        callback.call(this, node)

        if (node.right !== null) {
          inOrder(node.right)
        }
      }
    })(this.root)
  }
}
