// ZTM JS_Fun_Practice - Vincent

// 1. takes an argument and returns it
const identity = (x) => x;

// 2. returns sum of two numbers
const addb = (a, b) => a + b;

// 3. returns difference of two numbers
const subb = (a, b) => a - b;

// 4. returns product of two numbers
const mulb = (a, b) => a * b;

// 5. takes two numbers and returns whichever is smaller
const minb = (a, b) => {
	if (a > b) {
		return b;
	} else {
		return a;
	}
}

// 6. takes two numbers and returns whichever is larger
const maxb = (a, b) => {
	if (a < b) {
		return b;
	} else {
		return a;
	}
}

// 7. addition function for any amount of arguments
const add = (...args) => {
	return args.reduce((acc, arg) => {
		return acc + arg;
	});
}

// 8. subtraction function ... unlimited arguments
const sub = (...args) => {
	return args.reduce((acc, arg) => {
		return acc - arg;
	});
}

// 9. multiplication function ... unlimited arguments
const mul = (...args) => {
	return args.reduce((acc, arg) => {
		return acc * arg;
	});
}

// 10. returns smallest number ... unlimited arguments
const min = (...args) => {
	let min = args[0];
	for (arg of args) {
		if (min > arg) {
			min = arg;
		}
	}
	return min;
}

// 11. returns largest number ... unlimited arguments
const max = (...args) => {
	let max = args[0];
	for (arg of args) {
		if (max < arg) {
			max = arg;
		}
	}
	return max;
}

// 12. addition function using recursion
const addRecurse = (...nums) => {
	debugger;
	if (nums.length === 1) {
		return nums[0];
	}
	return nums.pop() + addRecurse(...nums);
}



module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, 
	addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, 
	fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, 
	twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, 
	composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, 
	elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, 
	gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, 
	addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, 
	continuizeu, ontinuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, 
	filterRecurse, };