const identity = x => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => (a < b ? a : b);

const maxb = (a, b) => (a > b ? a : b);

const add = (...nums) => nums.reduce((a, b) => a + b);

const sub = (...nums) => nums.reduce((a, b) => a - b);

const mul = (...nums) => nums.reduce((a, b) => a * b);

const min = (...nums) => nums.reduce((a, b) => (a < b ? a : b));

const max = (...nums) => nums.reduce((a, b) => (a > b ? a : b));

const addRecurse = (...nums) => {
    if (nums.length === 1) return nums[0];
    return nums.pop() + addRecurse(...nums)
}

const mulRecurse = (...nums) => {
    if (nums.length === 1) return nums[0];
    return nums.pop() * addRecurse(...nums)
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


const not = func => (...args) => !Boolean(func(...args))


const acc = (func, initial) => (...args) => {
    let final = initial;
    for (let i of args) {
        final = func(final, i);
    }
    return final;
}

const accPartial = (func, start, end) => (...args) => {
    const array = args.slice(start, end);
    let final = array[0];
    for (let i of array.slice(1)) {
        final = func(final, i);
    }
    args.splice(start, end - start);
    args.splice(start, 0, final)
    return args
}

const accRecurse = (func, initial) => (...args) => {
    if (args.length === 1) {
        return func(args[0], initial);
    }
    return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
}

const fill = (num) => {
    let arr = [];
    for(let i=0; i<num; i++) arr.push(num)
    return arr;
}

const fillRecurse = (num, arr=[]) => {
    if(arr.length === num){
        return arr
    }else{
        arr.push(num)
        return fillRecurse(num, arr)
    }
}

const set = (...args) => args.filter((arg, index) => args.indexOf(arg) === index);

const identityf = arg => () => arg

const addf = a => b => a + b;

const liftf = fun => a => b => fun(a, b)

const pure = (x, y) => {
    const impure = (x) => {
      y++;
      z = x * y;
    }
    impure(x);
    return [y, z];
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