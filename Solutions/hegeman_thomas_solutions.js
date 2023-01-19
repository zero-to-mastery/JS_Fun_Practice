//
const identity = (val) => val;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => (a > b ? b : a);

const maxb = (a, b) => (a > b ? a : b);

const add = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

const sub = (...nums) => nums.reduce((acc, curr) => curr - acc, 0);

const mul = (...nums) => nums.reduce((acc, curr) => acc * curr, 1);

const min = (...nums) =>
  nums.reduce((acc, curr) => (acc > curr ? curr : acc), Infinity);

const max = (...nums) =>
  nums.reduce((acc, curr) => (acc > curr ? acc : curr), -Infinity);

const addRecurse = (...nums) => {
  const numsCopy = nums;

  if (numsCopy.length === 1) {
    return numsCopy[0];
  }

  return numsCopy[0] + addRecurse(...numsCopy.slice(1));
};

const mulRecurse = (...nums) => {
  const numsCopy = nums;

  if (numsCopy.length === 1) {
    return numsCopy[0];
  }

  return numsCopy[0] * mulRecurse(...numsCopy.slice(1));
};

const minRecurse = (...nums) => {
  const numsCopy = nums;

  if (numsCopy.length === 1) {
    return numsCopy[0];
  }

  const val = minRecurse(...numsCopy.slice(1));

  return numsCopy[0] < val ? numsCopy[0] : val;
};

const maxRecurse = (...nums) => {
  const numsCopy = nums;

  if (numsCopy.length === 1) {
    return numsCopy[0];
  }

  const val = maxRecurse(...numsCopy.slice(1));

  return numsCopy[0] > val ? numsCopy[0] : val;
};

const not = (func) => (val) => !func(val);

const acc =
  (func, initial) =>
  (...vals) => {
    let valRet = initial;
    for (let val of vals) {
      valRet = func(valRet, val);
    }
    return valRet;
  };

const accPartial =
  (func, start, end) =>
  (...vals) => {
    const valsLen = vals.length;
    if (valsLen === 0) {
      return valsLen;
    }
    if (valsLen === 1) {
      return vals[0];
    }
    const arrRet = [];
    let valRet = func(vals[start], vals[start + 1]);

    for (let i = 0; i < start; i++) {
      arrRet.push(vals[i]);
    }
    for (let i = start + 2; i <= end; i++) {
      valRet = func(valRet, vals[i]);
    }
    arrRet.push(valRet);
    for (let i = end + 1; i < valsLen; i++) {
      arrRet.push(vals[i]);
    }

    return arrRet;
  };

const accRecurse = (func, initial) =>
  (callMe = (...vals) => {
    if (vals.length < 1) {
      return initial;
    }
    if (vals.length === 1) {
      return vals[0];
    }

    return func(vals[0], callMe(...vals.slice(1)));
  });

const fillHeh = (num) => Array(num).fill(num);

const fill = (num) => {
  const arrRet = [];

  for (let i = 0; i < num; i++) {
    arrRet.push(num);
  }

  return arrRet;
};

const fillRecurse = (num) => {
  const arrRet = [];

  const meh = (val) => {
    if (val <= 0) {
      return;
    }
    arrRet.push(num);
    meh(val - 1);
  };

  meh(num);

  return arrRet;
};

const set = (...vals) => {
  // otherwise a Map to decide pushing a value to the array
  return [...new Set(vals)];
};

const identityf = (x) => () => x;

const addf = (a) => (b) => a + b;

const liftf = (binary) => (x) => (y) => binary(x, y);

const pure = (x, y) => {
  let z;
  function impure(x) {
    y++;
    z = x * y;
  }
  impure(x);
  return [y, z];
};

const curryb = (binary, a) => (b) => binary(a, b);

const inc = (x) => x + 1;

const twiceUnary = (binary) => (x) => binary(x, x);

const doubl = (x) => twiceUnary((a, b) => a + b)(x);

const square = (x) => twiceUnary((a, b) => a * b)(x);

const twice =
  (func) =>
  (...vals) => {
    let valRet = 0;

    for (let val of vals) {
      valRet = func(valRet, func(val, val));
    }

    return valRet;
  };

const reverseb = (binary) => (x, y) => binary(y, x);

const reverse =
  (func) =>
  (...vals) => {
    const valsR = vals.slice().reverse();
    const valsRLen = valsR.length;
    let valRet = valsR[0];

    for (let i = 1; i < valsRLen; i++) {
      valRet = func(valRet, valsR[i]);
    }

    return valRet;
  };

const composeuTwo = (unary1, unary2) => (val) => unary2(unary1(val));

const composeu =
  (...funcs) =>
  (val) =>
    funcs.reduce((acc, func) => func(acc), val);

const composeb = (binary1, binary2) => (a, b, c) => binary2(c, binary1(a, b));

const composeTwo =
  (func1, func2) =>
  (...vals) =>
    func2(func1(vals));

const compose =
  (...funcs) =>
  (...vals) =>
    funcs.reduce(
      (acc, func) => (Array.isArray(acc) ? func(...acc) : func(acc)),
      vals
    );

const limitb = (binary, lmt) => (a, b) => {
  if (lmt > 0) {
    --lmt;
    return binary(a, b);
  }
  return undefined;
};

const limit =
  (func, lmt) =>
  (...vals) => {
    if (lmt > 0) {
      --lmt;
      return func(...vals);
    }

    return undefined;
  };

function* genFrom(x) {
  yield i;
  yield i + 1;
}

const genTo = (gen, lmt) => {
  if (lmt > 0) {
    --lmt;
    console.log(lmt);
    return gen;
  }
  return undefined;
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
};
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
