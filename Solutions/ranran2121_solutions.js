// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument
function identity(x) {
  return x;
}

//addb(a, b) ⇒ number
//Write a binary function addb that takes two numbers and returns their sum
function addb(a, b) {
  return a + b;
}

//subb(a, b) ⇒ number
//Write a binary function subb that takes two numbers and returns their difference
function subb(a, b) {
  return a - b;
}
//mulb(a, b) ⇒ number
//Write a binary function mulb that takes two numbers and returns their product
function mulb(a, b) {
  return a * b;
}
//minb(a, b) ⇒ number
//Write a binary function minb that takes two numbers and returns the smaller one
function minb(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//maxb(a, b) ⇒ number
//Write a binary function maxb that takes two numbers and returns the larger one
function maxb(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
//add(...nums) ⇒ number
//Write a function add that is generalized for any amount of arguments
function add(...nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
//sub(...nums) ⇒ number
//Write a function sub that is generalized for any amount of arguments
function sub(...nums) {
  let sub = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sub -= nums[i];
  }
  return sub;
}

// Write a function identityf that takes an argument and returns a function that returns that argument
function identityf(x) {
  return identity(x);
}

// Write a function addf that adds from two invocations
function addf(a) {
  return (b) => {
    return add(a, b);
  };
}

// Write a function liftf that takes a binary function, and makes it callable with two invocations
function liftf(fn) {
  return (a) => {
    return (b) => {
      return fn(a, b);
    };
  };
}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  identityf,
  addf,
  liftf,
};
