// takes an argument and returns that argument
const identity = (x) => x;

identity('Hello, World') ;  // Hello, World


// takes two numbers and returns their sum
const addb = (a, b) => a + b;

addb(3, 5);                 // 8


// takes two numbers and returns their difference
const subb = (a, b) => a - b;

subb(20, 5)                 // 15


// takes two numbers and returns their product
const mulb = (a, b) => a * b;

mulb(4, 3)                  // 12


// takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b;

minb(12, 10)                // 10


module.exports = {
    identity,
    addb,
    subbb,
    mulb,
    minb,
};