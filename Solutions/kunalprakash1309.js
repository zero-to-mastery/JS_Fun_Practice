// takes an argument and returns that argument
const identity = (x) => x;

identity('Hello, World') ;  // Hello, World


// takes two numbers and returns their sum
const addb = (a, b) => a + b;

addb(3, 5);                 // 8


// takes two numbers and returns their difference
const subb = (a, b) => a - b;

subb(20, 5)                 // 15


// takes two numbers and returns their product
const mulb = (a, b) => a * b;

mulb(4, 3)                  // 12


// takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b;

minb(12, 10)                // 10


// takes two numbers and returns the larger one
const maxb = (a, b) => a > b ? a : b;

maxb(20, 25)                // 25


// add that is genralized for any amount of arguments
const add = (...nums) => nums.reduce((acc, num) => {return acc + num}, 0);

add(1, 2, 3)                // 6


// sub that is generalized for any amount of arguments
const sub = (...nums) => {
    let result = nums[0];
    for (let i = 1; i < nums.length; i++){
        result = result - nums[i];
    }
    return result;
}

sub(100, 50, 25)             // 25


// mul that is genralized for any amount of arguments
const mul = (...nums) => nums.reduce((acc, num) => {return acc * num}, 1)

mul(6, 5, 4, 3, 2, 1)        // 720


// min that is genralized for any amount of arguments
const min = (...nums) => {
    let minimum = nums[0];
    for(let i = 1; i < nums.length; i++){
        minimum = minimum < nums[i] ? minimum : nums[i]; 
    }
    return minimum
}

min(30, 40, 55, 10)          // 10


// max that is generalized for any amount of arguments
const max = (...nums) => {
    let maximum = nums[0];
    for(let i = 1; i < nums.length; i++){
        maximum = maximum > nums[i] ? maximum : nums[i]; 
    }
    return maximum
}

max(30, 40, 55, 10)           // 55


// addRecurse that is generalized add function but uses recursion
function addRecurse(...nums) {
    if (nums.length < 1) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    return nums[0] + addRecurse(...nums.slice(1));
}

addRecurse(1, 5, 6)            // 12


// mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => {
    if (nums.length < 1) {
        return 0
    }

    if (nums.length == 1) {
        return nums[0]
    }

    return nums[0] * mulRecurse(...nums.slice(1))
}

mulRecurse(1, 2, 4)              // 8

// minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => {
    if (nums.length < 1) {
        return 'Empty Array'
    }

    if (nums.length === 1) {
        return nums[0]
    }

    return nums[0] < minRecurse(...nums.slice(1))
        ? nums[0]
        : minRecurse(...nums.slice(1))
}

minRecurse(1, 2, 6, 7, -6, 9, 44, 4)          // -6


// maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => {
    if (nums.length < 1) {
        return 'Empty Array'
    }

    if (nums.length === 1) {
        return nums[0]
    }

    return maxb(nums[0], maxRecurse(...nums.slice(1)))
}

maxRecurse(2, 6, 7, -6, 9, 44, 4)               // 44

// Write a function not that takes a function and returns the negation of its result
const not = (func) => {
    return (...args) => !(func(...args))
}

//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

const acc = (func, initial) => {
	return (...args) => {
		for (item of args){
			initial += func(item);
		}
		return initial;
	}
}

//Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

const accPartial = (func, start, end) => {
	let accum = 0;
	return (...args) => {
		for (let i = start; i< start+end; i++){
			accum += func(args[i]);
		}
		return accum
	}
}

//Write a function fill that takes a number and returns an array with that many numbers equal to the given number

const fill = (num) => {
	let nums = [];
	for (let i=0; i<num; i++){
		nums.push(num);
	}
	return nums;
}

//Write a function fillRecurse that does what fill does but uses recursion

const fillRecurse = (num,list=[]) => {
	if(list.length===num){
		return list;
	}
	else{
    list.push(num);
    return fillRecurse(num,list);
  }
};

//Write a function set that is given a list of arguments and returns an array with all duplicates removed

const set = (...args) => {
	let sett=[];
	for (item of args){
		if (sett.includes(item)){

		}
		else {
			sett.push(item)
		}
	}
	return sett;
}

//Write a function identityf that takes an argument and returns a function that returns that argument

const identityf = (x) =>{
	return (x) => {x};
}

// Write a function addf that adds from two invocations

const addf = (x) => {
    return function(y) {
        return x + y;
    }
}

module.exports = {
    identity,
    addb,
    subbb,
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
    accRecusrse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf
};