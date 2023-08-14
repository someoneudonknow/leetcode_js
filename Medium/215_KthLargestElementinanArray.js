/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(nums.length < k) return;
    let max = Math.max(...nums);
    let index = 0;
    
    while(k > 0) {
        let currentMax = -Infinity;
        
        for(let i = 0;i < nums.length;i++) {
            if(nums[i] <= max && nums[i] >= currentMax) {
                currentMax = nums[i];
                index = i;
            }
        }
        nums.splice(index, 1)
        max = currentMax;
        k--;
    }
    
    return max;
};
// quite slow solution
// using priority queue for better time complexity
export default findKthLargest;