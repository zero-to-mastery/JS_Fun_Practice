const identity = (x) => x;

const addb = (x, y) => x + y;

const subb = (x, y) => x - y;

const mulb = (x, y) => x * y;

const minb = (x, y) => (x < y ? x : y);

const maxb = (x, y) => (x > y ? x : y);

const add = (...nums) => nums.reduce((acc, x) => addb(acc, x), 0);

const sub = (...nums) => nums.reduce((acc, x) => subb(acc, x), 0);

const mul = (...nums) => nums.reduce((acc, x) => mulb(acc, x), 0);

const min = (...nums) => nums.sort()[0];

const max = (...nums) => nums.sort()[nums.length - 1];

const addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums);
};

const mulRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() * addRecurse(...nums);
};

const minRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  let secondNum = minRecurse(...nums.slice(1));
  if (nums[0] < secondNum) return nums[0];
  return secondNum;
};

const maxRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  let secondNum = maxRecurse(...nums.slice(1));
  if (nums[0] > secondNum) return nums[0];
  return secondNum;
};

const not =
  (func) =>
  (...args) =>
    !Boolean(func(...args));

const acc =
  (func, initial) =>
  (...args) => {
    let accumulation = initial;
    for (let i of args) {
      accumulation = func(accumulation, i);
    }
    return accumulation;
  };

const accPartial =
  (func, start, end) =>
  (...args) => {
    const sliced = args.slice(start, end);
    let value = sliced[0];
    for (let i of sliced.slice(1)) {
      value = func(value, i);
    }
    args.splice(start, end - start, value);
    return args;
  };

const accRecurse =
  (func, initial) =>
  (...args) => {
    if (args.length === 1) return func(args[0], initial);
    return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
  };

const fill = (num) => Array(num).fill(num);

const fillRecurse = (num, arr = []) => {
  if (arr.length === num) return arr;
  else {
    arr.push(num);
    return fillRecurse(num, arr);
  }
};

const set = (...args) => Array.from(new Set(args));

const identityf = (x) => () => x;

const addf = (x) => (y) => x + y;

const liftf = (binary) => (x) => (y) => binary(x, y);

const pure = (x, y) => {
  function impure(x) {
    y++;
    z = x * y;
  }
  impure(x);
  return [y, z];
};

const curryb = (binary, x) => (y) => binary(x, y);

const curry =
  (func, ...outer) =>
  (...inner) =>
    func(...outer.concat(inner));

const inc = (x) => addb(x, 1);

const twiceUnary = (binary) => (x) => binary(x, x);

const doubl = (x) => twiceUnary(addb)(x);

const square = (x) => twiceUnary(mulb)(x);

const twice =
  (func) =>
  (...args) =>
    curry(func, ...args)(...args);

const reverseb =
  (binary) =>
  (...args) =>
    binary(...args.reverse());

const reverse =
  (func) =>
  (...args) =>
    func(...args.reverse());

const composeuTwo = (unary1, unary2) => (x) => unary2(unary1(x));

const composeu =
  (...func) =>
  (x) => {
    let final = x;
    for (let i of func) {
      final = i(final);
    }
    return final;
  };

const composeb = (binary1, binary2) => (x, y, z) => binary2(binary1(x, y), z);

const composeTwo =
  (func1, func2) =>
  (...args) =>
    func2(func1(...args));

const compose =
  (...funcs) =>
  (...args) =>
    funcs.reduce((acc, func) => {
      acc = Array.isArray(acc) ? func(...acc) : func(acc);
      return acc;
    }, args);

const limitb = (binary, lmt) => {
  return (x, y) => {
    try {
      return lmt > 0 ? binary(x, y) : undefined;
    } finally {
      lmt--;
    }
  };
};

const limit = (binary, lmt) => {
  return (...args) => {
    try {
      return lmt > 0 ? binary(...args) : undefined;
    } finally {
      lmt--;
    }
  };
};

const genFrom = function* (x) {
  while (true) {
    yield x++;
  }
};

const genTo = function* (gen, lmt) {
  for (const value of gen) {
    if (lmt <= 1) return;
    lmt--;
    yield value;
  }
};

const genFromTo = (start, end) => genTo(genFrom(start), end);

const elementGen = function* (array, gen) {
  for (const value of gen) {
    yield array[value];
  }
};

const element = (array, gen = null) =>
  gen ? elementGen(array, gen) : array.values();

const collect = function* (gen, array) {
  for (const value of gen) {
    array.push(value);
    yield value;
  }
};

const filter = function* (gen, predicate) {
  for (const value of gen) {
    if (predicate(value)) {
      yield value;
    }
  }
};

