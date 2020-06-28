//1)
const identify=x=>x

//2)

const addb= (a,b) => a+b

//3)

const subb= (a,b) => a-b

//4)

const mulb= (a,b) => a*b

//5)

const minb= (a,b) =>{
    if(a>b){
        return b
    }else return a
}
// other solution
const minb= (a,b) => a<b ? a : b

//6)

const maxb= (a,b) => a>b ? a : b

//other solution

function maxb(a,b){
    if(a>b){
        return a
    }else return b
}

//7)

const add= (...nums)=> nums.reduce((num, nums)=> num+nums)

//8)

const sub= (...varios)=> varios.reduce((num,varios)=>num-varios)

//9)

const mul = (...nums)=> nums.reduce((num,nums)=> num*nums)

//10)

function min(...nums){
    let menor=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]<menor){
            menor=nums[i]
        }
    }
    return menor
}

//11)

function max(...nums){
    let mayor= nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]>mayor){
            mayor=nums[i]
        }
    }return mayor
}

//12) Write a function addRecurse that is the generalized add function but uses recursion

function addReduce(...nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum= sum+nums[i]
    }
    return sum
}

//13) Write a function mulRecurse that is the generalized mul function but uses recursion

function mulRecurse(...nums){
    let mul= nums[0]
    for(let i=1;i<nums.length;i++){
        mul=mul*nums[i]
    }
    return mul
}

//14) Write a function minRecurse that is the generalized min function but uses recursion

function minRecurse(...nums) {
    let menor=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]<menor){
            menor=nums[i]
        }
    }return menor
}

//15) Write a function maxRecurse that is the generalized max function but uses recursion

function maxRecurse(...nums){
    let mayor=nums[0]
    let i=0
    while(i<nums.length){
        if(nums[i]>mayor){
            mayor=nums[i]
        }i++
    }return mayor
}

//16) Write a function not that takes a function and returns the negation of its result

const isOdd= (num)=>{
    return (num%2!=0?false:true)
}

const not= (func)=>{
    return !func
}

console.log(not(isOdd(2)))
console.log('--------------')

