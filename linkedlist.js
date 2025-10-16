class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    prepend(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            
        }
        this.length++
        return this
    }
    getAtIndex(index) {
        
        if (index < 0 || index >= this.length ) {
            return null
        };
        let i = 0
        let current = this.head
        console.log(current, "Current head");
        
        while (i < index) {
            current = this.head.next
            i++;
        }
        return current
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.length ) {
            return null
        };
        if (index == 0) this.prepend();
        if (index === this.length) this.append();

        prevNode = this.getAtIndex(index-1)
        let newNode = new Node(value)
        newNode.next = prevNode.next
        prevNode.next = newNode
        

    }
    removeAt(index) {
    if (index < 0 || index >= this.length) return null

    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prevNode = this.getAtIndex(index - 1)
    const removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed.value
  }
  shift() {
    if (!this.head) return null
    const removed = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) this.tail = null
    return removed.value
  }
  pop() {
    if (!this.head) return null

    if (this.length === 1) {
      const removed = this.head
      this.head = null
      this.tail = null
      this.length = 0
      return removed.value
    }

    const prevNode = this.getAtIndex(this.length - 2)
    const removed = this.tail
    prevNode.next = null
    this.tail = prevNode
    this.length--
    return removed.value
  }
  toArray() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
  reverse() {
    if (!this.head || this.length === 1) return this
    let prev = null
    let current = this.head
    this.tail = this.head
  }
}

let myList = new LinkedList()
myList.append(1)
myList.append("hello")
myList.prepend(6)
myList.append(3)
myList.append(4)
myList.removeAt(2)
myList.shift()
myList.pop()


console.log(myList.getAtIndex(2));

console.log(myList);
console.log(myList.toArray());

