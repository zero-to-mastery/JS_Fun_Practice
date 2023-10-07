
// Write a function identity that takes an argument and returns that argument
function identity(x) {
  return x;
}

//Write a binary function addb that takes two numbers and returns their sum
function addb(a, b) {
  return a + b;
}

//Write a binary function subb that takes two numbers and returns their difference
function subb(a, b) {
  return a - b;
}

//Write a binary function mulb that takes two numbers and returns their product
function mulb(a, b) {
  return a * b;
}

//Write a binary function minb that takes two numbers and returns the smaller one
function minb(a, b) {
  return Math.min(a, b);
}

//Write a function sub that is generalized for any amount of arguments
function sub(...nums) {
  return nums.reduce((accumulator, currentValue) => accumulator - currentValue);
}

// Write a function identityf that takes an argument and returns a function that returns that argument
function identityf(x) {
  return () => x;
}

// Write a function addf that adds from two invocations
function addf(a) {
  return (b) => a + b;
}

// Write a function liftf that takes a binary function, and makes it callable with two invocations
function liftf(fn) {
  return (a) => (b) => fn(a, b);
}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  sub,
  identityf,
  addf,
  liftf,
};
