/*
 * @author Bltzz
 *
*/

function _check(x, y) {
  if (typeof x !== 'number') { throw new TypeError(`${x} is not a number`); }
  if (typeof y !== 'number') { throw new TypeError(`${y} is not a number`); }
}

function _checkSingle(x) {
  if (typeof x !== 'number' || x === undefined) { throw new TypeError(`${x} is not a number`); }
}

function _checkArray(...nums) {
  if (nums.length === 0 || nums === undefined) {
    throw new Error('No arguments provided.');
  }
  nums.forEach(x => _checkSingle(x));
}

function _checkFunction(func) {
  if (typeof func !== 'function') { throw new TypeError('Input must be a function'); }
}

/**
 * identity(x) ⇒ any
 * @param {*} x - Any value
 * @returns {*} - The same value
 */
function identity(x) {
  return x;
}

/**
 * addb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x plus y
 */
function addb(a, b) {
  _check(a, b);
  return a + b;
}

/**
 * subb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x minus y
 */
function subb(a, b) {
  _check(a, b);
  return a - b;
}

/**
 * mulb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x times y
 */
function mulb(a, b) {
  _check(a, b);
  return a * b;
}

/**
 * minb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - The smaller value
 */
function minb(a, b) {
  _check(a, b);
  return a < b ? a : b;
}

/**
 * maxb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - The bigger value
 */
function maxb(a, b) {
  _check(a, b);
  return a > b ? a : b;
}

/**
 * add(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The sum of all the numeric values
 */
function add(...nums) {
  _checkArray(...nums);
  // Use build-in reduce function
  return nums.reduce((sum, num) => sum + num, 0);

  // Alternative:
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) sum += nums[i];
  // return sum;
}

/**
 * sub(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The result of subtracting all the numeric values
 *                      - taking first element as starting point
 */
function sub(...nums) {
  _checkArray(...nums);
  // let result = nums[0];
  // for (let i = 1; i < nums.length; i++) result -= nums[i];
  // Alternative:
  // Use built-in reduce function
  return nums.reduce((result, num) => result - num);
  // return result;
}

/**
 * mul(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The result of mulitplying all the numeric values
 */
function mul(...nums) {
  _checkArray(...nums);
  // let result = 1;
  // for (let i = 0; i < nums.length; i++) result *= nums[i];
  // Alternative:
  // Use built-in reduce function
  return nums.reduce((result, num) => result * num);
  // return result;
}

/**
 * min(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The smallest of the numeric values
 */
function min(...nums) {
  _checkArray(...nums);
  // let result = nums[0];
  // for (let i = 0; i < nums.length; i++) (result > nums[i + 1]) ? result = nums[i + 1] : result;
  // Alternative:
  // Use built-in Math.min function
  return Math.min(...nums);
  // return result;
}

/**
 * max(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The biggest of the numeric values
 */
function max(...nums) {
  _checkArray(...nums);
  // let result = nums[0];
  // for (let i = 0; i < nums.length; i++) (result < nums[i + 1]) ? result = nums[i + 1] : result;
  // Alternative:
  // Use built-in Math.max function
  return Math.max(...nums);
  // return result;
}

/**
 * addRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The sum of the numeric values
 */
function addRecurse(...nums) {
  nums.forEach(x => _checkSingle(x));
  if (nums.length === 0) { return 0; }
  return nums[0] + addRecurse(...nums.slice(1));
}

/**
 * mulRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The product of the numeric values
 */
function mulRecurse(...nums) {
  nums.forEach(x => _checkSingle(x));
  if (nums.length === 0) { return 1; }
  return nums[0] * mulRecurse(...nums.slice(1));
}

/**
 * minRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The smallest of the numeric values
 */
function minRecurse(...nums) {
  nums.forEach(x => _checkSingle(x));
  // Base case: return -Infinity if no arguments are provided
  if (nums.length === 0) return Infinity;
  // Base case: return the single value if only one argument is provided
  if (nums.length === 1) return nums[0];
  return nums[0] < minRecurse(...nums.slice(1)) ? nums[0] : minRecurse(...nums.slice(1));
}

/**
 * maxRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The biggest of the numeric values
 */
