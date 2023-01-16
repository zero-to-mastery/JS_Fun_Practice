const identity = (arg) => {
    return arg;
}

const addb = (a, b) => {
    return a + b;
}

const subb = (a, b) => {
    return a - b;
}

const mulb = (a, b) => {
    return a * b;
}

const minb = (a, b) => {
    return a > b ? b : a;
}

const maxb = (a, b) => {
    return a > b ? a: b;
}

const add = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];  
    }
    return sum;
}

const sub = (...nums) => {
    let subt = nums[0];
    for (let i = 1; i < nums.length; i++) {
        subt -= nums[i]; 
    }
    return subt;
}

const mul = (...nums) => {
    let prod = 1;
    for (let i = 1; i < nums.length; i++) {
        prod *= nums[i];
    }
    return prod;
}

const min = (...nums) => {
    let less = nums[0];
    for (let i = 1; i < nums.length; i++) {
        less < nums[i] ? less = less : less = nums[i];
    }
    return less;
}

const max = (...nums) => {
    let bigger = nums[0];
    for (let i = 1; i < nums.length; i++) {
        bigger > nums[i] ? bigger = bigger : bigger = nums[i];
    }
    return bigger;
}

const addRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0;
    }

    if (nums.length === 1){
        return nums[0];
    }
    return nums.pop() + addRecurse(...nums);
}

const mulRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }
    return nums.pop() * mulRecurse(...nums);
}

const minRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }
    return minb(nums[0], minRecurse(...nums.slice(1)));
}

const maxRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }
    return maxb(nums[0], maxRecurse(...nums.slice(1)));
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
    // not,
    // acc,
    // accPartial,
    // accRecurse,
    // fill,
    // fillRecurse,
    // set,
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