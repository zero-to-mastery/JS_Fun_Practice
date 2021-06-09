const identity = x => x;

const addb = (a,b) => a + b;

const subb = (a,b) => a - b;

const mulb = (a,b) => a * b;

const minb = (a,b) => {
    if(a < b){
        return a
    }

    return b;
};

const maxb = (a,b) => {
    if(a > b){
        return a
    }

    return b;
};

const add = (...nums) => {
    let total = 0;
    for(let i in nums){
        total = total + num[i]
    }

    return total;
};

const sub = (...nums) => {
    let total = 0;
    for(let i in nums){
        total = total - num[i]
    }

    return total;
};

const mul = (...nums) => {
    let total = 0;
    for(let i in nums){
        total = total * nums[i]
    }

    return total;
};

const min = (...nums) => {
    let minNum = nums[0]
    for(let i in nums){
        if(nums[i] < minNum){
            minNum = nums[i];
        }
    }

    return minNum;
};

const max = (...nums) => {
    let maxNum = nums[0]
    for(let i in nums){
        if(nums[i] > maxNum){
            maxNum = nums[i];
        }
    }

    return maxNum;
};

const addRecurse = (...nums) => {
    if(nums.length === 1){
        return nums[0];
    }

    let [first, ...rest] = nums;

    return first + addRecurse(...rest);
};

const mulRecurse = (...nums) => {
    if(nums.length === 1){
        return nums[0];
    }

    let [first, ...rest] = nums;

    return first * mulRecurse(...rest);
};

const not = ( func ) => {
    return !func();
};

const acc = (func, initial) => {
    return function(...args){
        return func(initial, ...args);
    }
};











module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };