/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //initialize the maximun subarray with the first element as the default
    let maxSub = nums[0]
    
    let currSum = 0
    
    for(let i = 0; i < nums.length; i++){
        //if current sum gets below 0 it gets reseted to 0 so the calculating begins new
        if(currSum < 0){
            currSum = 0
        }
        //adding the current number in the array to the current sum
        currSum += nums[i]
        //checking if the current sum is higher than the already existing maximum subarray
        maxSub = Math.max(maxSub, currSum)
    }
    return maxSub
};

/*
Runtime: 76 ms, O(n)
Memory Usage: 50.4 MB, O(n)
*/