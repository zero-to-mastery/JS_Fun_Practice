// Write a function identity that takes an argument and returns that argument
const identity = (x) => {
  return x
}

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => {
  return a + b;
}

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => {
  return a - b;
}

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => {
  return a * b;
}

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb
};
