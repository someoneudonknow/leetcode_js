/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max = -Infinity;
    const check = (c) => c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    let cnt = 0;
    
    for(let i = 0;i < k;i++) {
        if(check(s.charAt(i))) {
            cnt++;
        }
    }
    max = cnt;
    if(max === k) return max;
    
    for(let i = k;i < s.length;i++) {
        if(check(s.charAt(i - k)) && !check(s.charAt(i))) {
            cnt--;
        }else if (check(s.charAt(i)) && !check(s.charAt(i - k)) ) {
            cnt++;
        }
        max = Math.max(max, cnt);
    }
    
    return max;
};

export default maxVowels;