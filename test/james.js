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

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
   /* add,
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
    */
};

console.log(identity(3));
console.log(addb(3,4));
console.log(subb(3,4));
console.log(mulb(3,4));
console.log(minb(3,4));
console.log(maxb(3,4));