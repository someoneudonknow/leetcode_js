/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    let start = 0, end = n - 1, cnt = n - 1;
    let resultArr = new Array(n);
    while(start <= end) {
        if((Math.abs(nums[start]) < Math.abs(nums[end]) )) {
            resultArr[cnt--] = nums[end] * nums[end];
            end--;
        }else {
            resultArr[cnt--] = nums[start] * nums[start];
            start++;
        }
    }

    return resultArr;
};

export default sortedSquares;