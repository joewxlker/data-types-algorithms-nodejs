import { DoubleNode, Value, Node } from "../types/linkedlist";

export default class LinkedList {

  public head: Node | DoubleNode | null = null;
  public tail: Node | DoubleNode | null = null;
  public length: number = 0;
  constructor() { }

  public createNode(value: Value, double?: boolean): Node | DoubleNode {
    return double ? { value: value, next: null, } : { value: value, next: null, prev: null }
  }

  public insertTail(value: Value, double?: boolean) {
    this.length++;
    let newNode = this.createNode(value, double);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      //@ts-ignore
      if (double) return newNode.prev = this.tail
      return newNode
    }
    this.head = this.tail = newNode;
    return newNode;
  }

  public insertHead(value: number | string | boolean, double?: boolean) {
    const newNode = this.createNode(value, double);
    this.length++
    if (!this.head) return this.head = newNode;
    //@ts-ignore
    if (double) this.head.prev = newNode;
    newNode.next = this.head;
    return this.head = newNode;
  }

  public insertIndex(index: number, value: Value) {
    if (index > this.length) return;
    let currentNode: Node | null = this.head;
    let prevNode: Node | null = null;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
    }
    if (!prevNode) return console.log('error');
    let newNode = this.createNode(value);
    newNode.next = currentNode;
    prevNode.next = newNode;
    this.length++
  }

  public deleteIndex(index: number) {
    if (index > this.length - 1) return;
    if (index === this.length - 1) return this.deleteTailNode();
    if (index === 0) return this.deleteHeadNode();
    let currentNode = this.head;
    let prevNode = null;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
    }
    currentNode!.value = currentNode!.next!.value;
    currentNode!.next = currentNode!.next!.next;
    this.length--
  }

  public deleteTailNode() {
    if (!this.tail || !this.head) return undefined;
    this.length--;
    const tailNode = this.tail;
    let currentNode: Node | null = this.head;
    while (currentNode && currentNode.next !== tailNode) {
      currentNode = currentNode.next;
    }
    if (!currentNode) return console.log('error');
    const nodeBeforeTail = currentNode;
    this.tail = nodeBeforeTail;
    this.tail.next = null;

    return tailNode
  };

  public deleteHeadNode() {
    if (!this.head) return undefined;
    this.length--
    this.head = this.head.next
  }

  public print() {
    console.log(this.head);
    console.log(this.length);
  }

}

export class DoublyLinkedList extends LinkedList {

  constructor() { super() }

  public insertDoubleTail(value: Value) {
    this.insertTail(value, true);
  }

  public insertDoubleHead(value: Value) {
    this.insertHead(value, true);
  }

}