const assert = require("chai").assert;
const expect = require("chai").expect;
const filename = "afari_solution";
const sol = require("../Solutions/" + filename);
require("mocha-sinon");

describe("JS_Fun_Practice", function () {
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
  describe("max(...nums)", function () {
    it("is a max fxn that is generalized for any amount of arguments", function () {
      assert.equal(sol.max(1, 2, 4), 4);
    });
  });
  describe("addRecurse(...nums)", function () {
    it("is an add fxn that is generalized but uses recursion", function () {
      assert.equal(sol.addRecurse(1, 2, 4), 7);
    });
  });
  describe("mulRecurse(...nums)", function () {
    it("is a mul fxn that is generalized but uses recursion", function () {
      assert.equal(sol.mulRecurse(1, 2, 4), 8);
    });
  });
  describe("minRecurse(...nums)", function () {
    it("is a min fxn that is generalized but uses recursion", function () {
      assert.equal(sol.minRecurse(1, 2, 4), 1);
    });
  });
  describe("maxRecurse(...nums)", function () {
    it("is a max fxn that is generalized but uses recursion", function () {
      assert.equal(sol.maxRecurse(1, 2, 4), 4);
    });
  });
});
