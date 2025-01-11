/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const results = [];
    results.push([]);
    const iter = (index, ans) => {
        if(index > nums.length) return;

        for(let i = 0;i < nums.length;i++) {
            if(i < index) continue;
            ans.push(nums[i]);
            results.push([...ans]);
            iter(i+1, ans);
            ans.pop();
        }
    }
    iter(0, []);
    return results;
};

export default subsets;