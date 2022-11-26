// Write a function identity that takes an argument and returns that argument

const identity = (name) => {
    let question = prompt('What is your name?');
    name = question;
    console.log(name);
  
}

// Write a binary function addb that takes two numbers and returns their sum

const addb = (a) => (b) => a + b;


// Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

// Write a binary function maxb that takes two numbers and returns the larger one

const maxb = (a, b) => {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}



