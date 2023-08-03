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
  if (nums.length === 0) {
    throw new Error("No numbers provided for addition.");
  }
  let n=nums[0]; 
  for (let i=1;i<nums.length;i++) {
       n+=nums[i];
   }
   return n;
}

const sub = (...nums) => {
  if (nums.length === 0) {
    throw new Error("No numbers provided for subtraction.");
  }
  let n=nums[0]; 
  for (let i=1;i<nums.length;i++) {
        n-=nums[i];
   }
   return n;
}

const mul = (...nums) => {
  if (nums.length === 0) {
    throw new Error("No numbers provided for multiplication.");
  }
  let n=nums[0]; 
  for (let i=1;i<nums.length;i++) {
       n*=nums[i];
   }
   return n;
}

const min = (...nums) => {
    if (nums.length === 0) {
    throw new Error("No numbers provided for minimum.");
  }
  let n=nums[0]; 
  for (let i=1;i<nums.length;i++) {
       if(nums[i]<n)
        n=nums[i];
   }
   return n;
}

const max = (...nums) => {
    if (nums.length === 0) {
    throw new Error("No numbers provided for maximum.");
  }

  let n=nums[0]; 
  for (let i=1;i<nums.length;i++) {
       if(nums[i]>n)
        n=nums[i];
   }
   return n;
}

const addRecurse = (...nums) => {
    if (nums.length === 0) {
    throw new Error("No numbers provided for adding recursively.");
  }

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

  const mulRecurse = (...nums) => {
    if (nums.length === 0) {
    throw new Error("No numbers provided for multiply recursively.");
  }
    let sum = 1;
    for (const num of nums) {
      if(Array.isArray(num)) {
        sum*=mulRecurse(...num);
      }
        else if (typeof num==='number') {
         sum*=num;
      }  
      }
      return sum;
    }

    const minRecurse = (...nums) => {
    if (nums.length === 0) {
    throw new Error("No numbers provided for minimum recursively.");
  }
      let min = Number.POSITIVE_INFINITY;
      for (const num of nums) {
        if(Array.isArray(num)) {
          const nestedmin = minRecurse(...num);
          if(nestedmin<min)
          min=nestedmin;
        }
          else if (typeof num==='number') {
            if(num<min)
            min=num;
        }  
        }
        return min;
      }

      const maxRecurse = (...nums) => {
       if (nums.length === 0) {
    throw new Error("No numbers provided for maximum recursively.");
  }

        let max = Number.NEGATIVE_INFINITY;
        for (const num of nums) {
          if(Array.isArray(num)) {
            const nestedmax = maxRecurse(...num);
            if(nestedmax>max)
            max=nestedmax;
          }
            else if (typeof num==='number') {
              if(num>max)
              max=num;
          }  
          }
          return max;
        }      

        const not = (func)=>{
          return !func();
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
    not
  };