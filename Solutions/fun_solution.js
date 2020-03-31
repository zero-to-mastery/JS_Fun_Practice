// add my solution file

// 1. identity
const identity = x => x;
console.log(identity(3));

// 2. add
const addb = (a, b) => a + b;
console.log(addb(3, 4));

// 3. subb
const subb = (a, b) => a - b;
console.log(subb(3, 4));

// 4. mulb
const mulb = (a, b) => a * b;
console.log(mulb(3, 4));

// 5. minb
const minb = (a, b) => a < b ? a : b;
console.log(minb(3, 4));

// 6. maxb
const maxb = (a, b) => a > b ? a : b;
console.log(maxb(3, 4));

// 7. add
const add = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(add(1, 2, 3, 4));

// 8. sub
const sub = (...nums) => {
    let result = nums[0];
    for (let index = 1; index < nums.length; index++) {
        result -= nums[index];
    }
    return result;
}
console.log(sub(1, 2, 3, 4));

// 9. mul
const mul = (...nums) => nums.reduce((acc, num) => acc * num, 1);
console.log(mul(1, 2, 3, 4));

// 10. min
const min = (...nums) => {
    let minNumber = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] < minNumber) {
            minNumber = nums[index];
        }
    }
    return minNumber;
}
console.log(min(1, 2, 3, 4));

// 11. max
const max = (...nums) => {
    let maxNumber = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > maxNumber) {
            maxNumber = nums[index];
        }
    }
    return maxNumber;
}
console.log(max(1, 2, 3, 4));

// 12. addRecurse
const addRecurse = (...nums) => {
    if (nums.length == 1) return nums[0];
    let currAdd = nums[0];
    nums.shift();
    return currAdd + addRecurse(...nums);
}
console.log(addRecurse(1, 2, 3, 4));

// 13. mulRecurse
const mulRecurse = (...nums) => {
    if (nums.length == 1) return nums[0];
    let currMul = nums[0];
    nums.shift();
    return currMul * mulRecurse(...nums);
}
console.log(mulRecurse(1, 2, 3, 4));

// 14. minRecurse
const minRecurse = (...nums) => {
    if (nums.length == 1) return nums[0];
    let currMin = nums[0];
    nums.shift();
    return minb(currMin, minRecurse(...nums));
}
console.log(minRecurse(1, 2, 3, 4));

// 15. maxRecurse
const maxRecurse = (...nums) => {
    if (nums.length == 1) return nums[0];
    let currMax = nums[0];
    nums.shift();
    return maxb(currMax, minRecurse(...nums));
}
console.log(maxRecurse(1, 2, 3, 4));

// 16. not
const not = func => {
    return (arg) => {
        if (func(arg)) {
            return false;
        }
        return true;
    }
}
const isOdd = x => x % 2 === 1;
const isEven = not(isOdd);
console.log(isEven(1)); // false
console.log(isEven(2)); // true

// 17. acc
const acc = (func, initial) => {
    return (...nums) => {
        let init = initial;
        for (const num of nums) {
            init = func(num, init);
        }
        return init;
    }
}
let addEx = acc(addb, 0);
console.log(addEx(1, 2, 4)); // 7
let mulEx = acc(mulb, 1);
console.log(mulEx(1, 2, 4)); // 8

// 18. accPartial