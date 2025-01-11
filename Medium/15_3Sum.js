/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const numLength = nums.length;
  nums.sort((a, b) => a - b);
  const results = new Set();

  for (let i = 0; i < numLength; i++) {
    let lo = i + 1,
      hi = nums.length;
    while (lo < hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        results.add([nums[i], nums[lo++], nums[hi--]].join());
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return Array.from(results).map((a) => a.split(","));
};

export default threeSum;
