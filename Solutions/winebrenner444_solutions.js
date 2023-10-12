const identity = x => x;

const addb = (a,b) => a + b;

const subb = (a,b) => a - b;

const mulb = (a,b) => a * b;

const minb = (a,b) => {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

const maxb = (a,b) => {
    if(a < b) {
        return a;
    } else return b;
}

const add = (...nums) => {
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    })
}

const sub = (...nums) => {
    return nums.reduce(function (acc, cur) {
        return acc - cur;
    })
}

const mul = (...nums) => {
    return nums.reduce(function (acc, cur) {
        return acc * cur;
    })
}

const min = (...nums) => Math.min(...nums);

const max = (...nums) => Math.max(...nums);

const addRecurse = (...nums) => {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
       sum += nums[i];
    } return sum;
}

const mulRecurse = (...nums) => {
    let product = 1;
    for(let i = 0; i < nums.length; i++) {
       product *= nums[i];
    } return product;
}

const minRecurse = (...nums) => {
    let num = nums[0];
   for(let i = 0; i < nums.length; i++) {
    if(nums[i] < num) {
        num = nums[i];
    }
   } return num;
}

const maxRecurse = (...nums) => {
    let num = nums[0];
    for(let i = 0; i < nums.length; i++) {
     if(nums[i] > num) {
         num = nums[i];
     }
    } return num;
}

const not = (func) => (...args) => {
    const result = func(...args);
    return !result;
  };
  
const acc = (func, initial) => (...args) => {
   let final = initial;
   for(let i of args) {
    final = func(final, i)
   } return final;
}
  
const accPartial = (func, start, end) => (...args) => {
    const array = args.slice(start, end);
    let final = array[0];
    for (let i of array.slice(1)) {
        final = func(final, i);
    }
    args.splice(start, end - start);
    args.splice(start, 0, final)
    return args;
}

const accRecurse = (func, initial) => (...args) => {
    if (args.length === 1) {
        return func(args[0], initial);
    }
    return func(accRecurse(func, initial)(...args.slice(1)), args[0]);
}

const fill = (num) => {
    return new Array(num).fill(num);
}

const fillRecurse = (num) => {
    if( typeof num === 'number') {
        return new Array(num).fill(num);
    } else {
        alert("Not a number!")
    }
}

const set = (...args) => {
    return new set([args]);
}

const identityf = x => x;

const addf = a => b => a + b;

const liftf = fun => a => b => fun(a, b);

const pure = (x, y) => {
    const impure = (x) => {
        y++;
        z = x * y;
      }
      impure(x);
      return [y, z];
}

const curryb = binary => a => b => binary(a + b);


const curry = func => func(...outer);

let val = 1;
let inc = _.inc(val);
let inc2 = val.inc();

const twiceUnary = (biFunc) => (x) => biFunc(x, x);

const addU = (x, y) => x + y;

const doubl = twiceUnary(addU);

const mult = (x, y) => x * y;

const square = twiceUnary(mult);




module.exports = {
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
};