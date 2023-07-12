/**
 * Takes an argument and returns that argument.
 * @param {*} x 
 * @example
 * identity(3) // 3
 */
const identity = x => x;

/**
 * Takes two numbers and returns their sum
 * @param {Number} a 
 * @param {Number} b 
 * @example
 * addb(3, 4) // 3 + 4 = 7
 */
const addb = (a, b) => a + b;

/**
 * Takes two numbers and returns their difference
 * @param {Number} a 
 * @param {Number} b 
 * @example
 * subb(3, 4) // 3 - 4 = -1
 */
const subb = (a, b) => a - b;

/**
 * Takes two numbers and returns their product
 * @param {Number} a 
 * @param {Number} b 
 * @example
 * mulb(3, 4) // 3 * 4 = 12
 */
const mulb = (a, b) => a * b;

/**
 * Takes two numbers and returns the smaller one
 * @param {Number} a 
 * @param {Number} b 
 * @example 
 */
const minb = (a, b) => a > b ? b : a;

/**
 * Takes two numbers and returns the larger one
 * @param {Number} a 
 * @param {Number} b 
 * @example
 * maxb(3, 4) // 4
 */
const maxb = (a, b) => a > b ? a : b;

/**
 * Generalize of addb for any amount of arguments
 * @see {@link addb}
 * @param  {...Number} nums 
 * @example
 * add(1, 2, 4) // 1 + 2 + 4 = 7
 */
const add = (...nums) => nums.reduce((previous, current) => addb(previous, current));

/**
 * Generalize of subb for any amount of arguments
 * @see {@link subb}
 * @param  {...Number} nums 
 * @example
 * sub(1, 2, 4) // 1 - 2 - 4 = -5
 */
const sub = (...nums) => nums.reduce((previous, current) => subb(previous, current));

/**
 * Generalize of mulb for any amount of arguments
 * @see {@link mulb}
 * @param  {...Number} nums 
 * @example
 * mul(1, 2, 4) // 1 * 2 * 4 = 8
 */
const mul = (...nums) => nums.reduce((previous, current) => mulb(previous, current));

/**
 * Generalize of minb for any amount of arguments
 * @see {@link minb}
 * @param  {...Number} nums 
 * @example
 * min(1, 2, 4) // 1
 */
const min = (...nums) => nums.reduce((previous, current) => minb(previous, current));

/**
 * Generalize of maxb for any amount of arguments
 * @see {@link maxb}
 * @param  {...Number} nums 
 * @example
 * max(1, 2, 4) // 4
 */
const max = (...nums) => nums.reduce((previous, current) => maxb(previous, current));

/**
 * Generalize of addb for any amount of arguments but uses recursion
 * @see {@link addb}
 * @param  {...Number} nums 
 * @returns {Number}
 * @example
 * addRecurse(1, 2, 4) // 1 + 2 + 4 = 7
 */
function addRecurse(...nums) {
    if (nums.length <= 1)
        return nums[0];
    return addb(nums[0], addRecurse(...nums.slice(1)));
}

/**
 * Generalize of mulb for any amount of arguments but uses recursion
 * @see {@link mulb}
 * @param  {...Number} nums 
 * @returns {Number}
 * @example
 * minRecurse(1, 2, 4) // 1
 */
function mulRecurse(...nums) {
    if (nums.length <= 1)
        return nums[0];
    return mulb(nums[0], mulRecurse(...nums.slice(1)));
}

/**
 * Generalize of minb for any amount of arguments but uses recursion
 * @see {@link minb}
 * @param  {...Number} nums 
 * @example
 * minRecurse(1, 2, 4) // 1
 */
function minRecurse(...nums) {
    if (nums.length <= 1)
        return nums[0]
    return minb(nums[0], minRecurse(...nums.slice(1)));
}

/**
 * Generalize of maxb for any amount of arguments but uses recursion
 * @see {@link maxb}
 * @param  {...Number} nums 
 * @example
 * maxRecurse(1, 2, 4) // 4
 */
const maxRecurse = (...nums) => nums.length <= 1 ? nums[0] : maxb(nums[0], maxRecurse(...nums.slice(1)));

/**
 * Takes a function and returns the negation of its result
 * @param {Function} func 
 * @example
 * const isOdd = (x) => x % 2 === 1
 * const isEven = not(isOdd)
 * isEven(1) // false
 * isEven(2) // true
 */
