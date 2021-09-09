//identity() 
//1) takes an argument and returns that argument
const identity = (argument) => argument;

//addb(a,b) 
//  2) takes two numbers and returns their sum
const addb = (a,b) => a+b;

// subb(a,b)
// 3) takes two numbers and returns their difference
const subb = (a,b) => a-b;

// mulb(a,b)
// 4) takes two numbers and returns their product
const mulb = (a,b) => a*b;

//minb(a,b)
//5) takes two numbers and returns the smaller one
const minb = (a, b) => a < b ? a : b;
//or
//const minb = (a,b) => (Math.min(a,b));

//maxb(a,b)
//6) takes two numbers and returns the larger one
const maxb = (a,b) => (Math.max(a,b));
//or
//const maxb = (a, b) => a > b ? a : b;

//add(...nums) (we use the spread operator to pass in the ‘rest’ parameter, which I’ve assigned to the variable name ‘nums.’)
//7) is an add fuction that is generalized for any amount of arguments
const add = (...nums) => {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return sum;
};
//or
//const add = (...nums) => nums.reduce((a, b)=>a+b) 

//sub(...nums)
//8) is a sub fuction that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a, b)=>a-b) 

//mul(...nums)
//9) is a mul fuction that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a,b)=>a*b, 1)

//min(...nums)
//10) is a min fuction that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a, b)=> Math.min(a, b))

