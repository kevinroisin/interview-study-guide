## Count Leaf Nodes

Return the number of leaf nodes of a binary tree.

Example: Given the following binary tree, return `3` (Nodes 2, 6, 15)
```java
       10
      /  \
     5    15
    / \     
   2   6   
```


### Solution
```java
public int countLeafNodes(Node node) {
    if (node == null) {
        return 0;
    }
    
    if (node.left == null && node.right == null) {
        return 1;
    }
    
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}
```