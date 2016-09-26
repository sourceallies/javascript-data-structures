export class Stack {
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
        if (this.size() === 0) {
            throw new Error('Cannot peek on an empty stack!');
        }

        return this.array[this.size() - 1];
    }

    pop() {
        if (this.size() === 0) {
            throw new Error('Cannot pop on an empty stack!');
        }

        return this.array.splice(this.size() - 1)[0];
    }
}