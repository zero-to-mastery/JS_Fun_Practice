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
  //   addRecurse,
  //   mulRecurse,
  //   minRecurse,
  //   maxRecurse,
  //   not,
  //   acc,
  //   accPartial,
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
