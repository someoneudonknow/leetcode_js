/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0,
      right = 0;
    const n = nums.length;

    while(right < n) {
        if(nums[right] != nums[left]) {
            nums[++left] = nums[right];
        }
        right++;
    }
    
    return left + 1;
};

export default removeDuplicates;