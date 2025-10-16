class DNode {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const node = new DNode(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    prepend(value) {
        const node = new DNode(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
        return this
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.length) return null
        let current
        if (index < this.length / 2) {
            current = this.head
            for (let i = 0; i < index; i++) current = current.next
        } else {
            current = this.tail
            for (let i = this.length - 1; i > index; i--) current = current.prev
        }
        return current
    }

    getValueAt(index) {
        const node = this.getNodeAt(index)
        return node ? node.value : undefined
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.prepend(value)
        if (index === this.length) return !!this.append(value)

        const newNode = new DNode(value)
        const prevNode = this.getNodeAt(index - 1)
        const nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode

        this.length++
        return true
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const nodeToRemove = this.getNodeAt(index)
        const prevNode = nodeToRemove.prev
        const nextNode = nodeToRemove.next

        prevNode.next = nextNode
        nextNode.prev = prevNode

        this.length--
        return nodeToRemove.value
    }

    shift() {
        if (!this.head) return undefined
        const value = this.head.value
        this.head = this.head.next
        if (this.head) this.head.prev = null
        else this.tail = null
        this.length--
        return value
    }

    pop() {
        if (!this.tail) return undefined
        const value = this.tail.value
        this.tail = this.tail.prev
        if (this.tail) this.tail.next = null
        else this.head = null
        this.length--
        return value
    }

    toArray() {
        const result = []
        let current = this.head
        while (current) {
            result.push(current.value)
            current = current.next
        }
        return result
    }

    reverse() {
        let current = this.head
        let temp = null
        this.tail = this.head
        while (current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }
        if (temp) {
            this.head = temp.prev
        }
        return this
    }
    findNode (value) {
        let cur = this.head
        while(cur) {
            if (cur === value) return cur;
            cur = cur.next
        }
        return null
    }
}

let dList = new DoublyList()
dList.append(1)
dList.append(2)
dList.append(3)
dList.prepend(0)
dList.insertAt(2, 1.5)

console.log(dList.toArray())   
console.log(dList.getValueAt(3))  
console.log(dList.removeAt(2)) 
console.log(dList.toArray())         
dList.reverse()
console.log(dList.toArray())     
console.log(dList.findNode(1), "finding node");
         
