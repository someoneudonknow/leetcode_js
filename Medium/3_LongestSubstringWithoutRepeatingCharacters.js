// my stupid solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;
  let longestLength = 0;
  const n = s.length;
  let lettersMap = new Map();

  while (right <= n) {
    if (isNaN(lettersMap.get(s[right]))) {
      lettersMap.set(s[right], 1);
    } else {
      if (right - left > longestLength) {
        longestLength = right - left;
      }
      let newMap = Array.from(lettersMap);
      newMap.splice(0, right + 1);
      lettersMap = new Map(newMap);
      left = left + 1;
      right = left;
      lettersMap.set(s[left], 1);
    }
    if (right === n) {
      if (right - left > longestLength) {
        longestLength = right - left;
      }
    }
    right++;
  }

  return longestLength;
};
