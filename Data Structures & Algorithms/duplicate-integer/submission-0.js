class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const numsObj = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         const val = nums[i];
    //         if (!numsObj[val]) {
    //             numsObj[val] = val
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // hasDuplicate(nums) {
    //     const numsObj = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         const val = nums[i];
    //         if (!(val in numsObj)) {
    //             numsObj[val] = val
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    hasDuplicate(nums) {
        const numsSet = new Set(nums);
        return numsSet.size !== nums.length;
    }
}
