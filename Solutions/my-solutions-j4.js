//1. Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
console.log(`identity("test"): ${identity("test")}`);

//2. Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;
console.log(`addb(3,4): ${addb(3, 4)}`);

//3. Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;
console.log(`subb(3,4): ${subb(3, 4)}`);

//4. Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;
console.log(`mulb(3,4): ${mulb(3, 4)}`);

//5. Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => Math.min(a, b);
console.log(`minb(3,4): ${minb(3, 4)}`);

//6. Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => Math.max(a, b);
console.log(`maxb(3,4): ${maxb(3, 4)}`);

//7. Write a function add that is generalized for any amount of arguments
const add = (...args) => args.reduce((accum, currVal) => accum += currVal);
console.log(`add(1, 2, 4): ${add(1, 2, 4)}`);

//8. Write a function sub that is generalized for any amount of arguments
const sub = (...args) => args.reduce((accum, currVal) => accum -= currVal);
console.log(`sub(1, 2, 4): ${sub(1, 2, 4)}`);

//9. Write a function mul that is generalized for any amount of arguments
const mul = (...args) => args.reduce((accum, currVal) => accum *= currVal);
console.log(`mul(1, 2, 4): ${mul(1, 2, 4)}`);

//10. Write a function min that is generalized for any amount of arguments
const min = (...args) => Math.min(...args);
console.log(`min(1, 2, 4): ${min(1, 2, 4)}`);

//11. Write a function max that is generalized for any amount of arguments
const max = (...args) => Math.max(...args);
console.log(`max(1, 2, 4): ${max(1, 2, 4)}`);

//12. Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...args) => {
  if (args.length > 1) {
    args[0] += args[args.length - 1];
    args.pop();
    return addRecurse(...args);
  }
  else {
    return args;
  }
}
console.log(`addRecurse(1, 2, 4): ${addRecurse(1, 2, 4)}`);

//13. Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...args) => {
  if (args.length > 1) {
    args[0] *= args[args.length - 1];
    args.pop();
    return mulRecurse(...args);
  }
  else {
    return args;
  }
}
console.log(`mulRecurse(1, 2, 4): ${mulRecurse(1, 2, 4)}`);

//14. Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...args) => {
  if (args.length > 1) {
    args[0] = Math.min(args[0], args[args.length - 1]);
    args.pop();
    return minRecurse(...args);
  }
  else {
    return args;
  }
}
console.log(`minRecurse(1, 2, 4): ${minRecurse(1, 2, 4)}`);

//15. Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...args) => {
  if (args.length > 1) {
    args[0] = Math.max(args[0], args[args.length - 1]);
    args.pop();
    return maxRecurse(...args);
  }
  else {
    return args;
  }
}
console.log(`maxRecurse(1, 2, 4): ${maxRecurse(1, 2, 4)}`);

//16. Write a function not that takes a function and returns the negation of its result
const not = (fn) => {
  return (...args) => !fn(...args);
}
const isOdd = x => x % 2 === 1;
const isEven = not(isOdd);
console.log(`isEven(1): ${isEven(1)}`);
console.log(`isEven(2): ${isEven(2)}`);

//17.Write a function acc that takes a function and an initial value and returns a function that runs the initial function 
//on each argument, accumulating the result
const acc = (fn, initial) => {
  return (...args) => args.reduce((accum, currVal) => accum += currVal, initial)
}
let mul1 = acc(mulb, 1);
console.log("mul1(1, 2, 4):", mul1(1, 2, 4));

//18. Write a function accPartial that takes in a function, a start index, and an end index, 
//and returns a function that accumulates a subset of its arguments by applying the given function 
//to all elements between start and end.
const accPartial = (fn, start, end) => {
  return (...args) => args.reduce((accum, currVal, idx) => {
    (idx > start && idx < end) ? accum[start] += currVal : accum.push(currVal);
    return accum;
  }, [])
}
const addSecondToThird = accPartial(add, 1, 3);
console.log("addSecondToThird(1, 2, 4, 8):", addSecondToThird(1, 2, 4, 8));

