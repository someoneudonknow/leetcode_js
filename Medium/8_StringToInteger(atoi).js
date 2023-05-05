/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const n = s.length;
  let isNegative = false;
  let isNumberPart = false;
  let number = [];
  let startNumberPart = null;
  let isWhiteSpace = false;

  for (let i = 0; i < n; i++) {
    const currentCharCode = s.charCodeAt(i);

    if (s[i] === " ") {
      isWhiteSpace = true;
    } else {
      isWhiteSpace = false;
    }

    if (
      number.length == 0 &&
      !isWhiteSpace &&
      !(currentCharCode >= 48 && currentCharCode <= 57) &&
      s[i] !== "+" &&
      s[i] !== "-"
    ) {
      return 0;
    }

    if ((s[i] === "-" || s[i] === "+") && number.length == 0) {
      if (s[i] === "-") {
        if (
          s[i + 1] !== "-" &&
          !(s.charCodeAt(i + 1) >= 48 && s.charCodeAt(i + 1) <= 57)
        ) {
          return 0;
        }
      }
      if (!(s.charCodeAt(i + 1) >= 48 && s.charCodeAt(i + 1) <= 57)) return 0;
    }

    if (currentCharCode >= 48 && currentCharCode <= 57) {
      if (!startNumberPart) {
        startNumberPart = i;
      }
      isNumberPart = true;
    } else {
      isNumberPart = false;
      if (number.length > 0) break;
    }

    if (isNumberPart) {
      number.push(s[i]);
    }
  }

  let j = startNumberPart - 1;

  while (j >= 0) {
    if (s[j] === "-" && isNegative) {
      isNegative = false;
    } else if (s[j] === "-" && !isNegative) {
      isNegative = true;
    }

    j--;
  }

  const numLength = number.length;
  let num = 0;

  for (let i = 0; i < numLength; i++) {
    num = num + parseInt(number.shift()) * Math.pow(10, number.length);
  }

  if (isNegative && num != 0) {
    num = -num;
  }

  if (num < -2147483648) {
    num = -2147483648;
  } else if (num > 2147483647) {
    num = 2147483647;
  }

  return num;
};

export default myAtoi;
