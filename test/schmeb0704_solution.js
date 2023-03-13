const assert = require('chai').assert;
const expect = require('chai').expect;
const filename = 'schmeb0704_solution.js';
const sol = require('../Solutions/' + filename);
require('mocha-sinon');


describe("JS_Fun_Practice", function () {
//   describe("identity()", function () {
//     it("takes an argument and returns that argument", function () {
//       assert.equal(sol.identity(3), 3);
//     });
//   });
//   describe("addb(a,b)", function () {
//     it("takes two numbers and returns their sum", function () {
//       assert.equal(sol.addb(3, 4), 7);
//     });
//   });
//   describe("subb(a,b)", function () {
//     it("takes two numbers and returns their difference", function () {
//       assert.equal(sol.subb(3, 4), -1);
//     });
//   });
//   describe("mulb(a,b)", function () {
//     it("takes two numbers and returns their product", function () {
//       assert.equal(sol.mulb(3, 4), 12);
//     });
//   });
//   describe("minb(a,b)", function () {
//     it("takes two numbers and returns the smaller one", function () {
//       assert.equal(sol.minb(3, 4), 3);
//     });
//   });
//   describe("maxb(a,b)", function () {
//     it("takes two numbers and returns the larger one", function () {
//       assert.equal(sol.maxb(3, 4), 4);
//     });
//   });
//   describe("add(...nums)", function () {
//     it("is an add fuction that is generalized for any amount of arguments", function () {
//       assert.equal(sol.add(1, 2, 4), 7);
//     });
//   });
//   describe("sub(...nums)", function () {
//     it("is a sub fuction that is generalized for any amount of arguments", function () {
//       assert.equal(sol.sub(1, 2, 4), -5);
//     });
//   });
//   describe("mul(...nums)", function () {
//     it("is a mul fuction that is generalized for any amount of arguments", function () {
//       assert.equal(sol.mul(1, 2, 4), 8);
//     });
//   });
//   describe("min(...nums)", function () {
//     it("is a min fuction that is generalized for any amount of arguments", function () {
//       assert.equal(sol.min(1, 2, 4), 1);
//     });
//   });
//   describe("max(...nums)", function () {
//     it("is a max fuction that is generalized for any amount of arguments", function () {
//       assert.equal(sol.max(1, 2, 4), 4);
//     });
//   });
//   describe("addRecurse(...nums)", function () {
//     it("is an add fuction that is generalized but uses recursion", function () {
//       assert.equal(sol.addRecurse(1, 2, 4), 7);
//     });
//   });
//   describe("mulRecurse(...nums)", function () {
//     it("is a mul fuction that is generalized but uses recursion", function () {
//       assert.equal(sol.mulRecurse(1, 2, 4), 8);
//     });
//   });
  // describe("minRecurse(...nums)", function () {
  //   it("is a min fuction that is generalized but uses recursion", function () {
  //     assert.equal(sol.minRecurse(1, 2, 4), 1);
  //   });
  // });
  // describe("maxRecurse(...nums)", function () {
  //   it("is a max fuction that is generalized but uses recursion", function () {
  //     assert.equal(sol.maxRecurse(1, 2, 4), 4);
  //   });
  // });
  // describe("not(func)", function () {
  //   it("takes a function and returns the negation of its result", function () {
  //     const isOdd = (x) => x % 2 === 1;
  //     const isEven = sol.not(isOdd);
  //     assert.equal(isEven(1), false);
  //     assert.equal(isEven(2), true);
  //   });
  // });
  // describe("acc(func,initial)", function () {
  //   it(`takes a function and an initial value and returns a function
  //       that runs the initial function on each argument, accumulating the result`, function () {
  //     let add = sol.acc(sol.addb, 0);
  //     assert.equal(add(1, 2, 4), 7);

  //     let mul = sol.acc(sol.mulb, 1);
  //     assert.equal(mul(1, 2, 4), 8);
  //   });
  // });
  // describe("accPartial(func,start,end)", function () {
  //   it(`takes in a function, a start index, and an end index, and returns a function
  //       that accumulates a subset of its arguments by applying the given function to
  //       all elements between start and end`, function () {
  //     const addSecondToThird = sol.accPartial(sol.add, 1, 3);
  //     expect(addSecondToThird(1, 2, 4, 8)).to.deep.equal([1, 6, 8]);
  //   });
  // });
  // describe("accRecurse(func,initial)", function () {
  //   it(`does what acc does but uses recursion`, function () {
  //     let add = sol.accRecurse(sol.addb, 0);
  //     assert.equal(add(1, 2, 4), 7);

  //     let mul = sol.accRecurse(sol.mulb, 1);
  //     assert.equal(mul(1, 2, 4), 8);
  //   });
  // });
  // describe("fill(num)", function () {
  //   it(`takes a number and returns an array with that many numbers equal to the given
  //       number`, function () {
  //     expect(sol.fill(3)).to.deep.equal([3, 3, 3]);
  //   });
  // });
  // describe("fillRecurse(num)", function () {
  //   it(`does what fill does but uses recursion`, function () {
  //     expect(sol.fillRecurse(3)).to.deep.equal([3, 3, 3]);
  //   });
  // });
  // describe("set(...args)", function () {
  //   it(`is given a list of arguments and returns an array with all duplicates
  //       removed`, function () {
  //     expect(sol.set(1, 1, 1, 2, 2, 2)).to.deep.equal([1, 2]);
  //   });
  // });
  // describe("identityf(x)", function () {
  //   it(`takes an argument and returns a function that returns that argument`, function () {
  //     assert.equal(sol.identityf(3)(), 3);
  //   });
  // });
  // describe("addf(a)", function () {
  //   it(`adds from two invocations`, function () {
  //     assert.equal(sol.addf(3)(4), 7);
  //   });
  // });
  // describe("liftf(binary)", function () {
  //   it(`takes a binary function, and makes it callable with two invocations`, function () {
  //     assert.equal(sol.liftf(sol.addb)(3)(4), 7);
  //     assert.equal(sol.liftf(sol.mulb)(5)(6), 30);
  //   });
  // });
  // describe("pure(x,y)", function () {
  //   it(`is a wrapper arround the impure function impure`, function () {
  //     expect(sol.pure(20, 5)).to.deep.equal([6, 120]);
  //     expect(sol.pure(25, 6)).to.deep.equal([7, 175]);
  //   });
  // });
  // describe("curryb(binary, a)", function () {
  //   it(`takes a binary function and an argument, and returns a function that can take
  //       a second argument`, function () {
  //     assert.equal(sol.curryb(sol.addb, 3)(4), 7);
  //     assert.equal(sol.curryb(sol.mulb, 5)(6), 30);
  //   });
  // });
  // describe("curry(func, ...outer)", function () {
  //   it(`is a curry function generalized for any amount of arguments`, function () {
  //     assert.equal(sol.curry(sol.add, 1, 2, 4)(4, 2, 1), 14);
  //     assert.equal(sol.curry(sol.sub, 1, 2, 4)(4, 2, 1), -12);
  //     assert.equal(sol.curry(sol.mul, 1, 2, 4)(4, 2, 1), 64);
  //   });
  // });
  // describe("inc(x)", function () {
  //   it(`shows multiple ways to create the inc function`, function () {
  //     assert.equal(sol.inc(5), 6);
  //     assert.equal(sol.inc(sol.inc(5)), 7);
  //   });
  // });
  describe("twiceUnary(binary)", function () {
    it(`takes a binary function and returns a unary function that passes its argument
        to the binary function twice`, function () {
      assert.equal(sol.twiceUnary(sol.addb)(11), 22);
      assert.equal(sol.twiceUnary(sol.mulb)(11), 121);
    });
  });
  describe("doubl(x)", function () {
    it(`uses the function twiceUnary to create the doubl function`, function () {
      assert.equal(sol.doubl(11), 22);
    });
  });
  describe("square(x)", function () {
    it(`uses the function twiceUnary to create the square function`, function () {
      assert.equal(sol.square(11), 121);
    });
  });
  // describe("twice(x)", function () {
  //   it(`is a twice function generalized for any amount of arguments`, function () {
  //     assert.equal(sol.twice(sol.add)(1, 2, 4), 14);
  //   });
  // });
  // describe("reverseb(binary)", function () {
  //   it(`reverses the arguments of a binary function`, function () {
  //     assert.equal(sol.reverseb(sol.subb)(3, 2), -1);
  //   });
  // });
  // describe("reverse(func)", function () {
  //   it(`is a reverse function generalized for any amount of arguments`, function () {
  //     assert.equal(sol.reverse(sol.sub)(1, 2, 4), 1);
  //   });
  // });
  // describe("composeuTwo(unary1,unary2)", function () {
  //   it(`takes two unary functions and returns a unary function that calls them
  //       both`, function () {
  //     assert.equal(sol.composeuTwo(sol.doubl, sol.square)(5), 100);
  //   });
  // });
  // describe("composeu(...funcs)", function () {
  //   it(`is a compose function generalized for any amount of arguments`, function () {
  //     assert.equal(
  //       sol.composeu(
  //         sol.doubl,
  //         sol.square,
  //         sol.identity,
  //         sol.curry(sol.add, 1, 2)
  //       )(5),
  //       103
  //     );
  //   });
  // });
  // describe("composeb(binary1,binary2)", function () {
  //   it(`takes two binary functions and returns a function that calls them both`, function () {
  //     assert.equal(sol.composeb(sol.addb, sol.mulb)(2, 3, 7), 35);
  //   });
  // });
  // describe("composeTwo(func1,func2)", function () {
  //   it(`takes two functions and returns a function that calls them both`, function () {
  //     assert.equal(sol.composeTwo(sol.add, sol.square)(2, 3, 7), 144);
  //   });
  // });
  // describe("compose(...funcs)", function () {
  //   it(`takes any amount of functions and returns a function that takes any amount of
  //       arguments and gives them to the first function, then that result to the
  //       second function and so on`, function () {
  //     assert.equal(
  //       sol.compose(sol.add, sol.doubl, sol.fill, sol.max)(0, 1, 2),
  //       6
  //     );
  //   });
  // });
  // describe("limitb(binary, lmt)", function () {
  //   it(`allows a binary function to be called a limited number of times`, function () {
  //     let addlmtb = sol.limitb(sol.addb, 1);
  //     assert.equal(addlmtb(3, 4), 7);
  //     assert.equal(addlmtb(3, 5), undefined);
  //   });
  // });
  // describe("limit(func, lmt)", function () {
  //   it(`allows a function that is generalized for any amount of arguments
  //       to be called a limited number of times`, function () {
  //     let addlmt = sol.limit(sol.add, 1);
  //     assert.equal(addlmt(1, 2, 4), 7);
  //     assert.equal(addlmt(3, 5, 9, 2), undefined);
  //   });
  // });
  // describe("genFrom(x)", function () {
  //   it(`produces a generator that will produces a series of values`, function () {
  //     let index = sol.genFrom(0);
  //     assert.equal(index.next().value, 0);
  //     assert.equal(index.next().value, 1);
  //     assert.equal(index.next().value, 2);
  //   });
  // });
  // describe("genTo(x)", function () {
  //   it(`takes a generator and an end limit, and returns a generator that will
  //       produce numbers up to that limit`, function () {
  //     let index = sol.genTo(sol.genFrom(1), 3);
  //     assert.equal(index.next().value, 1);
  //     assert.equal(index.next().value, 2);
  //     assert.equal(index.next().value, undefined);
  //   });
  // });
  // describe("genFromTo(x)", function () {
  //   it(`produces a generator that will produce values in a range`, function () {
  //     let index = sol.genFromTo(0, 3);
  //     assert.equal(index.next().value, 0);
  //     assert.equal(index.next().value, 1);
  //     assert.equal(index.next().value, 2);
  //     assert.equal(index.next().value, undefined);
  //   });
  // });
  // describe("elementGen(array,gen)", function () {
  //   it(`takes an array and a generator and returns a generator that will produce
  //       elements from the array`, function () {
  //     let ele = sol.elementGen(["a", "b", "c", "d"], sol.genFromTo(1, 3));
  //     assert.equal(ele.next().value, "b");
  //     assert.equal(ele.next().value, "c");
  //     assert.equal(ele.next().value, undefined);
  //   });
  // });
  // describe("element(array,gen)", function () {
  //   it(`is a modified elementGen function so that the generator argument is optional.
  //       If a generator is not provided, then each of the elements of the array will
  //       be produced.`, function () {
  //     let ele = sol.element(["a", "b", "c", "d"]);
  //     assert.equal(ele.next().value, "a");
  //     assert.equal(ele.next().value, "b");
  //     assert.equal(ele.next().value, "c");
  //     assert.equal(ele.next().value, "d");
  //     assert.equal(ele.next().value, undefined);
  //   });
  // });
  // describe("collect(gen,array)", function () {
  //   it(`takes a generator and an array and produces a function that will collect the
  //       results in the array`, function () {
  //     let array = [];
  //     let col = sol.collect(sol.genFromTo(0, 2), array);
  //     assert.equal(col.next().value, 0);
  //     assert.equal(col.next().value, 1);
  //     assert.equal(col.next().value, undefined);
  //     expect(array).to.deep.equal([0, 1]);
  //   });
  // });
  // describe("filter(gen,predicate)", function () {
  //   it(`takes a generator and a predicate and produces a generator that produces only
  //       the values approved by the predicate`, function () {
  //     let fil = sol.filter(sol.genFromTo(0, 5), (val) => val % 3 === 0);
  //     assert.equal(fil.next().value, 0);
  //     assert.equal(fil.next().value, 3);
  //     assert.equal(fil.next().value, undefined);
  //   });
  // });
  // describe("filterTail(gen,predicate)", function () {
  //   it(`uses tail-recursion to perform the filtering`, function () {
  //     let fil = sol.filterTail(sol.genFromTo(0, 5), (val) => val % 3 === 0);
  //     assert.equal(fil.next().value, 0);
  //     assert.equal(fil.next().value, 3);
  //     assert.equal(fil.next().value, undefined);
  //   });
  // });
  // describe("concatTwo(gen1,gen2)", function () {
  //   it(`takes two generators and produces a generator that combines the sequences`, function () {
  //     let con = sol.concatTwo(sol.genFromTo(0, 3), sol.genFromTo(0, 2));
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, 2);
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, undefined);
  //   });
  // });
  // describe("concat(...gens)", function () {
  //   it(`is generalized for any amount of arguments`, function () {
  //     let con = sol.concat(
  //       sol.genFromTo(0, 3),
  //       sol.genFromTo(0, 2),
  //       sol.genFromTo(5, 7)
  //     );
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, 2);
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, 5);
  //     assert.equal(con.next().value, 6);
  //     assert.equal(con.next().value, undefined);
  //   });
  // });
  // describe("concatTail(...gens)", function () {
  //   it(`uses tail-recursion to perform the concating`, function () {
  //     let con = sol.concatTail(
  //       sol.genFromTo(0, 3),
  //       sol.genFromTo(0, 2),
  //       sol.genFromTo(5, 7)
  //     );
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, 2);
  //     assert.equal(con.next().value, 0);
  //     assert.equal(con.next().value, 1);
  //     assert.equal(con.next().value, 5);
  //     assert.equal(con.next().value, 6);
  //     assert.equal(con.next().value, undefined);
  //   });
  // });
  // describe("gensymf(symbol)", function () {
  //   it(`makes a function that generates unique symbols`, function () {
  //     let genG = sol.gensymf("G");
  //     let genH = sol.gensymf("H");
  //     assert.equal(genG.next().value, "G1");
  //     assert.equal(genH.next().value, "H1");
  //     assert.equal(genG.next().value, "G2");
  //     assert.equal(genH.next().value, "H2");
  //   });
  // });
  // describe("gensymff(unary, seed)", function () {
  //   it(`takes a unary function and a seed and returns a gensymf`, function () {
  //     let gensymf = sol.gensymff(sol.inc, 0);
  //     let genG = gensymf("G");
  //     let genH = gensymf("H");
  //     assert.equal(genG.next().value, "G1");
  //     assert.equal(genH.next().value, "H1");
  //     assert.equal(genG.next().value, "G2");
  //     assert.equal(genH.next().value, "H2");
  //   });
  // });
  // describe("fibonaccif(first, second)", function () {
  //   it(`returns a generator that will return the next fibonacci number`, function () {
  //     let fib = sol.fibonaccif(0, 1);
  //     assert.equal(fib.next().value, 0);
  //     assert.equal(fib.next().value, 1);
  //     assert.equal(fib.next().value, 1);
  //     assert.equal(fib.next().value, 2);
  //     assert.equal(fib.next().value, 3);
  //     assert.equal(fib.next().value, 5);
  //     assert.equal(fib.next().value, 8);
  //   });
  // });
  // describe("counter(i)", function () {
  //   it(`returns an object containing two functions that implement an up/down counter,
  //       hiding the counter`, function () {
  //     let obj = sol.counter(10);
  //     let { up, down } = obj;
  //     assert.equal(up(), 11);
  //     assert.equal(down(), 10);
  //     assert.equal(down(), 9);
  //     assert.equal(up(), 10);
  //   });
  // });
  // describe("revocableb(binary)", function () {
  //   it(`takes a binary function, and returns an object containing an invoke function
  //       that can invoke a function and a revoke function that disables the invoke
  //       function`, function () {
  //     let rev = sol.revocableb(sol.addb);
  //     assert.equal(rev.invoke(3, 4), 7);
  //     rev.revoke();
  //     assert.equal(rev.invoke(5, 7), undefined);
  //   });
  // });
  // describe("revocable(binary)", function () {
  //   it(`takes a function that is generalized for any amount of arguments, and returns
  //       an object containing an invoke function that can invoke a function and a revoke
  //       function that disables the invoke function`, function () {
  //     let rev = sol.revocable(sol.add);
  //     assert.equal(rev.invoke(3, 4), 7);
  //     rev.revoke();
  //     assert.equal(rev.invoke(5, 7), undefined);
  //   });
  // });
  // describe("extract(array,prop)", function () {
  //   it(`takes an array of objects and an object property name and converts each object
  //       in the array by extracting that property`, function () {
  //     let people = [{ name: "john" }, { name: "bob" }];
  //     expect(sol.extract(people, "name")).to.deep.equal(["john", "bob"]);
  //   });
  // });
  // describe("m(value,source)", function () {
  //   it(`takes a value and an optional source string and returns them in an object`, function () {
  //     expect(sol.m(1)).to.deep.equal({ value: 1, source: "1" });
  //     expect(sol.m(Math.PI, "pi")).to.deep.equal({
  //       value: Math.PI,
  //       source: "pi",
  //     });
  //   });
  // });
  // describe("addmTwo(m1,m2)", function () {
  //   it(`adds two m objects and returns an m object`, function () {
  //     expect(sol.addmTwo(sol.m(3), sol.m(4))).to.deep.equal({
  //       value: 7,
  //       source: "(3+4)",
  //     });
  //     expect(sol.addmTwo(sol.m(1), sol.m(Math.PI, "pi"))).to.deep.equal({
  //       value: Math.PI + 1,
  //       source: "(1+pi)",
  //     });
  //   });
  // });
  // describe("addm(...ms)", function () {
  //   it(`is a function that is generalized for any amount of arguments that adds m
  //       objects and returns an m object`, function () {
  //     expect(sol.addm(sol.m(1), sol.m(2), sol.m(4))).to.deep.equal({
  //       value: 7,
  //       source: "(1+2+4)",
  //     });
  //   });
  // });
  // describe("liftmbM(binary, op)", function () {
  //   it(`takes a binary function and a string and returns a function that acts on m
  //       objects`, function () {
  //     expect(sol.liftmbM(sol.addb, "+")(sol.m(3), sol.m(4))).to.deep.equal({
  //       value: 7,
  //       source: "(3+4)",
  //     });
  //     expect(sol.liftmbM(sol.mulb, "*")(sol.m(3), sol.m(4))).to.deep.equal({
  //       value: 12,
  //       source: "(3*4)",
  //     });
  //   });
  // });
  // describe("liftmb(binary, op)", function () {
  //   it(`is a modified function liftmbM that can accept arguments that are either numbers
  //       or m objects`, function () {
  //     expect(sol.liftmb(sol.addb, "+")(3, 4)).to.deep.equal({
  //       value: 7,
  //       source: "(3+4)",
  //     });
  //   });
  // });
  // describe("liftm(func, op)", function () {
  //   it(`is a modified function liftmbM that is generalized for any amount of arguments
  //       that can accept arguments that are either numbers or m objects`, function () {
  //     expect(sol.liftm(sol.addb, "+")(sol.m(3), sol.m(4))).to.deep.equal({
  //       value: 7,
  //       source: "(3+4)",
  //     });
  //     expect(sol.liftm(sol.mulb, "*")(sol.m(3), sol.m(4))).to.deep.equal({
  //       value: 12,
  //       source: "(3*4)",
  //     });
  //     expect(sol.liftm(sol.mulb, "*")(3, 4)).to.deep.equal({
  //       value: 12,
  //       source: "(3*4)",
  //     });
  //   });
  // });
  // describe("exp(value)", function () {
  //   it(`evaluates simple array expressions`, function () {
  //     assert.equal(sol.exp([sol.mul, 1, 2, 4]), 8);
  //     assert.equal(sol.exp(42), 42);
  //   });
  // });
  // describe("expn(value)", function () {
  //   it(`is a modified exp that can evaluate nested array expressions`, function () {
  //     assert.equal(
  //       sol.expn([Math.sqrt, [sol.add, [sol.square, 3], [sol.square, 4]]]),
  //       5
  //     );
  //     // assert.equal(sol.expn(34), 34);
  //   });
  // });
  // describe("addg(value)", function () {
  //   it(`adds from many invocations, until it sees an empty invocation`, function () {
  //     assert.equal(sol.addg(), undefined);
  //     assert.equal(sol.addg(2)(), 2);
  //     assert.equal(sol.addg(2)(7)(), 9);
  //     assert.equal(sol.addg(3)(0)(4)(), 7);
  //     assert.equal(sol.addg(1)(2)(4)(8)(), 15);
  //   });
  // });
  // describe("liftg(value)", function () {
  //   it(`will take a binary function and apply it to many invocations`, function () {
  //     assert.equal(sol.liftg(sol.mulb)(), undefined);
  //     assert.equal(sol.liftg(sol.mulb)(3)(), 3);
  //     assert.equal(sol.liftg(sol.mulb)(3)(0)(4)(), 0);
  //     assert.equal(sol.liftg(sol.mulb)(1)(2)(4)(8)(), 64);
  //   });
  // });
  // describe("arrayg(value)", function () {
  //   it(`will build an array from many invocations`, function () {
  //     expect(sol.arrayg()).to.deep.equal([]);
  //     expect(sol.arrayg(3)()).to.deep.equal([3]);
  //     expect(sol.arrayg(3)(4)(5)()).to.deep.equal([3, 4, 5]);
  //   });
  // });
  // describe("continuizeu(unary)", function () {
  //   beforeEach(function () {
  //     this.sinon.stub(console, "log");
  //   });

  //   it(`takes a unary function and returns a function that takes a callback and an argument`, function () {
  //     sol.continuizeu(Math.sqrt)(console.log, 81);
  //     expect(console.log.calledOnce).to.be.true;
  //     expect(console.log.calledWith(9)).to.be.true;
  //   });
  // });
  // describe("continuize(any)", function () {
  //   beforeEach(function () {
  //     this.sinon.stub(console, "log");
  //   });

  //   it(`takes a function and returns a function that takes a callback and an argument`, function () {
  //     sol.continuize(sol.mul)(console.log, 81, 4, 2);
  //     expect(console.log.calledOnce).to.be.true;
  //     expect(console.log.calledWith(648)).to.be.true;
  //   });
  // });
  // describe("vector()", function () {
  //   it(`is an array wrapper object with methods get, store, and append, such that an
  //       attacker cannot get access to the private array`, function () {
  //     let v = sol.vector();
  //     v.append(7);
  //     v.store(1, 8);
  //     assert.equal(v.get(0), 7);
  //     assert.equal(v.get(1), 8);
  //   });
  // });
  // describe("exploitVector()", function () {
  //   it(`accesses array outside of vector`, function () {
  //     let v = sol.vector();
  //     v.append(1);
  //     v.append(2);
  //     expect(sol.exploitVector(v)).to.deep.equal([1, 2]);
  //   });
  // });
  // describe("vectorSafe()", function () {
  //   it(`can't access array outside of vector`, function () {
  //     let v = sol.vectorSafe();
  //     v.append(1);
  //     v.append(2);
  //     expect(sol.exploitVector(v)).to.deep.equal(undefined);
  //   });
  // });
  // describe("pubsub()", function () {
  //   beforeEach(function () {
  //     this.sinon.stub(console, "log");
  //   });

  //   it(`makes a publish/subscribe object. It will reliably deliver all publications
  //       to all subscribers in the right order`, function () {
  //     let ps = sol.pubsub();
  //     ps.subscribe(console.log);
  //     ps.publish("It works!");

  //     expect(console.log.calledOnce).to.be.true;
  //     expect(console.log.calledWith("It works!")).to.be.true;
  //   });
  // });
  // describe("mapRecurse(array, predicate)", function () {
  //   it(`performs a transformation for each element of a given array, recursively`, function () {
  //     expect(sol.mapRecurse([1, 2, 3, 4], (x) => x * 2)).to.deep.equal([
  //       2, 4, 6, 8,
  //     ]);
  //   });
  // });
  // describe("filterRecurse(array, predicate)", function () {
  //   it(`takes in an array and a predicate function and returns a new array by
  //       filtering out all items using the predicate, recursively.`, function () {
  //     expect(sol.filterRecurse([1, 2, 3, 4], (x) => x % 2 === 0)).to.deep.equal(
  //       [2, 4]
  //     );
  //   });
  // });
});
