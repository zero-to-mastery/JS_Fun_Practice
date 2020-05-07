// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
console.log('identity => ' + identity(5));

// Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => x + y;
console.log('addb => ' + addb(1, 4));

// Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => x - y;
console.log('subb => ' + subb(1, 4));

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => x * y;
console.log('mulb => ' + mulb(1, 4));

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (x, y) => x < y ? x : y;
console.log('minb => ' + minb(1, 4));

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (x, y) => x > y ? x : y;
console.log('maxb => ' + maxb(5, 17));

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((p, c) => p + c);
console.log('add => ' + add(1, 4, 9));

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((p, c) => p - c);
console.log('sub => ' + sub(1, 4, 5));

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((p, c) => p * c);
console.log('mul => ' + mul(1, 4, 2));

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((p, c) => p < c ? p : c, Infinity);
console.log('min => ' + min(1, 4, -65));

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((p, c) => p > c ? p : c, -Infinity);
console.log('max => ' + max(5, 17, 55));

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
    return nums.length < 1 ? 0 : nums[0] + addRecurse(...nums.slice(1));
}
console.log('addRecurse => ' + addRecurse(1, 4, 9));

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
    return nums.length < 1 ? 1 : nums[0] * mulRecurse(...nums.slice(1));
}
console.log('mulRecurse => ' + mulRecurse(1, 4, 2));

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
    if (nums.length < 1) {
        return Infinity;
    }
    const next = minRecurse(...nums.slice(1));
    return nums[0] < next ? nums[0] : next;
}
console.log('minRecurse => ' + minRecurse(10, -44, 2));

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
    if (nums.length < 1) {
        return -Infinity;
    }
    const next = maxRecurse(...nums.slice(1));
    return nums[0] > next ? nums[0] : next;
}
console.log('maxRecurse => ' + maxRecurse(10, -44, 2));

// Write a function not that takes a function and returns the negation of its result
const not = (func) => {
    return (...args) => !func(...args);
};
// is even
console.log('not => ' + not((x) => x % 2 !== 0)(5));

// Write a function acc that takes a function and an initial value and returns a function 
// that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => {
    return (...args) => {
        let partial = initial;
        for (const el of args) {
            partial = func(partial, el);
        }
        return partial;
    }
}
console.log('acc => ' + acc(minb, 1)(1, 4, -3));

// Write a function accPartial that takes in a function, a start index, and an end index, 
// and returns a function that accumulates a subset of its arguments by applying the given 
// function to all elements between start and end.
const accPartial = (func, start, end) => {
    return (...args) => {
        if (end > args.length) {
            return null;
        }
        const subset = args.slice(start, end);
        let partial = subset[0];
        for (const el of subset.slice(1)) {
            partial = func(partial, el);
        }
        args.splice(start, end - start);
        args.splice(start, 0, partial);
        return args;
    }
}

console.log('accPartial => ' + accPartial(maxb, 1, 3)(1, 2, 3, 4));

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => {
    return (...args) => {
        if (args.length === 1) {
            return func(args[0], initial);
        }
        return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
    }
}
console.log('accRecurse => ' + acc(add, 1)(1, 4, -3));

// Write a function fill that takes a number and returns an array with that many numbers
// equal to the given number
const fill = (n) => Array.apply(null, { length: n }).map((e) => n);

console.log('fill => ' + fill(5));

// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (n) => {
    function recurse(n, times) {
        if (times === 1) {
            return [n];
        }
        return [n].concat(recurse(n, times - 1));
    }
    return recurse(n, n);
}
console.log('fillRecurse => ' + fillRecurse(5));

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...list) => {
    return list.filter((e, i) => list.indexOf(e) === i);
}
console.log('set => ' + set(1, 1, 1, 2, 2, 2));

// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => () => x;
console.log('identityf => ' + identityf(5)());

// Write a function addf that adds from two invocations
const addf = (x) => (y) => x + y;
console.log('addf => ' + addf(5)(4));

// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (func) => {
    return (x) => (y) => func(x, y);
}
console.log('liftf => ' + liftf(add)(3)(4));

// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => {
    function impure(x) {
        y++;
        return x * y;
    }
    const z = impure(x);
    return [y, z];
}
console.log('pure => ' + pure(20, 5));

// Write a function curryb that takes a binary function and an argument, and returns a function 
// that can take a second argument
const curryb = (func, x) => (y) => func(x, y);
console.log('curryb => ' + curryb(mul, 5)(6));

// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...nums) => (...outers) => func(...nums, ...outers);
console.log('curry => ' + curry(add, 1, 2, 4)(4, 2, 1));

// Without writting any new functions, show multiple ways to create the inc function
const inc = (x) => x += 1;
console.log('inc => ' + inc(inc(5)));

// Write a function twiceUnary that takes a binary function and returns a unary function that passes 
// its argument to the binary function twice
let twiceUnary = (binary) => (x) => binary(x, x);
console.log('twiceUnary => ' + twiceUnary(subb)(12));

// Use the function twiceUnary to create the doubl function
const doubl = twiceUnary(addb);
console.log('doubl => ' + doubl(12));

// Use the function twiceUnary to create the square function
const square = twiceUnary(mulb);
console.log('square => ' + square(12));

// Write a function twice that is generalized for any amount of arguments
const twice = (func) => (...args) => func(...args, ...args);
console.log('twice => ' + twice(mul)(1, 2, 4));

// Write a function reverseb that reverses the arguments of a binary function
const reverseb = (binary) => (x, y) => binary(y, x);
console.log('reverseb => ' + reverseb(subb)(1, 2));

// Write a function reverse that is generalized for any amount of arguments
const reverse = (func) => (...args) => func(...args.reverse());
console.log('reverse => ' + reverse(sub)(1, 2, 4));

// Write a function composeuTwo that takes two unary functions and returns a unary function that 
// calls them both
const composeuTwo = (unary1, unary2) => (x) => unary2(unary1(x));
console.log('composeuTwo => ' + composeuTwo(doubl, square)(5));

// Write a function composeu that is generalized for any amount of arguments
const composeu = (...funcs) => (x) => {
    let partial = x;
    funcs.forEach(func => {
        partial = func(partial);
    })
    return partial;
}
console.log('composeu => ' + composeu(doubl, square, identity, curry(add, 1, 2))(5));

// Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (binary1, binary2) => (a, b, c) => binary2(binary1(a, b), c);
console.log('composeb => ' + composeb(addb, mulb)(2, 3, 7));

// Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (func1, func2) => (...args) => func2(func1(...args));
console.log('composeTwo => ' + composeTwo(add, square)(2, 3, 7));

// Write a function compose that takes any amount of functions and returns a function that takes any amount 
// of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...funcs) => (...args) => {
    let partial = args;
    funcs.forEach(func => {
        partial = Array.isArray(partial) ? func(...partial) : func(partial);
    });
    return partial;
}
console.log('compose => ' + compose(add, doubl, fill, max)(0, 1, 2));

// Write a function limitb that allows a binary function to be called a limited number of times
const limitb = (binary, lmt) => (x, y) => lmt-- <= 0 ? undefined : binary(x, y);
let addLmtb = limitb(addb, 1);
console.log('limitb =>', addLmtb(3, 4), addLmtb(3, 5));

// Write a function limit that is generalized for any amount of arguments
const limit = (func, lmt) => (...args) => lmt-- <= 0 ? undefined : func(...args);
let addLmt = limit(add, 1);
console.log('limit =>', addLmt(1, 2, 4), addLmt(3, 5, 9, 2));

// Write a function genFrom that produces a generator that will produces a series of values
const genFrom = (v) => () => v++;
let index = genFrom(1);
console.log('genFrom =>', index(), index(), index());

// Write a function genTo that takes a generator and an end limit, and returns a generator that 
// will produce numbers up to that limit
const genTo = (gen, lmt) => () => {
    let val = gen();
    return lmt > val ? val : undefined;
}
index = genTo(genFrom(1), 3);
console.log('genTo =>', index(), index(), index());

