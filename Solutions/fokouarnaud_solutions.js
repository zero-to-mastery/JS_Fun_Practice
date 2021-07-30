
const identity = x => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

const maxb = (a, b) => a > b ? a : b;

const add = (...nums) => nums.reduce((acc, num) => (acc + num), 0);

const sub = (...nums) => nums.reduce((acc, num, index) => {
    if (index == 0) {
        return num;
    }
    return (acc - num);
}, 0);

const mul = (...nums) => nums.reduce((acc, num) => (acc * num), 1);

const min = (...nums) => nums.reduce((acc, num, index) => {
    if (index == 0) {
        return num;
    }
    return (acc > num ? num : acc)
}, 0);

const max = (...nums) => nums.reduce((acc, num, index) => {
    if (index == 0) {
        return num;
    }
    return (acc > num ? acc : num)
}, 0);

const addRecurse = (...nums) => {

    if (nums.length === 1) {
        return nums[0];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    return nums[index] + addRecurse(...newNums);

};

const mulRecurse = (...nums) => {

    if (nums.length === 1) {
        return nums[0];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    return nums[index] * mulRecurse(...newNums);

};

const minRecurse = (...nums) => {
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[1] : nums[0];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    const minNewNums = minRecurse(...newNums);
    return nums[index] > minNewNums ? minNewNums : nums[index];

};

const maxRecurse = (...nums) => {
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    const maxNewNums = maxRecurse(...newNums);
    return nums[index] > maxNewNums ? nums[index] : maxNewNums;

};

const not = (func) =>
    (...args) => !func(args);

const acc = (func, initial) =>
    (...args) => args.reduce(
        (accumulator, el, index) => {
            if (index == 0) {
                return func(el, initial);
            }
            return func(el, accumulator);
        }, 0);


const accPartial = (func, start, end) =>
    (...args) => {
        const inRangeArgs = args.slice(start, end);
        const resultAcc = inRangeArgs.reduce(
            (accumulator, el, index) => {
                if (index == 0) {
                    return inRangeArgs[0];
                }
                return func(el, accumulator);
            }, 0)
        return [...args.slice(0, start), resultAcc, ...args.slice(end)];
    };



const accRecurse = (func, initial) =>
    (...args) => {
        if (args.length === 1) { 
            return  func(args[0], initial);
        }
        const index = 0;
        const newArgs = [...args.slice(0, index), ...args.slice(index + 1)]
        return   func(accRecurse(func,initial)(...newArgs),args[index]);
    };


module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
    accRecurse,
    /*   fill,
     fillRecurse,
     set,
     identityf,
     addf,
     liftf,
     pure,
     curryb,
     curry,
     inc,
     twiceUnary,
     doubl,
     square,
     twice,
     reverseb,
     reverse,
     composeuTwo,
     composeu,
     composeb,
     composeTwo,
     compose,
     limitb,
     limit,
     genFrom,
     genTo,
     genFromTo,
     elementGen,
     element,
     collect,
     filter,
     filterTail,
     concatTwo,
     concat,
     concatTail,
     gensymf,
     gensymff,
     fibonaccif,
     counter,
     revocableb,
     revocable,
     extract,
     m,
     addmTwo,
     addm,
     liftmbM,
     liftmb,
     liftm,
     exp,
     expn,
     addg,
     liftg,
     arrayg,
     continuizeu,
     continuize,
     vector,
     exploitVector,
     vectorSafe,
     pubsub,
     mapRecurse,
     filterRecurse, */
};