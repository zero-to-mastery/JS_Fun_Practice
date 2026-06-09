// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => Math.min(a, b);

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => Math.max(a, b);

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a, b) => a + b, 0);

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b) => a - b);

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a, b) => a * b, 1);

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a, b) => (a < b ? a : b));

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a, b) => (a > b ? a : b));

// Export all functions
module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max };