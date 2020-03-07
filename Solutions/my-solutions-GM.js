const max = (...nums) => {return nums.reduce((a,b) => a > b ? a : b);}
console.log(max(7, 73, 100, 1, 35, -1, -9, 10, 67))

const addRecurse = (...num) => {
	if (num.length === false) { //base case
		//do nothing
	} else {
		let a = num.shift();
		return a+addRecurse(num)
		//meant to remove to first value from the array and then use the shortened array in the next version of the recursion
	}
	/*
	Problem:
	I need to add the numbers of an array using recursion

	Steps:
	1. I need to be able to access the array and grab a number
	2. I need to understand how to use recursion
		What is recursion?
			- Calling the method inside itself
			- Thus, I need to use addRecurse somewhere
			- Thus, The first part of my code should be accessing the 'num' array and adding two numbers
			- Thus, The second part of my code should be incrementing so that addRecurse will call the next number in the array and then using addRecurse

	Divide:
	1. Understand recursion
	2. What is the base case: The base case is the end condition. Here it is when all numbers have been added. How to tell when all numbers have been added? -- When we've reached the end of the array.
	3. If the base case hasn't been satisfied: increment and call the next the method again.
	*/
}