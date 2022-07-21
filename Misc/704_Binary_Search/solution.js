/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right){
        let mid = Math.floor((left + right) / 2)
        if(target == nums[mid]) {
            return mid
        } else if(target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return - 1
};

/*
Runtime: 96 ms, O(log n)
Memory Usage: 45.1 MB, 
*/