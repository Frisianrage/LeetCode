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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */


 var isSubtree = function(root, subRoot) {
    
    var isSameTree = function(p, q) {
    if(!p && !q) return true
    if (!p || !q || p.val !== q.val) return false
    if(p && q && p.val == q.val){
        return (isSameTree(p.right, q.right) && isSameTree(p.left, q.left))
    }
    
    return false 
};
    
    
    if(!subRoot) return true
    if(!root) return false
    
    if(isSameTree(root, subRoot)) return true
     
    return (isSubtree(root.right, subRoot) || (isSubtree(root.left, subRoot)))
        
};

/*
Runtime: 136 ms,
Memory Usage: 48.8 MB
*/