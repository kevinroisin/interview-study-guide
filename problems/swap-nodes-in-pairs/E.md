## Swap Nodes in Pairs
Given a singly linked list, swap nodes in pairs.

Example:
Given `(1) -> (2) -> (3) -> (4) -> (5)`, return `(2) -> (1) -> (4) -> (3) -> (5)`


### Recursive Solution
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


### Iterative Solution
```java
public static Node swapInPairs(Node n) {
	Node start = new Node(); // fake head so we can swap the next 2 nodes
	start.next = n;
	
	head = start;
	
	while(head.next != null && head.next.next != null) {
		// save head.next;
		Node oldNext = head.next;
		Node nextNext = head.next.next.next;
		head.next = head.next.next;
		head.next.next = oldNext;
		head.next.next.next = nextNext;
		
		head = head.next.next;
    }
    
    return start.next; // return the first node after the fake head
}
```