// Write a function genFromTo that produces a generator that will produce values in a range
const genFromTo = (start, end) => () => start < end ? start++ : undefined;
index = genFromTo(0, 3);
console.log('genFromTo =>', index(), index(), index(), index());

// Write a function elementGen that takes an array and a generator and returns a generator that will 
// produce elements from the array
const elementGen = (array, gen) => () => array[gen()];
let el = elementGen(['a', 'b', 'c', 'd',], genFromTo(1, 3));
console.log('elementGen =>', el(), el(), el());

// Write a function element that is a modified elementGen function so that the generator argument is 
// optional. If a generator is not provided, then each of the elements of the array will be produced.
const element = (array) => {
    let index = 0;
    return () => array[index++];
}
el = element([-5, -4,]);
console.log('element =>', el(), el(), el());

// Write a function collect that takes a generator and an array and produces a function that will collect 
// the results in the array.
const collect = (gen, array) => () => {
    let val = gen();
    if (val !== undefined) {
        array.push(val);
    }
    return val;
}
let array = [];
let col = collect(genFromTo(0, 2), array);
console.log('collect =>', col(), col(), col(), array);

// Write a function filter that takes a generator and a predicate and produces a generator that produces only 
// the values approved by the predicate
const filter = (gen, predicate) => () => {
    let val = gen();
    if (val === undefined) {
        return undefined;
    } else if (predicate(val)) {
        return val;
    }
    return filter(gen, predicate)();
}
let fil = filter(genFromTo(0, 5), val => val % 3 === 0);
console.log('filter => ', fil(), fil(), fil());

// Write a function filterTail that uses tail-recursion to perform the filtering
// PS.: My filter function yet does tail recursion, I guess;
fil = filter(genFromTo(0, 5), val => val % 3 === 0);
console.log('filter => ', fil(), fil(), fil());

// Write a function concatTwo that takes two generators and produces a generator that combines the sequences
const concatTwo = (gen1, gen2) => () => {
    let val;
    if ((val = gen1()) !== undefined) {
        return val;
    }
    return gen2();
}
let con = concatTwo(genFromTo(0, 2), genFromTo(0, 1));
console.log('concatTwo =>', con(), con(), con(), con());

// Write a function concat that is generalized for any amount of arguments
const concat = (...gens) => {
    let current = gens[0];
    return () => {
        let val = current();
        if (val === undefined && gens.length > 1) {
            gens.splice(0, 1);
            current = gens[0];
            return current();
        }
        return val;
    }
}
con = concat(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7));
console.log('concat =>', con(), con(), con(), con(), con(), con(), con(), con());

// Write a function concatTail that uses tail-recursion to perform the concating
const concatTail = (...gens) => () => {
    let val = gens[0]();
    if (gens.length === 1) {
        return val;
    }
    return val !== undefined ? val : concatTail(...gens.slice(1))();
}
con = concatTail(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7));
console.log('concatTail =>', con(), con(), con(), con(), con(), con(), con(), con());

// Write a function gensymf that makes a function that generates unique symbols
const gensymf = (symbol) => {
    let counter = 1;
    return () => symbol + counter++;
}
let genH = gensymf('H');
console.log('gemsymf =>', genH(), genH());

// Write a function gensymff that takes a unary function and a seed and returns a gensymf
const gensymff = (unary, seed) => (symbol) => {
    return () => {
        seed = unary(seed);
        return symbol + seed;
    }
};
let gensym = gensymff(inc, 0);
let genG = gensym('G');
console.log('gemsymff =>', genG(), genG());

// Write a function fibonaccif that returns a generator that will return the next fibonacci number
const fibonaccif = (first, second) => {
    let index = 0;
    return () => {
        if (index++ === 0) {
            return first;
        } else if (index++ === 1) {
            return second;
        }
        let aux = first;
        first = second;
        second += aux;
        return second;
    }
}
let fib = fibonaccif(0, 1);
console.log('fibonnacif =>', fib(), fib(), fib());

// Write a function counter that returns an object containing two functions that implement an up/down 
// counter, hiding the counter
const counter = (value) => {
    return {
        up: () => ++value,
        down: () => --value,
    }
}
let obj = counter(10);
let { up, down } = obj;
console.log('counter =>', up(), down());

// Write a function revocableb that takes a binary function, and returns an object containing an invoke 
// function that can invoke a function and a revoke function that disables the invoke function
const revocableb = (binary) => {
    return {
        invoke: (x, y) => binary(x, y),
        revoke: function () {
            this.invoke = () => undefined;
        },
    }
}
let rev = revocableb(addb);
console.log('revocableb =>', rev.invoke(1, 2), rev.revoke(), rev.invoke(2, 3));

// Write a function revocable that is generalized for any amount of arguments
const revocable = (func) => {
    return {
        invoke: (...args) => func(...args),
        revoke: function () {
            this.invoke = () => undefined;
        },
    }
}
rev = revocable(mul);
console.log('revocable =>', rev.invoke(1, 2, 4), rev.revoke(), rev.invoke(2, 3));

// Write a function extract that takes an array of objects and an object property name 
// and converts each object in the array by extracting that property
const extract = (array, prop) => array.map((el) => el[prop]);
let people = [{ name: 'john' }, { name: 'bob' }];
console.log('extract =>', extract(people, 'name'));

// Write a function m that takes a value and an optional source string and returns them in an object
const m = (value, source) => {
    return {
        value,
        source: source ? source : value,
    }
}
console.log('m =>', JSON.stringify(m(Math.PI, "pi")));

// Write a function addmTwo that adds two m objects and returns an m object
const addmTwo = (m1, m2) => {
    return {
        value: m1.value + m2.value,
        source: `(${m1.source}+${m2.source})`,
    }
}
console.log('addmTwo =>', JSON.stringify(addmTwo(m(1), m(Math.PI, "pi"))));

// Write a function addm that is generalized for any amount of arguments
const addm = (...ms) => {
    return {
        value: ms.map(el => el.value).reduce((p, c) => p += c),
        source: `(${ms.map(el => el.source).join('+')})`,
    }
}
console.log('addm =>', JSON.stringify(addm(m(1), m(2), m(4))));

// Write a function liftmbM that takes a binary function and a string and returns a 
// function that acts on m objects
const liftmbM = (binary, op) => (x, y) => {
    return {
        value: binary(x.value, y.value),
        source: `(${x.source}${op}${y.source})`,
    }
}
console.log('liftmbM =>', JSON.stringify(liftmbM(mul, '*')(m(3), m(4))));

// Write a function liftmb that is a modified function liftmbM that can accept arguments
// that are either numbers or m objects
const liftmb = (binary, op) => (x, y) => {
    return {
        value: binary(x.value ? x.value : x, y.value ? y.value : y),
        source: `(${x.source ? x.value : x}${op}${y.source ? y.source : y})`,
    }
}
console.log('liftmb =>', JSON.stringify(liftmb(addb, '+')(3, m(4))));

// Write a function liftm that is generalized for any amount of arguments
const liftm = (func, op) => (...args) => {
    return {
        value: func(...args.map(el => el.value ? el.value : el)),
        source: `(${args.map(el => el.source ? el.source : el).join(op)})`,
    }
}
console.log('liftm =>', JSON.stringify(liftm(mul, '*')(m(3), m(4), 2)));

// Write a function exp that evaluates simple array expressions
const exp = (arg) => {
    return Array.isArray(arg) ? arg[0](...arg.slice(1)) : arg;
}
let sae = [mul, 1, 2, 4];
console.log('exp =>', exp(sae), exp(41));

