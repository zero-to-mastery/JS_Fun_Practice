/**
 * @param {Number} x
 * @return {number}
 **/
const identity = (x) => x;

/**
 * @param {Number} a
 * @param {Number} b
 * @return {number}
 **/
const addb = (a, b) => a + b;

/**
 * @param {Number} a
 * @param {Number} b
 * @return {number}
 **/
const subb = (a, b) => a - b;

/**
 * @param {Number} a
 * @param {Number} b
 * @return {number}
 **/
const mulb = (a, b) => a * b;

/**
 * @param {Number} a
 * @param {Number} b
 * @return {number}
 **/
const minb = (a, b) => Math.min(a, b);

/**
 * @param {Number} a
 * @param {Number} b
 * @return {number}
 **/
const maxb = (a, b) => Math.max(a, b);

/**
 * @param {...numbers} nums
 * @return {number}
 **/

const add = (...nums) => nums.reduce((sum, num) => sum + num);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const sub = (...nums) => nums.reduce((sum, num) => sum - num);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const mul = (...nums) => nums.reduce((sum, num) => sum * num);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const min = (...nums) => Math.min(...nums);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const max = (...nums) => Math.max(...nums);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const addRecurse = (...nums) => add(...nums);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const mulRecurse = (...nums) => mul(...nums);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const minRecurse = (...nums) => min(...nums);

/**
 * @param {...numbers} nums
 * @return {number}
 **/
const maxRecurse = (...nums) => max(...nums);

/**
 * @param {function} func
 * @return {function}
 **/
const not = (func) => (x) => !func(x);

/**
 * @param {function} func
 * @param {any} initial
 * @return {function}
 **/
const acc = (func, initial) => (...nums) =>
  nums.reduce((result, num) => (result = func(num, result)), initial);

/**
 * @param {function} func
 * @param {number} start
 * @param {number} end
 * @return {function}
 **/
const accPartial = (func, start, end) => (...nums) => {
  const edit = func(...nums.slice(start, end));

  nums.splice(start, end - start, edit);

  return nums;
};

/**
 * @param {function} func
 * @param {number} initial
 * @return {function}
 **/
const accRecurse = (func, initial) => (...nums) => {
  let res = initial;
  const recurseFunc = (index, b) => {
    res = func(nums[index], b);

    if (index === 0) return;

    recurseFunc(index - 1, res);
  };

  recurseFunc(nums.length - 1, initial);

  return res;
};

/**
 * @param {number} num
 * @return {array}
 **/
const fill = (num) => Array(num).fill(num);

/**
 * @param {number} num
 * @return {array}
 **/
const fillRecurse = (num) => {
  const result = [];

  const fill = (i) => {
    result.push(num);

    if (i === 1) return;

    fill(i - 1);
  };
  fill(num);

  return result;
};

/**
 * @param {any[]} args
 * @return {array}
 **/
const set = (...args) => Array.from(new Set(args));

/**
 * @param {any} x
 * @return {function}
 **/
const identityf = (x) => () => x;

/**
 * @param {number} a
 * @return {function}
 **/
const addf = (a) => (x) => a + x;

/**
 * @param {function} binary
 * @return {function}
 **/
const liftf = (binary) => (x) => (y) => binary(x, y);

/**
 * @param {number} x
 * @param {number} y
 * @return {array}
 **/
const pure = (x, y) => {
  let i = y;
  return ((z) => {
    i++;
    return [i, z * i];
  })(x);
};

/**
 * @param {function} binary
 * @param {any} a
 * @return {function}
 **/
const curryb = (binary, a) => (x) => binary(a, x);

/**
 * @param {function} func
 * @param {any[]} outer
 * @return {function}
 **/
const curry = (func, ...outer) => (...args) => func(...outer, ...args);

/**
 * @param {number} x
 * @return {number}
 **/
const inc = (x) => ++x;

/**
 * @param {function} binary
 * @return {function}
 **/
const twiceUnary = (binary) => (num) => binary(num, num);

/**
 * @param {number} x
 * @return {number}
 **/
const doubl = (x) => twiceUnary((num) => num * 2)(x);

/**
 * @param {number} x
 * @return {number}
 **/
const square = (x) => twiceUnary((num) => num ** 2)(x);

/**
 * @param {function} x
 * @return {any}
 **/
const twice = (x) => (...args) => x(...args.map((i) => i * 2));

/**
 * @param {function} binary
 * @return {function}
 **/
const reverseb = (binary) => (a, b) => binary(b, a);

/**
 * @param {function} func
 * @return {function}
 **/
const reverse = (func) => (...args) => func(...args.reverse());

/**
 * @param {function} unary1
 * @param {function} unary2
 * @return {function}
 **/
const composeuTwo = (unary1, unary2) => (num) => unary2(unary1(num));

/**
 * @param {function[]} funcs
 * @return {any}
 **/
const composeu = (...funcs) => (num) => {
  let res = num;

  funcs.forEach((func) => (res = func(res)));

  return res;
};

/**
 * @param {function} binary1
 * @param {function} binary2
 * @return {function}
 **/
const composeb = (binary1, binary2) => (...nums) =>
  binary2(binary1(nums[0], nums[1]), nums[2]);

/**
 * @param {function} func1
 * @param {function} func2
 * @return {function}
 **/
const composeTwo = (func1, func2) => (...nums) => func2(func1(...nums));

/**
 * @param {function[]} funcs
 * @return {function}
 **/
const compose = (...funcs) => (...nums) => {
  let result = funcs[0](...nums);

  funcs.slice(1, -1).forEach((func) => (result = func(result)));

  return funcs.slice(-1)[0](...result);
};

/**
 * @param {function} binary
 * @param {number} lmt
 * @return {function}
 **/
const limitb = (binary, lmt) => (a, b) =>
  lmt-- >= 1 ? binary(a, b) : undefined;

/**
 * @param {function} func
 * @param {number} lmt
 * @return {function}
 **/
const limit = (func, lmt) => (...nums) =>
  lmt-- >= 1 ? func(...nums) : undefined;

/**
 * @param {number} x
 * @return {function}
 **/
const genFrom = (x) => ({
  value: x - 1,
  next: function () {
    this.value += 1;
    return this;
  },
});

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
};
