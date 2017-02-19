## Print Top View of Binary Tree

Given a binary tree, print the the top view

Example: Given the following tree, print `10  20  30  40  28`

```
       20                                       20
      /  \                                     /  \
     10  30                                   10   30
        /  \                                         \
       25   40                   top view:           40
        \                                              \
         26                                             28
           \
            27
              \
               28
```

### Solution
```java
public void printTopView(Node root) {
	if (root == null) {
		return;
	}
	
	//key = distance from root, value = node
	HashMap<Integer, Node> hmap = new HashMap<Integer, Node>(); 
	int min = Integer.MAX_VALUE;  // used for printing
	int max = Integer.MIN_VALUE;  // used for printing
	
	LinkedList<DistNode> queue = new LinkedList<DistNode>();
	queue.add(new DistNode(root, 0));
	
	while (!queue.isEmpty()) {
		DistNode curr = queue.remove();
		
		if (hmap.get(curr.distance) == null) {
			hmap.put(curr.distance, curr.node);
			if (curr.distance < min) {
				min = curr.distance;
			} else if (curr.distance > max) {
				max = curr.distance;
			}
		}
		
		if (curr.node.left != null) {
			queue.add(new DistNode(curr.node.left, curr.distance-1));
		}
		if (curr.node.right != null) {
			queue.add(new DistNode(curr.node.right, curr.distance+1));
		}
	}
	
	for (int i = min; i < max; i++) {
		System.out.print((hmap.get(i)).value + "  ");
	}
}
```