// Write a function expn that is a modified exp that can evaluate nested array expressions
const expn = (arg) => {
    return Array.isArray(arg[1])
        ? arg[0](...arg.slice(1).map(el => expn(el)))
        : arg[0](...arg.slice(1));
}
let nae = [
    Math.sqrt,
    [
        add,
        [square, 3],
        [square, 4],
        [add, 5, 6],
    ]
];
console.log('expn =>', expn(nae));

// Write a function addg that adds from many invocations, until it sees an empty invocation
const addg = (val) => {
    const inner = (value) => {
        return value === undefined
            ? undefined
            : (another) => another === undefined
                ? value
                : inner(value + another);
    }
    return inner(val);
}
console.log('addg =>', addg(), addg(5)(), addg(4)(5)())

// Write a function liftg that will take a binary function and apply it to many invocations
const liftg = (binary) => {
    const inner = (value) => {
        return value === undefined
            ? undefined
            : (another) => another === undefined
                ? value
                : inner(binary(value, another));
    }
    return inner;
}
console.log('liftg =>', liftg(mulb)(), liftg(mulb)(5)(10)());

// Write a function arrayg that will build an array from many invocations
const arrayg = (val) => {
    const arr = [];
    const inner = (value) => {
        if (value === undefined) {
            return arr;
        }
        arr.push(value);
        return (another) => another === undefined
            ? arr
            : inner(another);
    }
    return inner(val);
}
console.log('arrayg =>', arrayg(), arrayg(3)(), arrayg(4)(5)(6)());

// Write a function continuizeu that takes a unary function and returns a function that
// takes a callback and an argument
const continuizeu = (unary) => (callback, arg) => { callback(unary(arg)) };
console.log('continuizeu =>', continuizeu(Math.sqrt)(console.log, 81));

// Write a function continuize that takes a function and returns a function that takes a callback and an argument
const continuize = (func) => (callback, ...arg) => { callback(func(...arg)) };
console.log('continuize =>', continuize(mul)(console.log, 81, 4, 2));

// Make an array wrapper object with methods get, store, and append, such that an attacker cannot 
// get access to the private array
const vector = () => {
    var arr = [];
    return {
        append: (v) => {
            arr.push(v);
        },
        get: (i) => {
            return arr[i];
        },
        store: (i, v) => {
            arr[i] = v;
        }
    };
}
let v = vector();
console.log('vector =>', v.append(5), v.store(1, 4), v.get(0), v.get(1));

// Can you spot any security concerns with this approach? Mainly, can we get access to the array 
// outside of vector? Note*: the issue has nothing to do with prototypes and we can assume that 
// global prototypes cannot be altered. Hint*: Think about using this in a method invocation. 
// Can we override a method of vector?

// jumping exploitVector

// How would you rewrite vector to deal with the issue from above?

// jumping vectorSafe

// Make a function pubsub that makes a publish/subscribe object. It will reliably deliver all 
// publications to all subscribers in the right order.
const pubsub = () => {
    const subscribers = [];
    return {
        subscribe: (callback) => {
            subscribers.push(callback);
        },
        publish: (value) => {
            subscribers.forEach(sub => { sub(value) });
        },
    }
}
let ps = pubsub();
ps.subscribe(console.log);
console.log('pubsub =>', ps.publish('testing...'));

// Make a function mapRecurse that performs a transformation 
// for each element of a given array, recursively
const mapRecurse = (array, predicate) => {
    if (array.length === 1) {
        return predicate(array[0]);
    }
    return array.splice(0, 1).map(el => predicate(el)).concat(mapRecurse(array, predicate));
}
console.log('mapRecurse =>', mapRecurse([ 1, 2, 3, 4 ], x => x * 2));

// Make a function filterRecurse that takes in an array and a predicate function and returns a new 
// array by filtering out all items using the predicate, recursively.
const filterRecurse = (array, predicate) => {
    if (array.length === 1) {
        return predicate(array[0]) ? array[0] : null;
    }
    return array.splice(0, 1).filter(predicate).concat(filterRecurse(array, predicate));
}
console.log('filterRecurse =>', filterRecurse([ 1, 2, 3, 4 ], x => x % 2 === 0));