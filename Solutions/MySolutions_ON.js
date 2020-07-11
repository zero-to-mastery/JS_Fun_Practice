//Write a function identity that takes an argument and returns that argument

const identity = (x) => {
	return x;
}

console.log(identity(3));

//Write a binary function addb that takes two numbers and returns their sum
 const addb = (a,b) => {
 	return a+b;
 }

 console.log(addb(3,5));

 //Write a binary function subb that takes two numbers and returns their difference

const subb = (a,b) => {
 	return a-b;
 }

 console.log(subb(3,5));

 //Write a binary function mulb that takes two numbers and returns their product

 const mulb = (a,b) => {
 	return a*b;
 }

 console.log(mulb(3,5));

 //Write a binary function minb that takes two numbers and returns the smaller one

 const minb = (a,b) => {
 	if (a<b){
 		return a;
 	}
 	return b;
 }

 console.log(minb(3,8));

 //Write a binary function maxb that takes two numbers and returns the larger one

 const maxb = (a,b) => {
 	if (a>b){
 		return a;
 	}
 	return b;
 }

 console.log(maxb(3,8));

//Write a function add that is generalized for any amount of arguments

const add = (...nums) => {
	let sum = 0;
	for (item of nums){
		sum += item;
	}
	return sum;
}

console.log(add(3,4,5,6));


//Write a function sub that is generalized for any amount of arguments

const sub = (...nums) => {
	let diff = 0;
	for (item of nums){
		diff -= item;
	}
	return diff;
}

console.log(sub(3,4,5,6));

//Write a function mul that is generalized for any amount of arguments

const mul = (...nums) => {
	let product = 0;
	for (item of nums){
		product *= item;
	}
	return product;
}

console.log(mul(3,4,5,6));

//Write a function min that is generalized for any amount of arguments

const min = (...nums) => {
	let min = nums[0];
	for (item of nums){
		if(item<min){
			min = item;
		}
	}
	return min;
}

console.log(min(3,4,5,6));

//Write a function max that is generalized for any amount of arguments

const max = (...nums) => {
	let max = nums[0];
	for (item of nums){
		if(item>max){
			max = item;
		}
	}
	return max;
}

console.log(max(3,4,5,6));

//Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {
	if (nums.length<=0){
		return 0;
	}
	return nums[0] + (addRecurse(...nums.slice(1)));
}

//Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
	if (nums.length<=0){
		return 1;
	}
	return nums[0] + (mulRecurse(...nums.slice(1)));
}

//Write a function minRecurse that is the generalized min function but uses recursion

const minRecurse = (...nums) => {
	if(nums.length>1){
		if (nums[0]<minRecurse(...nums.slice(1))){
			return nums[0];
		}
		return minRecurse(...nums.slice(1));
	}
	else{
		return nums[0];
	}
}

//Write a function maxRecurse that is the generalized max function but uses recursion

const maxRecurse = (...nums) => {
	if(nums.length>1){
		if (nums[0]>maxRecurse(...nums.slice(1))){
			return nums[0];
		}
		return maxRecurse(...nums.slice(1));
	}
	else{
		return nums[0];
	}
}

//Write a function not that takes a function and returns the negation of its result

const not = (func) => {
	return (...args) => !func(...args);
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






















