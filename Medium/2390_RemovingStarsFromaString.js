/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    
    for(let i = 0;i < s.length;i++) {
        if(s.charAt(i) !== '*') {
            stack.push(s.charAt(i))
        }else {
            stack.pop();
        }
    }
    
    return stack.join("");
};

export default removeStars;