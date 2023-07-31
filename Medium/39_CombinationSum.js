/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const results = new Map();
    
    const iter = (curr, currSum) => {
        if(currSum >= target) {
            if(currSum == target) {
                const clone = [...curr].sort().toString();
                if(!results.has(clone)) {
                    results.set(clone, [...curr]);
                }
            }
            return;
        }
        
        for(let i = 0;i < candidates.length;i++) {
            curr.push(candidates[i]);
            currSum += candidates[i];
            iter(curr, currSum);
            curr.pop()
            currSum -= candidates[i];
        }
    }
    
    iter([], 0)
    
    return Array.from(results.values());
};

export default combinationSum;