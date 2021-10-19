
const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a*b;

const minb = (a, b) => a < b ? a : b;

const maxb = (a, b) => a > b ? a : b;

const add = (...nums) => nums.reduce((a, b)=>a+b)

const sub = (...nums) => nums.reduce((a, b)=>a-b)

const mul = (...nums) => nums.reduce((a, b)=>a*b , 1)

const min = (...nums) => nums.reduce((a, b)=> Math.min(a, b))

const max = (...nums) => nums.reduce((a, b)=> Math.max(a, b))

const addRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() + addRecurse(...nums);
}

const mulRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() * mulRecurse(...nums);
}

const minRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    let secondNum = minRecurse(...nums.slice(1))
    if (nums[0] < secondNum) return nums[0]
    return secondNum
}

const maxRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    let secondNum = maxRecurse(...nums.slice(1))
    if (nums[0] > secondNum) return nums[0]
    return secondNum
}

const acc = (func, initial) => (...args) => {
    let x = initial;
    for (let i of args) {
        x = func(x, i);
    }
    return x;
}

const fill = (n) => {
    let arr = [];
    for(let i=0; i<n; i++) arr.push(n)
    return arr;
}

const fillRecurse = (n, arr=[]) => {
    if(arr.length === n){
        return arr
    }else{
        arr.push(n)
        return fillRecurse(n, arr)
    }
}



const pure = (x, y) => {
    const impure = (x) => {
      y++;
      z = x * y;
    }
    impure(x);
    return [y, z];
}

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };
