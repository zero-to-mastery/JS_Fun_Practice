//write a function 'identity' that takes in an argument and returns that argument
arg = prompt('input anything');
const identity = (arg) => arg;
console.log(identity(arg))
console.log('------------------')


//write a function 'addb' that takes two numbers and returns their sum
let a = prompt('input first number');
let b = prompt('input second number');
const addb = (a,b) => {
    const c = Number(a) + Number(b);
    return c
}
console.log(addb(a, b))
console.log('------------------')


//write a function 'subb' that takes two numbers and returns their difference
let a = prompt('input first number');
let b = prompt('input second number');
const subb = (a, b) => {
    const c = Number(a) - Number(b);
    return c
}
console.log(subb(a, b))
console.log('------------------')


//write a function 'mulb' that takes two numbers and returns their product
let a = prompt('input first number');
let b = prompt('input second number');
const mulb = (a, b) => {
    const c = Number(a) * Number(b);
    return c
}
console.log(mulb(a, b))
console.log('------------------')


//write a function 'minb' that takes two numbers and returns the smaller one
let a = prompt('input first number');
let b = prompt('input second number');
const minb = (a, b) => {
   if (Number(a) < Number(b)) {
       return a
   } else {
       return b
   }   
}
console.log(minb(a, b))
console.log('------------------')


//write a function 'maxb' that takes two numbers and returns the larger one
let a = prompt('input first number');
let b = prompt('input second number');
const maxb = (a, b) => {
   if (Number(a) > Number(b)) {
       return a
   } else {
       return b
   }   
}
console.log(maxb(a, b))
console.log('------------------')


//write a function 'add' that is generalized for any amount of arguments
const add = (...nums) => {
    return nums.reduce((a, b) => 
        a + b)
}
console.log(add(2, 3, 4, 5))
console.log('------------------')


//write a function 'sub' that is generalized for any amount of arguments
const sub = (...nums) => {
    return nums.reduce((a, b) => 
        a - b)
}
console.log(sub(2, 3, 4, 5))
console.log('------------------')


//write a function 'mul' that is generalized for any amount of arguments
const mul = (...nums) => {
    return nums.reduce((a, b) => 
        a * b)
}
console.log(mul(2, 3, 4, 5))
console.log('------------------')


//write a function 'min' that is generalized for any amount of arguments
const min = (...nums) => {
    return nums.reduce((a, b) => {
        if (a < b) {
            return a
        } else {
            return b
        }
    })       
}
console.log(min(2, 3, 4, 5))
console.log('------------------')



//write a function 'max' that is generalized for any amount of arguments
const max = (...nums) => {
    return nums.reduce((a, b) => {
        if (a > b) {
            return a
        } else {
            return b
        }
    })       
}
console.log(max(2, 3, 4, 5))
console.log('------------------')


const addRecurse = (...nums) => {
    return nums[0] + addRecurse(nums.slice(1))
}// stack overflow


//write a function that takes a function and returns the negation of it's result
const isOdd = (num) => {
    return (num%2!=0?true:false);
}
const not = (func) => {
    return !func;
}
console.log(not(isOdd(2)))
console.log('--------------')


const acc = (func, initial) => {
    return insider = () =>{
        return insider.reduce((a, 5) =>{
         a * 5
        }, initial)
    }
} 

console.log(acc(5, 1, 2))
console.log('---------------')


//write a function 'set'  that is given a list of arguments and returns an array with all duplicates removed
const set = (args) => {
	let x = [];
	args.forEach(function(i) {
		if (!x[i]) {x[i] = true}
	});
	return Object.keys(x)
}

set([1, 2, 2, 3, 5, 4, 6, 4, 9])
console.log('----------------')
