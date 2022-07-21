/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root == null) return 0
    
    let res = 1
    let leftCounter = 1
    let rightCounter = 1
    
    leftCounter += maxDepth(root.left)
    rightCounter += maxDepth(root.right)
    
    if (leftCounter > rightCounter){
        res = leftCounter
    } else {
        res = rightCounter
    }
    
    return res
};

/*
Runtime: 251 ms, 
Memory Usage: 49.9 MB
*/