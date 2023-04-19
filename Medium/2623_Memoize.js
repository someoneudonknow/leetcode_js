/**
 * @param {Function} fn
 */
export default function memoize(fn) {
    cache = {};
    let cnt = 0;
    return function (...args) {
        if (cache[args.join()] === null ||  cache[args.join()] === undefined) {
            cache[args.join()] = fn(...args);
        }

        return cache[args.join()];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */