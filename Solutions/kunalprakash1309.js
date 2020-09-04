// takes an argument and returns that argument
const identity = (x) => x;

identity('Hello, World') ;  // Hello, World


// takes two numbers and returns their sum
const addb = (a, b) => a + b;

addb(3, 5);                 // 8


// takes two numbers and returns their difference
const subb = (a, b) => a - b;

subb(20, 5)                 // 15


// takes two numbers and returns their product
const mulb = (a, b) => a * b;

mulb(4, 3)                  // 12


// takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b;

minb(12, 10)                // 10


// takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b;

maxb(20, 25)                // 25


// add that is genralized for any amount of arguments
const add = (...nums) => nums.reduce((acc, num) => {return acc + num}, 0);

add(1, 2, 3)                // 6


// sub that is generalized for any amount of arguments
const sub = (...nums) => {
    let result = nums[0];
    for (let i = 1; i < nums.length; i++){
        result = result - nums[i];
    }
    return result;
}

sub(100, 50, 25)             // 25


// mul that is genralized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, num) => {return acc * num}, 1)

mul(6, 5, 4, 3, 2, 1)        // 720


// min that is genralized for any amount of arguments
const min = (...nums) => {
    let minimum = nums[0];
    for(let i = 1; i < nums.length; i++){
        minimum = minimum < nums[i] ? minimum : nums[i]; 
    }
    return minimum
}

min(30, 40, 55, 10)          // 10

module.exports = {
    identity,
    addb,
    subbb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
};