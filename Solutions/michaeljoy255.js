// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument
const identity = (x) => x

// addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a+b

// subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a-b


// mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a*b

// minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b

// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b

// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, num) => acc+num)

// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, num) => acc-num)

// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, num) => acc*num)

// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((acc, num) => acc < num ? acc : acc = num)

// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((acc, num) => acc > num ? acc : acc = num)

// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.length ? nums[0] + addRecurse(...nums.slice(1)) : 0

// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.length ? nums[0] * mulRecurse(...nums.slice(1)) : 1

// minRecurse(...nums) ⇒ number
// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0]
  const secondNum = minRecurse(...nums.slice(1))
  if (nums[0] < secondNum) return nums[0]
  return secondNum
}

// maxRecurse(...nums) ⇒ number
// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0]
  const secondNum = maxRecurse(...nums.slice(1))
  if (nums[0] > secondNum) return nums[0]
  return secondNum
}

// not(func) ⇒ function
// Write a function not that takes a function and returns the negation of its result
const not = (func) => (x) => !func(x)

// acc(func, initial) ⇒ function
// Write a function acc that takes a function and an initial value and returns a function that runs
// the initial function on each argument, accumulating the result
const acc = (func, initial) => {}

// accPartial(func, start, end) ⇒ function
// Write a function accPartial that takes in a function, a start index, and an end index, and
// returns a function that accumulates a subset of its arguments by applying the given function to
// all elements between start and end.
const accPartial = (func, start, end) => {}

// accRecurse(func, initial) ⇒ function
// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => {}

// fill(num) ⇒ array
// Write a function fill that takes a number and returns an array with that many numbers equal to
// the given number
const fill = (num) => [...Array(num)].map(() => num)

// fillRecurse(num) ⇒ array
// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num) => {}

// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates
// removed
const set = (...args) => {}

// identityf(x) ⇒ function
// Write a function identityf that takes an argument and returns a function that returns that
// argument
const identityf = (x) => {}

// addf(a) ⇒ function
// Write a function addf that adds from two invocations
const addf = (a) => {}

// liftf(binary) ⇒ function
// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (binary) => {}

// pure(x, y) ⇒ array
// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => {}

// function impure(x) {
//   y++;
//   z = x * y;
// }
// var y = 5, z;

// impure(20);
// z; // 120

// impure(25);
// z; // 175

// curryb(binary, a) ⇒ function
// Write a function curryb that takes a binary function and an argument, and returns a function that
// can take a second argument
const curryb = (binary, a) => {}

// curry(func, ...outer) ⇒ function
// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...outer) => {}

// inc(x) ⇒ number
// Without writting any new functions, show multiple ways to create the inc function
const inc = (x) => {}

// twiceUnary(binary) ⇒ function
// Write a function twiceUnary that takes a binary function and returns a unary function that passes
// its argument to the binary function twice
const twiceUnary = (binary) => {}

// doubl(x) ⇒ number
// Use the function twiceUnary to create the doubl function
const doubl = (x) => {}

// square(x) ⇒ number
// Use the function twiceUnary to create the square function
const square = (x) => {}

// twice(x) ⇒ any
// Write a function twice that is generalized for any amount of arguments
const twice = (x) => {}

// reverseb(binary) ⇒ function
// Write a function reverseb that reverses the arguments of a binary function
const reverseb = (binary) => {}

// reverse(func) ⇒ function
// Write a function reverse that is generalized for any amount of arguments
const reverse = (func) => {}

// composeuTwo(unary1, unary2) ⇒ function
// Write a function composeuTwo that takes two unary functions and returns a unary function that
// calls them both
const composeuTwo = (unary1, unary2) => {}

// composeu(...funcs) ⇒ any
// Write a function composeu that is generalized for any amount of arguments
const composeu = (...funcs) => {}

// composeb(binary1, binary2) ⇒ function
// Write a function composeb that takes two binary functions and returns a function that calls them
// both
const composeb = (binary1, binary2) => {}

// composeTwo(func1, func2) ⇒ function
// Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (func1, func2) => {}

// compose(...funcs) ⇒ function
// Write a function compose that takes any amount of functions and returns a function that takes any
// amount of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...funcs) => {}

// limitb(binary, lmt) ⇒ function
// Write a function limitb that allows a binary function to be called a limited number of times
const limitb = (binary, lmt) => {}

// limit(func, lmt) ⇒ function
// Write a function limit that is generalized for any amount of arguments
const limit = (func, lmt) => {}

// genFrom(x) ⇒ function
// Write a function genFrom that produces a generator that will produces a series of values
const genFrom = (x) => {}

// genTo(gen, lmt) ⇒ function
// Write a function genTo that takes a generator and an end limit, and returns a generator that will
// produce numbers up to that limit
const genTo = (gen, lmt) => {}

// genFromTo(start, end) ⇒ function
// Write a function genFromTo that produces a generator that will produce values in a range
const genFromTo = (start, end) => {}

// elementGen(array, gen) ⇒ function
// Write a function elementGen that takes an array and a generator and returns a generator that will
// produce elements from the array
const elementGen = (array, gen) => {}

// element(array, gen) ⇒ function
// Write a function element that is a modified elementGen function so that the generator argument is
// optional. If a generator is not provided, then each of the elements of the array will be produced.
const element = (array, gen) => {}

// collect(gen, array) ⇒ function
// Write a function collect that takes a generator and an array and produces a function that will
// collect the results in the array
const collect = (gen, array) => {}

// filter(gen, predicate) ⇒ function
// Write a function filter that takes a generator and a predicate and produces a generator that
// produces only the values approved by the predicate
const filter = (gen, predicate) => {}

