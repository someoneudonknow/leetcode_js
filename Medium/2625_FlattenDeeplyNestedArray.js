/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if(n === 0) {
        return arr;
    }
    
    let re = []
    for(let el of arr) {
        if(Array.isArray(el)) {
            re.push(...flat(el, n-1)) ;
        }else {
            re.push(el)
        }
    }

    return re
};

export default flat;