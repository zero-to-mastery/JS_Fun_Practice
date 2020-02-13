
///  Write a function identity that takes an argument and returns that argument

const identity = (x) => x;
console.log(identity("Hello World!"));

// Write a binary function addb that takes two numbers and returns their sum

const addb = (a, b) => a+b;
console.log(addb(2,3));

// Write a binary function subb that takes two numbers and returns their difference

const subb = (a,b) => a-b;
console.log(5,3);

// Write a binary function mulb that takes two numbers and returns their product

const mulb = (a, b) => a*b;
console.log(mulb(5,3));

// Write a binary function minb that takes two numbers and returns the smaller one

const minb = (a,b) => a < b ? a : b;
console.log(minb(5,3));

// Write a binary function maxb that takes two numbers and returns the larger one

const minb = (a,b) => a > b ? a : b;
console.log(minb(5,3));

// Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((a,b) => a+b);
console.log(add(2,3,4));

// Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => nums.reduce((a,b) => a-b);
console.log(sub(2,3,4));

// Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => nums.reduce((a,b) => a*b);
console.log(mul(2,3,4));

// Write a function min that is generalized for any amount of arguments

const min = (...nums) => nums.reduce((a,b) => a < b ? a:b);
console.log(min(2,3,4));

// Write a function max that is generalized for any amount of arguments

const max = (...nums) => nums.reduce((a, b) => a > b ? a:b);
console.log(max(2,35,43));

// Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
	if(nums.length < 1)
		return 0
	return nums[0] + addRecurse(...nums.slice(1))
}
console.log(addRecurse(1,-2,3,4));

// Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
	if(nums.length < 1)
		return 1
	return nums[0] * mulRecurse(...nums.slice(1))
}
console.log(mulRecurse(1,-2,3,4));

// Write a function minRecurse that is the generalized min function but uses recursion

const minRecurse = (...nums) => {
	if(nums.length < 1)
		return 1
	return nums[0] <  minRecurse(...nums.slice(1)) ? nums[0]:minRecurse(...nums.slice(1))
}
console.log(minRecurse(1,33,2,3,-1));

// Write a function maxRecurse that is the generalized max function but uses recursion

const maxRecurse = (...nums) => {
	if(nums.length < 1)
		return 1
	return nums[0] <  maxRecurse(...nums.slice(1)) ? nums[0]:maxRecurse(...nums.slice(1))
}
console.log(maxRecurse(1,33,2,3,-1));

// Write a function not that takes a function and returns the negation of its result

const not = (fun) => {
	return function (...args) {
		return !fun(...args);
	};
}
const isOdd = (a) => a % 2 !== 0;
const isEven = not(isOdd);
console.log(isEven(7));