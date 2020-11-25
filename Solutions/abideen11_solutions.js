// takes an argument and returns that argument
let identity = (input) => input

// takes two numbers and returns their sum
let addb = (a,b) => a+b

// takes two numbers and returns their difference
let subb = (a,b) => Math.abs(a-b)

// takes two numbers and returns their product
let mulb = (a,b) => a*b

// takes two numbers and returns the smaller one
let minb = (a,b) => a < b ? a : b

// takes two numbers and returns the larger one
let maxb = (a,b) => a > b ? a : b

// takes a number and returns an array with that many numbers equal to the given number
let fill = (n) => {
    let array = []
    for(let i = 0; i < n; i++) {array.push(n)}
    return array
}

// takes two functions and returns a function that calls them both
let composeTwo = (func1,func2) => {
    return callFunc1Func2 = () => {
        func1()
        func2()
    }
}