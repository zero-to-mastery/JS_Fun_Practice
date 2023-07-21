const identity = (arg) => arg;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => Math.min(a, b);

const minb = (a, b) => (a < b ? a : b);

const maxb = (a, b) => Math.max(a, b);
// or
const maxb = (a, b) => (a > b ? a : b);

const add = (...nums) => nums.reduce((acc, cur) => acc + cur);

const sub = (...nums) => nums.reduce((acc, cur) => acc - cur);

const mul = (...nums) => nums.reduce((acc, cur) => acc * cur);

const min = (...nums) => Math.min(...nums);

const max = (...nums) => Math.max(...nums);

const addRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums);
};

const mulRecurse = (...nums) => {
  if (nums.length === 1) return nums[0];
  return nums.pop() * mulRecurse(...nums);
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
};
