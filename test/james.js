//identity(3); 3
//identity("hello"); "hello"

//to return exactly what was passed in

function identity(x) {
    return x;
}



// to add two numbers
//addb(a,b)

function addb(a,b) {
    return a+b;
}

// subtract two numbers
//subb(a,b)

function subb(a,b) {
    return a - b;
}

// multiply two numbers
// mulb(a,b)

function mulb(a,b) {
    return a*b;
}

// return the smaller number
// minb(a,b)

function minb(a,b) {
    return Math.min(a,b);
}

// return the bigger number
// maxb(a,b)

function maxb(a, b) {
    return Math.max(a, b);
}

//OR

//function maxb(a, b) {
//    return a > b ? a : b;
//}

// add(1,2,4) = 7

function add(...nums) {
    return nums.reduce((sum,n) => sum+n,0);
}

// sub(2,3,5) = 2-3-5 = -6

function sub(...nums) {
    return nums.slice(1).reduce(
        (result, n) => result - n,
        nums[0]
    );
}

function mul(...nums){
    return nums.reduce((product,n) => product*n);
}

function min(...nums) {
    return Math.min(...nums);
}

function max(...nums) {
    return Math.max(...nums);
}

function addRecurse(...nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    return nums[0] + addRecurse(...nums.slice(1));
}

function mulRecurse(...nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    return nums[0]* mulRecurse(...nums.slice(1));
}

function minRecurse(...nums) {
    if (nums.length == 1) return nums[0];
    return Math.min(nums[0],
        minRecurse(...nums.slice(1))
    );
}

function maxRecurse(...nums) {
    if (nums.length == 1) return nums[0];
    return Math.max(nums[0],
        maxRecurse(...nums.slice(1))
    );
}

function not(fn) {
    return function (...args) {
        return !fn(...args);
    };
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
    /*acc,
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

console.log(identity(3));
console.log(addb(3,4));
console.log(subb(3,4));
console.log(mulb(3,4));
console.log(minb(3,4));
console.log(maxb(3,4));
console.log(add(2,5,7,3,4));
console.log(add(2,5,3));
console.log(sub(7,3,4,1,2));
console.log(mul(2,9,11));
console.log(min(-10,0,13212,-2345));
console.log(max(2,39,-100,10002,345));
console.log(addRecurse(1,20,8,-10,-3));
console.log(mulRecurse(2,-4,8,10,5));
console.log(minRecurse(10,-2,123, -1231,1000));
console.log(maxRecurse(4,-100,458,3519,-3012));
console.log(not(max(4,-100,458,3519,-3012)))