class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sFreqMap = {};
        const tFreqMap = {};

        for (let i = 0; i < s.length; i++) {
            sFreqMap[s[i]] = (sFreqMap[s[i]] || 0) + 1;
            tFreqMap[t[i]] = (tFreqMap[t[i]] || 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            if (sFreqMap[s[i]] !== tFreqMap[s[i]]) return false;
        }

        return true;
    }
}
