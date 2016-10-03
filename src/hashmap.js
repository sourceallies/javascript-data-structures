export class Hashmap {
    constructor() {
        this.map = {};
    }

    size() {
        return Object.keys(this.map).length;
    }

    put(key, value) {
        if (value === undefined) {
            throw new Error('Cannot put undefined as a value!');
        }

        if (key === undefined) {
            throw new Error('Cannot put undefined as a key!');
        }

        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    containsKey(key) {
        if (key === undefined) {
            throw new Error('This hashmap implementation cannot contain undefined as a key!');
        }

        return this.map[key] !== undefined;
    }

    containsValue(value) {
        if (value === undefined) {
            throw new Error('This hashmap implementation cannot contain undefined as a value!');
        }

        return Object.keys(this.map).filter(key => this.map[key] === value).length === 1;
    }

    remove(key) {
        delete this.map[key];
    }
}