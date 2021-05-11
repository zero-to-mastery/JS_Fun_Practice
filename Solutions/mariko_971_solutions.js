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

function not(fn) {
  return (x) => (fn(x) ? false : true);
}

function acc(fn, init) {
  return (...nums) => nums.reduce(fn, init);
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
     return pred ?  val :  gen2().next().value;
   } 
   return ()=>gen2().next().value
 }

 function filterTail(gen, pre) {
   function x(gen, pre) {
     let vall = gen();
     let pred = pre(vall);
     if (pred === true) return vall;
     else return x(gen, pre);
   }
   return () => x(gen, pre);
 }

 function concatTwo(gen1, gen2) {
   function* first_gen() {
     let x = gen1();
     while (x !== undefined) yield x;
   }
   function* second_gen() {
     let x = gen2();
     while (x !== undefined) yield x;
   }
   function* mainGen() {
     yield* first_gen();
     yield* second_gen();
   }
   return () => mainGen(gen1, gen2).next().value;
 }

 function concat(...gens) {
   function* gens_iterator() {
     for (let g of gens) {
       let x = g();
       while (x !== undefined) yield x;
     }
   }
   return () => gens_iterator().next().value;
 }

 function concatTail(...gens) {
   let i = 0;
   let args = arguments;
   function conc() {
     let genArg = args[i]();
     if (genArg !== undefined) return genArg;
     i++;
     return conc();
   }
   return () => conc();
 }

 function fibonaccif(a, b) {
   function* fibGen() {
     let next = a;
     a = b;
     b = next + a;
     yield next;
   }
   return () => fibGen().next().value;
 }

 //FUNCTION COUNTER

 function counter(x) {
   let count = x;
   const Up = () => (count += 1);
   const Down = () => (count -= 1);
   return { up: Up, down: Down };
 }

  //FUNCTION REVOCABLEB

  function revocableb(binary) {
    let execute = true;
    const fn_Invoke = (a, b) => (execute ? binary(a, b) : undefined);

    const fn_Revoke = () => {
      execute = false;
    };
    return { invoke: fn_Invoke, revoke: fn_Revoke };
  }

//FUNCTION REVOCABLE

  function revocable(func) {
    let execute = true;
    const fn_Invoke = (...args) => (execute ? func(...args) : undefined);

    const fn_Revoke = () => {
      execute = false;
    };
    return { invoke: fn_Invoke, revoke: fn_Revoke };
  }

  //FUNCTION EXTRACT

  function extract(arr, prop) {
    let propStr = prop;
    let values = arr.map((e) => e[propStr]);
    return values;
  }
  
  //FUNCTION M

  function m(value, source) {
    let obj = {};
    obj.value = value;
    obj.source = source ? source : value;
    return obj;
  }

 //FUNCTION ADDMTWO

  const addmTwo = (m1, m2) =>
    m(m1.value + m2.value, `(${m1.source} + ${m2.source})`);

  //FUNCTION ADDM

  function addm(...ms) {
    let values = ms.map((m) => m.value);
    let sources = ms.map((m) => m.source);
    return m(add(...values), `(${sources.join(" + ")})`);
  }

  //FUNCTION LIFTMBM

  function liftmbM(binary, op) {
    return (m1, m2) =>
      m(binary(m1.value, m2.value), `(${m1.source}${op}${m2.source})`);
  }

//FUNCTION ADDM

function liftmb(binary, op) {
  return (m1, m2) => {
    let val1, val2, src1, src2;

    typeof m1 === "object"
      ? ((val1 = m1.value), (src1 = m1.source))
      : typeof m1 === "number"
      ? ((val1 = m1), (src1 = m1))
      : null;
    typeof m2 === "object"
      ? ((val2 = m2.value), (src2 = m2.source))
      : typeof m2 === "number"
      ? ((val2 = m2), (src2 = m2))
      : null;

    return m(binary(val1, val2), `(${src1}${op}${src2})`);
  };
}

//FUNCTION LIFTM

function liftm(binary, op) {
  return (...args) => {
    let values = args.map((m) => (typeof m === "number" ? m : m.value));
    return m(binary(...values), `(${values.join(op)})`);
  };
}

//FUNCTION EXP

const exp = (value)=> Array.isArray(value) ? value.shift()(...value) : value ;

//FUNCTION EXPN

function expn(arr){
  if(Array.isArray(arr)){
    if(arr.filter(Array.isArray).length==0){
       return arr.shift()(...arr);
     }
    if(arr.filter(Array.isArray).length==1 && arr.length>1){ 
      let v = arr.shift()
      return v(well(...arr)) 
    }
    if(arr.filter(Array.isArray).length>1 && arr.length>1){
      let r = arr.shift()
      let t = []
      for(i in arr){
        t.push(well(arr[i]))
      }
      return r(...t)
    }
  }
}

//FUNCTION ADDG

const addg = (g)=> !g ? undefined : (f)=> !f ? g : addg(g+f);

//FUNCTION LIFTG
const liftg = (g) => {
  const mult = (f) => (!f ? undefined : (h) => (!h ? f : mult(g(f, h))));
  return (f) => mult(f);
};

//FUNCTION ARRAYG

function arrayg(val) {
  let arr = [];
  const add = (v) => (!v ? arr : (i) => (arr.push(v), !i ? arr : add(i)));
  return add(val);
}

//FUNCTION CONTINUIZEU
const continuizeu = (u)=>(cb,arg)=>cb(u(arg));

//FUNCTION CONTINUIZE
const continuize = (u)=>(...arg)=>arg.shift()(u(...arg));

//FUNCTION VECTOR
const vector = () => {
  let arr = [];
  return {
    get(i) {
      return arr[i];
    },
    store(i, val) {
      arr[i] = val;
    },
    append(val) {
      arr.push(val);
    },
  };
};

//FUNCTION EXPLOITVECTOR
function exploitVector(v) {
  let arr = [];
  let i = 0;
  const exploit = () => {
    let e = v.get(i);
    if (e !== undefined) {
      arr.push(v.get(i));
      i++;
      return exploit();
    }
    return arr;
  };
  return exploit();
}

//FUNCTION VECTORSAFE

const vectorSafe = () =>
  (function () {
    let array = [];
    const get = (i) => array[i];
    const store = (i, v) => (array[i] = v);
    return {
      append: (v) => array.push(v),
    };
  })();

  //FUNCTION MAPRECURSE

  const mapRecurse = (array,predicate)=> array.map((i)=>predicate(i));

  //FUNCTION FILTERRECURSE

  const filterRecurse = (arr,pred)=>arr.filter((i)=>pred(i));

  module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, mapRecurse, filterRecurse,}; //inc, gensymf, gensymff,  pubsub, }; 