const identity = (x) => x;
const addb = (a,b) => a+b;
const subb = (a,b) => a-b;
const mulb = (a,b) => a*b;
const minb = (a,b) => {
	if (a<b) {
		return a;
	}
	if (b<a) {
		return b;
	} else {
		console.log (`${a} = ${b} no minimum number`);
	}
}
const maxb = (a,b) => {
	if (a>b) {
		return a;
	}
	if (b>a) {
		return b;
	} else {
		console.log (`${a} = ${b} no maximum number`);
	}	
}
//Write a function add that is generalized for any amount of arguments
const add = (...numbers) => {
	return numbers.reduce((total,num) => total+num);
}
//Write a function sub that is generalized for any amount of arguments
const sub = (...numbers) => {
	return numbers.reduce((total,num) => total-num);
}
//Write a function mul that is generalized for any amount of arguments
const mul = (...numbers) => {
	return numbers.reduce((total,num) => total*num);
}
//Write a function min that is generalized for any amount of arguments
const min = (...numbers) => {
	let x = numbers[0];
	for (i=1; i<numbers.length; i++) {
		if (x > numbers[i]) {
			x=numbers[i];
		}
	}
	return x;
}
//Write a function max that is generalized for any amount of arguments
const max = (...numbers) => {
	let x = numbers[0];
	for (i=1; i<numbers.length; i++) {
		if (x < numbers[i]) {
			x=numbers[i];
		}
	}
	return x;
}
//Write a function addRecurse that is the generalized add function but uses recursion
let x=0;
const addRecurse = (...numbers) => {
	x=x+numbers[0];
	numbers.shift();
	if (numbers.length > 0){		
		addRecurse(...numbers);
	}
	return x;
}
//Write a function mulRecurse that is the generalized mul function but uses recursion
let y=1;
const mulRecurse = (...numbers) => {
	y=y*numbers[0];
	numbers.shift();
	if (numbers.length > 0){		
		mulRecurse(...numbers);
	}
	return y;
}
//Write a function not that takes a function and returns the negation of its result
const not = func => func?false:true;
	


