import {Hashmap} from '../../src/hashmap';

import {expect} from 'chai';
import Chance from 'chance';

describe('Hashmap', () => {
    let chance,
        hashmap;

    beforeEach(() => {
        chance = new Chance();
        hashmap = new Hashmap();
    });

    it('should initialize as empty', () => {
        expect(hashmap.size()).to.equal(0);
    });

    it('should add a key-value pair', () => {
        const randomKey = chance.word(),
            randomValue = chance.natural();

        hashmap.put(randomKey, randomValue);

        expect(hashmap.size()).to.equal(1);
        expect(hashmap.containsKey(randomKey)).to.equal(true);
    });

    it('should throw an error when attempting to put bad values', () => {
        expect(() => {
            hashmap.put(chance.word(), undefined);
        }).to.throw('Cannot put undefined as a value!');

        expect(() => {
            hashmap.put(undefined, chance.natural());
        }).to.throw('Cannot put undefined as a key!');
    });

    it('should throw an error when attempting to check if the map contains bad values', () => {
        expect(() => {
            hashmap.containsKey(undefined);
        }).to.throw('This hashmap implementation cannot contain undefined as a key!');

        expect(() => {
            hashmap.containsValue(undefined);
        }).to.throw('This hashmap implementation cannot contain undefined as a value!');
    });

    describe('Given a hashmap with more than one item', () => {
        let randomKey,
            randomValue;

        beforeEach(() => {
            randomKey = chance.word();
            randomValue = chance.natural();

            hashmap.put(randomKey, randomValue);
            hashmap.put(chance.word(), chance.natural());
        });

        it('should determine whether or not a key is present', () => {
            const otherRandomKey = chance.word();

            expect(hashmap.containsKey(otherRandomKey)).to.equal(false);
            expect(hashmap.containsKey(randomKey)).to.equal(true);
        });

        it('should determine whether or not a value is present', () => {
            const otherRandomValue = chance.natural();

            expect(hashmap.containsValue(otherRandomValue)).to.equal(false);
            expect(hashmap.containsValue(randomValue)).to.equal(true);
        });

        it('should return the value when given a key', () => {
            const actualValue = hashmap.get(randomKey);

            expect(actualValue).to.equal(randomValue);
        });

        it('should remove the key value pair', () => {
            hashmap.remove(randomKey);

            expect(hashmap.size()).to.equal(1);
            expect(hashmap.get(randomKey)).to.equal(undefined);
            expect(hashmap.containsKey(randomKey)).to.equal(false);
        });
    });
});