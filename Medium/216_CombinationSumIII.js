/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const results = [];
    
    const iter = (index, ans) => {
        if(index === k) {
            const sum = ans.reduce((a, c) => a + c, 0);
            if(sum === n) {
                results.push([...ans]);
            }
            return;
        }
        for(let i = 1;i <= 9;i++) {
             if(i <= ans[ans.length - 1]) {
                 continue;
             }
             ans.push(i);
             iter(index + 1, ans);
             ans.pop();
        }
    }

    iter(0, []);

    return results;
};

export default combinationSum3;