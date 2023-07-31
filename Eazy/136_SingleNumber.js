/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let left = 0, right = 0,cnt = 0;
    nums.sort();

    for(const el of nums) {
        if(nums[right] == nums[left]) {
            ++cnt;
        }
        if(cnt > 1 && nums[right] != nums[left]) {
            left = right;
            cnt = 1;
        }
        right++;
    }

    return nums[left];
};

export default singleNumber;