// filterTail(gen, predicate) ⇒ function
// Write a function filterTail that uses tail-recursion to perform the filtering
const filterTail = (gen, predicate) => {}

// concatTwo(gen1, gen2) ⇒ function
// Write a function concatTwo that takes two generators and produces a generator that combines the
// sequences
const concatTwo = (gen1, gen2) => {}

// concat(...gens) ⇒ function
// Write a function concat that is generalized for any amount of arguments
const concat = (...gens) => {}

// concatTail(...gens) ⇒ function
// Write a function concatTail that uses tail-recursion to perform the concating
const concatTail = (...gens) => {}

// gensymf(symbol) ⇒ function
// Write a function gensymf that makes a function that generates unique symbols
const gensymf = (symbol) => {}

// gensymff(unary, seed) ⇒ function
// Write a function gensymff that takes a unary function and a seed and returns a gensymf
const gensymff = (unary, seed) => {}

// fibonaccif(first, second) ⇒ function
// Write a function fibonaccif that returns a generator that will return the next fibonacci number
const fibonaccif = (first, second) => {}

// counter(i) ⇒ object
// Write a function counter that returns an object containing two functions that implement an
// up/down counter, hiding the counter
const counter = (i) => {}

// revocableb(binary) ⇒ object
// Write a function revocableb that takes a binary function, and returns an object containing an
// invoke function that can invoke a function and a revoke function that disables the invoke function
const revocableb = (binary) => {}

// revocable(func) ⇒ object
// Write a function revocable that is generalized for any amount of arguments
const revocable = (func) => {}

// extract(array, prop) ⇒ array
// Write a function extract that takes an array of objects and an object property name and converts
// each object in the array by extracting that property
const extract = (array, prop) => {}

// m(value, source) ⇒ object
// Write a function m that takes a value and an optional source string and returns them in an object
const m = (value, source) => {}

// addmTwo(m1, m2) ⇒ object
// Write a function addmTwo that adds two m objects and returns an m object
const addmTwo = (m1, m2) => {}

// addm(...ms) ⇒ object
// Write a function addm that is generalized for any amount of arguments
const addm = (...ms) => {}

// liftmbM(binary, op) ⇒ object
// Write a function liftmbM that takes a binary function and a string and returns a function that
// acts on m objects
const liftmbM = (binary, op) => {}

// liftmb(binary, op) ⇒ object
// Write a function liftmb that is a modified function liftmbM that can accept arguments that are
// either numbers or m objects
const liftmb = (binary, op) => {}

// liftm(func, op) ⇒ object
// Write a function liftm that is generalized for any amount of arguments
const liftm = (func, op) => {}

// exp(value) ⇒ any
// Write a function exp that evaluates simple array expressions
const exp = (value) => {}

// expn(value) ⇒ any
// Write a function expn that is a modified exp that can evaluate nested array expressions
const expn = (value) => {}

// addg(value) ⇒ number | undefined
// Write a function addg that adds from many invocations, until it sees an empty invocation
const addg = (value) => {}

// liftg(binary) ⇒ function
// Write a function liftg that will take a binary function and apply it to many invocations
const liftg = (binary) => {}

// arrayg(value) ⇒ array
// Write a function arrayg that will build an array from many invocations
const arrayg = (value) => {}

// continuizeu(unary) ⇒ function
// Write a function continuizeu that takes a unary function and returns a function that takes a
// callback and an argument
const continuizeu = (unary) => {}

// continuize(any) ⇒ function
// Write a function continuize that takes a function and returns a function that takes a callback
// and an argument
const continuize = (any) => {}

// vector()
// Make an array wrapper object with methods get, store, and append, such that an attacker cannot
// get access to the private array
const vector = () => {}

// exploitVector()
// Let's assume your vector implementation looks like something like this:
const exploitVector = () => {}

// vector = () => {
  //   let array = [];
  //   return {
    //     append: (v) => array.push(v),
    //     get: (i) => array[i],
    //     store: (i, v) => array[i] = v
    //   };
    // }
    // Can you spot any security concerns with this approach? Mainly, can we get access to the array
    // outside of vector? Note: the issue has nothing to do with prototypes and we can assume that
    // global prototypes cannot be altered. Hint: Think about using this in a method invocation.
    // Can we override a method of vector?
    
// vectorSafe()
// How would you rewrite vector to deal with the issue from above?
const vectorSafe = () => {}

// pubsub()
// Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all
// publications to all subscribers in the right order.
const pubsub = () => {}

// mapRecurse(array, predicate) ⇒ array
// Make a function mapRecurse that performs a transformation for each element of a given array,
// recursively
const mapRecurse = (array, predicate) => {}

// filterRecurse(array, predicate) ⇒ array
// Make a function filterRecurse that takes in an array and a predicate function and returns a new
// array by filtering out all items using the predicate, recursively.
const filterRecurse = (array, predicate) => {}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  curryb,
  curry,
  inc,
  twiceUnary,
  doubl,
  square,
  twice,
  reverseb,
  reverse,
  composeuTwo,
  composeu,
  composeb,
  composeTwo,
  compose,
  limitb,
  limit,
  genFrom,
  genTo,
  genFromTo,
  elementGen,
  element,
  collect,
  filter,
  filterTail,
  concatTwo,
  concat,
  concatTail,
  gensymf,
  gensymff,
  fibonaccif,
  counter,
  revocableb,
  revocable,
  extract,
  m,
  addmTwo,
  addm,
  liftmbM,
  liftmb,
  liftm,
  exp,
  expn,
  addg,
  liftg,
  arrayg,
  continuizeu,
  continuize,
  vector,
  exploitVector,
  vectorSafe,
  pubsub,
  mapRecurse,
  filterRecurse,
};
