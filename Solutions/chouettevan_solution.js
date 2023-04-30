const identity = x => x;
const addb = (a,b) => a+b;
const subb = (a,b) => a-b;
const mulb = (a,b) => a*b;
const minb = (a,b) => a > b ? b : a ;
const maxb = (a,b) => a > b ? a : b;
const add = (...nums) => nums.reduce(addb);
const sub = (...nums) => nums.reduce(subb);
const mul = (...nums) => nums.reduce(mulb);
const min = (...nums) => nums.reduce(minb);
const max = (...nums) => nums.reduce(maxb);
const addRecurse = (...nums) => nums.length > 1 ? nums[0] + addRecurse(nums.filter((v,i) => i != 0)) : nums[0];
const mulRecurse = (...nums) => nums.length > 1 ? nums[0] * mulRecurse(nums.filter((v,i) => i != 0)) : nums[0];
const minRecurse = (...nums) => nums.length > 1 ? minb(nums[0],minRecurse(nums.filter((v,i) => i != 0))) : nums[0];
const maxRecurse = (...nums) => nums.length > 1 ? maxb(nums[0],maxRecurse(nums.filter((v,i) => i != 0))) : nums[0];
const not = func => {
    function func2(...args) {
        return !Boolean(func(...args))
    }
    return func2;
}
const acc = (func,initial) => (array) => array.reduce(func,initial);
const accPartial = (func,start,end) => (array) => {
    array2 = array.filter((value,index) => index < end && index > start)
    return array2.reduce(func)
};
const accRecurse = (func,initial) => {
    let started = false;
    const accR = (array) => {
        !started ? array.unshift(initial) : null; 
        started = true;
        return func(array[0],accR(array.filter((v,i) => i != 0)));
    };
    return accR;
};
const fill = num => {
    let array = [];
    for (let i=0;i < num;i++) {
        array.push(num);
    }
    return array;
};
const fillRecurse = num => { 
    const recurse = (length,array) => {
        if (array.length < length) {
            array.push(num);
            return recurse(num,array);
        } else {
            return array;
        }
        
    }
    return recurse(num,[]);
};
const set = (...args) => {
    let acc = [];
    return args.filter((value,index,array) => {
        let statement = acc.includes(value);
        acc.push(value);
        return !statement; 
    });
};
const identityf = x => x => x;
const addf = a => b => a + b;
const liftf = binary => a => b => binary(a,b);
const pure = (x,y) => {
    function impure(x) {
        y++;
        z = x * y;
    }
    impure(x)
   return z;
}; 
const curryb = (binary,a) => b => binary(a,b);
const curry = (func,...outer) => (...any) => func(any.concat(outer));
const inc = num => addb(num,1);
const twiceUnary = binary => arg => binary(arg,arg);
const doubl = twiceUnary(addb);
const square = twiceUnary(mulb);
const twice = func => (...args) => func(args);
const reverseb = binary => (a,b) => binary(b,a);
const reverse = func => (...args) => func(args.reverse());
const composeuTwo = (unary1,unary2) => a => unary2(unary1(a));
const composeu = (...funcs) => a => funcs.reduce((value,func) => func(value),a);
const composeb = (binary1,binary2) => (a,b) => binary2(binary1(a,b));
const composeTwo = (func1,func2) => (...args) => func2(func1(...args));
const compose = (...funcs) => (...args) => {
    return funcs.reduce((p,func) => {
        try {
            return func(...p);
        } catch (err) {
            return func(p);
        }
    },args);

};
const limitb = (binary,limit) => (a,b) => {
    if (this.used == undefined) {
        this.used = 0;
    }
    this.used++;
    return this.used <= limit? binary(a,b) : undefined;
};
const limit = (func,limit) => (...args) => {
    if (this.used == undefined) {
        this.used = 0;
    }
    this.used++;
    return this.used <= limit? func(...args) : undefined;
};
function genFrom(x) {
    x--;
    return function* generator() {
        x++;
        yield x;
    }
}
function genTo(gen,lmt) {
    return function* generator() {
        let i = 0;
        let out = false
        while (!out) {
            i = gen().next().value;
            i < lmt ? yield i : out=true;
        }
    }
}
const genFromTo = (start,end) => genTo(genFrom(start),end);
function elementGen(array,gen) {
    return function* generator() {
        for (let i of gen()) {
            yield array[i];
        }
    }
}
function element(array,gen) {
    if (gen) return elementGen(array,gen);
    else {
        return function* generator() {
            for (let i of array) {
                yield i;
            }
        }
    }
}

