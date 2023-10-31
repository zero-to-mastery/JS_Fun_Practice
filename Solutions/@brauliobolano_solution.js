// MY GitHub account: https://github.com/brauliobolano


//Write a function identity that takes an argument and returns that argument
const identity = (x) => (x); 

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;


//Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a-b; 

//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a*b;

//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a > b ? b : a);

//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

//Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a, b) => a + b, 0);
//const add = (...nums) => nums.reduce((accumulator, b) => accumulator + b, 0); 

//Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b) => b - a, 0);

//Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a, b) => a * b, 1);


//Write a function min that is generalized for any amount of arguments
const min = (...nums) => (nums.length === 1 ? nums[0] : Math.min(nums[0], min(...nums.slice(1))));

//Write a function max that is generalized for any amount of arguments
const max = (...nums) => (nums.length === 1? nums[0] : Math.max(nums[0], max(...nums.slice(1))));

//Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.length === 1 ? nums[0] : nums[0] + addRecurse(...nums.slice(1));

//Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.length === 1 ? nums[0] : nums[0] * mulRecurse(...nums.slice(1));

//not(func) ⇒ function
//Write a function not that takes a function and returns the negation of its result
//const not = (func) => (...args) => !func(...args);
const not = (func) => !func; 

//acc(func, initial) ⇒ function
//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => (...args) => args.reduce((a, b) => func(a, b), initial);

//Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end
const accPartial = (func, start, end) => (...args) => args.slice(start, end).reduce((a, b) => func(a, b));

//Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => (...args) => args.length === 0 ? initial : func(args[0], accRecurse(func, initial)(...args.slice(1)));

//Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => Array(num).fill(num);

//Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, arr = []) => arr.length === num ? arr : fillRecurse(num, [...arr, num]);

//Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => [...new Set(args)];

//Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => () => x;

//Write a function addf that adds from two invocations
const addf = (a) => (b) => a + b;

//Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (func) => (a) => (b) => func(a, b);

//Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => impure(x, y);

//Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (func, a) => (b) => func(a, b);

//Write a function curry that is generalized for any amount of arguments
const curry = (func, ...args) => (...moreArgs) => func(...args, ...moreArgs);

//Write a function inc that increments a value
const inc = (x) => x + 1;


//Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = (binary) => (arg) => binary(arg, arg);
const twiceAdd = twiceUnary(addb);

//Write a function doubl that is a specialization of twiceUnary with the binary function addb
const doubl = (a) => a + a;

//Write a function square that is a specialization of twiceUnary with the binary function mulb
const square = (a) => a * a;

//Write a function twice that is generalized for any amount of arguments and repeats the value
const twice = (func) => (...args) => func(...args, ...args);

//Write reverseb, a function that reverses the arguments of a binary function
const reverseb = (func) => (a, b) => func(b, a);

//Write reverse, a function that reverses the arguments of a function
const reverse = (func) => (...args) => func(...args.reverse());

//Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (func1, func2) => (a) => func2(func1(a));

//Write a function composeu that takes any amount of unary functions and returns a function that takes an argument and executes them in order
const composeu = (...funcs) => (a) => funcs.reduce((acc, func) => func(acc), a);

//Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (func1, func2) => (a, b, c) => func2(func1(a, b), c);

//Write a function composeTwo that takes two functions and returns a function that takes two arguments and executes them in order
const composeTwo = (func1, func2) => (...args) => func2(func1(...args));

//Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and executes them in order
const compose = (...funcs) => (...args) => funcs.reduce((acc, func) => func(...acc), args);

//Write a function limitb that allows a binary function to be called a limited number of times
const limitb = (func, limit) => (a, b) => limit > 0 ? (limit--, func(a, b)) : undefined;

//Write a function limit that allows a function to be called a limited number of times
const limit = (func, limit) => (...args) => limit > 0 ? (limit--, func(...args)) : undefined;

//Write a function genFrom that produces a generator that will produces a series of values
const genFrom = (num) => () => num++;

//Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit
const genTo = (gen, limit) => () => {
    const value = gen();
    return value < limit ? value : undefined;
};

//Write a function genFromTo that produces a generator that will produce values in a range
const genFromTo = (start, end) => genTo(genFrom(start), end);

//Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

const elementGen = (arr, gen) => () => {
    const index = gen();
    return index !== undefined ? arr[index] : undefined;
};

//Write a function element that is a modification of elementGen that takes an array and an optional generator index and returns a generator that will produce elements from the array
const element = (arr, gen = genFromTo(0, arr.length)) => () => {
    const index = gen();
    return index !== undefined ? arr[index] : undefined;
};

//Write a function collect that takes a generator and an array and produces a function that will collect the results in the array
const collect = (gen, arr) => () => {
    const value = gen();
    if (value !== undefined) arr.push(value);
    return value;
};

//Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate
const filter = (gen, predicate) => () => {
    const value = gen();
    return value !== undefined && !predicate(value) ? filter(gen, predicate)() : value;
};

//Write a function filterTail that uses tail-recursion to perform the filtering
const filterTail = (gen, predicate) => {
    const filtered = (value) => value !== undefined && !predicate(value) ? filterTail(gen, predicate) : value;
    return () => filtered(gen());
};

