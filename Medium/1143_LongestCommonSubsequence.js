/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const n1 = text1.length;
    const n2 = text2.length;
    const ans = new Array(n1 + 1).fill().map(() => new Array(n2 + 1).fill());
    
    for(const i in ans) {
        ans[i][0] = 0;
    }

    for(const j in ans[0]) {
        ans[0][j] = 0;
    }

    for(let i = 1;i <= n1;i++) {
        for(let j = 1;j <= n2;j++) {
            if(text1.charAt(i - 1) == text2.charAt(j - 1)) {
                ans[i][j] = ans[i-1][j-1] + 1; 
            }else {
                ans[i][j] = Math.max(ans[i-1][j], ans[i][j-1]);
            }
        }
    }

    return ans[n1][n2];
};

export default longestCommonSubsequence;