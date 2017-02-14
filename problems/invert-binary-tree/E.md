## Invert a Binary Tree

Given a[binary tree](https://en.wikipedia.org/wiki/Binary_tree), write a method `invertTree(Node root)` which inverts the tree at each level.

### Example
```
       10                     10
      /  \                   /  \
     5    15       ->       15   5
    / \    \               /    / \
   2   6    20            20   6   2
```

### Solution
```java
public void invertTree(TreeNode root) {
    if(root == null) return null;
    
    TreeNode tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    invertTree(root.left);
    invertTree(root.right);
}
```
