/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    if(arr.length === 0) return [];
    const re = [];
    for(let i = 0;i < size;i++) {
        if(arr[i] !== undefined) {
            re.push(arr[i]);
        }else {
            break;
        }
    }
    arr.splice(0,size);

    return [re, ...chunk(arr,size)];
};

export default chunk;