const mathModule = require('../Solutions/Amarjit_JS_fun');

console.log(mathModule.identity(5));
console.log(mathModule.addb(3, 7));
console.log(mathModule.subb(10, 5));
console.log(mathModule.mulb(2, 3));

console.log(mathModule.minb(5,6));
console.log(mathModule.maxb(3, 7));
console.log(mathModule.add(10,5,2,3));
console.log(mathModule.sub(10,2,3));
console.log(mathModule.mul(3, 7, 5));
console.log(mathModule.min(10,5,2,3));
console.log(mathModule.max(10,2,3,11));
console.log(mathModule.addRecurse(10,2,3,[2,3,[5]],11));
console.log(mathModule.mulRecurse(10,2,3,[2,3,[5]],11));
console.log(mathModule.minRecurse(10,2,3,[2,3,[5]],11));
console.log(mathModule.maxRecurse(10,2,3,[2,3,[5]],11));

// Define a test function for not method
const isEven = num => num % 2 === 0;

// Use the 'not' function from mathModule to get the negation of the result of 'isEven'
const isOdd = mathModule.not(() => isEven(6));

console.log(isEven(6)); // Output: true
console.log(isOdd);   // Output: false (negation of true)

// Define a function to add numbers
const add = (a, b) => a + b;

// Use the acc function to create a new function that accumulates the sum
const accumulateSum = mathModule.acc(add, 0);

console.log(accumulateSum(1, 2, 3, 4)); // Output: 10 (0 + 1 + 2 + 3 + 4)

// Define a function to multiply numbers
const multiply = (a, b) => a * b;

// Use the accPartial function to create a new function that accumulates multiplication
const accumulateProduct = mathModule.accPartial(multiply, 1, 3);

console.log(accumulateProduct(2, 3, 4, 5)); // Output: 60 (3 * 4 * 5)

// Define a function to add numbers
const add1 = (a, b) => a + b;

// Use the accRecurse function to create a new function that accumulates addition
 const accumulateSum1 = mathModule.accRecurse(add1, 0);

console.log(accumulateSum1(1, 2, 3, 4)); // Output: 10 (1 + 2 + 3 + 4)