const not = func => a => !func(a);

/**
 * Takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
 * @param {Function} func 
 * @param {*} initial 
 * @returns 
 * @example
 * let add = acc(addb, 0)
 * add(1, 2, 4) // 7
 * 
 * let mul = acc(mulb, 1)
 * mul(1, 2, 4) // 8
 */
const acc = (func, initial) => (...nums) => nums.reduce((acc, value) => func(acc, value), initial);

/**
 * Takes an argument and returns a function that returns that argument
 * @param {*} x 
 * @returns 
 * @example
 * let three = identityf(3)
 * three() // 3
 */
const identityf = (x) => () => x;

/**
 * Adds from two invocations
 * @param {Number} a 
 * @returns 
 * @example
 * addf(3)(4) // 7
 */
const addf = (a) => (b) => addb(a, b);

/**
 * Takes a binary function, and makes it callable with two invocations
 * @param {Function} binary 
 * @returns 
 * @example
 * let addf = liftf(addb)
 * addf(3)(4) // 7
 * 
 * liftf(mulb)(5)(6) // 30
 */
const liftf = (binary) => (a) => (b) => binary(a, b)

/**
 * Takes a binary function and an argument, and returns a function that can take a second argument
 * @param {Function} binary 
 * @param {*} a 
 * @returns 
 * @example
 * let add3 = curryb(addb, 3)
 * add3(4) // 7
 * 
 * curryb(mulb, 5)(6) // 30
 */
const curryb = (binary, a) => (b) => binary(a, b);

/**
 * Generalized for any amount of arguments
 * @param {Function} func 
 * @param  {...any} outer 
 * @returns 
 * @example
 * curry(add, 1, 2, 4)(4, 2, 1) = 1 + 2 + 4 + 4 + 2 + 1 = 14
 * curry(sub, 1, 2, 4)(4, 2, 1) = 1 - 2 - 4 - 4 - 2 - 1 = -12
 * curry(mul, 1, 2, 4)(4, 2, 1) = 1 * 2 * 4 * 4 * 2 * 1 = 64
 */
const curry = (func, ...outer) => (...inner) => func(...outer, ...inner);

/**
 * Increase a number by 1
 * @param {Number} x 
 * @returns 
 * @example 
 * inc(5) // 6
 * inc(inc(5)) // 7
 */
const inc = (x) => ++x;

/**
 * Takes a binary function and returns a unary function that passes its argument to the binary function twice
 * @param {Function} binary 
 * @returns 
 * @example
 * let doubl = twiceUnary(addb)
 * doubl(11) // 22
 * 
 * let square = twiceUnary(mulb)
 * square(11) // 121 
 */
const twiceUnary = (binary) => (x) => binary(x, x);

/**
 * Use the function `twiceUnary` to create the doubl function
 * @see {@link twiceUnary}
 * @param {Number} x 
 * @returns 
 * @example
 * doubl(11) // 22
 */
const doubl = (x) => twiceUnary(addb)(x);

/**
 * Use the function `twiceUnary` to create the square function    
 * @see {@link twiceUnary}
 * @param {Number} x 
 * @returns 
 * @example
 * square(11) // 121
 */
const square = (x) => twiceUnary(mulb)(x);

/**
 * Generalized for any amount of arguments
 * @see {@link twiceUnary}
 * @param {Function} x 
 * @returns 
 * @example
 * let doubleSum = twice(add)
 * doubleSum(1, 2, 4) // 1 + 2 + 4 + 1 + 2 + 4 = 14
 */
const twice = (x) => (...inner) => doubl(x(...inner));

/**
 * Reverses the arguments of a binary function
 * @param {Function} binary 
 * @returns 
 * @example
 * let bus = reverseb(subb)
 * bus(3, 2) // -1
 */
const reverseb = (binary) => (a, b) => binary(b, a);

/**
 * Generalized for any amount of arguments
 * @see {@link reverseb}
 * @param {*} func 
 * @returns 
 * @example 
 * reverse(sub)(1, 2, 4) // 4 - 2 - 1 = 1
 */
const reverse = func => (...inner) => func(...inner.slice().reverse());

