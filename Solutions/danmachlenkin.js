const identity = (argument) => argument ;
/////////////////////////////////////////
const addb = (a,b) => a + b ;
/////////////////////////////////////////
const subb = (a,b) => a-b;
/////////////////////////////////////////
const mulb = (a,b) => a*b;
/////////////////////////////////////////
const minb = (a,b) => a < b ? a : b ;
/////////////////////////////////////////
const maxb = (a,b) => a > b ? a : b ;
/////////////////////////////////////////
const add = (...nums) => {
   return nums.reduce((acc,current) =>{
       return acc+current;
   })
};
/////////////////////////////////////////
const sub = (...nums) => {
    return nums.reduce((acc,current) => {
        return acc - current;
    },0)
};
/////////////////////////////////////////
const mul = (...nums) => {
    return nums.reduce((acc,current) => {
        return acc * current;
    },1)
};
/////////////////////////////////////////