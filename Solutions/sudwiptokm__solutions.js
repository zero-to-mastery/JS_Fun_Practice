// Write a function identity that takes an argument and returns that argument
const identity = x => x

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a,b) => a+b

// Write a binary function subb that takes two numbers and returns their difference
const subb = (a,b) => a-b

// Write a binary function mulb that takes two numbers and returns their product
const mulb = (a,b) => a*b

// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => a < b ? a : b

// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => a < b ? b : a

// Write a function add that is generalized for any amount of arguments
const add = (...nums) => nums.reduce((a,b)=> a+b)

// Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => nums.reduce((a,b)=> a-b)

// Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => nums.reduce((a,b) => a*b)

// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a,b) => Math.min(a,b))

// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a,b) => Math.max(a,b))

// Write a function addRecurse that is the generalized add function but uses recursion
const addRecurse = (...nums) => nums.reduce((a,b) => a + addRecurse(b))

// Write a function mulRecurse that is the generalized mul function but uses recursion
const mulRecurse = (...nums) => nums.reduce((a,b) => a * mulRecurse(b))

// Write a function minRecurse that is the generalized min function but uses recursion
const minRecurse = (...nums) => nums.reduce((a,b) => Math.min(a,minRecurse(b)))

// Write a function maxRecurse that is the generalized max function but uses recursion
const maxRecurse = (...nums) => nums.reduce((a,b) => Math.max(a,maxRecurse(b)))

// Write a function not that takes a function and returns the negation of its result
const not = func => func?false:true

// Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result

const acc = (func, i) =>{
    const temp = (...nums) => {
        return nums.reduce((acc,num) => func(acc,num),i)
    }
    return temp
}

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, };