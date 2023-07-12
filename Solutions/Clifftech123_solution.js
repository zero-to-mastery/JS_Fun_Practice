// Thi is  a solution to the  javascript function practice

// 1 . Write a function identity that takes an argument and returns that argument
const identity = (arg) => arg;

// 2. Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// 3. Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// 4. Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// 5. Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

// 6. Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

// 7. Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((acc, val) => acc + val, 0);

// 8. Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((acc, val) => acc - val, 0);

// 9. Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, val) => acc * val, 1);

// 10. Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((acc, val) => Math.min(acc, val));

// 11. Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((acc, val) => Math.max(acc, val));

// 12. Write a function addRecurse that is the generalized add function but uses recursion
function addRecurse(...nums) {
	if (nums.length === 1) return nums[0];
	return nums[0] + addRecurse(...nums.slice(1));
}

// 13. Write a function mulRecurse that is the generalized mul function but uses recursion
function mulRecurse(...nums) {
	if (nums.length === 1) return nums[0];
	return nums[0] * mulRecurse(...nums.slice(1));
}

// 14. Write a function minRecurse that is the generalized min function but uses recursion
function minRecurse(...nums) {
	if (nums.length === 1) return args[0];
	return Math.min(nums[0], minRecurse(...nums.slice(1)));
}

// 15. Write a function maxRecurse that is the generalized max function but uses recursion
function maxRecurse(...nums) {
	if (nums.length === 1) return nums[0];
	return Math.max(nums[0], maxRecurse(...nums.slice(1)));
}

// 16. Write a function not that takes a function and returns the negation of its result
const not =
	(func) =>
	(...args) =>
		!func(...args);

// 17. Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc =
	(func, initial) =>
	(...args) =>
		args.reduce((acc, val) => func(acc, val), initial);

// 18. Write a function accPartial that takes in a function, a key, and some initial value and returns a function that accumulates a value by storing it in the object and applying the given function to each argument and the key
const accPartial =
	(func, key, initial) =>
	(obj, ...args) => {
		obj[key] = args.reduce((acc, val) => func(acc, val), initial);
		return obj;
	};

// 19. Write a function accRecurse that does what acc does but uses recursion
function accRecurse(func, initial, ...args) {
	if (args.length === 0) return initial;
	return func(initial, accRecurse(func, initial, ...args.slice(1)));
}

// 20. Write a function fill that takes an array and a value and returns a function that fills the array with that value using fill

const fill =(arr, val) =>(...args) =>
	arr.fill(val, ...args);

//  21. Write a function fillRecurse that does what fill does but uses recursion
function fillRecurse(num, value, start = 0, end = num.length) {
	if (start >= end) return  num;
	num[start] = value;
	return fillRecurse(num, value, start + 1, end);
}

// 22. Write a function set that is given a function and an array of arguments and returns the result of the function with the array applied as arguments

function set(...args) {
	return args.filter((item, index) => args.indexOf(item) === index);
}

// 23. Write a function identityf that takes an argument and returns a function that returns that argument

const three = identityf(3);
console.log(three()); // 3

const hello = identityf("hello");
console.log(hello()); // "hello"

// 24. Write a function addf that adds from two invocations

const addf = ( a ) => ( b ) => a + b;

// 25. Write a function liftf that takes a binary function, and makes it callable with two invocations

const liftf = ( binary ) => ( a ) => ( b ) => binary( a, b );

// 26. Write a function pure that is a wrapper arround the impure function impure

function pure(input) {
	// Perform any necessary computations or transformations on the input
	let processedInput = input;

	// Call the impure function with the processed input
	let result = impure(processedInput);

	// Perform any necessary post-processing on the result
	return result;
}


// 27. Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

const curryb = ( binary, a ) => ( b ) => binary( a, b );

// 28. Write a function curry that is generalized for any amount of arguments

function curry( func, ...args ) {
	if ( args.length >= func.length ) {
		return func( ...args );
	}
	return function ( ...args2 ) {
		return curry( func, ...args, ...args2 );
	};
}


// 29. Without writing any new functions, show three ways to create the inc function

// const inc = ( a ) => a + 1;

// const inc = function(n) { return n + 1; }
// const inc = (n) => n + 1;


// 30. Write a method twiceUnary that is a binary function that takes a unary function and returns a binary function that passes its argument to the unary function twice
function twiceUnary(unaryFn) {
	return function (arg1, arg2) {
		return unaryFn(unaryFn(arg1), unaryFn(arg2));
	};
}


//31.Use the function twiceUnary to create the doubl function

const doubl = twiceUnary( ( n ) => n * 2 );

// 32. Use the function twiceUnary to create the square function

const square = twiceUnary( ( n ) => n * n );



// 33 .Write a function twice that is generalized for any amount of arguments

function twice( func ) {
	return function ( ...args ) {
		return func( ...args, ...args );
	};
}


// 34. Write a function reverseb that reverses the arguments of a binary function
const reverseb = (binaryFn) => (firstArg, secondArg) =>
	binaryFn(secondArg, firstArg);







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
	accRecurse,
	fill,
	fillRecurse,
	set,
	identityf,
	addf,
	liftf,
	pure,
	curryb,
	curry,
	inc,
	twiceUnary,
	doubl,
	square,
	twice,
	reverseb,
	reverse,
	composeuTwo,
	composeu,
	composeb,
	composeTwo,
	compose,
	limitb,
	limit,
	genFrom,
	genTo,
	genFromTo,
	elementGen,
	element,
	collect,
	filter,
	filterTail,
	concatTwo,
	concat,
	concatTail,
	gensymf,
	gensymff,
	fibonaccif,
	counter,
	revocableb,
	revocable,
	extract,
	m,
	addmTwo,
	addm,
	liftmbM,
	liftmb,
	liftm,
	exp,
	expn,
	addg,
	liftg,
	arrayg,
	continuizeu,
	continuize,
	vector,
	exploitVector,
	vectorSafe,
	pubsub,
	mapRecurse,
	filterRecurse,
};
