// Write a function identity that takes an argument and returns that argument
const identity = x => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => a > b ? b : a;

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b;

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, number) => acc + number);

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, num) => acc - num);

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, num) => acc * num);

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => Math.min(...nums);

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => Math.max(...nums);

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.length < 1 ? 0 : nums[0] + addRecurse(...nums.slice(1));

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.length < 1 ? 1 : nums[0] * mulRecurse(...nums.slice(1));

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => nums.length === 1 ? nums[0] : nums[0] < minRecurse(...nums.slice(1)) ? nums[0] : minRecurse(...nums.slice(1));

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => nums.length === 1 ? nums[0] : nums[0] > maxRecurse(...nums.slice(1)) ? nums[0] : maxRecurse(...nums.slice(1));


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
	maxRecurse 
}