function maxRecurse(...nums) {
  nums.forEach(x => _checkSingle(x));
  // Base case: return -Infinity if no arguments are provided
  if (nums.length === 0) return -Infinity;
  // Base case: return the single value if only one argument is provided
  if (nums.length === 1) return nums[0];
  // Recursive case: compare the first number with the maximum of the rest
  return nums[0] > maxRecurse(...nums.slice(1)) ? nums[0] : maxRecurse(...nums.slice(1));
}

/**
 * not(func) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - The inverse res of the function
 */
function not(func) {
  _checkFunction(func);
  return function inverseFunc(...args) {
    return !func(...args);
  };
}

/**
 * acc(func, initial) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - returns a number that runs the initial function
 *                      on each argument, accumulating the result
 */
function acc(func, initial) {
  _checkFunction(func);
  _checkSingle(initial);
  return function accumFunc(...args) {
    return args.reduce((accumulator, current) => func(accumulator, current), initial);
  };
  //   return function accumFunc(...args) {
  //     let x = initial;
  //     for (const i of args) {
  //       x = func(x, i);
  //     }
  //     return x;
  //   };
}

/**
 * accPartial(func, start, end) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - returns a function that accumulates a subset of its arguments
 *   by applying the given function to
 *   all elements between start and end incl. the stuff before start and after end
 */
function accPartial(func, start, end) {
  _checkFunction(func);
  _checkArray(start, end);
  return function rangeAppliedFunc(...args) {
    const subset = args.slice(start, end);
    // return args.slice(0, start) + func(...subset) + args.slice(end, args.length);
    return [...args.slice(0, start), func(...subset), ...args.slice(end)];
  };
}

/**
 * accRecurse(func, initial) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - Same as acc, but recursively
 */
function accRecurse(func, initial) {
  _checkFunction(func);
  _checkArray(initial);
  return function rangeAppliedRecurseFunc(...args) {
    if (args.length === 0) {
      return initial;
    }
    const first = args[0];
    const rest = args.slice(1);
    // same as
    // const [first, ...rest] = args;
    const result = func(initial, first);

    return acc(func, result)(...rest);
  };
}

/**
 * fill(num) ⇒ array
 * @param {num} function - Any number
 * @returns {Array} - An num long array filled with num
 */
function fill(num) {
  _checkSingle(num);
  return Array(num).fill(num);
}

/**
 * fillRecurse(num) ⇒ array
* @param {num} function - Any number
 * @returns {Array} - An num long array filled with num
 */
function fillRecurse(num, result = []) {
  _checkSingle(num);
  // Break Condition: if num is 0, return the result array
  if (num === 0) {
    return result;
  }
  // Add the given number to the result array
  // as we decrease the number to make recursion possible,
  // add length of the result to always add the same number.
  result.push(num + result.length);

  // Call fillRecurse recursively with num - 1
  return fillRecurse(num - 1, result);
}

/**
 * set(...args) ⇒ array
 * @param {num} function - Any number
 * @returns {Array} - An num long array filled with num
 */
function set(...args) {
  _checkArray(...args);
  return Array.from(new Set(args));
}

/**
 * identityf(x) ⇒ function
 * @param {x} - Anything
 * @returns {function(x)} - A function that returns x
 */
function identityf(x) {
  return function innerIdentityf() { return x; };
}

/**
 * addf(a) ⇒ function
 * @param {a} - Any number
 * @returns {function} - A function that adds from two invocations
 */
function addf(a) {
  _checkSingle(a);
  return function innerAdd(b) {
    _checkSingle(b);
    return a + b;
  };
}

/**
 * liftf(binary) ⇒ function
 * @param {binary}function - Any binary function
 * @returns {Array} - An num long array filled with num
 */
function liftf(binary) {
  _checkFunction(binary);
  return function firstOperandFunc(a) {
    _checkSingle(a);
    return function secondOperandFunc(b) {
      _checkSingle(b);
      return binary(a, b);
    };
  };
}

/**
 * pure(x, y) ⇒ array
 * @param {x} - Any number
 * @param {y} - Any number
 * @returns {Array} - An num long array filled with num
 */
function pure(x, y) {
  _check(x, y);
  let z;
  function impure(a) {
    y += 1; // this generates a lint warning - but I cannot fix it as this was given!
    z = a * y;
  }
  impure(x);
  return [y, z];
}

