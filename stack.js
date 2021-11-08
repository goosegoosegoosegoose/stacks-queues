/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return undefined;
    }
    if (this.first) {
      newNode.next = this.first;
      this.first = newNode;
      this.size++;
      return undefined;
    }
    throw Error("push() did not work");
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let topNode = this.first;

    if (!this.first) throw Error("Empty stack");
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return topNode.val;
    }
    if (this.first) {
      this.last = topNode.next;
      this.size--;
      return topNode.val;
    }
    throw Error("pop() did not work")
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) throw Error("Empty stack");
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first) return true;
    return false;
  }
}

module.exports = Stack;