//19. Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (fn, initial) => {
  return (...args) => {
    if (args.length > 1) {
      return fn(accRecurse(fn, initial)(...args.slice(1)), args[0]);
    } else {
      return fn(args[0], initial);
    }
  }
}
let mul2 = accRecurse(mulb, 1);
console.log("mul2(1, 2, 4):", mul2(1, 2, 4));

//20. Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => [...Array(num)].map(n => num);
console.log("fill(3):", fill(3));

//21. Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, out = []) => {
  if (out.length === num) return out;
  out.push(num);
  return fillRecurse(num, out);
}
console.log("fillRecurse(3):", fillRecurse(3));

//22. Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => {
  return args.reduce((accum, currVal) => {
    if (!accum.includes(currVal)) accum.push(currVal);
    return accum;
  }, [])
}
console.log("set(1, 1, 1, 2, 2, 2):", set(1, 1, 1, 2, 2, 2));

//23. Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (arg) => () => arg;
let three = identityf(3);
console.log("three():", three());

//24. Write a function addf that adds from two invocations
const addf = (arg) => (arg2) => arg + arg2;
console.log("addf(3)(4):", addf(3)(4));

//25. Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (fn) => {
  return (x) => (y) => fn(x, y);
};
console.log("liftf(mul)(5)(6) :", liftf(mul)(5)(6));

//26. Write a pure function pure that is a wrapper arround the impure function
const pure = (x, y) => {
  let z;
  (function (x, y) {
    y++;
    z = x * y;
  }(x, y));

  return [x, z];
}
console.log("pure(20, 5):", pure(20, 5));
console.log("pure(25, 6):", pure(25, 6));

//27. Write a function curryb that takes a binary function and an argument, 
//and returns a function that can take a second argument
const curryb = (fn, arg1) => (arg2) => fn(arg1, arg2);
console.log("curry(mul, 5)(6):", curryb(mul, 5)(6));

//28. Write a function curry that is generalized for any amount of arguments
const curry = (fn, ...args1) => (...args2) => fn(...args1, ...args2);
console.log("curry(add, 1, 2, 4)(4, 2, 1):", curry(add, 1, 2, 4)(4, 2, 1));
console.log("curry(mul, 1, 2, 4)(4, 2, 1):", curry(mul, 1, 2, 4)(4, 2, 1));

//29. Without writting any new functions, show multiple ways to create the inc function
const inc = (x) => x += 1;
console.log("inc(5):", inc(5));
console.log("inc(inc(5)) :", inc(inc(5)));

//30. Write a function twiceUnary that takes a binary function and returns a unary function 
//that passes its argument to the binary function twice
const twiceUnary = (fn) => (arg) => fn(arg, arg);
console.log("twiceUnary(addb)(11):", twiceUnary(addb)(11));

//31. Use the function twiceUnary to create the doubl function
const doubl = (x) => twiceUnary(() => x * 2)(x);
console.log("doubl(11):", doubl(11));

//32. Use the function twiceUnary to create the square function
const square = (x) => twiceUnary(() => Math.pow(x, 2))(x);
console.log("square(11):", square(11));

//33. Write a function twice that is generalized for any amount of arguments
const twice = (fn) => (...args) => fn(...args, ...args);
console.log("twice(add)(1,2,4):", twice(add)(1, 2, 4));

//34. Write a function reverseb that reverses the arguments of a binary function
//35. Write a function reverse that is generalized for any amount of arguments
const reverseb = (fn) => (...args) => fn(...args.reverse());
console.log("reverseb(subb)(3,2):", reverseb(subb)(3, 2));

//36. Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (fn1, fn2) => (arg) => fn2(fn1(arg));
console.log("composeuTwo(doubl, square)(5):", composeuTwo(doubl, square)(5));

