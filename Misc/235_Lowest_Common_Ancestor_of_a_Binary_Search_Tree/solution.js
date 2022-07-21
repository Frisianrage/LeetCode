/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let curr = root
    
    while(curr){
        if (p.val > curr && q.val > curr){
            curr = curr.right
        } else if (p.val < curr && q.val < curr){
            curr = curr.right
        } else {
            return curr
        }
    }
};

/*
Runtime: 123 ms, 
Memory Usage: 52.6 MB, less than 18.60%
*/