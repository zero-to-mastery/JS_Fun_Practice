

// addition of whole array into one number using rest operator 

function addb(...arg){
  let count = 0;
    for (let arg of arguments)
    count += arg ;
    return count
}

let play = addb(1,2,3,4,6);

console.log(play);



// multiplication into one number---------------

function mulb(...numbers){
    return numbers.reduce((a,b)=>a*b)
}

console.log(mulb(1,2,3));

// concat ------------------------

const a= [1,2,3,4];

const b= [6,7,8];

function concat(){
    let check = b.concat(a);
    return check;
}

console.log(concat());

// min -----------------

function min(array){
    return Math.min(...array);
}


let minimum = min([1,2,3,4,5]);

console.log(minimum);

// max --------------------

function max(array){
    return Math.max(...array);
}


let maximum = max([1,2,3,4,5]);

console.log(maximum);

