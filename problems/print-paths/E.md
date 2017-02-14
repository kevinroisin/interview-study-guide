## Print Paths in Binary Tree

Given a [binary tree](https://en.wikipedia.org/wiki/Binary_tree), write a method `void printPaths(Node root)` that prints all the possible root to leaf paths in the tree.

Example:

```
       20
      /  \
     10  30
        /  \
       25   40
```

Outputs:
```
20, 10, 
20, 30, 25, 
20, 30, 40, 
```

### Solution

```java
public static void printPaths(Node root) {
    if(root == null) return;
    LinkedList<Node> path = new LinkedList<Node>();
    printPathsHelper(root, path);
}

private static void printPathsHelper(Node root, LinkedList<Node> path) {
    
    // base case
    if(root == null) return;
    
    // add current node to the path
    path.addLast(root);
    
    if(root.left == null && root.right == null) { // we're at a leaf node, so print the path
        Iterator<Node> iter = path.iterator();
        while(iter.hasNext()) {
            System.out.print(iter.next().val + ", ");
        }
        System.out.println(); // blank line
    } else {
        printPathsHelper(root.left, path);
        printPathsHelper(root.right, path);
    }
    
    // remove this node from the path (backtrack) before returning
    path.removeLast();
    
}
```