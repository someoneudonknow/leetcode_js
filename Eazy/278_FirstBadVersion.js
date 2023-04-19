var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
       let low = 0, high = n;

       while(low < high) {
           let mid = Math.floor((low + high) / 2);
           if(isBadVersion(mid)) {
               high = mid;
           }else {
               low = mid + 1;
           }
       }

       return low;
    };
};

export default solution;