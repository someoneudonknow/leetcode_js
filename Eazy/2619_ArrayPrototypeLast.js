//cach 1
Array.prototype.last = function() {
    return (this.length == 0) ? -1 : this[this.length-1];
};

//cach 2
Array.prototype.last = function() {
    return this[this.length-1] ?? -1;
};
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */