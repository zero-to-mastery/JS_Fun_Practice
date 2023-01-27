// Write a function identity that takes an argument and returns that argument
const identity = (x) => ( x )


// Write a binary function addb that takes two numbers and returns their sum
const addb = ( a, b ) => {
  if(!b) return a
  return ( a + b)
};


//Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => {
  if(!b) return a
  return ( a - b);
}


// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => {
  if(!b) return a
  return ( a * b ) 
}


// Write a binary function minb that takes two numbers and returns the smaller one
const minb = ( a, b ) => ( a <= b ? a : b)


// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => ( a >= b ? a : b)


// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
  if(!nums.length){
    return 'No arguments provided'
  }
  return nums.reduce(addb);
}


// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
  if(!nums.length){
    return 'No arguments provided'
  }
  return nums.reduce(subb);
}


// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
  if(!nums.length){
    return 'No arguments provided'
  }
  return nums.reduce(mulb);
}

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => {
  if(!nums.length){
    return 'No arguments provided'
  }
  return nums.reduce(minb);
}


// Write a function max that is generalized for any amount of arguments
const max = (...nums) => {
  if (!nums.length){
    return "No arguments provided"
  }
  return nums.reduce(maxb)
}


const addRecurse = (...nums) => {
  if(!nums.length){
    return "No arguments provided"
  }
  if(nums.length == 1){
    return addb(nums[0])
  }
  let number = nums.pop()
  return addb(number, addRecurse(...nums))
}


// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
  if(!nums.length) {
    return "No arguments provided"
  }
  if(nums.length == 1){
    return mulb(nums[0])
  }
  let number = nums.pop()
  return mulb(number, mulRecurse(...nums))
}


// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
  if(!nums.length) {
    return "No arguments provided"
  }
  if(nums.length == 1) {
    return nums[0]
  }
  let number = nums.pop() // making sure that pop() happens once.
  return number <= minRecurse(...nums) ? number : minRecurse(...nums)
}


// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
  if(!nums.length) {
    return "No arguments provided"
  }
  if(nums.length == 1) {
    return nums[0]
  }
  let number = nums.pop();
  return number >= maxRecurse(...nums) ? number : maxRecurse(...nums)
}


// Write a function not that takes a function and returns the negation of its result
const not = (func) => (!func);


// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial = 0) => {
  const argsReceiver = (...nums) => {
    if(!nums.length) return "No arguments provided"
    let newNums = nums.slice(initial);
    return newNums.reduce(func);
  }
  return argsReceiver;
}


// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

const accPartial = (func, start, end) => {
  const argsReceiver = (...nums) => {
    if(!nums.length) return "No arguments provided";
    let newNums = nums.slice(start, end);
    let number = func(...newNums)
    nums.splice(start, end - 1, number);
    return nums;
  }
  return argsReceiver;
}


// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => {
  const argsReceiver = (...nums) => {
    /** NOTE: The function funcRecurse relies on the fact that the provided argument func takes 1 or 2 parameters. i.e, it is a binary function as this test calls it. */
    const funcRecurse = (pos) => {
      if (pos == nums.length) {
        return
      }
      if(pos == nums.length - 1) {
        return func(nums[pos])
      }
      return func(nums[pos], funcRecurse(pos + 1))
    }

    return funcRecurse(initial)
  }

  return argsReceiver;
}


// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => {
  let array = [];
  for ( let i = 0; i < num; i += 1) {
    array.push(num)
  }
  return array;
}


// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, counter = 1) => {
  if (counter == num) return [num]
  return ([num].concat(fillRecurse(num, counter + 1)))
}


// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
  let obj = {}
  args.forEach( el => {
    if(!obj[el]){
      obj[el] = el
    }
  })
  return Object.values(obj)
}


// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => {
  return (() => (x));
}


//Write a function addf that adds from two invocations
const addf = (a) => {
  const innerAdd = (b) => {
    return (a + b)
  }
  return innerAdd;
}

// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (funcb) => {
  const innerLift = (a) => {
    const innerLiftB = (b) => {
      return funcb(a, b);
    }
    return innerLiftB;
  }
  return innerLift;
}


// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => {
  let z;
  function impure(innerx) {
    y ++;
    z = innerx * y
  }
  impure(x)
  return [y, z]
}


// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (binary, a) => {
  const innerfunc = (innerarg) => {
    return binary(a, innerarg);
  }
  return innerfunc;
}


// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...outer) => {
  const innerfunc = (...innerargs) => {
    let finalArgList = outer.concat(innerargs);
    return func(...finalArgList);
  }
  return innerfunc;
}

// Without writting any new functions, show multiple ways to create the inc function
const inc = (x) => ( ++x ); // The plus symbols should come before not after x


// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice

const twiceUnary = (binaryfunc) => {
  const innerFunc = (arg) => {
    return binaryfunc(arg, arg);
  }
  return innerFunc;
}


// Use the function twiceUnary to create the doubl function
const doubl = (x) => ( twiceUnary(addb)(x) );


// Use the function twiceUnary to create the square function
const square = (x) => ( twiceUnary(mulb)(x) );


// Write a function twice that is generalized for any amount of arguments
const twice = (func) => {
  const inner = (...args) => {
    let finalList = args.concat(args);
    return func(...finalList);
  }
  return inner;
}

// Write a function reverseb that reverses the arguments of a binary function
const reverseb = (func) => {
  const innerfunc = (a, b) => ( func(b, a) );
  return innerfunc;
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