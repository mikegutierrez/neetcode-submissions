class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs.length) return [strs];

        const strsMap = {};

        for (const str of strs) {
            const sorted = str.split('').sort().join();
            if (strsMap[sorted]) {
                strsMap[sorted] = [...strsMap[sorted], str]
            } else {
                strsMap[sorted] = [str]
            }
        }

        return Object.values(strsMap);
    }
}
