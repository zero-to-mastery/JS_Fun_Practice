/**
 * Returns the same variable
 * @param {any} arg 
 * @returns {any} the same variable itself
 */
const identity = (arg) => arg;

/**
 * get sum of two variables
 * @param {number} a a number
 * @param {number} b another number
 * @returns {number} sum of a and b
 */
const addb = (a, b) => a + b;

/**
* get difference of two variables
* @param {number} a a number
* @param {number} b another number
* @returns {number} difference of a and b
*/
const subb = (a, b) => a - b;

/**
* get product of two variables
* @param {number} a a number
* @param {number} b another number
* @returns {number} product of a and b
*/
const mulb = (a, b) => a * b;

/**
* get min of two variables
* @param {number} a a number
* @param {number} b another number
* @returns {number} min of a and b
*/
const minb = (a, b) => a > b ? b : a;

/**
* get max of two variables
* @param {number} a a number
* @param {number} b another number
* @returns {number} max of a and b
*/
const maxb = (a, b) => a < b ? b : a;

/**
 * get sum of many variables
 * @param {...number[]} args any number of number parameters
 * @returns {number} sum of all variables
 */
const add = (...args) => args.reduce((p, c) => p + c);

/**
* get difference of many variables
* @param {...number[]} args any number of number parameters
* @returns {number} difference of all variables
*/
const sub = (...args) => args.reduce((p, c) => p - c);

/**
* get difference of many variables
* @param {...number[]} args any number of number parameters
* @returns {number} product of all variables
*/
const mul = (...args) => args.reduce((p, c) => p * c);

/**
* get minimum of all the variables
* @param {...number[]} args any number of number parameters
* @returns {number} smallest number from all the variables
*/
const min = (...args) => args.sort(a - b)[0];

/**
* get maximum of all the variables
* @param {...number[]} args any number of number parameters
* @returns {number} largest number from all the variables
*/
const max = (...args) => args.sort(b - a)[0];

/**
* Addition of any number of variables, via recursion
* @param {...number[]} args any number of number parameters
* @returns {number} difference of all the variables
*/
const addRecurse = (...args) => args[0] + parseInt(args.length > 1 ? addRecurse(...args.slice(1)) : 0);

/**
* Product of any number of variables, via recursion
* @param {...number[]} args any number of number parameters
* @returns {number} product of all the variables
*/
const mulRecurse = (...args) => args[0] * (args.length > 1 ? mulRecurse(...args.slice(1)) : 1);

module.exports = {
    add,
    addRecurse,
    addb,
    identity,
    max,
    maxb,
    minb,
    mul,
    mulRecurse,
    mulb,
    sub,
    subb,
    min
}