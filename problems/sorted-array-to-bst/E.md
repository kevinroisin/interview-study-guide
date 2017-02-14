## Sorted Array to BST

Write a method `Node sortedArrayToBST(int[] arr, int low, int high)` which takes a sorted arrays, creates a [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree) from it, and returns the root

Example: Given a sorted integer array of `2,5,6,10,15,20`, your `sortedArrayToBST` method should return the below tree.
```
       10
      /  \
     5    15
    / \    \
   2   6    20
```

### Solution
```java
public Node sortedArrayToBST(int[] arr, int low, int high) {
    if (low > high) {
        return null;
    }
    
    int midpt = low + (high - low) / 2;
    
    Node node = new Node(arr[midpt]);
    
    node.left = sortedArrayToBST(arr, low, midpt-1);
    node.right = sortedArrayToBST(arr, mid+1, high);
    
    return node;
}
```