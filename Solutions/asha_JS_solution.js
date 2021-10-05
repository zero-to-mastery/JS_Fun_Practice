// function identity
const identity = (arg) => arg;

// binary function addb that takes two numbers and returns their sum
const addb = (a,b) => a+b;

// binary function subb that takes two numbers and returns their difference
const subb=(a, b) => a-b;

// binary function mulb that takes two numbers and returns their product
const mulb=(a,b) => a*b;

// binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => a>b ? b :a;

// binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => a>b ? a : b;

// function add that is generalized for any amount of arguments
const add=(...nums) => {
  let sum = 0;
  for(let i = 0; i<nums.length; i++){
    sum = sum + nums[i];
  }
  return sum;
} 

const sub = (...nums) => {
	let diff = nums[0]-nums[1];
	for (let i=2; i<nums.length; i++) {
		diff-=nums[i];
	}
	return diff;
}

// function mul that is generalized for any amount of arguments
let mul = (...nums) => {
  let multi = 1;
  for(let i = 0; i<nums.length;i++){
    multi = multi * nums[i]
  }
  return multi;
}

// function min that is generalized for any amount of arguments
let min = (...nums) => {
  let minimum=nums[0];
  for(let i = 1;i<nums.length; i++){
    if(nums[i]<minimum){
      minimum = nums[i]
    }
    return minimum
  }
}

// function max that is generalized for any amount of arguments
let max = (...nums) => {
  let maximum = nums[0];
  for(let i=1;i< nums.length; i++){
    if(nums[i] > maximum){
      maximum = nums[i]
    }
  }
  return maximum;
}

// function addRecurse that is the generalized add function but uses recursion
let addRecurse = (...nums) => {
  if(nums.length === 1) return nums[0];
  return nums.pop() + addRecurse(...nums)
}


let mulRecurse = (...nums) => {
  if(nums.length===1) return nums[0]
  return nums.pop() * mulRecurse(...nums);
}

let minRecurse = (...nums) => {
  if(nums.length===1) return nums[0];
  let num = nums.pop()
  return num < minRecurse(...nums) ? num : minRecurse(...nums)
}

let maxRecurse = (...nums) => {
  if(nums.length===1) return nums[0];
  let num = nums.pop()
  return num > maxRecurse(...nums) ? num : maxRecurse(...nums)
}

const not = (func)=>{
  return (arg) => {
    if(func(arg)){
        return false
    }
    return true;
  }
}

const isOdd = (x) => x%2===1
const isEven = not(isOdd)
isEven(2);

///
const acc = (func, init) => {
  return(...args) => {
    for(let num of args){
      init = func(init, num)    //assert.equal(add(1,2,4), 7);
    }
    return init;
  }
}

// function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.
const accPartial = (func, start, end) => (...args) => {
	let arr = args.slice(start,end);
  const sum=func(...arr) 
  args.splice(start, arr.length, sum)
  return args
}

// Write a function accRecurse that does what acc does but uses recursion
// const addRecurse = (func, init) => (...args) => {
//   if(args.length === 1) return args[0];
//   return
// }
// let add = accRecurse(addb, 0)
// add(1, 2, 4) // 7

// function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (num) => {
  let arr=[]
  for(let i=0; i<num;i++){
    arr.push(num)
  }
  return arr;
}

// function fillRecurse that does what fill does but uses recursion
const fillRecurse = (num, arr=[]) => {
  if(arr.length === num) return arr;
	arr.push(num)
	return  fillRecurse(num, arr)
}

// function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...nums) => {
  let newArr = [...new Set(nums)]
  return newArr
}

// function identityf that takes an argument and returns a function that returns that argument
let identityf = (arg) => {
  return function() {
    return arg
  }
}

let three = identityf(3)
three();

//  function addf that adds from two invocations
const addf = (a) => (b) => a+b

// function liftf that takes a binary function, and makes it callable with two invocations
let liftf = (func) => (b) => (c) => func(b,c)

//  pure function pure that is a wrapper arround the impure function impure
  let pure = (x,y) => {
    function impure(x){
      y++;
      z = x * y;
    }
    impure(x)
    return [y,z];
  }

// function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (func, a) => (b) => func(a,b)

// function curry that is generalized for any amount of arguments
const curry = (func, a,b,c) => (d,e,f) => func(a, b, c, d, e, f)

// twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = (func) => {
  return function(a) {
   return func(a, a)
  }
}

// function twiceUnary to create the doubl function
const doubl = (a) => twiceUnary(addb)(a)

// function twiceUnary to create the square function
const square = (a) => twiceUnary(mulb)(a)

// function twice that is generalized for any amount of arguments
const twice = (add) => (...nums) => add(...nums, ...nums)

// function reverse that is generalized for any amount of arguments
const reverse = (func) => (...nums) => func(...nums.reverse());

// function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (func1, func2) => (a) => func2(func1(a))

// function composeu that is generalized for any amount of arguments
const composeu = (...func) =>  (x) => {
  return func.reduceRight((acc, curr) => {
    return curr(acc);
  },x)
}

// function composeb that takes two binary functions and returns a function that calls them both
const composeb = (fun1, fun2) => (x, y, z) =>(fun2(fun1(x,y),z)) 

// function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (fun1, fun2) => (a,b,c) => fun2(fun1(a,b,c))

// function compose that takes any amount of functions and returns a function that takes any amount of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...fns) => (...nums) => fns.reduce((acc, curr) => curr(acc),...nums)


module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, fill, fillRecurse, set, identityf, 
  addf, liftf, pure, curryb, curry, twiceUnary, doubl, square, twice, reverse, composeuTwo, composeu, composeb, composeTwo, compose};