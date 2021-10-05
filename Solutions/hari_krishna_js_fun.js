const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => (a > b ? b : a);

const maxb = (a, b) => (a > b ? a : b);

const add = (...nums) => {
  return nums.reduce((acc, num) => acc + num);
};

const sub = (...nums) => {
  return nums.reduce((acc, num) => acc - num);
};
const mul = (...nums) => {
  return nums.reduce((acc, num) => acc * num);
};
const min = (...nums) => {
  return Math.min(...nums);
};

const max = (...nums) => {
  return Math.max(...nums);
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
};
