/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let arr = []
    let index
    for (let i = 0; i < nums1.length; i++){
        //checks if single number from nums1 exists in nums2
        if(nums2.includes(nums1[i])){
            //if it exists then it gets pushed into new arr
            arr.push(nums1[i])
            //the number then gets deleted from the num2 array (necessary bc of possible double numbers etc.)
            nums2.splice(nums2.findIndex(element => element == nums1[i]), 1)
        }
    }
    return arr
};