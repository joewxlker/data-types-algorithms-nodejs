export type Node = { value: Value; next: Node | null }
export type DoubleNode = { value: Value; next: Node | null, prev: Node | null }
export type Value = string | boolean | number
export type Head = Node | DoubleNode | null