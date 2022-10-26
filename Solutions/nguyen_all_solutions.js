// Write a function identity that takes an argument and returns that argument
const identity = x => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => a > b ? b : a;

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b;

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((previous, current) => addb(previous, current));

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((previous, current) => subb(previous, current));

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((previous, current) => mulb(previous, current));

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((previous, current) => minb(previous, current));

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((previous, current) => maxb(previous, current));

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.length <= 1 ? nums.shift() : addb(nums.shift(), addRecurse(...nums));

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.length <= 1 ? nums.shift() : mulb(nums.shift(), mulRecurse(...nums));

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => nums.length <= 1 ? nums.shift() : minb(nums.shift(), minRecurse(...nums));

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => nums.length <= 1 ? nums.shift() : maxb(nums.shift(), maxRecurse(...nums));

// Write a function not that takes a function and returns the negation of its result
const not = (func) => a => !func(a);

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => (...nums) => nums.reduce((acc, value) => func(acc, value), initial);

// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => () => x;

// Write a function addf that adds from two invocations
const addf = (a) => (b) => addb(a, b);

// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (binary) => (a) => (b) => binary(a, b)

// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (binary, a) => (b) => binary(a, b);

// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...outer) => (...inner) => func(...outer, ...inner);

// Without writting any new functions, show multiple ways to create the inc function
const inc = (x) => ++x;

// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = (binary) => (x) => binary(x, x);

// Use the function twiceUnary to create the doubl function
const doubl = (x) => twiceUnary(addb)(x);

// Use the function twiceUnary to create the square function
const square = (x) => twiceUnary(mulb)(x);

// Write a function twice that is generalized for any amount of arguments
const twice = (x) => (...inner) => doubl(x(...inner));

// Write a function reverseb that reverses the arguments of a binary function
const reverseb = (binary) => (a, b) => binary(b, a);

// Write a function reverse that is generalized for any amount of arguments
const reverse = func => (...inner) => func(...inner.slice().reverse());

// Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (unary1, unary2) => (x) => unary2(unary1(x));

// Write a function composeu that is generalized for any amount of arguments
const composeu = (...funcs) => (x) => funcs.reduce((acc, func) => func(acc), x);

// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.
const accPartial = (func, start, end) => (...nums) => { nums.splice(start, end - start, func(...nums.slice(start, end))); return nums; };

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => (...nums) => nums.length <= 1 ? initial + nums.pop() : nums.pop() + accRecurse(func, initial)(...nums);

// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => Array.from({ length: num }, () => num);

// Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (binary1, binary2) => (a, b, c) => binary2(binary1(a, b), c);

// Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (func1, func2) => (...nums) => func2(func1(...nums));

// Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...funcs) => (...nums) => funcs.reduce((prevValue, func) => Array.isArray(prevValue) ? func(...prevValue) : func(prevValue), nums);

// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num) => {
    function fillArray(n, i, a) {
        a.push(i);
        return a.length < n ? fillArray(n, i, a) : a;
    }
    return fillArray(num, num, []);
}

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => Array.from(new Set(args));

// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => Array.from(new Set(args));

module.exports = {
    identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, addf, identityf,
    liftf, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, accRecurse, fill, accPartial,
    composeb, composeTwo, compose, fillRecurse, set
}