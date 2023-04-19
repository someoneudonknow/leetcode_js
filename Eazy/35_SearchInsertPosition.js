var searchInsert = function (nums, target) {
  if (nums.length == 0) return 0;
  let low = 0,
    high = nums.length;

  while (low <= high) {
    let mid = Math.floor((low + high + 1) / 2);
    if (nums[mid] == target) return mid;
    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[high] > target ? high - 1 : high + 1;
};

export default searchInsert;
