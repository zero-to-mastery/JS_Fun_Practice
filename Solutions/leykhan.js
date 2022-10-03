// At the bottom of your solution file, add

// Write a function identity that takes an argument and returns that argument
const identity = (x) => x;

// Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => {
    if (typeof a === Number && typeof b === Number) {
        return a + b;
    }
    return "invalid input";
}

// Write a binary function subb that takes two numbers and returns their difference?
const subb = (a, b) => {
    if (typeof a === Number && typeof b === Number) {
        return a - b;
    }
    return "invalid input";

}

module.exports = {
    identity, addb, subb,
    //  mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse,
};