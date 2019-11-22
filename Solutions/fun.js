// Write a function identity that takes an argument and returns that argument

        // const identity = function identity(x) {
        //     return x
        // }
        //OR
const identity = (x) => x;
console.log(identity('Hello Slavo'));
console.log('---------------------');

// Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => {
    return a + b
}
console.log(addb(3, 4))
console.log('-----------------------')

// Write a binary function subb that takes two numbers and returns their
// difference

const subb = (a, b) => {
    return a - b
}
console.log(subb(3, 4));
console.log('----------------------')

// Write a binary function mulb that takes two numbers and returns their product

const mulb = (a, b) => {
    return a * b
}
console.log(mulb(3, 4))
console.log('-------------------')

// Write a binary function minb that takes two numbers and returns the smaller
// one

const minb = (a, b) => {
    return a < b
        ? a
        : b
}
console.log(minb(3, 4))
console.log('--------------------')

// Write a binary function maxb that takes two numbers and returns the larger
// one

const maxb = (a, b) => {
    return a > b
        ? a
        : b
}
console.log(maxb(3, 4));
console.log('---------------------------')

// Write a function add that is generalized for any amount of arguments

const add = (...nums) => {
    return nums.reduce((a, b) => a + b)
}
console.log("add " + add(1, 2, 4, 5))
console.log('-----------------');

// Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => {
    return nums.reduce((a, b) => a - b)
}

console.log(sub(1, 2, 4))
console.log('-----------------');

// Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => {
    return nums.reduce((a, b) => a * b)
}

console.log(mul(1, 2, 4))
console.log('-----------------');

// Write a function min that is generalized for any amount of arguments

const min = (...nums) => {
    return nums.reduce((a, b) => a < b
        ? a
        : b);
}

console.log(min(7, 2, 1, 35, -1, -9, 44, 67))
console.log('-----------------');

// Write a function max that is generalized for any amount of arguments

const max = (...nums) => {
    return nums.reduce((a, b) => a > b
        ? a
        : b)
}

console.log(max(7, 2, 1, 35, 567, -1, -9, 44, 67))
console.log('-----------------');

// Write a function addRecurse that is the generalized add function but uses
// recursion

function addRecurse(...nums) {
    if (nums.length < 1) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    return nums[0] + addRecurse(...nums.slice(1));
}

console.log(addRecurse(1, 2, 4))
console.log('-----------------');

// Write a function mulRecurse that is the generalized mul function but uses
// recursion

const mulRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0
    }

    if (nums.length == 1) {
        return nums[0]
    }

    return nums[0] * mulRecurse(...nums.slice(1))
}

console.log(mulRecurse(1, 2, 4))
console.log('-----------------');

// Write a function minRecurse that is the generalized min function but uses
// recursion

const minRecurseMy = (...nums) => {
    if (nums.length < 1) {
        return 'Empty Array'
    }

    if (nums.length === 1) {
        return nums[0]
    }

    return nums[0] < minRecurseMy(...nums.slice(1))
        ? nums[0]
        : minRecurseMy(...nums.slice(1))
}

console.log(minRecurseMy(1, 2, 6, 7, -6, 9, 44, 4))
console.log('-----------------');

function minRecurse(...nums) {
    if (nums.length < 1) {
        return Number.MAX_VALUE;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    return minb(nums[0], minRecurse(...nums.slice(1)));
}

console.log(minRecurse(2, 6, 7, -6, 9, 44, 4))
console.log('-----------------');

// Write a function maxRecurse that is the generalized max function but uses
// recursion

const maxRecurse = (...nums) => {
    if (nums.length < 1) {
        return 'Empty Array'
    }

    if (nums.length === 1) {
        return nums[0]
    }

    return maxb(nums[0], maxRecurse(...nums.slice(1)))
}

console.log(maxRecurse(2, 6, 7, -6, 9, 44, 4))
console.log('-----------------');

// Write a function not that takes a function and returns the negation of its
// result

const not = (a) => {
    return function (...args) {
        return !a(...args);
    };
}
const isOdd = x => x % 2 === 1;
const isEven = not(isOdd);

console.log(isEven(3))
console.log('-----------------');

// Write a function acc that takes a function and an initial value and returns a
// function that runs the initial function on each argument, accumulating the
// result

function acc(func, initial) {
    return function (...args) {
        return args.reduce((result, curr, idx) => {
            return func(result, curr, idx)
        }, initial);
    };
}
let add_d = acc(addb, 4)
let mul_b = acc(mulb, 2)
console.log(add_d(1, 2, 3))
console.log(mul_b(2, 3, 3))
console.log('-----------------')

// Write a function accPartial that takes in a function, a start index, and an
// end index, and returns a function that accumulates a subset of its arguments
// by applying the given function to all elements between start and end.

const addSecondToThird = accPartial(add, 1, 3);
addSecondToThird(1, 2, 4, 8) // [ 1, 6, 8 ]

// Write a function addf that adds from two invocations.

const addf = a => b => a + b

console.log(addf(3)(4));
console.log('-----------------');

// Write a function to find sum of all elements of an array;
const arraySum=[5,10,8,7,11,13];
const sum=arraySum.reduce((acc,item)=>acc+item,0);
console.log(sum);

// Use the code to create the square function
const square = (x) => {

// Use the code to create the square function
const square = (x) => {
    console.log(x**2);
}
square();
//OR
const square = (x) => x**2;
    square()

// Use the code to create the cube function
const cube = (y) => {
    console.log(y**3);
}
cube();
//OR
const cube= (y) => y**3;
    cube()





