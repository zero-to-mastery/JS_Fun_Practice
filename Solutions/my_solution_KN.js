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
const fill = (n) => Array.apply(null, {length: n}).map((e) => n);

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
