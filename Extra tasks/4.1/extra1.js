"use strict"


class Node {
    constructor(value) {
        this.value = value;
        this.root = null;
        this.next = null;
    }

}

class List {
    constructor() {
        this._length = 0;
        this.root = Node;
    }


    addNode(value, i) {

        let newNode = new Node(value);
        let current = this.root;


        if (i == undefined) {
            if (!current) {
                this.root = newNode;
                this._length++;
                return newNode;
            } else {

                while (current.next) {
                    current = current.next;
                }
                current.next = new Node(value);
            }
            this._length++;
            return true;
        }

        if (typeof i == 'number') {
            if (i === 0) {
                node.next = this.root;
                this.root = newNode;
            } else {
                let current = this.root;
                let prev = null;
                let index = 0;

                while (index < i) {
                    prev = current;
                    current = current.next;
                    index++;
                }
                prev.next = newNode;
                node.next = current;
            }
            this._length++;
            return true;
        }

        if (i > this._length) {
            this.next = current;
            return false;
        }
        return false;

    }

    removeNode(i) {

        if (i > this._length) {
            return false;
        }

        if (this.root === this.next) {
            this.root = null;
            this.next = null;
            return false;
        }

        if (i == undefined) {
            if (this.root === this.next) {
                this.root = null;
                this.next = null;
            }
            let current = this.root;
            while (current.next) {
                if (!current.next.next) {
                    current.next = null;
                } else {
                    current = current.next;
                }
            }
            this.next = current;
            return true;
        }

        if (i >= 0 && i <= this.length) {
            let current = this.root;
            if (i === 0) {
                this.root = current.next;
            } else {
                let prev = null;
                let index = 0;

                while (index < i) {
                    prev = current;
                    current = current.next;
                    index++;
                }
                prev.next = current.next;
            }
            this.length--;
            return true;
        }
        return false;

    }

    print() {

        let current = this.root;

        if (!current) {
            return 'List empty';
        }

        let result = '';
        while (current) {
            result += `${current.value}, `;
            current = current.next;
        }

        result.slice(0, -2);
        return console.log(current);
    }
}
const list = new List();

// console.log(list.addNode(20));
// console.log(list.addNode(30));

// console.log(list.removeNode(0));

// console.log(list.removeNode(1));

// console.log(list.removeNode(10));
// console.log(list.print());