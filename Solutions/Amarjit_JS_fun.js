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
        
        const acc = (func, initial) => {
          return (...args) => {
            let result = initial;
            for (const arg of args) {
              result = func(result, arg);
            }
            return result;
          };
        };
        
        const accPartial = (func, start, end) => {
          return (...args) => {
            let result = args[start];
            for (let i=start+1;i<=end;i++) {
              result = func(result, args[i]);
            }
            return result;
          };
        };

        const accRecurse = (func, initial) => {
          return (...args) => {
            if(args.length===0)
              return initial;
              else {
                const [head, ...tail] = args;
                return func(initial, head) + accRecurse(func, initial)(...tail);
              }
          };
        };

        const fill = (num) => {
          const arr = new Array(num); 
          for (let i=0; i<arr.length; i++) {
            arr[i]=num;
          }
          return arr;
        };

        const fillRecurse = (num,count=num,arr=[]) => {
          if(count===0) {
           return arr;
          }
           arr.push(num);

          return fillRecurse(num,count-1,arr);
        };        

        const set=(...args)=>{
          return [...new Set(args)];
        }

        const identityf = (arg)=> {
          return()=>arg;
        }

        const addf = (a)=>{
         return (b)=> (a+b);
        }

        const liftf = (binary)=> {
          return (x) => {
          return (y) => {
            return binary(x,y);
          };  
          };
        }

        const pure = (x,y)=> {
          let newY=y;
          let newZ;
          const impure = (x)=> {
            newY++;
            newZ=x*newY;
          }
          impure(x);
          return [newY, newZ];
        }

        const curryb = (binary,a)=> {
          return (b)=>binary(a,b);
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
    not,
    acc,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb
  };