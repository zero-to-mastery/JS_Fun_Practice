const identity = x => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

const maxb = (a, b) => a > b ? a : b;

const add = (...nums) => nums.reduce((acc, num) => (acc + num), 0);

const sub = (...nums) => nums.reduce((acc, num, index) => {
    if (index == 0) {
        return num;
    }
    return (acc - num);
}, 0);

const mul = (...nums) => nums.reduce((acc, num) => (acc * num), 1);

const min = (...nums) => nums.reduce((a, b) => {
    return Math.min(a, b);
});

const max = (...nums) => nums.reduce((a, b) => {
    return Math.max(a, b);
});

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

const minRecurse = (...nums) => {
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[1] : nums[0];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    const minNewNums = minRecurse(...newNums);
    return nums[index] > minNewNums ? minNewNums : nums[index];

};

const maxRecurse = (...nums) => {
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }
    const index = 1;
    const newNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
    const maxNewNums = maxRecurse(...newNums);
    return nums[index] > maxNewNums ? nums[index] : maxNewNums;

};

const not = (func) =>
    (...args) => !func(args);

const acc = (func, initial) =>
    (...args) => args.reduce(
        (accumulator, el, index) => {
            if (index == 0) {
                return func(el, initial);
            }
            return func(el, accumulator);
        }, 0);


const accPartial = (func, start, end) =>
    (...args) => {
        const inRangeArgs = args.slice(start, end);
        const resultAcc = inRangeArgs.reduce(
            (accumulator, el, index) => {
                if (index == 0) {
                    return inRangeArgs[0];
                }
                return func(el, accumulator);
            }, 0)
        return [...args.slice(0, start), resultAcc, ...args.slice(end)];
    };



const accRecurse = (func, initial) =>
    (...args) => {
        if (args.length === 1) {
            return func(args[0], initial);
        }
        const index = 0;
        const newArgs = [...args.slice(0, index), ...args.slice(index + 1)]
        return func(accRecurse(func, initial)(...newArgs), args[index]);
    };

const fill = (num) => {
    let fillResult = [];
    for (let i = 0; i < num; i++) {
        fillResult.push(num);
    }
    return fillResult;
};


// const fillRecurse = (num) => {};
const set = (...args) => args.filter((el, index) => args.indexOf(el) == index);

const identityf = (x) => () => x;

const addf = (a) => (b) => a + b;

const liftf = (binary) => (a) => (b) => binary(a, b);

const pure = (x, y) => {
    const impure = (x) => {
        y++;
        z = x * y;
    }
    impure(x);
    return [y, z];
};


const curryb = (binary, a) => (b) => binary(a, b);

const curry = (func, ...outer) =>
    (...args) => func(...outer, ...args);

const inc = (x) => x + 1;

const twiceUnary = (binary) => (x) => binary(x, x);

const doubl = (x) => twiceUnary(addb)(x);

const square = (x) => twiceUnary(mulb)(x);

const twice = (x) => (...args) => twiceUnary(addb)(x(...args));


const reverseb = (binary) => (x, y) => binary(y, x);
const reverse = (func) => (...args) => func(...args.reverse());

const composeuTwo = (unary1, unary2) => (x) => unary2(unary1(x));
const composeu = (...funcs) => x => funcs.reduce((acc, func, index) => {
    if (index == 0) {
        return func(x);
    }
    return func(acc);
}, 0);

const composeb = (binary1, binary2) => (x, y, z) => binary2(binary1(x, y), z);

const composeTwo = (func1, func2) => (...args) => func2(func1(...args));

const compose = (...funcs) =>
    (...args) =>
        funcs.reduce((acc, func, index) => {
            if (index == 0) {
                return func(...args);
            }
            return Array.isArray(acc) ? func(...acc) : func(acc);
        }, 0);

const limitb = (binary, lmt) => (a, b) => lmt-- >= 1 ? binary(a, b) : undefined;

const limit = (func, lmt) => (...args) => lmt-- >= 1 ? func(...args) : undefined;


