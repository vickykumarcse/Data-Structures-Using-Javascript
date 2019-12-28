import Node from '../single-node/Node.js';

export default class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   * @param {*} value
   * @memberof CircularLinkedList
   */
  addFirst(value) {
    if (!value) {
      throw new Error('Missing Value: Please provide a value to add');
    }
    const node = new Node(value);
    if (this.head === null) {
      node.next = node;
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.tail.next = node;
    }
    this.count++;
  }

  /**
   * @param {*} value
   * @memberof CircularLinkedList
   */
  addLast(value) {
    if (!value) {
      throw new Error('Missing Value: Please provide a value to add');
    }
    const node = new Node(value);
    if (this.head === null) {
      node.next = node;
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  /**
   * @param {*} index
   * @param {*} value
   * @memberof CircularLinkedList
   */
  addAt(index, value) {
    if (index === undefined || index < 0 || index > this.count) {
      throw new Error('Invalid Index: Please provide a valid index');
    }
    if (!value) {
      throw new Error('Missing Value: Please provide a value to add');
    }
    if (index === 0) {
      this.addFirst(value);
    } else if (index === this.count) {
      this.addLast(value);
    } else {
      const node = new Node(value);
      let tempNode = this.head;
      for (let counter = 1; counter < index; counter++) {
        tempNode = tempNode.next;
      }
      node.next = tempNode.next;
      tempNode.next = node;
      this.count++;
    }
  }

  /**
   * @returns value || null
   * @memberof CircularLinkedList
   */
  getFirst() {
    return this.head ? this.head.value : null;
  }

  /**
   * @returns value || null
   * @memberof CircularLinkedList
   */
  getLast() {
    return this.tail ? this.tail.value : null;
  }

  /**
   * @param {*} index
   * @returns value || null
   * @memberof CircularLinkedList
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
      for (let counter = 1; counter <= index; counter++) {
        tempNode = tempNode.next;
      }
      return tempNode ? tempNode.value : null;
    }
  }

  /**
   * @param {*} index
   * @param {*} value
   * @returns previous value || null
   * @memberof CircularLinkedList
   */
  set(index, value) {
    if (index === undefined || index < 0 || index > this.count - 1) {
      throw new Error('Index Out of Bound: Please provide a valid index');
    }
    if (this.head !== null) {
      let previousValue = null;
      let tempNode = this.head;
      for (let counter = 0; counter < index; counter++) {
        tempNode = tempNode.next;
      }
      previousValue = tempNode.value;
      tempNode.value = value;
      return previousValue;
    } else {
      return null;
    }
  }

  /**
   * @param {*} value
   * @returns true || false
   * @memberof CircularLinkedList
   */
  contains(value) {
    if (!this.head) {
      return false;
    }
    let tempNode = this.head;
    do {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.next;
    } while (tempNode !== this.head);
    return false;
  }

  /**
   * @param {*} value
   * @returns index || -1
   * @memberof CircularLinkedList
   */
  indexOf(value) {
    if (!this.head) {
      return -1;
    }
    let counter = 0;
    let tempNode = this.head;
    do {
      if (tempNode.value === value) {
        return counter;
      }
      tempNode = tempNode.next;
      counter++;
    } while (tempNode !== this.head);
    return -1;
  }

  /**
   * @returns Deleted Value || null
   * @memberof CircularLinkedList
   */
  removeFirst() {
    if (this.head) {
      const deletedValue = this.head.value;
      if (this.head === this.tail) {
        this.head.next = null;
        this.clear();
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
        this.count = this.count > 0 ? this.count - 1 : 0;
      }
      return deletedValue;
    }
    return null;
  }

  /**
   * @returns Deleted Value || null
   * @memberof CircularLinkedList
   */
  removeLast() {
    if (this.head) {
      const deletedValue = this.tail.value;
      if (this.head === this.tail) {
        this.head.next = null;
        this.clear();
      } else {
        let tempNode = this.head;
        while (tempNode.next !== this.tail) {
          tempNode = tempNode.next;
        }
        tempNode.next = this.head;
        this.tail = tempNode;
        this.count = this.count > 0 ? this.count - 1 : 0;
      }
      return deletedValue;
    } else {
      return null;
    }
  }

  /**
   * @param {*} index
   * @returns Deleted Value || null
   * @memberof CircularLinkedList
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
      if (this.head) {
        let deletedValue = null;
        let tempNode = this.head;
        for (let counter = 1; counter < index; counter++) {
          tempNode = tempNode.next;
        }
        deletedValue = tempNode.next.value;
        tempNode.next = tempNode.next.next;
        this.count = this.count > 0 ? this.count - 1 : 0;
        return deletedValue;
      } else {
        return null;
      }
    }
  }

  /**
   * @param {*} value
   * @returns Deleted Value || null
   * @memberof CircularLinkedList
   */
  remove(value) {
    if (this.head) {
      if (this.head.value === value) {
        return this.removeFirst();
      }
      let tempNode = this.head;
      let deletedValue = null;
      do {
        if (value === tempNode.next.value) {
          deletedValue = tempNode.next.value;
          tempNode.next = tempNode.next.next;
          break;
        }
        tempNode = tempNode.next;
      } while (tempNode !== this.head);
      if (deletedValue) {
        this.count = this.count > 0 ? this.count - 1 : 0;
      }
      return deletedValue;
    } else {
      return null;
    }
  }

  /**
   * @returns size
   * @memberof CircularLinkedList
   */
  size() {
    return this.count;
  }

  /**
   * @returns Array representation of Circular Linked List
   * @memberof CircularLinkedList
   */
  toArray() {
    const list = [];
    if (!this.head) {
      return list;
    }
    let tempNode = this.head;
    do {
      list.push(tempNode);
      tempNode = tempNode.next;
    } while (tempNode !== this.head);
    return list;
  }

  /**
   * @param {*} callback
   * @returns String representation of Linked List
   * @memberof CircularLinkedList
   */
  toString(callback) {
    const list = this.toArray();
    return list.map(node => node.toString(callback)).toString();
  }

  /**
   * Deletes the whole CircularLinkedList
   * @memberof CircularLinkedList
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   * @returns Reversed Linked List
   * @memberof CircularLinkedList
   */
  reverse() {
    if (this.head === null || this.head === this.tail) {
      return this;
    }
    let prevNode = this.tail;
    let currentNode = this.head;
    this.tail = this.head;
    do {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    } while (currentNode !== this.head);
    this.head = prevNode;
    return this;
  }
}
