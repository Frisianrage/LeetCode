/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buy = 0; //buying l
    let sell = 1; // selling r
    let max = 0;
    while(sell < prices.length){
        if(prices[buy] < prices[sell]){
            // We have a profit
            max = Math.max(max, prices[sell] - prices[buy]);
        }else{
            // Make left the lowest by putting it at right
            buy = sell;
        }
        sell++;
    }
    return max;
    
};