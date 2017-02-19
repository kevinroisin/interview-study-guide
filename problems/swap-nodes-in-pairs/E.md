## Swap Nodes in Pairs
Given a singly linked list, swap nodes in pairs.

Example:
Given `(1) -> (2) -> (3) -> (4) -> (5)`, return `(2) -> (1) -> (4) -> (3) -> (5)`


### Solution
```java
public static Node swapInPairs(Node nodeA) {	
		if (nodeA == null) {
			return null;
		}
		
		Node nodeB = nodeA.next;
		if (nodeB == null) {  // odd length list (no swapping needed)
			return nodeA;
		}
		
		nodeA.next = swapInPairs(nodeB.next);  //send start of next pair
		nodeB.next = nodeA; //swap
		
		return nodeB;  // new head (original second element) or first if length = 1
	}
  ```
