class Solution {
    isPalindromeBruteForce(s) {
        let newStr = '';
        for (const c of s) {
            if (this.isAlphaNumeric(c)) {
                newStr += c.toLowerCase();
            }
        }
        return newStr.split('').reverse().join('') === newStr;
    }

    isAlphaNumeric(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') || 
            (c >= '0' && c <= '9')
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (!this.isAlphaNumeric(s[left]) && left < right) {
                left++;
            }
            while (!this.isAlphaNumeric(s[right]) && right > left) {
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
