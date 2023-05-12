/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// My stupid solution ( TL :(((( )
var groupAnagrams1 = function (strs) {
  const n = strs.length;
  let cnt = 0;
  let result = [];

  while (cnt < n) {
    const firstEl = strs[0];
    let smallGroup = [];
    smallGroup.push(firstEl);
    cnt++;
    strs.splice(0, 1);

    let loopNum = strs.length;
    let i = 0;

    while (i < loopNum) {
      let isContain = true;
      if (strs[i].length !== firstEl.length) {
        isContain = false;
      }

      for (let j = 0; j < strs[i].length; j++) {
        const arr1 = strs[i].split("").sort().join("");
        const arr2 = firstEl.split("").sort().join("");
        if (arr1 !== arr2) {
          isContain = false;
          break;
        }
      }
      if (isContain) {
        smallGroup.push(strs[i]);
        strs.splice(i, 1);
        cnt++;
        loopNum = strs.length;
        i = 0;
      } else {
        i++;
      }
    }

    result.push(smallGroup);
  }

  return result;
};

// faster solution using Map object
var groupAnagrams2 = function(strs) {
    const myMap = new Map();

    for(let i = 0;i < strs.length;i++) {
        const sortedString = strs[i].split("").sort().join("");
        if(myMap.has(sortedString)) {
            myMap.set(sortedString, [...myMap.get(sortedString), strs[i]]);
        }else{
            myMap.set(sortedString, [strs[i]]);
        }
    }
   
    return Array.from(myMap.values());
};

export default groupAnagrams2;