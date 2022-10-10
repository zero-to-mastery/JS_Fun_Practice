//Write a function to convert a binary number to a decimal number

const binaryDec=(input)=> { 
    return parseInt((input + '').replace(/[^01]/gi, ''), 2);
}
binaryDec('110011');

