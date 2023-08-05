/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = new Map();

    candidates.sort((a, b) => a - b);

    const backtrack = (index, curr, currSum, currCandidates) => {
        if(currSum > target || curr.length > currCandidates.length) return;
        if(currSum == target) {
            const clone = [...curr].sort().toString();
            if(!results.has(clone)) {
                results.set(clone, [...curr])
            }
            return;
        };
        
        for(let i = index;i < currCandidates.length;i++) {
            if(i > index && currCandidates[i] === currCandidates[i-1]) continue;
            curr.push(currCandidates[i]);
            currSum += currCandidates[i];
            backtrack(i + 1, curr, currSum, currCandidates);
            currSum -= currCandidates[i];
            curr.pop();
        }
    }
    
    backtrack(0, [], 0, candidates)
    
    return Array.from(results.values());
};

export default combinationSum2;