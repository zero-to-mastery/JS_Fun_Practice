const identity=(x)=>x;
// console.log(identity(3));

const addb=(a,b)=>a+b;
// console.log(addb(3,4));

const subb=(a,b)=>a-b;
// console.log(subb(3,4));

const mulb=(a,b)=>a*b;
// console.log(mulb(3,4));

const minb=(a,b)=>Math.min(a,b);
// console.log(minb(3,4));

const maxb=(a,b)=>Math.max(a,b);
// console.log(maxb(3,4));

const add=(...nums)=>nums.reduce((acc,sum)=>acc+sum,0);
// console.log(add(1,2,4));

const sub=(...nums)=>nums.reduce((acc,sub)=>acc-sub);
// console.log(sub(1,2,4));

const mul=(...nums)=>nums.reduce((acc,mul)=>acc*mul,1);
// console.log(mul(1,2,4));

const min=(...nums)=>{
    let minNumber = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<minNumber){
            minNumber=nums[i];
        }
    }
    return minNumber;
}
// console.log(min(1,2,4));

const max=(...nums)=>{
    let maxNum = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>maxNum){
            maxNum=nums[i];
        }
    }
    return maxNum;
}
// console.log(max(1,2,4));

const addRecurse=(...nums)=>{
    if(nums.length==1){
        return nums[0];
    }
    return nums.pop() + addRecurse(...nums);
}
// console.log(addRecurse(1,2,4));

const mulRecurse =(...nums)=>{
    if(nums.length==1) return nums[0];
    return nums.pop() * mulRecurse(...nums);
}
// console.log(mulRecurse(1,2,4));

// const minRecurse=(...nums)=>{
//     if(nums.length===1) return nums[0];
//     return Math.min(nums[0],)
// }
// ;

const not=(func)=>!func;
// const isOdd = x=>x%2===1;
// console.log(not(isOdd(2)));

const acc=(func,initial)=>{
    return function(...args){
        return func(...args,initial);
    }
}
// let addr = acc(mul, 10)
// console.log(addr(1,2,4))

const fill=(num)=>{
    let arr =[];
    for(let i=0;i<num;i++){
        arr.push(num);
    }
    return arr;
}
// console.log(fill(5));

const set=(...args)=>{
    let arr =[...args];
    let obj ={}
    arr.forEach((num)=>{
        obj[num] = (obj[num] || 0)+1;
    })
    let keyArr = Object.keys(obj);
    return keyArr.map(key=>Number(key));
}
// console.log(set(1,1,1,2,2,2))

//alternate for set function
const alSet = (...args)=>{
    let arr = [...args];
    let setr = new Set(arr);
    return [...setr];
}

const identityf=(x)=>{
    return function(){
        return x;
    }
}
// let three = identityf(3)
// console.log(three());

const addf=(a)=>{
    return function(b){
        return a+b;
    }
}
// console.log(addf(3)(4));

const liftf=(func)=>{
    return function(a){
        return function(b){
            return func(a,b);
        }
    }
}
// let ad = liftf(addb);
// console.log(ad(3)(4));

const pure=(x,y)=>{
    return [y+=1,mulb(x,y)]
}
// console.log(pure(20,5))

const curryb=(func,x)=>{
    return function(y){
        return func(x,y)
    }
}
// console.log(curryb(mulb,5)(6));

const curry=(func,...args)=>{
    return function(...args1){
        let ar =[...args,...args1]
       return func(...args,...args1);
    }
}
// console.log(curry(mul,1,2,4)(4,2,1));

const inc=(x)=>x+1;
// console.log(inc(inc(5)));

const twiceUnary=(func)=>{
    return function(x){
        return func(x,x);
    }
}
// console.log(twiceUnary(mulb)(11));

const doubl=(x)=>twiceUnary(addb)(x);
// console.log(doubl(11));

const square=x=>twiceUnary(mulb)(x);
// console.log(square(11));

const twice=func=>{
    return function(...args){
        return func(...args,...args);
    }
}
// console.log(twice(mul)(1,2,4));

const reverseb=func=>{
    return function(x,y){
        return func(y,x);
    }
}
// console.log(reverseb(subb)(3,2));

const reverse=func=>{
    return function(...args){

        return func(...args.reverse());
    }
}
// console.log(reverse(sub)(1,2,4));

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
    // minRecurse,
    // maxRecurse,
    not,
    acc,
    // accPartial,
    // accRecurse,
    fill,
    // fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
    inc,
    twiceUnary,
    doubl,
    square,
    twice,
    reverseb,
    reverse,
    // composeuTwo,
    // composeu,
    // composeb,
    // composeTwo,
    // compose,
    // limitb,
    // limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    // element,
    // collect,
    // filter,
    // filterTail,
    // concatTwo,
    // concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    // extract,
    // m,
    // addmTwo,
    // addm,
    // liftmbM,
    // liftmb,
    // liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    // continuizeu,
    // continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};