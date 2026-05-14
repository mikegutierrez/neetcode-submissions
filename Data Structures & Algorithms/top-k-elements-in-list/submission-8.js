class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // build frequency counter
        const freqMap = {};
        for (const num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        // create array of entries sorted by value, largest to smallest
        const entries = Object.entries(freqMap).sort(([, aVal], [, bVal]) => bVal - aVal);

        // return first k keys in entries in array
        return entries.slice(0, k).map(([k, v]) => k);
    }
}
