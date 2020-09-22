const identity = (x) => {
    return x;
}

const addb = (a,b) => {
    return a+b;
}

const subb = (a,b) => {
    return a-b;
}

const mulb = (a,b) => {
    return a*b;
}

const minb = (a,b) => {
    if(a>b) return b;
    else return a;
}

const maxb = (a,b) => {
    if(a>b) return a;
    else return b;
}

const add = (...arguments) => {
    let sum=0;
    for(let i=0; i<arguments.length; i++) {
        sum+= arguments[i];
    }
    return sum;
}

const sub = (...arguments) => {
    let diff = arguments[0];
    for(let i=1; i<arguments.length; i++) {
        diff-= arguments[i];
    }
    return diff;
}

const mul = (...arguments) => {
    let prod=1;
    for(let i=0; i<arguments.length; i++) {
        prod*= arguments[i];
    }
    return prod;
}

const min = (...arguments) => {
    let min=arguments[0];
    for(let i=0; i<arguments.length; i++) {
        if(arguments[i]<min)
            min = arguments[i];
    }
    return min;
}

const max = (...arguments) => {
    let max=arguments[0];
    for(let i=0; i<arguments.length; i++) {
        if(arguments[i]>max)
            max = arguments[i];
    }
    return max;
}

const addRecurse = (...args) => {
    if(args.length === 1)
        return Number(args[0]);
    else 
        return Number(args[args.length-1]) + addRecurse(...args.slice(0,-1));    
}

const mulRecurse = (...args) => {
    if(args.length === 1)
        return Number(args[0]);
    else 
        return Number(args[args.length-1]) * mulRecurse(...args.slice(0,-1));    
}

const maxRecurse = (...args) => {
    if(args.length === 1)
        return Number(args[0]);
    else 
        return Number(args[args.length-1]) > (maxRecurse(...args.slice(0,-1))) ? Number(args[args.length-1])  : (maxRecurse(...args.slice(0,-1))) ;
}

const minRecurse = (...args) => {
    if(args.length === 1)
        return Number(args[0]);
    else 
        return Number(args[args.length-1]) < (minRecurse(...args.slice(0,-1))) ? Number(args[args.length-1])  : (minRecurse(...args.slice(0,-1))) ;
}

