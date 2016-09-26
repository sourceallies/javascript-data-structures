export default class Stack {
    constructor() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    push(item) {
        this.array.push(item);
    }

    peek() {
        return this.array[this.size() - 1];
    }

    pop() {
        return this.array.splice(this.size() - 1)[0];
    }
}