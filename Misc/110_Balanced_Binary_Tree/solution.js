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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    let dFS = function(root){
        if(!root) return [true, 0]
        
        let left = dFS(root.left)
        let right = dFS(root.right)
        
        let balanced = (right[0] && left[0] && (Math.abs(left[1] - right[1]) <= 1))
        
        return [balanced, (1 + Math.max(left[1], right[1]))]
    }
    
    const res = dFS(root)[0]
    
    return res
};

/*
Runtime: 95 ms, 
Memory Usage: 49.5 MB
*/