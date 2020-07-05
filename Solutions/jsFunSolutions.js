//Write a function identity that takes an argument and returns that argument
let identity = (arg) => arg;
console.log(identity("hello"));

//Write a binary function addb that takes two numbers and returns their sum
let addb = (num1, num2) => num1 + num2;
console.log(addb(5,5));

//Write a binary function maxb that takes two numbers and returns the larger one
let maxb = (num1, num2) => {
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(maxb(9,10));

//Write a function add that is generalized for any amount of arguments
let add = (...num) => {
    return num.reduce((a,b) =>
        a+b);
}
console.log(add(1,2,3)); 

//Write a function sub that is generalized for any amount of arguments
let sub = (...nums) => {
    return nums.reduce((a,b) =>
        a-b);
}
console.log(sub(5,4,1,5));

//Write a function min that is generalized for any amount of arguments
let min = (...nums) => {
    //returns min
    return Math.min(...nums);
}
console.log(min(4,5,1,-1));

//Write a function addRecurse that is the generalized add function but uses recursion
let addRecurse = (...nums) => {
    if (nums.length == 1){
        return nums[0];
    }
    currentValue = nums[0];
    nums.shift();
    return currentValue + addRecurse(...nums);
}
console.log(addRecurse(5,7,6));