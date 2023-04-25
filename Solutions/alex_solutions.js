// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument

const identity = (x) => x;

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

const minb = (a, b) => (a < b ? a : b);

// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (a, b) => (a > b ? a : b);

// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((acc, curr) => acc - curr, 0);

// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((acc, curr) => acc * curr, 1);

// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments

const min = (...nums) => nums.reduce((acc, curr) => (acc < curr ? acc : curr));

// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments

const max = (...nums) => nums.reduce((acc, curr) => (acc > curr ? acc : curr));

// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + addRecurse(...nums.slice(1));
};

// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * mulRecurse(...nums.slice(1));
};

// minRecurse(...nums) ⇒ number
// Write a function minRecurse that is the generalized min function but uses recursion

const minRecurse = (...nums) => {
  if (nums.length === 0) {
    return Infinity;
  }
  return nums[0] < minRecurse(...nums.slice(1))
    ? nums[0]
    : minRecurse(...nums.slice(1));
};

// maxRecurse(...nums) ⇒ number
// Write a function maxRecurse that is the generalized max function but uses recursion

const maxRecurse = (...nums) => {
  if (nums.length === 0) {
    return -Infinity;
  }
  return nums[0] > maxRecurse(...nums.slice(1))
    ? nums[0]
    : maxRecurse(...nums.slice(1));
};

// not(func) ⇒ function
// Write a function not that takes a function and returns the negation of its result

const not =
  (func) =>
  (...args) =>
    !func(...args);

// acc(func, initial) ⇒ function
// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

const acc =
  (func, initial) =>
  (...args) =>
    args.reduce(func, initial);

// accPartial(func, start, end) ⇒ function
// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

// accRecurse(func, initial) ⇒ function
// Write a function accRecurse that does what acc does but uses recursion

const accRecurse = (func, initial) => {
  return function (...args) {
    if (args.length === 0) {
      return initial;
    }
    return func(args[0], accRecurse(func, initial)(...args.slice(1)));
  };
};

// fill(num) ⇒ array
// Write a function fill that takes a number and returns an array with that many numbers equal to the given number

const fill = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(num);
  }
  return arr;
};

// fillRecurse(num) ⇒ array
// Write a function fillRecurse that does what fill does but uses recursion

const fillRecurse = (num) => {
  if (num === 0) {
    return [];
  }
  return [num].concat(fillRecurse(num - 1));
};

// set(...args) ⇒ array
// Write a function set that is given a list of arguments and returns an array with all duplicates removed

const set = (...args) => {
  const arr = [];
  for (let i = 0; i < args.length; i++) {
    if (!arr.includes(args[i])) {
      arr.push(args[i]);
    }
  }
  return arr;
};