const filter = (gen,predicate) => {
    return function* generator() {
        for (let i of gen()) {
            predicate(i) ? yield i : null;
        }
    }
}
const filterTail = (gen,predicate) =>  {
    function func() {
        const nextr = genInstance => {
            let val = genInstance.next();
            if (val?.value || undefined === undefined) return { value:undefined,done:true };
            if (predicate(val.value)) return val;
            else return nextr(genInstance);
        };
        return {  next:() => nextr(gen()) }
    }
    return function* generator() {
        let result = func().next()
        let i=0;
        while (!result?.done) {
            i = result;
            console.log('while ',i.done);
            result = func().next();
            result.value ? yield result.value : null;
        }
    }
};
const concatTwo = (gen1,gen2) => {
    return function* generator() {
        for (let i of gen1()) {
            yield i;
        }
        for (let i of gen2()) {
            yield i;
        }
    }
}
const concat = (...gens) => {
    return function* generator() {
        for (let gen of gens) {
            for (let i of gen()) {
                yield i;
            }
        }
    }
}
const gensymf = symbol => {
    return function* generator() {
        let num = 0;
        while (true) {
            num++;
            yield `${symbol}${num}`;
        }
    }
}
const gensymff = (unary,seed) => symbol => {
    return function* generator() {
        let hold = seed;
        while (true) {
            hold = unary(hold);
            yield hold;
        }
    }
}
const fibonnaci = (first,second) => {
    return function* generator() {
        let newFirst = first;
        let newSecond = second;
        yield first;
        let turn = true;
        while (true) {
            if (turn) {
                newFirst += newSecond;
            } else {
                newSecond += newFirst;
            }
            turn = !turn;
            yield turn ? newFirst : newSecond;

        }
    }
}   
const counter = i =>  {
    let count = i;
    return {
        up:() => {
            count++;
            return count
        },
        down:() => {
            count -= 1;
            return count;
        }
    }
}
const revocableb = binary => {
    let revoked = false
    const revocable = (a,b) => {
        if (!revoked) {
            return binary(a,b);
        }
    }
    return {
        invoke:revocable,
        revoke:() => {
            revoked = !revoked;
        }
    }
}
const revocable = func => {
    let revoked = false
    const revocable = (...args) => {
        if (!revoked) {
            return func(...args);
        }
    }
    return {
        invoke:revocable,
        revoke:() => {
            revoked = !revoked;
        }
    }
}
/*module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
    inc,
    twiceUnary,
    doubl,
    square,
    twice,
    reverseb,
    reverse,
    composeuTwo,
    composeu,
    composeb,
    composeTwo,
    compose,
    limitb,
    limit,
    genFrom,
    genTo,
    genFromTo,
    elementGen,
    element,
    collect,
    filter,
    filterTail,
    concatTwo,
    concat,
    concatTail,
    gensymf,
    gensymff,
    fibonaccif,
    counter,
    revocableb,
    revocable,
    extract,
    m,
    addmTwo,
    addm,
    liftmbM,
    liftmb,
    liftm,
    exp,
    expn,
    addg,
    liftg,
    arrayg,
    continuizeu,
    continuize,
    vector,
    exploitVector,
    vectorSafe,
    pubsub,
    mapRecurse,
    filterRecurse,
};*/