const identity=(arg)=>arg

const addb=(a,b)=>a+b

const subb=(a,b)=>a-b

const mulb=(a,b)=>a*b

const minb=(a,b)=>a<b ? a:b

const maxb=(a,b)=>a>b ? a:b

const add = (...nums)=>{
return nums.reduce((total,amount)=>total + amount)
}

const sub = (...nums)=>{
return nums.reduce((total,amount)=>total - amount)
}

const mul = (...nums)=>{
return nums.reduce((total,amount)=>total * amount)
 }

 const min = (...nums)=>{
    return nums.reduce((total,amount)=>total < amount ? total:amount)
     }


//for now i did this i i will contribute everyday

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul,min};

