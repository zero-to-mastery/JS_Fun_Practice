// Write a function identity that takes an argument and returns that argument
// const identity = (argument => argument); 
// identity("Michael");

//Write a binary function addb that takes two numbers and returns their sum
const addb = ((n1, n2) => n1+n2);
addb(3,4);

// Write a binary function subb that takes two numbers and returns their difference
const subb = (n1, n2) => console.log(Math.abs(n1 - n2));
subb(5,7);

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (n1, n2) => console.log(n1*n2);
mulb(3,6);

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (n1, n2) => console.log(Math.min(n1, n2));
minb(4,7);

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (n1, n2) => console.log(Math.max(n1, n2));
maxb(4,7);

// Write a function add that is generalized for any amount of arguments
let sum=0;
const add = (arguments => arguments.forEach(element => sum+=element));
add([1,5,7,9]);

// Write a function sub that is generalized for any amount of arguments
let sum=100;
const sub = (arguments => arguments.forEach(element => sum-=element));
sub([1,5,7,9]);

//Write a function mul that is generalized for any amount of arguments
// let sum=1;
const mul = (arguments => arguments.forEach(element => sum = sum * element));
mul([1,5,7,9]);

// Write a function min that is generalized for any amount of arguments
const min = (arguments => console.log(Math.min(...arguments)));
min([5,7,1,9]);

// Write a function max that is generalized for any amount of arguments
const max = (arguments => console.log(Math.max(...arguments)));
max([5,7,1,9]);


// I TAP OUT HERE FOR NOW //



// Write a function addRecurse that is the generalized add function but uses recursion

// Write a function mulRecurse that is the generalized mul function but uses recursion


// Write a function minRecurse that is the generalized min function but uses recursion


// Write a function maxRecurse that is the generalized max function but uses recursion


// Write a function not that takes a function and returns the negation of its result


// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.


// Write a function accRecurse that does what acc does but uses recursion







//module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not,  acc, accPartial, accRecurse,  fill,  fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, /*doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, */ };