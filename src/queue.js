export default class Queue {
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
        return this.array.splice(0, 1)[0];
    }

    peek() {
        return this.array[0];
    }
}