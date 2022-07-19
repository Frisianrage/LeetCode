/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //brute force way
    for(let j = 0; j < nums.length; j++) {
        for (let i = 1; i < nums.length; i++) {
            if((nums[i] + nums[j] == target) && i != j) {
                return [j, i]
            }  
        }
    }
    
};

/*
Runtime: 184 ms, O(n²)
Memory Usage: 42.5 MB, O(n)
*/