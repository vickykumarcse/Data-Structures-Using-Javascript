import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.link !== null) {
        temp = temp.link;
      }
      temp.link = node;
    }
    this.count++;
  }

  get(index) {
    let temp = this.head;
    let innerIndex = 0;
    while (temp !== null) {
      if (innerIndex === index) {
        return temp.data;
      }
      temp = temp.link;
      innerIndex++;
    }
    return null;
  }

  remove(data) {
    let prev = null;
    let next = this.head;
    while (next !== null) {
      if (next.data === data) {
        if (prev == null) {
          this.head = next.link;
        } else {
          prev.link = next.link;
        }
        next.link = null;
        this.count--;
        break;
      }
      prev = next;
      next = next.link;
    }
  }

  size() {
    return this.count;
  }
}
