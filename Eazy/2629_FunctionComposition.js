/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    let currentData;
    return function (x) {
        if (functions.length <= 0) return x;
        
        for (let i = functions.length - 1; i >= 0; i--) {
            if (!currentData) {
                currentData = functions[i](x);
            } else {
                currentData = functions[i](currentData)
            }
        }

        return currentData
    }
};

//OR with reduce right methods and one line of code
var compose = functions => functions.length === 0 ? x => x : functions.reduceRight((prev, curr) => x => curr(prev(x)));

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */