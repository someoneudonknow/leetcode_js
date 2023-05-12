/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const symbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM",
  };

  let roman = "";
  let cal = num;

  while (cal > 0) {
    const div = cal - (cal % 10 ** ((Math.log(cal) * Math.LOG10E + 1 | 0) - 1));
    if (!symbols[div]) {
      let cnt = div;
      let leftOver = div;
      while (leftOver > 0) {
        if (symbols[cnt]) {
          roman += symbols[cnt];
          leftOver -= cnt;
          cnt = leftOver;
        } else {
          cnt--;
        }
      }
    } else {
      roman += symbols[div];
    }

    cal = cal % 10 ** ((Math.log(cal) * Math.LOG10E + 1 | 0) - 1);
  }

  return roman;
};

export default intToRoman;
