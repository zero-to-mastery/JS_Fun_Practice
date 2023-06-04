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

module.exports = {
  identity,
  addb,
  minb,
};
