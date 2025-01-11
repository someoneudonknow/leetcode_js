import convert from "./Medium/6_ZigzagConversion.js";

var getHint = function (secret, guess) {
  let x = 0,
    y = 0;
  const matrix = new Array(secret.length + 1)
    .fill()
    .map((_) => new Array(guess.length + 1).fill(false));

  for (let i = 1; i < secret.length; i++) {
    for (let j = 1; j < guess.length; j++) {
      if (guess[i - 1] === secret[j - 1] && i === j && !matrix[i - 1][j]) {
        matrix[i][j] = true;
        x++;
        continue;
      } else if (
        guess[i - 1] === secret[j - 1] &&
        i !== j &&
        !matrix[i - 1][j]
      ) {
        y++;
        matrix[i][j - 1] = true;
      } else {
        matrix[i][j - 1] = matrix[i - 1][j];
      }
    }
  }

  console.log({ matrix, x, y });
};

var longestValidParentheses = function (s) {
  if (s.length === 0) return 0;

  const pairs = { "(": ")" };
  let numResult = 0;
  const unCloseStack = [];

  unCloseStack.push({ v: s[0], i: 0 });

  for (let i = 1; i < s.length; i++) {
    if (pairs[unCloseStack[unCloseStack.length - 1]?.v] === s[i]) {
      unCloseStack.pop();
      numResult += 2;
    } else {
      unCloseStack.push({ v: s[i], i: i });
    }
  }

  if (unCloseStack.length > 0) {
    const newUnclose = unCloseStack.map((v) => v.i);

    newUnclose.push(0);
    newUnclose.push(s.length - 1);
    newUnclose.sort((a, b) => a - b);

    const lengthResult = [];

    for (let i = 1; i < newUnclose.length; i++) {
      const sub = newUnclose[i] - newUnclose[i - 1];

      if (sub >= 2) {
        lengthResult.push(sub);
      }
    }

    numResult = Math.max(...lengthResult);
  }

  return numResult;
};

console.log(longestValidParentheses(")()()()("));
