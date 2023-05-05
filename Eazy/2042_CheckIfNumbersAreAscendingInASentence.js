/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let num = -Infinity;
    const arr = s.split(' ');

    for(let n of arr) {
        if(!isNaN(n)) {
            const n1 = parseInt(n);
            if(n1 > num) {
                num = parseInt(n);
            }else {
                return false;
            }
        }
    }

    return true;
};

export default areNumbersAscending;