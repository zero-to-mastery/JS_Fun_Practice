// Write a function identity that takes an argument and returns that argument

const identity = (a) => a;

//Write a binary function addb that takes two numbers and returns their sum one

const addb = (a, b) => a + b;

//Write a binary function subb that takes two numbers and returns their difference

const subb = (a,b) => a - b;

//Write a binary function mulb that takes two numbers and returns their product

const mulb = (a,b) => a * b; 

//Write a binary function minb that takes two numbers and returns the smaller one 

const minb = (a,b) => a > b ? b : a;

//Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (a,b) => a > b ? a : b;

//Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((a, b) => a + b);

//Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((a, b) => a - b);

//Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((a, b) => a * b);

//Write a function min that is generalized for any amount of arguments

const min = (...nums) => Math.min(...nums);

//Write a function max that is generalized for any amount of arguments

const max = (...nums) => Math.max(...nums);

//Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => nums.reduce((a, b) => a + b);

const addRecurse = (...nums) => {
    if (nums.length <= 0) {
        return 0;
    }
    return nums[0] + (addRecurse(...nums.slice(1)));9
}

//Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
    if (nums.length < 1) 
    return 1;
    return nums[0] * mulRecurse(...nums.slice(1))
}





module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };






