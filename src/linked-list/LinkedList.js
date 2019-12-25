import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertFirst(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  insertLast(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  insertAt(index, value) {
    if (index <= 0) {
      this.insertFirst(value);
    } else if (index >= this.count) {
      this.insertLast(value);
    } else {
      const node = new Node(value);
      let counter = 0;
      let tempNode = this.head;
      while (tempNode !== null) {
        if (counter === index - 1) {
          break;
        }
        tempNode = tempNode.next;
        counter++;
      }
      node.next = tempNode.next;
      tempNode.next = node;
      this.count++;
    }
  }

  getFirst() {
    return this.head ? this.head.value : null;
  }

  getLast() {
    return this.tail ? this.tail.value : null;
  }

  get(index) {
    if (index <= 0) {
      return this.getFirst();
    } else if (index >= this.count - 1) {
      return this.getLast();
    } else {
      let tempNode = this.head;
      let counter = 0;
      while (tempNode !== null) {
        if (counter === index) {
          break;
        }
        tempNode = tempNode.next;
        counter++;
      }
      return tempNode ? tempNode.value : null;
    }
  }

  set(index, value) {
    let previousValue = null;
    if (index < 0 || index > this.count - 1) {
      throw new Error(
        'Invalid index: Index is out of bound for the Linked List'
      );
    } else {
      let tempNode = this.head;
      let counter = 0;
      while (tempNode !== null) {
        if (counter === index) {
          break;
        }
        tempNode = tempNode.next;
        counter++;
      }
      previousValue = tempNode.value;
      tempNode.value = value;
    }
    return previousValue;
  }

  contains(value) {
    let tempNode = this.head;
    while (tempNode !== null) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  indexOf(value) {
    let counter = 0;
    let tempNode = this.head;
    while (tempNode !== null) {
      if (tempNode.value === value) {
        return counter;
      }
      tempNode = tempNode.next;
      counter++;
    }
    return -1;
  }

  removeFirst() {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      this.count = this.count > 0 ? this.count - 1 : 0;
      if (this.head === null) {
        this.tail = null;
      }
      return value;
    }
    return null;
  }

  removeLast() {
    let deletedValue = null;
    if (this.head === this.tail) {
      deletedValue = this.head ? this.head.value : null;
      this.head = null;
      this.tail = null;
    } else {
      let tempNode = this.head;
      while (tempNode.next !== this.tail) {
        tempNode = tempNode.next;
      }
      deletedValue = tempNode.next.value;
      tempNode.next = null;
      this.tail = tempNode;
    }
    this.count = this.count > 0 ? this.count - 1 : 0;
    return deletedValue;
  }

  removeAt(index) {
    let deletedValue = null;
    if (index <= 0) {
      return this.removeFirst();
    } else if (index >= this.count - 1) {
      return this.removeLast();
    } else {
      let counter = 0;
      let tempNode = this.head;
      while (tempNode !== null) {
        if (counter === index - 1) {
          break;
        }
        tempNode = tempNode.next;
        counter++;
      }
      deletedValue = tempNode.next.value;
      tempNode.next = tempNode.next.next;
      this.count = this.count > 0 ? this.count - 1 : 0;
      return deletedValue;
    }
  }

  remove(value) {
    if (this.head && this.head.value === value) {
      return this.removeFirst();
    } else if (this.tail && this.tail.value === value) {
      return this.removeLast();
    } else {
      if (this.head) {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          if (tempNode.next.value === value) {
            break;
          }
          tempNode = tempNode.next;
        }
        if (tempNode.next !== null) {
          tempNode.next = tempNode.next.next;
          this.count = this.count > 0 ? this.count - 1 : 0;
          return value;
        }
      }
      return null;
    }
  }

  size() {
    return this.count;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  toArray() {
    const list = [];
    let tempNode = this.head;
    while (tempNode !== null) {
      list.push(tempNode);
      tempNode = tempNode.next;
    }
    return list;
  }

  toString() {
    const list = this.toArray();
    return list.map(node => node.toString()).toString();
  }

  reverse() {
    if (this.head === null || this.head.next === null) {
      return this;
    }
    this.tail = this.head;
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }
}
