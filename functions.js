const identity =  (a) => a;
const addb = (a,b=0) => a + b;
const subb = (a,b=0)=> a-b;
const mulb = (a,b=1) =>a*b;
const minb = (a,b) => (a>b?b:a);
const maxb = (a,b) => (a>b?a:b);
const add = (...nums) => nums.reduce((acc ,num) => {return acc+num},0);
const sub = (...nums) => nums.reduce ((acc, num) => {return acc -num} ,2*nums[0]);
const mul = (...nums) => nums.reduce ((acc,num) => {return acc*num} ,1);
const min = (...nums) => nums.reduce ((acc,num) => {return (acc<num?acc:num)} ,nums[0]);
const max = (...nums) => nums.reduce ((acc,num) => {return (acc<num?num:acc)}  ,nums[0]);
const addRecurse = (...nums) => { 
    if (nums.length==1)
    {return nums[0];}
    else 
    {
        let a = nums.pop();
        let b = nums.pop();
        nums.push(a+b);
        return addRecurse(...nums);
    }
}
const mulRecurse = (...nums) => {
    if (nums.length==1)
    {return nums[0];}
    else 
    {
        let a = nums.pop();
        let b = nums.pop();
        nums.push(a*b);
        return mulRecurse(...nums);
    }
}
const minRecurse = (...nums) => {
    if (nums.length==1)
    {return nums[0];}
    else 
    {
        let a = nums.pop();
        let b = nums.pop();
        nums.push(a<b?a:b);
        return minRecurse(...nums);
    }
}
const maxRecurse = (...nums) => {
    if (nums.length==1)
    {return nums[0];}
    else 
    {
        let a = nums.pop();
        let b = nums.pop();
        nums.push(a>b?a:b);
        return maxRecurse(...nums);
    }
}
const not =(funct)=> (...args)=> !funct(...args);
const acc = (funct ,initial) => (...args) => funct(...args.push(initial));
const accPartial = (funct , start,end) => (...args) =>{
    return (
    args.slice(0,start)
    .concat(funct(...args.slice(start,end)))
    .concat(args.slice(end,))
    )
};
const accRecurse = (funct ,initial) => {
    
};
const fill = (num) => {
    let b = [];
    for (let a = 0 ; a<num ; a++)
        b.push(num);
    return b;
};

