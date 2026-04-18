class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequentSort(nums, k) {
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

    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const num in count) {
            freq[count[num]].push(num);
        }
        
        const output = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const num of freq[i]) {
                output.push(num)
            }
            if (output.length === k) return output;
        }
    }
}
