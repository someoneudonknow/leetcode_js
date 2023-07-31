/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine2 = function(n, k) {
    const results = new Map();
    
    const iter = (index, currArr) => {
        if(currArr.length == k) {
            const cloneArr = [...currArr];
            if(!results.has(cloneArr.sort().toString())) {
                results.set(cloneArr.sort().toString(), [...currArr]);
            }
            return;
        }
        for(let i = 1;i <= n;i++) {
            if(currArr.includes(i)) {
                continue;
            }
            currArr[index] = i;
            iter(index + 1, currArr);
            currArr.pop();
        }
    }
    iter(0, []);
    
    return Array.from(results.values());
};

var combine = function(n, k) {
    const results = [];
    
    const iter = (currArr) => {
        if(currArr.length == k) {
            results.push([...currArr]);
            return;
        }
        for(let i = (currArr[currArr.length - 1] || 0) + 1;i <= n;i++) {
            currArr.push(i);
            iter(currArr);
            currArr.pop();
        }
    }
    iter([]);
    
    return results;
};

export default combine;