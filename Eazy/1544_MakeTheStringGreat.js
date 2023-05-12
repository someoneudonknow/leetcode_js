/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const n = s.length;

  if (n === 1) return s[0];

  let rs = s.split("");
  let isValid = false;

  while (!isValid) {
    let cnt = 0;
    if (rs.length === 1) {
      isValid = true;
    }

    for (let i = 0; i < rs.length - 1; i++) {
      if (Math.abs(rs[i].charCodeAt(0) - rs[i + 1].charCodeAt(0)) === 32) {
        rs.splice(i, 2);
        isValid = false;
        cnt++;
        break;
      }
    }

    if (cnt === 0) {
      isValid = true;
    }
  }

  return rs.join("");
};

export default makeGood;