/**
 * Takes two unary functions and returns a unary function that calls them both
 * @param {Function} unary1 
 * @param {Function} unary2 
 * @returns 
 * @example
 * composeuTwo(doubl, square)(5) // (5 * 2)^2 = 100
 */
const composeuTwo = (unary1, unary2) => (x) => unary2(unary1(x));

/**
 * Generalized for any amount of arguments
 * @see {@link composeuTwo}
 * @param  {...Function} funcs 
 * @returns 
 * @example
 * composeu(doubl, square, identity, curry(add, 1, 2))(5) // (5 * 2)^2 + 1 + 2 = 103
 */
const composeu = (...funcs) => (x) => funcs.reduce((acc, func) => func(acc), x);

/**
 * Takes in a function, a start index, and an end index, and returns a function that accumulates 
 * a subset of its arguments by applying the given function to all elements between start and end.
 * @param {Function} func 
 * @param {Number} start 
 * @param {Number} end 
 * @returns 
 * @example
 * const addSecondToThird = accPartial(add, 1, 3)
 * addSecondToThird(1, 2, 4, 8) // [ 1, 6, 8 ]
 */
const accPartial = (func, start, end) => (...nums) => { nums.splice(start, end - start, func(...nums.slice(start, end))); return nums; };

/**
 * Does what `acc` does but uses recursion
 * @see {@link acc}
 * @param {Function} func 
 * @param {Number} initial 
 * @returns 
 * @example
 * let add = accRecurse(addb, 0)
 * add(1, 2, 4) // 7
 * 
 * let mul = accRecurse(mulb, 1)
 * mul(1, 2, 4) // 8
 */
const accRecurse = (func, initial) => (...nums) => nums.length <= 1 ? initial + nums.pop() : nums.pop() + accRecurse(func, initial)(...nums);

/**
 * Takes a number and returns an array with that many numbers equal to the given number
 * @param {Number} num 
 * @returns 
 * @example
 * fill(3) // [ 3, 3, 3 ]
 */
const fill = (num) => Array.from({ length: num }, () => num);

/**
 * Takes two binary functions and returns a function that calls them both
 * @param {Function} binary1 
 * @param {Function} binary2 
 * @returns 
 * @example
 * composeb(addb, mulb)(2, 3, 7) // (2 + 3) * 7 = 35
 */
const composeb = (binary1, binary2) => (a, b, c) => binary2(binary1(a, b), c);

// Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (func1, func2) => (...nums) => func2(func1(...nums));

// Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...funcs) => (...nums) => funcs.reduce((prevValue, func) => Array.isArray(prevValue) ? func(...prevValue) : func(prevValue), nums);

/**
 * Does what `fill` does but uses recursion
 * @see {@link fill}
 * @param {Number} num 
 * @returns 
 * @example
 * fillRecurse(3) // [ 3, 3, 3 ]
 */
const fillRecurse = (num) => {
    function fillArray(n, i, a) {
        a.push(i);
        return a.length < n ? fillArray(n, i, a) : a;
    }
    return fillArray(num, num, []);
}

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => Array.from(new Set(args));

// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => {
    let z;
    function impure(x) {
        y++;
        z = x * y;
    }
    impure(x);
    return [y, z]
}

// Write a function limitb that allows a binary function to be called a limited number of times
const limitb = (binary, lmt) => (a, b) => lmt-- > 0 ? binary(a, b) : undefined;

// Write a function limit that is generalized for any amount of arguments
const limit = (func, lmt) => (...nums) => lmt-- > 0 ? func(...nums) : undefined;

/**
 * Produces a generator that will produces a series of values. Follows the iterator protocol for the returned format
 * @param {Number} x 
 * @example
 * let index = genFrom(0)
 * 
 * index.next().value // 0
 * index.next().value // 1
 * index.next().value // 2
 */
function* genFrom(x) {
    while (true) {
        yield x;
        ++x;
    }
}

/**
 * Takes a generator and an end limit, and returns a generator that will produce numbers up to that limit
 * @param {Function} gen 
 * @param {Number} lmt 
 * @example
 * let index = genTo(genFrom(1), 3)
 * 
 * index.next().value // 1
 * index.next().value // 2
 * index.next().value // undefined
 */
function* genTo(gen, lmt) {
    while (true) {
        x = gen.next().value
        yield x < lmt ? x : undefined
    }
}

