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
});
