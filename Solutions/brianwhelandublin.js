const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => Math.min(a, b);

const maxb = (a, b) => Math.max(a, b);

const add = (...nums) => nums.reduce((acc, curr) => acc + curr);

const sub = (...nums) => nums.reduce((acc, curr) => acc - curr);

const mul = (...nums) => nums.reduce((acc, curr) => acc * curr);

const min = (...nums) => Math.min(...nums);

const max = (...nums) => Math.max(...nums);

const addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums);
};

const minRecurse = (...nums) => {
  const length = nums.length;
  if (length === 0) return;

  const min = (nums, len) => {
    if (len === 1) return nums[0];
    return Math.min(nums[len - 1], min(nums, len - 1));
  };

  return min(nums, length);
};

const maxRecurse = (...nums) => {
  const length = nums.length;
  if (length === 0) return;

  const max = (nums, len) => {
    if (len === 1) return nums[0];
    return Math.max(nums[len - 1], max(nums, len - 1));
  };

  return max(nums, length);
};

const not =
  (func) =>
  (...args) =>
    !func(...args);

const acc =
  (func, initial) =>
  (...args) => {
    let result = initial;
    for (let i of args) {
      final = finc(result, i);
    }
    return result;
  };

const fill = (num) => new Array(num).fill(num);

const fillRecursive = (num, arr = []) => {
  if (arr.length === num) {
    return arr;
  } else {
    arr.push(num);
    return fillRecursive(num, arr);
  }
};

const set = (...args) => {
  const result = [];
  for (let i = 0; i < args.length; i++) {
    if (!result.includes(args[i])) result.push(args[i]);
  }
  return result;
};

const identityf = (x) => () => x;

const addf = (a) => (b) => a + b;

const litf = (func) => (a) => (b) => func(a, b);

const inc = (x) => addb(x, 1);

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
  litf,
  minRecurse,
  maxRecurse,
  not,
  acc,
  fill,
  set,
  identityf,
  addf,
};
