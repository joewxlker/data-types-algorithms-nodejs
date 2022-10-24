import { threadId } from "worker_threads";
import { InheritLogarithms } from "./algorithms/binarySearch";
import BucketSort from "./algorithms/bucketSort";
import LinkedList, { DoublyLinkedList } from "./dataTypesAsClass/linkedList";
import Queue from "./dataTypesAsClass/queue";
import Stack from "./dataTypesAsClass/stack";
import useLinkedList from "./dataTypesAsFunctions/linkedList";

const binarySearch: InheritLogarithms = new InheritLogarithms([5, 3, 9, 1, 2, 4, 7, 8], null);
binarySearch.search = 3;
console.log(binarySearch.returnLookupValue());

const stack = new Stack();

stack.push('hello');
stack.push('world');

const set = new Set();
const setTwo = new Set();

set.add('hello');
set.delete('hello');
// console.log(set.has('hello'));

const queue = new Queue();

queue.enqueue(['c', 1]);
queue.enqueue(['b', 2]);
queue.enqueue(['c', 1]);
queue.enqueue(['b', 2]);
// queue.print();

const list = new LinkedList();

list.insertTail(1);
list.insertTail(2);
list.insertTail(3);
list.deleteTailNode();
list.insertHead(true);
list.insertIndex(2, true)
list.deleteHeadNode();
list.deleteIndex(4);
// list.print();

const doubleList = new DoublyLinkedList();

doubleList.insertDoubleTail(1);
doubleList.insertDoubleTail(2);
doubleList.insertDoubleTail(true);
doubleList.insertDoubleTail(false);
doubleList.insertDoubleHead(3);
// doubleList.print();

const bucketsort = new BucketSort([1, 5, 7, 2, 4, 6, 3, 1, 2, 30])

bucketsort.sort();

const { insertTailNode, print, insertHeadNode, removeTailNode, insertAtIndex, findIndex } = useLinkedList();

// // ordered double linked list
// insertAtIndex(0, undefined, true, true)
// insertAtIndex(12314, undefined, true, true)
// insertAtIndex(19, undefined, true, true)
// insertAtIndex(0, 0)

// // unordered double linked list
// insertTailNode(0, true)
// insertTailNode(12314, true)
// insertTailNode(19, true)

// // ordered single linked list
// insertAtIndex(0, undefined, true)
// insertAtIndex(12314, undefined, true)
// insertAtIndex(19, undefined, true)
// insertAtIndex(0, 0)

// // unordered single linked list
// insertTailNode(0)
// insertTailNode(12314)
// insertTailNode(19)

console.log(findIndex(19));

console.log(print())