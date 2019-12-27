import LinkedList from '../LinkedList.js';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.insertLast(1);
    linkedList.insertLast(2);

    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail.next).toBeNull();
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.insertFirst(20);
    expect(linkedList.head.toString()).toBe('20');
    expect(linkedList.tail.toString()).toBe('20');

    linkedList.insertLast(30);
    linkedList.insertFirst(10);

    expect(linkedList.toString()).toBe('10,20,30');
  });
});