//37. Write a function composeu that is generalized for any amount of arguments
const composeu = (...fns) => (...args) => {
  return fns.reduce((accum,fn) => {
    accum = (accum !== 0) ? fn(accum) : fn(...args);
    console.log(accum);
    return accum;
  },0);
};
console.log("composeu(doubl, square, identity, curry(add, 1, 2))(5):", composeu(doubl, square, identity, curry(add, 1, 2))(5));

//38. Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (fn1,fn2) => (a,b,c) => fn2(fn1(a,b),c);
console.log("composeb(addb, mulb)(2, 3, 7):",composeb(addb, mulb)(2, 3, 7));

//39. Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (fn1,fn2) => (...args) => fn2(fn1(...args));
console.log("composeTwo(add, square)(2, 3, 7):",composeTwo(add, square)(2, 3, 7)); 

//40. Write a function compose that takes any amount of functions and returns a function that takes any amount of arguments 
//and gives them to the first function, then that result to the second function and so on
const compose = composeu;
const maxForArr = (args) => Math.max(...args);
console.log("compose(add, doubl, fill, maxForArr)(0,1,2):",compose(add, doubl, fill, maxForArr)(0,1,2));

//41. Write a function limitb that allows a binary function to be called a limited number of times

//42. Write a function limit that is generalized for any amount of arguments

//43. Write a function genFrom that produces a generator that will produces a series of values

//44. Write a function genTo that takes a generator and an end limit, and returns a generator that will produce numbers up to that limit

//45. Write a function genFromTo that produces a generator that will produce values in a range

//46. Write a function elementGen that takes an array and a generator and returns a generator that will produce elements from the array

//47. Write a function element that is a modified elementGen function so that the generator argument is optional. 
//If a generator is not provided, then each of the elements of the array will be produced.

//48. Write a function collect that takes a generator and an array and produces a function that will collect the results in the array

//49. Write a function filter that takes a generator and a predicate and produces a generator 
//that produces only the values approved by the predicate

//50. Write a function filterTail that uses tail-recursion to perform the filtering

//51. Write a function concatTwo that takes two generators and produces a generator that combines the sequences

//52. Write a function concat that is generalized for any amount of arguments

//53. Write a function concatTail that uses tail-recursion to perform the concating

//54. Write a function gensymf that makes a function that generates unique symbols

//55. Write a function gensymff that takes a unary function and a seed and returns a gensymf

//56. Write a function fibonaccif that returns a generator that will return the next fibonacci number

//57. Write a function counter that returns an object containing two functions that implement an up/down counter, hiding the counter

//58. Write a function revocableb that takes a binary function, and returns an object containing an invoke function 
//that can invoke a function and a revoke function that disables the invoke function

//59. Write a function revocable that is generalized for any amount of arguments

//60. Write a function extract that takes an array of objects 
//and an object property name and converts each object in the array by extracting that property

//61. Write a function m that takes a value and an optional source string and returns them in an object

//62. Write a function addmTwo that adds two m objects and returns an m object

//63. Write a function addm that is generalized for any amount of arguments

//64. Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects

//65. Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects

//66. Write a function liftm that is generalized for any amount of arguments

//67. Write a function exp that evaluates simple array expressions

//68. Write a function expn that is a modified exp that can evaluate nested array expressions

//69. Write a function addg that adds from many invocations, until it sees an empty invocation

//70. Write a function liftg that will take a binary function and apply it to many invocations

//71. Write a function arrayg that will build an array from many invocations

//72. Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument

//73. Write a function continuize that takes a function and returns a function that takes a callback and an argument

//74. Make an array wrapper object with methods get, store, and append, such that an attacker cannot get access to the private array

//75. How would you rewrite vector to deal with the issue from above?

//76. Make a function pubsub that makes a publish/subscribe object. 
//It will reliably deliver all publications to all subscribers in the right order.

//77. Make a function mapRecurse that performs a transformation for each element of a given array, recursively

//78. Make a function filterRecurse that takes in an array and a predicate function 
//and returns a new array by filtering out all items using the predicate, recursively.