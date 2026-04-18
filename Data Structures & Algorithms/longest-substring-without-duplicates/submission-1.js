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
                max = Math.max(max, right - left) ;
            } else {
                window.delete(leftVal);
                left++;
            }
        };
        return max;
    }
}
