/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = new Array(rowIndex + 1).fill(null).map(_ => []);

    for (let i = 0; i <= rowIndex; i++) {
        result[i][0] = 1;
        result[i][i] = 1;
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    
    return result[rowIndex]
};

export default getRow;