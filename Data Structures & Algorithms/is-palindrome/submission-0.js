class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isPalindrome(s) {
    //     // BROOT
    //     const regex = /^[a-zA-Z0-9]+$/;
    //     const isAlphaNumeric = (val) => regex.test(val);
    //     const alphaNumericS = s.split('').filter(isAlphaNumeric).join('').toLowerCase();
    //     return alphaNumericS.split('').reverse().join('') == alphaNumericS;
    // }

    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/;
        const isAlphaNumeric = (val) => regex.test(val);
        const alphaNumericS = s.split('').filter(isAlphaNumeric).join('').toLowerCase();

        let right = alphaNumericS.length - 1;
        for (let left = 0; left < alphaNumericS.length; left++) {
            if (alphaNumericS[left] >= alphaNumericS[right]) {
                right--;
            } else {
                return false
            }
        }
        return true;
    }
}