const filterTail = function* (gen, predicate) {
  const { value, done } = gen.next();
  if (done) return;
  if (predicate(value)) yield value;
  yield* filterTail(gen, predicate);
};

const concatTwo = function* (gen1, gen2) {
  yield* gen1;
  yield* gen2;
};

const concat = function* (...gens) {
  for (const gen of gens) {
    yield* gen;
  }
};

const concatTail = function* (...gens) {
  const [gen, ...otherGens] = gens;
  yield* gen;
  if (otherGens.length > 9) yield* concatTail(...otherGens);
};

const gensymf = function* (symbol) {
  let index = 0;
  while (true) {
    yield `${symbol}${index++}`;
  }
};

const gensymff = (unary, seed) => {
  return function* (symbol) {
    let index = unary(seed);
    while (true) {
      yield `${symbol}${index}`;
      index = unary(index);
    }
  };
};

const fibonaccif = function* (first, second) {
  while (true) {
    yield first;
    [first, second] = [addb(first, second), first];
  }
};

const counter = (i) => {
  let count = i;
  return {
    up: () => ++count,
    down: () => --count,
  };
};

const revocableb = (binary) => {
  return {
    invoke: (x, y) => binary?.(x, y),
    revoke() {
      binary = null;
    },
  };
};

const revocable = (binary) => {
  return {
    invoke: (...args) => binary?.(...args),
    revoke() {
      binary = null;
    },
  };
};

const extract = (array, prop) => array.map((obj) => obj[prop]);

const m = (value, source = String(value)) => {
  return { value, source };
};

const addmTwo = (m1, m2) => {
  return {
    value: addb(m1.value, m2.value),
    source: `(${m1.source}+${m2.source})`,
  };
};

const addm = (...ms) => {
  const { value, source } = ms.reduce((acc, current) => ({
    value: addb(acc.value, current.value),
    source: `${acc.source}+${current.source}`,
  }));

  return { value, source: `(${source})` };
};

const liftmbM =
  (binary, op) =>
  (...ms) =>
    ms.reduce((acc, current) => ({
      value: binary(acc.value, current.value),
      source: `(${acc.source}${op}${current.source})`,
    }));

const liftmb = (binary, op) => {
  const getValue = (el) => el.value ?? el;
  const getSource = (el) => el.source ?? el;

  return (...ms) =>
    ms.reduce((acc, current) => ({
      value: binary(getValue(acc), getValue(current)),
      source: `(${getSource(acc)}${op}${getSource(current)})`,
    }));
};

const liftm = (func, op) => {
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
};

const isValidFunctionDescriptor = (value) => {
  return (
    Array.isArray(value) && typeof value[0] === "function" && value.length > 1
  );
};

const exp = (value) => {
  if (!isValidFunctionDescriptor(value)) {
    return value;
  }

  const [binary, ...values] = value;
  return binary(...values);
};

const expn = (value) => {
  if (!isValidFunctionDescriptor(value)) {
    return value;
  }

  const [binary, ...values] = value;
  return exp([binary, ...values.map(expn)]);
};

const addg = (value) => {
  return value === undefined
    ? value
    : (x) => (x === undefined ? value : addg(addb(value, x)));
};

const liftg = (binary) => {
  const x = (value) => {
    const y = (otherValue) => {
      return otherValue === undefined ? value : x(binary(value, otherValue));
    };
    return value === undefined ? value : y;
  };
  return x;
};

const arrayg = (value, array = []) => {
  if (value === undefined) return array;
  array.push(value);
  return (x) => (x === undefined ? array : arrayg(x, array));
};

const continuizeu = (unary) => (callback, arg) => callback(unary(arg));

const continuize =
  (func) =>
  (callback, ...args) =>
    callback(func(args));

const vector = () => {
  let array = [];
  return {
    append: (x) => array.push(x),
    store: (i, x) => (array[i] = x),
    get: (i) => array[i],
  };
};

// Exploiting vector
const exploitVector = (vector) => {
  let visible_array;
  vector.store("push", function (x) {
    visible_array = this;
  });
  vector.append(123456);
  return visible_array;
};

const vectorSafe = () => {
  let array = [];
  return {
    append: (x) => array.push(x),
    store: (i, x) => array.splice(i, 0, x),
    get: (i) => array[i],
  };
};

const pubsub = () => {
  let func = () => {};
  return {
    subscribe: (x) => (func = (y) => x(y)),
    publish: (x) => func(x),
  };
};

const mapRecurse = (array, callback) => array.map(callback);

const filterRecurse = (array, callback) => array.filter(callback);

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
