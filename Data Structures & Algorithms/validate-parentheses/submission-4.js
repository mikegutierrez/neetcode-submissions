class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenDict = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        const stack = [];

        for (const char of s) {
            if (!parenDict[char]) {
                stack.push(char);
            } else if (stack.pop() !== parenDict[char]) {    
                return false;
            }
        }
        return stack.length === 0;
    }
}
