import {Queue} from '../../src';

import {expect} from 'chai';
import Chance from 'chance';

describe('Queue', () => {
    let chance,
        queue;

    before(() => {
        chance = new Chance();
    });

    beforeEach(() => {
        queue = new Queue();
    });

    it('should initialize as empty', () => {
        expect(queue.size()).to.equal(0);
    });

    it('should enqueue an item', () => {
        const randomNumber = chance.natural();

        queue.enqueue(randomNumber);

        expect(queue.size()).to.equal(1);
        expect(queue.peek()).to.equal(randomNumber);
    });

    describe('Given an empty queue', () => {
        it('should throw an error when peek() is called', () => {
            expect(() => {
                queue.peek();
            }).to.throw('Cannot peek on an empty queue!');
        });

        it('should throw an error when dequeue() is called', () => {
            expect(() => {
                queue.dequeue();
            }).to.throw('Cannot dequeue on an empty queue!');
        });
    });

    describe('Given a queue with two items', () => {
        let randomNumber;

        beforeEach(() => {
            randomNumber = chance.natural();

            queue.enqueue(randomNumber);
            queue.enqueue(chance.natural());
        });

        it('should return and not remove the first item when peek() is called', () => {
            expect(queue.peek()).to.equal(randomNumber);
            expect(queue.size()).to.equal(2);
        });

        it('should return and remove the first item when dequeue() is called', () => {
            expect(queue.dequeue()).to.equal(randomNumber);
            expect(queue.size()).to.equal(1);
        });
    });
});