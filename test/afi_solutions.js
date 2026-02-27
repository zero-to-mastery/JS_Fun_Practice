//Write a function identity that takes an argument and returns that argument
const identity = x => x;
//Write a binary function addb that takes two numbers and returns their sum
const addb = (a,b) => a + b;
//Write a binary function subb that takes two numbers and returns their difference
const subb = (a,b) => a - b;
//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a,b) => a * b;
//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => Math.min(a,b);
//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => Math.max(a,b);
//Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, num) => acc + num);
//Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, num) =>	acc - num);
//Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, num) =>	acc * num);
//Write a function min that is generalized for any amount of arguments
const min = (...nums) => Math.min(...nums);
//Write a function max that is generalized for any amount of arguments
const max = (...nums) => Math.max(...nums);
//Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
	if (nums.length === 1) {
    	return nums[0];
 	}
 	const lastNum = nums.pop();
	return lastNum + addRecurse(...nums);
};
//Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
	if (nums.length === 1) {
    	return nums[0];
 	}
 	const lastNum = nums.pop();
	return lastNum * mulRecurse(...nums);
};
//Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
	if (nums.length === 1) {
    	return nums[0];
 	}
 	const lastNum = nums.pop();
	return Math.min(lastNum, minRecurse(...nums));
};
//Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
	if (nums.length === 1) {
    	return nums[0];
 	}
 	const lastNum = nums.pop();
	return Math.max(lastNum, maxRecurse(...nums));
};
//Write a function not that takes a function and returns the negation of its result
const not = (func) => {
  return (...nums) => {
    const result = func(...nums);
      if (typeof result === 'boolean') {
        return !result;
      }
    if (result.length === 0) {
      return nums;
    } 
    return nums.filter(x => !result.includes(x));
  }
};
//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => (...nums) => {
    let result = initial;
    for (let num of nums) {
      result = func(result, num);
    }
    return result;
  };
//Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.
const accPartial = (func, start, end) => (...nums) => {
  let arrStart = nums.slice(0,start)
  let arrEnd = nums.slice(end)
  let subSet = func(...nums.slice(start,end))
 
  return [...arrStart, subSet, ...arrEnd];
  };
//Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(num);
  }
  return array;
};
//Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, counter = 0) => {
  if (counter === num) {
    return [];
  }
    const array = fillRecurse(num, counter + 1);
    array.push(num);
    return array;
  };
//Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => args.filter((self, index, num) => num.indexOf(self) === index);
//Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = x => x;
//Write a function addf that adds from two invocations
const addf = a => b => a + b;
//Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (binary) => a => b => binary(a, b);
//Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (binary, a) => b => binary(a, b);
//Write a function curry that is generalized for any amount of arguments:
const curry = (func, ...outer) => (...inner) => func(...outer, ...inner);
//Without writing any new functions, show multiple ways to create the inc function
const inc = x => x + 1;
const inc2 = x => identity(x);
const inc3 = x => fill(x);
const inc4 = curry(addb, 2);
//Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = (binary) => x => binary(x, x);
//Use the function twiceUnary to create the doubl function
const doubl = twiceUnary(addb);
//Use the function twiceUnary to create the square function
const square = twiceUnary(mulb);
//Write a function twice that is generalized for any amount of arguments
const twice = (func) => (...nums) => func(...nums) * 2;
//Write a function reverseb that reverses the arguments of a binary function
const reverseb = (binary) => (a, b) => binary(b, a);
//Write a function reverse that is generalized for any amount of arguments
const reverse = (func) => (...nums) => func(...nums.reverse());
//Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (unary1, unary2) => (num) => unary2(unary1(num));
//Write a function composeu that is generalized for any amount of arguments
const composeu = (...funcs) => (num) => funcs.reduce((acc, func) => func(acc), num)
//Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (binary1, binary2) => (a, b, c) => binary2(binary1(a, b), c);
//Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (func1, func2) => (...nums) => func2(func1(...nums));
//Write a function element that is a modified elementGen function so that the generator argument is optional. If a generator is not provided, then each of the elements of the array will be produced.
function* element(array, gen) {
    if (gen !== undefined) {
      yield* gen(array)
    } else {
      for (let i=0; i < array.length; i++) {
        yield array[i]
      }
  }
  }
