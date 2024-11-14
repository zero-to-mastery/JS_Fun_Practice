/**
 * Returns the arguments passed
 * @param {any} x
 * @returns {any}
 */
const identity = (x) => x;

/**
 * Returns the sum of two numbers a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const addb = (a, b) => a + b;

/**
 * Returns the difference of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const subb = (a, b) => a - b;

/**
 * Returns the product of two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const mulb = (a, b) => a * b;

/**
 * Returns the minimum between two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const minb = (a, b) => a < b ? a : b;

/**
 * Returns the maximum between two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const maxb = (a, b) => a > b ? a : b;

/**
 * Returns the sum of the passed arguments
 * @param {...number} ...nums
 * @returns {number} 
 */
const add = (...nums) => nums.reduce((prev, curr) => prev + curr);

/**
 * Returns the difference of the passed arguments
 * @param {...number} ...nums
 * @returns {number}
 */
const sub = (...nums) => nums.reduce((prev, curr) => prev - curr);

/**
 * Returns the product of the passed arguments
 * @param {...number} ...nums
 * @returns {number}
 */
const mul = (...nums) => nums.reduce((prev, curr) => prev * curr);

/**
 * Returns the smallest of the passed arguments
 * @param {...number} ...nums
 * @returns {number}
 */
const min = (...nums) => {
    let minNumber = nums[0];
    nums.filter((num) => num < minNumber ? minNumber = num : minNumber);
    return minNumber
}

/**
 * Returns the largest of the passed arguments
 * @param  {...number} nums
 * @returns {number}
 */
const max = (...nums) => {
    let maxNumber = nums[0];
    nums.filter((num) => num > maxNumber ? maxNumber = num : maxNumber);
    return maxNumber;
}

/**
 * Returns the sum of the passed arguments but uses recursion
 * @param  {...number} nums 
 * @returns {number}
 */
const addRecurse = (...nums) => {
    if (nums.length === 0) {
        return 0;
    }
    return nums.shift() + addRecurse(...nums);
}

/**
 * Returns the product of all arguments but uses recursion
 * @param  {...number} nums 
 * @returns {number}
 */
const mulRecurse = (...nums) => {
    if (nums.length === 0) {
        return 1;
    }
    return nums.shift() * mulRecurse(...nums);
}

/**
 * Returns the minimum of all arguments but uses recursion
 * @param  {...number} nums 
 * @returns {number}
 */
const minRecurse = (...nums) => {
    if (nums.length == 1) {
        return nums[0];
    } else {
        if (nums[0] < minRecurse(...nums.slice(1))) return nums[0];
        return minRecurse(...nums.slice(1));
    }
}

/**
 * Returns the max of the args passed using recursion
 * @param  {...number} nums 
 * @returns {number}
 */
const maxRecurse = (...nums) => {
    if (nums.length == 1) {
        return nums[0]
    } else {
        if (nums[0] > maxRecurse(...nums.slice(1))) return nums[0];
        return maxRecurse(...nums.slice(1));
    }
}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
}