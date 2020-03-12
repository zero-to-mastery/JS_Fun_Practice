/* 1.- Identity(x)
Write a function identity that takes an argument
and returns that argument*/

const identity = (x) => x;

/* 2.- addb(a, b) ⇒ number
Write a binary function addb that takes two
numbers and returns their sum */

const addb = (a,b) => a+b;

/* 3.- subb(a, b) ⇒ number
Write a binary function subb that takes two 
numbers and returns their difference */

const subb = (a,b) => a-b;

/* 4.- mulb(a, b) ⇒ number
Write a binary function mulb that takes two 
numbers and returns their product */

const mulb = (a,b) => a*b;

/* 5.- minb(a, b) ⇒ number
Write a binary function minb that takes two 
numbers and returns the smaller one */

const minb = (a,b) => a>b ? b:a;

/* 6.-maxb(a, b) ⇒ number
Write a binary function maxb that takes two 
numbers and returns the larger one */

const maxb = (a,b) => a>b ? a:b;

/* 7.- add(...nums) ⇒ number
Write a function add that is generalized 
for any amount of arguments */

const add = (...numbers) => 
numbers.reduce((Acumulator,CurrentValue) =>
Acumulator += CurrentValue);

/* 8.- sub(...nums) ⇒ number
Write a function sub that is generalized 
for any amount of arguments */

const sub = (...numbers) =>
numbers.reduce((Acumulator,CurrentValue) =>
Acumulator -= CurrentValue);

/* 9.- mul(...nums) ⇒ number
Write a function mul that is generalized 
for any amount of arguments */

const mul = (...numbers) =>
numbers.reduce((Acumulator,CurrentValue) =>
Acumulator *= CurrentValue);

/* 10.- min(...nums) ⇒ number
Write a function min that is generalized 
for any amount of arguments */

const min = (...numbers) =>
numbers.reduce((Acumulator,CurrentValue) =>
Acumulator = Acumulator < CurrentValue ? Acumulator:CurrentValue);

/* 11.- max(...nums) ⇒ number
Write a function max that is generalized 
for any amount of arguments */

const max = (...numbers) =>
numbers.reduce((Acumulator,CurrentValue) =>
Acumulator = Acumulator > CurrentValue ? Acumulator:CurrentValue);

/* 12.- addRecurse(...nums) ⇒ number
Write a function addRecurse that is the 
generalized add function but uses recursion */

const addRecurse = (...numbers) => {
	if (numbers.length < 1) //base case
		return 0
	return numbers[0] + addRecurse(...numbers.slice(1))
}
//Took the solution from the file 'my-solutions-GM.js'

/* 13.- mulRecurse(...nums) ⇒ number
Write a function mulRecurse that is the 
generalized mul function but uses recursion */

const mulRecurse = (...numbers) => {
	if (numbers.length == 1)
		return numbers[0]
	return numbers[0] * mulRecurse(...numbers.slice(1))
}

/* 14.- minRecurse(...nums) ⇒ number
Write a function minRecurse that is the 
generalized min function but uses recursion */

const minRecurse = (...numbers) => {
	if (numbers.length == 1)
		return  console.log(numbers[0])

	if (numbers[0] < numbers[1])
		numbers.splice(1,1);
	else
		numbers.splice(0,0);

	return minRecurse(...numbers);
}

/* 15.- maxRecurse(...nums) ⇒ number
Write a function maxRecurse that is the 
generalized max function but uses recursion */

const maxRecurse = (...numbers) => {
	if (numbers.length == 1)
		return console.log(numbers[0]);

	if (numbers[0] > numbers[1])
		numbers.splice(1,1);
	else
		numbers.splice(0,1);

	return maxRecurse(...numbers);
}

/* 16.- 

