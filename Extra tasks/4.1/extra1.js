"use strict"


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(value) {
        this.root = new Node(value);
        this.length = 0;
    }

    addNode(value, i = this.length) {
        let position = 0;
        let current = this.root;

        if (i <= this.length) {
            while (current.next !== null && position !== i) {
                current = current.next;
                position++;
            }
            let element = new Node(value);
            this.length++;
            element.next = current.next;
            current.next = element;
            return true;
        } else return false;
    }

    removeNode(i = this.length) {
        let current = this.root,
            position = 0,
            beforeNodeToDelete = null,
            nodeToDelete = null;

        if (i > this.length) {
            return false;
        }
        if (i === 0) {
            this.root = current.next;
            this.length--;
            return true;
        }
        while (position !== i) {
            beforeNodeToDelete = current;
            current = current.next;
            position++;
        }
        beforeNodeToDelete.next = current.next;
        nodeToDelete = null;
        --this.length;
        return true;
    }

    print() {
        const result = [];
        let current = this.root;
        while (current) {
            result.push(current.value);
            current = current.next;
        } return result;
    }
}




let list = new List(10);

console.log(
    list.addNode(3),
    list.addNode(5, 8),
    list.addNode(3),
    list.addNode(1),
    list.addNode(4, 1),
    list.removeNode(1),
    list.removeNode(5),
    list.removeNode(),
    list.print());