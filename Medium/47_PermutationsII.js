/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let store = new Map();

    const iter = (index, currArr, arr) => {
        if (arr.length == 0) {
            let isExists = store.get(currArr.toString());
            if (!isExists) {
                store.set(currArr.toString(), [...currArr])
            }
            return currArr;
        }
        for (let i = 0; i < arr.length; i++) {
            currArr[index] = arr[i]
            const splicedArr = arr.filter((e, index) => index != i)
            iter(index + 1, currArr, splicedArr)
        }
    }

    iter(0, new Array(nums.length), nums)

    return Array.from(store.values());
};

export default permuteUnique;