/**
 * Produces a generator that will produce values in a range
 * @param {Number} start 
 * @param {Number} end 
 * @returns 
 * @example
 * let index = genFromTo(0, 3)
 * index.next().value // 0
 * index.next().value // 1
 * index.next().value // 2
 * index.next().value // undefined
 */
const genFromTo = (start, end) => genTo(genFrom(start), end);

/**
 * Takes an array and a generator and returns a generator that will produce elements from the array
 * @param {Array} array 
 * @param {Function} gen 
 * @returns 
 * @example
 * let ele = elementGen(['a', 'b', 'c', 'd'], genFromTo(1, 3))
 * 
 * ele.next().value // 'b'
 * ele.next().value // 'c'
 * ele.next().value // undefined
 */
const elementGen = (array, gen) => ({
    next: () => {
        let i = gen.next().value;
        return {
            value: i < 0 || i > array.length - 1 ? undefined : array[i]
        }
    }
})

/**
 * A modified elementGen function so that the generator argument is optional. 
 * If a generator is not provided, then each of the elements of the array will be produced.
 * @param {Array} array 
 * @param {Function} gen 
 * @returns 
 * @example
 * let ele = element(['a', 'b', 'c', 'd'])
 * 
 * ele.next().value // 'a'
 * ele.next().value // 'b'
 * ele.next().value // 'c'
 * ele.next().value // 'd'
 * ele.next().value // undefined
 */
const element = (array, gen = genFromTo(0, array.length)) => elementGen(array, gen)

/**
 * Takes a generator and a predicate and produces a generator that produces only the values approved by the predicate
 * @param {Function} gen 
 * @param {Function} predicate 
 * @returns 
 * @example
 * let third = (val) => val % 3 === 0
 * let fil = filter(genFromTo(0, 5), third)
 * 
 * fil.next().value // 0
 * fil.next().value // 3
 * fil.next().value // undefined
 */
const filter = (gen, predicate) => ({
    next: () => {
        let a = gen.next().value;
        while (a !== undefined) {
            if (predicate(a))
                return {
                    value: a
                }
            a = gen.next().value;
        }
        return {
            value: undefined
        }
    }
})

/**
 * Takes a generator and an array and produces a function that will collect the results in the array
 * @param {Function} gen 
 * @param {Array} array 
 * @returns 
 * @example
 * let array = []
 * let col = collect(genFromTo(0, 2), array)
 * 
 * col.next().value // 0
 * col.next().value // 1
 * col.next().value // undefined
 * array // [0, 1]
 */
const collect = (gen, array) => ({
    next: () => {
        let i = gen.next().value;
        if (i !== undefined)
            array.push(i);
        return {
            value: i
        }
    }
})

/**
 * Uses tail-recursion to perform the filtering
 * @param {Function} gen 
 * @param {Function} predicate 
 * @returns 
 * @example
 * let third = (val) => val % 3 === 0
 * let fil = filterTail(genFromTo(0, 5), third)
 * 
 * fil.next().value // 0
 * fil.next().value // 3
 * fil.next().value // undefined
 */
const filterTail = (gen, predicate) => ({
    next: () => {
        let i = gen.next().value;
        while (!predicate(i) && i !== undefined) {
            i = gen.next().value;
        }
        return {
            value: i
        }
    }
})

/**
 * Takes two generators and produces a generator that combines the sequences
 * @param {Function} gen1 
 * @param {Function} gen2 
 * @returns 
 * @example
 * let con = concatTwo(genFromTo(0, 3), genFromTo(0, 2))
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // 2
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // undefined
 */
const concatTwo = (gen1, gen2) => ({
    next: () => {
        let i = gen1.next().value;
        if (i !== undefined)
            return { value: i };
        i = gen2.next().value;
        return { value: i };
    }
})

/**
 * Generalized for any amount of arguments
 * @param  {...Function} gens 
 * @returns 
 * @example 
 * let con = concat(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7))
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // 2
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // 5
 * con.next().value // 6
 * con.next().value // undefined
 */
const concat = (...gens) => {
    let idx = 0;
    return {
        next: () => {
            let i = gens[idx].next().value;

            if (idx < gens.length - 1 && i === undefined) {
                ++idx;
                i = gens[idx].next().value;
                return { value: i };
            }
            return { value: i };
        }
    }
}

