// function minb(a, b) {
//     let min;
//     return min = (a < b) ? a : b;
// }

const minb = (a, b) => (a < b) ? a : b;

function add(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

function mul(...nums) {
    let product = 1;
    for (let num of nums) {
        product *= num;
    }
    return product;
}

function mulRecurse(...nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    currNum = nums[0];
    nums.shift(); // E.g. [1, 2, 3] --> [2, 3]
    // 1 * mulRecurse([2, 3])
    // 1 * (2 * mulRecurse([3]))
    // 1 * (2 * (3))
    return currNum * mulRecurse(...nums);
}

module.exports = { 
    // identity, 
    // addb, 
    // subb, 
    // mulb, 
    minb, 
    // maxb, 
    add, 
    // sub, 
    mul, 
    // min, 
    // max, 
    // addRecurse, 
    mulRecurse, 
    // minRecurse, 
    // maxRecurse, 
    // not, 
    // acc, 
    // accPartial, 
    // accRecurse, 
    // fill, 
    // fillRecurse, 
    // set, 
    // identityf, 
    // addf, 
    // liftf, 
    // pure, 
    // curryb, 
    // curry, 
    // inc, 
    // twiceUnary, 
    // doubl, 
    // square, 
    // twice, 
    // reverseb, 
    // reverse, 
    // composeuTwo, 
    // composeu, 
    // composeb, 
    // composeTwo, 
    // compose, 
    // limitb, 
    // limit, 
    // genFrom, 
    // genTo, 
    // genFromTo, 
    // elementGen, 
    // element, 
    // collect, 
    // filter, 
    // filterTail, 
    // concatTwo, 
    // concat, 
    // concatTail, 
    // gensymf, 
    // gensymff, 
    // fibonaccif, 
    // counter, 
    // revocableb, 
    // revocable, 
    // extract, 
    // m, 
    // addmTwo, 
    // addm, 
    // liftmbM, 
    // liftmb, 
    // liftm, 
    // exp, 
    // expn, 
    // addg, 
    // liftg, 
    // arrayg, 
    // continuizeu, 
    // continuize, 
    // vector, 
    // exploitVector, 
    // vectorSafe, 
    // pubsub, 
    // mapRecurse, 
    // filterRecurse, 
};