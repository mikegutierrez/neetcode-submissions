class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            const neededVal = target - value;
            
            if (numsMap.has(neededVal)) {
                return [numsMap.get(neededVal), i]
            }

            numsMap.set(value, i);
        }
    }
}
