const identity = (x) => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b ;

const mulb = (a, b) => a * b;

const minb = (a, b) => a > b ? b : a;

const maxb = (x, y) => x > y ? x : y;

function add() {
    let x = 0;
    let i = 0;
    
    for (i ; i < arguments.length; i++) {
        x += arguments[i];
    }
    return x;
}

const sub = (...nums) => {
    return nums.reduce((total,amount)=>total - amount)
}
    
const mul = (...nums) => {
    return nums.reduce((total,amount)=>total * amount)
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
    mul
};