/**
 * curryb(binary, a) ⇒ function
 * @param {binary} function - Any number
 * @param {a} - Any number
 * @returns {function} - returns a function that can take a second argument
 *
 *  */
function curryb(binary, a) {
  _checkFunction(binary);
  return function innercurryb(b) {
    return binary(a, b);
  };
}

/**
 * curry(func, ...outer) ⇒ function
 * @param {func} function - Any function
 * @param {...outer} - Any list of args
 * @returns {function} - returns a function that can take any list of args
 *
 *  */
function curry(func, ...outer) {
  return function innerCurry(...other) {
    return func(...outer.concat(other));
  };
}


/**
 * inc(x) ⇒ number
 * Without writting any new functions, show multiple ways to create the inc function
 *
 * Other options:
 * 1.
 * const inc = x => x + 1;
 * 2.
 * const inc = function(x) {
 *     return x + 1;
 * };
 *
 * @param {x} - Any number
 * @returns {x + 1} - the stuff they asked for (x + 1). On nested calls: x + #of nests
 *
 *  */
function inc(x) {
  return x + 1;
}

/**
 * twiceUnary(binary) ⇒ function
 *
 * @param {binary} - Any binary function
 * @returns {function} - a unary function that passes its argument to the binary function twice
 *
 *  */
function twiceUnary(binary) {
  return function innerUnaryFunc(b) {
    return binary(b, b);
  };
}

/**
 * doubl(x) ⇒ number
 *
 * @param {x} - Any number
 * @returns {function} - Use the function twiceUnary to return the double of x
 *
 *  */
function doubl(x) {
  _checkSingle(x);
  return twiceUnary(add)(x);
}

/**
 * square(x) ⇒ number
 *
 * @param {x} - Any number
 * @returns {function} - Use the function twiceUnary to return x square
 *
 *  */
function square(x) {
  _checkSingle(x);
  return twiceUnary(mul)(x);
}

/**
 * twice(x) ⇒ any
 *
 * @param {x} function - the add function
 * @returns {function} - Use the function twiceUnary to return x square
 *
 *  */
function twice(x) {
  return function innerDuplicate(...args) {
    return 2 * x(...args);
  };
}


/**
 * reverseb(binary) ⇒ function
 *
 * @param {binary} function - any binary function
 * @returns {function} - Use the function twiceUnary to return x square
 *
 *  */
function reverseb(binary) {
  return function innerReverseB(...args) {
    return binary(...args.reverse());
  };
}

/**
 * reverse(func) ⇒ function
 *
 * @param {func} function - any function
 * @returns {function} - Use the function twiceUnary to return x square
 *
 *  */
function reverse(binary) {
  return function innerReverse(...args) {
    return reverseb(binary)(...args);
  };
}

/**
 * composeuTwo(unary1, unary2) ⇒ function
 *
 * @param {unary1} function - any unary function
 * @param {unary2} function - any unary function
 * @returns {function} - Use the function twiceUnary to return x square
 *
 *  */
function composeuTwo(unary1, unary2) {
  return function composeArg(arg) {
    return unary2(unary1(arg));
  };
}

/**
 * composeu(...funcs) ⇒ any
 *
 * @param {...funcs} function - an array of functions
 * @returns {function} - composes a generic amount of functions
 *
 *  */
function composeu(...funcs) {
  return function composeArg(arg) {
    return funcs.reduce((result, func) => func(result), arg);
  };
}


/**
 * composeb(binary1, binary2) ⇒ function
 *
 * @param {binary1} function - any binary function
 * @param {binary2} function - any binary function
 * @returns {function} - composes two functions to a single one that calls both (binary)
 *
 *  */
function composeb(binary1, binary2) {
  return function composeBArgs(...arg) {
    return binary2(binary1(arg[0], arg[1]), arg[2]);
  };
}

/**
 * composeTwo(func1, func2) ⇒ function
 *
 * @param {func1} function - any function
 * @param {func2} function - any function
 * @returns {function} - composes two functions to a single one that calls both
 *      (independend of arg length)
 *
 *  */
function composeTwo(func1, func2) {
  return function composeBArgs(...arg) {
    return func2(func1(...arg));
  };
}

/**
 * compose(...funcs) ⇒ function
 *
 * @param {...funcs} function - any list of function
 * @returns {function} - composes any amount functions to a single one that calls all of them
 *       (independend of arg length)
 *
 *  */
