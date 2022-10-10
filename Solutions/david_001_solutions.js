function identity(x){
  return x;
}

function addb(a,b){
  return a+b;
}

function subb(a,b){
  return a-b;
}

function mulb(a,b){
  return a*b;
}

function minb(a, b){
  return a<b ? a : b;
}

function maxb(a, b){
  return a>b ? a : b;
}

function add(...nums){
  let sum=0;
  for(let i=0; i<nums.length; i++){
    sum += nums[i];
  }
  return sum;
}

function sub(...nums){
  let diff=nums[0];
  for(let i=1; i<nums.length; i++){
    diff -= nums[i];
  }
  return diff;
}

function mul(...nums){
  let prod=1;
  for(let i=0; i<nums.length; i++){
    prod *= nums[i];
  }
  return prod;
}

function min(...nums){
  let ans=99999999;
  for(let i=0; i<nums.length; i++){
    ans = nums[i]<ans ? nums[i] : ans;
  }
  return ans;
}

function max(...nums){
  let ans=-99999999;
  for(let i=0; i<nums.length; i++){
    ans = nums[i]>ans ? nums[i] : ans;
  }
  return ans;
}

function addRecurse(...nums){
  if(nums.length==1){
    return nums[0];
  }
  return nums.pop() + addRecurse(...nums);
}

function mulRecurse(...nums){
  if(nums.length==1){
    return nums[0];
  }
  return nums.pop() * mulRecurse(...nums);
}

module.exports = {identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse};