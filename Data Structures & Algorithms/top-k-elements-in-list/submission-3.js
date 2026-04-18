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

        const output = Object.entries(freq).map(([n, f]) => [f, parseInt(n)]);
        output.sort((a, b) => b[0] - a[0]);
        return output.slice(0, k).map((pair) => pair[1])
    }
}
