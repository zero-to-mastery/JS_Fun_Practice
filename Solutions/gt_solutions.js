"use strict";

function identity(x) {
  return x;
}

function addb(a, b) {
  return a + b;
}

function subb(a, b) {
  return a - b;
}

function mulb(a, b) {
  return a * b;
}

function minb(a, b) {
  return a < b ? a : b;
}

function maxb(a, b) {
  return a > b ? a : b;
}

function add(...nums) {
  return nums.reduce(addb);
}

function sub(...nums) {
  return nums.reduce(subb);
}

function mul(...nums) {
  return nums.reduce(mulb);
}

function min(...nums) {
  return nums.reduce(minb);
}

function max(...nums) {
  return nums.reduce(maxb);
}

// tail-recursive
function binaryToManyParams(binary) {
  return (...nums) => {
    if (nums.length === 1) {
      return nums[0];
    }

    const [a, b, ...rest] = nums;
    return binaryToManyParams(binary)(binary(a, b), ...rest);
  };
}

function addRecurse(...nums) {
  return binaryToManyParams(addb)(...nums);
}

function mulRecurse(...nums) {
  return binaryToManyParams(mulb)(...nums);
}

function minRecurse(...nums) {
  return binaryToManyParams(minb)(...nums);
}

function maxRecurse(...nums) {
  return binaryToManyParams(maxb)(...nums);
}

function not(func) {
  return (...args) => !func(...args);
}

function acc(func, initial) {
  return (...args) => args.reduce((acc, val) => func(acc, val), initial);
}

function accPartial(func, start, end) {
  return (...args) => {
    const accumulated = args
      .slice(start, end)
      .reduce((acc, val) => func(acc, val));

    args.splice(start, end - start, accumulated);
    return args;
  };
}

function accRecurse(func, initial) {
  const x = (...args) => {
    const [accumulator, ...rest] = args;
    if (!rest.length) {
      return accumulator;
    }

    return func(accumulator, x(...rest));
  };

  return (...args) => x(initial, ...args);
}

function fill(num) {
  return Array(num).fill(num);
}

function fillRecurse(num) {
  const result = [];
  const x = () => {
    if (result.length === num) {
      return result;
    }
    result.push(num);
    return x();
  };

  return x();
}

function set(...args) {
  return [...new Set(args)];
}

function identityf(x) {
  return () => x;
}

function addf(a) {
  return (b) => a + b;
}

function liftf(binaryFunc) {
  return (a) => (b) => binaryFunc(a, b);
}

function pure(x, y) {
  const impure = (x) => {
    y++;
    z = x * y;
  };

  let z;
  impure(x);
  return [y, z];
}

function curryb(binaryFunc, a) {
  return (b) => binaryFunc(a, b);
}

function curry(func, ...outer) {
  return (...args) => func(...outer, ...args);
}

function inc(x) {
  return addb(x, 1);
}

function twiceUnary(binaryFunc) {
  return (x) => binaryFunc(x, x);
}

function doubl(x) {
  return twiceUnary(addb)(x);
}

function square(x) {
  return twiceUnary(mulb)(x);
}

function twice(func) {
  return (...args) => func(...args, ...args);
}

function reverseb(binaryFunc) {
  return (a, b) => binaryFunc(b, a);
}

function reverse(func) {
  return (...args) => func(...args.reverse());
}

function composeuTwo(unaryFunc1, unaryFunc2) {
  return (x) => unaryFunc2(unaryFunc1(x));
}

function composeu(...funcs) {
  return (x) =>
    funcs.reduce((acc, func) => {
      acc = func(acc);
      return acc;
    }, x);
}

function composeb(binaryFunc1, binaryFunc2) {
  return (arg1, arg2, arg3) => binaryFunc2(binaryFunc1(arg1, arg2), arg3);
}

function composeTwo(func1, func2) {
  return (...args) => func2(func1(...args));
}

function compose(...funcs) {
  return (...args) =>
    funcs.reduce((acc, func) => {
      acc = Array.isArray(acc) ? func(...acc) : func(acc);
      return acc;
    }, args);
}

function limitb(binaryFunc, lmt) {
  return (a, b) => {
    try {
      return lmt > 0 ? binaryFunc(a, b) : undefined;
    } finally {
      lmt--;
    }
  };
}

function limit(func, lmt) {
  return (...args) => {
    try {
      return lmt > 0 ? func(...args) : undefined;
    } finally {
      lmt--;
    }
  };
}

// js generator
function* genFrom(x) {
  while (true) {
    yield x++;
  }
}
// "homemade"
// function genFrom(x) {
//   return {
//     next: () => ({
//       value: x++,
//       done: false,
//     }),
//   };
// }

function* genTo(gen, lmt) {
  for (const value of gen) {
    if (value >= lmt) {
      return;
    }
    yield value;
  }
}

function genFromTo(start, end) {
  return genTo(genFrom(start), end);
}

function* elementGen(array, gen) {
  for (const value of gen) {
    yield array[value];
  }
}

function element(array, gen) {
  return gen ? elementGen(array, gen) : array.values();
}

// NB: impure function
function* collect(gen, array) {
  for (const value of gen) {
    array.push(value);
    yield value;
  }
}

function* filter(gen, predicate) {
  for (const value of gen) {
    if (predicate(value)) {
      yield value;
    }
  }
}

function* filterTail(gen, predicate) {
  const { value, done } = gen.next();

  if (done) {
    return;
  }

  if (predicate(value)) {
    yield value;
  }

  yield* filterTail(gen, predicate);
}

