## Path Sum

Given a [binary tree](https://en.wikipedia.org/wiki/Binary_tree), write a method `LinkedList<Node> pathSum(Node root, int x)` that returns a path from root to leaf that sums to a given integer, `x`.

Example:

```
       20
      /  \
     10  30
        /  \
       25   40

pathSum(root, 30) -> (20) -> (10)
pathSum(root, 75) -> (20) -> (30) -> (25)
pathSum(root, 90) -> (20) -> (30) -> (40)
pathSum(root, 120) -> empty list 
```

### Solution


```java
public static LinkedList<Node> pathSum(Node root, int x) {
    if(root == null) return null;
    LinkedList<Node> path = new LinkedList<Node>();
    pathSumHelper(root, x, path, 0);
    return path;
}

private static boolean pathSumHelper(Node root, int x, LinkedList<Node> path, int sumSoFar) {
    
    if(root == null) return false;
    
    // add current node to the path
    path.addLast(root);
    
    // add root to the sumSoFar
    sumSoFar += root.val;
    
    if(root.left == null && root.right == null) { // we're at a leaf node, check if this is the path summed to target x
        if(sumSoFar == x) {
            return true;
        }
        
    } else {
        boolean leftPathSumsToX = pathSumHelper(root.left, x, path, sumSoFar);
        if(leftPathSumsToX) return true;
        
        boolean rightPathSumsToX = pathSumHelper(root.right, x, path, sumSoFar);
        if(rightPathSumsToX) return true;
    }
    
    // remove the node from the path (backtrack)
    // note: we do not need to remove the current node from sumSoFar, since it is passed by value
    path.removeLast();

    return false;
}
```