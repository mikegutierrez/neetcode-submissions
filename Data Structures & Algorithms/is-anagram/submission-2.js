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
            const sLetter = s[i];
            const tLetter = t[i];
            sFreq[sLetter] = (sFreq[sLetter] || 0) + 1;
            tFreq[tLetter] = (tFreq[tLetter] || 0) + 1;
        }

        for (const letter in sFreq) {
            if (sFreq[letter] !== tFreq[letter]) return false;
        }

        return true;
    }
}
