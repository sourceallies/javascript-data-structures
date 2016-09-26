import Stack from '../../src/stack';

import {expect} from 'chai';
import Chance from 'chance';

describe('Stack', () => {
    let chance,
        stack;

    before(() => {
        chance = new Chance();
    });

    beforeEach(() => {
        stack = new Stack();
    });

    it('should initialize as empty', () => {
        expect(stack.size()).to.equal(0);
    });

    it('should push an item on to the stack', () => {
        const randomNumber = chance.natural();

        stack.push(randomNumber);

        expect(stack.size()).to.equal(1);
        expect(stack.peek()).to.equal(randomNumber);
    });

    describe('Given an empty stack', () => {
        it('should throw an error when peek() is called', () => {
            expect(() => {
                stack.peek();
            }).to.throw('Cannot peek on an empty stack!');
        });

        it('should throw an error when pop() is called', () => {
            expect(() => {
                stack.pop();
            }).to.throw('Cannot pop on an empty stack!');
        });
    });

    describe('Given a stack with two items', () => {
        let randomNumber;

        beforeEach(() => {
            randomNumber = chance.natural();

            stack.push(chance.natural());
            stack.push(randomNumber);
        });

        it('should return and not remove the top item when peek() is called', () => {
            expect(stack.peek()).to.equal(randomNumber);
            expect(stack.size()).to.equal(2);
        });

        it('should return and remove the top item when pop() is called', () => {
            expect(stack.pop()).to.equal(randomNumber);
            expect(stack.size()).to.equal(1);
        });
    });
});