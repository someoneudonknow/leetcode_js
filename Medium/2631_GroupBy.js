/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const groupedData = {};

    for(const el of this) {
        const key = fn(el);

        if(!groupedData[key]) {
            groupedData[key] = [el];
        }else {
            let currentData = groupedData[key];
            currentData.push(el)
            groupedData[key] = currentData;
        }
    }
    
    return groupedData;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
