// Write a function max that is generalized for any amount of arguments


const max = ((...nums) => {
    return nums.reduce((aco,num) => {
        if (aco>num) {
            return aco;
        }
        else {
            return num;
        };
    }, 0)
})


// Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() * mulRecurse(...nums);
}


// Write a function minRecurse that is the generalized min function but uses recursion


const minRecurse = (...nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums[0] < nums[1]) {
        nums.splice(1, 1)
    }
    else {
        nums.splice(0, 1)
    }
    return minRecurse(...nums);
}


//Write a function fill that takes a number and returns an array with that many numbers equal to the given number


const fill1 = (num) => {
    arr = [];
    for (let i=0; i<num; i++) {
        arr.push(num);
    }
    return arr;
}

// Write a function fillRecurse that does what fill does but uses recursion


const fill = (num, arr = []) => {
    if (arr.length === num) return arr;
    else {
        arr.push(num)
        return fill(num,arr)
    }
}

// Write a function set that is given a list of arguments and returns an array with all duplicates removed


const set = (...nums) => {
    let output = [];
    for (let i=0; i<nums.length; i++) {
      if (!output.includes(nums[i])) {
        output.push(nums[i])
      }
    }
    return output;
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