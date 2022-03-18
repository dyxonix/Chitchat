"use strict"


function profit(prices) {
    if (prices.length >= 1 && prices.length <= 3 * Math.pow(10, 4)) {

        let i = 0

        if (prices[i] >= 0 && prices[i] <= Math.pow(10, 4)) {


            if (prices[i] <= Math.pow(10, 4) && prices[i] >= 0) {

                if (prices.length < 2) return 0
                let result = 0
                let maxProfit = 0
                let currProfit = 0

                while (i < prices.length - 1) {
                    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
                    if (i == prices.length - 1) break;
                    maxProfit = i++;
                    while (i < prices.length && prices[i] >= prices[i - 1]) i++;
                    currProfit = i - 1;
                    result = result + prices[currProfit] - prices[maxProfit];
                }
                return result;
            }
        }
    }
    return (result > 0) ? result : 0;

}



console.log(profit([7, 1, 5, 3, 6, 4]));
console.log(profit([1, 2, 3, 4, 5]));
console.log(profit([7, 6, 4, 3, 1]));
