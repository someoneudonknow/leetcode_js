/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let results = [];
    
    const iter = (index, currArr, arr) => {
         if(arr.length == 0) {
            results.push([...currArr])
            return currArr;
        }
        for(let i = 0;i < arr.length;i++) {
            currArr[index] = arr[i]
            const splicedArr = arr.filter((e,index) => index != i)
            iter(index + 1, currArr, splicedArr)
        }
    }
    
    iter(0, new Array(nums.length), nums)
    
    return results;
};

export default permute;