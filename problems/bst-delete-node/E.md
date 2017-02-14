## Delete Node from a BST

Write a method `Node delete(Node root, int key)` to delete a Node in a [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree). The `delete` method should return the root of the resulting tree.

### Examples

Example 1: Given the below tree, delete 2:
```
       10                     10
      /  \                   /  \
     5    15       ->       5    15
    / \    \                 \     \
   2   6    20                6    20
```

Example 2: Given the below tree, delete 5:
```
       10                     10
      /  \                   /  \
     5    15       ->       6    15
      \    \                       \
       6    20                     20
```

Example 3: Given the below tree, delete 10:
```
       10                     6
      /  \                   /  \
     5    15       ->       5    15
    / \    \               /      \
   2   6    20            2        20
```

### Solution

```java
private TreeNode deleteNode(TreeNode root, int key) {
    if(root == null) return null;
    
    if(key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    if(key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    
    if(key == root.val) {
         // this node is the value we're deleting
         
        if(root.left == null && root.right == null) {
            // both children are null, return null
            return null;
        }
        
        if(root.left == null) {
            return root.right;
        }
        
        if(root.right == null) {
            return root.left;
        }
        
        // both left and right exist
        int minFromRight = minFromRight(root);
        root.val = minFromRight;
        root.right = deleteNode(root.right, minFromRight);
    }
    
    return root;
}
```