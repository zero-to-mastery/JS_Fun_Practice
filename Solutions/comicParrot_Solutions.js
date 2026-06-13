//Write a function identity that takes an argument and returns that argument
const identity = (a) => a;

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a,b) => a+b;

//Write a binary function subb that takes two numbers and returns their difference
const subb = (a,b) => a-b;

//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a,b) => a*b;

//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => a > b ? b : a;

//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => a > b ? a : b;

//Write a function add that is generalized for any amount of arguments
const add = (...arg) => arg.reduce((acc,curVal) => acc + curVal,0);

//Write a function sub that is generalized for any amount of arguments
const sub = (...arg) => arg.reduce((acc,curVal) => acc - curVal,arg[0]);

//Write a function mul that is generalized for any amount of arguments
const mul = (...arg) => arg.reduce((acc,curVal) => acc * curVal,1);

//Write a function min that is generalized for any amount of arguments
const min = (...arg) => arg.length === 0 ? undefined : arg.reduce((acc,curVal) => Math.min(acc,curVal),arg[0]);

//Write a function max that is generalized for any amount of arguments
const max = (...arg) => arg.length === 0 ? undefined : arg.reduce((acc,curVal) => Math.max(acc,curVal), arg[0]);

//Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...arg) => arg.length === 0 ? 0 : arg.length === 1 ? arg[0] : arg[0] + addRecurse(...arg.slice(1));

//Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...arg) => arg.length === 0 ? 0 : arg.length === 1 ? arg[0] : arg[0] + mulRecurse(...arg.slice(1));

//Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...arg) => arg.length === 0 ? undefined : arg.length === 1 ? arg[0] : Math.min(arg[0],minRecurse(...arg.slice(1)));

//Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...arg) => arg.length === 0 ? undefined : arg.length === 1 ? arg[0] : Math.max(arg[0], maxRecurse(...arg.slice(1)));

//Write a function not that takes a function and returns the negation of its result
const not = (fn) => (x) => !fn(x);

//Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result
const acc = (fn,x) => (...arg) => arg.reduce(fn,x);

//Write a function accPartial that takes in a function, a start index, and an end index, and returns a function that accumulates a subset of its arguments by
//  applying the given function to all elements between start and end.
const accPartial = (fn,x,y) => (...arg) => arg.slice(x,y).reduce(fn,0);

//Write a function accRecurse that does what acc does but uses recursion
const accRecurse = (fn) => (...arg) => arg.length === 0 ? 0 : arg.length === 1 ? arg[0] : fn(arg[0], accRecurse(fn)(...arg.slice(1)) );  

//Write a function fill that takes a number and returns an array with that many numbers equal to the given number
const fill = (x) => Array(x).fill(x);

//Write a function fillRecurse that does what fill does but uses recursion
const fillRecurse = (x, i = x) => i === 0 ? [] :  [...fillRecurse(x, i-1),x]; 

//Write a function set that is given a list of arguments and returns an array with all duplicates removed
const set = (...arg) => arg.length === 0 ? undefined : [...new Set(arg.flat(Infinity))];

//Write a function identityf that takes an argument and returns a function that returns that argument
const identityf = (x) => () => x;

//Write a function addf that adds from two invocations
const addf = (x) => (y) => x + y; 

//Write a function liftf that takes a binary function, and makes it callable with two invocations
const liftf = (fn) => (x) => (y) => fn(x,y);

// /Write a pure function pure that is a wrapper arround the impure function impure
const pure = (x) => {

    var y = 5, z;
    
    function impure(x){
        y++;
        z = x * y;
    }

    impure(x)
    return [y,z]

}

//Write a function curryb that takes a binary function and an argument, and returns a function that can take a second argument
const curryb = (fn,x) => (y) => fn(x,y); 

//Write a function curry that is generalized for any amount of arguments
const curry = (fn,...arg) => (...arg2) => fn(...[...arg,...arg2]);

//Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twiceUnary = (fn) => (x) => fn(x,x);

//Use the function twiceUnary to create the doubl function
const doubl = (x) => twiceUnary((a,b) => a+b)(x);

//Use the function twiceUnary to create the square function
const square = (x) => twiceUnary((a,b) => a*b)(x);

//Write a function twice that is generalized for any amount of arguments
const twice = (fn) => (...arg) => fn(...arg,...arg);

//Write a function reverseb that reverses the arguments of a binary function
const reverseb = (fn) => (x,y) => fn(y,x); 

//Write a function reverse that is generalized for any amount of arguments
const reverse = (fn) => (...arg) => fn(...arg.reverse());

//Write a function composeuTwo that takes two unary functions and returns a unary function that calls them both
const composeuTwo = (fn1,fn2) => (x) => fn2(fn1(x))

//Write a function composeu that is generalized for any amount of arguments
const composeu = (...arg) => (x) => arg.reduce((acc,curFn) => curFn(acc),x)

//Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (fn1,fn2) => (x,y,z) => fn2(fn1(x,y),z); 

//Write a function composeTwo that takes two functions and returns a function that calls them both
const composeTwo = (fn1,fn2) => (...arg) => fn2(fn1(...arg))

//Write a function compose that takes any amount of functions and returns a function that takes any amount
//  of arguments and gives them to the first function, then that result to the second function and so on
const compose = (...fns) => (...args2) => fns.slice(1).reduce((acc,fn) => fn(acc), fns[0](...args2)); 

//Write a function limitb that allows a binary function to be called a limited number of times
const limitb = (fn,x) => (a,b) => x-- > 0 ? undefinedfn(a,b) : undefined;


const limitb = (fn,x) =>{
    let i = 0;

    return (a,b) => {
        if(i < x){
            i++;
            return fn(a,b);
        }
        else{
            return undefined;
        }
    }
}

//Write a function limit that is generalized for any amount of arguments




module.export{
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
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
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


}