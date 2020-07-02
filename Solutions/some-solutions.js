//Write a function identity that takes an argument and returns that argument

const identity = (a) => a;
identity(5);

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b)=> a + b;
console.log(addb(5,4));

//Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b)=> a - b;
console.log(subb(5,4));

//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b)=> a * b;
console.log(mulb(5,4));

//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) =>{
	if (a < b){
		return a;
	}
}
console.log(minb(3,8));

//Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (a, b) =>{
	if (a < b){
		return a;
	}
}
console.log(maxb(3,8));

//Write a function add that is generalized for any amount of arguments

const add = (...nums) => nums.reduce((acc, nums) => {
	const sum = acc + nums;
	return sum; 
}, 0)
console.log(add(9,6,3));
