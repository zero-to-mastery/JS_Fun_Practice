const identity = (x) => x;

const addb = (a, b) => {
  return a + b;
}

const subb = (a, b) => {
  return a - b;
}

const mulb = (a, b) => {
  return a * b;
}

const minb = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const maxb = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const add = (...nums)=>{
return nums.reduce((total,amount)=>total + amount)
}

const sub = (...nums)=>{
return nums.reduce((total,amount)=>total - amount)
}

const mul = (...nums)=>{
return nums.reduce((total,amount)=>total * amount)
 }

 const min = (...nums)=>{
    return nums.reduce((total,amount)=>total < amount ? total:amount)
     }


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


const accPartial = (func, start, end) => (...args) => {
    const array = args.slice(start, end);
    let final = array[0];
    for (let i of array.slice(1)) {
        final = func(final, i);
    }
    args.splice(start, end - start);
    args.splice(start, 0, final)
    return args
}

// Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (func, initial) => (...args) => {
    if (args.length === 1) {
        return func(args[0], initial);
    }
    return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
}

const fill = (num) => {
    let arr = [];
    for(let i=0; i<num; i++) arr.push(num)
    return arr;
}

const fillRecurse = (num, arr=[]) => {
    if(arr.length === num){
        return arr
    }else{
        arr.push(num)
        return fillRecurse(num, arr)
    }
}

const set = (...args) => args.filter((arg, index) => args.indexOf(arg) === index);



module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb , 
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
};