const genFrom = function* (x) {
    let value = x;
    while (true) {
        yield value++;
    }
};
const genTo = (gen, lmt) => {
    let iterationCount = 1;
    return {
        next: function () {
            let result;
            if (iterationCount < lmt) {
                result = { ...gen.next() }
                iterationCount++;
                return result;
            }
            return { ...gen.next(), value: undefined, done: true }
        }
    };
};


const genFromTo = function* (start, end) {
    let value = start;
    while (value < end) {
        yield value++;
    }
};

const elementGen = function* (array, gen) {
    let resultElementGen;
    let { value, done } = gen.next();
    const lmt = array.length;
    while (!done && value < lmt) {
        resultElementGen = array[value];
        ({ value, done } = gen.next());
        yield resultElementGen;
    }
};

const element = (array, gen) => {

    if (gen == undefined || gen == null) {
        const newGen = function* () {
            let index = 0;
            const lmt = array.length;
            while (index < lmt) {
                yield array[index++];
            }
        };
        return newGen();

    }
    return elementGen(array, gen);

};

const collect = function* (gen, array) {

    let result = { ...gen.next() }
    while (!result.done) {
        const val = result.value;
        array.push(val);
        yield val;
        result = { ...gen.next() }
    }
};


const filter = function* (gen, predicate) {
    let { value, done } = gen.next();
    while (!done) {
        while (!done && !predicate(value)) {
            ({ value, done } = gen.next());
        }
        if (!done) {
            yield value;
            ({ value, done } = gen.next());
        }
    }
};


const filterTail = function* (gen, predicate) {
    const { value, done } = gen.next();
    if (done || predicate(value)) yield value;
    yield* filterTail(gen, predicate);
};

const concatTwo = function* (gen1, gen2) {
    let { value, done } = gen1.next();
    while (!done) {
        yield value;
        ({ value, done } = gen1.next());
    }

    ({ value, done } = gen2.next());
    while (!done) {
        yield value;
        ({ value, done } = gen2.next());
    }
};

const concat = function* (...gens) {

    for (gen of gens) {
        let { value, done } = gen.next();
        while (!done) {
            yield value;
            ({ value, done } = gen.next());
        }
    }
};
const concatTail = function* (...gens) {

    if (!gens || !gens.length) yield undefined;

    let [gen, ...newGens] = gens;
    let { value, done } = gen.next();
    while (!done) {
        yield value;
        ({ value, done } = gen.next());
    }

    yield* concatTail(...newGens);

};
const gensymf = function* (symbol) {
    let increment = 0;
    while (true) {
        increment++;
        yield symbol.concat(increment);
    }
};
const gensymff = function (unary, seed) {
    return function* (symbol) {
        let unique = seed;
        while (true) {
            unique = unary(unique);
            yield symbol.concat(unique);
        }
    };
}
const fibonaccif = function* (first, second) {
    let f0 = first;
    let f1 = second;
    let f3;

    yield f0;
    yield f1;
    while (true) {
        f3 = f1 + f0;
        yield f3;
        f0 = f1;
        f1 = f3;
    }
};

const counter = (i) => {

    let count = i;
    const up = () => ++count;
    const down = () => --count;

    return { up, down };
};

const revocableb = binary => {
    let isDisable = false;
    return {
        invoke: (a, b) => (!isDisable ? binary(a, b) : undefined),
        revoke: () => isDisable = true
    }
};
const revocable = func => {
    let isDisable = false;
    return {
        invoke: (...args) => (!isDisable ? func(...args) : undefined),
        revoke: () => isDisable = true
    }
};
const extract = (array, prop) => array.map(obj => obj[prop]);

const m = (value, source) => {
    source = (!source ? "" + value : source)
    return { value: value, source: source };
};
const addmTwo = (m1, m2) => {
    const value = m1.value + m2.value;
    const source = `(${m1.source}+${m2.source})`;
    return { value: value, source: source };
};
const addm = (...ms) => {
    let result = ms.reduce((acc, m, index) => {
        if (index == 0) {
            return { value: m.value, source: `(${m.source}` };
        }
        const value = acc.value + m.value;
        const source = `${acc.source}+${m.source}`;
        return { value: value, source: source };
    }, 0);
    if (result) result.source = result.source + ")";
    return result;
};