/**
 * Returns an object containing two functions that implement an up/down counter, hiding the counter
 * @param {Number} i 
 * @returns 
 * @example
 * let obj = counter(10)
 * let { up, down } = obj
 * 
 * up() // 11
 * down() // 10
 * down() // 9
 * up() // 10
 */
const counter = (i) => {
    let a = i;
    return {
        up: () => ++a,
        down: () => --a
    }
}

/**
 * Returns a generator that will return the next fibonacci number
 * @param {Number} first 
 * @param {Number} second 
 * @returns 
 * @example
 * let fib = fibonaccif(0, 1)
 * fib.next().value // 0
 * fib.next().value // 1
 * fib.next().value // 1
 * fib.next().value // 2
 * fib.next().value // 3
 * fib.next().value // 5
 * fib.next().value // 8
 */
const fibonaccif = (first, second) => ({
    next: () => {
        let value = first;
        let third = first + second;
        first = second;
        second = third;
        return { value }
    }
})

/**
 * Takes a value and an optional source string and returns them in an object
 * @param {*} value 
 * @param {*} source 
 * @returns 
 * @example
 * m(1) // {value:1, source:"1"}
 * 
 * m(Math.PI, 'pi') // {value:3.14159..., source:"pi"}
 */
function m(value, source) {
    return {
        value,
        source: source ? '' + source : '' + value
    }
}

/**
 * Adds two `m` objects and returns an `m` object
 * @see {@link m}
 * @param {Function} m1 
 * @param {Function} m2 
 * @returns 
 * @example
 * addmTwo(m(3), m(4)) // {value:7, source:"(3+4)"}
 * 
 * addmTwo(m(1, m(Math.PI, 'pi'))) // {value:4.14159..., source:"(1+pi)"}
 */
const addmTwo = (m1, m2) => ({ value: m1.value + m2.value, source: '(' + [m1.source, m2.source].join('+') + ')' })

/**
 * Generalized for any amount of arguments
 * @see {@link m}
 * @param  {...Function} ms 
 * @returns 
 * @example
 * addm(m(1), m(2), m(4)) // {value:7, source:"(1+2+4)"}
 */
const addm = (...ms) => ({ value: add(...ms.flatMap(m => m.value)), source: '(' + ms.flatMap(m => m.source).join('+') + ')' })

/**
 * Takes a binary function and a string and returns a function that acts on `m` objects
 * @see {@link m}
 * @param {Function} binary 
 * @param {String} op 
 * @returns 
 * @example
 * let addmb = liftmbM(addb, '+')
 * 
 * addmb(m(3), m(4)) // {value:7, source:"(3+4)"}
 * 
 * liftmbM(mul, '*')(m(3), m(4)) // {value:12, source:"(3*4)"}
 */
const liftmbM = (binary, op) => (m1, m2) => ({ value: binary(m1.value, m2.value), source: '(' + [m1.source, m2.source].join(op) + ')' })

/**
 * A modified function `liftmbM` that can accept arguments that are either numbers or m objects
 * @see {@link liftmbM}
 * @param {Function} binary 
 * @param {String} op 
 * @returns 
 * @example
 * let addmb = liftmb(addb, '+')
 * 
 * addmb(3, 4) // {value:7, source:"(3+4)"}
 */
const liftmb = (binary, op) => (m1, m2) => typeof m1 === 'object' && typeof m2 === 'object'
    ? liftmbM(m1, m2) : { value: binary(m1, m2), source: '(' + [m1, m2].join(op) + ')' }

/**
 * Generalized for any amount of arguments
 * @param {Function} func 
 * @param {String} op 
 * @example
 * let addm = liftm(add, '+')
 * addm(m(3), m(4)) // {value:7, source:"(3+4)"}
 * liftm(mul, '*')(m(3), m(4)) // {value:12, source:"(3*4)"}
 * @returns 
 */
function liftm(func, op) {
    return (...ms) => {
        return {
            value: func(...ms.flatMap(m => typeof m === 'object' ? m.value : m)),
            source: '(' + ms.flatMap(m => typeof m === 'object' ? m.source : '' + m).join(op) + ')'
        }
    }
}

/**
 * Evaluates simple array expressions
 * @param {Array | any} value
 * @example
 * let sae = [mul, 1, 2, 4]
 * exp(sae) // 1 * 2 * 4 = 8
 * exp(42) // 42
 */
