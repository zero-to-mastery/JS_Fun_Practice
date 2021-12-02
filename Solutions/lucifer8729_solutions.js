`use strict`;

const identity = (element) => element;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b;

const mulb = (a, b) => a * b;

const minb = (a, b) => (a < b ? a : b);

const maxb = (a, b) => (a > b ? a : b);

const add = (...args) => args.reduce((acc, num) => num + acc, 0);

const sub = (...args) => args.reduce((acc, num) => acc - num);

const mul = (...args) => args.reduce((acc, num) => num * acc, 1);

const min = (...args) => args.reduce((acc, num) => minb(acc, num));

const max = (...args) => args.reduce((acc, num) => maxb(acc, num));

const addRecurse = (...args) => {
  if (args.length === 1) return args[0];

  return args.pop() + addRecurse(...args);
};

const mulRecurse = (...args) => {
  if (args.length === 1) return args[0];

  return args.pop() * mulRecurse(...args);
};

const minRecurse = (...args) => {
  if (args.length === 1) return args[0];

  if (args[0] < minRecurse(...args.slice(1))) return args[0];
  return minRecurse(...args.slice(1));
};

const maxRecurse = (...args) => {
  if (args.length === 1) return args[0];

  if (args[0] > minRecurse(...args.slice(1))) return args[0];
  return maxRecurse(...args.slice(1));
};

const not = (func) => {
  return (...args) => !func(...args);
};

const acc = (func, val) => {
  return (...args) => {
    for (el of args) {
      val = func(val, el);
    }
    return val;
  };
};

// const accPartial = (func, start, end) => {
//   return (...args) => {
//     for (let i = start; i < end; i++) {
//       val = func(val, args[i]);
//     }
//     return val;
//   };
// };

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
  // accPartial,
  //   accRecurse,
  //   fill,
  //   fillRecurse,
  //   set,
  //   identityf,
  //   addf,
  //   liftf,
  //   pure,
  //   curryb,
  //   curry,
  //   inc,
  //   twiceUnary,
  //   doubl,
  //   square,
  //   twice,
  //   reverseb,
  //   reverse,
  //   composeuTwo,
  //   composeu,
  //   composeb,
  //   composeTwo,
  //   compose,
  //   limitb,
  //   limit,
  //   genFrom,
  //   genTo,
  //   genFromTo,
  //   elementGen,
  //   element,
  //   collect,
  //   filter,
  //   filterTail,
  //   concatTwo,
  //   concat,
  //   concatTail,
  //   gensymf,
  //   gensymff,
  //   fibonaccif,
  //   counter,
  //   revocableb,
  //   revocable,
  //   extract,
  //   m,
  //   addmTwo,
  //   addm,
  //   liftmbM,
  //   liftmb,
  //   liftm,
  //   exp,
  //   expn,
  //   addg,
  //   liftg,
  //   arrayg,
  //   continuizeu,
  //   continuize,
  //   vector,
  //   exploitVector,
  //   vectorSafe,
  //   pubsub,
  //   mapRecurse,
  //   filterRecurse,
};
