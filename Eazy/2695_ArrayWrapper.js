/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.innerArray = nums
};

ArrayWrapper.prototype.valueOf = function() {
    return this.innerArray.reduce((acc, val) => acc + val, 0)
}

ArrayWrapper.prototype.toString = function() {
    return "[" + this.innerArray.join() + "]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

export default ArrayWrapper;