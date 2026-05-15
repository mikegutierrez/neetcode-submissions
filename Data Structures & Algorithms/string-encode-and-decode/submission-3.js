class Solution {
    constructor() {
        this.separator = '+';
        this.lengths = [];
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return '';

        for (const string of strs) {
            this.lengths.push(String(string.length));
        }

        const sizes = [...this.lengths];
        sizes.push(this.separator);
        sizes.push(strs.join(''));
        return sizes.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str.length) return [];

        const stopIdx = str.indexOf(this.separator);
        let message = str.slice(stopIdx + 1, str.length);

        return this.lengths.map((size) => {
            const string = message.substring(0, size);
            message = message.slice(size);
            return string;
        })
    }
}
