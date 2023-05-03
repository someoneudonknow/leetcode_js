/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxVolume = -Infinity;
    let hi = height.length-1, lo = 0;

    while(lo <= hi) {
        const h = Math.min(height[lo], height[hi]);
        const w = (hi) - lo;
        const area =  w * h;

        if(area > maxVolume) {
            maxVolume = area;
        }

        if(height[lo] > height[hi]) {
            hi--;
        }else {
            lo++;
        }
    }
    
    
    return maxVolume;
};

export default maxArea;