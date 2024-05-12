const identity=(x)=>x;
// console.log(identity(3));

const addb=(a,b)=>a+b;
// console.log(addb(3,4));

const subb=(a,b)=>a-b;
// console.log(subb(3,4));

const mulb=(a,b=1)=>a*b;
// console.log(mulb(3,4));

const minb=(a,b)=>Math.min(a,b);
// console.log(minb(3,4));

const maxb=(a,b)=>Math.max(a,b);
// console.log(maxb(3,4));

const add=(...nums)=>nums.reduce((acc,sum)=>acc+sum,0);
// console.log(add(1,2,4));

const sub=(...nums)=>nums.reduce((acc,sub)=>acc-sub);
// console.log(sub(1,2,4));

const mul=(...nums)=>nums.reduce((acc,mul)=>acc*mul,1);
// console.log(mul(1,2,4));

const min=(...nums)=>{
    let minNumber = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<minNumber){
            minNumber=nums[i];
        }
    }
    return minNumber;
}
// console.log(min(1,2,4));

const max=(...nums)=>{
    // console.log(nums);
    let ar = [...nums];
    let passedNestedArr = false;
    for(let i=0;i<nums.length;i++){
        if(Array.isArray(nums[i])){
            passedNestedArr = true;
        }else{
            passedNestedArr=false;
        }
    }
    if(passedNestedArr){
       ar= ar.flat(1);
    }
    let maxNum = ar[0];
    for(let i=0;i<ar.length;i++){
        if(ar[i]>maxNum){
            maxNum=ar[i];
        }
    }
    return maxNum;
}
// console.log(max([1,2,4]));

const addRecurse=(...nums)=>{
    if(nums.length==1){
        return nums[0];
    }
    return nums.pop() + addRecurse(...nums);
}
// console.log(addRecurse(1,2,4));

const mulRecurse =(...nums)=>{
    if(nums.length==1) return nums[0];
    return nums.pop() * mulRecurse(...nums);
}
// console.log(mulRecurse(1,2,4));

const minRecurse=(...nums)=>{
    // console.log(nums);
    if(nums.length === 1){
        return nums[0];
    } 
    const firstNumber = nums[0];
    const remainingNumbers = nums.slice(1);
    const minOfRemaining = minRecurse(...remainingNumbers);
    return Math.min(firstNumber,minOfRemaining);
};
// console.log(minRecurse(1,2,4));

const maxRecurse=(...nums)=>{
    // console.log(nums);
    if(nums.length === 1){
        return nums[0];
    } 
    const firstNumber = nums[0];
    const remainingNumbers = nums.slice(1);
    const maxOfRemaining = maxRecurse(...remainingNumbers);
    return Math.max(firstNumber,maxOfRemaining);
};
// console.log(maxRecurse(1,2,4));

const not=(func)=>!func;
// const isOdd = x=>x%2===1;
// console.log(not(isOdd(2)));

const acc=(func,initial)=>{
    return function(...args){
        return func(...args,initial);
    }
}
// let addr = acc(mul, 10)
// console.log(addr(1,2,4))

const accPartial=(func,start,end)=>{
    return function(...args){
        return func(...args.slice(start+1,end));
    }
}
// console.log(accPartial(add,1,3)(1,2,4,8));

// const accRecurse=(func,initial)=>{
//     return function accT(...args){
//         if(args.length===0) return initial;
//         else{
//             return accT(func(initial,args[0]),...args.slice(1));
//         }
//     }
// }
// console.log(accRecurse(mul,0)(1,2,4));

const fill=(num)=>{
    let arr =[];
    for(let i=0;i<num;i++){
        arr.push(num);
    }
    return arr;
}
// console.log(fill(5));

const fillRecurse=(num,arr=[])=>{
    if(arr.length===num) return arr;
    else{
        arr.push(num)
        return fillRecurse(num,arr)
    }
};
// console.log(fillRecurse(3));

const set=(...args)=>{
    let arr =[...args];
    let obj ={}
    arr.forEach((num)=>{
        obj[num] = (obj[num] || 0)+1;
    })
    let keyArr = Object.keys(obj);
    return keyArr.map(key=>Number(key));
}
// console.log(set(1,1,1,2,2,2))

//alternate for set function
const alSet = (...args)=>{
    let arr = [...args];
    let setr = new Set(arr);
    return [...setr];
}

const identityf=(x)=>{
    return function(){
        return x;
    }
}
// let three = identityf(3)
// console.log(three());