function exp(value) {
    return Array.isArray(value) ? value[0](...value.slice(1)) : value;
}

/**
 * Makes a publish/subscribe object and delivers all publications to all subscribers in the right order.
 * @example
 * let ps = pubsub()
 * ps.subscribe(console.log)
 * ps.publish('It works!') // logs 'It works!'
 * @returns 
 */
function pubsub() {
    let funcs = [];
    return {
        /**
         * @param {Function} func 
         */
        subscribe: (func) => {
            funcs.push(func);
        },
        publish: (value) => {
            funcs.forEach(func => func(value));
        }
    }
}

/**
 * Performs a transformation for each element of a given array, recursively
 * @param {Array} array 
 * @param {Function} callback 
 * @example
 * mapRecurse([1, 2, 3, 4], (x) => x * 2) // [ 2, 4, 6, 8 ]
 * @returns  {Array}
 */
function mapRecurse(array, callback) {
    if (array.length <= 1)
        return [callback(array[0])];

    return [callback(array[0]), ...mapRecurse(array.slice(1), callback)];
}

/**
 * Takes in an array and a predicate function and returns a new array by filtering out all items using the predicate, recursively.
 * @param {Array} array 
 * @param {Function} predicate 
 * @example
 * filterRecurse([1, 2, 3, 4], (x) => x % 2 === 0) // [ 2, 4 ]
 */
function filterRecurse(array, predicate) {
    if (array.length <= 1)
        return predicate(array[0]) ? array : [];

    return predicate(array[0]) ? [array[0], ...filterRecurse(array.slice(1), predicate)]
        : filterRecurse(array.slice(1), predicate);
}

/**
 * Array wrapper object with methods `get`, `store`, and `append`
 */
let vector = () => {
    let array = []
    return {
        /**
         * @param {*} value 
         * @returns {void}
         */
        append: (value) => array.push(value),
        /**
         * @param {Number} idx 
         * @param {*} value 
         * @returns {void}
         */
        store: (idx, value) => array[idx] = value,
        /**
         * @param {Number} idx 
         * @returns {*}
         */
        get: (idx) => array[idx]
    }
}

/**
 * Exploit `vector` security concerns
 * @param {Object} v 
 * @returns {Array}
 * @example
 * let v = vector()
 * v.append(1)
 * v.append(2)
 * let internalData = exploitVector(v) // [1, 2]
 */
function exploitVector(v) {
    // js engine fix issue and there is no way to access using override and `this` keyword to access private array
    v.get = (idx) => this.array;
    return v.get(0);
}

/**
 * Array wrapper object with methods `get`, `store`, and `append` (Safe version)
 * @returns 
 */
function vectorSafe() {
    let array = [];
    return {
        /**
         * @param {*} value 
         * @returns {void}
         */
        append: (value) => array.push(value),
        /**
         * @param {Number} idx 
         * @param {*} value 
         * @returns {void}
         */
        store: (idx, value) => array[idx] = value,
        /**
         * @param {Number} idx 
         * @returns {*}
         */
        get: (idx) => array[idx]
    }
}

/**
 * A modified exp that can evaluate nested array expressions
 * @see {@link exp}
 * @param {*} value 
 * @example
 * let nae = [Math.sqrt, [add, [square, 3], [square, 4]]]
 * 
 * expn(nae) // sqrt(((3*3)+(4*4))) === 5
 */
function expn(value) {
    if (value.length < 2) return exp(value);
    return exp([value[0], ...value.slice(1).flatMap(e => Array.isArray(e) ? expn(e) : exp(e))]);
}

/**
 * Adds from many invocations, until it sees an empty invocation
 * @param {Number} value 
 * @example
 * addg() // undefined
 * addg(2)() // 2
 * addg(2)(7)() // 9
 * addg(3)(0)(4)() // 7
 * addg(1)(2)(4)(8)() // 15
 */
function addg(value) {
    return value === undefined
        ? value
        : (nextValue) =>
            nextValue === undefined ? value : addg(addb(value, nextValue));
}

/**
 * Takes a binary function and apply it to many invocations
 * @param {Function} binary 
 * @example
 * liftg(mulb)() // undefined
 * liftg(mulb)(3)() // 3
 * liftg(mulb)(3)(0)(4)() // 0
 * liftg(mulb)(1)(2)(4)(8)() // 64
 */
