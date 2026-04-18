class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const window = new Set();
        let max = 0;
        let left = 0;
        let right = 0;
        while (right < s.length) {
            const leftVal = s[left];
            const rightVal = s[right];

            if (!window.has(rightVal)) {
                window.add(rightVal);
                right++;
                max = (right - left > max) ? right - left : max ;
            } else {
                window.delete(leftVal);
                left++;
            }
        };
        return max;
    }
}
