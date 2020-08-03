// This is my solution to the fun practice problems. They may not be the best
// as I've just started learning javascript.


// Write a function identity that takes an argument and returns that argument
const identity = x => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a,b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a,b) => a - b;
// or
const subb_fun = (a,b) => addb(a,-b);

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a,b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => a < b ? a : b;

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => a > b ? a : b;
// or
const maxb_fun = (a,b) => minb(a,b) == a ? b : a;

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
    let total = 0;
    for (num of nums) {
        total += num;
    }
    return total;
}

// Write a function sub that is generalized for any amount of arguments
const sub = (a,...nums) => {
    let total = a;
    for (num of nums) {
        total -= num;
    }
    return total;
}

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
    let total = 1;
    for (num of nums) {
        total *= num;
    }
    return total;
}

// Write a function min that is generalized for any amount of arguments
const min = (a,...nums) => {
    let smallest = a;
    for (num of nums) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

const max = (a,...nums) => {
    let biggest = a;
    for (num of nums) {
        if (num > biggest) {
            biggest = num;
        }
    }
    return biggest;
}

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
    let [ first, ...rest ] = nums;
    if(!rest.length) {
        return first;
    }
    return first + addRecurse(...rest);
}

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
    let [ first, ...rest ] = nums;
    if(!rest.length) {
        return first;
    }
    return first * mulRecurse(...rest);
}

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (first, ...nums) => {
    let [ second, ...rest ] = nums;
    if(!rest.length) {
        return first < second ? first : second;
    }
    return first < second ? minRecurse(first, ...rest) : minRecurse(second, ...rest);
}

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (first, ...nums) => {
    let [ second, ...rest ] = nums;
    if(!rest.length) {
        return first > second ? first : second;
    }
    return first > second ? maxRecurse(first, ...rest) : maxRecurse(second, ...rest);
}

// Write a function not that takes a function and returns the negation of its result
const not = f => {
    const inside = (...nums) => {
        return  !f(...nums);
    }
    return inside;
}

// Write a function acc that takes a function and an initial value and returns a
// function that runs the initial function on each argument, accumulating the result
const acc = (f, initVal) => {
    const inside = (...nums) => {
        return nums.reduce((acc, num) => {
            return f(acc,num);
        }, initVal);
    }
    return inside;
}

// Write a function accPartial that takes in a function, a start index, and an end index,
// and returns a function that accumulates a subset of its arguments by applying the given
// function to all elements between start and end.
const accPartial = (f, start, end) => {
    const inside = (...nums) => {
        let subset =  nums.slice(start,end).reduce((acc, num) => {
            return f(acc,num);
        });
        nums.splice(start, end-start, subset)
        return nums
    }
    return inside;
}

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => {
    const inside = (first, ...nums) => {
        first = func(initial, first);
        const recurse = (first, ...nums) => {
            let [ second, ...rest ] = nums;
            if(!rest.length) {
                return func(first, second);
            }
            return recurse(func(first,second), ...rest);
        }
        return recurse(first,...nums);
    }
    return inside;
}

// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = num => {
    let arr = [];
    for(let i=0; i<num; i++) {
        arr.push(num);
    }
    return arr;
}

// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, arr=[]) => {
    if(arr.length === num) {
        return arr;
    }
    arr.push(num)
    return fillRecurse(num, arr);
}

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
    return args.filter((arg, index) => args.indexOf(arg) === index);
}

// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => {
    const inside = () => {
        return x;
    }
    return inside;
}

// Write a function addf that adds from two invocations
const addf = (a) => (b) => a + b;

// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (f) => (a) => (b) => f(a,b);

// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x,y) => {
    function impure(x) {
      y++;
      z = x * y;
    }
    impure(x);
    return [y, z];
}


// Write a function curryb that takes a binary function and an argument, and returns a function
// that can take a second argument
const curryb = (func, a) => (b) => func(a, b);

// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...outer) => (...nums) => func(...outer,...nums);

// Without writting any new functions, show multiple ways to create the inc function
const inc = x => addb(x,1);

// Write a function twiceUnary that takes a binary function and returns a unary function
// that passes its argument to the binary function twice
const twiceUnary = f => a => f(a,a);

