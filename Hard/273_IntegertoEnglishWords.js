/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) return "Zero";

  const LOWER_THAN_20 = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const LOWER_THAN_100 = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const helper = (num) => {
    if (num >= 1000000000) {
      return (
        helper(parseInt(num / 1000000000)) +
        " Billion" +
        helper(num % 1000000000)
      );
    } else if (num >= 1000000) {
      return (
        helper(parseInt(num / 1000000)) + " Million" + helper(num % 1000000)
      );
    } else if (num >= 1000) {
      return helper(parseInt(num / 1000)) + " Thousand" + helper(num % 1000);
    } else if (num >= 100) {
      return helper(parseInt(num / 100)) + " Hundred" + helper(num % 100);
    } else if (num >= 20) {
      return " " + LOWER_THAN_100[parseInt(num / 10)] + helper(num % 10);
    } else if (num > 0) {
      return " " + LOWER_THAN_20[parseInt(num)];
    } else {
      return "";
    }
  };

  return helper(num).trim();
};

export default numberToWords;
