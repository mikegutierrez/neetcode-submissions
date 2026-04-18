class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = 0;

        for (let sell = 0; sell < prices.length; sell++) {
            const buyPrice = prices[buy];
            const sellPrice = prices[sell];

            if (sellPrice < buyPrice) {
                buy = sell;
            }
            if (sellPrice > buyPrice) {
                const potentialProfit = sellPrice - buyPrice;
                if (potentialProfit > profit) profit = potentialProfit;
            }
        }

        return profit
    }
}
