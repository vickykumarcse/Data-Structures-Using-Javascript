import CircularLinkedList from '../CircularLinkedList.js';

describe('CircularLinkedList', () => {
  it('should create empty linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.head).toBeNull();
    expect(circularLinkedList.tail).toBeNull();
    expect(circularLinkedList.toString()).toBe('');
    expect(circularLinkedList.toArray()).toEqual([]);
    expect(circularLinkedList.size()).toBe(0);
  });

  it('should add node to linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addFirst(2);
    expect(circularLinkedList.head.toString()).toBe('2');
    expect(circularLinkedList.tail.toString()).toBe('2');
    circularLinkedList.addLast(1);
    circularLinkedList.addAt(0, 3);
    expect(circularLinkedList.toString()).toBe('3,2,1');
  });

  it('should get first, last node of linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addFirst(2);
    circularLinkedList.addLast(1);
    circularLinkedList.addAt(0, 3);
    expect(circularLinkedList.getFirst()).toBe(3);
    expect(circularLinkedList.getLast()).toBe(1);
    expect(circularLinkedList.get(1)).toBe(2);
  });

  it('should get node by index of linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addFirst(2);
    circularLinkedList.addLast(1);
    circularLinkedList.addAt(0, 3);
    expect(circularLinkedList.get(1)).toBe(2);
  });

  it('should check contains and index of a value', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addFirst(2);
    circularLinkedList.addLast(1);
    circularLinkedList.addAt(0, 3);
    expect(circularLinkedList.contains(1)).toBe(true);
    expect(circularLinkedList.contains(5)).toBe(false);
    expect(circularLinkedList.indexOf(1)).toBe(2);
    expect(circularLinkedList.indexOf(5)).toBe(-1);
  });

  it('should update the linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addFirst(2);
    circularLinkedList.addLast(1);
    circularLinkedList.addAt(0, 3);
    expect(circularLinkedList.set(0, 5)).toBe(3);
  });

  it('should remove node from linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    expect(circularLinkedList.remove(5)).toBeNull();
    circularLinkedList.addLast(1);
    circularLinkedList.addLast(1);
    circularLinkedList.addLast(2);
    circularLinkedList.addLast(3);
    circularLinkedList.addLast(3);
    circularLinkedList.addLast(3);
    circularLinkedList.addLast(4);
    circularLinkedList.addLast(5);
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('5');
    const deletedValue = circularLinkedList.remove(3);
    expect(deletedValue).toBe(3);
    expect(circularLinkedList.toString()).toBe('1,1,2,3,3,4,5');
    circularLinkedList.remove(3);
    expect(circularLinkedList.toString()).toBe('1,1,2,3,4,5');
    expect(circularLinkedList.removeFirst()).toBe(1);
    expect(circularLinkedList.toString()).toBe('1,2,3,4,5');
    expect(circularLinkedList.head.toString()).toBe('1');
    expect(circularLinkedList.tail.toString()).toBe('5');
    expect(circularLinkedList.removeAt(0)).toBe(1);
    expect(circularLinkedList.removeAt(3)).toBe(5);
    expect(circularLinkedList.toString()).toBe('2,3,4');
    expect(circularLinkedList.removeAt(5)).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const circularLinkedList = new CircularLinkedList();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    circularLinkedList.addLast(nodeValue1);
    circularLinkedList.addFirst(nodeValue2);
    const nodeStringifier = value => `${value.key}:${value.value}`;
    expect(circularLinkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });

  it('should reverse linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    // Add test values to linked list.
    circularLinkedList.addLast(1);
    circularLinkedList.addLast(2);
    circularLinkedList.addLast(3);
    expect(circularLinkedList.toString()).toBe('1,2,3');
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(3);

    // Reverse linked list.
    circularLinkedList.reverse();
    expect(circularLinkedList.toString()).toBe('3,2,1');
    expect(circularLinkedList.head.value).toBe(3);
    expect(circularLinkedList.tail.value).toBe(1);

    // Reverse linked list back to initial state.
    circularLinkedList.reverse();
    expect(circularLinkedList.toString()).toBe('1,2,3');
    expect(circularLinkedList.head.value).toBe(1);
    expect(circularLinkedList.tail.value).toBe(3);
  });

  it('should clear the linked list', () => {
    const circularLinkedList = new CircularLinkedList();
    circularLinkedList.addLast(1);
    circularLinkedList.addLast(2);
    circularLinkedList.addLast(3);
    expect(circularLinkedList.toString()).toBe('1,2,3');
    circularLinkedList.clear();
    expect(circularLinkedList.head).toBeNull();
    expect(circularLinkedList.tail).toBeNull();
  });
});
