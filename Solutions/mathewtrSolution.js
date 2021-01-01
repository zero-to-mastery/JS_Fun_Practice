// Write a function identity that takes an argument and returns that argument

const identity = function (x) {
  return x;
};

// Write a binary function addb that takes two numbers and returns their sum

const addb = function (a, b) {
  return a + b;
};

// Write a binary function subb that takes two numbers and returns their difference

const subb = function (a, b) {
  return a - b;
};

//Write a binary function mulb that takes two numbers and returns their product

const mulb = function (a, b) {
  return a * b;
};

//Write a binary function minb that takes two numbers and returns the smaller one

const minb = function (a, b) {
  return a < b ? a : b;
};

//Write a binary function maxb that takes two numbers and returns the larger one

const maxb = function (a, b) {
  return a > b ? a : b;
};

//Write a function add that is generalized for any amount of arguments

const add = function (...nums) {
  return nums.reduce((accumulator, currentNum) => {
    return accumulator + currentNum;
  }, 0);
};

//Write a function sub that is generalized for any amount of arguments

const sub = function (...nums) {
  return nums.reduce((accumulator, currentNum) => {
    return accumulator - currentNum;
  });
};

//Write a function mul that is generalized for any amount of arguments

const mul = function (...nums) {
  return nums.reduce((accumulator, currentNum) => {
    return accumulator * currentNum;
  });
};

//Write a function min that is generalized for any amount of arguments

const min = function (...nums) {
  return nums.reduce((accumulator, currentNum) => {
    return accumulator < currentNum ? accumulator : currentNum;
  });
};

//Write a function max that is generalized for any amount of arguments

const max = function (...nums) {
  return nums.reduce((accumulator, currentNum) => {
    return accumulator > currentNum ? accumulator : currentNum;
  });
};
