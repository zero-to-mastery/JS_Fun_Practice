const identity = (x) => x;
const addb = (a,b) => a + b;
const subb = (a,b) => a - b;
const mulb = (a,b) => a * b;
const minb = (a, b) => a < b ? a : b;
const maxb = (a, b) => a > b ? a : b;
const add = (...nums) => {
    let total = 0;
    for(let i in nums){
        x = x + nums[i]
    }
    return x;
};
const sub = (...nums) => {
    let x = 0;
    for(let i in nums){
        x = x - nums[i]
    }
    return x;
};

const mul = (...nums) => {
    let x = 0;
    for(let i in nums){
        x = x * nums[i]
    }
    return x;
};

const min = (...nums) => {
    let x = nums[0];
    for(let i in nums){
        nums[i] < x ? x = nums[i] : x = x;
    }
    return x;
};

const max = (...nums) => {
    let x = nums[0];
    for(let i in nums){
        nums[i] > x ? x = nums[i] : x = x;
    }
    return x;
};

const addRecurse = (...nums) => {
    if (nums.length === 1) {
      return nums[0];
    } else {
      return nums.shift() + addRecurse(...nums);
    }
};

const mulRecurse = (...nums) => {
    if (nums.length === 1) {
      return nums[0];
    } else {
      return nums.shift() * mulRecurse(...nums);
    }
};

// not finished yet

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };