// Function identity
// Write a function identity that takes an argument and returns that argument
const identity = (a) => a;

// Function addb
// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Function subb
// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Function mulb
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Function minb
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => Math.min(a, b);

// Function maxb
// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => Math.max(a, b);

// Function add
// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
    let sum = 0;
    for (num of nums) sum += num;
    return sum;
}

// Function sub
// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
    let diff = 0;
    nums.forEach((num, index) => {
        (index === 0) ? diff = num : diff -= num;
    })
    return diff;
}

// Function mul
// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
    let result = 0;
    nums.forEach((num, index) => {
        (index === 0) ? result = num : result *= num;
    })
    return result;
}

// Function min
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => {
    return Math.min(...nums);
}

// Function max
// Write a function max that is generalized for any amount of arguments
const max = (...nums) => {
    return Math.max(...nums);
}

// Function addRecurse
// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (sum=0,...nums) => {
    if (nums.length > 0) {
        sum += nums.shift();
        return addRecurse(sum, ...nums)
    }

    return sum;
}

// Function mulRecurse
// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (result=1, ...nums) => {
    if (nums.length > 0) {
        result *= nums.shift();
        return mulRecurse(result, ...nums);
    }

    return result;
}

// Function minRecurse
// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (min, ...nums) => {
    if (nums.length > 0) {
        let num = nums.shift();

        if (num < min) min = num;

        return minRecurse(min, ...nums);
    }

    return min;
}

// Function maxRecurse
// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (max, ...nums) => {
    if (nums.length > 0) {
        let num = nums.shift();

        if (num > max) max = num;

        return maxRecurse(max, ...nums);
    }

    return max;
}

// Function not 
// Write a function not that takes a function and returns the negation of its result
const not = (func) => {
    return !func();
}

// Function acc 
// Write a function acc that takes a function and an initial value and returns a function 
// that runs the initial function on each argument, accumulating the result
const acc = (func, ...initial) => {
    let acc = 0;
    
    for (let value of initial) {
        acc += func(value);
    }

    return acc;
}

// Function accPartial 
// Write a function accPartial that takes in a function, a start index, and an end index, 
// and returns a function that accumulates a subset of its arguments by applying the given 
// function to all elements between start and end.
const accPartial = (func, startIndex, endIndex, ...args) => {
    let accPt = 0;
    args = args.slice(startIndex, endIndex + 1);

    for (let arg of args) accPt += arg;

    return accPt;
}

// Function accRecurse
// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, acc, ...initial) => {
    if (initial.length > 0) {
        let value = initial.shift();
        acc += func(value);

        return accRecurse(func, acc, ...initial);
    }

    return acc;
}

// Function fill
// Write a function fill that takes a number and returns an array with that many numbers 
// equal to the given number
const fill = (number) => {
    let arr = [];

    for(let i=0; i < number; i++) {
            arr.push(number);
    }

    return arr;
}

// Function fillRecurse
// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (number, arr=[number]) => {
    if (number > 1) {
            arr.push(arr[0]);
            return fillRecurse(number - 1, arr);
    }

    return arr;
}

// Function set
// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
    let arr = [];
    let arg;

    while (args.length > 0) {
        arg = args.shift();
        
        if (!arr.includes(arg)) arr.push(arg);
    }
    
    return arr;
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
    accRecurse,
    fill,
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
    filterRecurse,
};