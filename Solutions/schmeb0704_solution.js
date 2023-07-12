// Write a function twiceUnary that takes a binary function and returns a unary function that passes its argument to the binary function twice
function twiceUnary(binaryFunc, n){  
    function unaryFunc(input){
        return binaryFunc(input, input)
    }

    return unaryFunc(n)
}

// Use the function twiceUnary to create the doubl function

function doubl(n){
    const times2 = (num1, num2) => num1 + num2

    return twiceUnary(times2, n)

}

// Use the function twiceUnary to create the square function

function square(n){
    const selfMult = (num1, num2) => num1 * num2

    return twiceUnary(selfMult, n)

}

module.exports = {
    // identity,
    // addb,
    // subb,
    // mulb,
    // minb,
    // maxb,
    // add,
    // sub,
    // mul,
    // min,
    // max,
    // addRecurse,
    // mulRecurse,
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
    twiceUnary,
    doubl,
    square,
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