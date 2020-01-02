export default class DoublyNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  /**
   * @param {*} callback optional
   * @returns String representation of the node
   * @memberof DoublyNode
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
