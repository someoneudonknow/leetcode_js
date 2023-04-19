var search = function (nums, target) {
  const n = nums.length;
  if (n == 0) return -1;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high + 1) / 2);
    if (nums[mid] == target) return mid;
    else if (target < nums[mid]) {
      high = mid - 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
    }
  }

  return -1;
};

export default search;
