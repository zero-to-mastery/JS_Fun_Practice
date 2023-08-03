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
