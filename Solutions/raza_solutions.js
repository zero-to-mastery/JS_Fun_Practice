
// identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument
    const identity = (x) => x;
    console.log('Hey there, Delilah');

//addb(a, b) ⇒ number
//Write a binary function addb that takes two numbers and returns their sum
    const addb = (x, y) => (x + y);
    console.log(`What's it like in New York city?`);


//subb(a, b) ⇒ number
//Write a binary function subb that takes two numbers and returns their difference
    const subb = (x, y) => ( x - y);
    console.log(`I'm a thousand miles away`);

//mulb(a, b) ⇒ number
//Write a binary function mulb that takes two numbers and returns their product

    const mulb = (x, y) => (x * y);
    console.log(`But, girl, tonight you look so pretty`)

//minb(a, b) ⇒ number
//Write a binary function minb that takes two numbers and returns the smaller one
    const minb = (x, y) => (x < y ? x : y);

        console.log(`Yes, you do`);


//maxb(a, b) ⇒ number
//Write a binary function maxb that takes two numbers and returns the larger one
    const maxb = (x, y) => {
        return x > y ? x : y;
    }
        console.log(`Time square can't shine as bright as you`);


//add(...nums) ⇒ number
//Write a function add that is generalized for any amount of arguments
    const add = (...nums) => {
        let add = 0;
        for (let i = 0; i < nums.length; i++) {
            add += nums[i];
        }
        return add;
    };
    console.log(`I swear, it's true`);

//sub(...nums) ⇒ number
//Write a function sub that is generalized for any amount of arguments
    const sub = (...nums) => nums.reduce((acc, cur) => acc - cur);
    
    console.log(sub(1, 2, 4));

    module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub
};