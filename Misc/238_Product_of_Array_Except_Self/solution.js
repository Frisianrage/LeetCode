/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const numsLength = nums.length
    
    const leftproducts = new Array(numsLength).fill(0)
    let rightproducts = new Array(numsLength).fill(0)
    
    leftproducts[0] = 1
    
    rightproducts[numsLength-1] = 1
    
    for( let i = 1; i < numsLength; i++){
        leftproducts[i] = leftproducts[i-1] * nums[i-1]
    }
    
    for(let i = numsLength-2; i >= 0; i--){
        rightproducts[i] = rightproducts[i+1] * nums[i+1]
    }
    
    for(let i = 0; i < numsLength; i++){
         nums[i] = leftproducts[i] * rightproducts[i]
    }
    
    return nums
};


/*
Runtime: 216 ms
Memory Usage: 54.8 MB
*/