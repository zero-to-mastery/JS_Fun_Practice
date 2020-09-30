const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b ;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

const maxb = (a, b) => a > b ? a : b;

const add = (...nums) => nums.reduce((total, current) => total+current, 0)

const sub = (...nums) => nums.reduce((total, current) => total-current)

const mul = (...nums) => nums.reduce((total, current) => total*current, 1)

const min = (...nums) => nums.reduce((min, current) => current < min ? current : min)

const max = (...nums) => nums.reduce((max, current) => current > max ? current : max)

const addRecurse = (...nums) => {
  return nums.length === 1 ? nums[0]: Number(nums[nums.length-1]) + addRecurse(...nums.slice(0,-1))  
}

const mulRecurse = (...nums) => {
  return nums.length === 1 ? nums[0]: Number(nums[nums.length-1]) * mulRecurse(...nums.slice(0,-1))  
}

const not = (func) => !func()

const fill = (num) => Array(num).fill(num);

const set = (...args) => args.reduce((accumulated, current) => {
    if (accumulated.includes(current)) {
      return accumulated
    } else {
      return [...accumulated, current]
    }
  }, [])

const identityf = (x) => () => x;


const addf = (a) => (b) => a + b;


 
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
  not,
  fill,
  set,
  identityf,
  addf


}