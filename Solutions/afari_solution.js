// Write a function identity that takes an argument and returns that argument
const identity = (x) => {
  return x;
};

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => {
  return a + b;
};

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

// function max that is generalized for any amount of arguments
let max = (...nums) => {
  let maximum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maximum) {
      maximum = nums[i];
    }
  }
  return maximum;
};

// function addRecurse that is the generalized add function but uses recursion
let addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums);
};

let mulRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() * mulRecurse(...nums);
};

let minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  let num = nums.pop();
  return num < minRecurse(...nums) ? num : minRecurse(...nums);
};

let maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  let num = nums.pop();
  return num > maxRecurse(...nums) ? num : maxRecurse(...nums);
};

module.exports = {
  identity,
  addb,
  minb,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse
};
