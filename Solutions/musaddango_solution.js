const identity = (n) => n;

const addb = (a,b) => a+b;

const subb = (a,b) => a > b ? a-b : b-a;

const mulb = (a,b) => a * b;

const minb = (a,b) => a < b ? a : b;

const maxb = (a,b) => a > b ? a : b;

function add (...nums){
    const array = [...nums];
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i]
    }
    return sum;
};


function mul(...nums){
    const array = [...nums];
    let mult = 1;
    for (let i = 0; i<array.length; i++){
        mult *= array[i];
    }
    return mult;
}

function min(...nums){
    const array = [...nums];
    let smallest = array[0];
    for (let i=0; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
        }
    }
    return smallest;
}

function max(...nums){
    const array = [...nums];
    let maxNum = array[0];
    for(let i = 0; i<array.length; i++){
        if(array[i] > maxNum){
            maxNum = array[i];
        }
    }
    return maxNum;
}



module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    // sub,
    mul,
    min,
    max,
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