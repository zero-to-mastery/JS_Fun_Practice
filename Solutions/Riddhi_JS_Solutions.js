// 1. Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

// 2. Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// 3. Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// 4. Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// 5. Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
  return a < b ? a : b;
};

// 6. Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => {
  return a > b ? a : b;
};

// 7. Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
  return nums.reduce((accumulator, currVal) => accumulator + currVal);
};

// 8. Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
  return nums.reduce((accumulator, currVal) => accumulator - currVal);
};

// .9 Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
  return nums.reduce((accumulator, currVal) => accumulator * currVal);
};

// .10 Write a function min that is generalized for any amount of arguments
function min() {
  let res = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    res > arguments[i] ? (res = arguments[i]) : res;
  }
  return res;
}

// .11 Write a function max that is generalized for any amount of arguments
function max() {
  let res = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    res > arguments[i] ? res : (res = arguments[i]);
  }
  return res;
}

// .12 Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
  if (nums.length == 0) {
    return 0;
  }
  return nums[0] + addRecurse(...nums.slice(1));
};

// .13 Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
  if (nums.length == 0) {
    return 1;
  }
  return nums[0] + mulRecurse(...nums.slice(1));
};

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
};
