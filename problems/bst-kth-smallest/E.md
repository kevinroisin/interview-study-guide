## BST Kth Smallest

Write a method `Node kthSmallest(Node root, int k)` to return the Kth smallest element of a [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree).

Example, given the below tree as root, and `k = 3`, your method should return `6`.
```
       10
      /  \
     5    15
    / \    \
   2   6    20
```

### Solution

```java
public Node kthSmallest(Node root, int k) {
    if(k == null) return null; // handle invalid input

    // create a stack to help us iteratively do inorder DFS
    Stack<Node> stack = new LinkedList<Node>();

    // while the stack isn't empty or the root isn't null, we haven't visited all the nodes
    while(!stack.isEmpty() || root != null) {
        if(root != null) {
            // root is not null, so we add it to the stack and go left
            stack.push(root);
            root = root.left;
        } else {
            // root is null, so we pop from the stack
            root = stack.pop();
            k--; // we decrement k since we have seen a node either k or smaller than k

            // when k is 0, we are at the kth smallest node
            if(k == 0) return root;
           
            // if we haven't yet traversed to the kth smallest node, we should traverse the right subtree if there is one
            root = root.right;
        }
    }

    return null; // if we get here, k is larger than the BST
    
}
```