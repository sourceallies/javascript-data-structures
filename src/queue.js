export class Queue {
    constructor() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    enqueue(item) {
        this.array.push(item);
    }

    dequeue() {
        if (this.size() === 0) {
            throw new Error('Cannot dequeue on an empty queue!');
        }

        return this.array.splice(0, 1)[0];
    }

    peek() {
        if (this.size() === 0) {
            throw new Error('Cannot peek on an empty queue!');
        }

        return this.array[0];
    }
}