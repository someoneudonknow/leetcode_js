/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const factors = [];

    for(let i = 0;i <= n / 2;i++) {
        if(n % i === 0) {
            factors.push(i);
        }
    }

    factors.push(n);
    return factors[k - 1] ? factors[k - 1] : -1;
};

export default kthFactor;