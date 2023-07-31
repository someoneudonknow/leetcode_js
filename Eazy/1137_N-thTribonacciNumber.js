/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0) return 0;

    let fib = [];

    fib[0] = 0;
    fib[1] = 1;
    fib[2] = 1;

    for(let i = 3;i <= n;i++) {
        fib[i] = fib[i-1] + fib[i-2] + fib[i-3];
    }

    return fib[n]
};

export default tribonacci;