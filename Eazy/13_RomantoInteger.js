/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let left = 0,
    right = left + 1;
  const n = s.length;
  let sum = 0;

  while (left < n) {
    if (
      (s[left] === "I" && (s[right] === "V" || s[right] === "X")) ||
      (s[left] === "X" && (s[right] === "L" || s[right] === "C")) ||
      (s[left] === "C" && (s[right] === "D" || s[right] === "M"))
    ) {
      const re = symbols[s[right]] - symbols[s[left]];
      sum += re;
      right += 2;
      left += 2;
    } else {
      sum += symbols[s[left]];
      left++;
      right++;
    }
  }

  return sum;
};
