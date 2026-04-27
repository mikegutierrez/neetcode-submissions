class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // O(m log n)
    searchMatrixFirstPass(matrix, target) {
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

    // O(log(m * n))
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / n);
            const col = mid % n;
            const midVal = matrix[row][col];

            if (midVal === target) return true;
            if (target < midVal) right = mid - 1;
            if (target > midVal) left = mid + 1;
        }
        return false;
    }
}
