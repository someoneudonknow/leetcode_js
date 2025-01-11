/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
   
    const clone = [...nums];
    
    for(let i = 0;i < nums.length;i++) {
        nums[(i + k) % nums.length] = clone[i]
    }
};

export default rotate;