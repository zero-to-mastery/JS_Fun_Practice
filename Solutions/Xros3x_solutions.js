//Identity
const indentity = (x) => x;

//Add
const addb = (a, b) => a + b;

//Sub
const subb = (a, b) => a - b;

//Mulb
const mulb = (a, b) => a * b;

//Minb
const minb = (a, b) => (a < b ? a : b);

//Maxb
const maxb = (a, b) => (a > b ? a : b);

//Add (nums)
function add(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

//Sub (nums)
function sub(...args) {
  if (args.length === 0) {
    throw new Error("At least one argument is required.");
  }

  return args.reduce((accumulator, currentValue) => accumulator - currentValue);
}

//Mul (nums)
function mul(...args) {
  if (args.length === 0) {
    throw new Error("At least one argument is required.");
  }

  return args.reduce((accumulator, currentValue) => accumulator - currentValue);
}

//Min (nums)
function min(...args) {
  if (args.length === 0) {
    throw new Error("At least one argument is required.");
  }

  let minValue = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < minValue) {
      minValue = args[i];
    }
  }
  return minValue;
}

//Max (nums)