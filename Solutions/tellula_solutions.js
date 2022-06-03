//Write a function identity that takes an argument and returns that argument

let identity = (x) => {
  return x;
}

let addb = (a, b) => {
  return a + b;
}

let subb = (a, b) => {
  return a - b;
}

let mulb = (a, b) => {
  return a * b;
}

let minb = (a, b) => {
 if (a < b ) {
   return a
 } else {
   return b
 }
}

let maxb = (a, b) => {
  if (a > b ) {
    return a
  } else {
    return b
  }
 }

 let add = (...nums) => {
   return nums.reduce(function (acc, cur) {
     return acc + cur
   })
 }

 let sub = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc - cur
  })
}

let mul = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc * cur
  })
}

let min = (...nums) => {
  return nums.reduce(function (acc, cur) {
     if (acc < cur) {
       return acc
     }
  })
}

let max = (...nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
          max = nums[i];
      }
  }
  return max;
}

let addRecurse = (...nums) => {
	if(nums.length < 1)
		return 0
	return nums[0] + addRecurse(...nums.slice(1))

}

let mulRecurse = (...nums) => {
	if(nums.length < 1)
		return 0
	return nums[0] * mulRecurse(...nums.slice(1))

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
