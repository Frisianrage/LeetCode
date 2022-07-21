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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    //base case
    if(root == null) return null
    
    //storing the right value in a temporary variable
    let tmp = root.right
    //then swap the values
    root.right = root.left
    root.left = tmp
    
    //recursive call to swap the following children
    invertTree(root.right)
    invertTree(root.left)
    
    return root   
};

/*
Runtime: 72 ms, 
Memory Usage: 42.5 MB, 
*/