import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   *
   *
   * @param {*} value
   * @memberof LinkedList
   */
  insertFirst(value) {
    if (!value) {
      throw new Error('Missing Value: Please provide a value to insert');
    }
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

  /**
   *
   *
   * @param {*} value
   * @memberof LinkedList
   */
  insertLast(value) {
    if (!value) {
      throw new Error('Missing Value: Please provide a value to insert');
    }
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

  /**
   *
   *
   * @param {*} index
   * @param {*} value
   * @memberof LinkedList
   */
  insertAt(index, value) {
    if (index === undefined || index < 0 || index > this.count) {
      throw new Error('Invalid Index: Please provide a valid index');
    }
    if (!value) {
      throw new Error('Missing Value: Please provide a value to insert');
    }
    if (index === 0) {
      this.insertFirst(value);
    } else if (index === this.count) {
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

  /**
   *
   *
   * @returns value || null
   * @memberof LinkedList
   */
  getFirst() {
    return this.head ? this.head.value : null;
  }

  /**
   *
   *
   * @returns value || null
   * @memberof LinkedList
   */
  getLast() {
    return this.tail ? this.tail.value : null;
  }

  /**
   *
   *
   * @param {*} index
   * @returns value || null
   * @memberof LinkedList
   */
  get(index) {
    if (index === undefined || index < 0 || index > this.count - 1) {
      return null;
    }
    if (index === 0) {
      return this.getFirst();
    } else if (index === this.count - 1) {
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

  /**
   *
   *
   * @param {*} index
   * @param {*} value
   * @returns previous value || null
   * @memberof LinkedList
   */
  set(index, value) {
    if (index === undefined || index < 0 || index > this.count - 1) {
      throw new Error('Index Out of Bound: Please provide a valid index');
    }
    if (this.head !== null) {
      let previousValue = null;
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
      return previousValue;
    } else {
      return null;
    }
  }

  /**
   *
   *
   * @param {*} value
   * @returns true || false
   * @memberof LinkedList
   */
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

  /**
   *
   *
   * @param {*} value
   * @returns index || -1
   * @memberof LinkedList
   */
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

  /**
   *
   *
   * @returns Deleted Value || null
   * @memberof LinkedList
   */
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

  /**
   *
   *
   * @returns Deleted Value || null
   * @memberof LinkedList
   */
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

  /**
   *
   *
   * @param {*} index
   * @returns Deleted Value || null
   * @memberof LinkedList
   */
  removeAt(index) {
    if (index === undefined || index < 0 || index > this.count - 1) {
      return null;
    }
    if (index === 0) {
      return this.removeFirst();
    } else if (index === this.count - 1) {
      return this.removeLast();
    } else {
      let deletedValue = null;
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

  /**
   *
   *
   * @param {*} value
   * @returns Deleted Value || null
   * @memberof LinkedList
   */
  remove(value) {
    if (this.head) {
      if (this.head.value === value) {
        return this.removeFirst();
      }
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

  /**
   *
   *
   * @returns size
   * @memberof LinkedList
   */
  size() {
    return this.count;
  }

  /**
   *
   *
   * @returns Array representation of Linked List
   * @memberof LinkedList
   */
  toArray() {
    const list = [];
    let tempNode = this.head;
    while (tempNode !== null) {
      list.push(tempNode);
      tempNode = tempNode.next;
    }
    return list;
  }

  /**
   *
   *
   * @returns String representation of Linked List
   * @memberof LinkedList
   */
  toString() {
    const list = this.toArray();
    return list.map(node => node.toString()).toString();
  }

  /**
   *
   * Deletes the whole Linked List
   * @memberof LinkedList
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   *
   *
   * @returns Reversed Linked List
   * @memberof LinkedList
   */
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
