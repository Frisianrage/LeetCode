/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //sliding window
    let set = new Set()
    let res = 0
    let left = 0
    
    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            //if the right pointer is in the set then delete the left pointer from the set
            set.delete(s[left])
            //move the pointer +1
            left += 1
        }
        //adding the right pointer to the set
        set.add(s[right])
        //checking if the current set is longer then the existing res
        res = Math.max(res, right - left + 1)
    }
    
    return res
};

/*
Runtime: 94 ms, O(n)
Memory Usage: 46.4 MB, O(n)
*/