// Use the function twiceUnary to create the doubl function
const doubl = x => twiceUnary(addb)(x);

// Use the function twiceUnary to create the square function
const square = x => twiceUnary(mulb)(x);

// Write a function twice that is generalized for any amount of arguments
const twice = f => (...args) => f(f(...args), f(...args));

// Write a function reverseb that reverses the arguments of a binary function
const reverseb = f => (a,b) => f(b,a);

// Write a function reverse that is generalized for any amount of arguments
const reverse = f => (...args) => f(...(args.reverse()));

// Write a function composeuTwo that takes two unary functions and returns a
// unary function that calls them both
const composeuTwo = (f,g) => x => g(f(x));

// Write a function composeu that is generalized for any amount of arguments
const composeu = (...funcs) => {
    const inside = x => {
        for (func of funcs) {
            x = func(x);
        }
        return x;
    }
    return inside;
}

// Write a function composeb that takes two binary functions and returns a
// function that calls them both
const composeb = (f,g) => (a,b,c) => g(f(a,b),c);

// Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (f,g) => (...args) => g(f(...args));

// Write a function compose that takes any amount of functions and returns a function that
// takes any amount of arguments and gives them to the first function, then that result to
// the second function and so on
const compose = (...funcs) => (...args) => {
    for (func of funcs) {
        if(typeof(args) === "number") {
            args = func(args);
        }
        else {
            args = func(...args);
        }
    }
    return args;
}

// Write a function limitb that allows a binary function to be called a limited number of times
const limitb = ((f, lmt) => {
    const inside = (a,b) => {
        lmt -= 1;
        if (lmt >= 0) return f(a,b);
    }
    return inside;
});

// Write a function limit that is generalized for any amount of arguments
const limit = ((f, lmt) => {
    const inside = (...args) => {
        lmt -= 1;
        if(lmt >= 0) return f(...args);
    }
    return inside;
});

// Write a function genFrom that produces a generator that will produces a series of values
function* genFrom(start) {
    while(true) {
        yield start++;
    }
}

// Write a function genTo that takes a generator and an end limit, and returns a generator
// that will produce numbers up to that limit
function* genTo(gen, lmt) {
    let start = gen.next().value;
    yield start;
    while(lmt > start+1) {
        yield gen.next().value;
        lmt -= 1;
    }
    yield undefined;
}

// Write a function genFromTo that produces a generator that will produce values in a range
function* genFromTo(start, end) {
    while(start < end) {
        yield start++;
    }
    yield undefined;
}

// Write a function elementGen that takes an array and a generator and returns a generator
// that will produce elements from the array
function* elementGen(arr, gen) {
    let index = gen.next().value;
    while(index !== undefined) {
        yield arr[index];
        index = gen.next().value;
    }
    yield index;
}

// Write a function element that is a modified elementGen function so that the generator
// argument is optional. If a generator is not provided, then each of the elements of the
// array will be produced.
function* element(arr, gen=undefined) {
    if(gen === undefined) {
        yield* elementGen(arr, genFromTo(0, arr.length));
    }
    else {
        yield* elementGen(arr,gen);
    }
}

// Write a function collect that takes a generator and an array and produces a function
// that will collect the results in the array
function* collect(gen, arr) {
    let val = gen.next().value;
    while(val !== undefined) {
        yield val;
        arr.push(val);
        val = gen.next().value;
    }
    yield undefined;
}

// Write a function filter that takes a generator and a predicate and produces a generator
// that produces only the values approved by the predicate
function* filter(gen, predicate) {
    let val = gen.next().value;
    while(val !== undefined) {
        if (predicate(val)) yield val;
        val = gen.next().value;
    }
    yield undefined;
}

// Write a function filterTail that uses tail-recursion to perform the filtering
function* filterTail(gen, predicate) {
    let { value, done } = gen.next();

    if(done || value === undefined) yield undefined;
    if(predicate(value)) yield value;

    yield* filterTail(gen, predicate);

}

// Write a function concatTwo that takes two generators and produces a generator that
// combines the sequences
function* concatTwo(gen1, gen2) {
    let g1 = gen1.next().value;
    while(g1 !== undefined) {
        yield g1;
        g1 = gen1.next().value;
    }
    let g2 = gen2.next().value;
    while(g2 !== undefined) {
        yield g2;
        g2 = gen2.next().value;
    }
}

