// 1. Write a function identity that takes an argument and returns that argument
const identity = (x) => x;
console.log(identity('Hello there!'));

// 2. Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => x + y;
console.log(addb(3, 7));

// 3. Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => x - y;
console.log(subb(7, 2));

// 4. Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => x * y;
console.log(mulb(2, 5));

// 5. Write a binary function minb that takes two numbers and returns the smaller one
const minb = (x, y) => x < y ? x : y;
console.log(minb(7, 3)); 

// 6. Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (x, y) => x > y ? x : y;
console.log(maxb(7, 3)); 

// 7. Write a function add that is generalized for any amount of arguments
function add() {
    let x = 0;
    let i = 0;

    for (i ; i < arguments.length; i++) {
        x += arguments[i];
    }
    return x;
}
console.log(add(1, 2, 4));

// 8. Write a function sub that is generalized for any amount of arguments
function sub() {
    let i = 1;
    let x = arguments[0];

    for (i ; i < arguments.length; i++) {
        x -= arguments[i];
    }
    return x;
}
console.log(sub(1, 2, 4));

// 9. Write a function mul that is generalized for any amount of arguments
function mul() {
    let x = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        x *= arguments[i];
    }
    return x;
}
console.log(mul(1, 2, 4));

// 10. Write a function min that is generalized for any amount of arguments
function min() {
    let min = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        min > arguments[i]? min = arguments[i]: min ;
    }
    return min;
}
console.log(min(1, 2, 4));

// 11. Write a function max that is generalized for any amount of arguments
function max() {
    let max = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        max < arguments[i]? max = arguments[i]: max ;
    }
    return max;
}
console.log(max(1, 2, 4));