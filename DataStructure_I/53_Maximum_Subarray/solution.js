/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    function maxSum(min, max) {
       if (min < max) {
           // the current middle index
           const mid = Math.floor((min+max)/2)
           
           // the three sums to compare
           const leftSum = maxSum(min, mid)
           const rightSum = maxSum(mid+1, max)
           const crossSum = maxCrossSum(min, mid, max)
           
           // choosing the biggest one
           const leftOrRight = Math.max(leftSum, rightSum)
           return Math.max(leftOrRight, crossSum)
       }
       // if min == max, return the first or single value 
       else return nums[min]
   }
   
   function maxCrossSum(min, mid, max) {
       // find left side max
       let maxLeft = sumLeft = nums[mid]        
       for(let i = mid-1; i >= min; i--) {  
           sumLeft = sumLeft + nums[i]
           maxLeft = (sumLeft > maxLeft) ? sumLeft : maxLeft
       }
       
       // find right side max
       let maxRight = sumRight = nums[mid+1]
       for(let i = mid+2; i <= max; i++) {
           sumRight = sumRight + nums[i]
           maxRight = (sumRight > maxRight) ? sumRight : maxRight
       }

       return maxLeft + maxRight
   }
       
   // call the recursive function for the full nums array
   return maxSum(0, nums.length-1)
};

/*
Runtime: 145 ms,
Memory Usage: 51.1 MB, 
*/