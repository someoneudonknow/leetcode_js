/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let left = 0; right = nums.length - 1;
    let numOperations = 0;

    nums.sort((a,b)=>a-b)

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            numOperations++;
            right--;
            left++;
        } else if (nums[right] + nums[left] > k) {
            right--;
        } else {
            left++;
        }
    }

    return numOperations;
};

export default maxOperations;