const addf=(a)=>{
    return function(b){
        return a+b;
    }
}
// console.log(addf(3)(4));

const liftf=(func)=>{
    return function(a){
        return function(b){
            return func(a,b);
        }
    }
}
// let ad = liftf(addb);
// console.log(ad(3)(4));

const pure=(x,y)=>{
    return [y+=1,mulb(x,y)]
}
// console.log(pure(20,5))

const curryb=(func,x)=>{
    return function(y){
        return func(x,y)
    }
}
// console.log(curryb(mulb,5)(6));

const curry=(func,...args)=>{
    return function(...args1){
        let ar =[...args,...args1]
       return func(...args,...args1);
    }
}
// console.log(curry(mul,1,2,4)(4,2,1));

const inc=(x)=>x+1;
// console.log(inc(inc(5)));

const twiceUnary=(func)=>{
    return function(x){
        return func(x,x);
    }
}
// console.log(twiceUnary(mulb)(11));

const doubl=(x)=>twiceUnary(addb)(x);
// console.log(doubl(11));

const square=x=>twiceUnary(mulb)(x);
// console.log(square(11));

const twice=func=>{
    return function(...args){
        return func(...args,...args);
    }
}
// console.log(twice(mul)(1,2,4));

const reverseb=func=>{
    return function(x,y){
        return func(y,x);
    }
}
// console.log(reverseb(subb)(3,2));

const reverse=func=>{
    return function(...args){

        return func(...args.reverse());
    }
}
// console.log(reverse(sub)(1,2,4));

const composeuTwo=(func1,func2)=>{
    return function(x){
        return func2(func1(x));
    }
}
// console.log(composeuTwo(doubl,square)(5));

const composeu=(...funcs)=>{
    return function(arg){
    let result = funcs[0](arg);
    for(let i=1;i<funcs.length;i++){
            result = funcs[i](result);
        }
        return result;
    }
}
// console.log(composeu(doubl,square,identity,curry(add,1,2))(5));

const composeb=(func1,func2)=>{
    return function(a,b,c){
        return func2(func1(a,b),c);
    }
}
// console.log(composeb(addb,mulb)(2,3,7));

const composeTwo=(func1,func2)=>{
    return function(...args){
        return func2(func1(...args));
    }
}
// console.log(composeTwo(add,square)(2,3,7,5));

const compose=(...funcs)=>{
    // console.log('fun:',...funcs);
    return function(...args){
        let result = funcs[0](...args);
        for(let i=1;i<funcs.length;i++){
            result=funcs[i](result);
        }
        return result;
    }
}
// console.log(compose(add,doubl,fill,max)(0,1,2));

const limitb=(func,lim)=>{
    let count =0;
    return function(x,y){
        if(count<lim){
            count++;
            return func(x,y);
        }else{
            return undefined;
        }
    }
}
// let adr = limitb(addb,2);
// console.log(adr(3,4));
// console.log(adr(3,4));

const limit=(func,lmt)=>{
    let count=0;
    return function(...x){
        if(count<lmt){
            count++;
            return func(...x);
        }else{
            return undefined;
        }
    }
}
// let adr = limit(add,1);
// console.log(adr(1,2,3,4));
// console.log(adr(1,2,3,4,5));

function* genFrom(x){
    while(true){
        yield x;
        x++;
    }
}
// let index = genFrom(0)
// console.log(index.next().value);
// console.log(index.next().value);
// console.log(index.next().value);

const genTo=(gen,lmt)=>{
    return{
        next(){
            const value=gen.next().value;
            if(value!==undefined && value<lmt){
                return {value};
            }else{
                return {done:true};
            }
        }
    }
}
// let l =genTo(genFrom(1),3)
// console.log(l.next().value)
// console.log(l.next().value)
// console.log(l.next().value)

const genFromToAlternative=(start,end)=>{
    return genTo(genFrom(start),end);
}

const genFromTo=(start,end)=>{
    return {
        next(){
            if(start<end){
                return{value:start++,done:false};
            }else{
                return {done:true};
            }
        }
    }
}

// let index = genFromTo(0,3);
// console.log(index.next().value);
// console.log(index.next().value);
// console.log(index.next().value);
// console.log(index.next().value);

