/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) newNode.next = this.head;

    if (this.tail === null) this.tail = newNode;

    this.head = newNode;

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    while (current.next !== null) {
      if (current.next === this.tail) break;
      current = current.next;
    }

    let oldTail = this.tail.val;

    this.tail = current;

    current.next = null;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldTail;
  }

  /** shift(): return & remove first item. */

  shift() {
    let newHead = this.head.next;

    let oldHead =  this.head.val;
    
    this.head = newHead;

    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    
    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) this.unshift(val);
    else if (idx === this.length) this.push(val);

    else {
      let newNode = new Node(val);

      let current = this.head;

      for (let i = 0; i < idx-1; i++) {
        current = current.next;
      }

      newNode.next = current.next;

      current.next = newNode;

      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) this.shift();
    else if (idx === this.length-1) this.pop();
    
    else {
      let current = this.head;

      for (let i = 0; i < idx-1; i++) {
        current = current.next;
      }

      current.next = current.next.next;

      this.length -= 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = this.tail.val;

    let current = this.head;

    while (current.next !== null) {
      sum = sum + current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
