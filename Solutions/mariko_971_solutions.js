const identity = x => x;

const addb = (a,b) => a + b;

const subb = (a,b) => a - b;

const mulb = (a,b) => a * b;

const minb = (a, b) => Math.min(a, b);

const maxb = (a, b) => Math.max(a, b);

const add = (...nums) => nums.reduce((acc, cur)=> acc + cur);

const sub = (...nums) => nums.reduce((acc, cur)=> acc - cur);

const mul = (...nums) => nums.reduce((acc, cur)=> acc * cur);

const min = (...nums) => Math.min(...nums);

const max = (...nums) => Math.max(...nums);

function addRecurse(...num){
  let x = num.flat();
   if(x.length === 1){
        return x[0];
  }else {
       return x.pop() + addRecurse(x)
  }
};

function mulRecurse(...num){
  let x = num.flat();
   if(x.length === 1){
        return x[0];
  }else {
       return x.pop() * mulRecurse(x)
  }
};

function minRecurse(...nums){
  let min = nums.flat();
  if(min.length!=1){
    if(min[0] < min[1]){
       min.splice(1,1);
    }else {
    min.shift();
    }
    return minRecurse(min);
  } else{
    return min[0];
  }
};


function maxRecurse(...nums){
	let max = nums.flat();
  if(max.length!= 1){
    if(max[0] > max[1]){
       max.splice(1,1);
    }else {
      max.shift();
    }
    return maxRecurse(max);
  } else{
    return max[0];
  }
};

function not(fn){
   return (x)=>fn(x)? false : true;
}
function isOdd(x){ 
   return x%2==1;
}
const isEven = not(isOdd);

function acc(fn, init){
  return (...nums)=> nums.reduce(fn, init);
}

function accPartial(fn,start,end){
  return (...nums)=>{
    let x = nums.splice(start,end-start);
     nums.splice(1, 0,fn(...x));
    return nums;
  }
}

function accRecurse(fn, init){
  return (...num) => {
    let numm = num.flat();
     if(numm.length ===1){
      return fn(init,numm[0]);
    } else { return accRecurse(fn,fn(init,numm.shift()))(numm); }
  }
}

const fill = (num)=>{
  let arr=[];
  for(i=0; i<num; i++){
    arr.push(num);
  }
  return arr;
}

function fillRecurse(num,Arr=[]){
   if(Arr.length==num){return Arr;} 
  else {
    Arr.push(num);
    return fillRecurse(num,Arr)
  }
}

function set(...args){
  let argArr=[];
  for(let i of args){
    if(argArr.includes(i)){continue } 
    else{ argArr.push(i); }
  }
  return argArr;
}

const identityf = (x)=>()=> x;

const addf = (a)=>(b)=> a+b;

const liftf = (fn)=>(a)=>(b)=>fn(a,b);