const elementGen=(array,gen)=>{
    return{
        next(){
            const idx = gen.next().value;
            return {value:array[idx]}
        }
    }
}
// let e = elementGen(['a', 'b', 'c', 'd'], genFromTo(1, 3))
// console.log(e.next().value);
// console.log(e.next().value);
// console.log(e.next().value);

const element=(array,gen=undefined)=>{
    let i=0;
    return {
        next(){
            if(gen===undefined){
                return {value:array[i++]};
            }else{
                const idx = gen.next().value;
            return {value:array[idx]}
            }
        }
    } 
}
// let e = element(['a','b','c','d'])
// console.log(e.next().value);
// console.log(e.next().value);
// console.log(e.next().value);
// console.log(e.next().value);
// console.log(e.next().value);

const collect=(gen,array)=>{
    return{
        next(){
            const value = gen.next().value;
            if(value===0 || value) array.push(value);
            return {value};
        }
    }
}
// let array = []
// let col = collect(genFromTo(0, 5), array)
// console.log(col.next().value);
// console.log(col.next().value);
// console.log(col.next().value);
// console.log(array);

function* filter(gen,predicate){
    let next = gen.next();
    while(!next.done){
        if(predicate(next.value)){
            yield next.value;
        }
        next=gen.next();
    }
}

// let third = (val) => val % 3 === 0
// let fil = filter(genFromTo(0, 5), third)
// console.log(fil.next().value);
// console.log(fil.next().value);
// console.log(fil.next().value);

function* concatTwo(gen1,gen2){
    let nx1 = gen1.next();
    while(!nx1.done){
        yield nx1.value;
        nx1=gen1.next();
    }
    let nx2 = gen2.next();
    while(!nx2.done){
        yield nx2.value;
        nx2=gen2.next();
    }
}
// let con = concatTwo(genFromTo(0, 3), genFromTo(0, 2))
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);

function* concat(...gens){
    for(let gen of gens){
        let nex = gen.next();
        while(!nex.done){
            yield nex.value;
            nex = gen.next();
        }
    }
}
// let con = concat(genFromTo(0, 3), genFromTo(0, 2), genFromTo(5, 7))
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);
// console.log(con.next().value);

const counter=i=>{
    let count =i;
    return {
        up(){
            return ++count;
        },
        down(){
            return --count;
        }
    }
}

const counterTwo=i=>{
    let count=i;
    function up(){
        return ++count;
    }
    function down(){
        return --count;
    }
    return {up,down};
}
// let obj = counterTwo(10)
// let {up,down}=obj;
// console.log(up());
// console.log(down());
// console.log(down());
// console.log(up());

const revocableb=func=>{
    let invocable = true;
    function invoke(x,y){
        if(invocable){
            return func(x,y);
        }else{
            return undefined;
        }
    }
    function revoke(){
        invocable=false;
    }
    return {invoke,revoke};
}
// let rev = revocableb(addb);
// console.log(rev.invoke(30,4));
// rev.revoke();
// console.log(rev.invoke(5,7));

const revocable=func=>{
    let invocable = true;
    function invoke(...x){
        if(invocable){
            return func(...x);
        }else{
            return undefined;
        }
    }
    function revoke(){
        invocable=false;
    }
    return {invoke,revoke};
}
// let rev = revocable(add);
// console.log(rev.invoke(1,2,3,4));
// rev.revoke()
// console.log(rev.invoke(1,3,5,7));

const extract=(array,prop)=>{
    let rtn =[];
    for(let obj of array){
        rtn.push(obj[prop]);
    }
    return rtn;
}
// let people = [{ name: 'john' }, { name: 'bob' }]
// let names = extract(people, 'name')
// console.log(names);

const m=(value,source=value)=>{
    return {
        value:value,
        source:`${source}`
    }
}
// console.log(m(Math.PI,'pi'));

const addmTwo=(m1,m2)=>{
    return{
        value:m1.value+m2.value,
        source:`(${m1.source}+${m2.source})`
    }
}
// console.log(addmTwo(m(1),m(Math.PI,'pi')));

const addm=(...ms)=>{
    const value=ms.reduce((acc,m)=>acc+m.value,0);
    let source='';
    ms.forEach(m=>{
        source+=m.source+'+';
    })
    let newSource=source.split('').slice(0,source.length-1).join('')
    return {
        value:value,
        source:`(${newSource})`
    }
}
// console.log(addm(m(1),m(2),m(4)))

