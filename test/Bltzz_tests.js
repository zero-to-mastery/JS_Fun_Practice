const chai = require('chai');
const sinonChai = require('sinon-chai');

require('mocha-sinon');

const assert = chai.assert;
const expect = chai.expect;

chai.use(sinonChai);

const sol = require('../Solutions/Bltzz_solution');


describe('JS_Fun_Practice', () => {
  describe('identity()', () => {
    it('takes an argument and returns that argument', () => {
      assert.equal(sol.identity(3), 3);
    });
  });


  describe('addb(a,b)', () => {
    it('takes two numbers and returns their sum', () => {
      assert.equal(sol.addb(3, 4), 7);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.addb(40, '2')).to.throw(TypeError);
      expect(() => sol.addb(40, [])).to.throw(TypeError);
      expect(() => sol.addb(40, {})).to.throw(TypeError);
      expect(() => sol.addb('40', 2)).to.throw(TypeError);
      expect(() => sol.addb([], 2)).to.throw(TypeError);
      expect(() => sol.addb({}, 2)).to.throw(TypeError);
    });
  });


  describe('subb(a,b)', () => {
    it('takes two numbers and returns their difference', () => {
      assert.equal(sol.subb(3, 4), -1);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.subb(40, '2')).to.throw(TypeError);
      expect(() => sol.subb(40, [])).to.throw(TypeError);
      expect(() => sol.subb(40, {})).to.throw(TypeError);
      expect(() => sol.subb('40', 2)).to.throw(TypeError);
      expect(() => sol.subb([], 2)).to.throw(TypeError);
      expect(() => sol.subb({}, 2)).to.throw(TypeError);
    });
  });


  describe('mulb(a,b)', () => {
    it('takes two numbers and returns their product', () => {
      assert.equal(sol.mulb(3, 4), 12);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.mulb(40, '2')).to.throw(TypeError);
      expect(() => sol.mulb(40, [])).to.throw(TypeError);
      expect(() => sol.mulb(40, {})).to.throw(TypeError);
      expect(() => sol.mulb('40', 2)).to.throw(TypeError);
      expect(() => sol.mulb([], 2)).to.throw(TypeError);
      expect(() => sol.mulb({}, 2)).to.throw(TypeError);
      expect(() => sol.mulb('foo', 'bar')).to.throw(TypeError);
    });
  });


  describe('minb(a,b)', () => {
    it('takes two numbers and returns the smaller one', () => {
      assert.equal(sol.minb(3, 4), 3);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.minb(40, '2')).to.throw(TypeError);
      expect(() => sol.minb(40, [])).to.throw(TypeError);
      expect(() => sol.minb(40, {})).to.throw(TypeError);
      expect(() => sol.minb('40', 2)).to.throw(TypeError);
      expect(() => sol.minb([], 2)).to.throw(TypeError);
      expect(() => sol.minb({}, 2)).to.throw(TypeError);
      expect(() => sol.minb('foo', 'bar')).to.throw(TypeError);
    });
  });


  describe('maxb(a,b)', () => {
    it('takes two numbers and returns the larger one', () => {
      assert.equal(sol.maxb(3, 4), 4);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.maxb(40, '2')).to.throw(TypeError);
      expect(() => sol.maxb(40, [])).to.throw(TypeError);
      expect(() => sol.maxb(40, {})).to.throw(TypeError);
      expect(() => sol.maxb('40', 2)).to.throw(TypeError);
      expect(() => sol.maxb([], 2)).to.throw(TypeError);
      expect(() => sol.maxb({}, 2)).to.throw(TypeError);
      expect(() => sol.maxb('foo', 'bar')).to.throw(TypeError);
    });
  });


  describe('add(...nums)', () => {
    it('is an add fuction that is generalized for any amount of arguments', () => {
      assert.equal(sol.add(1, 2, 4), 7);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.add(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.add(40, [], 12)).to.throw(TypeError);
      expect(() => sol.add(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.add('40', 2)).to.throw(TypeError);
      expect(() => sol.add([], 42, 2)).to.throw(TypeError);
      expect(() => sol.add({}, 2)).to.throw(TypeError);
      expect(() => sol.add('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.add(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
      expect(() => sol.add()).to.throw('No arguments provided.');
    });
  });


  describe('sub(...nums)', () => {
    it('is a sub fuction that is generalized for any amount of arguments', () => {
      assert.equal(sol.sub(1, 2, 4), -5);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.sub(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.sub(40, [], 12)).to.throw(TypeError);
      expect(() => sol.sub(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.sub('40', 2)).to.throw(TypeError);
      expect(() => sol.sub([], 42, 2)).to.throw(TypeError);
      expect(() => sol.sub({}, 2)).to.throw(TypeError);
      expect(() => sol.sub('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.sub(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
      expect(() => sol.sub()).to.throw('No arguments provided.');
    });
  });


  describe('mul(...nums)', () => {
    it('is a mul fuction that is generalized for any amount of arguments', () => {
      assert.equal(sol.mul(1, 2, 4), 8);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.mul(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.mul(40, [], 12)).to.throw(TypeError);
      expect(() => sol.mul(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.mul('40', 2)).to.throw(TypeError);
      expect(() => sol.mul([], 42, 2)).to.throw(TypeError);
      expect(() => sol.mul({}, 2)).to.throw(TypeError);
      expect(() => sol.mul('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.mul(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
      expect(() => sol.mul()).to.throw('No arguments provided.');
    });
  });


  describe('min(...nums)', () => {
    it('is a min fuction that is generalized for any amount of arguments', () => {
      assert.equal(sol.min(1, 2, 4), 1);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.min(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.min(40, [], 12)).to.throw(TypeError);
      expect(() => sol.min(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.min('40', 2)).to.throw(TypeError);
      expect(() => sol.min([], 42, 2)).to.throw(TypeError);
      expect(() => sol.min({}, 2)).to.throw(TypeError);
      expect(() => sol.min('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.min(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
      expect(() => sol.min()).to.throw('No arguments provided.');
    });
  });


  describe('max(...nums)', () => {
    it('is a max fuction that is generalized for any amount of arguments', () => {
      assert.equal(sol.max(1, 6, 4), 6);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.max(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.max(40, [], 12)).to.throw(TypeError);
      expect(() => sol.max(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.max('40', 2)).to.throw(TypeError);
      expect(() => sol.max([], 42, 2)).to.throw(TypeError);
      expect(() => sol.max({}, 2)).to.throw(TypeError);
      expect(() => sol.max('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.max(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
      expect(() => sol.max()).to.throw('No arguments provided.');
    });
  });


  describe('addRecurse(...nums)', () => {
    it('is an add fuction that is generalized but uses recursion', () => {
      assert.equal(sol.addRecurse(1, 2, 4), 7);
      assert.equal(sol.addRecurse(), 0);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.addRecurse(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.addRecurse(40, [], 12)).to.throw(TypeError);
      expect(() => sol.addRecurse(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.addRecurse('40', 2)).to.throw(TypeError);
      expect(() => sol.addRecurse([], 42, 2)).to.throw(TypeError);
      expect(() => sol.addRecurse({}, 2)).to.throw(TypeError);
      expect(() => sol.addRecurse('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.addRecurse(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
    });
  });


  describe('mulRecurse(...nums)', () => {
    it('is a mul fuction that is generalized but uses recursion', () => {
      assert.equal(sol.mulRecurse(1, 2, 4), 8);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.mulRecurse(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.mulRecurse(40, [], 12)).to.throw(TypeError);
      expect(() => sol.mulRecurse(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.mulRecurse('40', 2)).to.throw(TypeError);
      expect(() => sol.mulRecurse([], 42, 2)).to.throw(TypeError);
      expect(() => sol.mulRecurse({}, 2)).to.throw(TypeError);
      expect(() => sol.mulRecurse('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.mulRecurse(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
    });
  });

  describe('minRecurse(...nums)', () => {
    // TODO: Nice addon: Count the function calls by wrapping recursive method in class function
    // See: https://stackoverflow.com/questions/51699584/how-to-spy-on-a-recursive-function-in-javascript/51699585#51699585
    it('is a min fuction that is generalized but uses recursion', () => {
      assert.equal(sol.minRecurse(1, 2, 4), 1);
      assert.equal(sol.minRecurse(3, 2, 1), 1);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.minRecurse(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.minRecurse(40, [], 12)).to.throw(TypeError);
      expect(() => sol.minRecurse(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.minRecurse('40', 2)).to.throw(TypeError);
      expect(() => sol.minRecurse([], 42, 2)).to.throw(TypeError);
      expect(() => sol.minRecurse({}, 2)).to.throw(TypeError);
      expect(() => sol.minRecurse('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.minRecurse(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
    });
  });


  describe('maxRecurse(...nums)', () => {
    it('is a max fuction that is generalized but uses recursion', () => {
      assert.equal(sol.maxRecurse(1, 2, 4), 4);
    });

    it('should throw a TypeError if arguments are not numbers', () => {
      expect(() => sol.maxRecurse(40, 41, '2')).to.throw(TypeError);
      expect(() => sol.maxRecurse(40, [], 12)).to.throw(TypeError);
      expect(() => sol.maxRecurse(40, {}, 42)).to.throw(TypeError);
      expect(() => sol.maxRecurse('40', 2)).to.throw(TypeError);
      expect(() => sol.maxRecurse([], 42, 2)).to.throw(TypeError);
      expect(() => sol.maxRecurse({}, 2)).to.throw(TypeError);
      expect(() => sol.maxRecurse('foo', 'bar', 4)).to.throw(TypeError);
      expect(() => sol.maxRecurse(4, 5, 6, 7, 8, 9, 10, 11, '12')).to.throw(TypeError);
    });
  });


  describe('not(func)', () => {
    it('takes a function and returns the negation of its result', () => {
      const isOdd = x => x % 2 === 1;
      const isEven = sol.not(isOdd);
      assert.equal(isEven(1), false);
      assert.equal(isEven(2), true);
    });

    it('should throw a TypeError if arguments are not a function', () => {
      expect(() => sol.not(40, 41, '2')).to.throw(TypeError);
    });
  });


  describe('acc(func,initial)', () => {
    it(`takes a function and an initial value and returns a function
        that runs the initial function on each argument, accumulating the result`, () => {
      const add = sol.acc(sol.addb, 0);
      assert.equal(add(1, 2, 4), 7);

      const mul = sol.acc(sol.mulb, 1);
      assert.equal(mul(1, 2, 4), 8);
    });

    it('should throw a TypeError if first arguments are not a function', () => {
      expect(() => sol.acc(40, 41, '2')).to.throw(TypeError);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.acc(sol.addb, 'ds')).to.throw(TypeError);
    });
  });


  describe('accPartial(func,start,end)', () => {
    it(`takes in a function, a start index, and an end index, and returns a function
        that accumulates a subset of its arguments by applying the given function to
        all elements between start and end`, () => {
      const addSecondToThird = sol.accPartial(sol.add, 1, 3);
      expect(addSecondToThird(1, 2, 4, 8)).to.deep.equal([1, 6, 8]);

      const subSecondToThird = sol.accPartial(sol.sub, 1, 3);
      expect(subSecondToThird(1, 2, 4, 8)).to.deep.equal([1, -2, 8]);

      const subSecondToFourth = sol.accPartial(sol.sub, 1, 4);
      expect(subSecondToFourth(1, 2, 4, 6, 8)).to.deep.equal([1, -8, 8]);
    });

    it('should throw a TypeError if first arguments are not a function', () => {
      expect(() => sol.accPartial(40, 41, '2')).to.throw(TypeError);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.accPartial(sol.addb, 'ds')).to.throw(TypeError);
    });
  });


  describe('accRecurse(func,initial)', () => {
    it('does what acc does but uses recursion', () => {
      const add = sol.accRecurse(sol.addb, 0);
      assert.equal(add(1, 2, 4), 7);

      const mul = sol.accRecurse(sol.mulb, 1);
      assert.equal(mul(1, 2, 4), 8);
    });

    it('should throw a TypeError if first arguments are not a function', () => {
      expect(() => sol.accRecurse(40, 41, '2')).to.throw(TypeError);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.accRecurse(sol.addb, 'ds')).to.throw(TypeError);
    });
  });

  describe('fill(num)', () => {
    it(`takes a number and returns an array with that many numbers equal to the given
        number`, () => {
      expect(sol.fill(3)).to.deep.equal([3, 3, 3]);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.fill()).to.throw(TypeError);
      expect(() => sol.fill(sol.addb)).to.throw(TypeError);
      expect(() => sol.fill('40')).to.throw(TypeError);
      expect(() => sol.fill([])).to.throw(TypeError);
      expect(() => sol.fill([], 12)).to.throw(TypeError);
      expect(() => sol.fill({})).to.throw(TypeError);
      expect(() => sol.fill('40', 2)).to.throw(TypeError);
      expect(() => sol.fill({}, 2)).to.throw(TypeError);
      expect(() => sol.fill('foo', 'bar', 4)).to.throw(TypeError);
    });
  });


  describe('fillRecurse(num)', () => {
    it('does what fill does but uses recursion', () => {
      expect(sol.fillRecurse(3)).to.deep.equal([3, 3, 3]);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.fillRecurse()).to.throw(TypeError);
      expect(() => sol.fillRecurse(sol.addb)).to.throw(TypeError);
      expect(() => sol.fillRecurse('40')).to.throw(TypeError);
      expect(() => sol.fillRecurse([])).to.throw(TypeError);
      expect(() => sol.fillRecurse([])).to.throw(TypeError);
      expect(() => sol.fillRecurse({})).to.throw(TypeError);
      expect(() => sol.fillRecurse('foo')).to.throw(TypeError);
    });
  });
  describe('set(...args)', () => {
    it(`is given a list of arguments and returns an array with all duplicates
        removed`, () => {
      expect(sol.set(1, 1, 1, 2, 2, 2)).to.deep.equal([1, 2]);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.set(sol.addb)).to.throw(TypeError);
      expect(() => sol.set('40')).to.throw(TypeError);
      expect(() => sol.set([])).to.throw(TypeError);
      expect(() => sol.set([], 12)).to.throw(TypeError);
      expect(() => sol.set({})).to.throw(TypeError);
      expect(() => sol.set('40', 2)).to.throw(TypeError);
      expect(() => sol.set({}, 2)).to.throw(TypeError);
      expect(() => sol.set('foo', 'bar', 4)).to.throw(TypeError);
    });

    it('should throw a No arguments provided error if second argument are not a number', () => {
      expect(() => sol.set()).to.throw('No arguments provided.');
    });
  });

  describe('identityf(x)', () => {
    it('takes an argument and returns a function that returns that argument', () => {
      assert.equal(sol.identityf(3)(), 3);
    });
  });


  describe('addf(a)', () => {
    it('adds from two invocations', () => {
      assert.equal(sol.addf(3)(4), 7);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.addf()).to.throw(TypeError);
      expect(() => sol.addf(sol.addb)).to.throw(TypeError);
      expect(() => sol.addf('40')).to.throw(TypeError);
      expect(() => sol.addf([])).to.throw(TypeError);
      expect(() => sol.addf([], 12)).to.throw(TypeError);
      expect(() => sol.addf({})).to.throw(TypeError);
      expect(() => sol.addf('40', 2)).to.throw(TypeError);
      expect(() => sol.addf({}, 2)).to.throw(TypeError);
      expect(() => sol.addf('foo', 'bar', 4)).to.throw(TypeError);
    });
  });

  describe('liftf(binary)', () => {
    it('takes a binary function, and makes it callable with two invocations', () => {
      assert.equal(sol.liftf(sol.addb)(3)(4), 7);
      assert.equal(sol.liftf(sol.mulb)(5)(6), 30);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.liftf()).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)('foo')(4))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)([])(4))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)({})(4))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)()(4))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)(42)([]))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)(42)({}))).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)(42)())).to.throw(TypeError);
      expect(() => sol.liftf(sol.liftf(sol.addb)(sol.mulb)(4))).to.throw(TypeError);
    });
  });

  describe('pure(x,y)', () => {
    it('is a wrapper arround the impure function impure', () => {
      expect(sol.pure(20, 5)).to.deep.equal([6, 120]);
      expect(sol.pure(25, 6)).to.deep.equal([7, 175]);
    });
  });


  describe('curryb(binary, a)', () => {
    it(`takes a binary function and an argument, and returns a function that can take
        a second argument`, () => {
      assert.equal(sol.curryb(sol.addb, 3)(4), 7);
      assert.equal(sol.curryb(sol.mulb, 5)(6), 30);
    });

    it('should throw a TypeError if second argument are not a number', () => {
      expect(() => sol.curryb()).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, 3)([])).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, 3)({})).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, 3)()).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, 'foo')(4)).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, [])(4)).to.throw(TypeError);
      expect(() => sol.curryb(sol.addb, {})(4)).to.throw(TypeError);
      expect(() => sol.curryb([], 3)(4)).to.throw(TypeError);
      expect(() => sol.curryb({}, 3)(4)).to.throw(TypeError);
      expect(() => sol.curryb('foo', 3)(4)).to.throw(TypeError);
      expect(() => sol.curryb(3)(4)).to.throw(TypeError);
      expect(() => sol.curryb([])(4)).to.throw(TypeError);
    });
  });


  describe('curry(func, ...outer)', () => {
    it('is a curry function generalized for any amount of arguments', () => {
      assert.equal(sol.curry(sol.add, 1, 2, 4)(4, 2, 1), 14);
      assert.equal(sol.curry(sol.sub, 1, 2, 4)(4, 2, 1), -12);
      assert.equal(sol.curry(sol.mul, 1, 2, 4)(4, 2, 1), 64);
    });
  });


  describe('inc(x)', () => {
    it('shows multiple ways to create the inc function', () => {
      assert.equal(sol.inc(5), 6);
      assert.equal(sol.inc(sol.inc(5)), 7);
      assert.equal(sol.inc(sol.inc(sol.inc(5))), 8);
    });
  });


  describe('twiceUnary(binary)', () => {
    it(`takes a binary function and returns a unary function that passes its argument
        to the binary function twice`, () => {
      assert.equal(sol.twiceUnary(sol.addb)(11), 22);
      assert.equal(sol.twiceUnary(sol.mulb)(11), 121);
    });
  });


  describe('doubl(x)', () => {
    it('uses the function twiceUnary to create the doubl function', () => {
      assert.equal(sol.doubl(11), 22);
    });
  });

  describe('square(x)', () => {
    it('uses the function twiceUnary to create the square function', () => {
      assert.equal(sol.square(11), 121);
    });
  });

  describe('twice(x)', () => {
    it('is a twice function generalized for any amount of arguments', () => {
      assert.equal(sol.twice(sol.add)(1, 2, 4), 14);
    });
  });

  describe('reverseb(binary)', () => {
    it('reverses the arguments of a binary function', () => {
      assert.equal(sol.reverseb(sol.subb)(3, 2), -1);
    });
  });

  describe('reverse(func)', () => {
    it('is a reverse function generalized for any amount of arguments', () => {
      assert.equal(sol.reverse(sol.sub)(1, 2, 4), 1);
    });
  });

  describe('composeuTwo(unary1,unary2)', () => {
    it(`takes two unary functions and returns a unary function that calls them
        both`, () => {
      assert.equal(sol.composeuTwo(sol.doubl, sol.square)(5), 100);
    });
  });

  describe('composeu(...funcs)', () => {
    it('is a compose function generalized for any amount of arguments', () => {
      assert.equal(
        sol.composeu(
          sol.doubl,
          sol.square,
          sol.identity,
          sol.curry(sol.add, 1, 2),
        )(5),
        103,
      );
    });
  });

  describe('composeb(binary1,binary2)', () => {
    it('takes two binary functions and returns a function that calls them both', () => {
      assert.equal(sol.composeb(sol.addb, sol.mulb)(2, 3, 7), 35);
    });
  });

  describe('composeTwo(func1,func2)', () => {
    it('takes two functions and returns a function that calls them both', () => {
      assert.equal(sol.composeTwo(sol.add, sol.square)(2, 3, 7), 144);
    });
  });

  describe('compose(...funcs)', () => {
    it(`takes any amount of functions and returns a function that takes any amount of
        arguments and gives them to the first function, then that result to the
        second function and so on`, () => {
      assert.equal(
        sol.compose(sol.add, sol.doubl, sol.fill, sol.max)(0, 1, 2), 6);
    });
  });

  describe('limitb(binary, lmt)', () => {
    it('allows a binary function to be called a limited number of times', () => {
      const addlmtb = sol.limitb(sol.addb, 1);
      assert.equal(addlmtb(3, 4), 7);
      assert.equal(addlmtb(3, 5), undefined);
    });
  });

  describe('limit(func, lmt)', () => {
    it(`allows a function that is generalized for any amount of arguments
        to be called a limited number of times`, () => {
      const addlmt = sol.limit(sol.add, 1);
      assert.equal(addlmt(1, 2, 4), 7);
      assert.equal(addlmt(3, 5, 9, 2), undefined);
    });
  });

  describe('genFrom(x)', () => {
    it('produces a generator that will produces a series of values', () => {
      const index = sol.genFrom(0);
      assert.equal(index.next().value, 0);
      assert.equal(index.next().value, 1);
      assert.equal(index.next().value, 2);
    });
  });

  describe('genTo(x)', () => {
    it(`takes a generator and an end limit, and returns a generator that will
        produce numbers up to that limit`, () => {
      const index = sol.genTo(sol.genFrom(1), 3);
      assert.equal(index.next().value, 1);
      assert.equal(index.next().value, 2);
      assert.equal(index.next().value, undefined);
    });
  });

  describe('genFromTo(x)', () => {
    it('produces a generator that will produce values in a range', () => {
      const index = sol.genFromTo(0, 3);
      assert.equal(index.next().value, 0);
      assert.equal(index.next().value, 1);
      assert.equal(index.next().value, 2);
      assert.equal(index.next().value, undefined);
    });
    it('throws and error if start is greater than end', () => {
      const index = sol.genFromTo(3, 1);
      expect(() => index.next().value).to.throw('Start must not be greater than end');
    });
  });

  describe('elementGen(array,gen)', () => {
    it(`takes an array and a generator and returns a generator that will produce
        elements from the array`, () => {
      const ele = sol.elementGen(['a', 'b', 'c', 'd'], sol.genFromTo(1, 3));
      assert.equal(ele.next().value, 'b');
      assert.equal(ele.next().value, 'c');
      assert.equal(ele.next().value, undefined);
    });
  });

  describe('element(array,gen)', () => {
    it(`is a modified elementGen function so that the generator argument is optional.
        If a generator is not provided, then each of the elements of the array will
        be produced.`, () => {
      const ele = sol.element(['a', 'b', 'c', 'd']);
      assert.equal(ele.next().value, 'a');
      assert.equal(ele.next().value, 'b');
      assert.equal(ele.next().value, 'c');
      assert.equal(ele.next().value, 'd');
      assert.equal(ele.next().value, undefined);
    });
  });

  describe('collect(gen,array)', () => {
    it(`takes a generator and an array and produces a function that will collect the
        results in the array`, () => {
      const array = [];
      const col = sol.collect(sol.genFromTo(0, 2), array);
      assert.equal(col.next().value, 0);
      assert.equal(col.next().value, 1);
      assert.equal(col.next().value, undefined);
      expect(array).to.deep.equal([0, 1]);
    });
  });

  describe('filter(gen,predicate)', () => {
    it(`takes a generator and a predicate and produces a generator that produces only
        the values approved by the predicate`, () => {
      const fil = sol.filter(sol.genFromTo(0, 5), val => val % 3 === 0);
      assert.equal(fil.next().value, 0);
      assert.equal(fil.next().value, 3);
      assert.equal(fil.next().value, undefined);
    });
  });

  describe('filterTail(gen,predicate)', () => {
    it('uses tail-recursion to perform the filtering', () => {
      const fil = sol.filterTail(sol.genFromTo(0, 5), val => val % 3 === 0);
      assert.equal(fil.next().value, 0);
      assert.equal(fil.next().value, 3);
      assert.equal(fil.next().value, undefined);
    });
  });

  describe('concatTwo(gen1,gen2)', () => {
    it('takes two generators and produces a generator that combines the sequences', () => {
      const con = sol.concatTwo(sol.genFromTo(0, 3), sol.genFromTo(0, 2));
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, 2);
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, undefined);
    });
  });

  describe('concat(...gens)', () => {
    it('is generalized for any amount of arguments', () => {
      const con = sol.concat(
        sol.genFromTo(0, 3),
        sol.genFromTo(0, 2),
        sol.genFromTo(5, 7),
      );
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, 2);
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, 5);
      assert.equal(con.next().value, 6);
      assert.equal(con.next().value, undefined);
    });
  });

  describe('concatTail(...gens)', () => {
    it('uses tail-recursion to perform the concating', () => {
      const con = sol.concatTail(
        sol.genFromTo(0, 3),
        sol.genFromTo(0, 2),
        sol.genFromTo(5, 7),
      );
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, 2);
      assert.equal(con.next().value, 0);
      assert.equal(con.next().value, 1);
      assert.equal(con.next().value, 5);
      assert.equal(con.next().value, 6);
      assert.equal(con.next().value, undefined);
    });
  });

  describe('gensymf(symbol)', () => {
    it('makes a function that generates unique symbols', () => {
      const genG = sol.gensymf('G');
      const genH = sol.gensymf('H');
      assert.equal(genG.next().value, 'G1');
      assert.equal(genH.next().value, 'H1');
      assert.equal(genG.next().value, 'G2');
      assert.equal(genH.next().value, 'H2');
      assert.equal(genG.next().value, 'G3');
      assert.equal(genH.next().value, 'H3');
      assert.equal(genG.next().value, 'G4');
      assert.equal(genH.next().value, 'H4');
      assert.equal(genG.next().value, 'G5');
      assert.equal(genH.next().value, 'H5');
      assert.equal(genG.next().value, 'G6');
      assert.equal(genH.next().value, 'H6');
    });
  });

  describe('gensymff(unary, seed)', () => {
    it('takes a unary function and a seed and returns a gensymf', () => {
      const gensymf = sol.gensymff(sol.inc, 0);
      const genG = gensymf('G');
      const genH = gensymf('H');
      assert.equal(genG.next().value, 'G1');
      assert.equal(genH.next().value, 'H1');
      assert.equal(genG.next().value, 'G2');
      assert.equal(genH.next().value, 'H2');
    });
  });

  describe('fibonaccif(first, second)', () => {
    it('returns a generator that will return the next fibonacci number', () => {
      const fib = sol.fibonaccif(0, 1);
      assert.equal(fib.next().value, 0);
      assert.equal(fib.next().value, 1);
      assert.equal(fib.next().value, 1);
      assert.equal(fib.next().value, 2);
      assert.equal(fib.next().value, 3);
      assert.equal(fib.next().value, 5);
      assert.equal(fib.next().value, 8);
    });
    it('returns a generator that will return the next fibonacci number with different start val', () => {
      const fib = sol.fibonaccif(1, 2);
      assert.equal(fib.next().value, 1);
      assert.equal(fib.next().value, 2);
      assert.equal(fib.next().value, 3);
      assert.equal(fib.next().value, 5);
      assert.equal(fib.next().value, 8);
    });
  });

  describe('counter(i)', () => {
    it(`returns an object containing two functions that implement an up/down counter,
        hiding the counter`, () => {
      const obj = sol.counter(10);
      const { up, down } = obj;
      assert.equal(up(), 11);
      assert.equal(down(), 10);
      assert.equal(down(), 9);
      assert.equal(up(), 10);
    });
  });

  describe('revocableb(binary)', () => {
    it(`takes a binary function, and returns an object containing an invoke function
        that can invoke a function and a revoke function that disables the invoke
        function`, () => {
      const rev = sol.revocableb(sol.addb);
      assert.equal(rev.invoke(3, 4), 7);
      rev.revoke();
      assert.equal(rev.invoke(5, 7), undefined);
    });
  });

  describe('revocable(binary)', () => {
    it(`takes a function that is generalized for any amount of arguments, and returns
        an object containing an invoke function that can invoke a function and a revoke
        function that disables the invoke function`, () => {
      const rev = sol.revocable(sol.add);
      assert.equal(rev.invoke(3, 4), 7);
      rev.revoke();
      assert.equal(rev.invoke(5, 7), undefined);
    });
  });

  describe('extract(array,prop)', () => {
    it(`takes an array of objects and an object property name and converts each object
        in the array by extracting that property`, () => {
      const people = [{ name: 'john' }, { name: 'bob' }];
      expect(sol.extract(people, 'name')).to.deep.equal(['john', 'bob']);
    });
  });
  describe('m(value,source)', () => {
    it('takes a value and an optional source string and returns them in an object', () => {
      expect(sol.m(1)).to.deep.equal({ value: 1, source: '1' });
      expect(sol.m(Math.PI, 'pi')).to.deep.equal({
        value: Math.PI,
        source: 'pi',
      });
    });
  });
  describe('addmTwo(m1,m2)', () => {
    it('adds two m objects and returns an m object', () => {
      expect(sol.addmTwo(sol.m(3), sol.m(4))).to.deep.equal({
        value: 7,
        source: '(3+4)',
      });
      expect(sol.addmTwo(sol.m(1), sol.m(Math.PI, 'pi'))).to.deep.equal({
        value: Math.PI + 1,
        source: '(1+pi)',
      });
    });
  });

  describe('addm(...ms)', () => {
    it(`is a function that is generalized for any amount of arguments that adds m
        objects and returns an m object`, () => {
      expect(sol.addm(sol.m(1), sol.m(2), sol.m(4))).to.deep.equal({
        value: 7,
        source: '(1+2+4)',
      });
    });
  });

  describe('liftmbM(binary, op)', () => {
    it(`takes a binary function and a string and returns a function that acts on m
        objects`, () => {
      expect(sol.liftmbM(sol.addb, '+')(sol.m(3), sol.m(4))).to.deep.equal({
        value: 7,
        source: '(3+4)',
      });
      expect(sol.liftmbM(sol.mulb, '*')(sol.m(3), sol.m(4))).to.deep.equal({
        value: 12,
        source: '(3*4)',
      });
    });
  });

  describe('liftmb(binary, op)', () => {
    it(`is a modified function liftmbM that can accept arguments that are either numbers
        or m objects`, () => {
      expect(sol.liftmb(sol.addb, '+')(3, 4)).to.deep.equal({
        value: 7,
        source: '(3+4)',
      });
    });
  });

  describe('liftm(func, op)', () => {
    it(`is a modified function liftmbM that is generalized for any amount of arguments
        that can accept arguments that are either numbers or m objects`, () => {
      expect(sol.liftm(sol.addb, '+')(sol.m(3), sol.m(4))).to.deep.equal({
        value: 7,
        source: '(3+4)',
      });
      expect(sol.liftm(sol.mulb, '*')(sol.m(3), sol.m(4))).to.deep.equal({
        value: 12,
        source: '(3*4)',
      });
      expect(sol.liftm(sol.mulb, '*')(3, 4)).to.deep.equal({
        value: 12,
        source: '(3*4)',
      });
    });
  });

  describe('exp(value)', () => {
    it('evaluates simple array expressions', () => {
      assert.equal(sol.exp([sol.mul, 1, 2, 4]), 8);
      assert.equal(sol.exp(42), 42);
    });
  });

  describe('expn(value)', () => {
    it('is a modified exp that can evaluate nested array expressions', () => {
      assert.equal(
        sol.expn([Math.sqrt, [sol.add, [sol.square, 3], [sol.square, 4]]]),
        5,
      );
      assert.equal(sol.expn(34), 34);
    });
  });

  describe('addg(value)', () => {
    it('adds from many invocations, until it sees an empty invocation', () => {
      assert.equal(sol.addg(), undefined);
      assert.equal(sol.addg(2)(), 2);
      assert.equal(sol.addg(2)(7)(), 9);
      assert.equal(sol.addg(3)(0)(4)(), 7);
      assert.equal(sol.addg(1)(2)(4)(8)(), 15);
    });
  });

  describe('liftg(value)', () => {
    it('will take a binary function and apply it to many invocations', () => {
      assert.equal(sol.liftg(sol.mulb)(), undefined);
      assert.equal(sol.liftg(sol.mulb)(3)(), 3);
      assert.equal(sol.liftg(sol.mulb)(3)(0)(4)(), 0);
      assert.equal(sol.liftg(sol.mulb)(1)(2)(4)(8)(), 64);
    });
  });

  describe('arrayg(value)', () => {
    it('will build an array from many invocations', () => {
      expect(sol.arrayg()).to.deep.equal([]);
      expect(sol.arrayg(3)()).to.deep.equal([3]);
      expect(sol.arrayg(3)(4)(5)()).to.deep.equal([3, 4, 5]);
    });
  });

  describe('continuizeu(unary)', () => {
    beforeEach(function invocation() {
      this.sinon.stub(console, 'log');
    });
    it(`takes a unary function and returns a function
    that takes a callback and an argument`, () => {
      sol.continuizeu(Math.sqrt)(console.log, 81); // eslint-disable-line no-console
      expect(console.log.calledOnce).to.be.true; // eslint-disable-line
      // no-console, no-unused-expressions
      expect(console.log.calledWith(9)).to.be.true; // eslint-disable-line
      // no-console, no-unused-expressions
    });
  });

  describe('continuize(any)', () => {
    beforeEach(function invocation() {
      this.sinon.stub(console, 'log');
    });

    it(`takes a function and returns a function
       that takes a callback and an argument`, () => {
      sol.continuize(sol.mul)(console.log, 81, 4, 2);// eslint-disable-line
      // no-console, no-unused-expressions
      expect(console.log.calledOnce).to.be.true;// eslint-disable-line
      // no-console, no-unused-expressions
      expect(console.log.calledWith(648)).to.be.true;// eslint-disable-line
      // no-console, no-unused-expressions
    });
  });

  describe('vector()', () => {
    it(`is an array wrapper object with methods get, store, and append, such that an
        attacker cannot get access to the private array`, () => {
      const v = sol.vector();
      v.append(7);
      v.store(1, 8);
      assert.equal(v.get(0), 7);
      assert.equal(v.get(1), 8);
    });
  });

  describe('exploitVector()', () => {
    it('accesses array outside of vector', () => {
      const v = sol.vector();
      v.append(1);
      v.append(2);
      expect(sol.exploitVector(v)).to.deep.equal([1, 2]);
    });
  });

  describe('vectorSafe()', () => {
    it('can\'t access array outside of vector', () => {
      const v = sol.vectorSafe();
      v.append(1);
      v.append(2);
      expect(sol.exploitVector(v)).to.deep.equal(undefined);
    });
  });

  describe('pubsub()', () => {
    beforeEach(function invocation() {
      this.sinon.stub(console, 'log');
    });

    it(`makes a publish/subscribe object. It will reliably deliver all publications
        to all subscribers in the right order`, () => {
      const ps = sol.pubsub();
      ps.subscribe(console.log);// eslint-disable-line
      // no-console, no-unused-expressions
      ps.publish('It works!');

      expect(console.log.calledOnce).to.be.true;// eslint-disable-line
      // no-console, no-unused-expressions
      expect(console.log.calledWith("It works!")).to.be.true;// eslint-disable-line
      // no-console, no-unused-expressions
    });
  });

  describe('mapRecurse(array, predicate)', () => {
    it('performs a transformation for each element of a given array, recursively', () => {
      expect(sol.mapRecurse([1, 2, 3, 4], x => x * 2)).to.deep.equal([
        2, 4, 6, 8,
      ]);
    });
  });

  describe('filterRecurse(array, predicate)', () => {
    it(`takes in an array and a predicate function and returns a new array by
        filtering out all items using the predicate, recursively.`, () => {
      expect(sol.filterRecurse([1, 2, 3, 4], x => x % 2 === 0)).to.deep.equal(
        [2, 4],
      );
    });
  });
});