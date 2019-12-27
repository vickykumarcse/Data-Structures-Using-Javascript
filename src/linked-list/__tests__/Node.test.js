import Node from '../Node.js';

describe('Node', () => {
  it('should create a node with value', () => {
    const node = new Node(10);

    expect(node.value).toBe(10);
    expect(node.next).toBeNull();
  });

  it('should create a node with object as a value', () => {
    const nodeValue = { key: 'test', value: 10 };
    const node = new Node(nodeValue);

    expect(node.value.key).toBe('test');
    expect(node.value.value).toBe(10);

    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new Node(20);
    const node1 = new Node(10, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(10);
    expect(node1.next.value).toBe(20);
  });

  it('should convert node to string', () => {
    const node = new Node(10);

    expect(node.toString()).toBe('10');

    node.value = 'Test Value';
    expect(node.toString()).toBe('Test Value');
  });

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = { value: 10, key: 'test' };
    const node = new Node(nodeValue);
    const toStringCallback = value =>
      `value: ${value.value}, key: ${value.key}`;

    expect(node.toString(toStringCallback)).toBe('value: 10, key: test');
  });
});
