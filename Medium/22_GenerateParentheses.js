/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const results = [];
    
    const backtrack = (currentLength, close, open, ans) => {
        if(currentLength === n*2) {
            results.push([...ans].join(""));
            return
        }
        
        if(currentLength === 0) {
            ans.push("(");
            backtrack(currentLength + 1,close, open + 1, ans);
            ans.pop();
        }else if (close === open ){
            ans.push("(");
            backtrack(currentLength + 1,close, open + 1, ans);
            ans.pop();
        } else if(open === n) {
            ans.push(")");
            backtrack(currentLength + 1,close + 1, open, ans);
            ans.pop();
        } else {
            ans.push("(");
            backtrack(currentLength + 1,close, open + 1, ans);
            ans.pop();
            ans.push(")");
            backtrack(currentLength + 1,close + 1, open, ans);
            ans.pop();
        }
    }
    
    backtrack(0, 0, 0, [])
    
    return results;
};

export default generateParenthesis;