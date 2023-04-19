/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const correctBracketPairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let needClose = s[0];
    let unCloseList = [];

    for(let i = 0;i < s.length;i++){
       if(correctBracketPairs[needClose] == s[i]) {
           unCloseList.pop();
           needClose = unCloseList[unCloseList.length - 1];
       }else {
           unCloseList.push(s[i]);
           needClose = s[i];
       }
    }

    return (unCloseList.length == 0);
}

export default isValid;