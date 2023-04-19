var runningSum = function(nums) {
    if(nums.length <= 0) return [];
    let sum = 0;

    for(let i = 0;i < nums.length; i++) {
        sum += nums[i];
    }

    return [...runningSum(nums.slice(0, -1)), sum];
};

var fasterRunningSum = function(nums) {
    for(let i = 0;i < nums.length; i++) {
        nums[i] = nums[i-1];
    }

    return nums;
}

export {runningSum, fasterRunningSum};