// max(fill(double(add(...args))))
function compose(...funcs) {
  // It returns a new function that will apply each function in the array from right to left
  return function applyFromRightToLeft(...args) {
    // This reduce function iterates over the functions array
    return funcs.reduce((result, fn) => {
      // If the result is not an array, convert it to an array
      const argsArray = Array.isArray(result) ? result : [result];
      // Apply the current function to the arguments (result or [result])
      return fn(...argsArray);
    }, args); // Initial arguments are passed to the first function
  };
}

/**
 * limitb(binary, lmt) ⇒ function
 *
 * @param {binary} function - any function
 * @param {lmt} number - any limit (integer)
 * @returns {function} - returns a function that can be calles lmt times
 *
 *  */
function limitb(binary, lmt) {
  let callCount = 0;
  return function limitedBinary(arg1, arg2) {
    callCount += 1; // to be lint compliant
    return (callCount <= lmt) ? binary(arg1, arg2) : undefined;
    // one could also do this without the extra line for incrementing the counter
    // return (++callCount <= lmt) ? binary(arg1, arg2) : undefined;
  };
}

/**
 * limit(func, lmt) ⇒ function
 *
 * @param {func} function - any function
 * @param {lmt} number - any limit (integer)
 * @returns {function} - returns a function that can be calles lmt times
 *
 *  */
function limit(func, lmt) {
  let callCount = 0;
  return function limitedBinary(...args) {
    callCount += 1; // to be lint compliant
    return (callCount <= lmt) ? func(...args) : undefined;
    // one could also do this without the extra line for incrementing the counter
    // return (++callCount <= lmt) ? func(...args) : undefined;
  };
}

/**
 * genFrom(x) ⇒ function
 *
 * @param {x} number - any integer
 * @returns {number} - the count of how often it has been called + x
 *
 *  */
function* genFrom(x) {
  let currentValue = x;
  while (true) {
    yield currentValue;
    currentValue += 1;
  }
}

/**
 * genTo(gen, lmt) ⇒ function
 *
 * @param {gen} function - the generator
 * @param {lmt} number - any integer
 *
 *  */
function* genTo(gen, lmt) {
  let lim = lmt - 1;
  let next = gen.next();

  while (!next.done && lim > 0) {
    yield next.value;
    lim -= 1;
    next = gen.next();
  }
}

/**
 * genFromTo(start, end) ⇒ function
 *
 * @param {start} number - any integer
 * @param {end} number - any integer
 *
 *  */
function* genFromTo(start, end) {
  if (start >= end) throw Error('Start must not be greater than end');
  let currentValue = start;
  while (currentValue < end) {
    yield currentValue;
    currentValue += 1;
  }
  return undefined;
}

/**
 * elementGen(array, gen) ⇒ function
 *
 * @param {array} array - any array
 * @param {gen} function* - the generator func
 * @returns {function} - returns a generator that will produce elements from the array
 *
 *  */
function* elementGen(array, gen) {
  while (true) {
    const index = gen.next().value;
    // If the generator function reaches the end, break the loop
    if (index === undefined) {
      break;
    }
    yield array[index];
  }
}

/**
 * element(array, gen) ⇒ function
 *
 * @param {array} array - any array
 * @param {gen} function* - the generator func
 * @returns {function} - returns a generator that will produce elements from the array
 *
 *  */
function* element(array, gen) {
  let currentValue = 0;
  while (true) {
    yield array[currentValue];
    currentValue += 1;
  }
}


/**
 * collect(gen, array) ⇒ function
 *
 * @param {array} array - any array
 * @param {gen} function* - the generator func
 * @returns {function} - returns a generator that will produce elements from the array
 *
 *  */
function* collect(gen, array) {
  const arrCopy = array;
  while (true) {
    const index = gen.next().value;
    // If the generator function reaches the end, break the loop
    if (index === undefined) {
      break;
    }
    arrCopy[index] = index;
    yield arrCopy[index];
  }
}

/**
 * filter(gen, predicate) ⇒ function
 *
 * @param {gen} function - any generator function
 * @param {predicate} function* - the predicate
 * @returns {function} - produces a generator that produces only the values
 *      approved by the predicate
 *
 *  */
