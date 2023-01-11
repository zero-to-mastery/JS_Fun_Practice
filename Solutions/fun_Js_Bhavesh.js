const identity = (a) => {
    return a;
}

const addb = (a,b) => {
    return a + b;
}

const subb = (a,b) => {
    return a - b;
}

const mulb = (a,b) => {
    return a * b;
}

const minb = (a,b) => {
    if (a < b){
        return a
    } else {
        return b
    }
}

const maxb = (a,b) => {
    if (a < b){
        return b
    } else {
        return a
    }
}

const add = (...nums) => {
    let total = 0;

    for(let i=0; i<nums.length; i++){
        total += nums[i]
    }

    return total
}

const sub = (...nums) => {
    let total = 0

    for (let i=0; i< nums.length; i++){
        total -= nums[i]
    }

    return total
}

const mul = (...nums) => {
    let total = 0;

    for (let i=0; i < nums.length; i++){
        total *= nums[i]
    }

    return total
}

const min = (...nums) => {
    const sorted = nums.sort((a,b)=> a - b)

    return sorted[0]
}

const max = (...nums) => {
    const sorted = nums.sort((a,b)=> b - a)

    return sorted[0]
}

const addRecurse = (...nums) => {
    if (nums.length <= 0){
        return 0
    }

    return nums[0] + addRecurse(...nums.slice(1))
}

const mulRecurse = (...nums) => {
    if (nums.length <= 0){
        return 1
    }

    return nums[0] * mulRecurse(...nums.slice(1))
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
}