const liftmbM=(func,op)=>{
    return function(m1,m2){
        return {
            value:func(m1.value,m2.value),
            source:`(${m1.value}${op}${m2.value})`
        }
    }
}
// console.log(liftmbM(mul,'*')(m(3),m(4)));

const liftmb=(func,op)=>{
    return (x,y)=>{
        return{
            value:func(x,y),
            source:`${x}${op}${y}`
        }
    }
}
// console.log(liftmb(addb,'+')(3,4));

const liftm=(func,op)=>{
    return function(...ms){
        let valArr = [];
        ms.forEach(m=>valArr.push(m.value));
        let source='';
    ms.forEach(m=>{
        source+=m.source+`${op}`;
    })
    let newSource=source.split('').slice(0,source.length-1).join('')
    return{
        value:func(...valArr),
        source:`(${newSource})`
    }
    }
}
// console.log(liftm(add,'+')(m(3),m(4),m(5),m(6)));

const exp=(val)=>{
    if(Array.isArray(val)){
        let funcAtIndex =0;
        for(let i=0;i<val.length;i++){
            if(typeof val[i] === 'function'){
                funcAtIndex=i;
            }
        }
        let toPassArr1 = val.slice(0,funcAtIndex)
        let toPassArr2 =val.slice(funcAtIndex+1,val.length);
        return val[funcAtIndex](...toPassArr1,...toPassArr2);
    }else{
        return val;
    }
}
// console.log(exp([mul,1,2,4]));

const expn=value=>{
    if(Array.isArray(value)){
        const [func,...args]=value.map(expn);
        return func(...args);
    }else{
        return value;
    }
}
// console.log(expn([Math.sqrt,[add,[square,3],[square,4]]]));

const addg=value=>{
    if(value===undefined)return;
    return function addNxt(nxtVal){
        if(nxtVal!==undefined){
            value+=nxtVal;
            return addNxt;
        }
        return value;
    }

}
// console.log(addg(2)(2)());

const liftg=func=>{
    let val =undefined;
    return function computeNxt(nxtVal){
        if(nxtVal===undefined)return val;
        else if(nxtVal!==undefined){
            val=func(nxtVal,val);
            return computeNxt;
        }

    }
}
// console.log(liftg(mulb)(1)(2)(4)(8)());

const arrayg=value=>{
    if(value===undefined)return [];
    let rtn =[];
    rtn.push(value);
    return function pushVal(val){
        if(val!==undefined){
            rtn.push(val);
            return pushVal;
        }
        return rtn;
    }
}
// console.log(arrayg(3)(4)(5)());

const continuizeu=func=>{
    return (callback,arg)=>{
        return callback(func(arg));
    }
}
// console.log(continuizeu(Math.sqrt)(console.log,81));

const continuize=func=>{
    return (callback,...args)=>{
        return callback(func(...args));
    }
}
// console.log(continuize(mul)(console.log,81,4,2));

const vector=()=>{
    const arr=[];
    function append(x){
        arr.push(x);
    }
    function get(x){
        return arr[x]
    }
    function store(index,arg){
        arr.splice(index,0,arg);
    }
    return {append,get,store};
}

const vector1=()=>{
    let arr =[];
    return{
        append:(x)=>arr.push(x),
        get:(x)=>arr[x],
        store:(idx,arg)=>arr[idx]=arg
    }
}
// let v=vector();
// v.append(7)
// v.store(1,8)
// v.store(2,8)
// console.log(v.get(0),v.get(1),v.get(2));

const exploitVector=v=>{
    
     v.append=function(v){
        return this.arr;
     }
     return v.append();
}
// let v=vector()
// v.append(1)
// console.log(exploitVector(v));
// let v1 = exploitVector(v)
// v.append(2)

const vectorSafe=()=>{
    let arr=[];
    return{
        append:function(x){
            arr.push(x)
        },
        get:function(x){
            return arr[x];
        },
        store:function(idx,val){
            arr[idx]=val;
        }
    }
}
// let v = vectorSafe()
// v.append(1)
// console.log(exploitVector(v));

const pubsub=()=>{
    let func = null;
    return{
        subscribe:function(callback){
            func=callback;
        },
        publish:function(str){
            return func(str)
        }
    }
}
// let ps =pubsub()
// ps.subscribe(console.log)
// console.log(ps.publish('it works'));

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
    // accRecurse,
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
    // filterTail,
    concatTwo,
    concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
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
    // mapRecurse,
    // filterRecurse,
};
console.log(Object.keys(module.exports).length);