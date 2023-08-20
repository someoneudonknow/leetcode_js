/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0, end = start + k - 1;
    let maxAverage;
    let sum = 0;

    for(let i = 0;i < k;i++) {
        sum+=nums[i];
    }
    maxAverage = sum / k;

    for(let i = k;i < nums.length;i++) {
        sum = sum - nums[i - k] + nums[i];
        maxAverage = Math.max(maxAverage, sum / k);
    }

    return maxAverage;
};

export default findMaxAverage;