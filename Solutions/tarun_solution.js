// Write a function identity that takes an argument and returns that argument
const identity = (x) => x; 
 
//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b; 

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b;

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b;

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a, b)=>a+b) 

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b)=>a-b) 

//Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a, b)=>a*b , 1) 

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a, b)=> Math.min(a, b)) 

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a, b)=> Math.max(a, b)) 

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() + addRecurse(...nums);
}

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    return nums.pop() * mulRecurse(...nums);
}

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    let secondNum = minRecurse(...nums.slice(1))
    if (nums[0] < secondNum) return nums[0]
    return secondNum
}

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
    if (nums.length === 1) return nums[0]
    let secondNum = maxRecurse(...nums.slice(1))
    if (nums[0] > secondNum) return nums[0]
    return secondNum
}

// Write a function not that takes a function and returns the negation of its result
const not = func => (...args) => 
!Boolean(func(...args))

//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => (...args) => {
    let final = initial;
    for (let i of args) {
        final = func(final, i);
    }
    return final;
}
// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.
const accPartial = (func, start, end) => (...args) => {
    const array = args.slice(start, end);
    let final = array[0];
    for (let i of array.slice(1)) {
        final = func(final, i);
    }
    args.splice(start, end - start);
    args.splice(start, 0, final)
    return args
}

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => (...args) => {
    if (args.length === 1) {
        return func(args[0], initial);
    }
    return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
}

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse };
