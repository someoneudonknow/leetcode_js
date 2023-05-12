/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let lo = 0,
    hi = nums.length - 1;

  let k = 0;

  while (lo < hi) {
    if (nums[lo] === val && nums[hi] !== val) {
      const tmp = nums[lo];
      nums[lo] = nums[hi];
      nums[hi] = tmp;
      lo++;
    } else if (nums[lo] === val && nums[hi] === val) {
      hi--;
    } else {
      lo++;
    }
  }

  for (let e of nums) {
    if (e !== val) {
      k++;
    }
  }

  return k;
};
// another solution without two pointers
function removeElement(nums, val) {
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
}

export default removeElement;
