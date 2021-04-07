// Write a function identity that takes an argument and returns that argument
const identity = (arg) => arg;

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
  return nums.reduce((a, acc) => {
    return a + acc;
  });
};

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
  return nums.reduce((a, acc) => {
    return a - acc;
  });
};

//Write a function mul that is generalized for any amount of arguments
const mul = (...num) => {
  return num.reduce((a, acc) => {
    return a * acc;
  }, 1);
};

// Write a function min that is generalized for any amount of arguments
const min = (...num) => {
  return num.reduce((a, b) => Math.min(a, b));
};

// Write a function max that is generalized for any amount of arguments
const max = (...num) => {
  return num.reduce((a, b) => Math.max(a, b));
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
  minRecurse,
  maxRecurse,
  fill,
};
