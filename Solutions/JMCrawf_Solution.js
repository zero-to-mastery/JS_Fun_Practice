// Write a function identity that takes an argument and returns that argument
const identity = (x) => x

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b)

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b)

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a, b) => a + b)

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b) => a - b)

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a, b) => a * b)

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => Math.min(...nums)

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => Math.max(...nums)

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.length===1 ? nums[0] : nums.pop() + addRecurse(...nums)

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.length===1 ? nums[0] : nums.pop() * mulRecurse(...nums)

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (first, ...nums) => {
    let [ second, ...rest ] = nums
    if(!rest.length) {
        return first < second ? first : second
    }
    return first < second ? minRecurse(first, ...rest) : minRecurse(second, ...rest)
}

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (first, ...nums) => {
    let [ second, ...rest ] = nums
    if(!rest.length) {
        return first > second ? first : second
    }
    return first > second ? maxRecurse(first, ...rest) : maxRecurse(second, ...rest)
}

// Write a function not that takes a function and returns the negation of its result
const not = func => (...args) => {return !(func(...args))}

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

const acc = (f, initVal) => {
    const inside = (...nums) => {
        return nums.reduce((acc, num) => {
            return f(acc,num);
        }, initVal);
    }
    return inside;
}

// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

const accPartial = (f, start, end) => {
    const inside = (...nums) => {
        let subset =  nums.slice(start,end).reduce((acc, num) => {
            return f(acc,num);
        });
        nums.splice(start, end-start, subset)
        return nums
    }
    return inside;
}

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => {
    const inside = (first, ...nums) => {
        first = func(initial, first);
        const recurse = (first, ...nums) => {
            let [ second, ...rest ] = nums;
            if(!rest.length) {
                return func(first, second);
            }
            return recurse(func(first,second), ...rest);
        }
        return recurse(first,...nums);
    }
    return inside;
}

// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => {
    let arr = []
    for(let i=0; i<num; i++) arr.push(num)
        return arr
}

// Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, arr = []) => {
    if(arr.length === num) return arr
        arr.push(num)
    return fillRecurse(num, arr)
}

// Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...args) => [...new Set(args)]

// Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (args) => {
    return function() { 
        return args 
    }
}

// Write a function addf that adds from two invocations
const addf = (a) => (b) => a+b

// Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (f) => (a) => (b) => f(a,b)

// Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x, y) => {
    function impure(x) {
        y++;
        z = x * y;
    }
    impure(x)
    return [y, z]
}

// Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (binary, a) => {
    return function(b){
    	return binary(a, b);
    }
}

// Write a function curry that is generalized for any amount of arguments
const curry = (func, ...outer) => {
    return function(...inner){
    	return func(...outer, ...inner);
    }
}

// Without writing any new functions, show multiple ways to create the inc function
const inc = (x) => add(x, 1);
const inc2 = (x) => addb(x, 1);

// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = binary => a => binary(a,a);

// Use the function twiceUnary to create the doubl function
const doubl = (x) => twiceUnary(addb)(x)

// Use the function twiceUnary to create the square function
const square = (x) => twiceUnary(mulb)(x)

// Write a function twice that is generalized for any amount of arguments
const twice = x => (...args) => x(...args, ...args)

// Write a function reverseb that reverses the arguments of a binary function
const reverseb = binary => (a, b) => binary(b,a)

// Write a function reverse that is generalized for any amount of arguments
const reverse = func => (...args) => func(...args.reverse())

// Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (unary1, unary2) => x => unary2(unary1(x))


module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry , inc, twiceUnary, doubl, square , twice, reverseb, reverse, composeuTwo}; 

