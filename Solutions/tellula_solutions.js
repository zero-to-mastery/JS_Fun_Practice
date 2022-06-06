//Write a function identity that takes an argument and returns that argument
let identity = (x) => {
  return x;
};

// Write a binary function addb that takes two numbers and returns their sum
let addb = (a, b) => {
  return a + b;
};

//Write a binary function subb that takes two numbers and returns their difference
let subb = (a, b) => {
  return a - b;
};

//Write a binary function mulb that takes two numbers and returns their product
let mulb = (a, b) => {
  return a * b;
};

//Write a binary function minb that takes two numbers and returns the smaller one
let minb = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
//Write a binary function maxb that takes two numbers and returns the larger one
let maxb = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

//Write a function add that is generalized for any amount of arguments
let add = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  });
};

//  Write a function sub that is generalized for any amount of arguments
let sub = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc - cur;
  });
};
// Write a function mul that is generalized for any amount of arguments
let mul = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc * cur;
  });
};
// Write a function min that is generalized for any amount of arguments
let min = (...nums) => {
  return Math.min(...nums);
};
// Write a function max that is generalized for any amount of arguments
let max = (...nums) => {
  return Math.max(...nums);
};
// Write a function addRecurse that is the generalized add function but uses recursion
let addRecurse = (...nums) => {
  if (nums.length < 1) return 0;
  return nums[0] + addRecurse(...nums.slice(1));
};

// Write a function mulRecurse that is the generalized mul function but uses recursion
let mulRecurse = (...nums) => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    return nums.shift() * mulRecurse(...nums);
  }
};

// Write a function minRecurse that is the generalized min function but uses recursion
let minRecurse = (...nums) => {
  if (nums.length == 1) return nums[0];

  nums = Math.min(...nums);
  return minRecurse(nums);
};
// Write a function maxRecurse that is the generalized max function but uses recursion
let maxRecurse = (...nums) => {
  if (nums.length == 1) return nums[0];

  nums = Math.max(...nums);
  return maxRecurse(nums);
};
// Write a function not that takes a function and returns the negation of its result
const not = (func) => (x) => {
  return !Boolean(func(x));
};

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
let acc = (func, initial) => {
  return (...nums) => nums.reduce(func, initial);
};

// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end
let accPartial = (func, start, end) => {
  return (...nums) => {
    let merge = nums.splice(start, end - start);
    // console.log('merge', merge)
    // console.log('nums', nums)
    nums.splice(start, 0, func(...merge));
    return nums;
  };
};

//Write a function accRecurse that does what acc does but uses recursion
let accRecurse = (func, initial) => {
  return (...num) => {
    let nums = num.flat();
    if (nums.length === 1) {
      return func(initial, nums[0]);
    } else {
      return accRecurse(func, func(nums.shift(), initial))(nums);
    }
  };
};

// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
let fill = (num) => {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(num);
  }
  return array;
};

//Write a function fillRecurse that does what fill does but uses recursion

let fillRecurse = (num, array) => {
  if (!array) {
    array = [];
  }
  if (array.length === num) {
    return array;
  } else {
    array.push(num);
    return fillRecurse(num, array);
  }
};

// Write a function set that is given a list of arguments and returns an array with all duplicates removed

let set = (...nums) => {
  let array = new Array(...nums);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(array[i], 2);
    }
  }
  return array;
};

// Write a function identityf that takes an argument and returns a function that returns that argument
let identityf = (x) => {
  return function () {
    return x;
  };
};

//Write a function addf that adds from two invocations
let addf = (a) => (b) => a + b;

// Write a function liftf that takes a binary function, and makes it callable with two invocations

let liftf = (binaryFunc) => {
  return (a) => (b) => binaryFunc(a, b);
};

// Write a pure function pure that is a wrapper arround the impure function impure
function impure(x) {
  y++;
  z = x * y;
}

var y = 5,
  z;

// Returns: array - an array containing y and z
let pure = (x, y) => {
  let z = ++y * x;
  let newArr = [y, z];
  return newArr;
};

// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
let curryb = (binaryFunc, a) => {
  return (b) => {
    return binaryFunc(a, b);
  };
};

// Write a function curry that is generalized for any amount of arguments
let curry = (func, ...outer) => {
  return (...nums) => {
    return func(...outer, ...nums);
  };
};

// Without writting any new functions, show multiple ways to create the inc function
let inc = (x) => ++x;

// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
let twiceUnary = (binaryFunc) => {
  return (a) => {
    return binaryFunc(a, a);
  };
};

// Use the function twiceUnary to create the doubl function
let doubl = (x) => {
  return twiceUnary(addb)(x);
};

// Use the function twiceUnary to create the square function
let square = (x) => {
  return twiceUnary(mulb)(x);
};

// Write a function twice that is generalized for any amount of arguments

let twice = (x) => {
  return (...args) => {
    return x(...args, ...args);
  };
};
// Write a function reverseb that reverses the arguments of a binary function
let reverseb = (binaryFunc) => {
  return (a, b) => {
    return binaryFunc(b, a);
  };
};

// Write a function reverse that is generalized for any amount of arguments
let reverse = (binaryFunc) => {
  return (...args) => {
    return binaryFunc(...args.reverse());
  };
};
// Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
let composeuTwo = (unaryFunc1, unaryFunc2) => {
  return (x) => {
    x = unaryFunc1(x);
    return unaryFunc2(x);
  };
};

// Write a function composeu that is generalized for any amount of arguments
let composeu =
  (...funcs) =>
  (x) => {
    funcs.forEach((func) => (x = func(x)));
    return x;
  };

// Write a function composeb that takes two binary functions and returns a function that calls them both
let composeb = (binaryFunc1, binaryFunc2) => (a, b, c) => {
  return binaryFunc2(binaryFunc1(a, b), c);
};

// Write a function composeTwo that takes two functions and returns a function that calls them both
let composeTwo =
  (binaryFunc1, binaryFunc2) =>
  (...nums) => {
    nums = binaryFunc1(...nums);
    return binaryFunc2(nums);
  };

// Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on
let compose =
  (...funcs) =>
  (...args) => {
    let x = funcs[0](...args);
    for (let i = 1; i < funcs.length; i++) {
      if (typeof x === "object") {
        x = funcs[i](...x.values());
        continue;
      }
      x = funcs[i](x);
    }
    return x;
  };

// Write a function limitb that allows a binary function to be called a limited number of times
let limitb =
  (binaryFunc, lmt, count = 0) =>
  (x, y) => {
    count++;
    console.log("x", x);
    console.log("y", y);
    console.log("count", count);
    return count <= lmt ? binaryFunc(x, y) : undefined ;
  };

// Write a function limit that is generalized for any amount of arguments
let limit =
(func, lmt, count = 0) => 
(...args) => {
  count++;
  console.log('args', ...args);
  console.log("count", count);
  return count <= lmt ? func(...args) : undefined ;
}

// Write a function genFrom that produces a generator that will produces a series of values
function* genFrom(i) {
  while (true)
    yield i++;
}

// Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit
let genTo = (geneFunc,lmt) => {
  return () => {
    let count = geneFunc.next().value;
    if(count < lmt) {
    return count
    }
    return 
    } 
};

// Write a function genFromTo that produces a generator that will produce values in a range
function genFromTo(start,end){
  function* count(){
      while(start<end)
      yield start++
      }
  return () => count().next().value;
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
