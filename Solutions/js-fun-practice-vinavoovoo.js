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
	if (nums.length === 1) {
		return nums[0];
	}
	return nums.pop() + addRecurse(...nums);
}

// 13. multiplication function using recursion
const mulRecurse = (...nums) => {
	if (nums.length === 1) {
		return nums[0];
	}
	return nums.pop() * mulRecurse(...nums);
}

// 14. returns smallest number using recursion
const minRecurse = (...nums) => {
	if (nums.length === 1) {
		return nums[0];
	} else if (nums[0] > nums[1]) {
		nums.shift();
	} else {
		nums[1] = nums[0];
		nums.shift();
	}
	return minRecurse(...nums);
}

// 15. returns largest number using recursion
const maxRecurse = (...nums) => {
	if (nums.length === 1) {
		return nums[0];
	} else if (nums[0] < nums[1]) {
		nums.shift();
	} else {
		nums[1] = nums[0];
		nums.shift();
	}
	return maxRecurse(...nums);
}

// 16. takes a function as an argument and returns the opposite Bool
const not = func =>(...args) => {
	return !Boolean(func(...args));
}


// 17. takes a function and initial value and returns a function that 
// runs the initial function on each argument, accumulating the result
const acc = (func, begin) => (...args) => {
	let c = begin;
	for (i of args) {
		c = (func(c, i));
	}
	return c;
}

// 18. working on it... takes in a function, start, and end, and returns a function that creates 
// a new array with function applied to all elements between start and end
const addb = (a, b) => a + b;

const accPartial = (func, start, end) => () => {
 	let newArr = [];
 	if (start < end) {
 		for (i=start;i<(end); i++) {
 			newArr.push(func(i));
 		}
	}
	return newArr;
}
accPartial(addb,1,10)()


////////////////For Reference//////////////////
const mapArray = array.map(num => {
	return num * 2
})
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 100);
///////////////////////////////////////////////



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