//Write a function concatTwo that takes two generators and produces a generator that combines the sequences
const concatTwo = (gen1, gen2) => () => {
    const value = gen1();
    return value !== undefined ? value : gen2();
};

//Write a function concat that takes any amount of generators and produces a generator that combines the sequences
const concat = (...gens) => gens.reduce(concatTwo);

//Write a function concatTail that uses tail-recursion to perform the concating
const concatTail = (gen1, gen2) => {
    const concated = (value) => value !== undefined ? value : gen2();
    return () => concated(gen1());
};

//Write a function gensymf that makes a function that generates unique symbols
const gensymf = (prefix) => {
    let number = 0;
    return () => prefix + number++;
};

//Write a function gensymff that takes a unary function and a seed and returns a gensymf
const gensymff = (unary, seed) => {
    const gensymf = gensymf(seed);
    return () => gensymf(unary);
};

//Write a function fibonaccif that returns a generator that will return the next fibonacci number
const fibonaccif = (a, b) => () => {
    const next = a;
    a = b;
    b += next;
    return next;
};

//Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter
const counter = (num) => ({
    up: () => num++,
    down: () => num--,
});

//Write a function revocableb that takes a binary function, and returns an object containing an invoke function that can invoke a function and a revoke function that disables the invoke function
const revocableb = (func) => ({
    invoke: (a, b) => func(a, b),
    revoke: () => func = undefined,
});

//Write a function revocable that is generalized for any amount of arguments
const revocable = (func) => ({
    invoke: (...args) => func(...args),
    revoke: () => func = undefined,
});

//Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property
const extract = (arr, prop) => arr.map((obj) => obj[prop]);

//Write a function m that takes a value and an optional source string and returns them in an object
const m = (value, source) => ({
    value,
    source: typeof source === 'string' ? source : String(value),
});

//Write a function addmTwo that takes two m objects and returns an m object
const addmTwo = (m1, m2) => m(m1.value + m2.value, `(${m1.source}+${m2.source})`);

//Write a function addm that is generalized for any amount of arguments
const addm = (...ms) => ms.reduce(addmTwo);

//Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects
const liftmbM = (func, str) => (m1, m2) => m(m1.value + m2.value, `(${m1.source}${str}${m2.source})`);

//Write a function liftmb that is a modification that allows the binary function to be used on scalar values
const liftmb = (func, str) => (m1, m2) => typeof m1 === 'number' && typeof m2 === 'number' ? m(m1 + m2, `(${m1}${str}${m2})`) : liftmbM(func, str)(m1, m2);

//Write a function liftm that is generalized for any amount of arguments
const liftm = (func, str) => (...ms) => ms.reduce((acc, m) => liftmb(func, str)(acc, m));

//Write a function exp that evaluates simple array expressions
const exp = (value) => Array.isArray(value) ? value[0](...value.slice(1).map(exp)) : value;

//Write a function expn that is a modification that allows exp to support nested array expressions
const expn = (value) => Array.isArray(value) ? value[0](...value.slice(1).map(expn)) : value;

//Write a function addg that adds from many invocations, until it sees an empty invocation
const addg = (a) => a === undefined ? undefined : (b) => b === undefined ? a : addg(a + b);

//Write a function liftg that will take a binary function and apply it to many invocations
const liftg = (func) => (a) => a === undefined ? undefined : (b) => b === undefined ? a : liftg(func)(func(a, b));

//Write a function arrayg that will build an array from many invocations
const arrayg = (a) => a === undefined ? [] : (b) => b === undefined ? [a] : [a, ...arrayg(b)];

//Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument
const continuizeu = (unary) => (callback, arg) => callback(unary(arg));

//Write a function continuize that takes a function and returns a function that takes a callback and an argument
const continuize = (func) => (callback, ...args) => callback(func(...args));

//Write a function vector that represents a vector in two-dimensional space
const vector = (x, y) => ({
    x,
    y,
    add: (vector) => vector(x + vector.x, y + vector.y),
});

//Write a function exploitVector that takes a two-dimensional vector and a function and returns a function that takes a second vector and calls the function on both vectors, returning the result
const exploitVector = (vector, func) => (vector2) => func(vector, vector2);

//Write a function vectorSafe that prevents any attempts to modify any arguments past the first invocation
const vectorSafe = (x, y) => ({
    x,
    y,
    add: (vector) => vectorSafe(x + vector.x, y + vector.y),
});

//Write a function pubsub that makes a publish/subscribe object
const pubsub = () => {
    const subscribers = [];
    return Object.freeze({
        subscribe: (subscriber) => subscribers.push(subscriber),
        publish: (...args) => subscribers.forEach((subscriber) => subscriber(...args)),
    });
};

//Write a function mapRecurse that performs a transformation for each element of a given array, recursively
const mapRecurse = (array, func) => array.length === 0 ? [] : [func(array[0]), ...mapRecurse(array.slice(1), func)];

//Write a function filterRecurse that performs a transformation for each element of a given array, recursively
const filterRecurse = (array, func) => array.length === 0 ? [] : func(array[0]) ? [array[0], ...filterRecurse(array.slice(1), func)] : filterRecurse(array.slice(1), func);

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