/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return undefined;
    }
    if (this.first) {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return undefined;
    }
    throw Error("enqueue() did not work")
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let firstNode = this.first;

    if (!this.first) throw Error("Empty queue");
    if (this.size === 1){
      this.first = null;
      this.last = null;
      this.size--;
      return firstNode.val;
    }
    if (this.first) {
      this.first = this.first.next;
      this.size--;
      return firstNode.val;
    }
    throw Error("dequeue() did not work")
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) throw Error("Empty queue");
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) return true;
    return false;
  }
}

module.exports = Queue;
