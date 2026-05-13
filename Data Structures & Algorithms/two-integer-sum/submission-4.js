class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};
        for (let i = 0; i < nums.length; i++) {
            numsMap[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            const needed = String(target - nums[i]);
            const targetIdx = numsMap[needed]
            if (needed in numsMap && i !== targetIdx) {
                return [i, targetIdx];
            }
        }

        return [];
    }
}