function* concatTwo(gen1, gen2) {
  yield* gen1;
  yield* gen2;
}

function* concat(...gens) {
  for (const gen of gens) {
    yield* gen;
  }
}

function* concatTail(...gens) {
  const [gen, ...otherGens] = gens;
  yield* gen;
  if (otherGens.length > 0) {
    yield* concatTail(...otherGens);
  }
}

function* gensymf(symbol) {
  let index = 0;
  while (true) {
    yield `${symbol}${++index}`;
  }
}

function gensymff(unary, seed) {
  return function* (symbol) {
    let id = unary(seed);
    while (true) {
      yield `${symbol}${id}`;
      id = unary(id);
    }
  };
}

function* fibonaccif(first, second) {
  while (true) {
    yield first;
    [first, second] = [addb(first, second), first];
  }
}

function counter(i) {
  let count = i;
  return {
    up: () => ++count,
    down: () => --count,
  };
}

function revocableb(binary) {
  return {
    invoke: (a, b) => binary?.(a, b),
    revoke() {
      binary = null;
    },
  };
}

function revocable(func) {
  return {
    invoke: (...args) => func?.(...args),
    revoke() {
      func = null;
    },
  };
}

function extract(array, prop) {
  return array.map((el) => el[prop]);
}

function m(value, source = String(value)) {
  return {
    value,
    source,
  };
}

function addmTwo(m1, m2) {
  return {
    value: addb(m1.value, m2.value),
    source: `(${m1.source}+${m2.source})`,
  };
}

function addm(...ms) {
  const { value, source } = ms.reduce((acc, current) => ({
    value: addb(acc.value, current.value),
    source: `${acc.source}+${current.source}`,
  }));

  return { value, source: `(${source})` };
}

function liftmbM(binary, op) {
  return (...ms) =>
    ms.reduce((acc, current) => ({
      value: binary(acc.value, current.value),
      source: `(${acc.source}${op}${current.source})`,
    }));
}

function liftmb(binary, op) {
  const getValue = (el) => el.value ?? el;
  const getSource = (el) => el.source ?? el;

  return (...ms) =>
    ms.reduce((acc, current) => ({
      value: binary(getValue(acc), getValue(current)),
      source: `(${getSource(acc)}${op}${getSource(current)})`,
    }));
}

function liftm(func, op) {
  const getValue = (el) => el.value ?? el;
  const getSource = (el) => el.source ?? el;

  return (...ms) => {
    const values = ms.map(getValue);
    const sources = ms.map(getSource);
    return {
      value: func(...values),
      source: `(${sources.join(op)})`,
    };
  };
}

const isValidOperationDescriptor = (value) => {
  return (
    Array.isArray(value) && typeof value[0] === "function" && value.length > 1
  );
};

function expb(value) {
  if (!isValidOperationDescriptor(value)) {
    return value;
  }

  const [binary, ...values] = value;
  return values.reduce(binary);
}

function exp(value) {
  if (!isValidOperationDescriptor(value)) {
    return value;
  }

  const [func, ...values] = value;
  return func(...values);
}

function expn(value) {
  if (!isValidOperationDescriptor(value)) {
    return value;
  }

  const [func, ...values] = value;
  return exp([func, ...values.map(expn)]);
}

function addg(value) {
  return value === undefined
    ? value
    : (otherValue) =>
        otherValue === undefined ? value : addg(addb(value, otherValue));
}

// // The way I first made it
// // More linear (not recursive)
// // All the calls go through the same function
// // The use of result is less clear than value & otherValue for the binary function
// function liftg(binary) {
//   let result;

//   const x = (val) => {
//     if (val === undefined) {
//       return result;
//     }

//     if (result === undefined) {
//       result = val;
//     } else {
//       result = binary(result, val);
//     }

//     return x;
//   };

//   return x;
// }

// based off KN solution
function liftg(binary) {
  const x = (value) => {
    const y = (otherValue) => {
      return otherValue === undefined ? value : x(binary(value, otherValue));
    };

    return value === undefined ? value : y;
  };

  return x;
}

function arrayg(value) {
  const result = [];
  const x = (otherValue) => {
    if (otherValue === undefined) {
      return result;
    }
    result.push(otherValue);
    return x;
  };
  return x(value);
}

function continuizeu(unary) {
  return (callback, arg) => callback(unary(arg));
}

function continuize(fn) {
  return (callback, ...args) => callback(fn(...args));
}

function vector() {
  const array = [];

  return {
    get(index) {
      return array[index];
    },
    store(index, value) {
      array[index] = value;
    },
    append(value) {
      array.push(value);
    },
  };
}

function pubsub() {
  const subscribers = new Set();

  return {
    subscribe(subscriber) {
      subscribers.add(subscriber);
    },
    publish(message) {
      for (const subscriber of subscribers) {
        subscriber(message);
      }
    },
  };
}

function mapRecurse(array, callback) {
  const result = [];

  const x = (values) => {
    if (values.length === 0) {
      return result;
    }

    const [firstValue, ...rest] = values;
    result.push(callback(firstValue));
    return x(rest);
  };

  return x(array);
}

function filterRecurse(array, predicate) {
  const result = [];

  const x = (values) => {
    if (values.length === 0) {
      return result;
    }

    const [firstValue, ...rest] = values;
    if (predicate(firstValue)) {
      result.push(firstValue);
    }
    return x(rest);
  };

  return x(array);
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
  pubsub,
  mapRecurse,
  filterRecurse,
};
