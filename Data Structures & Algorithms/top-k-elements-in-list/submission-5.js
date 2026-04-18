class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }
        const arr = Object.entries(freq).map(([n, f]) => {
            return [f, parseInt(n)];
        });
        const sorted = arr.sort((a, b) => b[0] - a[0]);
        return sorted.map((s) => s[1]).slice(0, k);
    }
}