//max(...nums)
//11) is a max fuction that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a, b)=> Math.max(a, b))

    //addRecurse(...nums)
      //12) is an add fuction that is generalized but uses recursion
    //mulRecurse(...nums)
      //13) is a mul fuction that is generalized but uses recursion
    //minRecurse(...nums)
      //14) is a min fuction that is generalized but uses recursion
    //maxRecurse(...nums)
      //15) is a max fuction that is generalized but uses recursion
    //not(func)
      //16) takes a function and returns the negation of its result
    //acc(func,initial)
      //17) takes a function and an initial value and returns a function
        //that runs the initial function on each argument, accumulating the result
    //accPartial(func,start,end)
      //18) takes in a function, a start index, and an end index, and returns a function
        //that accumulates a subset of its arguments by applying the given function to
        //all elements between start and end
    //accRecurse(func,initial)
      //19) does what acc does but uses recursion
    //fill(num)
      //20) takes a number and returns an array with that many numbers equal to the given
        //number
    //fillRecurse(num)
      //21) does what fill does but uses recursion
    //set(...args)
      //22) is given a list of arguments and returns an array with all duplicates
        //removed
    //identityf(x)
      //23) takes an argument and returns a function that returns that argument
    //addf(a)
      //24) adds from two invocations
    //liftf(binary)
      //25) takes a binary function, and makes it callable with two invocations
    //pure(x,y)
      //26) is a wrapper arround the impure function impure
    //curryb(binary, a)
      //27) takes a binary function and an argument, and returns a function that can take
       // a second argument
    //curry(func, ...outer)
      //28) is a curry function generalized for any amount of arguments
    //inc(x)
      //29) shows multiple ways to create the inc function
    //twiceUnary(binary)
      //30) takes a binary function and returns a unary function that passes its argument
        //to the binary function twice
    //doubl(x)
      //31) uses the function twiceUnary to create the doubl function
    //square(x)
      //32) uses the function twiceUnary to create the square function
    //twice(x)
      //33) is a twice function generalized for any amount of arguments
    //reverseb(binary)
      //34) reverses the arguments of a binary function
    //reverse(func)
      //35) is a reverse function generalized for any amount of arguments
    //composeuTwo(unary1,unary2)
      //36) takes two unary functions and returns a unary function that calls them
        //both
    //composeu(...funcs)
      //37) is a compose function generalized for any amount of arguments
    //composeb(binary1,binary2)
      //38) takes two binary functions and returns a function that calls them both
    //composeTwo(func1,func2)
      //39) takes two functions and returns a function that calls them both
    //compose(...funcs)
      //40) takes any amount of functions and returns a function that takes any amount of
        //arguments and gives them to the first function, then that result to the
        //second function and so on
    //limitb(binary, lmt)
      //41) allows a binary function to be called a limited number of times
    //limit(func, lmt)
      //42) allows a function that is generalized for any amount of arguments
        //to be called a limited number of times
    //genFrom(x)
      //43) produces a generator that will produces a series of values
    //genTo(x)
      //44) takes a generator and an end limit, and returns a generator that will
        //produce numbers up to that limit
    //genFromTo(x)
      //45) produces a generator that will produce values in a range
    //elementGen(array,gen)
      //46) takes an array and a generator and returns a generator that will produce
        //elements from the array
    //element(array,gen)
      //47) is a modified elementGen function so that the generator argument is optional.
        //If a generator is not provided, then each of the elements of the array will
       // be produced.
    //collect(gen,array)
      //48) takes a generator and an array and produces a function that will collect the
        //results in the array
    //filter(gen,predicate)
      //49) takes a generator and a predicate and produces a generator that produces only
        //the values approved by the predicate
    //filterTail(gen,predicate)
      //50) uses tail-recursion to perform the filtering
    //concatTwo(gen1,gen2)
      //51) takes two generators and produces a generator that combines the sequences
    //concat(...gens)
      //52) is generalized for any amount of arguments
    //concatTail(...gens)
      //53) uses tail-recursion to perform the concating
    //gensymf(symbol)
      //54) makes a function that generates unique symbols
    //gensymff(unary, seed)
      //55) takes a unary function and a seed and returns a gensymf
    //fibonaccif(first, second)
      //56) returns a generator that will return the next fibonacci number
    //counter(i)
      //57) returns an object containing two functions that implement an up/down counter,
        //hiding the counter
    //revocableb(binary)
      //58) takes a binary function, and returns an object containing an invoke function
        //that can invoke a function and a revoke function that disables the invoke
        //function
    //revocable(binary)
      //59) takes a function that is generalized for any amount of arguments, and returns
        //an object containing an invoke function that can invoke a function and a revoke
        //function that disables the invoke function
    //extract(array,prop)
      //60) takes an array of objects and an object property name and converts each object
        //in the array by extracting that property
    //m(value,source)
      //61) takes a value and an optional source string and returns them in an object
    //addmTwo(m1,m2)
      //62) adds two m objects and returns an m object
    //addm(...ms)
      //63) is a function that is generalized for any amount of arguments that adds m
        //objects and returns an m object
    //liftmbM(binary, op)
      //64) takes a binary function and a string and returns a function that acts on m
        //objects
    //liftmb(binary, op)
      //65) is a modified function liftmbM that can accept arguments that are either numbers
        //or m objects
    //liftm(func, op)
      //66) is a modified function liftmbM that is generalized for any amount of arguments
        //that can accept arguments that are either numbers or m objects
    //exp(value)
      //67) evaluates simple array expressions
    //expn(value)
      //68) is a modified exp that can evaluate nested array expressions
    //addg(value)
      //69) adds from many invocations, until it sees an empty invocation
    //liftg(value)
      //70) will take a binary function and apply it to many invocations
    //arrayg(value)
      //71) will build an array from many invocations
    //continuizeu(unary)
      //72) takes a unary function and returns a function that takes a callback and an argument
    //continuize(any)
      //73) takes a function and returns a function that takes a callback and an argument
    //vector()
      //74) is an array wrapper object with methods get, store, and append, such that an
        //attacker cannot get access to the private array
    //exploitVector()
      //75) accesses array outside of vector
    //vectorSafe()
      //76) can't access array outside of vector
    //pubsub()
      //77) makes a publish/subscribe object. It will reliably deliver all publications
        //to all subscribers in the right order
    //mapRecurse(array, predicate)
      //78) performs a transformation for each element of a given array, recursively
    //filterRecurse(array, predicate)
      //79) takes in an array and a predicate function and returns a new array by
        //filtering out all items using the predicate, recursively.






























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
	/*addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, 
vectorSafe, pubsub, mapRecurse, filterRecurse,*/ };
