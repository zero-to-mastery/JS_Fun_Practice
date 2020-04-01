// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
console.log(identity(27));

// addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;
console.log(addb(2, 5));

// subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;
console.log(subb(5, 2));

// mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;
console.log(mulb(3, 4));

// minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => { return a < b ? a : b; }
console.log(minb(5, 2));

// maxb(a, b) ⇒ number
// Write a binary function maxb that takes two numbers and returns the larger one
const minb = (a, b) => { return a > b ? a : b; }
console.log(minb(5, 12));

// add(...nums) ⇒ number
// Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
    return nums.reduce( ( acc, i ) => { 
        return acc + i; 
    }, 0)
};
console.log(add(1,4,3,5,1));

// sub(...nums) ⇒ number
// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
    return nums.reduce( ( acc, i ) => { 
        return acc - i; 
    }, 0)
}
console.log(sub(1,4,3,5,1));

// mul(...nums) ⇒ number
// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
    return nums.reduce( ( acc, i ) => { 
        return acc * i 
    })
}
console.log(mul(1,4,3,5,1));

// min(...nums) ⇒ number
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => {
    return nums.reduce( ( acc, i ) => { 
        return acc < i ? acc : acc = i; 
    }, nums[0])
}
console.log(min(4, 3, -5, 1, 10, -2));

// max(...nums) ⇒ number
// Write a function max that is generalized for any amount of arguments;
const max = (...nums) => {
    return nums.reduce( ( acc, i ) => { 
        return acc > i ? acc : acc = i; 
    }, nums[0])
}
console.log(max(4, 3, -5, 1, 10, -2));

// addRecurse(...nums) ⇒ number
// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (nums) => { return nums.length === 1 ? nums[0] : nums.pop() + addRecurse(nums); };
console.log(addRecurse([1, 2, 3, 4])); // Can't figure out how to do it without passing an Array

// mulRecurse(...nums) ⇒ number
// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (nums) => { return nums.length === 1 ? nums[0] : nums.pop() * mulRecurse(nums); };
console.log(mulRecurse([1, 2, 3, 4])); // Can't figure out how to do it without passing an Array