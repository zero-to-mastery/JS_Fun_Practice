// A function (identity) that takes an argument and returns that argument

// e.g. indentity("Hello") // Hello

const identity = (arg) => arg;

// A binary function (addb) that takes two numbers and returns their sum
// Bonus: both arguments have to be numbers, if they are not the function will return an error to the user

// e.g. addb(1, "2") // Sorry, both parameters must be numbers
//      addb(1, 2) // 3

const addb = (num1, num2) => {
   return (typeof num1 !== "number" && typeof num2 !== "number") ? `Sorry, both parameters must be numbers` : num1 + num2;
};

// A binary function (subb) that takes two numbers and returns their difference
// Bonus: same as above, return an error if the user inputs unintended parameters

// e.g. subb(3, false) // Sorry, both parameters must be numbers
//      subb(8, 13) // -5

const subb = (num1, num2) => {
   return (typeof num1 !== "number" && typeof num2 !== "number") ? `Sorry, both parameters must be numbers` : num1 - num2;
};

// A binary funciton (mulb) that takes two numbers and returns thir product
// Bonus: same again as above

// e.g. mulb(6, null) // Sorry, both parameters must be numbers
//      mulb(6, 6) // 36

const mulb = (num1, num2) => {
   return (typeof num1 !== "number" && typeof num2 !== "number") ? `Sorry, both parameters must be numbers` : num1 * num2;
}

// A binary function (minb) that takes two numbers and returns the smaller one
// Bonus: same again as above

// e.g. minb(3, "yes") // Sorry, both parameters must be numbers
//      minb(5, 2) // 2

const minb = (num1, num2) => {
   return (typeof num1 !== "number" && typeof num2 !== "number") ? `Sorry, both parameters must be numbers`
          : (num1 < num2 ? num1 : num2);
};

// A binary function (maxb) that takes two numbers and returns the bigger one 
// Bonus: same again as above

// e.g. maxb(5, true) // Sorry, both parameters must be numbers
//      maxb(4, 3) // 12

const maxb = (num1, num2) => {
   return (typeof num1 !== "number" && typeof num2 !== "number") ? `Sorry, both parameters must be numbers`
          : (num1 > num2 ? num1 : num2);
};

// A function (add) that is generalized for any number of arguments
// Bonus: same again as above

// e.g. add(3, 4, 5, 6, true) // Sorry both parametes must be numbers
//      add(3, 4, 5, 6, 7) // 25

const add = (...nums) => {
    return (nums.some(isNaN)) ? `Sorry, all parameters must be numbers` // nums.some(<some_condition>) will return a boolean if some values meet the condition
           : nums.reduce((accumilator, currentVal) => accumilator + currentVal); 
};

// A function (sub) that is generalized for any number of arguments
// Bonus: same again as above

// e.g. sub(4, 1, 2, 3) // Sorry, all parameters must be numbers
//      add(4, 1, 2, 3) // -2

const sub = (...nums) => {
     return (nums.some(isNaN)) ? `Sorry, all parameters must be numbers`
            : nums.reduce((accumulator, currentVal) => accumulator - currentVal);    
};

// A function (mul) that is generalized for any number of arguments
// Bonus: same again as above 

// e.g. mul(4, 4, false) // Sorry, all parameters must be numbers
//      mul(4, 4, 3) //  48

const mul = (...nums) => {
    return (nums.some(isNaN)) ? `Sorry, all parameters must be numbers`
           : nums.reduce((accumulator, currentVal) => accumulator * currentVal)
};

// A funciton (min) that is generalized for any number of arguments
// Bonus: same again as above

// e.g. min(3, 4, 6, undefined) // Sorry, all parameters must be numbers
//      min(3, 4, 5, 1) // 1

const min = (...nums) => {
    return (nums.some(isNaN)) ? `Sorry, all parameters must be numbers`
           : nums.reduce((accumulator, currentVal) => accumulator > currentVal ? accumulator = currentVal : accumulator = accumulator)
};

// A funciton (max) that is generalized for any number of arguments
// Bonus: same again as above

// e.g. max(2, 5, 6, true) // Sorry, all parameters must be numbers
//      max(2, 10, 4) // 10

const max = (...nums) => {
    return (nums.some(isNaN)) ? `Sorry, all parameters must be numbers`
           : nums.reduce((accumulator, currentVal) => accumulator < currentVal ? accumulator = currentVal : accumulator = accumulator)
};

// A function (addRecurse) that is the generalized (add) function but uses recursion
// Bonus: same again as above

// e.g. addRecurse(3, 2, 5, true) // Sorry, all parameters must be numbers
//      addRecurse(3, 2, 2) // 7

const addRecurse = (...nums) => {

// Decided to use if blocks here for readability 

    if (nums.some(isNaN)) {
       return `Sorry all parameters must be numbers`;
    }  
    if (nums.length === 1) {
        return nums[0]
    } else {
        return nums.shift() + addRecurse(...nums);
    }
};


// A function (mulRecurse) that is the generalized (mul) function but uses recursion
// Bonus: same again as above

// e.g. mulRecurse(3, 4, 10, "Shwing") // Sorry, all parameters must be numbers
//      mulRecurse(3, 1, 9) // 27

const mulRecurse = (...nums) => {

    if (nums.some(isNaN)) {
       return `Sorry all parameters must be numbers`;
    }  
    if (nums.length === 1) {
        return nums[0]
    } else {
        return nums.shift() * mulRecurse(...nums);
    }
};
