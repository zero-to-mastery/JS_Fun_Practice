const identity = (n) => n;

const addb = (a, b) => a + b;

const subb = (a, b) => a > b ? a - b : b - a;

const mulb = (a, b) => a * b;

const minb = (a, b) => a < b ? a : b;

const maxb = (a, b) => a > b ? a : b;

function add(...nums) {
    const array = [...nums];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
};


function sub(...args) {

    let result = args[i];
    for (let i = 0; i < args.length; i++) {
        result -= args[i];
    };
}


function mul(...nums) {
    const array = [...nums];
    let mult = 1;
    for (let i = 0; i < array.length; i++) {
        mult *= array[i];
    }
    return mult;
}

function min(...nums) {
    const array = [...nums];
    let smallest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (smallest > array[i]) {
            smallest = array[i];
        }
    }
    return smallest;
}

function max(...nums) {
    const array = [...nums];
    let maxNum = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
}

function addRecurse(...nums) {
    if (nums.length === 0) return 0;

    let newArray = nums.slice(1)
    return nums[0] + addRecurse(newArray);
}

function mulRecurse(...nums) {
    if (nums.length === 0) return 1;

    let newArray = nums.slice(1);
    return nums[0] * mulRecurse(...newArray);
}

function minRecurse(...nums) {
    // Base case
    if (nums.length === 1) {
        return nums[0];
    }
    const lastSmallest = minRecurse(...nums.slice(1));
    return nums[0] < lastSmallest ? nums[0] : lastSmallest;
}

function maxRecurse(...nums) {
    //Base case
    if (nums.length === 1) {
        return [0];
    }
    const lastBiggest = maxRecurse(...nums.slice(1));
    return nums[0] > lastBiggest ? nums[0] : lastBiggest;
}

function not(func) {
    if (!(func instanceof Function) || typeof func() !== "number") {
        return "Invalid argument.";
    }

    return func() * -1;
}

function acc(func, initial) {

    return function (...args) {
        return args.reduce((accum, current) => func(current, accum), initial);
    }
}

function accPartial(func, start, end) {
    return function (...args) {
        let sub = args.slice(start, end).reduce((accum, current) => func(current, accum), 0)
        const result = [...args.slice(0, start), sub, ...args.slice(end)];
        return result;
    }
}

function fill(num) {
    return new Array(num).fill(num);
}

function fillRecurse(value, length = value) {
    // Base case
    if (length === 0) return [];

    let result = [...fillRecurse(value, length - 1), value];

    return result;
}

function set(arr) {
    let result = [];
    let hash = {};


    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hash)) {
            hash[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}

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
    // accRecurse,
    fill,
    fillRecurse,
    set,
    // identityf,
    // addf,
    // liftf,
    // pure,
    // curryb,
    // curry,
    // inc,
    // twiceUnary,
    // doubl,
    // square,
    // twice,
    // reverseb,
    // reverse,
    // composeuTwo,
    // composeu,
    // composeb,
    // composeTwo,
    // compose,
    // limitb,
    // limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    // element,
    // collect,
    // filter,
    // filterTail,
    // concatTwo,
    // concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    // extract,
    // m,
    // addmTwo,
    // addm,
    // liftmbM,
    // liftmb,
    // liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    // continuizeu,
    // continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};