// Write a function identity that takes an argument and returns that argument
identity = (a) => a;
console.log(identity(`Works??`));
console.log(identity(`Works!!!`));

// Write a binary function addb that takes two numbers and returns their sum
addb = (a,b) => a + b;
addb(5, 7);

// Write a binary function subb that takes two numbers and returns their difference
subb = (a,b) => a - b;
subb(99991, 16161);

// Write a binary function mulb that takes two numbers and returns their product
function mulb() {
    return arguments;
}
mulb(`Works!`);
// ----------------------OR--------------------------
mulb2 = (a,b) => a * b;
mulb2(7,5);

// Write a binary function minb that takes two numbers and returns the smaller one
minb = (a, b) => Math.min(a, b);
minb(61616, 91);

// Write a binary function maxb that takes two numbers and returns the larger one
maxb = (a,b) => Math.max(a,b);
maxb(161, 91198489);

// Write a function add that is generalized for any amount of arguments
// Arguments Object (ES5)
function add() {
    console.log(arguments);
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(51, 61, 35, 91));
// To use math methods we need to convert arguments object into array
// using the Array.from
//--------------------OR---------------------
// Rest Parameters (ES6)
function add(...args) {
    return args.reduce(function (acc, cur) {
        return acc + cur;
    })
}
console.log(add(51,61,35,91));
// OR
let add2 = (...nums) => {
    return nums.reduce((a,b) => a + b)};
console.log(add2(51, 61, 35, 91));

// Write a function sub that is generalized for any amount of arguments
function sub(...args) {
    return args.reduce((a,b) => a - b)};
console.log(sub(1000-100-300-555));

// Write a function mul that is generalized for any amount of arguments
function mul() {
    return arguments;
}
mul(`ha`, 561, `done`);


// Write a binary function min that takes n arguments and returns the smaller one
function min(...args) {
    return args.sort((a, b) => a - b).shift();
    } 
min(61,31,61,9,158);

// Write a binary function max that n arguments and returns the larger one
function max(...args) {
    return args.sort((a, b) => a - b).pop();
}
max(61, 31, 61, 9, 158, 63);

// Write a function addRecurse that is the generalized add function but uses recursion
// taaaaks recursion
function addRecurse(a, b) {
    if (b == 1) {
        return a;
    } else {
        return a + addRecurse(a, b - 1)
    }
}
addRecurse(2, 3)
// ---------OR------------
function addRecurse2(a, b) {
    return (b == 1 ? a : a + addRecurse2(a, b - 1));
}
addRecurse2(2, 3)

// Write a function mulRecurse that is the generalized mul function but uses recursion
function mulRecurse () {
    if (arguments.length === 0) {
        console.log(`WOW`)
    } else {
        return arguments
    }
}
mulRecurse()
mulRecurse(15,31,`Works!`)

// Write a function minRecurse that is the generalized min function but uses recursion
function minRecurse(...args) {
    if (arguments.length === 1) {
        console.log(`Not enough arguments`);
    } else { return args.sort((a, b) => a - b).shift() }
}
minRecurse(51, 52, 1, 581, 56, 0);
// Write a function maxRecurse that is the generalized max function but uses recursion
function maxRecurse(...args) {
    if (arguments.length === 1) {
        console.log(`Not enough arguments`);
    } else { return args.sort((a, b) => a - b).pop() }
}
maxRecurse(51, 52, 1, 581, 56, 0);

// Write a function not that takes a function and returns the negation of its result
let check = function check_one(num) {
    return !(num % 2 == 1);
} 
check(5);


// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
let addb = (...nums) => {
    return nums.reduce((a, b) => a + b)
};
let acc = function sum() {
    return addb + acc[1];
}
let add = acc(addb, 0);
add(1, 2, 4) // ;


// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
fill = num => {
    let array = [];
    for (i = 0; i < num; i++) {
        array.push(num)
    }
    console.log(array)
}
fill(4)
// Write a function fillRecurse that does what fill does but uses recursion
fillRecurse = (num, array = []) => {
    if (array.length === num) {
        return array
    } else {
        array.push(num)
        return fillRecurse(num, array)
    }
}
fillRecurse(3)

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
function set(...args) {
    array = [...args]
    newArray = new Set(array);
    console.log(newArray)
}
set(1, 1, 1, 2, 2, 2, 5, 85, 2, 1)


// Write a function identityf that takes an argument and returns a function that returns that argument
let identityf = x => x
let three = identityf()
three()

// Write a function addf that adds from two invocations -  Currying
addf = (x) => (y) => x + y
addf(3)(4) // 7


// Write a function liftf that takes a binary function, and makes it callable with two invocations
liftf = mulb = (x) => (y) => x + y
liftf(mulb)(5)(6) // 30

// Write a pure function pure that is a wrapper arround the impure function impure
function pure(impure) {
    return (args...)
}
function impure(x) {
    y++;
    z = x * y;
}

var y = 5, z;

impure(20);
z; // 120

impure(25);
z; // 175

    module.exports = {
    identity,
    addb,
    subb,
    mulb,
    mulb2,
    minb,
    maxb,
    add,
    add2,
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
//     pure,
//     curryb,
//     curry,
//     inc,
//     twiceUnary,
//     doubl,
//     square,
//     twice,
//     reverseb,
//     reverse,
//     composeuTwo,
//     composeu,
//     composeb,
//     composeTwo,
//     compose,
//     limitb,
//     limit,
//     genFrom,
//     genTo,
//     genFromTo,
//     elementGen,
//     element,
//     collect,
//     filter,
//     filterTail,
//     concatTwo,
//     concat,
//     concatTail,
//     gensymf,
//     gensymff,
//     fibonaccif,
//     counter,
//     revocableb,
//     revocable,
//     extract,
//     m,
//     addmTwo,
//     addm,
//     liftmbM,
//     liftmb,
//     liftm,
//     exp,
//     expn,
//     addg,
//     liftg,
//     arrayg,
//     continuizeu,
//     continuize,
//     vector,
//     exploitVector,
//     vectorSafe,
//     pubsub,
//     mapRecurse,
//     filterRecurse,
};

function getBack() {
    return arguments;
}
console.log(getBack(`Works`));
// -------------------------------------
const not = (fn) => {
  return (...args) => !fn(...args);
}
const isOdd = x => x % 2 === 1;
const isEven = not(isOdd);
console.log(`isEven(1): ${isEven(1)}`);
console.log(`isEven(2): ${isEven(2)}`);
// -------------------------------------
const not = function verciam(fn) {
    return function keiciam(...args) {
        !fn(...args);
    }
}
//kazkoks bybis blet...undefinied...
const isOdd = x => x % 2 === 1;
const isEven = not(isOdd);
console.log(`isEven(1): ${isEven(1)}`);
console.log(`isEven(2): ${isEven(2)}`);