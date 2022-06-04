//Write a function identity that takes an argument and returns that argument
let identity = (x) => {
  return x;
}

// Write a binary function addb that takes two numbers and returns their sum
let addb = (a, b) => {
  return a + b;
}

//Write a binary function subb that takes two numbers and returns their difference
let subb = (a, b) => {
  return a - b;
}

//Write a binary function mulb that takes two numbers and returns their product
let mulb = (a, b) => {
  return a * b;
}

//Write a binary function minb that takes two numbers and returns the smaller one
let minb = (a, b) => {
 if (a < b ) {
   return a
 } else {
   return b
 }
}
//Write a binary function maxb that takes two numbers and returns the larger one
let maxb = (a, b) => {
  if (a > b ) {
    return a
  } else {
    return b
  }
 }

 //Write a function add that is generalized for any amount of arguments
 let add = (...nums) => {
   return nums.reduce(function (acc, cur) {
     return acc + cur
   })
 }

//  Write a function sub that is generalized for any amount of arguments
 let sub = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc - cur
  })
}
// Write a function mul that is generalized for any amount of arguments
let mul = (...nums) => {
  return nums.reduce(function (acc, cur) {
    return acc * cur
  })
}
// Write a function min that is generalized for any amount of arguments
let min = (...nums) => {
  return Math.min(...nums)
}
// Write a function max that is generalized for any amount of arguments
let max = (...nums) => {
  return Math.max(...nums)

}
// Write a function addRecurse that is the generalized add function but uses recursion
let addRecurse = (...nums) => {
	if(nums.length < 1)
		return 0
	return nums[0] + addRecurse(...nums.slice(1))

}

// Write a function mulRecurse that is the generalized mul function but uses recursion
let mulRecurse = (...nums) => {
	if(nums.length === 1) {
    return nums[0];
  } else {
    return nums.shift() * mulRecurse(...nums);
  } 
}

// Write a function minRecurse that is the generalized min function but uses recursion
let minRecurse = (...nums) => {
     if (nums.length == 1)
        return nums[0];
         
     nums = Math.min(...nums);
     return minRecurse(nums)
    
}
// Write a function maxRecurse that is the generalized max function but uses recursion
let maxRecurse = (...nums) => {
  if (nums.length == 1)
     return nums[0];
      
  nums = Math.max(...nums);
  return maxRecurse(nums)
 
}
// Write a function not that takes a function and returns the negation of its result
const not = (func) =>(x) => {
	return !Boolean(func(x));
}

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
let acc = (func, initial) => {
  return (...nums) => nums.reduce(func, initial);
}

// Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end
let accPartial = (func, start, end) => {
  return (...nums) => {
  let merge = nums.splice(start,end-start);
  // console.log('merge', merge)
  // console.log('nums', nums)
  nums.splice(start, 0, func(...merge)) 
  return nums
}
}

//Write a function accRecurse that does what acc does but uses recursion
let accRecurse = (func, initial) => {
  return (...num) => {
    let nums = num.flat()
    if (nums.length === 1) {
    return func(initial,nums[0])
    } else {
      return accRecurse(func, func(nums.shift(), initial))(nums)
    }
  }

}


// Write a function fill that takes a number and returns an array with that many numbers equal to the given number
let fill = (num) => {
 let array = []
 for(let i = 0 ; i < num ; i++){
  array.push(num);
} return array

}

//Write a function fillRecurse that does what fill does but uses recursion




module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
  addRecurse,
  mulRecurse,
  minRecurse,
  maxRecurse,
  not,
  acc,
  accPartial,
  accRecurse,
  fill,
  // fillRecurse,
  // set,
  // identityf,
  // addf,
  // liftf,
  // pure,
  // curryb,
  // curry,
  // inc,
  // twiceUnary,
  // doubl,
  // square,
  // twice,
  // reverseb,
  // reverse,
  // composeuTwo,
  // composeu,
  // composeb,
  // composeTwo,
  // compose,
  // limitb,
  // limit,
  // genFrom,
  // genTo,
  // genFromTo,
  // elementGen,
  // element,
  // collect,
  // filter,
  // filterTail,
  // concatTwo,
  // concat,
  // concatTail,
  // gensymf,
  // gensymff,
  // fibonaccif,
  // counter,
  // revocableb,
  // revocable,
  // extract,
  // m,
  // addmTwo,
  // addm,
  // liftmbM,
  // liftmb,
  // liftm,
  // exp,
  // expn,
  // addg,
  // liftg,
  // arrayg,
  // continuizeu,
  // continuize,
  // vector,
  // exploitVector,
  // vectorSafe,
  // pubsub,
  // mapRecurse,
  // filterRecurse,
};