const fillRecurse = (num,n=num-1) => {
    if (n==0)
        return [num];
    else 
        return fillRecurse(num, n-1).concat(num);
};
const set = (...args) => {
    let b = {};
    args.forEach((num) => Object.assign(b, {[num] :num}));
    return Object.values(b);
};
const identityf =(num) => {
    return identity(num);
};
const addf = (a) => (b) => a+b ;
const liftf = (binary) => {
    const bin = (a) => (b) => bin(a,b);
    return bin; 
}
const pure = (x,y) => {
    function impure(x){
        y++;
        let z = x*y;
        return z;
    }
    let z= impure(x);
    return [y,z];
}
const curryb =(funct ,num )=> (num2) => {return funct(num,num2)};
const curry = ( ...a1) => (...a2) => {
    a = a1.shift();
    return a(...a1.concat(a2));
}
const inc = (a) => a+1;
const twiceUnary = (bin) => (a) => bin(a,a);
const doubl = (x) => twiceUnary(addb)(x);
const square = (x) => twiceUnary(mulb)(x);
const twice = (funct) => (...args) => funct(funct(...args),funct(...args)); 
const reverseb = (funct) => (a,b) => funct(b,a);
const reverse = (funct) => (...args)=> {
    a =[];
    let len = args.length;
    for (let i=0 ;i<len; i++)
    {
        a.push(args.pop());
    }
    return funct(...a);
}
const composeuTwo = (f1 ,f2) => (a) => f2(f1(a));
const composeu = (...funct) => (a) => funct.reduce((acc,f) => {return f(acc)},a);
const composeb = (f1,f2) => (n1,n2,n3)=> f2(f1(n1,n2),n3);
const composeTwo = (f1 , f2) => (...args) => f2(f1(...args));
const compose = (...funct) => (...args) =>  { 
    return funct.slice(1,).reduce((acc,f) => {return f(acc)},funct[0](...args));    
}
const limitb = (func,lmt,x=0) => (a,b) => {
    x++;
    if (x<lmt)
        {return funct(a,b);}
}  
const limit = (func , lmt,x=0) => (...args) => {
    x++;
    if(x<lmt)
        {return funct(...args)}
}
const genFrom = (x,y=x) => () => {
    return y++;
}  
const genTo = (gen , end) => () => {
        let x = gen();
        if(x<end)
        {   return x;}
}
const genFromTo = (start ,end) => genTo(genFrom(start),end);
const elementGen = (arr,gen) => (gene = gen()) => arr[gene];
const element = (arr ,gen=genFromTo(0,arr.length)) => elementGen(arr ,gen);
const collect = (gen , arr) => () => {
    let x= gen();
    arr.push(x);
    return x;
}
const filter = (gen, predicate) => () => {
    x = gen();
    while ( x!=undefined && predicate(x) )
    {   x=gen();    }
     return x;
}
const filterTail = (gen,predicate) => {
    return (
            function ins (x=gen())
            {
                if ( x!=undefined && !predicate(x))
                {
                    return ins()
                }
                return x
            } 
           )   
} 
const concatTwo = (gen1 ,gen2) => (x=gen1()) => {
    if (x!=undefined)
        return x;
    else 
        return gen2();

}
const concat = (...gens) =>{
    var i =0 ;
    return (
        function (x=gens[i]())
        {
            while(x!=undefined)
                return x;
            if(++i<gens.length)
            {
                x = gens[i]();
                return x;
            }    
        }
    )
} 
const concatTail = (...gens) =>{} 
const gensymf = (str,gen=genFrom(1)) = () => str + gen() 
const gensymff = (unary,seed) => (str,x=seed) =>()=> {
    x = unary(x);
    return str+x;
}
const fibonaccif = (x,y)=> () =>{
    let z = y;
    y = x+y;
    x = z;
    return y;
} 
const counter = (v) => {return {up:()=>++v , down:()=>--v}}
const revocableb = (binary,x=1) =>  {
    return ({
        invoke:(a,b) => {if(x) {return binary(a,b)}},
        revoke : () => {x=0;}
    }) 
}
const revocable = (funct,x=1) =>  {
    return ({
        invoke:(...args) => {if(x) {return funct(...args)}},
        revoke : () => {x=0;}
    }) 
}
const extract = (arr , prop) => arr.map(u => u[prop])
const m = (value, source=String(value)) => {return {"value":value , "source":source}}
const addmTwo = ( m1 , m2) => {return {"value" : m1[value]+m2[value] , "source" :'('+m1[source]+m2[value] +')'} }
const addm = (...ms) => {
    value= ms[0].value;
    source = '(' + (ms[0].source);
    ms.slice(1,).forEach((u) => {
        value = value+u.value;
        source = source + '+'+ u.source;
    })
    return { "value": value , "source" : source}
}
const liftmbM = (binary,op) => (m1,m2) => {
    return { "value" : binary (m1.value,m2.value) , "source" : '(' + m1.source + op + m2.source+')'}
}
const liftmb = (binary,op)=> (a,b) => {
    if (typeof a==='number')
        a = m(a);
    if(typeof b==='number')
        b = m(b);
    return liftmb(binary,op)(a,b);
}
const liftm  = (funct,op) => (...ms) => {
    ms = ms.map((u) => {
        if (typeof u === 'number')
            u = m(u);
        return u;     
    });
    value= funct(...ms.map(u => u.value))
    source = '(' + (ms[0].source);
    ms.slice(1,).forEach((u) => {
        source = source + op+ u.source;
    })
    return { "value": value , "source" : source+')'} 
};
const exp = (v) => v[0](...v.slice(1,))
const expn = (v) => {

}
var y=0; var z='3';
const addg = (x=undefined) => {
    if (x!=undefined)
    {
        y +=x ;
        z =1;
        return addg
    }    
    else if (z===1)
    {  
        let a=y;
        y=0;
        z='3';
        return a;   
    }      
}    
var a = 0;
var b = undefined;
const liftg = (binary) => {
    return function fun(x=undefined) {
        if(x!=undefined)
        {
            if(a==0)
            {
                b = x;
                a=1;
            }  
            else 
            {
                b = binary(b,x); 
            } 
            return fun;
        }
        else
        {
            let f = b;
            b= undefined;
            a=0;
            return f; 
        }
    }
};
var arr = [];
const arrayg = (x=undefined) => 
{
    if (x!=undefined)
        arr.push(x);
    else 
    {
        let ar = arr;
        arr = [];
        return ar;
    }
};
const continuizeu = (unary) => (funct , arg) => funct(unary(arg));
const continuize = (f1) => (...args) => f2(f1(...args.slice(1,)));
const vector = () => 
{
    array =[];
    return {
        append:()=> {array.push()},
        get:(i) => array[i],
        store : (x,i) => {array[i]=x;}
    } ;
} 
const exploitVector
const vectorSafe
const pubsub = () => {
    subs = [];
    return { subscribe : (str)=>{
                    obj = {name :str , publications:[]}
                    subs.push();
                },
            publish:(str)=> {
                fstr='';
                subs.forEach((sub) => {
                    sub.publications.push(str)
                    fstr = fstr + sub.name +'(' + str+')\n' })
                }
            }
    }
const mapRecurse = (arr ,predicate) => {
    let array = [];
    if(arr.length!=0)
    {
        array.push(predicate(arr.shift()));
        array = array.concat(mapRecurse(arr, predicate))
        return array;
    }
    else 
        return array;
}
const filterRecurse = (arr , predicate) => {
    let array = [];
    if (arr.length!=0)
    {
        let x = arr.shift();
        if(predicate(x))
            array.push(x);
        array = array.concat(filterRecurse(arr,predicate))
    }
    else 
        return array;
}









