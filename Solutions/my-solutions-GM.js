//Write a function max that is generalised for any amount of arguments

const max = (...nums) => {return nums.reduce((a,b) => a > b ? a : b);}
console.log(max(7, 73, 100, 1, 35, -1, -9, 10, 67))


//Write a function addRecurse that is the generalised add function but uses recursion

const addRecurse = (...nums) => {
	if (nums.length < 1) //base case
		return 0
	return nums[0] + addRecurse(...nums.slice(1))
}
console.log(addRecurse(1,2,3,5))

// Write a function mulRecurse that is the generalized mul function but uses recursion

const mulRecurse = (...nums) => {
	if (nums.length < 1)
		return 1;
	return nums[0] * (mulRecurse(...nums.slice(1)))
}
console.log(mulRecurse(1,2,3,4)) //should equal 24