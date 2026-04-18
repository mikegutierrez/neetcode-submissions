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

        for (let i = 0; i < s.length; i++) {
            const val = s[i];
            const isOpener = !parenDict[val];
            if (isOpener) {
                stack.push(val);
            } else {    
                const topOfStackVal = stack[stack.length - 1];
                if (parenDict[val] === topOfStackVal) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
