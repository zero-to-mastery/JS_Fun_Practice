const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b ;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

const maxb = (a, b) => a > b ? a : b;

const add = (...nums) => nums.reduce((total, current) => total+current, 0)

const sub = (...nums) => nums.reduce((total, current) => total-current)

const mul = (...nums) => nums.reduce((total, current) => total*current, 1)

const min = (...nums) => nums.reduce((min, current) => current < min ? current : min)

const max = (...nums) => nums.reduce((max, current) => current > max ? current : max)

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
  max
}