//1. identity(x) ⇒ any
//Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

//2. addb(a, b) ⇒ number
//Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a + b;

//3. subb(a, b) ⇒ number
//Write a binary function subb that takes two numbers and returns their difference

const subb = (a, b) => a - b;

//4. mulb(a, b) ⇒ number
//Write a binary function mulb that takes two numbers and returns their product

const mulb = (a, b) => a * b;

//5. minb(a, b) ⇒ number
//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
  return Math.min(a, b);
};

//6. maxb(a, b) ⇒ number
//Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (a, b) => {
  return Math.max(a, b);
};

//7. add(...nums) ⇒ number
//Write a function add that is generalized for any amount of arguments

const add = (...nums) => {
  return nums.reduce((prev, curr) => {
    return prev + curr;
  });
};

//8. sub(...nums) ⇒ number
//Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => {
  return nums.reduce((prev, curr) => {
    return prev - curr;
  });
};

//9. mul(...nums) ⇒ number
//Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((a, b) => a * b, 1);

//10. mul(...nums) ⇒ number
//Write a function mul that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((prev, curr) => Math.min(prev, curr));

//11. max(...nums) ⇒ number
//Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((prev, curr) => Math.max(prev, curr));

//12. addRecurse(...nums) ⇒ number
//Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
  let [first, ...args] = nums;
  if (nums.length == 1) return nums[0];
  else return first + addRecurse(...args);
};

//13. mulRecurse(...nums) ⇒ number
//Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
  let [first, ...args] = nums;
  if (nums.length == 1) return nums[0];
  else return first * mulRecurse(...args);
};

//14. minRecurse(...nums) ⇒ number
//Write a function minRecurse that is the generalized min function but uses recursion

const minRecurse = (...nums) => {
  if (nums.length == 1) return nums[0];
  let compareNums = minRecurse(...nums.slice(1));
  if (nums[0] < compareNums) return nums[0];
  return compareNums;
};

//15. maxRecurse(...nums) ⇒ number
//Write a function maxRecurse that is the generalized max function but uses recursion

const maxRecurse = (...nums) => {
  if (nums.length == 1) return nums[0];
  let compareNums = maxRecurse(...nums.slice(1));
  if (nums[0] > compareNums) return nums[0];
  return compareNums;
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
