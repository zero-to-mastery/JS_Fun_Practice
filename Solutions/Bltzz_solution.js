/* 
 * @author Bltzz
 *
*/

function _check(x, y) {
    if (typeof x !== 'number')
        throw new TypeError(`${x} is not a number`);
    if (typeof y !== 'number')
        throw new TypeError(`${y} is not a number`);
}

function _checkSingle(x) {
    if (typeof x !== 'number')
        throw new TypeError(`${x} is not a number`);
}

function _checkArray(...nums) {
    if (nums.length === 0) {
        throw new Error('No arguments provided.');
    }
    nums.forEach(x => _checkSingle(x))
}

function _checkFunction(func){
    if (typeof func !== 'function') 
        throw new TypeError('Input must be a function');
    
}

/**
 * identity(x) ⇒ any
 * @param {*} x - Any value
 * @returns {*} - The same value
 */
function identity(x) {
    return x
}

/**
 * addb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x plus y
 */
function addb(a, b) {
    _check(a, b)
    return a + b
}

/**
 * subb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x minus y
 */
function subb(a, b) {
    _check(a, b)
    return a - b
}

/**
 * mulb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x times y
 */
function mulb(a, b) {
    _check(a, b)
    return a * b
}

/**
 * minb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - The smaller value
 */
function minb(a, b) {
    _check(a, b)
    return a < b ? a : b
}

/**
 * maxb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - The bigger value
 */
function maxb(a, b) {
    _check(a, b)
    return a > b ? a : b
}

/**
 * add(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The sum of all the numeric values
 */
function add(...nums) {
    _checkArray(...nums)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) sum += nums[i]
    // Alternative:
    // Use build-in reduce function
    // return nums.reduce((sum, num) => sum + num, 0);
    return sum
}

/**
 * sub(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The result of subtracting all the numeric values - taking first element as starting point
 */
function sub(...nums) {
    _checkArray(...nums)
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) result -= nums[i];
    // Alternative:
    // Use built-in reduce function
    // return nums.reduce((result, num) => result - num);
    return result;
}

/**
 * mul(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The result of mulitplying all the numeric values
 */
function mul(...nums) {
    _checkArray(...nums)
    let result = 1;
    for (let i = 0; i < nums.length; i++) result *= nums[i];
    // Alternative:
    // Use built-in reduce function
    // return nums.reduce((result, num) => result * num);
    return result;
}

/**
 * min(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The smallest of the numeric values
 */
function min(...nums) {
    _checkArray(...nums)
    let result = nums[0];
    for (let i = 0; i < nums.length; i++) (result > nums[i + 1]) ? result = nums[i + 1] : result
    // Alternative:
    // Use built-in Math.min function
    //return Math.min(...nums);
    return result;
}

/**
 * max(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The biggest of the numeric values
 */
function max(...nums) {
    _checkArray(...nums)
    let result = nums[0];
    for (let i = 0; i < nums.length; i++) (result < nums[i + 1]) ? result = nums[i + 1] : result
    // Alternative:
    // Use built-in Math.max function
    //return Math.max(...nums);
    return result;
}

/**
 * addRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The sum of the numeric values
 */
function addRecurse(...nums) {
    nums.forEach(x => _checkSingle(x))
    if (nums.length === 0)
        return 0;
    return nums[0] + addRecurse(...nums.slice(1));
}

/**
 * mulRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The product of the numeric values
 */
function mulRecurse(...nums) {
    nums.forEach(x => _checkSingle(x))
    if (nums.length === 0)
        return 1;
    return nums[0] * mulRecurse(...nums.slice(1));
}

/**
 * minRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The smallest of the numeric values
 */
function minRecurse(...nums) {
    nums.forEach(x => _checkSingle(x))
    // Base case: return -Infinity if no arguments are provided
    if (nums.length === 0) return Infinity;
    // Base case: return the single value if only one argument is provided
    if (nums.length === 1) return nums[0];
    return nums[0] < minRecurse(...nums.slice(1)) ? nums[0] : minRecurse(...nums.slice(1));
}

/**
 * maxRecurse(...nums) ⇒ number
 * @param {...number} nums - Any number of numeric values
 * @returns {number} - The biggest of the numeric values
 */
function maxRecurse(...nums) {
    nums.forEach(x => _checkSingle(x))
    // Base case: return -Infinity if no arguments are provided
    if (nums.length === 0) return -Infinity;
    // Base case: return the single value if only one argument is provided
    if (nums.length === 1) return nums[0];
    // Recursive case: compare the first number with the maximum of the rest
    return nums[0] > maxRecurse(...nums.slice(1)) ? nums[0] : maxRecurse(...nums.slice(1));
}

/**
 * not(func) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - The inverse res of the function
 */
function not(func){
    _checkFunction(func)
    return function (...args) {
        return !func(...args);
    };
}

/**
 * acc(func, initial) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - returns a number that runs the initial function on each argument, accumulating the result
 */
function acc(func, initial){
    _checkFunction(func)
    _checkSingle(initial)
    return function (...args) {
        let x = initial;
        for (let i of args) {
            x = func(x, i);
        }
        return x;
    };
}

/**
 * accPartial(func, start, end) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - returns a function that accumulates a subset of its arguments by applying the given function to
        all elements between start and end incl. the stuff before start and after end
 */
function accPartial(func, start, end){
    _checkFunction(func)
    _checkArray(start, end)
    return function (...args) {
        const subset = args.slice(start, end);
       // return args.slice(0, start) + func(...subset) + args.slice(end, args.length);
       return [...args.slice(0, start), func(...subset), ...args.slice(end)];
    };
}

/**
 * accRecurse(func, initial) ⇒ function
 * @param {func} function - Any function
 * @returns {func} - Same as acc, but recursively
 */
function accRecurse(func, initial){
    _checkFunction(func)
    _checkArray(initial)
    return function (...args) {
        if (args.length === 0) {
            return initial;
        }
        const first = args[0];
        const rest = args.slice(1);
        // same as
        // const [first, ...rest] = args;
        const result = func(initial, first);

        return acc(func, result)(...rest);
    };    
}

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
    accRecurse
}
