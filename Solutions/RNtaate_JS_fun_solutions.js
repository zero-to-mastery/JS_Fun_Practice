// Write a function identity that takes an argument and returns that argument
const identity = (x) => ( x )

// Write a binary function addb that takes two numbers and returns their sum
const addb = ( a, b ) => {
  if(typeof a != 'number' || typeof b != 'number') {
    return 'Please provide arguments that are numbers'
  }

  return ( a + b)
};