// Write a function concat that is generalized for any amount of arguments
function* concat(...gens) {
    for (gen of gens){
        let g = gen.next().value;
        while(g !== undefined) {
            yield g;
            g = gen.next().value;
        }
    }
}

// Write a function concatTail that uses tail-recursion to perform the concating
function* concatTail(...gens) {
    if(!gens.length) yield undefined;

    let [ first, ...rest] = gens;

    let g = first.next().value;
    while(g !== undefined) {
        yield g;
        g = first.next().value;
    }
    yield* concatTail(...rest);
}

// Write a function gensymf that makes a function that generates unique symbols
function* gensymf(symb) {
    let i = 1;
    while(true) {
        yield symb + i;
        i += 1
    }
}

// Write a function gensymff that takes a unary function and a seed and returns a gensymf
function gensymff(unary, seed) {
    function* inside(symb) {
        let s = seed; // needed because 'seed' was shared in different instances (scope)
        let symbol = symb + unary(s);
        while(true) {
            yield symbol;
            symbol = symb + unary(++s);
        }
    }
    return inside;
}

// Write a function fibonaccif that returns a generator that will return the next fibonacci number
function* fibonaccif(first, second) {
    yield first;
    yield second;
    let sum = first + second;
    while(true) {
        yield sum;
        first = second;
        second = sum;
        sum = first + second;
    }
}

// Write a function counter that returns an object containing two functions that implement
// an up/down counter, hiding the counter
const counter = (i) => {
    return {
        up: () => ++i,
        down: () => --i,
    }
}

// Write a function revocableb that takes a binary function, and returns an object
// containing an invoke function that can invoke a function and a revoke function that
// disables the invoke function
const revocableb = f => {
    let flag = true;
    return {
        invoke: (a,b) => {
            if (flag) {
                return f(a,b);
            }
            else {
                return undefined;
            }
        },
        revoke: () => {
            flag = false;
        },
    }
}

// Write a function revocable that is generalized for any amount of arguments
const revocable = f => {
    let flag = true;
    return {
        invoke: (...nums) => {
            if (flag) {
                return f(...nums);
            }
            else {
                return undefined;
            }
        },
        revoke: () => {
            flag = false;
        },
    }
}

// Write a function extract that takes an array of objects and an object property name
// and converts each object in the array by extracting that property
const extract = (arr, prop) => {
    arr.filter(el => {
        prop in el === true;
    });
    return arr.reduce((acc, elem) => {
        acc.push(Object.values(elem)[0])
        return acc;
    }, [])
}

// Write a function m that takes a value and an optional source string and returns
// them in an object
const m = (value, source='') => {
    return {
        value: value,
        source: source ? source : JSON.stringify(value),
    }
}

// Write a function addmTwo that adds two m objects and returns an m object
const addmTwo = (m1,m2) => {
    return {
        value: m1.value + m2.value,
        source: `(${m1.source}+${m2.source})`,
    }
}

// Write a function addm that is generalized for any amount of arguments
const addm = (...ms) => {
    let value = ms.reduce((acc, elem) => {
        return acc + elem.value;
    }, 0);

    let src = ms.reduce((acc, elem) => {
        return acc + '+' + elem.source;
    }, '');
    src = src.replace('+', '(');

    return {
        value: value,
        source: src + ')',
    }
}

// Write a function liftmbM that takes a binary function and a string and returns a
// function that acts on m objects
const liftmbM = (binary, op) => (a,b) => {
    return {
        value: binary(a.value, b.value),
        source: `(${a.source}${op}${b.source})`,
    }
}

// Write a function liftmb that is a modified function liftmbM that can accept arguments
// that are either numbers or m objects
const liftmb = (binary, op) => (a,b) => {
    return {
        value: typeof(a) === 'number' ? binary(a,b) : binary(a.value, b.value),
        source: typeof(a) === 'number' ? `(${a}${op}${b})` : `(${a.source}${op}${b.source})`,
    }
}

