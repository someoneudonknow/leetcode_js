/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0;i < haystack.length;i++) {
        if(i >= (needle.length-1)) {
            let cnt = 0;
            for(let j = 0;j < needle.length;j++) {
                if(needle[j] == haystack[i - (needle.length-1)+j]) {
                    cnt++;
                }else{
                    cnt = 0;
                }
            }
            if(cnt == needle.length) {
                return i - (needle.length-1);
            }
        }
    }
    
    return -1;
};

export default strStr;