function liftg(binary) {
    return binary === undefined ? binary
        : (value) => value === undefined ? value
            : nextValue => nextValue === undefined ? value : liftg(binary)(binary(value, nextValue));
}

/**
 * Build an array from many invocations
 * @param {*} value 
 * @example 
 * arrayg() // []
 * arrayg(3)() // [3]
 * arrayg(3)(4)(5)() // [3, 4, 5]
 */
function arrayg(value) {
    let result = [];

    const append = (nextValue) => {
        if (nextValue === undefined)
            return result;
        result.push(nextValue);
        return append;
    }

    return append(value);
}

/**
 * Takes a unary function and returns a function that takes a callback and an argument
 * @param {Function} unary 
 * @example
 * let sqrtc = continuizeu(Math.sqrt)
 * sqrtc(console.log, 81) // logs '9'
 */
function continuizeu(unary) {
    return (func, value) => {
        return func(unary(value));
    }
}

/**
 * Takes a function and returns a function that takes a callback and arguments
 * @param {Function} func 
 * @example
 * let mullc = continuize(mul)
 * mullc(console.log, 81, 4, 2) // logs '648'
 */
function continuize(func) {
    return (callback, ...args) => {
        return callback(func(...args));
    }
}

/**
 * Takes an array of objects and an object property name and converts each object in the array by extracting that property
 * @param {Array} array 
 * @param {string} prop 
 * @example
 * let people = [{ name: 'john' }, { name: 'bob' }]
 * let names = extract(people, 'name') // ['john', 'bob']
 */
function extract(array, prop) {
    return array.flatMap(obj => obj[prop]);
}

/**
 * Takes a binary function, and returns an object containing an `invoke` function 
 * that can invoke a function and a `revoke` function that disables the `invoke` function
 * @param {Function} binary 
 * @example
 * let rev = revocableb(addb)
 * 
 * rev.invoke(3, 4) // 7
 * rev.revoke()
 * rev.invoke(5, 7) // undefined
 */
function revocableb(binary) {
    let func = binary;
    return {
        revoke: () => func = undefined,
        invoke: (a, b) => func ? func(a, b) : func,
    }
}

/**
 * revocable(func)
 * @param {Function} func 
 * @example
 * let rev = revocable(add)
 * 
 * rev.invoke(3, 4) // 7
 * rev.revoke()
 * rev.invoke(5, 7) // undefined
 */
function revocable(func) {
    let temp = func;
    return {
        revoke: () => temp = undefined,
        invoke: (...args) => temp ? temp(...args) : temp,
    }
}

/**
 * Makes a function that generates unique symbols
 * @param {String} symbol 
 * @example
 * let genG = gensymf('G')
 * let genH = gensymf('H')
 * 
 * genG.next().value // 'G1'
 * genH.next().value // 'H1'
 * genG.next().value // 'G2'
 * genH.next().value // 'H2'
 */
function gensymf(symbol) {
    let i = 0;
    return {
        next: () => ({ value: symbol + ++i })
    }
}

/**
 * Takes a unary function and a seed and returns a `gensymf`
 * @see {@link gensymf}
 * @param {Function} unary 
 * @param {Number} seed 
 * @example
 * let gensymf = gensymff(inc, 0)
 * let genG = gensymf('G')
 * let genH = gensymf('H')
 * 
 * genG.next().value // 'G1'
 * genH.next().value // 'H1'
 * genG.next().value // 'G2'
 * genH.next().value // 'H2'
 */
function gensymff(unary, seed) {
    return function* (symbol) {
        let i = unary(seed);
        while (true) {
            yield symbol + i
            i = unary(i)
        }
    }
}

/**
 * Uses tail-recursion to perform the concating
 * @param  {...Function} gens 
 * @example
 * let con = concatTail(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7))
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // 2
 * con.next().value // 0
 * con.next().value // 1
 * con.next().value // 5
 * con.next().value // 6
 * con.next().value // undefined
 */
function* concatTail(...gens) {
    const [currGen, ...otherGens] = gens;

    let currValue = currGen?.next().value;

    if (currValue === undefined)
        return;

    while (currValue !== undefined) {
        yield currValue;
        currValue = currGen.next().value;
    }

    yield* concatTail(...otherGens);
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