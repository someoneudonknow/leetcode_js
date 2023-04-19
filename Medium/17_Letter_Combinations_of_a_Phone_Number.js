/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const keyBoard = {
        2: ['a', 'b', 'c'],
        3: ['d','e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let result = [];
    if(digits.length === 0) return result;
    
    const iter = (enteredNum) => {
        const firstNum = enteredNum.slice(0,1);
        
        if(enteredNum.length == 1) return keyBoard[firstNum];
        const others = iter(enteredNum.slice(1));
        const n = keyBoard[firstNum].length;
        const m = others.length;
        let re = [];
        
        for(let i = 0;i < n;i++) {
            for(let j = 0;j < m;j++) {
                re = [...re, keyBoard[firstNum][i]+others[j]]
            }
        }
        
        return re
    }

    return iter(digits);
};

export default letterCombinations;