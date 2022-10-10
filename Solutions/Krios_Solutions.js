const identity = (x) => x;

const addb = (a,b) => a+b;

const subb = (a,b) => a-b;

const mulb = (a,b) => a*b;

const minb = (a,b) => (a < b) ? a : b;

const maxb = (a,b) => (a > b) ? a : b;

//generalized for any number of parameters creates an array of value
//acc starts at the first element of the array
const add = (...nums) => nums.reduce((acc, value) => acc + value);
console.log(add(1,2,3,4));

const sub = (...nums) => nums.reduce((acc,value) => acc - value);

const mul = (...nums) => nums.reduce((acc, value) => acc * value);

const min = (...nums) => nums.reduce((acc, value) => (acc < value ? acc : acc = value));

const max = (...nums) => nums.reduce((acc, value) => (acc > value ? acc : acc = value));


onsole.log(acc(addb(1, 2, 4), 1));




module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse,
     maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, 
     inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, 
     limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf,
      gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, 
      liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };