/**
 * indentity(x) return the same parameter as was past in
 * 
 * @param {any} x
 * 
 * @returns {any} 
 */
const identity = x => x;

/**
 * addb(a, b) returns the sum of a and b
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const addb = (a, b) => a + b;

/**
 * subb(a, b) returns the difference between a and b
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const subb = (a, b) => a - b;

/**
 * mulb(a, b) returns the product of a and b
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const mulb = (a, b) => a * b;

/**
 * minb(a, b) returns the minimum of a and b
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const minb = (a, b) => a < b ? a : b;

/**
 * maxb(a, b) returns the maximum of a and b
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const maxb = (a, b) => a > b ? a : b;

/**
 * add(...nums) returns the sum of all numbers in nums
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const add = (...nums) => nums.reduce((prev, cur) => prev + cur, 0);

/**
 * mul(...nums) returns the product of all numbers in nums
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const mul = (...nums) => nums.reduce((prev, cur) => prev * cur, 1);

