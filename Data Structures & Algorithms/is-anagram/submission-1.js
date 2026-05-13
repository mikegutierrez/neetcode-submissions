class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sFreq = {};
        const tFreq = {};

        for (let i = 0; i < s.length; i++ ) {
            const letter = s[i];
            sFreq[letter] = (sFreq[letter] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++ ) {
            const letter = t[i];
            tFreq[letter] = (tFreq[letter] || 0) + 1;
        }

        for (const letter in sFreq) {
            if (sFreq[letter] !== tFreq[letter]) return false;
        }

        return true;
    }
}
