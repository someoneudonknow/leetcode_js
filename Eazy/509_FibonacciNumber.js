/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0) return 0;
    let fib = [];

    fib[0] = 1;
    fib[1] = 1;

    for(let i = 2;i < n;i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n-1];
};

export default fib;