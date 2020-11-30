const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'anipietrzak';
const sol = require('../Solutions/' + filename);
require('mocha-sinon');


//Write a function identity that takes an argument and returns that argument
const identity = () => x;

describe('JS_Fun_Practice', function () {
    describe('identity()', function () {
        it('takes an argument and returns that argument', function () {
            assert.equal(sol.identity(3), 3);
        });
    });
    //Write a binary function addb that takes two numbers and returns their sum
    const addb = (a, b) => { a + b };

    describe('addb(a,b)', function () {
        it('takes two numbers and returns their sum', function () {
            assert.equal(sol.addb(3, 4), 7);
        });
    });
    //Write a binary function subb that takes two numbers and returns their difference
    const subb = (a, b) => { a - b };

    describe('subb(a,b)', function () {
        it('takes two numbers and returns their difference', function () {
            assert.equal(sol.subb(3, 4), -1);
        });
    });
    //Write a binary function mulb that takes two numbers and returns their product
    const mulb = (a, b) => { a * b };
    describe('mulb(a,b)', function () {
        it('takes two numbers and returns their product', function () {
            assert.equal(sol.mulb(3, 4), 12);
        });
    });
    //Write a binary function minb that takes two numbers and returns the smaller one
    const minb = (a, b) => {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    };

    describe('minb(a,b)', function () {
        it('takes two numbers and returns the smaller one', function () {
            assert.equal(sol.minb(3, 4), 3);
        });
    });
    //Write a binary function maxb that takes two numbers and returns the larger one
    const maxb = (a, b) => {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    describe('maxb(a,b)', function () {
        it('takes two numbers and returns the larger one', function () {
            assert.equal(sol.maxb(3, 4), 4);
        });
    });
    //Write a function add that is generalized for any amount of arguments
    const add = (...nums) => {
        return nums.reduce((a, b) => a + b);
    }

    describe('add(...nums)', function () {
        it('is an add fuction that is generalized for any amount of arguments', function () {
            assert.equal(sol.add(1, 2, 4), 7);
        });
    });

    //Write a function sub that is generalized for any amount of arguments
    const sub = (...nums) => {
        return nums.reduce((a, b) => a - b);
    }

    describe('sub(...nums)', function () {
        it('is a sub fuction that is generalized for any amount of arguments', function () {
            assert.equal(sol.sub(1, 2, 4), -5);
        });
    });
    //Write a function mul that is generalized for any amount of arguments
    const mul = (...nums) => {
        return nums.reduce((a, b) => a * b);
    }

    describe('mul(...nums)', function () {
        it('is a mul fuction that is generalized for any amount of arguments', function () {
            assert.equal(sol.mul(1, 2, 4), 8);
        });
    });

    //Write a function min that is generalized for any amount of arguments

    const min = (...nums) => {
        return nums.reduce((a, b) => {
            if (a > b) {
                return b;
            } else { return a };
        }
        )
    }

    describe('min(...nums)', function () {
        it('is a min fuction that is generalized for any amount of arguments', function () {
            assert.equal(sol.min(1, 2, 4), 1);
        });
    });

    //Write a function max that is generalized for any amount of arguments
    const max = (...nums) => {
        return nums.reduce((a, b) => {
            if (a < b) {
                return b;
            } else { return a };
        }
        )
    }

    describe('max(...nums)', function () {
        it('is a max fuction that is generalized for any amount of arguments', function () {
            assert.equal(sol.max(1, 2, 4), 4);
        });
    });


    module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };
