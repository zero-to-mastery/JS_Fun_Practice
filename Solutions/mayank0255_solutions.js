const identity = x => x;

const addb = (a, b) => a + b;

const subb = (a, b) => a - b ;

const mulb = (a, b) => a * b;

const minb = (a, b) => a < b ? a : b;

const maxb = (a, b) => a > b ? a : b;

const add = (...numbers) => numbers.reduce((total, num) => total + num);

const sub = (...numbers) => numbers.reduce((total, num) => total - num);

const mul = (...numbers) => numbers.reduce((total, num) => total * num);

const min = (...numbers) => {
    let x = numbers[0];
    numbers.forEach(number => {
        if (x > number) x = number;
    });
    return x;
}

const max = (...numbers) => {
    let x = numbers[0];
    numbers.forEach(number => {
        if (x < number) x = number;
    });
    return x;
}

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
    max
};