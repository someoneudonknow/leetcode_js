/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  const evaluateNext = async () => {
    if (functions.length === 0) return;
    const currFn = functions.shift();
    await currFn();
    await evaluateNext();
  };
  const promiseArr = Array(n).fill().map(evaluateNext);
  await Promise.all(promiseArr);
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

export default promisePool;
