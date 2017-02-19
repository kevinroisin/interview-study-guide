## Path Sum

Given a [binary tree](https://en.wikipedia.org/wiki/Binary_tree), write a method that returns a path from root to leaf that sums to a given integer, `x`.

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

### Solution Bottom Up
```java
public  Stack<Node> pathSum(Node node, int x, int currSum) {		
	if (node == null) {
		return null;
	}
	
       currSum += node.value;
		
	// leaf node
	if (node.left == null && node.right == null) {
		if (currSum == x){
			Stack<Node> path = new Stack<Node>();
			path.push(node);
			return path;
		}
	}
		
	Stack<Node> path = pathSum(node.left, x, currSum);
	if (path != null) {
		path.push(node);
		return path;
	}
		path = pathSum(node.right, x, currSum);
	if (path != null) {
		path.push(node);
		return path;
	}
		
	return null;
}


```
### Solution Top Down


```java
public static LinkedList<Node> pathSum(Node root, int x) {
    if(root == null) return null;
    LinkedList<Node> path = new LinkedList<Node>();
    pathSumHelper(root, x, path, 0);
    return path;
}

private static boolean pathSumHelper(Node root, int x, LinkedList<Node> path, int currSum) {
    if(root == null) return false;
    
    path.addLast(root);  // add current node to the path
    
    currSum += root.val;  // add root to the currSum
    
    if(root.left == null && root.right == null) { // we're at a leaf node
        if(currSum == x) {  // check if this is the path summed to target x
            return true;
        }
        
    } else {
        boolean leftPathSumsToX = pathSumHelper(root.left, x, path, currSum);
        if(leftPathSumsToX) return true;
        
        boolean rightPathSumsToX = pathSumHelper(root.right, x, path, currSum);
        if(rightPathSumsToX) return true;
    }
    
    // remove the node from the path (backtrack)
    // note: we do not need to remove the current node from currSum, since it is passed by value
    path.removeLast();

    return false;
}
```
