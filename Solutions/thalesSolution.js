// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;
console.log(addb(1, 5));// 6
// Write a binary function subb that takes two numbers and returns their difference
const subb = (...nums) => nums.reduce((a,b) =>  a - b);
console.log(subb(10,4,20));//-14
// Write a binary function mulb that takes two numbers and returns their product
const mulb = (...nums) => nums.reduce((a, b) => a * b);
console.log(mulb(20, 30, 10, 50));// 300000
// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a,b) => Math.min(a,b);
console.log(minb(59,30));//30
// Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a,b) => Math.max(a,b);
console.log(maxb(100,55));//100
// Write a function add that is generalized for any amount of arguments
// const add = (...nums) =>{
//   let sum = 0;
//   for(let i = 0; i <nums.length; i++){
//     sum += nums[i];
//   }
//   return sum;
// }
const add = (...nums) => nums.reduce((a,b) => a + b);
console.log(add(20, 20, 20));// 60
// Write a function sub that is generalized for any amount of arguments
// const sub = (...nums)=>{
//   let diff = 0;
//   for(let i = 1; i<nums.length; i++){
//     diff -= nums[i];
//   }
//   return diff;
// }
const add = (...nums) => nums.reduce((a,b) => a + b);
console.log(add(20, 20, 20));// 60
// Write a function sub that is generalized for any amount of arguments
// const sub = (...nums)=>{
//   let diff = 0;
//   for(let i = 1; i<nums.length; i++){
//     diff -= nums[i];
//   }
//   return diff;
// }
const sub = (...nums) => nums.reduce((a,b) => a -b);
console.log(sub(20,20,20,10));//-30
// Write a function mul that is generalized for any amount of arguments
// const mul = (...nums)=>{
//   let product = 1;
//   for(let i = 0; i < nums.length; i++){
//     product *= nums[i];
//   }
//   return product;
// }
const mul = (...nums) => nums.reduce((a,b) => a - b); 
console.log(mul(20, 30, 10, 50));// -70
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a,b)=> a < b ? a : b);
console.log(min(20, 30, 10, 50));//10
// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a,b) => a > b ? a : b);
console.log(max(20, 30, 10, 50));//50//-30
// Write a function mul that is generalized for any amount of arguments
// const mul = (...nums)=>{
//   let product = 1;
//   for(let i = 0; i < nums.length; i++){
//     product *= nums[i];
//   }
//   return product;
// }
const mul = (...nums) => nums.reduce((a,b) => a - b); 
console.log(mul(20, 30, 10, 50));// -70
// Write a function min that is generalized for any amount of arguments
const min = (...nums) => nums.reduce((a,b)=> a < b ? a : b);
console.log(min(20, 30, 10, 50));//10
// Write a function max that is generalized for any amount of arguments
const max = (...nums) => nums.reduce((a,b) => a > b ? a : b);
console.log(max(20, 30, 10, 50));//50


module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max};