// Write a function liftm that is generalized for any amount of arguments
const liftm = (f, op) => (...args) => {
    return {
        value: typeof(args[0]) === 'number' ? f(...args) : f(...args.map(arg => arg.value)),
        source: typeof(args[0]) === 'number' ? `(${args.join(op)})` : `(${args.map(arg => arg.source).join(op)})`,
    }
}

// Write a function exp that evaluates simple array expressions
const exp = (value) => {
    return typeof(value) === 'number' ? value : value[0](...value.slice(1));
}

// Write a function expn that is a modified exp that can evaluate nested array expressions
const expn = (value) => {
    if(typeof(value) === 'number') return value;
    let f = value[0];
    if (Array.isArray(value[1])) {
        return f(...value.slice(1).map(elem => expn(elem)));
    }
    else {
        return f(...value.slice(1));
    }
}

// Write a function addg that adds from many invocations, until it sees an empty invocation
const addg = (b=undefined) => {
    let arr = [];
    const inside = (a=undefined) => {
        if (a === undefined && !arr.length) return undefined;
        else if (a === undefined) {
            return add(...arr);
        }
        else {
            arr.push(a);
            return inside;
        }
    }
    return inside(b);
}

// Write a function liftg that will take a binary function and apply it to many invocations
const liftg = (f) => {
    let total = 1; // used total instead of an array because it has to be a binary function
    let counter = 0;
    const inside = (a=undefined) => {
        if (a === undefined && !counter) return undefined;
        else if (a === undefined) {
            return total;
        }
        else {
            total = f(a, total);
            counter++;
            return inside;
        }
    }
    return inside;
}

// Write a function arrayg that will build an array from many invocations
const arrayg = (value=undefined) => {
    let arr = [];
    const inside = (val=undefined) => {
        if(val === undefined) return arr;

        arr.push(val);
        return inside;
    }
    return inside(value);
}

// Write a function continuizeu that takes a unary function and returns a function that
// takes a callback and an argument
const continuizeu = (f) => (cb, arg) => {
    cb(f(arg));
}

// Write a function continuize that takes a function and returns a function that takes a
// callback and an argument
const continuize = (f) => (cb, ...arg) => {
    cb(f(...arg));
}

// Make an array wrapper object with methods get, store, and append, such that an
// attacker cannot get access to the private array
const myVector = () => {
    let arr = [];
    return {
        append: (n) => arr.push(n),
        store: (index, n) => arr.splice(index, 0, n),
        get: (index) => arr[index],
    }
}

// Can you spot any security concerns with this approach? Mainly, can we get access to the
// array outside of vector? Note*: the issue has nothing to do with prototypes and we
// can assume that global prototypes cannot be altered. Hint*: Think about using this in
// a method invocation. Can we override a method of vector?

function vector() {
  var array = [];
  return {
    append: function append(v) {
      array.push(v);
    },
    get: function get(i) {
      return array[i];
    },
    store: function store(i, v) {
      array[i] = v;
    }
  };
}

function exploitVector(v) {
    var visible_array;
    v.store('push', function(x){visible_array=this});
    v.append(4345234);
    return visible_array;
}


// How would you rewrite vector to deal with the issue from above?
// use arrow functions
const vectorSafe = () => {
    let arr = [];
    return {
        append: (n) => arr.push(n),
        store: (index, n) => arr.splice(index, 0, n),
        get: (index) => arr[index],
    }
}

// Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all
// publications to all subscribers in the right order.
const pubsub = () => {
    let subscriptions = [];
    return {
        subscribe: (cb) => subscriptions.push(cb),
        publish: (val) => subscriptions.map(sub => sub(val)),
    }

}

// Make a function mapRecurse that performs a transformation for each element of a
// given array, recursively
const mapRecurse = (arr, f, marr=[]) => {
    if(!arr.length) return marr;
    marr.push(f(arr[0]));
    return mapRecurse(arr.slice(1), f, marr);
}

// Make a function filterRecurse that takes in an array and a predicate function and
// returns a new array by filtering out all items using the predicate, recursively.
const filterRecurse = (arr, f, farr=[]) => {
    if(!arr.length) return farr;
    if (f(arr[0])) farr.push(arr[0]);
    return filterRecurse(arr.slice(1), f, farr);
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
