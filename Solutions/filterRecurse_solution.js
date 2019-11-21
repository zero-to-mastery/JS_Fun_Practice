/*
filterRecurse([ 1, 2, 3, 4 ], x => x % 2 === 0) // [ 2, 4 ]
*/

let filterRecurse = (arr,func) =>{
    if (arr.length){

        if (func(arr[0])){
            return [arr[0]].concat(filterRecurse(arr.slice(1,arr.length),func))
        }
        else{
            return filterRecurse(arr.slice(1,arr.length),func)
        }
        
    }
    else{
        return []
    }
    
}

console.log(filterRecurse([ 1, 2, 3, 4 ], x => x % 2 === 0))





