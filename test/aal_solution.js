const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'aal_solution';
const sol = require('../Solutions/' + filename);
require('mocha-sinon');


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
});
