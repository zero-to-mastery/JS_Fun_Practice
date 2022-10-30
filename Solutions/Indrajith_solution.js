const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => Math.min(a, b);

const maxb = (a, b) => Math.max(a, b);

const add = (...nums) => nums.reduce((a, b) => a + b, 0);

const sub = (...nums) => nums.reduce((a, b) => a - b);

const mul = (...nums) => nums.reduce((a, b) => a * b);

const min = (...nums) => nums.reduce((a, b) => (a < b ? a : b));

const max = (...nums) => nums.reduce((a, b) => (a > b ? a : b));

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
};
