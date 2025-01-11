"use strict";

const convert = function (s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
};

// Test cases
const testCases = [
  { input: ["PAYPALISHIRING", 3], expected: "PAHNAPLSIIGYIR" },
  { input: ["PAYPALISHIRING", 4], expected: "PINALSIGYAHRPI" },
  { input: ["A", 1], expected: "A" },
  { input: ["AB", 1], expected: "AB" },
  { input: ["ABCDE", 4], expected: "ABCED" },
];

// Run test cases
testCases.forEach((testCase, index) => {
  const [s, numRows] = testCase.input;
  const result = convert(s, numRows);
  const passed = result === testCase.expected;
  console.log(`Test case ${index + 1}: ${passed ? '\x1b[32mPASSED\x1b[0m' : '\x1b[31mFAILED\x1b[0m'}`);
  if (!passed) {
    console.log(`  Input: ${JSON.stringify(testCase.input)}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Got: ${result}`);
  }
});

// export default convert;
