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

        // create an array of sub arrays of key and value from freq
        const arr = Object.entries(freq).map(([n, f]) => [f, parseInt(n)]);
        // sort it by freq value from most freq to least freq
        arr.sort((a, b) => b[0] - a[0]);
        // slice array to only have k most req arrays
        // return num from sub arrays
        return arr.slice(0, k).map((pair) => pair[1]);
    }
}
