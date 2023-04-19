/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var totalSum = 0;
    var leftSum = 0;
    var arrLenght = nums.length;
  
    for(let i = 0;i < arrLenght;i++){
       totalSum+=nums[i];
    }
  
    for(let i = 0;i < arrLenght;i++){
        if(i!=0) leftSum+=nums[i-1];
        if(totalSum - leftSum - nums[i] == leftSum){
            return i;
        }
    }
  
    return -1;
  };

  export default pivotIndex;