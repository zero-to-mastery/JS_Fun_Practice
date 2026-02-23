
function identity(x) {
    return x;
}

function addb(a, b) {
    return a + b;
}

function subb(a, b) {
    return a - b;
}

function mulb(a, b) {
    return a * b;
}

function minb(a, b) {
    return Math.min(a, b);
}

function maxb(a, b) {
    return Math.max(a, b);
}

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr);
}

function sub(...nums) {
    return nums.reduce((acc, curr) => acc - curr);
}

function mul(...nums){
    return nums.reduce((acc, curr) => acc * curr);
}

function min(...nums) {
    return Math.min(...nums);
}

function max(...nums) {
    return Math.max(...nums);
}


function addRecurse(...nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    return nums[0] + addRecurse(...nums.slice(1)); // will give you all the elements of the nums array except for the first one
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
    /*
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
    */
};