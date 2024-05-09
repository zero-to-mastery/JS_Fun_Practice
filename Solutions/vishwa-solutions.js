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
    // not,
    // acc,
    // accPartial,
    // accRecurse,
    // fill,
    // fillRecurse,
    // set,
    // identityf,
    // addf,
    // liftf,
    // pure,
    // curryb,
    // curry,
    // inc,
    // twiceUnary,
    // doubl,
    // square,
    // twice,
    // reverseb,
    // reverse,
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