
///  Write a function identity that takes an argument and returns that argument

const identity = (x) => x;
console.log(identity("Hello World!"));

// Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a+b;
console.log(addb(2,3));

// Write a binary function subb that takes two numbers and returns their difference

const subb = (a,b) => a-b;
console.log(5,3);

// Write a binary function mulb that takes two numbers and returns their product

const mulb = (a, b) => a*b;
console.log(mulb(5,3));

// Write a binary function minb that takes two numbers and returns the smaller one

const minb = (a,b) => a < b ? a : b;
console.log(minb(5,3));

// Write a binary function maxb that takes two numbers and returns the larger one

const minb = (a,b) => a > b ? a : b;
console.log(minb(5,3));

// Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((a,b) => a+b);
console.log(add(2,3,4));

// Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((a,b) => a-b);
console.log(sub(2,3,4));

// Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((a,b) => a*b);
console.log(mul(2,3,4));

// Write a function min that is generalized for any amount of arguments

const min = (...nums) => nums.reduce((a,b) => a < b ? a:b);
console.log(min(2,3,4));

// Write a function max that is generalized for any amount of arguments

const max = (...nums) => nums.reduce((a, b) => a > b ? a:b);
console.log(max(2,35,43));
