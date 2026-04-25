class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let midIdx = Math.floor((left + right) / 2); 
            let midVal = nums[midIdx];
            if (target === midVal) return midIdx;
            if (target < midVal) right = midIdx - 1;
            if (target > midVal) left = midIdx + 1;
        }
        return -1;
    }
}
