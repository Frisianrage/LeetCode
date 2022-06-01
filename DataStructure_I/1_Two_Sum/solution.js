/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for(let j = 0; j < nums.length; j++) {
        for (let i = 1; i < nums.length; i++) {
            if((nums[i] + nums[j] == target) && i != j) {
                return [j, i]
            }  
        }
    }
    
};