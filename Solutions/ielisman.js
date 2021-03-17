const identity      = (x)       => x;
const addb          = (a,b)     => a+b;
const subb          = (a,b)     => a-b;
const mulb          = (a,b)     => a*b;
const minb          = (a,b)     => a<b?a:b;
const maxb          = (a,b)     => a>b?a:b;
const add           = (...nums) => nums.reduce ((a,b)=>addb(a,b),0);
const sub           = (...nums) => nums.reduce ((a,b)=>subb(a,b),0);
const mul           = (...nums) => nums.reduce ((a,b)=>mulb(a,b),1);
const min           = (...nums) => nums.reduce ((a,b)=>minb(a,b));
const max           = (...nums) => nums.reduce ((a,b)=>maxb(a,b));
const addRecurse    = (...nums) => nums.length===1?nums[0]:nums.pop()+addRecurse(...nums);
const mulRecurse    = (...nums) => nums.length===1?nums[0]:nums.pop()*mulRecurse(...nums);
const minRecurse    = (...nums) => nums.length===1?nums[0]:minb(nums.pop(),minRecurse(...nums));
const maxRecurse    = (...nums) => nums.length===1?nums[0]:maxb(nums.pop(),maxRecurse(...nums));
//const not     			= (f) => (...args) => !f(...args); // to be continued ...

module.exports = { 
    identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse/*,    
    not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, 
    curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, 
    composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, 
    elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, 
    fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, 
    addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, 
mapRecurse, filterRecurse, */};