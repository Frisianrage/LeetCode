/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const hashMap = new Map()
    for(let j = 0; j < nums.length; j++) {
        //calculating the needed difference between the actual number of the array and the target number
        const diff = target - nums[j]
        //checking if the difference is already in the hashMap
        if( hashMap.has(diff) ){
            //returns the value of the hashMap and j as the index of the number in the array
            return [hashMap.get(diff), j]
        } 
        //adding the number in the array as the key and the index of the number of the array as the value to the hashMap
        hashMap.set(nums[j], j)
    }
    
};

/*
Runtime: 88 ms, O(n)
Memory Usage: 42.7 MB, O(n)
*/