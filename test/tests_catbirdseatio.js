const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'catbirdseatio_solution';
const sol = require('../Solutions/' + filename);
require('mocha-sinon');


describe("catbirdseatio_solution", () => {
  describe("oddOrEven", ()=> {
      it("returns 'even' if even", ()=> {
          assert.equal(sol.oddOrEven(12), 'even');
      });

      it("returns 'odd' if odd", ()=> {
          assert.equal(sol.oddOrEven(13), 'odd');
      })
  });

  describe("max", ()=> {
      it("returns the maximum number in an array", ()=> {
          assert(sol.max([1,56, 3, 4, 11, 69]), 69);
      });

      it("return undefined for empty array", ()=> {
          assert(sol.max([], undefined));
      })
  })
});
