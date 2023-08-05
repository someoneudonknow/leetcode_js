var jump1 = function(nums) {
    let minStep = +Infinity;
    
    const trys = (steps, index, cnt) => {
        if(index > nums.length) return;
        if(index == nums.length - 1) {
            minStep = Math.min(cnt, minStep);
            return;
        }

        for(let i = 1;i <= steps;i++) {
            ++cnt;
            trys(nums[index + i], index + i, cnt);
            cnt--;
        }
    }
    
    trys(nums[0], 0, 0)
    
    return minStep;
}; // backtracking approach ( TLE )

var jump = function(nums) {
    let dp = new Array(nums.length).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1;i < nums.length;i++) {
        for(let j = 0;j < i;j++) {
            if(nums[j] >= i-j) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    
    return dp[nums.length - 1];
}; // dynamic programing approach ( good solution )

export default jump;



