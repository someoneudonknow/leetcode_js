/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    const initArray = [...Array(rowsCount)].map(e => Array(colsCount));

    const helper = (arr, j, isUp) => {
        if(arr.length === 0) return
        const currentEls = arr.splice(0, rowsCount);
        
        if (!isUp) {
            for (let i = 0; i < rowsCount; i++) {
                if (currentEls[i]) {
                    initArray[i][j] = currentEls[i];
                } else {
                    initArray[i][j] = null;
                }
            }
        }else {
            for (let i = rowsCount-1, k = 0; i >= 0; i--, k++) {
                if (currentEls[i]) {
                    initArray[k][j] = currentEls[i];
                } else {
                    initArray[k][j] = null;
                }
            }
        }
        isUp = !isUp;
        ++j;
        helper(arr, j, isUp)
    }
    
    helper(this, 0, false);

    return initArray;
}
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */