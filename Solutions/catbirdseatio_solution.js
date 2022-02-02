const oddOrEven = a => a % 2 === 0 ? 'even' : 'odd';

const max = (...numbers) => numbers.reduce((max, curr) => curr > max ? curr : max);

module.exports = {
    oddOrEven,
    max
}