function* filter(gen, predicate) {
  let result;
  while (true) {
    result = gen.next();
    if (result.done) break;

    const index = result.value;
    if (predicate(index)) {
      yield index;
    }
  }
}

/**
 * filterTail(gen, predicate) ⇒ function
 *
 * @param {gen} function - any generator function
 * @param {predicate} function - the predicate
 * @returns {function} - same as filter() but with tail-recursion to perform the filtering
 *
 *  */
function* filterTail(gen, predicate) {
  const { done, value } = gen.next();
  if (done) {
    return;
  }
  if (predicate(value)) {
    yield value;
  }
  yield* filterTail(gen, predicate);
}

/**
 * concatTwo(gen1, gen2) ⇒ function
 *
 * @param {gen1} function - any generator function
 * @param {gen2} function* - any generator function
 * @returns {function} - contatenated generators
 *
 *  */
function* concatTwo(gen1, gen2) {
  let result;
  while (true) {
    result = gen1.next();
    if (result.done) break;

    yield result.value;
  }

  while (true) {
    result = gen2.next();
    if (result.done) break;

    yield result.value;
  }
}

/**
 * concat(...gens) ⇒ function
 *
 * @param {...gens} function - any number of generator functions
 * @returns {function} - contatenated generators
 *
 *  */
function* concat(...gens) {
  const concatenated = gens.flatMap(gen => [...gen]);
  yield* concatenated;
//   for (const gen of gens) {
//     let result;
//     while (true) {
//       result = gen.next();
//       if (result.done) break;
//       yield result.value;
//     }
//   }
}

/**
 * concatTail(...gens) ⇒ function
 *
 * @param {...gens} function - any list of generator functions
 * @returns {function} - same as concat() but with tail-recursion to perform the filtering
 *
 *  */
function* concatTail(...gens) {
  if (gens.length === 0) {
    return;
  }

  const [firstGen, ...remainingGens] = gens;
  yield* firstGen;
  yield* concatTail(...remainingGens);
}

/**
 * gensymf(symbol) ⇒ function
 *
 * @param {symbol} let - any character
 * @returns {function} - a function that returns unique symbols
 *
 *  */
function* gensymf(symbol) {
  const usedValues = [];
  while (true) {
    let cntr = 1;
    while (usedValues.includes(symbol + cntr)) {
      cntr += 1;
    }
    usedValues[cntr - 1] = symbol + cntr;
    yield symbol + cntr;
  }
}

/**
 * gensymff(unary, seed) ⇒ function
 *
 * @param {unary} function - any generator function
 * @param {seed} - the seed
 * @returns {function} - a function that returns unique symbols
 *
 *  */
function gensymff(unary, seed) {
  return function* gensymfInner(symbol) {
    let cntr = seed;
    while (true) {
      const result = unary(cntr);
      cntr += 1;
      yield symbol + result;
    }
  };
}

/**
 * fibonaccif(first, second) ⇒ function
 *
 * @param {first} int - start val
 * @param {second} int - next fibonacci element
 * @returns {function} - the next fibonacci element
 *
 *  */
