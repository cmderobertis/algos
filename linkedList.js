class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  isEmpty() {
    return this.head == null
  }

  insertAtBack(data) {
    let node = new Node(data)
    if (this.isEmpty()) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node

    return this
  }

  insertAllAtBack(array) {
    for (const item of array) {
      this.insertAtBack(item)
    }
  }
}

// const node1 = new Node("Hello hi")
// const node2 = new Node("I'm a node!")
// const node3 = new Node("This is a linked list")
// const node4 = new Node("not an array...")
const sll = new SinglyLinkedList()
sll.insertAllAtBack([
  "Hello hi",
  "I'm a node!",
  "This is a linked list",
  "not an array...",
])
console.log(sll.head)
