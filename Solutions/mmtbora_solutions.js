// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument
const identity = (argument) => argument;
// addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;
// subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;
// mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b; 
// minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => { if (a < b) {
    return a;    
} else {
    return b;
}
}
// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => a < b ?  a : b;


// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments


// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments

// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments

// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments

// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments

// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion

// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion

// minRecurse(...nums) ⇒ number
// Write a function minRecurse that is the generalized min function but uses recursion

// maxRecurse(...nums) ⇒ number
// Write a function maxRecurse that is the generalized max function but uses recursion

// not(func) ⇒ function
// Write a function not that takes a function and returns the negation of its result

// acc(func, initial) ⇒ function
// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

// accPartial(func, start, end) ⇒ function
// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

// accRecurse(func, initial) ⇒ function
// Write a function accRecurse that does what acc does but uses recursion

// fill(num) ⇒ array
// Write a function fill that takes a number and returns an array with that many numbers equal to the given number

// fillRecurse(num) ⇒ array
// Write a function fillRecurse that does what fill does but uses recursion

// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates removed

// identityf(x) ⇒ function
// Write a function identityf that takes an argument and returns a function that returns that argument

// addf(a) ⇒ function
// Write a function addf that adds from two invocations

// liftf(binary) ⇒ function
// Write a function liftf that takes a binary function, and makes it callable with two invocations

// pure(x, y) ⇒ array
// Write a pure function pure that is a wrapper arround the impure function impure

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
// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

// curry(func, ...outer) ⇒ function
// Write a function curry that is generalized for any amount of arguments

// inc(x) ⇒ number
// Without writting any new functions, show multiple ways to create the inc function

// twiceUnary(binary) ⇒ function
// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice

// doubl(x) ⇒ number
// Use the function twiceUnary to create the doubl function

// square(x) ⇒ number
// Use the function twiceUnary to create the square function

// twice(x) ⇒ any
// Write a function twice that is generalized for any amount of arguments

// reverseb(binary) ⇒ function
// Write a function reverseb that reverses the arguments of a binary function

// reverse(func) ⇒ function
// Write a function reverse that is generalized for any amount of arguments

// composeuTwo(unary1, unary2) ⇒ function
// Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both

// composeu(...funcs) ⇒ any
// Write a function composeu that is generalized for any amount of arguments

// composeb(binary1, binary2) ⇒ function
// Write a function composeb that takes two binary functions and returns a function that calls them both

// composeTwo(func1, func2) ⇒ function
// Write a function composeTwo that takes two functions and returns a function that calls them both

// compose(...funcs) ⇒ function
// Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on

// limitb(binary, lmt) ⇒ function
// Write a function limitb that allows a binary function to be called a limited number of times

// limit(func, lmt) ⇒ function
// Write a function limit that is generalized for any amount of arguments

// genFrom(x) ⇒ function
// Write a function genFrom that produces a generator that will produces a series of values

// genTo(gen, lmt) ⇒ function
// Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit

// genFromTo(start, end) ⇒ function
// Write a function genFromTo that produces a generator that will produce values in a range

// elementGen(array, gen) ⇒ function
// Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

// element(array, gen) ⇒ function
// Write a function element that is a modified elementGen function so that the generator argument is optional. If a generator is not provided, then each of the elements of the array will be produced.

// collect(gen, array) ⇒ function
// Write a function collect that takes a generator and an array and produces a function that will collect the results in the array

// filter(gen, predicate) ⇒ function
// Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

// filterTail(gen, predicate) ⇒ function
// Write a function filterTail that uses tail-recursion to perform the filtering

// concatTwo(gen1, gen2) ⇒ function
// Write a function concatTwo that takes two generators and produces a generator that combines the sequences

// concat(...gens) ⇒ function
// Write a function concat that is generalized for any amount of arguments

// concatTail(...gens) ⇒ function
// Write a function concatTail that uses tail-recursion to perform the concating

// gensymf(symbol) ⇒ function
// Write a function gensymf that makes a function that generates unique symbols

// gensymff(unary, seed) ⇒ function
// Write a function gensymff that takes a unary function and a seed and returns a gensymf

// fibonaccif(first, second) ⇒ function
// Write a function fibonaccif that returns a generator that will return the next fibonacci number

// counter(i) ⇒ object
// Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter

// revocableb(binary) ⇒ object
// Write a function revocableb that takes a binary function, and returns an object containing an invoke function that can invoke a function and a revoke function that disables the invoke function

// revocable(func) ⇒ object
// Write a function revocable that is generalized for any amount of arguments

// extract(array, prop) ⇒ array
// Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property

// m(value, source) ⇒ object
// Write a function m that takes a value and an optional source string and returns them in an object

// addmTwo(m1, m2) ⇒ object
// Write a function addmTwo that adds two m objects and returns an m object

// addm(...ms) ⇒ object
// Write a function addm that is generalized for any amount of arguments

// liftmbM(binary, op) ⇒ object
// Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects

// liftmb(binary, op) ⇒ object
// Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects

// liftm(func, op) ⇒ object
// Write a function liftm that is generalized for any amount of arguments

// exp(value) ⇒ any
// Write a function exp that evaluates simple array expressions

// expn(value) ⇒ any
// Write a function expn that is a modified exp that can evaluate nested array expressions

// addg(value) ⇒ number | undefined
// Write a function addg that adds from many invocations, until it sees an empty invocation

// liftg(binary) ⇒ function
// Write a function liftg that will take a binary function and apply it to many invocations

// arrayg(value) ⇒ array
// Write a function arrayg that will build an array from many invocations

// continuizeu(unary) ⇒ function
// Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument

// continuize(any) ⇒ function
// Write a function continuize that takes a function and returns a function that takes a callback and an argument

// vector()
// Make an array wrapper object with methods get, store, and append, such that an attacker cannot get access to the private array

// exploitVector()
// Let's assume your vector implementation looks like something like this:

// vector = () => {
//   let array = [];
//   return {
//     append: (v) => array.push(v),
//     get: (i) => array[i],
//     store: (i, v) => array[i] = v
//   };
// }
// Can you spot any security concerns with this approach? Mainly, can we get access to the array outside of vector? Note: the issue has nothing to do with prototypes and we can assume that global prototypes cannot be altered. Hint: Think about using this in a method invocation. Can we override a method of vector?

// vectorSafe()
// How would you rewrite vector to deal with the issue from above?

// pubsub()
// Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order.

// mapRecurse(array, predicate) ⇒ array
// Make a function mapRecurse that performs a transformation for each element of a given array, recursively

// filterRecurse(array, predicate) ⇒ array
// Make a function filterRecurse that takes in an array and a predicate function and returns a new array by filtering out all items using the predicate, recursively.