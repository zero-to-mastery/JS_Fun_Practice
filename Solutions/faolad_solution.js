const minb = (a, b)=>{
    return a > b ? b : a
}

const maxb = (a, b)=>{
    return a > b ? a : b
}

const sub = (...nums)=>{
    return nums.reduce((acc, num)=> (acc+ num), 0)
}
const add = (...nums) => nums.reduce((a,b) => {
        return Math.min(a,b);
})

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