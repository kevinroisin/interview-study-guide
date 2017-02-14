## Left Nodes

Return the number of left nodes in a binary tree.

Example: Given the following binary tree, return `2` (5 and 2)
```java
       10
      /  \
     5    15
    / \     
   2   6   
```


### Solution
```java
public int countLeftNodes(Node node) {
    return (node.left == null ? 0 : countLeftNodes(node.left) + 1) 
           + (node.right == null ? 0 : countLeftNodes(node.right));
}
```