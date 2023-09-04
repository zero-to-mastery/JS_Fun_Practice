let identity = (arg) => {
  return arg;
};

let addb = (a, b) => {
  return a + b;
};

let subb = (a, b) => {
  return a - b;
};

function mulb(a, b) {
  return a * b;
}

function minb(a, b) {
  return Math.min(a, b);
}

function maxb(a, b) {
  return Math.max(a, b);
}

function add(...num) {
  return num.reduce((cum, num) => {
    return cum + num;
  }, 0);
}

function sub(...num) {
  return num.reduce((cum, num) => {
    return cum - num;
  });
}

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  // mul,
  // min,
  // max,
  // addRecurse,
  // mulRecurse,
  // minRecurse,
  // maxRecurse,
  // not,
  // acc,
  // accPartial,
  // accRecurse,
  // fill,
  // fillRecurse,
  // set,
  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
