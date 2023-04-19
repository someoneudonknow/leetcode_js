/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let acc = init;

  for (let curr of nums) {
    acc = fn(acc, curr);
  }

  return acc;
};

export default reduce;
