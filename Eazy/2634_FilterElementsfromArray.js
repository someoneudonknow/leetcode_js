/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];
    const arrLength = arr.length;

    for(let i = 0;i < arrLength;i++) {
        if(!!fn(arr[i], i)) {
            result = [...result, arr[i]];
        }
    }

    return result;
};

export default filter;