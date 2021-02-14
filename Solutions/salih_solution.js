const identity=(arg)=>arg

const addb=(a,b)=>a+b

const subb=(a,b)=>a-b

const mulb=(a,b)=>a*b

const minb=(a,b)=>a<b ? a:b

const maxb=(a,b)=>a>b ? a:b

const add=(...nums)=>{
    let sum = 0
   for(let i=0;i<nums.length;i++){
    sum += nums[i]
   }
   return sum
}

//for now i did this i i will contribute everyday

module.exports = { identity, addb, subb, mulb, minb, maxb, add};