## Convert BST to DLL

Convert a [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) to a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list)

Example: Given the below tree as `root`, your method should return `(2) <=> (5) <=> (6) <=> (10) <=> (15) <=> (20)`.
```
       10
      /  \
     5    15 
    / \     \
   2   6     20
```

### Solution
```java
Node root;  //root of BST
Node head;  //head of DLL
Node prev = null;

public void bst2dll(Node root) {
    if (root == null)
        return;
    
    bst2dll(root.left);

    if (prev = null)
        head = root;
    else {
        root.left = prev;
        prev.right = root;
    }

    prev = root;

    bst2dll(root.right);
}
```
