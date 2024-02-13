/* 
 * @author Bltzz
 *
*/

function _check (x, y) {
    if (typeof x !== 'number')
      throw new TypeError(`${x} is not a number`);
    if (typeof y !== 'number') 
      throw new TypeError(`${y} is not a number`);
}

/**
 * identity(x) ⇒ any
 * @param {*} x - Any value
 * @returns {*} - The same value
 */
function identity(x){
    return x
}

/**
 * addb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x plus y
 */
function addb(a, b) {
    _check(a, b)
    return a + b
}

/**
 * subb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x minus y
 */
function subb(a, b) { 
    _check(a, b)
    return a - b
}

/**
 * mulb(a, b) ⇒ number
 * @param {*} x - Any value
 * @param {*} y - Any value
 * @returns {*} - x times y
 */
function mulb(a, b) { 
    _check(a, b)
    return a * b
}


module.exports = {
    identity,
    addb,
    subb,
    mulb
}
