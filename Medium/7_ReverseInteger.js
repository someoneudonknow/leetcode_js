/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const UP_LIMIT = 2147483648 - 1;
  const DOWN_LIMIT = -2147483648;
  const numStr = x.toString();
  const numArr = numStr.split("");
  let sign = null;

  if (numArr[0] === "-") {
    sign = numArr.shift();
  }

  let reversed = parseInt(numArr.reverse().join(""));

  if (sign === "-") {
    reversed = -reversed;
  }

  if (reversed > UP_LIMIT || reversed < DOWN_LIMIT) return 0;

  return reversed;
};

export default reverse;
