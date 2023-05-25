/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Dynamic programming
var isSubsequence = function(s, t) {
    const sameChars = new Array(s.length+1).fill(null).map(_ => new Array(t.length+1).fill(0));

    for(let i = 1;i <= s.length;i++) {
        for(let j = 1;j <= t.length;j++) {
            if(t[j-1] === s[i-1]) {
                sameChars[i][j] = sameChars[i-1][j-1] + 1;
            }else {
                sameChars[i][j] = Math.max(sameChars[i][j-1], sameChars[i-1][j]);
            }
        }
    }
    
    return sameChars[s.length][t.length] === s.length ? true : false;
};

export default isSubsequence;