//Write a function collect that takes a generator and an array and produces a function that will collect the results in the array
function* collect(gen, array = []) {
    for (let item of gen) {
       array.push(item)
       yield item
  }
}
//Write a function filter that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate
function* filter(gen, predicate) {
  for (const num of gen)
    if (predicate(num)) {
      yield num
    }
}
//Write a function concatTwo that takes two generators and produces a generator that combines the sequences
function* concatTwo(gen1, gen2) {
  for (const result1 of gen1) {
    yield result1;
  }
  for (const result2 of gen2) {
    yield result2
  }
}
//Write a function concat that is generalized for any amount of arguments
function* concat(...gens) {
  for (i=0; i < gens.length; i++) {
    for (const result of gens[i])
    yield result
  }
}
//Write a function gensymf that makes a function that generates unique symbols
function* gensymf(symbol) {
    let num = 1
    while (true) {
      yield symbol + num;
      num++
    }
}
//Write a function fibonaccif that returns a generator that will return the next fibonacci number
function* fibonaccif(first,second) {
    [ prev, curr ] = [ first, second ]
    yield prev
    yield curr

    while (true) {
      curr += prev
      prev = curr - prev;
      yield curr
    }
  }
//Write a function extract that takes an array of objects and an object property name and converts each object in the array by extracting that property
const extract = (array, prop) => {
  return array.map((item) => item[prop])
}
//Write a function m that takes a value and an optional source string and returns them in an object
const m = (value, source = value.toString()) => {
  return {
    value: value,
    source: source
  }
}
//Write a function liftmbM that takes a binary function and a string and returns a function that acts on m objects
const liftmbM = (binary,op) => {
  return (m1,m2) => {
  let newValue = binary(m1.value, m2.value)
  let newSource = `(${m1.source}${op}${m2.source})`;
    
    return m(newValue, newSource);
  }
}
//Write a function liftmb that is a modified function liftmbM that can accept arguments that are either numbers or m objects
const liftmb = (binary, op) => {
  return (m1,m2) => {
    let newValue = 0;
    let newSource;
    if (typeof m1 === 'number') {
      newValue = binary(m1, m2);
      newSource = `(${m1}${op}${m2})`;
    } else {
      newValue = binary(m1.value, m2.value)
      newSource = `(${m1.source}${op}${m2.source})`;
    }
    return m(newValue, newSource);
  }
}
//Write a function liftm that is generalized for any amount of arguments
const liftm = (func, op) => {
  return (...ms) => {
    let arrayValue = [];
    let newValue = 0;
    let newSource = '';
  for (let i = 0; i < ms.length; i++) {
    arrayValue.push(ms[i].value)
    newSource += `${ms[i].source}${i === ms.length - 1 ? '' : op}`;
  }
  newValue = func(...arrayValue)
  return m(newValue, `(${newSource})`);
}
};
//Write a function continuizeu that takes a unary function and returns a function that takes a callback and an argument
const continuizeu = (unary) => {
  return function(callback, arg) {
    return callback(unary(arg));
  };
};
//Write a function continuize that takes a function and returns a function that takes a callback and arguments
const continuize = (func) => {
  return function(callback, ...arg) {
    return callback(func(...arg));
  };
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
    // accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    // pure,
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
    // compose,
    limitb,
    limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    element,
    collect,
    filter,
    // filterTail,
    concatTwo,
    concat,
    // concatTail,
    gensymf,
    // gensymff,
    fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    extract,
    m,
    // addmTwo,
    // addm,
    liftmbM,
    liftmb,
    liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    continuizeu,
    continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};

//solution by: @aisafaith (https://github.com/aisafaith/)
