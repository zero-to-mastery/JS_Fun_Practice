const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'saeedTlb_solution';
const sol = require('../Solutions/' + filename);
require('mocha-sinon');

describe('JS_Fun_Practice', function () {
  describe('identity()', function () {
    it('takes an argument and returns that argument', function () {
      assert.equal(sol.identity(3), 3);
    });
  });
  describe('addb(a,b)', function () {
    it('takes two numbers and returns their sum', function () {
      assert.equal(sol.addb(3, 4), 7);
    });
  });
  describe('subb(a,b)', function () {
    it('takes two numbers and returns their difference', function () {
      assert.equal(sol.subb(3, 4), -1);
    });
  });
  describe('mulb(a,b)', function () {
    it('takes two numbers and returns their product', function () {
      assert.equal(sol.mulb(3, 4), 12);
    });
  });
  describe('minb(a,b)', function () {
    it('takes two numbers and returns the smaller one', function () {
      assert.equal(sol.minb(3, 4), 3);
    });
  });
  describe('maxb(a,b)', function () {
    it('takes two numbers and returns the larger one', function () {
      assert.equal(sol.maxb(3, 4), 4);
    });
  });
  describe('add(...nums)', function () {
    it('is an add fuction that is generalized for any amount of arguments', function () {
      assert.equal(sol.add(1, 2, 4), 7);
    });
  });
  describe('sub(...nums)', function () {
    it('is a sub fuction that is generalized for any amount of arguments', function () {
      assert.equal(sol.sub(1, 2, 4), -5);
    });
  });
  describe('mul(...nums)', function () {
    it('is a mul fuction that is generalized for any amount of arguments', function () {
      assert.equal(sol.mul(1, 2, 4), 8);
    });
  });
  describe('min(...nums)', function () {
    it('is a min fuction that is generalized for any amount of arguments', function () {
      assert.equal(sol.min(1, 2, 4), 1);
    });
  });
  describe('max(...nums)', function () {
    it('is a max fuction that is generalized for any amount of arguments', function () {
      assert.equal(sol.max(1, 2, 4), 4);
    });
  });
  describe('addRecurse(...nums)', function () {
    it('is an add fuction that is generalized but uses recursion', function () {
      assert.equal(sol.addRecurse(1, 2, 4), 7);
    });
  });
  describe('mulRecurse(...nums)', function () {
    it('is a mul fuction that is generalized but uses recursion', function () {
      assert.equal(sol.mulRecurse(1, 2, 4), 8);
    });
  });
  describe('minRecurse(...nums)', function () {
    it('is a min fuction that is generalized but uses recursion', function () {
      assert.equal(sol.minRecurse(1, 2, 4), 1);
    });
  });
  describe('maxRecurse(...nums)', function () {
    it('is a max fuction that is generalized but uses recursion', function () {
      assert.equal(sol.maxRecurse(1, 2, 4), 4);
    });
  });
  describe('not(func)', function () {
    it('takes a function and returns the negation of its result', function () {
      const isOdd = (x) => x % 2 === 1;
      const isEven = sol.not(isOdd);
      assert.equal(isEven(1), false);
      assert.equal(isEven(2), true);
    });
  });
  describe('acc(func,initial)', function () {
    it(`takes a function and an initial value and returns a function
      that runs the initial function on each argument, accumulating the result`, function () {
      let add = sol.acc(sol.addb, 0);
      assert.equal(add(1, 2, 4), 7);

      let mul = sol.acc(sol.mulb, 1);
      assert.equal(mul(1, 2, 4), 8);
    });
  });
  describe('accPartial(func,start,end)', function () {
    it(`takes in a function, a start index, and an end index, and returns a function
      that accumulates a subset of its arguments by applying the given function to
      all elements between start and end`, function () {
      const addSecondToThird = sol.accPartial(sol.add, 1, 3);
      expect(addSecondToThird(1, 2, 4, 8)).to.deep.equal([1, 6, 8]);
    });
  });
  describe('accRecurse(func,initial)', function () {
    it(`does what acc does but uses recursion`, function () {
      let add = sol.accRecurse(sol.addb, 0);
      assert.equal(add(1, 2, 4), 7);

      let mul = sol.accRecurse(sol.mulb, 1);
      assert.equal(mul(1, 2, 4), 8);
    });
  });
  describe('fill(num)', function () {
    it(`takes a number and returns an array with that many numbers equal to the given
      number`, function () {
      expect(sol.fill(3)).to.deep.equal([3, 3, 3]);
    });
  });
  describe('fillRecurse(num)', function () {
    it(`does what fill does but uses recursion`, function () {
      expect(sol.fillRecurse(3)).to.deep.equal([3, 3, 3]);
    });
  });
  describe('set(...args)', function () {
    it(`is given a list of arguments and returns an array with all duplicates
      removed`, function () {
      expect(sol.set(1, 1, 1, 2, 2, 2)).to.deep.equal([1, 2]);
    });
  });
  describe('identityf(x)', function () {
    it(`takes an argument and returns a function that returns that argument`, function () {
      assert.equal(sol.identityf(3)(), 3);
    });
  });
  describe('addf(a)', function () {
    it(`adds from two invocations`, function () {
      assert.equal(sol.addf(3)(4), 7);
    });
  });
  describe('liftf(binary)', function () {
    it(`takes a binary function, and makes it callable with two invocations`, function () {
      assert.equal(sol.liftf(sol.addb)(3)(4), 7);
      assert.equal(sol.liftf(sol.mulb)(5)(6), 30);
    });
  });
  describe('pure(x,y)', function () {
    it(`is a wrapper arround the impure function impure`, function () {
      expect(sol.pure(20, 5)).to.deep.equal([6, 120]);
      expect(sol.pure(25, 6)).to.deep.equal([7, 175]);
    });
  });
  describe('curryb(binary, a)', function () {
    it(`takes a binary function and an argument, and returns a function that can take
      a second argument`, function () {
      assert.equal(sol.curryb(sol.addb, 3)(4), 7);
      assert.equal(sol.curryb(sol.mulb, 5)(6), 30);
    });
  });
  describe('curry(func, ...outer)', function () {
    it(`is a curry function generalized for any amount of arguments`, function () {
      assert.equal(sol.curry(sol.add, 1, 2, 4)(4, 2, 1), 14);
      assert.equal(sol.curry(sol.sub, 1, 2, 4)(4, 2, 1), -12);
      assert.equal(sol.curry(sol.mul, 1, 2, 4)(4, 2, 1), 64);
    });
  });
  describe('inc(x)', function () {
    it(`shows multiple ways to create the inc function`, function () {
      assert.equal(sol.inc(5), 6);
      assert.equal(sol.inc(sol.inc(5)), 7);
    });
  });
  describe('twiceUnary(binary)', function () {
    it(`takes a binary function and returns a unary function that passes its argument
      to the binary function twice`, function () {
      assert.equal(sol.twiceUnary(sol.addb)(11), 22);
      assert.equal(sol.twiceUnary(sol.mulb)(11), 121);
    });
  });
  describe('doubl(x)', function () {
    it(`uses the function twiceUnary to create the doubl function`, function () {
      assert.equal(sol.doubl(11), 22);
      assert.equal(sol.doubl(3), 6);
    });
  });
  describe('square(x)', function () {
    it(`uses the function twiceUnary to create the square function`, function () {
      assert.equal(sol.square(11), 121);
    });
  });
  describe('twice(x)', function () {
    it(`is a twice function generalized for any amount of arguments`, function () {
      assert.equal(sol.twice(sol.add)(1, 2, 4), 14);
    });
  });
  describe('reverseb(binary)', function () {
    it(`reverses the arguments of a binary function`, function () {
      assert.equal(sol.reverseb(sol.subb)(3, 2), -1);
    });
  });
  describe('reverse(func)', function () {
    it(`is a reverse function generalized for any amount of arguments`, function () {
      assert.equal(sol.reverse(sol.sub)(1, 2, 4), 1);
    });
  });
  describe('composeuTwo(unary1,unary2)', function () {
    it(`takes two unary functions and returns a unary function that calls them
      both`, function () {
      assert.equal(sol.composeuTwo(sol.doubl, sol.square)(5), 100);
    });
  });
  describe('composeu(...funcs)', function () {
    it(`is a compose function generalized for any amount of arguments`, function () {
      assert.equal(
        sol.composeu(
          sol.doubl,
          sol.square,
          sol.identity,
          sol.curry(sol.add, 1, 2)
        )(5),
        103
      );
    });
  });
  describe('composeb(binary1,binary2)', function () {
    it(`takes two binary functions and returns a function that calls them both`, function () {
      assert.equal(sol.composeb(sol.addb, sol.mulb)(2, 3, 7), 35);
    });
  });
  describe('composeTwo(func1,func2)', function () {
    it(`takes two functions and returns a function that calls them both`, function () {
      assert.equal(sol.composeTwo(sol.add, sol.square)(2, 3, 7), 144);
    });
  });
  describe('compose(...funcs)', function () {
    it(`takes any amount of functions and returns a function that takes any amount of
      arguments and gives them to the first function, then that result to the
      second function and so on`, function () {
      assert.equal(
        sol.compose(sol.add, sol.doubl, sol.fill, sol.max)(0, 1, 2),
        6
      );
    });
  });
  describe('limitb(binary, lmt)', function () {
    it(`allows a binary function to be called a limited number of times`, function () {
      let addlmtb = sol.limitb(sol.addb, 1);
      assert.equal(addlmtb(3, 4), 7);
      assert.equal(addlmtb(3, 5), undefined);
    });
  });
  describe('limit(func, lmt)', function () {
    it(`allows a function that is generalized for any amount of arguments
      to be called a limited number of times`, function () {
      let addlmt = sol.limit(sol.add, 1);
      assert.equal(addlmt(1, 2, 4), 7);
      assert.equal(addlmt(3, 5, 9, 2), undefined);
    });
  });
  describe('genFrom(x)', function () {
    it(`produces a generator that will produces a series of values`, function () {
      let index = sol.genFrom(0);
      assert.equal(index.next().value, 0);
      assert.equal(index.next().value, 1);
      assert.equal(index.next().value, 2);
    });
  });
  describe('mapRecurse(array, predicate)', function () {
    it(`performs a transformation for each element of a given array, recursively`, function () {
      expect(sol.mapRecurse([1, 2, 3, 4], (x) => x * 2)).to.deep.equal([
        2, 4, 6, 8,
      ]);
    });
  });
});
