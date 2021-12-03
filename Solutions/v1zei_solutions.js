const identity = x => x

const addb = (a, b) => a+b

const subb = (a, b) => a-b

const mulb = (a, b) => a*b

const minb = (a, b) => a<b ? a:b

const maxb = (a, b) => a>b ? a:b

const add = (...nums) => nums.reduce((a, b) => a+b)

const sub = (...nums) => nums.reduce((a, b) => a-b)

const mul = (...nums) => nums.reduce((a, b) => a*b)

const min = (...nums) => nums.reduce((a, b) => a<b ? a:b)

const max = (...nums) => nums.reduce((a, b) => a>b ? a:b)

const addRecurse = (...nums) => {
  if(nums.length === 1) return nums[0]
  return nums.pop() + addRecurse(...nums)
}

const mulRecurse = (...nums) =>{
  if(nums.length === 2) return nums[0]*nums[1]
  return nums.pop() * mulRecurse(...nums)
}

const minRecurse = (...nums) =>{
  if(nums.length === 2) return Math.min(nums[0], nums[1])
  return Math.min(nums.pop(), minRecurse(...nums))
}

const maxRecurse = (...nums) =>{
  if(nums.length === 2) return Math.max(nums[0], nums[1])
  return Math.max(nums.pop(), maxRecurse(...nums))
}

const not = func => (...nums) => !Boolean(func(...nums))

const acc = (func, start) => (...args) => args.reduce((acc, num)=> func(acc, num), start)

const accPartial = (func, start, end) => (...nums) =>{
  let arr = nums.slice(start, end).reduce((acc, num) => func(acc, num))
  nums.splice(start, end-start, arr)
  return nums
}

const accRecurse = (func, startValue) => (...args) =>{
  if(args.length === 1) return func(startValue, args[0])
  return func(accRecurse(func, startValue)(...args.slice(1)), args[0])
}

const fill = num => new Array(num).fill(num)

const fillRecurse = (num, arr = []) =>{
  if(num === arr.length) return arr
  return fill(num, arr.push(num))
}

const set = (...args) => [...new Set(args)]

const identityf = x => () => x

const addf = a => b => a+b

const liftf = func => a => b => func(a, b)

const pure = (x, y) => [++y, y*x]
// const pure = (x, y) =>{
//   const impure = (x) => {
//     y++;
//     z = x*y;
//   }
//   impure(x)
//   return [y, z]
// }

const curryb = (func, value) => a => func(a, value)

const curry = (func, ...args) => (...nums) => func(...args, ...nums)

const inc = (num) => ++num

const twiceUnary = func => num => func(num, num)

const doubl = num => 2*num

const square = num => num*num

const twice = func => (...nums) => func(...nums, ...nums)

const reverseb = func => (a, b) => func(b, a)

const reverse = func => (...nums) => func(...nums.reverse())

const composeuTwo = (func1, func2) => (num) => func2(func1(num))

const composeu = (...funcs) => (num) => {
  funcs.forEach(func => num = func(num))
  return num
}

const composeb = (func1, func2) => (...nums) => func2(nums.pop(), func1(...nums))

const composeTwo = (func1, func2) => (...nums) => func2(func1(...nums))

const compose = (...funcs) => (...nums) =>{
  funcs.forEach(func => {
    nums = typeof(nums) === 'number'? func(nums) : func(...nums)
  })
  return nums
}

const limitb = (func, l) => (a, b) => l-- >=1 ? func(a, b) : undefined

const limit = (func, l) => (...nums) => l-- >=1 ? func(...nums) : undefined

module.exports = { 
  identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, 
  maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, 
  curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, 
  compose, limitb, limit, /*genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, 
  concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, 
  liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, 
  mapRecurse, filterRecurse */
};