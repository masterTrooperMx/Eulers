class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop(element) {
        if(this.items.length == 0) {
            return "underflow";
        }
        return this.items.pop();
    }

    peek(element) {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
};

module.exports = { Stack };