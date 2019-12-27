export default class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @param {*} callback optional
   * @returns String representation of the node
   * @memberof Node
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
