// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
console.log(identity('Hello there!'));

// Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => x + y;
console.log(addb(3, 7));

// Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => x - y;
console.log(subb(7, 2));

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => x * y;
console.log(mulb(2, 5));

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (x, y) => x < y ? x : y;
console.log(minb(7, 3)); 

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (x, y) => x > y ? x : y;
console.log(maxb(7, 3)); 
