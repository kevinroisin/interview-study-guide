## Is Valid BST

Given a binary tree, determine if the tree is a valid [binary search tree (BST)](https://en.wikipedia.org/wiki/Binary_search_tree)

### Solution
```java
// call isBST with root, Integer.MIN_Value, Integer.MAX_VALUE
public boolean isBST(Node node, int minBound, int maxBound) {
    if (node == null) {
        return true;
    }

    if (node.value <= minBound || node.value >= maxBound)
        return false;

    // left node needs to be smaller than current node and all it's predecessors
    // right node needs to be larger than current node and all it's predecessors
    return isBST(node.left,minBound,node.value) && isBST(node.right,node.value,maxBound);
}
```
