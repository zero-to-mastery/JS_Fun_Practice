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

function pure(x,y){
  function impure(x) { y++;  z = x * y; }
  var z;
  impure(x);
  return [y,z]
}

const curryb = (fn,x)=>(a)=>fn(x,a);

const curry=(fn,...x)=>(...b)=>fn(...x,...b);

const twiceUnary = (fn)=>(x)=>fn(x,x);

const doubl = (x)=>twiceUnary(addb)(x);

const square = (x)=>twiceUnary(mulb)(x);

const twice = (fn)=>(...x)=>fn(...x)*2;

const reverseb = (fn)=>(a,b)=>fn(b,a);

const reverse = (fn)=>(...x)=>fn(x.reverse());

const composeuTwo = (a,b)=>(x)=>b(a(x));

const composeu = (...fn)=>(x)=>fn.reduce(((acc,el)=> el(acc)),x);

const composeb = (a,b)=>(x,y,z)=>b(a(x,y),z);

const composeTwo = (a,b)=>(x,y,z)=>b(a(x,y,z));

const compose =(...fn)=>(...x) => fn.reduce(((ac,el)=>el(ac)),fn.shift()(...x));

const limitb = (fn,x, counter=0)=>(a,b)=> {
    counter++;
    return counter>x ? undefined : fn(a,b);
  };

 const limit = (fn,x, counter=0)=>(...args)=> {
    counter++;
    return counter>x ? undefined : fn(...args);
  };

  function* genFrom(x){
    while(true)
    yield x++;
}; 

function genTo(fn,lmt){
  return ()=>{
    let value = fn.next().value;
    if(value<lmt){
    return value
    }
    return undefined
    } 
};

function genFromTo(start,end){
  function* gen(){
      while(start<end)
      yield start++
      }
  return ()=> gen().next().value;
}

const elementGen = (array,gen)=>()=> array[gen()];

function element(array,gen){
  function* gen2(){
    let index = 0;
    while(true)
      yield index++
  }
  if(gen===undefined){
    let res = gen2()
    return ()=> array[res.next().value];
  } else { return ()=> array[gen()]; }
}

const collect = (gen,array)=>{
  return ()=>{
    let res = gen()
    if(res!== undefined){
      array.push(res)
   }
  }
}

function filter(gen,pre){
 function* gen2(){
    let val = gen();
    let pred = pre(val);
    while(val !== undefined){
        if(pred===true){
        return val;
        }
      return gen2().next().value;
    }
  } 
  return ()=>gen2().next().value
}

function filterTail(gen,pre){
  let val = gen();
  while(val !== undefined){
    if(pre(val)===true){
    return ()=> val;
    }
    return ()=>filterTail(gen,pre)
    }
}


  module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, };//, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, }; 