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
 var diameterOfBinaryTree = function(root) {
    let res = 0
    
    let dFS = function(root){
        if(!root) return -1
        
        let left = dFS(root.left)
        let right = dFS(root.right)
        
        res = Math.max(res, (2 + left + right))
        
        return 1 + Math.max(left, right)
    }
    
    dFS(root)
    
    return res
    
    
};

/*
Runtime: 76 ms, 
Memory Usage: 45.3 MB
*/