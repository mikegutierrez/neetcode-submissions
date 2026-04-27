class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            const leftVal = row[0];
            const rightVal = row[row.length - 1];
            if (leftVal <= target && rightVal >= target) {
                let left = 0;
                let right = row.length - 1;
                while (left <= right) {
                    const middleIdx = Math.floor((left + right) / 2);
                    const middleVal = row[middleIdx];
                    if (middleVal === target) return true;
                    if (target < middleVal) right = middleIdx - 1;
                    if (target > middleVal) left = middleIdx + 1;
                }
            }
        }
        return false;
    }
}
