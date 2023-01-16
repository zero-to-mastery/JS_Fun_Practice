const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'usergr_solution';
const sol = require('../Solutions/' + 'justin2172021_solutions');
require('mocha-sinon');

describe("Justin2172021_JS_Fun_Practice", function () {
    describe("identity()", function () {
        it("takes an argument and returns that argument", function () {
            assert.equal(sol.identity(3), 3);
        });
    });

    describe("addb(a,b)", function () {
        it("takes two numbers and returns their sum", function () {
          assert.equal(sol.addb(3, 4), 7);
        });
    });

    describe("subb(a,b)", function () {
        it("takes two numbers and returns their difference", function () {
            assert.equal(sol.subb(3, 4), -1);
        });
    });

    describe("mulb(a,b)", function () {
        it("takes two numbers and returns their product", function () {
          assert.equal(sol.mulb(3, 4), 12);
        });
    });

    describe("minb(a,b)", function () {
        it("takes two numbers and returns the smaller one", function () {
          assert.equal(sol.minb(3, 4), 3);
        });
    });

    describe("maxb(a,b)", function () {
        it("takes two numbers and returns the larger one", function () {
          assert.equal(sol.maxb(3, 4), 4);
        });
    });

    describe("add(...nums)", function () {
        it("is an add fuction that is generalized for any amount of arguments", function () {
          assert.equal(sol.add(1, 2, 4), 7);
        });
    });

    describe("sub(...nums)", function () {
        it("is a sub fuction that is generalized for any amount of arguments", function () {
          assert.equal(sol.sub(1, 2, 4), -5);
        });
    });

    describe("mul(...nums)", function () {
        it("is a mul fuction that is generalized for any amount of arguments", function () {
          assert.equal(sol.mul(1, 2, 4), 8);
        });
    });

    describe("min(...nums)", function () {
        it("is a min fuction that is generalized for any amount of arguments", function () {
          assert.equal(sol.min(1, 2, 4), 1);
        });
    });

    describe("max(...nums)", function () {
        it("is a max fuction that is generalized for any amount of arguments", function () {
          assert.equal(sol.max(1, 2, 4), 4);
        });
    });

    describe("addRecurse(...nums)", function () {
        it("is an add fuction that is generalized but uses recursion", function () {
          assert.equal(sol.addRecurse(1, 2, 4), 7);
        });
    });

    describe("mulRecurse(...nums)", function () {
        it("is a mul fuction that is generalized but uses recursion", function () {
          assert.equal(sol.mulRecurse(1, 2, 4), 8);
        });
    });

    describe("minRecurse(...nums)", function () {
        it("is a min fuction that is generalized but uses recursion", function () {
            assert.equal(sol.minRecurse(1, 2, 4), 1);
        });
    });

    describe("maxRecurse(...nums)", function () {
        it("is a max fuction that is generalized but uses recursion", function () {
            assert.equal(sol.maxRecurse(1, 2, 4), 4);
        });
    });
});