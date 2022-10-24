import { DoubleNode, Value, Node, Head } from "../types/linkedlist";

export default function useLinkedList(): {
    createNode: (value: Value, double?: boolean) => Node | DoubleNode
    insertTailNode: (value: Value, double?: boolean) => Node | DoubleNode;
    insertHeadNode: (value: Value, double?: boolean) => Node | DoubleNode;
    insertAtIndex: (value: Value, index?: number, sorted?: boolean, double?: boolean) => undefined | Node | DoubleNode;
    removeHeadNode: () => undefined | Node | DoubleNode | null;
    findIndex: (searchValue: number) => number;
    removeTailNode: () => undefined | Node | DoubleNode
    print: () => Head
} {

    let head: Head = null;
    let tail: Head = null;
    let length: number = 0;

    function createNode(value: Value, double?: boolean): Node | DoubleNode {
        if (!double) return { value: value, next: null };
        return { value: value, next: null, prev: null };
    }

    const insertTailNode = (value: Value, double?: boolean): Node => {
        const newNode = createNode(value, double);
        length++
        if (tail) {
            tail.next = newNode;
            tail = newNode;
            if (double) newNode.prev = tail
            return newNode
        }
        head = tail = newNode;
        return newNode
    }

    const insertAtIndex = (value: Value, index?: number, ordered?: boolean, double?: boolean): Node | undefined => {

        if (index && index > length) return undefined;
        if (index && index === 0 || ordered && value === 0) return insertHeadNode(value, double)
        if (!tail || !head || (index && index === length)) return insertTailNode(value, double);

        let newNode = createNode(value, double);
        let currentNode: Head = head;
        let previousNode: Head = null

        if (ordered) {
            for (let i = 0; i < length; i++) {
                if (currentNode.value > value) { break };
                if (currentNode.next === null) {
                    return insertTailNode(value, double)
                }
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode!.next = newNode
            newNode.next = currentNode
            if (double) newNode.prev = previousNode
            length++
            return newNode
        }

        if (index) {
            for (let i = 0; i < index; i++) {
                previousNode = currentNode
                currentNode = currentNode!.next
            }
            previousNode!.next = newNode
            newNode.next = currentNode;
            if (double) newNode.prev = previousNode
            length++
            return newNode
        }
    }

    const findIndex = (searchValue: number | string | boolean): number | null => {
        let currentNode: Node | DoubleNode | null = head
        let count: number = 0;
        for (let i = 0; i < length + 1; i++) {
            if (!currentNode?.next) return null
            currentNode = currentNode!.next;
            count++
            if (currentNode?.value === searchValue) {
                break;
            }
        }
        return count
    }

    const insertHeadNode = (value: Value, double?: boolean) => {
        let newNode = createNode(value, double);
        length++
        if (head) {
            if (double) head.prev = newNode
            newNode.next = head;
            head = newNode;
            return newNode
        }
        head = tail = newNode
        return newNode
    }

    const removeTailNode = (double?: boolean): undefined | Node | DoubleNode => {
        if (!tail || !head) return undefined;
        length--
        let currentNode = head;
        for (let i = 0; i < length; i++) {
            if (currentNode.next === null) break;
            currentNode = currentNode.next
        }
        let nodeBeforeTail = currentNode;

        tail = nodeBeforeTail;
        if (double) tail.prev = nodeBeforeTail.prev
        tail.next = null;
        return tail
    }

    const removeHeadNode = (): undefined | Node | DoubleNode | null => {
        if (!head) return undefined
        head = head.next;
        return head;
    }

    const print = () => head;

    return { createNode, insertTailNode, print, insertHeadNode, removeTailNode, insertAtIndex, removeHeadNode, findIndex }
}
