//add(...nums)
let add = (...nums) =>{
  return nums.reduce((accum, currentValue) =>{
    return accum + currentValue;
  }, 0)
}
add(3, 4, 5);


//min(...nums)
let min = (...nums) => Math.min(...nums)
min(2,4,1,6);


//addRecurse(...nums)
let addRecurse = (...nums) =>{
  if(nums.length === 1){
    return nums[0];
  }
  else{
    return nums[0] + addRecurse(...nums.slice(1));
  }
}
addRecurse(3,1,2);



//minRecurse(...nums)
let minRecurse = (...nums) =>{
  if (nums.length  > 1){
   nums[0] = Math.min(nums[0], nums[nums.length -1]);
   nums.pop();
   return minRecurse(...nums);
  }
  else return nums[0];
}
minRecurse(3,7,-3,1,0)



//not(func)
let not = (num) => num * -1
not(2)
