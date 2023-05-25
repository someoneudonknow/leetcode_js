/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let lo = 0; hi = nums.length - 1;
    let result = [-1, -1];
    
   while(lo <= hi) {
       if(nums[lo] !== target) {
           lo++;
       }else {
           result[0] = lo;
       }

       if(nums[hi] !== target) {
           hi--;
       }else {
           result[1] = hi;
       }
       
       if(result[0] !== -1 && result[1] !== -1) return result;
   }
   
   return result;
};

export default searchRange;