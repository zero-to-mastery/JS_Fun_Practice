// 1. Write a function identity that takes an argument and returns that argument

function identity(x) {

    return identity
}

// 2. Write a binary function addb that takes two numbers and returns their sum

function addb(a, b) {

     return a + b

}

// 3. Write a binary function addb that takes two numbers and returns their difference

function subb(a, b) {


     return a - b
}

//4 Write a binary function mulb that takes two numbers and returns their product

function mulb(a, b) {

     return a * b
}

//5 Write a binary function minb that takes two numbers and returns the smaller one

const minb = (a, b) => {

    return Math.min(a, b)
}

//6. Write a binary function maxb that takes two numbers and returns the larger one

function maxb(a, b) {

return Math.max(a, b)
}

//7 Write a function add that is generalized for any amount of arguments
function add(...nums) {

     let sum = 0;
     for (let num of nums) sum += num
     return sum 
      //ANOTHER OPTION
     //for (let i in nums) {
       
     // num = nums[index]
     //sum += num

  //   }
}

//8 Write a function sub that is generalized for any amount of arguments

function sub(...nums) {

    let sum = 0;
    for (let num of nums) sum -= num
    return sum 

}


//9 Write a function mul that is generalized for any amount of arguments


function mul(...nums) {

    let sum = 1;
    for (let num of nums) sum *= num
    return sum 

}

//10 Write a function min that is generalized for any amount of arguments

const min = (...nums) => {

    return  Math.min(...nums)


}
// 11 Write a function max that is generalized for any amount of arguments

const max = (...nums) => {

    return  Math.max(...nums)
}

//12 Write a function addRecurse that is the generalized add function but uses recursion

const addRecurse = (...nums) => {




       if(nums.length === 0) {
        
        return 0
       }
    
      return nums[0] + addRecurse(...nums.slice(1))
    };

// 13 Write a function mulRecurse that is the generalized mul function but uses recursion
 
const mulRecurse = (...nums) => {

     if(nums.length === 0) {
     
     return 1
    }
 
   return nums[0] * addRecurse(...nums.slice(1))
 }


//14 Write a function minRecurse that is the generalized min function but uses recursion


const minRecurse = (...nums) => {
    let num = nums[0]
    if(nums.length === 1) {
    
    return num
}
 
   let restofNums = minRecurse(...nums.slice(1))

   if (num < restofNums) {
     return num

   } else {

      return restofNums
   }

}


//15 Write a function minRecurse that is the generalized min function but uses recursion
const maxRecurse = (...nums) => {
    let num = nums[0]
    if(nums.length === 1) {
    
    return num
}
 
   let restofNums = maxRecurse(...nums.slice(1))

   if (num > restofNums) {
     return num

   } else {

      return restofNums
   }

}

//16 Write a function not that takes a function and returns the negation of its result


const not = (func) => {
    return () => !func();
};

// 17 Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (func, initial) => {
    return (...values) => {
        return values.reduce(func, initial);
    }
}
//18 Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by applying the given function to all elements between start and end.

const accPartial = (func, start, end) => {
    
    return (...args) => {
     
        const subset = args.slice(start, end + 1);
         return subset.reduce((accumulator, currentValue) => {
            return func(accumulator, currentValue);
        });
    };
};


//19 Write a function accRecurse that does what acc does but uses recursion

 const accRecurse = (func, initial) => {
     
     
        return (value) => {

        initial = func(initial, value)
     
        if (initial > value) {

            return initial
        
          } else {
        
           return value
          }
             
        }
     }

    //20  Write a function fill that takes a number and returns an array with that many numbers equal to the given number

    const fill = (num) => {
        const numbers = [];  
      
        for (let i = 0; i < num; i++) { 
          numbers.push(num);  
        }
      
        return numbers;  
      };
      
    //21 Write a function fillRecurse that does what fill does but uses recursion


    const fillRecurse = (num) => {
        const numbers = [];  
      
        for (let i = 0; i < num; i++) { 
          numbers.push(num);  
        }
         
        if (num === 0) {

          console.log('Cannot be 0')


        } else {
        return numbers;  

        }
      };
  //22 Write a function set that is given a list of arguments and returns an array with all duplicates removed
 

  const set  = (...args) => {
      
      finalArray = []

      for(let i = 0; i < args.length; i++ ) {

        if(!finalArray.includes(args[i])) {

          finalArray.push(i)
      }
    }
         return finalArray
} 

//23 Write a function identityf that takes an argument and returns a function that returns that argument

const identityf = (x) => {


   const func = () => {

       return x
    }

    return func;

}

//24 Write a function addf that adds from two invocations

const addf = (a) => {


        return function(y) {
          return a + y;
        }
      }
      
      addf(3)(4)




      //25 Write a function liftf that takes a binary function, and makes it callable with two invocations


      const liftf = (binary) => {

            return (x) => {

            return (y) => {
         
            return binary(x, y)


            }
        }

    }

    addf = applyf(add);
    addf(12)(16)
    liftf(mul)(7)(9)
  
     
   //26 Write a pure function pure that is a wrapper arround the impure function impure (Ask Vik)
      
   const pure = (x, y) => {



    function impure(x) {
        y++;
        z = x * y;
    }

    let result = []
    return result.push(z)

}

//27 Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument

const curryb = (binary, a) => {

    return (b) => {

        return binary(a,b)
    }

}


//28 Write a function curry that is generalized for any amount of arguments

const curry = (func, ...outer) => {

    const endlessArguments = (...args) => {

      return (...extraArgs) => {

            if (extraArgs.length === 0) {

              return func(...args)
            } else  {



             return  endlessArguments(...args, ...extraArgs)
            }

      }
       
    }
      
    return endlessArguments

}

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
  fillRecurse,
  set,
  identityf,
  addf,
  liftf,
  pure,
  curryb,
  curry,
  inc,
  twiceUnary,
  doubl,
  square,
  twice,
  reverseb,
  reverse,
  composeuTwo,
  composeu,
  composeb,
  composeTwo,
  compose,
  limitb,
  limit,
  genFrom,
  genTo,
  genFromTo,
  elementGen,
  element,
  collect,
  filter,
  filterTail,
  concatTwo,
  concat,
  concatTail,
  gensymf,
  gensymff,
  fibonaccif,
  counter,
  revocableb,
  revocable,
  extract,
  m,
  addmTwo,
  addm,
  liftmbM,
  liftmb,
  liftm,
  exp,
  expn,
  addg,
  liftg,
  arrayg,
  continuizeu,
  continuize,
  vector,
  exploitVector,
  vectorSafe,
  pubsub,
  mapRecurse,
  filterRecurse,
};