function* fibonaccif(first, second) {
  let n1 = first;
  let n2 = second;
  let nextTerm = 0;
  while (true) {
    yield n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

/**
 * counter(i) ⇒ object
 *
 * @param {i} int - the start pos
 * @returns {up} - function counts +1
 * @returns {down} - functions counts -1
 */
function counter(i) {
  let cntr = i;
  return {
    up() {
      cntr += 1;
      return cntr;
    },
    down() {
      cntr -= 1;
      return cntr;
    },
  };
}

/**
 * revocableb(binary) ⇒ object
 *
 * @param {binary} function - any binary function
 * @returns {invoke} - function invokes binary
 * @returns {revoke} - function disables binary
 */
function revocableb(binary) {
  let isAllowed = true;
  return {
    invoke(arg1, arg2) {
      return isAllowed ? binary(arg1, arg2) : undefined;
    },
    revoke() {
      isAllowed = false;
    },
  };
}

/**
 * revocable(func) ⇒ object
 *
 * @param {func} function - any function
 * @returns {invoke} - function invokes generic func
 * @returns {revoke} - function disables function
 */
function revocable(func) {
  let isAllowed = true;
  return {
    invoke(...args) {
      return isAllowed ? func(...args) : undefined;
    },
    revoke() {
      isAllowed = false;
    },
  };
}

/**
 * extract(array, prop) ⇒ array
 *
 * @param {array} array - any array
 * @param {prop} let - any peroperty name
 * @returns {array} - an array with the extracted prop values
 *
 */
function extract(array, prop) {
  const property = prop;
  const extractedValues = [];
  array.forEach((obj) => {
    if (obj[property] !== undefined) extractedValues.push(obj[property]);
  });
  return extractedValues;
}

/**
 * m(value, source) ⇒ object
 *
 * @param {value} function - any function
 * @param {source} let - optional: the source parameter
 * @returns {obj} - an object
 */
function m(value, source) {
  return {
    value,
    source: (source === undefined) ? value.toString() : source,
  };
}

/**
 * addmTwo(m1, m2) ⇒ object
 *
 * @param {m1} function - any m function
 * @param {m2} function - any other m function
 * @returns {obj} - an object
 *
 * */
function addmTwo(m1, m2) {
  const m1Source = (m1.source === undefined) ? m1.value.toString() : m1.source;
  const m2Source = (m2.source === undefined) ? m2.value.toString() : m2.source;
  return {
    value: m1.value + m2.value,
    source: `(${m1Source}+${m2Source})`,
  };
}

/**
 * addm(...ms) ⇒ object
 *
 * @param {m1} obj - any m function
 * @param {m2} obj - any other m function
 * @returns {obj} - an object
 *
 * */
function addm(...ms) {
  const value = ms.reduce((sum, current) => sum + current.value, 0);
  const source = ms.map(current => (current.source === undefined ? current.value : current.source)).join('+');
  return {
    value,
    source: `(${source})`,
  };
}

/**
 * liftmbM(binary, op) ⇒ object
 *
 * @param {binary} function - any function
 * @param {m2} function - any other m function
 * @returns {obj} - an object
 *
 * */
function liftmbM(binary, op) {
  return function innerCall(m1, m2) {
    return {
      value: binary(m1.value, m2.value),
      source: `(${m1.source === undefined ? m1.value : m1.source}${op}${m2.source === undefined ? m2.value : m2.source})`,
    };
  };
}

/**
 * liftmb(binary, op) ⇒ object
 *
 * @param {binary} function - any binary function
 * @param {op} let - the concatenator
 * @returns {obj} - an object with the func applied
 *
 * */
function liftmb(binary, op) {
  return function innerCall(arg1, arg2) {
    return {
      value: binary(arg1, arg2),
      source: `(${arg1.toString()}${op}${arg2.toString()})`,
    };
  };
}

/**
 * liftm(func, op) ⇒ object
 *
 * @param {func} function - any function
 * @param {op} let - the concatenator
 * @returns {obj} - an object with the func applied
 *
 * */
function liftm(func, op) {
  return function innerCall(...args) {
    const initialValue = (func === addb) ? 0 : 1;
    const processedArgs = args.map(arg => (typeof arg === 'object' ? arg.value : arg));
    const value = processedArgs.reduce((arg1, arg2) => func(arg1, arg2), initialValue);
    const source = args.map(arg => (typeof arg === 'object' ? arg.source || arg.value : arg)).join(op);

    return {
      value,
      source: `(${source})`,
    };
  };
}

/**
 * exp(value) ⇒ any
 *
 * @param {value} array - an array of any
 * @returns the result of the operation
 */
function exp(value) {
  if (typeof value[0] === 'function') {
    const result = value.slice(1).reduce((arg1, arg2) => arg1 * arg2, 1);
    return result;
  }
  return value;
}

/**
 * expn(value) ⇒ any
 *
 * @param {value} array - a nested array of any
 * @returns the result of the operation
 */
function expn(value) {
  if (typeof value === 'number') {
    // If the element is a number, return it as is
    return value;
  } else if (Array.isArray(value)) {
    // If the element is an array, recursively evaluate its contents
    const operator = value[0];
    const operands = value.slice(1).map(expn);

    if (typeof operator === 'function') {
      // If the first element is a function, apply it to the evaluated operands
      return operator(...operands);
    }
    // If the first element is not a function, handle it accordingly
    // console.error('Invalid expression - the first element is not a function.');
    return undefined;
  }
  // If the element is neither a number nor an array, handle it accordingly
  // console.error('Invalid expression - unexpected element type.');
  return undefined;
}

/**
 * addg(value) ⇒ number | undefined
 *
 * @param {value} let - an array of any
 * @returns the result of the operation
 */
function addg(value) {
  let tmpSum = value || 0;
  if (value === undefined) return undefined;

  return function adder(arg) {
    if (arg === undefined) return tmpSum;
    tmpSum += arg;
    return adder;
  };
}

/**
 * liftg(binary) ⇒ function
 *
 * @param {binary} function - a binary function
 * @returns a function that takes one addtl value and executes the
 *          binary on the result and the value
 */
function liftg(binary) {
  let tmpRes = 0;
  let iterations = 0;
  if (binary === undefined) return undefined;

  return function executor(arg) {
    if (arg === undefined && iterations === 0) return undefined;
    if (arg === undefined) return tmpRes;
    tmpRes = (iterations === 0) ? arg : binary(tmpRes, arg);
    iterations += 1;
    return executor;
  };
}

/**
 * arrayg(value) ⇒ array
 *
 * @param {value} number - any number
 * @returns an array holding all args from earlier invocations
 */
function arrayg(value) {
  const tmpRes = value === undefined ? [] : [value];
  if (value === undefined) return tmpRes;
  return function executor(arg) {
    if (arg === undefined) return tmpRes;
    tmpRes.push(arg);
    return executor;
  };
}

/**
 * continuizeu(unary) ⇒ function
 *
 * @param {unary} function - any unary function
 * @returns a function that takes a callback and an argument
 */
function continuizeu(unary) {
  return function executor(callback, arg) {
    callback(unary(arg));
  };
}

/**
 * continuize(func) ⇒ function
 *
 * @param {func} function - any unary function
 * @returns a function that takes a callback and arguments
 */
function continuize(func) {
  return function executor(callback, ...args) {
    callback(func(...args));
  };
}

/**
 * vector() ⇒ function
 *
 * @returns a vector object
 */
function vector() {
  return {
    secretArray: [],
    append: function append(arg) {
      this.secretArray.push(arg);
    },
    store: function store(pos, arg) {
      this.secretArray[pos] = arg;
    },
    get: function get(pos) {
      return this.secretArray[pos];
    },
  };
}

/**
 * exploitVector(v) ⇒ function
 *
 * @param {v} object - any vector object
 * @returns the secret array of the vector object
 */
function exploitVector(v) {
  return v.secretArray;
}

/**
 * vectorSafe() ⇒ function
 *
 * @returns a vector object that denies direct variable access
 */
function vectorSafe() {
  class Vector {
    #secretArray = [];

    append(arg) {
      this.#secretArray.push(arg);
    }

    store(pos, arg) {
      this.#secretArray[pos] = arg;
    }

    get(pos) {
      return this.#secretArray[pos];
    }
  }
  return new Vector();
}

/**
 * pubsub()
 *
 * @returns an object with publish/subscribe functionality
 */
function pubsub() {
  class PubSub {
    #callback;

    subscribe(callback) {
      this.#callback = callback;
    }

    publish(text) {
      this.#callback(text);
    }
  }
  return new PubSub();
}

/**
 * mapRecurse(array, callback) ⇒ array
 *
 * @param {array} array - any array of numbers
 * @param {callback} function - the callback function
 * @returns an a transformation for each element of a given array, recursively
 *
 * */
function mapRecurse(array, callback) {
  if (array.length === 0) {
    return [];
  }
  // Recursive case: process the first element and concatenate the result with the rest of the array
  return [callback(array[0])].concat(mapRecurse(array.slice(1), callback));
}

/**
 * filterRecurse(array, predicate) ⇒ array
 *
 * @param {array} array - any array of numbers
 * @param {callback} function - the callback function
 * @returns an a transformation for each element of a given array, recursively
 *
 * */
function filterRecurse(array, predicate) {
  if (array.length === 0) {
    return [];
  }
  const firstElement = array[0];
  // Recursive case: process the first element and concatenate the result with the rest of the array
  const filteredRest = filterRecurse(array.slice(1), predicate);
  // Check if the first element satisfies the predicate
  if (predicate(firstElement)) {
    return [firstElement].concat(filteredRest);
  }
  return filteredRest;
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
