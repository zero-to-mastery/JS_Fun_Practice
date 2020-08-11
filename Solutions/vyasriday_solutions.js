const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a > b ? a - b : b - a;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb
}