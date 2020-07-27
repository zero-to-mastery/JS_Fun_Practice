// Take and return argument
const identity = (arg) => arg;

identity('Hello World!'); //Returns Hello World!

//Takes two numbers and returns sum

const addb = (num1, num2) => num1 + num2;

addb(5, 9); //Returns 14

//Takes two numbers and returns difference
const subb = (num1, num2) => num1 - num2;

subb(20, 7); //Returns 13

//Takes two numbers and returns product
const mulb = (num1, num2) => num1 * num2;

mulb(10, 12); //Returns 120

//Takes two numbers and returns the smaller one
const minb = (num1, num2) => Math.min(num1, num2);

minb(70, 30); //Returns 30

//Takes two numbers and returns the larger one
const maxb = (num1, num2) => Math.max(num1, num2);

maxb(70, 30); //Returns 70

//Write a function add that is generalized for any amount of arguments and adds them
const add = (...nums) => {
  return nums.reduce((acc, cur) => {
    return acc + cur;
  });
};

add(3, 5, 7, 20); //Returns 35

//Write a function sub that is generalized for any amount of arguments and subtracts them
const sub = (...nums) => {
  return nums.reduce((acc, cur) => {
    return acc - cur;
  });
};
sub(5, 8, 11, 3); //Returns -17

//Write a function mul that is generalized for any amount of arguments and multiplies them
const mul = (...nums) => {
  return nums.reduce((acc, cur) => {
    return acc * cur;
  });
};

mul(9, 5, 3); //Returns 135;

//Write a function min that is generalized for any amount of arguments and returns the lowest
const min = (...nums) => {
  return nums.reduce((acc, cur) => {
    return Math.min(acc, cur);
  });
};

min(20, 9, 12); //Returns 9

//Write a function min that is generalized for any amount of arguments and returns the highest
const max = (...nums) => {
  return nums.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
};

max(20, 9, 12); //Returns 20

const addRecurse = (numArray) => {
  if (numArray.length === 1) {
    return numArray[0];
  } else {
    return numArray.pop() + addRecurse(numArray);
  }
};

console.log(addRecurse([4, 5]));
