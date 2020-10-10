/**
 * identity(x) returns the same argument.
 * 
 * @param {*} x
 * 
 * @returns {*}  
 */
const identity = (x) => x;

/**
 * addb(a, b) returns the sum of a and b.
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const addb = (a, b) => a + b;

/**
 * subb(a, b) returns the difference of a and b.
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const subb = (a, b) => a - b;

/**
 * mulb(a, b) returns the product of a and b.
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const mulb = (a, b) => a * b;

/**
 * min(a, b) returns the min of a and b.
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const minb = (a, b) => a > b ? b : a;

/**
 * maxb(a, b) returns the max of a and b.
 * 
 * @param {Number} a 
 * @param {Number} b
 * 
 * @returns {Number} 
 */
const maxb = (a, b) => a > b ? a : b;

/**
 * add(...nums) returns the sum of nums.
 * 
 * @param  {...Number} nums
 * 
 * @returns {Number} 
 */
const add = (...nums) => nums.reduce((total, num) => total + num);

/**
 * sub(...nums) returns the diff of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const sub = (...nums) => nums.reduce((acc, num) => acc - num);

/**
 * mul(...nums) returns the product of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const mul = (...nums) => nums.reduce((acc, num) => acc * num);

/**
 * min(...nums) returns the min of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const min = (...nums) => nums.reduce((min, num) => min < num ? min : num);

/**
 * max(...nums) returns the max of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const max = (...nums) => nums.reduce((max, num) => (max > num ? max : num));

/**
 * addRecurse(...nums) returns the sum of nums.
 * 
 * @param  {...Number} nums
 * 
 * @returns {Number} 
 */
const addRecurse = (...nums) => {
  if(nums.length === 1) {
    return nums[0];
  } else {
    const num = nums.shift();
    return num + addRecurse(...nums); 
  }
}

/**
 * mulRecurse(...nums) returns the product of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const mulRecurse = (...nums) => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const num = nums.shift();
    return num *  mulRecurse(...nums);
  }
};

/**
 * minRecurse(...nums) returns the min. of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const minRecurse = (...nums) => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const num1 = nums.shift();
    num2 = minRecurse(...nums);
    return num1 < num2 ? num1 : num2;
  }
};

/**
 * maxRecurse(...nums) returns the max. of nums.
 * 
 * @param  {...Number} nums 
 * 
 * @returns {Number}
 */
const maxRecurse = (...nums) => {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const num1 = nums.shift();
    num2 = maxRecurse(...nums);
    return num1 > num2 ? num1 : num2;
  }
};

/**
 * fill(num) returns the array
 * 
 * @param {Number} num
 * 
 * @returns {Array} 
 */
const fill = (num) => {
  const arr = [];
  
  for (let i = 0; i < num; i++) {
    arr[i] = num;
  }
  
  return arr;
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
  fill,
};