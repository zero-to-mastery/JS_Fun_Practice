//write a function mulRecurse that is a generalized mul functions but uses recursion

//mul function
const mul = (...nums) => {
    let answer = 1;
    for (let i = 0; i < nums.length; i++) {
        answer *= nums[i];
    }
    return answer;
}

mul(1, 2, 3);

//mulRecurse 
const mulRecurse = (...nums) => {
    const multiplyTwoIntegers = (a, b) => {
        if (b === 0 || a === 0) {
            return 0;
        } else if (b < 0) {
            return multiplyTwoIntegers(a, b + 1) - a;
        }
        return multiplyTwoIntegers(a, b - 1) + a;
    }
    let answer = 1;
    for (let i = 0; i < nums.length; i++) {
        answer = multiplyTwoIntegers(answer, nums[i]);
    }
    return answer;
}

mulRecurse(1, 2, 3);