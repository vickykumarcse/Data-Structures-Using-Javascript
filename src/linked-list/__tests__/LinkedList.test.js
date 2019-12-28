import LinkedList from '../LinkedList.js';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.toString()).toBe('');
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.size()).toBe(0);
  });

  it('should add node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');
    linkedList.addLast(1);
    linkedList.addAt(0, 3);
    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should get first, last node of linked list', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    linkedList.addLast(1);
    linkedList.addAt(0, 3);
    expect(linkedList.getFirst()).toBe(3);
    expect(linkedList.getLast()).toBe(1);
    expect(linkedList.get(1)).toBe(2);
  });

  it('should get node by index of linked list', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    linkedList.addLast(1);
    linkedList.addAt(0, 3);
    expect(linkedList.get(1)).toBe(2);
  });

  it('should check contains and index of a value', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    linkedList.addLast(1);
    linkedList.addAt(0, 3);
    expect(linkedList.contains(1)).toBe(true);
    expect(linkedList.contains(5)).toBe(false);
    expect(linkedList.indexOf(1)).toBe(2);
    expect(linkedList.indexOf(5)).toBe(-1);
  });

  it('should update the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    linkedList.addLast(1);
    linkedList.addAt(0, 3);
    expect(linkedList.set(0, 5)).toBe(3);
  });

  it('should remove node from linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.remove(5)).toBeNull();
    linkedList.addLast(1);
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(3);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');
    const deletedValue = linkedList.remove(3);
    expect(deletedValue).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,3,3,4,5');
    linkedList.remove(3);
    expect(linkedList.toString()).toBe('1,1,2,3,4,5');
    expect(linkedList.removeFirst()).toBe(1);
    expect(linkedList.toString()).toBe('1,2,3,4,5');
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('5');
    expect(linkedList.removeAt(0)).toBe(1);
    expect(linkedList.removeAt(3)).toBe(5);
    expect(linkedList.toString()).toBe('2,3,4');
    expect(linkedList.removeAt(5)).toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new LinkedList();
    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    linkedList.addLast(nodeValue1);
    linkedList.addFirst(nodeValue2);
    const nodeStringifier = value => `${value.key}:${value.value}`;
    expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });

  it('should reverse linked list', () => {
    const linkedList = new LinkedList();
    // Add test values to linked list.
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);

    // Reverse linked list.
    linkedList.reverse();
    expect(linkedList.toString()).toBe('3,2,1');
    expect(linkedList.head.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);

    // Reverse linked list back to initial state.
    linkedList.reverse();
    expect(linkedList.toString()).toBe('1,2,3');
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);
  });

  it('should clear the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    expect(linkedList.toString()).toBe('1,2,3');
    linkedList.clear();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });
});