const liftmbM = (binary, op) =>
    (m1, m2) => {
        const value = binary(m1.value, m2.value);
        const source = `(${m1.source}${op}${m2.source})`;
        return { value: value, source: source };
    };

const liftmb = (binary, op) =>
    (m1, m2) => {
        const value = typeof (m1) === 'number' && typeof (m2) === 'number' ? binary(m1, m2) : binary(m1.value, m2.value);
        const source = typeof (m1) === 'number' && typeof (m2) === 'number' ? `(${m1}${op}${m2})` : `(${m1.source}${op}${m2.source})`;
        return { value: value, source: source };
    };

const liftm = (func, op) =>
    (...ms) => {
        let result = ms.reduce((acc, m, index) => {
            if (index == 0) {
                const valueInit = (typeof (m) === 'number') ? m : m.value;
                const sourceInit = (typeof (m) === 'number') ? `(${m}` : `(${m.source}`;
                return { value: valueInit, source: sourceInit };
            }
            const value = (typeof (m) === 'number') ? func(acc.value, m) : func(acc.value, m.value);
            const source = (typeof (m) === 'number') ? `${acc.source}${op}${m}` : `${acc.source}${op}${m.source}`;
            return { value: value, source: source };
        }, 0);
        if (result) result.source = result.source + ")";
        return result;
    };
const exp = (value) => {
    return typeof (value) === 'number' ? value : value[0](...value.slice(1));
};
const expn = (value) => {
    if (typeof (value) === 'number') return value;
    let f = value[0];
    if (Array.isArray(value[1])) {
        return f(...value.slice(1).map(elem => expn(elem)));
    }
    else {
        return f(...value.slice(1));
    }
};
const addg = (value) => {
    let arr = [];
    const inside = (a) => {
        if (a === undefined && !arr.length) return undefined;
        else if (a === undefined) {
            return add(...arr);
        }
        else {
            arr.push(a);
            return inside;
        }
    }
    return inside(value);
};
const liftg = (binary) =>
    (value) => {
        let arr = [];
        const inside = (a) => {
            if (a === undefined && !arr.length) return undefined;
            else if (a === undefined) {
                return arr.reduce((acc, el, index) => {
                    if (index == 0) {
                        return el;
                    }
                    return binary(acc, el);
                });
            }
            else {
                arr.push(a);
                return inside;
            }
        }
        return inside(value);
    };
const arrayg = (value) => {
    let arr = [];
    const inside = (a) => {
        if (a === undefined && !arr.length) return arr;
        else if (a === undefined) {
            return arr;
        }
        else {
            arr.push(a);
            return inside;
        }
    }
    return inside(value);
};
const continuizeu = (unary) => (callback, arg) => callback(unary(arg));
const continuize = (func) => (callback, ...args) => callback(func(...args));
const vector = () => {
    let arr = [];
    return {
        get: (x) => arr[x],
        store: (x, val) => arr.splice(x, 0, val),
        append: (x) => arr.push(x)
    }
};


const pubsub = () => {

    let listeners = [];
    return {
        subscribe: (callback) => listeners.push(callback),
        publish: (data) => {
            for (const callback of listeners) {
                callback(data);
            }
        }
    }
};
const mapRecurse = (array, predicate) => {

    if (!array.length) return array;
    if (array.length == 1) return [predicate(array[0])];
    const [first, ...rest] = array;
    return [predicate(first)].concat(mapRecurse(rest, predicate));
};

const filterRecurse = (array, predicate) => {

    if (!array.length) return array;
    if (array.length == 1) return predicate(array[0]) ? [array[0]] : [];
    const [first, ...rest] = array;
    return predicate(first) ? [first]
        .concat(filterRecurse(rest, predicate)) :
        filterRecurse(rest, predicate);
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
    //  fillRecurse,
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
    //  exploitVector,
    //vectorSafe,
    pubsub,
    mapRecurse,
    filterRecurse,
};