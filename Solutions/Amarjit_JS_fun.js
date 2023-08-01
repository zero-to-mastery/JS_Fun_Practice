const identity = x => x;

const addb = (a,b) => a + b;

const subb = (a,b) => a - b;

const mulb = (a,b) => a * b;

const minb = (a,b) => {
  if(a<b)
  return a;
  else
  return b;
};

const maxb = (a,b) => {
  if(a>b)
  return a;
  else
  return b;
};

const add = (...nums) => {
  let n=0; 
  for (let i=0;i<nums.length;i++) {
       n+=nums[i];
   }
   return n;
}

const sub = (...nums) => {
  let n=0; 
  for (let i=0;i<nums.length;i++) {
       if(n===0)
         n=nums[i];
       else  
       n-=nums[i];
   }
   return n;
}

const mul = (...nums) => {
  let n=1; 
  for (let i=0;i<nums.length;i++) {
       n*=nums[i];
   }
   return n;
}

const min = (...nums) => {
  let n=0; 
  for (let i=0;i<nums.length;i++) {
       if(n<nums[i])
        n=nums[i];
       else if(nums[i]<n)
       n=nums[i];

   }
   return n;
}

const max = (...nums) => {
  let n=0; 
  for (let i=0;i<nums.length;i++) {
       if(nums[i]>n)
        n=nums[i];
   }
   return n;
}

const addRecurse = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    if(Array.isArray(num)) {
      sum+=addRecurse(...num);
    }
      else if (typeof num==='number') {
       sum+=num;
    }  
    }
    return sum;
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
    addRecurse
  };