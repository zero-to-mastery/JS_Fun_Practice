const { identity } = require("lodash");

/*Write a function identity that takes an argument and returns that argument*/
function identity(x){
    return x;
}
/*Write a binary function addb that takes two numbers and returns their sum*/
function addb(a, b) {
    return a + b;
}
/*Write a binary function subb that takes two numbers and returns their difference*/
function subb(a, b) {
    return b - a;
}
/*Write a binary function mulb that takes two numbers and returns their product*/
function mulb(a, b) {
    return a * b;
}
/*Write a binary function minb that takes two numbers and returns
the smaller one*/
function minb(a, b) {
    if (a < b) return a;
    return b;
}
/*Write a binary function maxb that takes two numbers and returns the larger one*/
function maxb(a, b) {
    if (a > b) return a;
    return b;
}
/*Write a function add that is generalized for any amount of arguments*/
function add(...num) {
    let array = [...num];
    let array2 = array[0];
    let sum = 0;
    array2.forEach(n => sum += n);
    return sum;
}
/*Write a function sub that is generalized for any amount of arguments*/
function sub(...num) {
    let array = [...num];
    let array2 = array[0];
    let subt = 0;
    array2.forEach((n, i) => {
        if(i === 0){subt = n;}
        else{subt -= n;}
    });
    return subt;
}
/*Write a function mul that is generalized for any amount of arguments*/
function mul(...num) {
    let array = [...num];
    let array2 = array[0];
    let mult = 1;
    array2.forEach(n => mult *= n);
    return mult;    
}
/*Write a function min that is generalized for any amount of arguments*/
function min(...num) {
    let array = [...num];
    let array2 = array[0];
    let mini = 0;
    array2.forEach((n, i) => {
        if (i === 0){mini = n;}
        for (j = i + 1; j < array2.length; j++) {
            if (array2[j] < mini){mini = array2[j]}    
        }
    });
    return mini;
}
/*Write a function max that is generalized for any amount of arguments*/
function max(...num) {
    let array = [...num];
    let array2 = array[0];
    let maxi = 0;
    array2.forEach((n, i) => {
        if (i === 0){maxi = n;}
        for (j = i + 1; j < array2.length; j++) {
            if (array2[j] > maxi){maxi = array2[j]}    
        }
    });
    return maxi;    
}
/*Write a function addRecurse that is the generalized add function but uses recursion*/
function addRecurse(...num) {
    const array = [...num];
    let sum = 0;
    const array2 = [...array[0]];
    if (array2.length > 0) {
        let n = array2.shift();
        sum = n + addRecurse(array2);
    }
    return sum;
}
/*Write a function mulRecurse that is the generalized mul function but uses recursion*/
function mulRecurse(...num) {
    const array = [...num];
    const array2 = [...array[0]];
    let prod = 1;
    if (array2.length > 0) {
        let n = array2.shift();
        prod = n * mulRecurse(array2);
    }
    return prod;
}
/*Write a function minRecurse that is the generalized min function but uses recursion*/
function minRecurse(...num) {
    const array = num[0];
    const array2 = [...array];
    let min = array2[0];

    if (array2.length === 1) {return min}
    array2.shift();
    let newMin = minRecurse(array2);
    if (min > newMin) {min = newMin}
    
    return min;
}
/*Write a function maxRecurse that is the generalized max function but uses recursion*/
function maxRecurse(...num) {
    const array = num[0];
    const array2 = [...array];
    let max = array2[0];

    if (array2.length === 1) {return max}
    array2.shift();
    let newMax = maxRecurse(array2);
    if (max < newMax) {max = newMax}
    
    return max;    
}
//Write a function not that takes a function and returns the negation of its result
function not(func) {
    if (func === true) {
        return false;
    }else{return true}
}
/*Write a function acc that takes a function and an initial value and returns a function that runs the initial function on each argument, accumulating the result*/
function acc(func, initial) {
    
}
module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
    not
};